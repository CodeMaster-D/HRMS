// src/components/Approvals/SupervisorAttendanceApproval.jsx
import React, { useState } from 'react';
import { GlassCard } from '../UI/Cards.jsx';
import { PrimaryButton } from '../UI/Buttons.jsx';
import { showSwal } from '../../utils/swal.js';

// --- D3. Persetujuan Koreksi Absensi Supervisor ---
const SupervisorAttendanceApproval = ({ pendingAttendance = [], setPendingAttendance = () => {}, employees = [], setEmployees = () => {} }) => {
    const [filterStatus, setFilterStatus] = useState('Pending');

    const safePendingAttendance = Array.isArray(pendingAttendance) ? pendingAttendance : [];
    const filteredAttendance = safePendingAttendance.filter(req => req.status === filterStatus);

    const handleApproval = (requestId, status) => {
        const requestToUpdate = safePendingAttendance.find(req => req.id === requestId);
        if (!requestToUpdate) return;

        showSwal(
            `${status === 'Approved' ? 'Setujui' : 'Tolak'} Koreksi Absensi?`,
            `Yakin ingin **${status === 'Approved' ? 'menyetujui' : 'menolak'}** permintaan: **${requestToUpdate.requestType}** dari ${requestToUpdate.employeeName} pada ${requestToUpdate.requestedDate}?`,
            'question',
            0,
            true,
            async () => {
                const updatedPendingAttendance = safePendingAttendance.map(req => 
                    req.id === requestId ? { ...req, status: status, approvedBy: 'Supervisor', approvedAt: new Date().toISOString().split('T')[0] } : req
                );
                
                try {
                    setPendingAttendance(typeof setPendingAttendance === 'function' ? updatedPendingAttendance.filter(req => req.status === 'Pending') : []);
                } catch (e) {
                    console.error("setPendingAttendance error:", e);
                }

                if (status === 'Approved') {
                    const updatedEmployees = (Array.isArray(employees) ? employees : []).map(emp => {
                        if (emp.id === requestToUpdate.employeeId) {
                            const { correctionData } = requestToUpdate;
                            const updatedAttendance = (emp.currentMonthAttendance || []).map(att => {
                                if (att.date === requestToUpdate.requestedDate && att.type === correctionData.type) {
                                    return { ...att, ...correctionData, corrected: true };
                                }
                                return att;
                            });

                            if (requestToUpdate.requestType && requestToUpdate.requestType.includes('Missed')) {
                                const newRecord = {
                                    date: requestToUpdate.requestedDate,
                                    time: correctionData.time,
                                    type: correctionData.type,
                                    location: correctionData.location || 'Manual Correction (Approved)',
                                    late: false,
                                    earlyLeave: false,
                                    corrected: true,
                                };
                                updatedAttendance.push(newRecord);
                            }

                            const uniqueAttendance = updatedAttendance.filter((att, index, self) => 
                                index === self.findIndex((t) => (
                                    t.date === att.date && t.type === att.type
                                ))
                            );

                            return { ...emp, currentMonthAttendance: uniqueAttendance };
                        }
                        return emp;
                    });
                    try {
                        setEmployees(typeof setEmployees === 'function' ? updatedEmployees : employees);
                    } catch (e) {
                        console.error("setEmployees error:", e);
                    }
                }

                showSwal(
                    'Sukses!', 
                    `Permintaan **${requestToUpdate.requestType}** telah di-${status === 'Approved' ? 'SETUJUI' : 'TOLAK'}.`, 
                    status === 'Approved' ? 'success' : 'error', 
                    3000
                );
            }
        );
    };

    // Warna utama #708993 dengan variasi
    const primaryColor = '#708993';
    const primaryLight = '#8fa3ab';
    const primaryDark = '#5a717a';
    const primaryBg = 'rgba(112, 137, 147, 0.1)';
    const primaryBorder = 'rgba(112, 137, 147, 0.3)';

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-gray-100 p-3 rounded-xl mr-4" style={{ backgroundColor: primaryBg }}>
                        <i className="fas fa-user-check text-lg" style={{ color: primaryColor }}></i>
                    </div>
                    Persetujuan Koreksi Absensi
                </h2>
                <p className="text-gray-600 mt-2 text-left">Kelola permintaan koreksi absensi dari anggota tim Anda</p>
            </div>

            {/* Filter Section */}
            <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                <div className="flex flex-wrap gap-3">
                    <button 
                        onClick={() => setFilterStatus('Pending')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center ${
                            filterStatus === 'Pending' 
                                ? 'text-white shadow-lg' 
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                        }`}
                        style={filterStatus === 'Pending' ? { backgroundColor: primaryColor } : {}}
                    >
                        <i className="fas fa-hourglass-half mr-2"></i> 
                        Pending ({safePendingAttendance.length || 0})
                    </button>
                    
                    <div className="flex-1"></div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <i className="fas fa-info-circle" style={{ color: primaryColor }}></i>
                        <span>Total: {safePendingAttendance.length} permintaan koreksi</span>
                    </div>
                </div>
            </div>

            {/* Attendance Requests List */}
            <div className="space-y-4">
                {filteredAttendance.length === 0 ? (
                    <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-12 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] text-center">
                        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: primaryBg }}>
                            <i className="fas fa-user-check text-2xl" style={{ color: primaryColor }}></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak ada permintaan koreksi</h3>
                        <p className="text-gray-600">Semua permintaan koreksi absensi telah diproses.</p>
                    </div>
                ) : (
                    filteredAttendance.map(req => (
                        <div key={req.id} className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] hover:shadow-[0_8px_25px_0_rgba(31,38,135,0.15)] transition-all duration-200">
                            {/* Request Header */}
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                                <div className="flex-1">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-gray-100 p-2 rounded-lg" style={{ backgroundColor: primaryBg }}>
                                            <i className="fas fa-user-edit" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{req.requestType}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    Perlu Koreksi
                                                </span>
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {req.correctionData?.type || 'Clock In'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-sm text-gray-500 text-right">
                                        <i className="fas fa-calendar-day mr-1"></i> 
                                        Tanggal: {req.requestedDate}
                                    </span>
                                </div>
                            </div>

                            {/* Request Details */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">
                                            <i className="fas fa-user mr-2" style={{ color: primaryColor }}></i>
                                            <span className="font-medium text-gray-800">{req.employeeName}</span> • {req.division}
                                        </p>
                                    </div>
                                    
                                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                                        <p className="font-semibold text-red-800 mb-2 flex items-center">
                                            <i className="fas fa-exclamation-circle mr-2"></i>
                                            Alasan Permintaan
                                        </p>
                                        <p className="text-gray-700 italic">"{req.reason}"</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                        <p className="font-semibold text-blue-800 mb-2">Data Koreksi yang Diajukan:</p>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-blue-700">Tipe:</span>
                                                <span className="text-sm font-medium text-blue-800">{req.correctionData?.type}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-blue-700">Waktu:</span>
                                                <span className="text-sm font-medium text-blue-800">{req.correctionData?.time}</span>
                                            </div>
                                            {req.correctionData?.location && (
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-blue-700">Lokasi:</span>
                                                    <span className="text-sm font-medium text-blue-800">{req.correctionData.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                                        <i className="fas fa-clock text-gray-500 mr-3"></i>
                                        <div>
                                            <p className="font-medium text-gray-800">Status: Menunggu Persetujuan</p>
                                            <p className="text-xs text-gray-600">Review sebelum memberikan keputusan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center text-sm text-gray-500">
                                    <i className="fas fa-shield-alt mr-2" style={{ color: primaryColor }}></i>
                                    Pastikan data koreksi sesuai dengan kebijakan perusahaan
                                </div>
                                
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => handleApproval(req.id, 'Rejected')}
                                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                                    >
                                        <i className="fas fa-times-circle mr-2"></i> 
                                        Tolak
                                    </button>
                                    <button 
                                        onClick={() => handleApproval(req.id, 'Approved')}
                                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                                    >
                                        <i className="fas fa-check-circle mr-2"></i> 
                                        Setujui & Koreksi
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Quick Stats */}
            {filteredAttendance.length > 0 && (
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-2xl font-bold mb-1" style={{ color: primaryColor }}>
                                {filteredAttendance.length}
                            </div>
                            <p className="text-sm text-gray-600">Total Permintaan</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-2xl font-bold mb-1 text-blue-600">
                                {filteredAttendance.filter(r => r.correctionData?.type === 'Clock In').length}
                            </div>
                            <p className="text-sm text-gray-600">Koreksi Masuk</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-2xl font-bold mb-1 text-purple-600">
                                {filteredAttendance.filter(r => r.correctionData?.type === 'Clock Out').length}
                            </div>
                            <p className="text-sm text-gray-600">Koreksi Pulang</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupervisorAttendanceApproval;