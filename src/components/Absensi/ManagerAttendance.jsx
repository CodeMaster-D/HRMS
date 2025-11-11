// src/components/Absensi/ManagerAttendance.jsx
// Kode ini SAMA PERSIS dengan src/components/Absensi/EmployeeAttendance.jsx (jika Anda sudah memecahnya)
// Tujuannya agar logika absensi untuk Employee dan Manager berada di file yang sama
import React, { useState, useEffect, useMemo } from 'react';
import {  GlassCard, StatCard } from '../UI/Cards';
import { PrimaryButton } from '../UI/Buttons';
import CameraModal from '../../components/Shared/Modals/CameraModal';
import { handleAttendanceClock } from '../../services/DataService'; // Import logic absensi
import {  formattedCurrency } from '../../utils/formatters';
import { showSwal } from '../../utils/swal'; // Pastikan showSwal diimpor dari utils/swal.js

// --- A2/B7. Absensi Karyawan/Manajer (Absensi Saya) ---
const ManagerAttendance = ({ user, employees, setEmployees, workSettings }) => {
    // --- State & Handlers Absensi ---
    const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
    const [clockType, setClockType] = useState(null); // 'In' atau 'Out'
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Pastikan workSettings tidak null
    const safeWorkSettings = useMemo(() => workSettings || { 
        startTime: "08:00", 
        endTime: "17:00", 
        lateDeduction: 50000, 
        earlyLeaveDeduction: 75000 
    }, [workSettings]);

    // Update waktu setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Info absensi hari ini
    const today = currentDateTime.toLocaleDateString('id-ID');
    // --- PERBAIKAN DI SINI (Line 37) ---
    // Menggunakan Optional Chaining (?.) untuk mencegah error jika currentMonthAttendance undefined
    const userAttendanceToday = user.currentMonthAttendance?.filter(
        a => a.date === today
    ) || []; // Ditambah || [] untuk memastikan hasilnya array kosong jika data tidak ada

    const clockIn = userAttendanceToday.find(a => a.type === 'Clock In');
    const clockOut = userAttendanceToday.find(a => a.type === 'Clock Out');

    // Handler untuk membuka modal kamera
    const handleClock = (type) => {
        setClockType(type);
        setIsCameraModalOpen(true);
    };

    // Handler setelah foto berhasil diambil dan dikonfirmasi
    const handleCaptureConfirm = async (photoData, location) => {
        setIsCameraModalOpen(false);

        // Panggil service untuk memproses absensi
        const result = await handleAttendanceClock(
            user,
            clockType,
            photoData,
            location,
            safeWorkSettings,
            clockIn
        );

        if (result.success) {
            const { newRecord, newPhotoRecord } = result;
            
            // 1. Update data karyawan (attendance & photo)
            const updatedEmployees = employees.map(emp => {
                if (emp.id === user.id) {
                    // Pastikan currentMonthAttendance adalah array saat menambahkan
                    const currentAttendance = emp.currentMonthAttendance || [];
                    const currentPhotos = emp.attendancePhotos || [];
                    
                    return {
                        ...emp,
                        currentMonthAttendance: [...currentAttendance, newRecord],
                        attendancePhotos: [...currentPhotos, newPhotoRecord]
                    };
                }
                return emp;
            });
            
            // 2. Update state global dan AuthUser
            setEmployees(updatedEmployees);
            const updatedUser = updatedEmployees.find(e => e.id === user.id);
            if (updatedUser) {
                // Hapus logika setAuthUser karena komponen Manager/EmployeeDashboard yang harus menangani update user
                // Tapi untuk komponen ini, kita tetap update data lokalnya
                // (Asumsi setAuthUser dipanggil di App.jsx setelah setEmployees)
                // console.log("User updated:", updatedUser); 
            }
        }
    };
    
    // --- Render ---

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <i className="fas fa-clock mr-3 text-indigo-600"></i> Absensi Saya
            </h2>

            {/* Jam & Tanggal */}
            <GlassCard className="text-center mb-6">
                <p className="text-5xl font-extrabold text-blue-600">
                    {currentDateTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </p>
                <p className="text-lg font-medium text-gray-600 mt-1">
                    {currentDateTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    Jadwal Kerja: **{safeWorkSettings.startTime}** s/d **{safeWorkSettings.endTime}**
                </p>
            </GlassCard>

            {/* Tombol Clock In/Out */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <PrimaryButton 
                    onClick={() => handleClock('In')} 
                    disabled={!!clockIn}
                    className={`text-xl py-4 ${clockIn ? 'bg-gray-400 hover:bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
                >
                    <i className="fas fa-sign-in-alt mr-3"></i> 
                    {clockIn ? `Clock In: ${clockIn.time} ${clockIn.late ? '(Terlambat)' : '(Tepat Waktu)'}` : 'Clock In'}
                </PrimaryButton>
                
                <PrimaryButton 
                    onClick={() => handleClock('Out')} 
                    disabled={!clockIn || !!clockOut}
                    className={`text-xl py-4 ${!clockIn || clockOut ? 'bg-gray-400 hover:bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
                >
                    <i className="fas fa-sign-out-alt mr-3"></i> 
                    {clockOut ? `Clock Out: ${clockOut.time}` : 'Clock Out'}
                </PrimaryButton>
            </div>

            {/* Riwayat Absensi Bulan Ini */}
            <GlassCard>
                <h3 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">Riwayat Absensi ({new Date().toLocaleString('id-ID', { month: 'long' })})</h3>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {/* Menggunakan user.currentMonthAttendance? untuk menghindari error saat render */}
                    { (user.currentMonthAttendance || []).slice().reverse().map((att, index) => (
                        <div key={index} className={`p-3 rounded-lg shadow-sm flex justify-between items-center ${att.type === 'Clock In' ? (att.late ? 'bg-red-50' : 'bg-green-50') : 'bg-gray-50'}`}>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{att.date} <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${att.type === 'Clock In' ? 'bg-blue-200 text-blue-800' : 'bg-orange-200 text-orange-800'}`}>{att.type}</span></p>
                                <p className="text-sm text-gray-600 mt-1">Pukul: <span className="font-medium">{att.time}</span></p>
                            </div>
                            <div className="text-right">
                                {att.late && att.type === 'Clock In' && (
                                    <p className="text-xs font-bold text-red-600">Terlambat!</p>
                                )}
                                {att.earlyLeave && att.type === 'Clock Out' && (
                                    <p className="text-xs font-bold text-red-600">Pulang Awal!</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1" title={att.location}>Lokasi: {att.location.split('(')[0]}</p>
                            </div>
                        </div>
                    ))}
                    {user.currentMonthAttendance?.length === 0 && (
                        <p className="text-center text-gray-500 py-4">Belum ada riwayat absensi bulan ini.</p>
                    )}
                </div>
            </GlassCard>

            {/* Camera Modal */}
            {isCameraModalOpen && (
                <CameraModal
                    isOpen={isCameraModalOpen}
                    onClose={() => setIsCameraModalOpen(false)}
                    onCapture={handleCaptureConfirm}
                    user={user}
                    title={`Ambil Foto Selfie untuk Clock ${clockType}`}
                />
            )}
        </div>
    );
};

export default ManagerAttendance;