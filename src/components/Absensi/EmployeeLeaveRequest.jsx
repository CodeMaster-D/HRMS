import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import { GlassCard } from '../UI/Cards'; 
import { PrimaryButton, TabButton } from '../UI/Buttons';
import { showSwal } from '../../utils/swal';
import { hasPermission } from '../../hooks/usePermission';

// Base URL configuration
const getBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://127.0.0.1:8000';
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Terjadi Kesalahan</h3>
          <p className="text-red-600">Silakan refresh halaman atau coba lagi nanti.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Helper functions
const getViewMode = (role) => {
  if (hasPermission(role, 'approve_leave')) return 'approver';
  if (hasPermission(role, 'view_team_leave')) return 'team';
  return 'personal';
};

const getViewTitle = (viewMode, userName = '') => {
  switch(viewMode) {
    case 'approver': return 'Manajemen Cuti & Izin';
    case 'team': return 'Cuti Tim';
    default: return `Pengajuan Cuti & Izin${userName ? ' ' + userName : ''}`;
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

// LeaveBalanceCard Component
const LeaveBalanceCard = ({ user, pendingRequests, viewMode, teamBalance, teamPending, leaveBalance }) => {
  if (viewMode === 'team') {
    return (
      <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <p className="text-xs text-gray-500 font-medium mb-1">Total Cuti Tim</p>
            <p className="text-2xl font-bold text-[#708993]">{teamBalance} <span className="text-sm font-normal text-gray-600">hari</span></p>
          </div>
          <div className="h-8 border-r border-gray-300"></div>
          <div className="text-center flex-1">
            <p className="text-xs text-gray-500 font-medium mb-1">Pending Tim</p>
            <p className="text-2xl font-bold text-amber-600">{teamPending} <span className="text-sm font-normal text-gray-600">pengajuan</span></p>
          </div>
        </div>
      </div>
    );
  }

  const balanceArray = Array.isArray(leaveBalance) ? leaveBalance : [];
  const annualLeaveBalance = balanceArray.find(b => b.leave_type_id === 1)?.remaining_days || 0;

  return (
    <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="text-center flex-1">
          <p className="text-xs text-gray-500 font-medium mb-1">Sisa Cuti Tahunan</p>
          <p className="text-2xl font-bold text-[#708993]">{annualLeaveBalance} <span className="text-sm font-normal text-gray-600">hari</span></p>
        </div>
        <div className="h-8 border-r border-gray-300"></div>
        <div className="text-center flex-1">
          <p className="text-xs text-gray-500 font-medium mb-1">Pending Permintaan</p>
          <p className="text-2xl font-bold text-amber-600">{pendingRequests} <span className="text-sm font-normal text-gray-600">pengajuan</span></p>
        </div>
      </div>
    </div>
  );
};

// LeaveTabs Component
const LeaveTabs = ({ activeLeaveTab, setActiveLeaveTab, viewMode, canApprove, canViewTeam }) => {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      <TabButton
        active={activeLeaveTab === 'request'}
        onClick={() => setActiveLeaveTab('request')}
        className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
          activeLeaveTab === 'request' 
            ? 'border-[#708993] text-[#708993]' 
            : 'border-transparent text-gray-500 hover:text-gray-700 border-none focus:outline-none'
        }`}
      >
        {viewMode === 'personal' ? 'Ajukan Cuti/Izin' : 'Pengajuan Baru'}
      </TabButton>
      
      <TabButton
        active={activeLeaveTab === 'history'}
        onClick={() => setActiveLeaveTab('history')}
        className={`px-4 py-2 font-medium text-sm border-b-2${
          activeLeaveTab === 'history' 
            ? 'border-[#708993] text-[#708993]' 
            : 'border-transparent text-gray-500 hover:text-gray-700 border-none focus:outline-none'
        }`}
      >
        Riwayat Cuti
      </TabButton>
      
      {canApprove && (
        <TabButton
          active={activeLeaveTab === 'approval'}
          onClick={() => setActiveLeaveTab('approval')}
          className={`px-4 py-2 font-medium text-sm border-b-2${
            activeLeaveTab === 'approval' 
              ? 'border-[#708993] text-[#708993]' 
              : 'border-transparent text-gray-500 hover:text-gray-700 border-none focus:outline-none'
          }`}
        >
          Persetujuan
        </TabButton>
      )}
      
      {canViewTeam && viewMode !== 'personal' && (
        <TabButton
          active={activeLeaveTab === 'team'}
          onClick={() => setActiveLeaveTab('team')}
          className={`px-4 py-2 font-medium text-sm border-b-2${
            activeLeaveTab === 'team' 
              ? 'border-[#708993] text-[#708993]' 
              : 'border-transparent text-gray-500 hover:text-gray-700 border-none focus:outline-none'
          }`}
        >
          Tim
        </TabButton>
      )}
    </div>
  );
};

// LeaveRequestForm Component
const LeaveRequestForm = ({ 
  user,
  leaveTypes,
  leaveTypeId, 
  setLeaveTypeId,
  title, 
  setTitle,
  startDate, 
  setStartDate,
  endDate, 
  setEndDate,
  reason, 
  setReason,
  isSubmitting, 
  setIsSubmitting,
  onLeaveSubmitted,
  attachments,
  setAttachments,
}) => {
  const typesArray = Array.isArray(leaveTypes) ? leaveTypes : [];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedType = typesArray.find(t => t.id === leaveTypeId);
    if (!selectedType) {
      showSwal('Error', 'Jenis cuti tidak valid', 'error');
      setIsSubmitting(false);
      return;
    }

    // Create FormData for file upload
    const formData = new FormData();
    formData.append('leave_type_id', leaveTypeId);
    formData.append('start_date', startDate);
    formData.append('end_date', endDate);
    formData.append('reason', reason);
    formData.append('leave_title', title);

    // Append attachments if any
    attachments.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file);
    });

    try {
      const res = await axios.post(`${getBaseUrl()}/api/leaves`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { leave } = res.data.success.data;

      // Format data sesuai UI
      const formattedLeave = {
        id: leave.id,
        employeeId: user.id,
        employeeName: user.name,
        title: leave.leave_title,
        type: selectedType.display_name,
        startDate: leave.start_date,
        endDate: leave.end_date,
        days: leave.duration_days,
        reason: leave.reason,
        status: leave.status.charAt(0).toUpperCase() + leave.status.slice(1), // "pending" -> "Pending"
        division: user.division || '—',
        leaveTypeId: leave.leave_type_id,
        attachments: leave.attachments || [],
      };

      onLeaveSubmitted(formattedLeave);

      showSwal(
        'Berhasil!',
        `Pengajuan ${selectedType.display_name} (${leave.duration_days} hari kerja) telah dikirim untuk persetujuan.`,
        'success'
      );

      setTitle('');
      setLeaveTypeId('');
      setStartDate('');
      setEndDate('');
      setReason('');
      setAttachments([]);

    } catch (err) {
      console.error('Error submitting leave:', err);
      const errorMsg = err.response?.data?.message || 
                       err.response?.data?.error || 
                       'Gagal mengajukan cuti. Silakan coba lagi.';
      showSwal('Error', errorMsg, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateEstimateDays = (start, end) => {
    if (!start || !end) return 0;
    const startDay = new Date(start);
    const endDay = new Date(end);
    if (startDay > endDay) return 0;
    let days = 0;
    let curr = new Date(startDay);
    while (curr <= endDay) {
      if (curr.getDay() !== 0 && curr.getDay() !== 6) days++;
      curr.setDate(curr.getDate() + 1);
    }
    return days;
  };
  const estimatedDays = calculateEstimateDays(startDate, endDate);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700 mb-2">
            Tipe Pengajuan
          </label>
          <select
            id="leaveType"
            value={leaveTypeId}
            onChange={(e) => setLeaveTypeId(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black"
            required
          >
            <option value="">Pilih Jenis Cuti</option>
            {typesArray.map(type => (
              <option key={type.id} value={type.id}>{type.display_name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Judul Pengajuan
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black"
            placeholder="Contoh: Liburan Keluarga"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
            Tanggal Mulai
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
            Tanggal Berakhir
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black"
            required
          />
        </div>
      </div>

      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Estimasi Hari Kerja:</span>
          <span className="font-bold text-[#708993] text-lg">{estimatedDays || 0} hari</span>
        </div>
        {leaveTypeId === 1 && (
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
            <span className="text-sm text-gray-600">Estimasi Sisa Cuti:</span>
            <span className={`font-bold text-lg ${
              (user.cutiBalance || 0) - estimatedDays >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {(user.cutiBalance || 0) - estimatedDays} hari
            </span>
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
          Alasan Pengajuan
        </label>
        <textarea
          id="reason"
          rows="3"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black"
          placeholder="Jelaskan alasan..."
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
          Lampiran Dokumen (Opsional)
        </label>
        <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
          <input
            type="file"
            id="attachments"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="attachments" className="cursor-pointer flex flex-col items-center justify-center">
            <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-2"></i>
            <span className="text-sm text-gray-600">Klik untuk mengunggah dokumen</span>
            <span className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Maks. 5MB per file)</span>
          </label>
        </div>
        
        {attachments.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className="text-sm font-medium text-gray-700">Dokumen yang akan diunggah:</p>
            {attachments.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <div className="flex items-center">
                  <i className="fas fa-file mr-2 text-gray-500"></i>
                  <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                  <span className="text-xs text-gray-500 ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeAttachment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button 
        type="submit" 
        className="w-full mt-6 bg-[#708993] hover:bg-[#5a727a] text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting || !startDate || !endDate || !reason || !title || !leaveTypeId}
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Mengirim...
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane mr-2"></i>
            Kirim Pengajuan
          </>
        )}
      </button>
    </form>
  );
};

// LeaveHistory Component dengan Debugging
const LeaveHistory = ({ leaveHistory, searchKeyword, setSearchKeyword, canViewDetails, user, onCancelLeave }) => {
  // Debug: Tampilkan data yang diterima
  console.log('LeaveHistory component received:', leaveHistory);
  
  // NORMALISASI SUPAYA SESUAI BACKEND
  const normalized = Array.isArray(leaveHistory)
    ? leaveHistory.map(item => ({
        id: item.id,
        title: item.leave_title,                       // sesuai backend
        type: item.type?.display_name || 'Tidak diketahui',
        reason: item.reason,
        startDate: item.start_date,
        endDate: item.end_date,
        days: item.duration_days,
        status: item.status,
        employeeId: item.employeeId,
        attachments: item.attachments || [],
      }))
    : [];

  const historyArray = Array.isArray(leaveHistory) ? leaveHistory : [];
  console.log('History array after check:', historyArray);
  
  const filtered = normalized.filter(h =>
    h.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    h.type.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    h.reason.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  
  console.log('Filtered leaves:', filtered);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari riwayat cuti..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black focus:outline-none"
        />
      </div>

      {/* Debug: Tampilkan informasi data */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Debug Info:</strong> Total data: {historyArray.length} | 
          Filtered data: {filtered.length} | 
          Search keyword: "{searchKeyword}"
        </p>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipe</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periode</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hari</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lampiran</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.map((leave, index) => (
              <tr key={leave.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <p className="text-sm font-medium text-gray-900">{leave.title}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{leave.reason}</p>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-700">{leave.type}</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(leave.startDate)} s/d {formatDate(leave.endDate)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{leave.days} hari</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    leave.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    leave.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {leave.status === 'Approved' ? 'Disetujui' : 
                     leave.status === 'Rejected' ? 'Ditolak' : 'Menunggu'}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  {leave.attachments && leave.attachments.length > 0 ? (
                    <span className="text-blue-600">
                      <i className="fas fa-paperclip"></i> {leave.attachments.length}
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      <i className="fas fa-paperclip"></i> 0
                    </span>
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    {canViewDetails && (
                      <button className="text-blue-600 hover:text-blue-900" title="Lihat Detail">
                        <i className="fas fa-eye"></i>
                      </button>
                    )}
                    {leave.status === 'Pending' && leave.employeeId === user.id && (
                      <button 
                        onClick={() => onCancelLeave(leave.id)} 
                        className="text-red-600 hover:text-red-900" 
                        title="Batalkan Pengajuan"
                      >
                        <i className="fas fa-times-circle"></i>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8">
          <i className="fas fa-inbox text-gray-300 text-4xl mb-3"></i>
          <p className="text-gray-500">
            {searchKeyword ? 'Tidak ada riwayat yang sesuai.' : 'Belum ada riwayat cuti.'}
          </p>
        </div>
      )}
    </div>
  );
};

// LeaveApproval Component
const LeaveApproval = ({ pendingLeaveRequests, setPendingLeave, canApprove }) => {
  if (!canApprove) return null;

  const pendingArray = Array.isArray(pendingLeaveRequests) ? pendingLeaveRequests : [];

  const handleApprove = async (leaveId) => {
    try {
      await axios.put(`${getBaseUrl()}/api/leaves/${leaveId}/approve`);
      setPendingLeave(prev => prev.map(l => l.id === leaveId ? { ...l, status: 'Approved' } : l));
      showSwal('Disetujui!', 'Pengajuan cuti telah disetujui.', 'success', 2000);
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Gagal menyetujui cuti.';
      showSwal('Error', errorMsg, 'error');
    }
  };

  const handleReject = async (leaveId) => {
    try {
      await axios.put(`${getBaseUrl()}/api/leaves/${leaveId}/reject`);
      setPendingLeave(prev => prev.map(l => l.id === leaveId ? { ...l, status: 'Rejected' } : l));
      showSwal('Ditolak!', 'Pengajuan cuti telah ditolak.', 'success', 2000);
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Gagal menolak cuti.';
      showSwal('Error', errorMsg, 'error');
    }
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          <i className="fas fa-clipboard-check mr-2 text-amber-600"></i>
          Pengajuan Menunggu Persetujuan
        </h3>
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
          {pendingArray.length} pengajuan
        </span>
      </div>

      {pendingArray.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <i className="fas fa-check-circle text-green-500 text-4xl mb-3"></i>
          <p className="text-gray-500">Tidak ada pengajuan menunggu.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Karyawan</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipe</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periode</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hari</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lampiran</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingArray.map((leave) => (
                <tr key={leave.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <i className="fas fa-user text-gray-500 text-xs"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{leave.employeeName}</p>
                        <p className="text-xs text-gray-500">{leave.division}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm font-medium text-gray-900">{leave.title}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{leave.reason}</p>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-700">{leave.type}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(leave.startDate)} s/d {formatDate(leave.endDate)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{leave.days} hari</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    {leave.attachments && leave.attachments.length > 0 ? (
                      <span className="text-blue-600">
                        <i className="fas fa-paperclip"></i> {leave.attachments.length}
                      </span>
                    ) : (
                      <span className="text-gray-400">
                        <i className="fas fa-paperclip"></i> 0
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button onClick={() => handleApprove(leave.id)} className="text-green-600 hover:text-green-900" title="Setujui">
                        <i className="fas fa-check"></i>
                      </button>
                      <button onClick={() => handleReject(leave.id)} className="text-red-600 hover:text-red-900" title="Tolak">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// TeamLeaveList Component
const TeamLeaveList = ({ employees, onEmployeeSelect, viewMode }) => {
  const getListTitle = () => {
    switch(viewMode) {
      case 'team': return 'Cuti Tim';
      case 'approver': return 'Cuti Seluruh Karyawan';
      default: return 'Cuti Karyawan';
    }
  };

  const employeesArray = Array.isArray(employees) ? employees : [];

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <i className="fas fa-users mr-3 text-blue-500"></i>
        {getListTitle()}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">Nama</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">Divisi</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">Sisa Cuti</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">Pending</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {employeesArray.map((employee) => (
              <tr key={employee.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{employee.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.division}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{employee.cutiBalance || 0} hari</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {employee.leaveHistory ? employee.leaveHistory.filter(l => l.status === 'Pending').length : 0}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button 
                    onClick={() => onEmployeeSelect(employee)}
                    className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-600 rounded-lg text-xs font-medium transition-colors"
                  >
                    <i className="fas fa-eye mr-1"></i> Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Component
const EmployeeLeaveRequest = ({ 
  user = {}, 
  setPendingLeave = () => {},
  employees = [],
  onEmployeeSelect = () => {},
  onUpdateUserBalance
}) => {
  const role = user.role || 'employee';
  const [activeLeaveTab, setActiveLeaveTab] = useState('request');
  const [leaveTypeId, setLeaveTypeId] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [pendingLeaveRequests, setPendingLeaveRequests] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [attachments, setAttachments] = useState([]);

  // ✅ Set axios default Authorization dari 'auth_token'
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  }, []);

  // Debug: Log state changes
  useEffect(() => {
    console.log('LeaveHistory state updated:', leaveHistory);
  }, [leaveHistory]);

  // Fetch leave types
  useEffect(() => {
    const fetchLeaveTypes = async () => {
      try {
        const res = await axios.get(`${getBaseUrl()}/api/leaves/types`);
        const data = res.data?.success?.data || [];
        setLeaveTypes(data);
      } catch (err) {
        console.error('Gagal fetch jenis cuti:', err);
        showSwal('Error', 'Gagal memuat jenis cuti.', 'error');
        setLeaveTypes([]);
      }
    };
    fetchLeaveTypes();
  }, []);

  // Fetch leave balance
  useEffect(() => {
    const fetchLeaveBalance = async () => {
      try {
        const res = await axios.get(`${getBaseUrl()}/api/leaves/balances/my-balance`);
        const data = res.data?.success?.data?.balances || [];
        setLeaveBalance(data);
      } catch (err) {
        console.error('Gagal fetch leave balance:', err);
        showSwal('Error', 'Gagal memuat saldo cuti.', 'error');
        setLeaveBalance([]);
      }
    };
    fetchLeaveBalance();
  }, []);

  // Fetch leave history when tab is active
  useEffect(() => {
    if (activeLeaveTab === 'history') {
      const fetchLeaveHistory = async () => {
        try {
          const res = await axios.get(`${getBaseUrl()}/api/leaves`);
          console.log('Leave history response:', res.data);

          // Ambil data dari res.data.success.data
          const rawData = res.data?.success?.data ?? [];
          console.log('Raw data from API:', rawData);

          // Normalisasi untuk UI
          const mappedData = rawData.map(leave => ({
            id: leave.id,
            employeeId: leave.user_id,
            employeeName: user?.name ?? '—',
            title: leave.leave_title ?? '-',
            type: leave.type?.display_name ?? 'Tidak Diketahui',
            startDate: leave.start_date ?? '-',
            endDate: leave.end_date ?? '-',
            days: leave.duration_days ?? 0,
            reason: leave.reason ?? '-',
            status: leave.status
              ? leave.status.charAt(0).toUpperCase() + leave.status.slice(1)
              : 'Unknown',
            division: user?.division ?? '—',
            attachments: leave.attachments || []
          }));

          console.log('Mapped data:', mappedData);
          setLeaveHistory(mappedData);

        } catch (err) {
          console.error('Gagal fetch leave history:', err);
          showSwal('Error', 'Gagal memuat riwayat cuti.', 'error');
          setLeaveHistory([]);
        }
      };

      fetchLeaveHistory();
    }
  }, [activeLeaveTab, user]);

  // Fetch pending requests when tab is active
  useEffect(() => {
    if (activeLeaveTab === 'approval') {
      const fetchPendingLeaves = async () => {
        try {
          const res = await axios.get(`${getBaseUrl()}/api/leaves/pending`);
          console.log('Pending leaves response:', res.data);
          
          // Ambil data dari res.data.success.data
          const rawData = res.data?.success?.data || [];
          
          // Mapping data sesuai dengan struktur response
          const mappedData = rawData.map(leave => ({
            id: leave.id,
            employeeId: leave.user_id,
            employeeName: user.name,
            title: leave.leave_title,
            type: leave.type?.display_name || 'Tidak Diketahui',
            startDate: leave.start_date,
            endDate: leave.end_date,
            days: leave.duration_days,
            reason: leave.reason,
            status: leave.status.charAt(0).toUpperCase() + leave.status.slice(1), // "pending" -> "Pending"
            division: user.division || '—',
            attachments: leave.attachments || []
          }));
          
          setPendingLeaveRequests(mappedData);
        } catch (err) {
          console.error('Gagal fetch pending leaves:', err);
          showSwal('Error', 'Gagal memuat data pengajuan pending.', 'error');
          setPendingLeaveRequests([]);
        }
      };
      fetchPendingLeaves();
    }
  }, [activeLeaveTab, user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const viewMode = useMemo(() => getViewMode(role), [role]);
  const canRequestLeave = hasPermission(role, 'request_leave');
  const canViewLeaveHistory = hasPermission(role, 'view_leave_history');
  const canApproveLeave = hasPermission(role, 'approve_leave');
  const canViewTeamLeave = hasPermission(role, 'view_team_leave');

  const historyArray = Array.isArray(leaveHistory) ? leaveHistory : [];
  const pendingRequests = historyArray.filter(leave => leave.status === 'Pending').length;

  const teamBalance = useMemo(() => {
    const employeesArray = Array.isArray(employees) ? employees : [];
    return employeesArray.reduce((total, emp) => total + (emp.cutiBalance || 0), 0);
  }, [employees]);
  
  const teamPending = useMemo(() => {
    const employeesArray = Array.isArray(employees) ? employees : [];
    return employeesArray.reduce((total, emp) => {
      return total + (emp.leaveHistory?.filter(l => l.status === 'Pending').length || 0);
    }, 0);
  }, [employees]);

  const handleLeaveSubmitted = (newLeave) => {
    console.log('handleLeaveSubmitted called with:', newLeave);
    
    // Pastikan data yang ditambahkan ke leaveHistory sesuai format
    const formattedLeave = {
      id: newLeave.id,
      employeeId: newLeave.employeeId,
      employeeName: newLeave.employeeName,
      title: newLeave.title,
      type: newLeave.type,
      startDate: newLeave.startDate,
      endDate: newLeave.endDate,
      days: newLeave.days,
      reason: newLeave.reason,
      status: newLeave.status, // Pastikan statusnya "Pending" bukan "Menunggu"
      division: newLeave.division,
      attachments: newLeave.attachments || []
    };
    
    console.log('Adding to leaveHistory:', formattedLeave);
    setLeaveHistory(prev => {
      console.log('Previous leaveHistory:', prev);
      const newArray = [formattedLeave, ...prev];
      console.log('New leaveHistory:', newArray);
      return newArray;
    });
    
    if (typeof setPendingLeave === 'function') {
      setPendingLeave(prev => [...prev, formattedLeave]);
    }
  };

  const handleCancelLeave = async (leaveId) => {
    try {
      // Show confirmation dialog
      const result = await showSwal(
        'Konfirmasi Pembatalan',
        'Apakah Anda yakin ingin membatalkan pengajuan cuti ini?',
        'warning',
        true,
        'Ya, Batalkan',
        'Tidak'
      );
      
      if (result.isConfirmed) {
        await axios.put(`${getBaseUrl()}/api/leaves/${leaveId}/cancel`);
        
        // Update the leave status in the UI
        setLeaveHistory(prev => 
          prev.map(leave => 
            leave.id === leaveId 
              ? { ...leave, status: 'Cancelled' } 
              : leave
          )
        );
        
        showSwal('Dibatalkan!', 'Pengajuan cuti telah berhasil dibatalkan.', 'success', 2000);
      }
    } catch (err) {
      console.error('Error cancelling leave:', err);
      const errorMsg = err.response?.data?.message || 'Gagal membatalkan pengajuan cuti.';
      showSwal('Error', errorMsg, 'error');
    }
  };

  if (!canRequestLeave && !canApproveLeave && !canViewTeamLeave) {
    return (
      <GlassCard className="mt-6 relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
        <div className="p-8 text-center">
          <div className="w-24 h-24 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-exclamation-triangle text-red-500 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Akses Ditolak</h3>
          <p className="text-gray-600">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        </div>
      </GlassCard>
    );
  }

  return (
    <ErrorBoundary>
      <GlassCard className="mt-6 relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
        <div className="p-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#708993]"></div>
            </div>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold bg-[#708993] bg-clip-text text-transparent">
                    {getViewTitle(viewMode, user.name)}
                  </h2>
                  <p className="text-gray-600 mt-2 flex items-center">
                    <i className="fas fa-calendar-alt mr-2 text-[#708993]"></i>
                    Kelola pengajuan cuti dan izin
                  </p>
                </div>
              </div>

              <LeaveBalanceCard 
                user={user}
                pendingRequests={pendingRequests}
                viewMode={viewMode}
                teamBalance={teamBalance}
                teamPending={teamPending}
                leaveBalance={leaveBalance}
              />

              <LeaveTabs 
                activeLeaveTab={activeLeaveTab}
                setActiveLeaveTab={setActiveLeaveTab}
                viewMode={viewMode}
                canApprove={canApproveLeave}
                canViewTeam={canViewTeamLeave}
              />

              {activeLeaveTab === 'request' && canRequestLeave && (
                <LeaveRequestForm
                  user={user}
                  leaveTypes={leaveTypes}
                  leaveTypeId={leaveTypeId}
                  setLeaveTypeId={setLeaveTypeId}
                  title={title}
                  setTitle={setTitle}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  reason={reason}
                  setReason={setReason}
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  onLeaveSubmitted={handleLeaveSubmitted}
                  attachments={attachments}
                  setAttachments={setAttachments}
                />
              )}

              {activeLeaveTab === 'history' && canViewLeaveHistory && (
                <LeaveHistory
                  leaveHistory={leaveHistory}
                  searchKeyword={searchKeyword}
                  setSearchKeyword={setSearchKeyword}
                  canViewDetails={true}
                  user={user}
                  onCancelLeave={handleCancelLeave}
                />
              )}

              {activeLeaveTab === 'approval' && canApproveLeave && (
                <LeaveApproval
                  pendingLeaveRequests={pendingLeaveRequests}
                  setPendingLeave={setPendingLeave}
                  canApprove={canApproveLeave}
                />
              )}

              {activeLeaveTab === 'team' && canViewTeamLeave && (
                <TeamLeaveList
                  employees={employees}
                  onEmployeeSelect={onEmployeeSelect}
                  viewMode={viewMode}
                />
              )}
            </>
          )}
        </div>
      </GlassCard>
    </ErrorBoundary>
  );
};

export default EmployeeLeaveRequest;