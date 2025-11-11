import React, { useState, useEffect } from 'react';
import { GlassCard, StatCard } from '../UI/Cards';
import { PrimaryButton } from '../UI/Buttons';
import { handleAttendanceClock, submitPermissionRequest } from '../../api/dataApi';
import { showSwal } from '../../utils/swal';
import CameraModal from '../Shared/Modals/CameraModal';
import PermissionModal from '../Shared/Modals/PermissionModal';

const EmployeeAttendance = ({ user, employees, setEmployees, workSettings }) => {
    const [lastAttendance, setLastAttendance] = useState(null);
    const [attendanceHistory, setAttendanceHistory] = useState([]);
    const [groupedAttendance, setGroupedAttendance] = useState([]);
    const [isClocking, setIsClocking] = useState(false);
    const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
    const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
    const [attendanceType, setAttendanceType] = useState('');
    const [isSuccessEffect, setIsSuccessEffect] = useState(false);
    const [locationStatus, setLocationStatus] = useState('');
    const [pendingPermission, setPendingPermission] = useState(null);

    const WORK_START = workSettings?.startTime || "08:00";
    const WORK_END = workSettings?.endTime || "17:00";

    const isClockedIn = lastAttendance && lastAttendance.type === 'Clock In';
    const totalLate = attendanceHistory.filter(a => a.isLate).length;
    const totalEarlyOut = attendanceHistory.filter(a => a.isEarlyLeave).length;

    useEffect(() => {
        const history = user.currentMonthAttendance || [];
        setAttendanceHistory(history);
        if (history.length > 0) {
            const sorted = [...history].sort((a, b) => {
                const dateA = new Date(`${a.date} ${a.time}`);
                const dateB = new Date(`${b.date} ${b.time}`);
                return dateB - dateA;
            });
            setLastAttendance(sorted[0]);
        }
    }, [user.currentMonthAttendance]);

    // Group attendance by date
    useEffect(() => {
        const grouped = attendanceHistory.reduce((acc, record) => {
            const date = record.date;
            if (!acc[date]) {
                acc[date] = { 
                    clockIn: null, 
                    clockOut: null, 
                    late: false, 
                    earlyOut: false, 
                    reason: '',
                    status: 'Tepat Waktu',
                    permissionNote: '',
                    permissionFile: '',
                    hasPermission: false,
                    permissionType: '',
                    lateDuration: 0
                };
            }
            if (record.type === 'Clock In') {
                acc[date].clockIn = record.time;
                acc[date].late = record.isLate;
                acc[date].lateDuration = record.lateDuration || 0;
                if (record.isLate) {
                    acc[date].status = 'Terlambat';
                }
                if (record.reason) {
                    acc[date].reason = record.reason;
                }
                if (record.permissionNote) {
                    acc[date].permissionNote = record.permissionNote;
                    acc[date].hasPermission = true;
                    acc[date].permissionType = 'late';
                }
                if (record.permissionFile) {
                    acc[date].permissionFile = record.permissionFile;
                }
            } else if (record.type === 'Clock Out') {
                acc[date].clockOut = record.time;
                acc[date].earlyOut = record.isEarlyLeave;
                if (record.isEarlyLeave) {
                    acc[date].status = 'Pulang Cepat';
                }
                if (record.reason) {
                    acc[date].reason = record.reason;
                }
                if (record.permissionNote) {
                    acc[date].permissionNote = record.permissionNote;
                    acc[date].hasPermission = true;
                    acc[date].permissionType = 'early_out';
                }
                if (record.permissionFile) {
                    acc[date].permissionFile = record.permissionFile;
                }
            }
            return acc;
        }, {});

        const array = Object.keys(grouped).map(date => ({
            date,
            ...grouped[date]
        })).sort((a, b) => new Date(b.date) - new Date(a.date));

        setGroupedAttendance(array);
    }, [attendanceHistory]);

    // Check location permission on component mount
    useEffect(() => {
        if (navigator.geolocation) {
            setLocationStatus('Geolocation tersedia');
        } else {
            setLocationStatus('Geolocation tidak didukung');
        }
    }, []);

    // Function to calculate time difference in minutes
    const calculateTimeDifference = (time1, time2) => {
        const [hour1, minute1] = time1.split(':').map(Number);
        const [hour2, minute2] = time2.split(':').map(Number);
        const totalMinutes1 = hour1 * 60 + minute1;
        const totalMinutes2 = hour2 * 60 + minute2;
        return Math.abs(totalMinutes1 - totalMinutes2);
    };

    const handleClock = async (type) => {
        if (isClocking) return;
        setIsClocking(true);
        setAttendanceType(type);

        try {
            // Check location permission
            if (!navigator.geolocation) {
                showSwal('Error', 'Browser tidak mendukung geolocation', 'error');
                setIsClocking(false);
                return;
            }

            // Get current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    
                    // Check distance from office (PT Wilmar Bisnis Medan)
                    const officeLat = 3.5229276;
                    const officeLon = 98.6207397;
                    const distance = calculateDistance(latitude, longitude, officeLat, officeLon);
                    
                    if (distance > 1000) { // 1000 meter radius
                        showSwal(
                            'Lokasi Diluar Radius', 
                            `Anda berada ${distance.toFixed(0)} meter dari kantor. Maksimal radius 1000 meter.`, 
                            'error'
                        );
                        setIsClocking(false);
                        return;
                    }
                    
                    setLocationStatus(`Dalam radius (${distance.toFixed(0)}m)`);
                    
                    // Check if need permission (late clock in or early clock out)
                    const now = new Date();
                    const currentTime = now.toTimeString().slice(0, 5);
                    const isLate = type === 'In' && currentTime > WORK_START;
                    const isEarlyOut = type === 'Out' && currentTime < WORK_END;
                    
                    if (isLate || isEarlyOut) {
                        // Calculate late duration
                        let lateDuration = 0;
                        if (isLate) {
                            lateDuration = calculateTimeDifference(currentTime, WORK_START);
                        }
                        
                        // Show permission modal instead of camera
                        setPendingPermission({
                            type,
                            isLate,
                            isEarlyOut,
                            currentTime,
                            lateDuration
                        });
                        setIsPermissionModalOpen(true);
                        setIsClocking(false);
                    } else {
                        // Proceed directly to camera for selfie
                        setIsCameraModalOpen(true);
                        setIsClocking(false);
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                    showSwal(
                        'Error Lokasi', 
                        'Tidak dapat mengakses lokasi. Pastikan izin lokasi sudah diberikan.', 
                        'error'
                    );
                    setIsClocking(false);
                },
                { 
                    enableHighAccuracy: true, 
                    timeout: 10000, 
                    maximumAge: 0 
                }
            );

        } catch (err) {
            console.error('Gagal mendapatkan lokasi:', err.message);
            setIsClocking(false);
        }
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // Earth radius in meters
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Distance in meters
    };

    const onPermissionSubmit = async (permissionData) => {
        setIsPermissionModalOpen(false);
        
        try {
            // Submit permission request
            const permissionResult = await submitPermissionRequest(
                user,
                pendingPermission.type,
                permissionData,
                workSettings
            );

            if (permissionResult.success) {
                // Setelah izin disetujui, lanjutkan ke selfie untuk absensi
                setIsCameraModalOpen(true);
            }
        } catch (err) {
            console.error('Gagal mengajukan izin:', err);
            showSwal('Error', 'Gagal mengajukan permohonan izin', 'error');
            setIsClocking(false);
        }
    };

    const onCaptureConfirm = async (photoData) => {
        setIsCameraModalOpen(false);
        setIsClocking(true);

        try {
            const result = await handleAttendanceClock(
                user,
                attendanceType,
                photoData,
                workSettings,
                pendingPermission // Kirim data izin jika ada
            );

            if (result.success) {
                const { newRecord, newPhotoRecord } = result;

                setLastAttendance(newRecord);
                setAttendanceHistory(prev => [newRecord, ...prev]);
                setEmployees(prev =>
                    prev.map(emp =>
                        emp.id === user.id
                            ? {
                                  ...emp,
                                  currentMonthAttendance: [
                                      ...(emp.currentMonthAttendance || []),
                                      newRecord
                                  ],
                                  attendancePhotos: [
                                      ...(emp.attendancePhotos || []),
                                      newPhotoRecord
                                  ]
                              }
                            : emp
                    )
                );
                setIsSuccessEffect(true);
                setTimeout(() => setIsSuccessEffect(false), 2000);
                
                // Reset pending permission
                setPendingPermission(null);
            }
        } catch (err) {
            console.error('Proses absensi gagal:', err);
            showSwal('Error', 'Gagal melakukan absensi', 'error');
        } finally {
            setIsClocking(false);
        }
    };

    return (
        <>
            {/* Main Attendance Card */}
            <div className="mt-6 bg-white rounded-3xl shadow-lg border border-[#708993]/20 overflow-hidden">
                {isClocking && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-3xl">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#708993] mx-auto mb-4"></div>
                            <p className="text-[#708993] font-medium">Memproses absensi...</p>
                        </div>
                    </div>
                )}

                <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#708993] mb-2">
                            Halo, {user.name} 👋
                        </h2>
                        <p className="text-gray-600">
                            Silahkan absensi terlebih dahulu 
                        </p>
                    </div>

                    {/* Location Status */}
                    <div className="mb-6 p-4 bg-[#708993]/10 rounded-2xl border border-[#708993]/20">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-[#708993] flex items-center justify-center mr-3">
                                    <i className="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#708993] text-left">Status Lokasi</p>
                                    <p className="text-sm text-gray-600">{locationStatus}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Jam Kerja</p>
                                <p className="font-semibold text-[#708993]">{WORK_START} - {WORK_END}</p>
                            </div>
                        </div>
                    </div>

                    {/* Current Status */}
                    <div className={`text-center mb-8 p-6 rounded-2xl transition-all duration-500 ${
                        isSuccessEffect 
                            ? 'bg-green-100 border border-green-300' 
                            : 'bg-[#708993]/5 border border-[#708993]/10'
                    }`}>
                        <div className="flex items-center justify-center mb-4">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                isClockedIn ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                                <i className={`fas ${isClockedIn ? 'fa-check-circle' : 'fa-clock'} text-2xl ${
                                    isClockedIn ? 'text-green-600' : 'text-gray-400'
                                }`}></i>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 mb-1">Status Saat Ini</p>
                        <p className={`text-2xl font-bold mb-3 ${
                            isClockedIn ? 'text-green-600' : 'text-[#708993]'
                        }`}>
                            {isClockedIn ? 'SEDANG BEKERJA' : 'BELUM CLOCK IN'}
                        </p>
                        {lastAttendance && (
                            <p className="text-sm text-gray-500">
                                Terakhir: {lastAttendance.type} • {lastAttendance.date} • {lastAttendance.time}
                                {lastAttendance.lateDuration > 0 && (
                                    <span className="block text-xs text-yellow-600 mt-1">
                                        Terlambat {lastAttendance.lateDuration} menit
                                    </span>
                                )}
                                {lastAttendance.reason && (
                                    <span className="block text-xs text-gray-400 mt-1">
                                        Alasan: {lastAttendance.reason}
                                    </span>
                                )}
                                {lastAttendance.permissionNote && (
                                    <span className="block text-xs text-blue-400 mt-1">
                                        Izin: {lastAttendance.permissionNote}
                                    </span>
                                )}
                            </p>
                        )}
                    </div>

                    {/* Clock Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <button
                            onClick={() => handleClock('In')}
                            disabled={isClockedIn || isClocking}
                            className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center justify-center border-none focus:outline-none ${
                                isClockedIn
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#708993] hover:bg-[#5a6f7a] shadow-lg hover:shadow-xl'
                            }`}
                        >
                            <i className="fas fa-sign-in-alt mr-3 text-lg"></i>
                            {isClocking && attendanceType === 'In' ? (
                                <span>MEMPROSES...</span>
                            ) : (
                                <span>CLOCK IN</span>
                            )}
                        </button>

                        <button
                            onClick={() => handleClock('Out')}
                            disabled={!isClockedIn || isClocking}
                            className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center justify-center border-none focus:outline-none ${
                                !isClockedIn
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl'
                            }`}
                        >
                            <i className="fas fa-sign-out-alt mr-3 text-lg"></i>
                            {isClocking && attendanceType === 'Out' ? (
                                <span>MEMPROSES...</span>
                            ) : (
                                <span>CLOCK OUT</span>
                            )}
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                        <div className="bg-white p-4 rounded-2xl border border-[#708993]/10 shadow-sm">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-calendar-alt text-blue-600 text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Total Hari Kerja</p>
                                    <p className="text-2xl font-bold text-[#708993]">
                                        {attendanceHistory.filter(a => a.type === 'Clock In').length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-[#708993]/10 shadow-sm">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-hourglass-end text-yellow-600 text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Keterlambatan</p>
                                    <p className="text-2xl font-bold text-[#708993]">{totalLate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-[#708993]/10 shadow-sm">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-door-open text-red-600 text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Pulang Cepat</p>
                                    <p className="text-2xl font-bold text-[#708993]">{totalEarlyOut}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attendance History Card */}
            <div className="mt-6 bg-white rounded-3xl shadow-lg border border-[#708993]/20 overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#708993] mb-2">
                                Riwayat Absensi Bulan Ini
                            </h3>
                            <p className="text-gray-600">
                                Ringkasan kehadiran dan ketidakhadiran
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Tepat Waktu</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <span>Terlambat</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <span>Pulang Cepat</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                <span>Dengan Izin</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#708993] text-white">
                                    <th className="px-6 py-4 text-left font-semibold rounded-l-2xl">Tanggal</th>
                                    <th className="px-6 py-4 text-left font-semibold">Clock In</th>
                                    <th className="px-6 py-4 text-left font-semibold">Clock Out</th>
                                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                                    <th className="px-6 py-4 text-left font-semibold">Keterangan</th>
                                    <th className="px-6 py-4 text-left font-semibold rounded-r-2xl">Izin</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {groupedAttendance.map((record, index) => (
                                    <tr 
                                        key={record.date} 
                                        className="hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{record.date}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <div className="flex items-center">
                                                    <span className="font-medium text-gray-900">
                                                        {record.clockIn || '-'}
                                                    </span>
                                                    {record.late && (
                                                        <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full font-medium">
                                                            Terlambat
                                                        </span>
                                                    )}
                                                    {record.hasPermission && record.permissionType === 'late' && (
                                                        <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">
                                                            <i className="fas fa-file-alt mr-1"></i>
                                                            Izin
                                                        </span>
                                                    )}
                                                </div>
                                                {record.lateDuration > 0 && (
                                                    <span className="text-xs text-yellow-600 mt-1">
                                                        {record.lateDuration} menit
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="font-medium text-gray-900">
                                                    {record.clockOut || '-'}
                                                </span>
                                                {record.earlyOut && (
                                                    <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full font-medium">
                                                        Pulang Cepat
                                                    </span>
                                                )}
                                                {record.hasPermission && record.permissionType === 'early_out' && (
                                                    <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">
                                                        <i className="fas fa-file-alt mr-1"></i>
                                                        Izin
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                                record.status === 'Terlambat' 
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : record.status === 'Pulang Cepat'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-green-100 text-green-800'
                                            }`}>
                                                {record.status === 'Tepat Waktu' && (
                                                    <i className="fas fa-check-circle mr-1"></i>
                                                )}
                                                {record.status === 'Terlambat' && (
                                                    <i className="fas fa-clock mr-1"></i>
                                                )}
                                                {record.status === 'Pulang Cepat' && (
                                                    <i className="fas fa-running mr-1"></i>
                                                )}
                                                {record.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-600 text-sm">
                                                {record.reason || 'Tidak ada keterangan'}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4">
                                            {record.permissionNote ? (
                                                <div className="flex items-center">
                                                    <i className="fas fa-file-text text-blue-500 mr-2"></i>
                                                    <span className="text-blue-600 text-sm">
                                                        {record.permissionNote}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-sm">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {groupedAttendance.map((record) => (
                            <div key={record.date} className="bg-gray-50 rounded-2xl p-4 border border-[#708993]/10">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="font-semibold text-[#708993]">{record.date}</p>
                                        <div className="flex items-center mt-1">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                record.status === 'Terlambat' 
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : record.status === 'Pulang Cepat'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-green-100 text-green-800'
                                            }`}>
                                                {record.status}
                                            </span>
                                            {record.hasPermission && (
                                                <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">
                                                    <i className="fas fa-file-alt mr-1"></i>
                                                    Izin
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-600 mb-1">Clock In</p>
                                        <p className="font-medium text-gray-900">
                                            {record.clockIn || '-'}
                                            {record.late && (
                                                <span className="ml-1 text-yellow-600 text-xs">(Terlambat)</span>
                                            )}
                                        </p>
                                        {record.lateDuration > 0 && (
                                            <p className="text-xs text-yellow-600 mt-1">
                                                {record.lateDuration} menit
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Clock Out</p>
                                        <p className="font-medium text-gray-900">
                                            {record.clockOut || '-'}
                                            {record.earlyOut && (
                                                <span className="ml-1 text-red-600 text-xs">(Pulang Cepat)</span>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                {record.permissionNote && (
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <p className="text-gray-600 text-sm mb-1">Izin:</p>
                                        <p className="text-blue-600 text-sm">{record.permissionNote}</p>
                                        {record.permissionFile && (
                                            <div className="mt-1">
                                                <a href={record.permissionFile} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 underline">
                                                    Lihat Bukti Izin
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}
                                
                                {record.reason && (
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <p className="text-gray-600 text-sm mb-1">Keterangan:</p>
                                        <p className="text-gray-800 text-sm">{record.reason}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {groupedAttendance.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-clipboard-list text-gray-400 text-3xl"></i>
                            </div>
                            <p className="text-gray-500 text-lg font-medium mb-2">
                                Belum ada riwayat absensi
                            </p>
                            <p className="text-gray-400 text-sm">
                                Riwayat absensi bulan ini akan muncul di sini
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <CameraModal
                isOpen={isCameraModalOpen}
                onClose={() => setIsCameraModalOpen(false)}
                onCapture={onCaptureConfirm}
                user={user}
                title={`Clock ${attendanceType === 'In' ? 'IN' : 'OUT'} - Absensi Selfie`}
            />

            <PermissionModal
                isOpen={isPermissionModalOpen}
                onClose={() => {
                    setIsPermissionModalOpen(false);
                    setIsClocking(false);
                    setPendingPermission(null);
                }}
                onSubmit={onPermissionSubmit}
                user={user}
                permissionData={pendingPermission}
                workSettings={workSettings}
            />
        </>
    );
};

export default EmployeeAttendance;