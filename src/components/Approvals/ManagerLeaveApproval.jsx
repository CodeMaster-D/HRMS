// src/components/Approvals/ManagerLeaveApproval.jsx
import React from 'react';
import { showSwal } from '../../utils/swal';

// Glass Card component with iOS 26 liquid glass design
const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-2xl bg-white/30 border border-[#708993]/20 rounded-3xl shadow-sm ${className}`}>
        {children}
    </div>
);

// Modern button with rounded design
const ActionButton = ({ onClick, children, variant = 'primary', disabled = false, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200";
    const variants = {
        primary: "bg-[#708993] text-white hover:bg-[#5a6f7a] active:scale-95",
        secondary: "bg-white/40 text-[#708993] border border-[#708993]/30 hover:bg-white/60",
        success: "bg-emerald-500/90 text-white hover:bg-emerald-600 active:scale-95",
        danger: "bg-red-500/90 text-white hover:bg-red-600 active:scale-95",
        ghost: "bg-transparent text-[#708993] hover:bg-white/40"
    };
    
    const disabledClasses = "opacity-50 cursor-not-allowed";
    
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={`${baseClasses} ${variants[variant]} ${disabled ? disabledClasses : ''}`} 
            {...props}
        >
            {children}
        </button>
    );
};

// Leave type badge with consistent styling
const LeaveTypeBadge = ({ type }) => {
    const typeConfig = {
        'Cuti Tahunan': { color: 'bg-blue-100 text-blue-700', icon: 'fa-sun' },
        'Cuti Sakit': { color: 'bg-red-100 text-red-700', icon: 'fa-heartbeat' },
        'Cuti Melahirkan': { color: 'bg-pink-100 text-pink-700', icon: 'fa-baby' },
        'Cuti Penting': { color: 'bg-purple-100 text-purple-700', icon: 'fa-star' },
        'Cuti Besar': { color: 'bg-orange-100 text-orange-700', icon: 'fa-umbrella-beach' }
    };
    
    const config = typeConfig[type] || { color: 'bg-gray-100 text-gray-700', icon: 'fa-calendar' };
    
    return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
            <i className={`fas ${config.icon}`}></i>
            {type}
        </span>
    );
};

// Status badge component
const StatusBadge = ({ status }) => {
    const statusConfig = {
        'pending': { color: 'bg-amber-100 text-amber-700', label: 'Menunggu' },
        'approved': { color: 'bg-emerald-100 text-emerald-700', label: 'Disetujui' },
        'rejected': { color: 'bg-red-100 text-red-700', label: 'Ditolak' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    
    return (
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
            <i className={`fas ${status === 'approved' ? 'fa-check' : status === 'rejected' ? 'fa-times' : 'fa-clock'}`}></i>
            {config.label}
        </span>
    );
};

// Leave request card component
const LeaveRequestCard = ({ request, employeeDetail, onApprove, onReject }) => {
    const isSickLeave = request.type === 'Cuti Sakit';
    
    return (
        <GlassCard className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section - Employee Info & Leave Details */}
                <div className="flex-1 space-y-4">
                    {/* Header with Employee Info */}
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-semibold text-gray-800">{request.employeeName}</h3>
                                <StatusBadge status={request.status} />
                            </div>
                            <div className="flex items-center gap-3">
                                <LeaveTypeBadge type={request.type} />
                                <span className="text-sm text-gray-600 font-medium">
                                    {request.days} hari
                                </span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Sisa Cuti</p>
                            <p className="text-lg font-bold text-[#708993]">{employeeDetail.cutiBalance} hari</p>
                        </div>
                    </div>
                    
                    {/* Date Range */}
                    <div className="bg-white/40 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 mb-3">Periode Cuti</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <div className="bg-[#708993]/10 p-2 rounded-2xl">
                                    <i className="fas fa-calendar-day text-[#708993] text-sm"></i>
                                </div>
                                <div>
                                    <p className="font-medium">{request.startDate}</p>
                                    <p className="text-xs text-gray-500">Mulai</p>
                                </div>
                            </div>
                            <i className="fas fa-arrow-right text-gray-400 text-sm"></i>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <div className="bg-[#708993]/10 p-2 rounded-2xl">
                                    <i className="fas fa-calendar-day text-[#708993] text-sm"></i>
                                </div>
                                <div>
                                    <p className="font-medium">{request.endDate}</p>
                                    <p className="text-xs text-gray-500">Selesai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Reason */}
                    <div className="bg-white/40 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 mb-2">Alasan Cuti</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {request.reason}
                        </p>
                    </div>
                    
                    {/* File Attachment for Sick Leave */}
                    {isSickLeave && request.attachment && (
                        <div className="flex items-center gap-3 p-4 bg-white/40 rounded-2xl">
                            <div className="bg-[#708993]/10 p-2 rounded-2xl">
                                <i className="fas fa-file-medical text-[#708993]"></i>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">File Pendukung</p>
                                <p className="text-xs text-gray-500">Surat dokter tersedia</p>
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Right Section - Action Buttons */}
                <div className="flex lg:flex-col gap-3 lg:w-40 text-gray-700">
                    <ActionButton 
                        onClick={() => onApprove(request)}
                        variant="success"
                        className="lg:w-full justify-center"
                    >
                        <div className="flex items-center gap-2">
                            <i className="fas fa-check-circle text-green-500"></i>
                            <span className="ml-2">Setujui</span>
                        </div>
                    </ActionButton>
                    <ActionButton 
                        onClick={() => onReject(request.id, request.employeeName)}
                        variant="danger"
                        className="lg:w-full justify-center"
                    >
                        <div className="flex items-center gap-2">
                            <i className="fas fa-times-circle text-red-500"></i>
                            <span className="ml-2">Tolak</span>
                        </div>
                    </ActionButton>
                </div>
            </div>
        </GlassCard>
    );
};

// Stats Card Component
const StatsCard = ({ value, label, color = '[#708993]', icon }) => (
    <GlassCard className="p-4 flex items-center gap-4">
        <div className={`bg-${color}/10 p-3 rounded-2xl`}>
            <i className={`fas ${icon} text-${color} text-lg`}></i>
        </div>
        <div>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    </GlassCard>
);

// Empty state component
const EmptyState = () => (
    <div className="text-center py-16">
        <div className="bg-[#708993]/10 p-8 rounded-3xl inline-block mb-6">
            <i className="fas fa-check-circle text-4xl text-[#708993]"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Tidak Ada Permintaan Cuti</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
            Semua permintaan cuti telah diproses. Tim Anda sedang bekerja dengan produktif.
        </p>
    </div>
);

// --- B2. Persetujuan Cuti ---
const ManagerLeaveApproval = ({ employees, setEmployees, pendingLeave, setPendingLeave }) => {
    
    // Handler untuk menyetujui (Approve) permintaan cuti
    const handleApprove = (request) => {
        // 1. Tambahkan ke data attendance (Simulasi: status cuti sebagai 'On Leave')
        const updatedEmployees = employees.map(emp => {
            if (emp.id === request.employeeId) {
                // Kurangi saldo cuti (asumsi request.days sudah benar di data dummy)
                const newCutiBalance = emp.cutiBalance - request.days;
                return { 
                    ...emp, 
                    cutiBalance: newCutiBalance >= 0 ? newCutiBalance : 0,
                    status: request.days > 5 ? 'On Leave' : emp.status
                };
            }
            return emp;
        });

        // 2. Hapus dari daftar pending
        const updatedPending = pendingLeave.filter(p => p.id !== request.id);

        // 3. Update state
        setEmployees(updatedEmployees);
        setPendingLeave(updatedPending);

        showSwal('Disetujui!', `Permintaan cuti ${request.employeeName} (${request.type}) telah disetujui.`, 'success');
    };

    // Handler untuk menolak (Reject) permintaan cuti
    const handleReject = (requestId, employeeName) => {
        // Hapus dari daftar pending
        const updatedPending = pendingLeave.filter(p => p.id !== requestId);
        setPendingLeave(updatedPending);

        showSwal('Ditolak!', `Permintaan cuti ${employeeName} telah ditolak.`, 'error');
    };

    // Stats untuk header
    const pendingCount = pendingLeave.length;
    const sickLeaveCount = pendingLeave.filter(req => req.type === 'Cuti Sakit').length;
    const annualLeaveCount = pendingLeave.filter(req => req.type === 'Cuti Tahunan').length;

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] rounded-xl">
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#708993] p-3 rounded-2xl">
                        <i className="fas fa-plane-departure text-white text-xl"></i>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 text-left">Persetujuan Cuti</h2>
                        <p className="text-gray-600 text-sm text-left">Kelola permintaan cuti dari tim Anda</p>
                    </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <StatsCard 
                        value={pendingCount}
                        label="Menunggu Persetujuan"
                        color="[#708993]"
                        icon="fa-clock"
                    />
                    <StatsCard 
                        value={annualLeaveCount}
                        label="Cuti Tahunan"
                        color="blue"
                        icon="fa-sun"
                    />
                    <StatsCard 
                        value={sickLeaveCount}
                        label="Cuti Sakit"
                        color="red"
                        icon="fa-heartbeat"
                    />
                </div>
            </div>

            {/* Main Content */}
            <GlassCard className="p-6">
                {pendingLeave.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className="space-y-4 text-left">
                        <div className="flex justify-between items-center mb-4 ">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Permintaan Cuti</h3>
                                <p className="text-gray-600 text-sm">{pendingCount} permintaan perlu ditinjau</p>
                            </div>
                            
                            {/* Bulk Actions */}
                            <div className="flex gap-2">
                                <ActionButton 
                                    onClick={() => {
                                        if (pendingLeave.length === 0) return;
                                        pendingLeave.forEach(request => handleApprove(request));
                                    }}
                                    variant="success"
                                >
                                    <i className="fas fa-check-circle"></i>
                                    Setujui Semua
                                </ActionButton>
                                <ActionButton 
                                    onClick={() => {
                                        if (pendingLeave.length === 0) return;
                                        showSwal({
                                            title: 'Tolak Semua?',
                                            text: `Anda akan menolak semua ${pendingLeave.length} permintaan cuti.`,
                                            icon: 'warning',
                                            buttons: {
                                                cancel: "Batal",
                                                confirm: {
                                                    text: "Ya, Tolak Semua",
                                                    value: true,
                                                    className: "bg-red-500"
                                                }
                                            }
                                        }).then((willReject) => {
                                            if (willReject) {
                                                const updatedPending = [];
                                                setPendingLeave(updatedPending);
                                                showSwal('Berhasil!', 'Semua permintaan cuti telah ditolak.', 'success');
                                            }
                                        });
                                    }}
                                    variant="danger"
                                >
                                    <i className="fas fa-times-circle"></i>
                                    Tolak Semua
                                </ActionButton>
                            </div>
                        </div>
                        
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {pendingLeave.map(request => {
                                // Cari detail karyawan
                                const employeeDetail = employees.find(e => e.id === request.employeeId) || {};
                                
                                return (
                                    <LeaveRequestCard
                                        key={request.id}
                                        request={request}
                                        employeeDetail={employeeDetail}
                                        onApprove={handleApprove}
                                        onReject={handleReject}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </GlassCard>
        </div>
    );
};

export default ManagerLeaveApproval;