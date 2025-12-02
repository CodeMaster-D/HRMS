// SupervisorAttendanceApproval.jsx (List View with Expandable Details)
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { showSwal } from "../../utils/swal.js";

const SupervisorAttendanceApproval = ({
  employees = [],
  setEmployees = () => {},
  setAttendanceHistory = () => {},
  setGroupedAttendance = () => {},
}) => {
  const { apiFetch } = useAuth();
  const [localPendingAttendance, setLocalPendingAttendance] = useState([]);
  const [filterStatus, setFilterStatus] = useState("Pending");
  const [approvingId, setApprovingId] = useState(null);
  const [rejectingId, setRejectingId] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  const extractDescription = (att = {}) => {
    return (
      att?.reason?.description ||
      att?.reason_description ||
      att?.description ||
      att?.note ||
      att?.notes ||
      att?.reason_text ||
      att?.late_reason ||
      att?.early_out_reason ||
      att?.reason?.note ||
      ""
    );
  };

  const normalizeStatus = (rawStatus) => {
    if (!rawStatus) return "Pending";
    const s = String(rawStatus).toLowerCase();
    if (s === "approved" || s === "approve") return "Approved";
    if (s === "rejected" || s === "reject") return "Rejected";
    return "Pending";
  };

  useEffect(() => {
    const fetchPendingAttendance = async () => {
      try {
        const response = await apiFetch("/api/attendances?status=pending");
        const pendingList = Array.isArray(response) ? response : [];

        const pendingForApproval = pendingList.filter(
          (att) => Number(att?.is_late) === 1 || Number(att?.irregular_clockout) === 1
        );

        const formatted = pendingForApproval.map((att) => {
          let date = "";
          let time = "";

          if (att?.timestamp) {
            try {
              const d = new Date(att.timestamp);
              if (!isNaN(d)) {
                date = d.toISOString().split("T")[0];
                time = d.toTimeString().slice(0, 5);
              }
            } catch (e) {
              date = att.date || "";
              time = att.time || "";
            }
          } else {
            date = att.date || "";
            time = att.time || "";
          }

          let photoUrl = null;
          try {
            if (att?.photo_path) {
              const base = import.meta?.env?.VITE_API_BASE_URL
                ? String(import.meta.env.VITE_API_BASE_URL).replace(/\/api\/?$/, "")
                : "";
              photoUrl = base ? `${base}/storage/${att.photo_path}` : att.photo_path;
            } else if (att?.photo_url) {
              photoUrl = att.photo_url;
            }
          } catch (e) {
            photoUrl = att.photo_url || null;
          }

          const reasonType =
            att?.reason?.reason_type ||
            (Number(att?.is_late) === 1
              ? "late"
              : Number(att?.irregular_clockout) === 1
              ? "early_clockout"
              : "");

          return {
            id: att.id,
            attendance_id: att.id,
            user_id: att.user_id,
            date,
            time,
            type:
              String(att.type || "").toLowerCase() === "clock_in"
                ? "Clock In"
                : "Clock Out",
            reason_type: reasonType,
            employee_name: att.user?.name || `User ${att.user_id}`,
            division: att.user?.division || "Unknown",
            description: extractDescription(att),
            photo_url: photoUrl,
            latitude: att.latitude,
            longitude: att.longitude,
            status: normalizeStatus(att.status),
          };
        });

        setLocalPendingAttendance(formatted);
      } catch (error) {
        showSwal("Error", "Gagal mengambil data pending attendance", "error");
      }
    };

    fetchPendingAttendance();
  }, [apiFetch]);

  const safePendingAttendance = Array.isArray(localPendingAttendance)
    ? localPendingAttendance
    : [];
  const filteredAttendance = safePendingAttendance.filter(
    (req) => req.status === filterStatus
  );

  const handleApproval = async (requestId, status) => {
    const selected = safePendingAttendance.find((r) => r.id === requestId);
    if (!selected) return;

    const isApprove = status === "Approved";
    const textAction = isApprove ? "Setujui" : "Tolak";
    const confirmVerb = isApprove ? "menyetujui" : "menolak";
    const actionLabel = isApprove ? "SETUJUI" : "TOLAK";

    showSwal(
      `${textAction} Alasan Absensi?`,
      `Yakin ingin <b>${confirmVerb}</b> permintaan <b>${selected.reason_type}</b> dari <b>${selected.employee_name}</b> pada <b>${selected.date}</b>?`,
      "question",
      0,
      true,
      textAction,
      "Batal",
      async (confirmed) => {
        if (!confirmed) return;

        const updated = safePendingAttendance.map((req) =>
          req.id === requestId
            ? {
                ...req,
                status: status,
                approvedBy: "Supervisor",
                approvedAt: new Date().toISOString().split("T")[0],
              }
            : req
        );

        setLocalPendingAttendance(updated.filter((r) => r.status === "Pending"));

        try {
          if (isApprove) setApprovingId(requestId);
          else setRejectingId(requestId);

          const response = await apiFetch(
            `/api/attendances/review/${selected.attendance_id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              body: JSON.stringify({
                status: isApprove ? "approved" : "rejected",
                reviewed_by: "supervisor",
                reason: isApprove ? null : "Permintaan ditolak oleh supervisor",
              }),
            }
          );

          if (!response || response.success === false) {
            throw new Error(response?.message || "Gagal memproses approval");
          }

          // Update local employee structure
          const updatedEmployees = employees.map((emp) => {
            if (emp.id !== selected.user_id) return emp;

            const updatedAtt = (emp.currentMonthAttendance || []).map((att) => {
              if (
                att.date === selected.date &&
                ((String(att.type).toLowerCase().includes("in") &&
                  selected.type === "Clock In") ||
                  (String(att.type).toLowerCase().includes("out") &&
                    selected.type === "Clock Out"))
              ) {
                return {
                  ...att,
                  status: isApprove ? "approved" : "rejected",
                  needsApproval: false,
                  needsResubmit: !isApprove,
                };
              }
              return att;
            });

            return { ...emp, currentMonthAttendance: updatedAtt };
          });

          setEmployees(updatedEmployees);

          setAttendanceHistory((prev) =>
            prev.map((a) =>
              a.id === selected.attendance_id
                ? {
                    ...a,
                    status: isApprove ? "approved" : "rejected",
                    needsApproval: false,
                  }
                : a
            )
          );

          setGroupedAttendance((prev) =>
            prev.map((g) =>
              g.date === selected.date
                ? { ...g, needsApproval: false }
                : g
            )
          );

          showSwal(
            "Sukses!",
            `Permintaan ${selected.reason_type} dari ${selected.employee_name} telah di-${actionLabel}.`,
            isApprove ? "success" : "error",
            2500
          );
        } catch (error) {
          setLocalPendingAttendance(safePendingAttendance);
          showSwal("Error", error.message, "error");
        } finally {
          if (isApprove) setApprovingId(null);
          else setRejectingId(null);
        }
      }
    );
  };

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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
          Persetujuan Alasan Absensi
        </h2>
        <p className="text-gray-600 mt-2 text-left">Kelola permintaan alasan absensi dari anggota tim Anda</p>
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
            <span>Total: {safePendingAttendance.length} permintaan alasan</span>
          </div>
        </div>
      </div>

      {/* Attendance Requests List */}
      <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] overflow-hidden">
        {filteredAttendance.length === 0 ? (
          <div className="p-12 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: primaryBg }}>
              <i className="fas fa-user-check text-2xl" style={{ color: primaryColor }}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak ada permintaan alasan</h3>
            <p className="text-gray-600">Semua permintaan alasan absensi telah diproses.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredAttendance.map(req => (
              <div key={req.id} className="transition-all duration-200">
                {/* Compact List Item */}
                <div className="p-4 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleExpanded(req.id)}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150"
                        style={{ backgroundColor: primaryBg }}
                      >
                        <i 
                          className={`fas fa-chevron-${expandedItems[req.id] ? 'up' : 'down'} text-sm transition-transform duration-150`}
                          style={{ color: primaryColor }}
                        ></i>
                      </button>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800">{req.employee_name}</h3>
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {req.reason_type}
                          </span>
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {req.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span><i className="fas fa-calendar-day mr-1"></i> {req.date}</span>
                          <span><i className="fas fa-clock mr-1"></i> {req.time}</span>
                          <span><i className="fas fa-building mr-1"></i> {req.division}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleApproval(req.id, 'Rejected')}
                        disabled={rejectingId === req.id}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                          rejectingId === req.id
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-red-500 hover:bg-red-600 text-white'
                        }`}
                      >
                        {rejectingId === req.id ? (
                          <>
                            <i className="fas fa-spinner animate-spin mr-2"></i> 
                            Memproses...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-times-circle mr-2"></i> 
                            Tolak
                          </>
                        )}
                      </button>
                      <button 
                        onClick={() => handleApproval(req.id, 'Approved')}
                        disabled={approvingId === req.id}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                          approvingId === req.id
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        {approvingId === req.id ? (
                          <>
                            <i className="fas fa-spinner animate-spin mr-2"></i> 
                            Memproses...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-check-circle mr-2"></i> 
                            Setujui
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Details */}
                {expandedItems[req.id] && (
                  <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
                    <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            <i className="fas fa-user mr-2" style={{ color: primaryColor }}></i>
                            <span className="font-medium text-gray-800">{req.employee_name}</span> • {req.division}
                          </p>
                        </div>
                        
                        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                          <p className="font-semibold text-red-800 mb-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            Alasan Permintaan
                          </p>
                          <p className="text-gray-700 italic">"{req.description}"</p>
                        </div>

                        {/* Foto Absensi */}
                        {req.photo_url && (
                          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <p className="font-semibold text-gray-800 mb-2 flex items-center">
                              <i className="fas fa-camera mr-2" style={{ color: primaryColor }}></i>
                              Foto Absensi
                            </p>
                            <div className="flex justify-center">
                              <img 
                                src={req.photo_url} 
                                alt="Foto absensi" 
                                className="max-h-48 rounded-lg object-contain border border-gray-300"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-800 mb-2">Data Absensi:</p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-blue-700">Tipe:</span>
                              <span className="text-sm font-medium text-blue-800">{req.type}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-blue-700">Waktu:</span>
                              <span className="text-sm font-medium text-blue-800">{req.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-blue-700">Lokasi:</span>
                              <span className="text-sm font-medium text-blue-800">{`${req.latitude || '-'}, ${req.longitude || '-'}`}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <i className="fas fa-clock text-gray-500 mr-3"></i>
                          <div>
                            <p className="font-medium text-gray-800">Status: Menunggu Persetujuan</p>
                            <p className="text-xs text-gray-600">Review foto dan alasan sebelum memberikan keputusan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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
                {filteredAttendance.filter(r => r.type === 'Clock In').length}
              </div>
              <p className="text-sm text-gray-600">Koreksi Masuk</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl font-bold mb-1 text-purple-600">
                {filteredAttendance.filter(r => r.type === 'Clock Out').length}
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