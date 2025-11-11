// src/components/Approvals/SupervisorTaskApproval.jsx
import React, { useState } from 'react';
import { GlassCard } from '../UI/Cards.jsx';
import { PrimaryButton } from '../UI/Buttons.jsx';
import { showSwal } from '../../utils/swal.js';

// --- D2. Persetujuan Tugas Supervisor ---
const SupervisorTaskApproval = ({ pendingTasks = [], setPendingTasks = () => {}, employees = [], setEmployees = () => {} }) => {
    const [filterStatus, setFilterStatus] = useState('Pending');
    
    // Defensive: ensure pendingTasks is an array
    const safePendingTasks = Array.isArray(pendingTasks) ? pendingTasks : [];

    const filteredTasks = safePendingTasks.filter(task => task.status === filterStatus);
    
    // Handler untuk menyetujui/menolak tugas
    const handleApproval = (taskId, status) => {
        const taskToUpdate = safePendingTasks.find(t => t.id === taskId);
        if (!taskToUpdate) return;
        
        showSwal(
            `${status === 'Approved' ? 'Setujui' : 'Tolak'} Tugas?`,
            `Apakah Anda yakin ingin **${status === 'Approved' ? 'menyetujui' : 'menolak'}** tugas: **${taskToUpdate.taskTitle}** dari ${taskToUpdate.employeeName}?`,
            'question',
            0,
            true,
            async () => {
                const updatedPendingTasks = safePendingTasks.map(t => 
                    t.id === taskId ? { ...t, status: status, approvedBy: 'Supervisor', approvedAt: new Date().toISOString().split('T')[0] } : t
                );
                
                // setPendingTasks may come from parent; ensure function exists
                try {
                    setPendingTasks(typeof setPendingTasks === 'function' ? updatedPendingTasks.filter(t => t.status === 'Pending') : []);
                } catch (e) {
                    console.error("setPendingTasks error:", e);
                }

                if (status === 'Approved') {
                    const updatedEmployees = (Array.isArray(employees) ? employees : []).map(emp => {
                        if (emp.id === taskToUpdate.employeeId) {
                            return {
                                ...emp,
                                performanceScore: (emp.performanceScore || 0) + 1
                            };
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
                    `Tugas **${taskToUpdate.taskTitle}** dari ${taskToUpdate.employeeName} telah di-${status === 'Approved' ? 'SETUJUI' : 'TOLAK'}.`, 
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
                        <i className="fas fa-tasks text-lg" style={{ color: primaryColor }}></i>
                    </div>
                    Persetujuan Tugas Tim
                </h2>
                <p className="text-gray-600 mt-2 text-left">Kelola dan setujui tugas yang diajukan oleh anggota tim Anda</p>
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
                        Pending ({safePendingTasks.length || 0})
                    </button>
                    
                    <div className="flex-1"></div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <i className="fas fa-info-circle" style={{ color: primaryColor }}></i>
                        <span>Total: {safePendingTasks.length} tugas menunggu persetujuan</span>
                    </div>
                </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
                {filteredTasks.length === 0 ? (
                    <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-12 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] text-center">
                        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: primaryBg }}>
                            <i className="fas fa-inbox text-2xl" style={{ color: primaryColor }}></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak ada tugas pending</h3>
                        <p className="text-gray-600">Semua tugas telah diproses atau tidak ada tugas yang menunggu persetujuan.</p>
                    </div>
                ) : (
                    filteredTasks.map(task => (
                        <div key={task.id} className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] hover:shadow-[0_8px_25px_0_rgba(31,38,135,0.15)] transition-all duration-200">
                            {/* Task Header */}
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                                <div className="flex-1">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-gray-100 p-2 rounded-lg" style={{ backgroundColor: primaryBg }}>
                                            <i className="fas fa-clipboard-list" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{task.taskTitle}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                                    task.type === 'Submission' 
                                                        ? 'bg-blue-100 text-blue-800' 
                                                        : 'bg-purple-100 text-purple-800'
                                                }`}>
                                                    {task.type}
                                                </span>
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                                    Priority: {task.priority || 'Medium'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-sm text-gray-500 text-right">
                                        <i className="fas fa-calendar-alt mr-1"></i> 
                                        Diajukan: {task.submittedAt}
                                    </span>
                                </div>
                            </div>

                            {/* Task Details */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        <i className="fas fa-user mr-2" style={{ color: primaryColor }}></i>
                                        <span className="font-medium text-gray-800">{task.employeeName}</span> • {task.division}
                                    </p>
                                    <p className="text-gray-700 bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <i className="fas fa-align-left mr-2 text-gray-500"></i>
                                        {task.description}
                                    </p>
                                </div>
                                
                                <div className="space-y-3">
                                    {task.attachment && (
                                        <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                                            <i className="fas fa-paperclip text-blue-500 mr-3"></i>
                                            <div>
                                                <p className="font-medium text-blue-800">{task.attachment.name}</p>
                                                <p className="text-xs text-blue-600">File terlampir (Simulasi)</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                                        <i className="fas fa-clock text-gray-500 mr-3"></i>
                                        <div>
                                            <p className="font-medium text-gray-800">Status: Pending</p>
                                            <p className="text-xs text-gray-600">Menunggu persetujuan supervisor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center text-sm text-gray-500">
                                    <i className="fas fa-info-circle mr-2" style={{ color: primaryColor }}></i>
                                    Tinjau tugas sebelum memberikan persetujuan
                                </div>
                                
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => handleApproval(task.id, 'Rejected')}
                                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                                    >
                                        <i className="fas fa-times-circle mr-2"></i> 
                                        Tolak
                                    </button>
                                    <button 
                                        onClick={() => handleApproval(task.id, 'Approved')}
                                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                                    >
                                        <i className="fas fa-check-circle mr-2"></i> 
                                        Setujui
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Quick Stats */}
            {filteredTasks.length > 0 && (
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-2xl font-bold mb-1" style={{ color: primaryColor }}>
                                {filteredTasks.length}
                            </div>
                            <p className="text-sm text-gray-600">Total Pending</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-2xl font-bold mb-1 text-green-600">
                                {filteredTasks.filter(t => t.priority === 'High').length}
                            </div>
                            <p className="text-sm text-gray-600">Prioritas Tinggi</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-2xl font-bold mb-1 text-blue-600">
                                {filteredTasks.filter(t => t.type === 'Submission').length}
                            </div>
                            <p className="text-sm text-gray-600">Tipe Submission</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupervisorTaskApproval;