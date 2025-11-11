// src/components/Approvals/ManagerPermissionApproval.jsx
import React, { useState, useMemo } from 'react';
import { GlassCard } from '../UI/Cards';
import { PrimaryButton } from '../UI/Buttons';
import { showSwal } from '../../utils/swal';

const ManagerPermissionApproval = ({ employees, setEmployees, pendingPermissions = [], setPendingPermissions }) => {
    const [selectedPermission, setSelectedPermission] = useState(null);
    const [filterType, setFilterType] = useState('all');
    const [filterStatus, setFilterStatus] = useState('pending');

    // Data dummy jika tidak ada data dari props
    const defaultPermissions = useMemo(() => [
        {
            id: 1,
            employeeId: 101,
            employeeName: 'Ahmad Wijaya',
            employeeDivision: 'Marketing',
            type: 'terlambat',
            date: '2024-03-15',
            requestTime: '09:30',
            originalTime: '08:00',
            reason: 'Macet parah di tol jakarta',
            proof: 'https://picsum.photos/seed/proof1/400/300',
            status: 'pending',
            submittedAt: '2024-03-14 17:30'
        },
        {
            id: 2,
            employeeId: 102,
            employeeName: 'Sari Dewi',
            employeeDivision: 'IT',
            type: 'cepat_pulang',
            date: '2024-03-15',
            requestTime: '15:00',
            originalTime: '17:00',
            reason: 'Anak sakit dan harus dibawa ke dokter',
            proof: 'https://picsum.photos/seed/proof2/400/300',
            status: 'pending',
            submittedAt: '2024-03-14 16:45'
        },
        {
            id: 3,
            employeeId: 103,
            employeeName: 'Budi Santoso',
            employeeDivision: 'HR',
            type: 'terlambat',
            date: '2024-03-16',
            requestTime: '10:00',
            originalTime: '08:00',
            reason: 'Kendaraan mogok di jalan',
            proof: 'https://picsum.photos/seed/proof3/400/300',
            status: 'approved',
            submittedAt: '2024-03-15 18:20'
        }
    ], []);

    const permissions = pendingPermissions.length > 0 ? pendingPermissions : defaultPermissions;

    const filteredPermissions = useMemo(() => {
        let filtered = permissions;
        
        if (filterType !== 'all') {
            filtered = filtered.filter(perm => perm.type === filterType);
        }
        
        if (filterStatus !== 'all') {
            filtered = filtered.filter(perm => perm.status === filterStatus);
        }
        
        return filtered;
    }, [permissions, filterType, filterStatus]);

    const handleApprove = (permissionId) => {
        const updatedPermissions = permissions.map(perm => 
            perm.id === permissionId ? { ...perm, status: 'approved' } : perm
        );
        
        setPendingPermissions(updatedPermissions);
        showSwal('Disetujui!', 'Izin karyawan telah disetujui.', 'success');
        setSelectedPermission(null);
    };

    const handleReject = (permissionId) => {
        const updatedPermissions = permissions.map(perm => 
            perm.id === permissionId ? { ...perm, status: 'rejected' } : perm
        );
        
        setPendingPermissions(updatedPermissions);
        showSwal('Ditolak!', 'Izin karyawan telah ditolak.', 'error');
        setSelectedPermission(null);
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            pending: { color: 'bg-amber-100 text-amber-800', icon: 'fa-clock' },
            approved: { color: 'bg-green-100 text-green-800', icon: 'fa-check' },
            rejected: { color: 'bg-red-100 text-red-800', icon: 'fa-times' }
        };
        
        const config = statusConfig[status] || statusConfig.pending;
        
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
                <i className={`fas ${config.icon} mr-1`}></i>
                {status === 'pending' ? 'Menunggu' : status === 'approved' ? 'Disetujui' : 'Ditolak'}
            </span>
        );
    };

    const getTypeBadge = (type) => {
        const typeConfig = {
            terlambat: { color: 'bg-orange-100 text-orange-800', icon: 'fa-clock', label: 'Izin Terlambat' },
            cepat_pulang: { color: 'bg-blue-100 text-blue-800', icon: 'fa-home', label: 'Izin Cepat Pulang' }
        };
        
        const config = typeConfig[type] || typeConfig.terlambat;
        
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
                <i className={`fas ${config.icon} mr-1`}></i>
                {config.label}
            </span>
        );
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <i className="fas fa-clock mr-3 text-[#708993]"></i>
                        Persetujuan Izin Karyawan
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Kelola permintaan izin terlambat dan cepat pulang dari tim</p>
                </div>
                
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#708993] text-black"
                    >
                        <option value="all">Semua Tipe</option>
                        <option value="terlambat">Izin Terlambat</option>
                        <option value="cepat_pulang">Izin Cepat Pulang</option>
                    </select>
                    
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#708993] text-black"
                    >
                        <option value="all">Semua Status</option>
                        <option value="pending">Menunggu</option>
                        <option value="approved">Disetujui</option>
                        <option value="rejected">Ditolak</option>
                    </select>
                </div>
            </div>

            <GlassCard className="bg-white rounded-xl shadow-sm p-6">
                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-[#708993]">
                            {permissions.filter(p => p.status === 'pending').length}
                        </div>
                        <div className="text-sm text-gray-600">Menunggu Persetujuan</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-orange-600">
                            {permissions.filter(p => p.type === 'terlambat').length}
                        </div>
                        <div className="text-sm text-gray-600">Izin Terlambat</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-600">
                            {permissions.filter(p => p.type === 'cepat_pulang').length}
                        </div>
                        <div className="text-sm text-gray-600">Izin Cepat Pulang</div>
                    </div>
                </div>

                {/* Permissions List */}
                {filteredPermissions.length === 0 ? (
                    <div className="py-12">
                        <i className="fas fa-inbox text-4xl text-gray-400 mb-3"></i>
                        <p className="text-gray-500">Tidak ada permintaan izin</p>
                    </div>
                ) : (
                    <div className="space-y-4 text-left">
                        {filteredPermissions.map((permission) => (
                            <div 
                                key={permission.id}
                                className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-200"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    {/* Employee Info */}
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-[#708993]/20 rounded-full flex items-center justify-center">
                                            <i className="fas fa-user text-[#708993]"></i>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-3 mb-1">
                                                <h3 className="font-semibold text-gray-900 truncate">
                                                    {permission.employeeName}
                                                </h3>
                                                {getTypeBadge(permission.type)}
                                                {getStatusBadge(permission.status)}
                                            </div>
                                            <p className="text-sm text-gray-600 truncate">
                                                {permission.employeeDivision} • Diajukan pada {permission.submittedAt}
                                            </p>
                                            <p className="text-sm text-gray-700 mt-1">
                                                <i className="fas fa-calendar-day mr-2 text-[#708993]"></i>
                                                {permission.date} • 
                                                {permission.type === 'terlambat' 
                                                    ? ` Datang ${permission.requestTime} (normal: ${permission.originalTime})`
                                                    : ` Pulang ${permission.requestTime} (normal: ${permission.originalTime})`
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => setSelectedPermission(permission)}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
                                        >
                                            <i className="fas fa-eye mr-2"></i> Detail
                                        </button>
                                        
                                        {permission.status === 'pending' && (
                                            <>
                                                <button
                                                    onClick={() => handleApprove(permission.id)}
                                                    className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors"
                                                >
                                                    <i className="fas fa-check mr-2"></i> Setuju
                                                </button>
                                                <button
                                                    onClick={() => handleReject(permission.id)}
                                                    className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors"
                                                >
                                                    <i className="fas fa-times mr-2"></i> Tolak
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </GlassCard>

            {/* Detail Modal - Horizontal Layout */}
            {selectedPermission && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPermission(null)}
                >
                    <div 
                        className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-[#708993] to-[#5a717b] p-6 flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-white">Detail Permintaan Izin</h3>
                            <button 
                                onClick={() => setSelectedPermission(null)}
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                            >
                                <i className="fas fa-times text-white text-sm"></i>
                            </button>
                        </div>

                        {/* Modal Content - Horizontal Layout */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Column - Employee Info & Details */}
                                <div className="space-y-6">
                                    {/* Employee Info */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-16 h-16 bg-[#708993]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-user text-[#708993] text-xl"></i>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-gray-900 text-lg">{selectedPermission.employeeName}</h4>
                                            <p className="text-gray-600">{selectedPermission.employeeDivision}</p>
                                            <div className="flex items-center space-x-2 mt-2">
                                                {getTypeBadge(selectedPermission.type)}
                                                {getStatusBadge(selectedPermission.status)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Permission Details */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h5 className="font-medium text-gray-700 mb-3">Informasi Permintaan</h5>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Tanggal:</span>
                                                <span className="font-medium text-black">{selectedPermission.date}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Waktu Normal:</span>
                                                <span className="font-medium text-black">{selectedPermission.originalTime}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Waktu Permintaan:</span>
                                                <span className="font-medium text-[#708993]">{selectedPermission.requestTime}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Tipe:</span>
                                                <span className="font-medium text-black">
                                                    {selectedPermission.type === 'terlambat' ? 'Izin Terlambat' : 'Izin Cepat Pulang'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Status:</span>
                                                <span className="font-medium text-black">
                                                    {selectedPermission.status === 'pending' ? 'Menunggu' : selectedPermission.status}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Diajukan:</span>
                                                <span className="font-medium text-black">{selectedPermission.submittedAt}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reason */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h5 className="font-medium text-gray-700 mb-2">Alasan Permintaan</h5>
                                        <p className="text-gray-700 text-left">{selectedPermission.reason}</p>
                                    </div>
                                </div>

                                {/* Right Column - Proof Image */}
                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-xl p-4 h-full">
                                        <h5 className="font-medium text-gray-700 mb-3">Bukti Pendukung</h5>
                                        <div className="flex justify-center items-center h-full">
                                            <img 
                                                src={selectedPermission.proof} 
                                                alt="Bukti izin" 
                                                className="max-w-full h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                                                onClick={() => window.open(selectedPermission.proof, '_blank')}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2 text-left">Klik gambar untuk melihat ukuran penuh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        {selectedPermission.status === 'pending' && (
                            <div className="flex gap-3 p-6 border-t border-gray-200">
                                <button
                                    onClick={() => setSelectedPermission(null)}
                                    className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium transition-all duration-200 hover:bg-gray-200"
                                >
                                    Tutup
                                </button>
                                <button
                                    onClick={() => handleReject(selectedPermission.id)}
                                    className="flex-1 py-3 bg-red-500 text-white rounded-xl font-medium transition-all duration-200 hover:bg-red-600"
                                >
                                    <i className="fas fa-times mr-2"></i> Tolak
                                </button>
                                <button
                                    onClick={() => handleApprove(selectedPermission.id)}
                                    className="flex-1 py-3 bg-[#708993] text-white rounded-xl font-medium transition-all duration-200 hover:bg-[#5a717b]"
                                >
                                    <i className="fas fa-check mr-2"></i> Setujui
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerPermissionApproval;