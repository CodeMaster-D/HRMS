import { showSwal } from '../utils/swal';

// Koordinat PT Wilmar Bisnis Medan
const COMPANY_LOCATION = {
  latitude: 3.6206229,
  longitude: 98.7294571,
  name: 'PT Wilmar Bisnis Medan'
};

// Fungsi untuk menghitung selisih waktu dalam menit
const calculateTimeDifference = (time1, time2) => {
  const [hour1, minute1] = time1.split(':').map(Number);
  const [hour2, minute2] = time2.split(':').map(Number);
  const totalMinutes1 = hour1 * 60 + minute1;
  const totalMinutes2 = hour2 * 60 + minute2;
  return Math.abs(totalMinutes1 - totalMinutes2);
};

// Fungsi utama handle absensi karyawan
export const handleAttendanceClock = async (user, type, photoData, workSettings, permissionData = null) => {
  try {
    // Ambil waktu & tanggal sekarang
    const now = new Date();
    const date = now.toLocaleDateString('id-ID');
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    // Deteksi terlambat / pulang cepat
    const startTime = workSettings?.startTime || '08:00';
    const endTime = workSettings?.endTime || '17:00';
    
    let isLate = false;
    let isEarlyLeave = false;
    let reason = '';
    let permissionNote = '';
    let permissionFile = '';
    let lateDuration = 0;

    // Deteksi terlambat untuk Clock In (lebih dari jam 08:00)
    if (type === 'In') {
      if (time > startTime) {
        isLate = true;
        lateDuration = calculateTimeDifference(time, startTime);
      }
    }

    // Deteksi pulang cepat untuk Clock Out (kurang dari jam 17:00)
    if (type === 'Out') {
      if (time < endTime) {
        isEarlyLeave = true;
      }
    }

    // Jika ada data izin, gunakan data tersebut
    if (permissionData) {
      permissionNote = permissionData.note || '';
      permissionFile = permissionData.file || '';
      reason = permissionData.note || ''; // Gunakan catatan izin sebagai alasan
    }

    // Buat record absensi
    const newRecord = {
      id: Date.now(),
      userId: user.id,
      name: user.name,
      date,
      time,
      type: type === 'In' ? 'Clock In' : 'Clock Out',
      isLate,
      isEarlyLeave,
      lateDuration,
      reason,
      permissionNote,
      permissionFile,
      location: 'PT Wilmar Bisnis Medan',
      coordinates: `${COMPANY_LOCATION.latitude}, ${COMPANY_LOCATION.longitude}`,
      division: user.division,
      hasPermission: !!permissionData
    };

    // Simpan foto absen
    const newPhotoRecord = {
      id: Date.now(),
      userId: user.id,
      date,
      type: type === 'In' ? 'clock_in' : 'clock_out',
      image: photoData,
      timestamp: now.toISOString()
    };

    // Notifikasi sukses
    let successMessage = `Berhasil melakukan ${type === 'In' ? 'Clock In' : 'Clock Out'}!`;
    
    if (isLate) {
      successMessage += ` (Terlambat ${lateDuration} menit)`;
    }
    if (isEarlyLeave) {
      successMessage += ' (Pulang Cepat)';
    }
    if (permissionData) {
      successMessage += ' - Dengan Izin';
    }

    showSwal('Berhasil', successMessage, 'success');

    return { 
      success: true, 
      newRecord, 
      newPhotoRecord,
      isLate,
      isEarlyLeave,
      lateDuration
    };

  } catch (error) {
    console.error('Error handleAttendanceClock:', error);
    showSwal('Error', 'Gagal melakukan absensi: ' + error.message, 'error');
    return { success: false, error: error.message };
  }
};

// Fungsi untuk mengajukan permohonan izin
export const submitPermissionRequest = async (user, type, permissionData, workSettings) => {
  try {
    const now = new Date();
    const date = now.toLocaleDateString('id-ID');
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    // Buat record permohonan izin
    const permissionRecord = {
      id: Date.now(),
      userId: user.id,
      name: user.name,
      date,
      time,
      type: type === 'In' ? 'Izin Terlambat' : 'Izin Pulang Cepat',
      permissionType: type === 'In' ? 'late' : 'early_out',
      note: permissionData.note,
      file: permissionData.file,
      status: 'approved', // Untuk dummy data langsung approved
      approvedBy: 'System Auto',
      approvedAt: now.toISOString(),
      division: user.division
    };

    // Simpan ke history permohonan izin
    const userPermissionHistory = user.permissionHistory || [];
    userPermissionHistory.push(permissionRecord);

    // Hitung durasi keterlambatan jika izin terlambat
    let additionalInfo = '';
    if (type === 'In' && permissionData.lateDuration) {
      additionalInfo = ` (${permissionData.lateDuration} menit)`;
    }

    showSwal(
      'Izin Disetujui', 
      `Permohonan izin ${type === 'In' ? 'terlambat' : 'pulang cepat'} Anda telah disetujui${additionalInfo}. ${type === 'Out' ? 'Clock out otomatis telah dicatat.' : 'Silahkan lanjutkan absensi.'}`, 
      'success'
    );

    return {
      success: true,
      permissionRecord,
      message: 'Izin berhasil diajukan dan disetujui'
    };

  } catch (error) {
    console.error('Error submitPermissionRequest:', error);
    showSwal('Error', 'Gagal mengajukan permohonan izin: ' + error.message, 'error');
    return { success: false, error: error.message };
  }
};

// Fungsi untuk mendapatkan data performa
export const getPerformanceData = (user) => {
  return {
    score: user.performanceScore || 85,
    completedTasks: user.tasks ? user.tasks.filter(task => task.status === 'Completed').length : 0,
    pendingTasks: user.tasks ? user.tasks.filter(task => task.status === 'Pending' || task.status === 'In Progress').length : 0,
    totalTasks: user.tasks ? user.tasks.length : 0,
    targetAchievement: Math.min(100, Math.floor((user.performanceScore || 85) / 85 * 100))
  };
};

// Fungsi untuk mendapatkan riwayat cuti
export const getLeaveHistory = (user) => {
  return user.leaveHistory || [];
};

// Fungsi untuk update profile
export const updateEmployeeProfile = async (employeeId, changes) => {
  try {
    // Simulasi API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Permintaan perubahan profile berhasil dikirim',
      requestId: Date.now()
    };
  } catch (error) {
    return {
      success: false,
      error: 'Gagal mengirim permintaan perubahan'
    };
  }
};