// src/utils/constants.js
// FILE INI HANYA BERISI DATA DUMMY STATIS DAN KONSTANTA.
// Semua fungsi utility (showSwal, formattedCurrency) SUDAH DIPINDAHKAN.

// --- Definisi Warna (TETAP SAMA) ---
export const COLORS = {
  Primary: '#3B82F6',
  Secondary: '#64748B',
  Success: '#10B981',
  Warning: '#F59E0B',
  Error: '#EF4444',
  Dark: '#1E293B',
  Light: '#F8FAFC'
};

// --- Data Dummy untuk Simulasi Login (DUMMY_AUTH) ---
export const DUMMY_AUTH = {
  employee: { 
      id: 101, 
      username: 'karyawan', 
      password: 'password', 
      role: 'employee', 
      name: 'Djob Misael', 
      division: 'Tech',
      profileImage: 'https://picsum.photos/seed/djob/200/200.jpg',
      email: 'djob.misael@company.com',
      phone: '081211112222',
      joinDate: '2023-01-15',
      cutiBalance: 12,
      performanceScore: 4.2,
      loginHistory: [
          { time: '2024-10-14 08:00', method: 'Face ID' },
          { time: '2024-10-13 08:05', method: 'Password' },
      ],
      currentMonthAttendance: [
          // Data dummy absensi bulan ini (Contoh: Absensi Djob Misael)
          { id: 1001, date: '2024-10-13', time: '08:05', type: 'Clock In', status: 'Completed', location: 'Office Jln. Sudirman', isLate: false, isEarlyLeave: false },
          { id: 1002, date: '2024-10-13', time: '17:00', type: 'Clock Out', status: 'Completed', location: 'Office Jln. Sudirman', isLate: false, isEarlyLeave: false },
          // ... tambahkan lebih banyak data absensi di file lama jika ada ...
      ],
      attendancePhotos: [],
      salaryDetails: { basic: 8000000, allowance: 2000000, overtimeHours: 5, overtimeRate: 50000, bonus: 500000, deductions: 100000 },
  },
  manager: { id: 201, username: 'manager', password: 'password', role: 'manager', name: 'Ibu Manajer Keren', division: 'HR & GA', cutiBalance: 15 },
  owner: { id: 301, username: 'owner', password: 'password', role: 'owner', name: 'Pak Owner Perusahaan' },
  supervisor: { id: 401, username: 'supervisor', password: 'password', role: 'supervisor', name: 'Sari Supervisor', division: 'Tech Support', cutiBalance: 14 }
};

// --- Data Dummy Pegawai (INITIAL_EMPLOYEES) ---
export const INITIAL_EMPLOYEES = [
    // Pegawai 1: (Detail sama dengan Djob Misael di atas, tapi dengan ID yang beda)
    {
        id: 1,
        name: 'John Doe',
        division: 'Tech',
        email: 'john@company.com',
        phone: '08123456789',
        status: 'Active',
        joinDate: '2023-01-15',
        cutiBalance: 12,
        role: 'employee',
        currentMonthAttendance: [
             // Contoh data absensi John Doe
            { id: 101, date: '2024-10-14', time: '08:30', type: 'Clock In', status: 'Completed', location: 'Office Jln. Mawar', isLate: true, isEarlyLeave: false },
            { id: 102, date: '2024-10-13', time: '08:00', type: 'Clock In', status: 'Completed', location: 'Office Jln. Mawar', isLate: false, isEarlyLeave: false },
            { id: 103, date: '2024-10-13', time: '16:45', type: 'Clock Out', status: 'Completed', location: 'Office Jln. Mawar', isLate: false, isEarlyLeave: true },
        ],
        attendancePhotos: [],
        salaryDetails: { basic: 8000000, allowance: 2000000, overtimeHours: 5, overtimeRate: 50000, bonus: 500000, deductions: 100000 },
        performanceScore: 4.2,
        managerId: 201, // ID Manajer
        supervisorId: 401, // ID Supervisor
        // Tambahkan properti lainnya yang ada di file lama
    },
    // Pegawai 2: Jane Smith
    {
        id: 2,
        name: 'Jane Smith',
        division: 'Marketing',
        email: 'jane@company.com',
        phone: '081300004444',
        status: 'Active',
        joinDate: '2024-03-20',
        cutiBalance: 10,
        role: 'employee',
        currentMonthAttendance: [
            { id: 201, date: '2024-10-14', time: '07:55', type: 'Clock In', status: 'Completed', location: 'Office Jln. Mawar', isLate: false, isEarlyLeave: false },
        ],
        attendancePhotos: [],
        salaryDetails: { basic: 6500000, allowance: 1500000, overtimeHours: 0, overtimeRate: 40000, bonus: 200000, deductions: 50000 },
        performanceScore: 4.8,
        managerId: 201,
        supervisorId: 401,
    },
    // Pegawai 3: Mark Benson
    {
        id: 3,
        name: 'Mark Benson',
        division: 'Tech',
        email: 'mark@company.com',
        phone: '081255556666',
        status: 'Active',
        joinDate: '2022-09-01',
        cutiBalance: 15,
        role: 'employee',
        currentMonthAttendance: [],
        attendancePhotos: [],
        salaryDetails: { basic: 9500000, allowance: 2500000, overtimeHours: 10, overtimeRate: 60000, bonus: 800000, deductions: 150000 },
        performanceScore: 4.0,
        managerId: 201,
        supervisorId: 401,
    }
    // ... PASTI DUMMY DATA LENGKAPMU ADA DI SINI ...
];

// --- Data Dummy Manajer (INITIAL_MANAGERS) ---
export const INITIAL_MANAGERS = [
    // Manager 1: Ibu Manajer Keren (Sama dengan DUMMY_AUTH manager)
    {
        id: 201,
        name: 'Ibu Manajer Keren',
        division: 'HR & GA',
        email: 'manager@company.com',
        phone: '081111112222',
        status: 'Active',
        joinDate: '2021-05-10',
        cutiBalance: 15,
        role: 'manager',
    },
    // ... PASTI DUMMY DATA LENGKAPMU ADA DI SINI ...
];

// --- Data Dummy Cuti Pending (INITIAL_PENDING_LEAVE) ---
export const INITIAL_PENDING_LEAVE = [
    {
        id: 101,
        employeeId: 1,
        employeeName: 'John Doe',
        employeeDivision: 'Tech',
        type: 'Izin Sakit',
        title: 'Sakit Demam',
        startDate: '2024-08-05',
        endDate: '2024-08-05',
        days: 1,
        reason: 'Demam tinggi, tidak bisa masuk kantor.',
        status: 'Pending',
        medicalCertificate: null
    },
    // ... PASTI DUMMY DATA LENGKAPMU ADA DI SINI ...
];

// --- Data Report Gaji Manajer (DUMMY_MANAGER_REPORTS) ---
export const DUMMY_MANAGER_REPORTS = [
    // Mengacu pada data dari DummyPayrollReport.jsx
    { id: 1, name: 'Bambang Sudarsono', role: 'Manager', salary: 15000000, deductions: 1200000, net: 13800000, status: 'Completed' },
    { id: 2, name: 'Siti Nurhaliza', role: 'Staff Marketing', salary: 7500000, deductions: 500000, net: 7000000, status: 'Pending' },
    { id: 3, name: 'Joko Widodo', role: 'Staff IT Support', salary: 8200000, deductions: 650000, net: 7550000, status: 'Completed' },
    // ... PASTI DUMMY DATA LENGKAPMU ADA DI SINI ...
];
// src/utils/constants.js (Tambahan di bagian bawah file)

// ... (lanjutan dari DUMMY_MANAGER_REPORTS dan INITIAL_PENDING_LEAVE)

// src/utils/constants.js (Tambahan di bagian bawah file)

// ... (lanjutan dari DUMMY_MANAGER_REPORTS dan INITIAL_PENDING_LEAVE)

// --- Data Dummy untuk Supervisor Task Approval ---
export const INITIAL_PENDING_TASKS = [
    {
        id: 1,
        employeeId: 101,
        employeeName: 'Djob Misael',
        division: 'Tech',
        taskTitle: 'Integrasi API Geolocation',
        description: 'Selesaikan integrasi API Geolocation ke DataService.',
        submittedAt: '2024-10-10',
        status: 'Pending',
        type: 'Submission',
        attachment: { name: 'geolocation_report.pdf' }
    },
    {
        id: 2,
        employeeId: 102,
        employeeName: 'Siti Nurhaliza',
        division: 'Marketing',
        taskTitle: 'Laporan Kampanye Q3',
        description: 'Review akhir data metrik kampanye digital kuartal 3.',
        submittedAt: '2024-10-11',
        status: 'Pending',
        type: 'Review',
        attachment: { name: 'campaign_q3.xlsx' }
    },
];

// --- Data Dummy untuk Supervisor Attendance Approval ---
export const INITIAL_PENDING_ATTENDANCE = [
    {
        id: 1,
        employeeId: 101,
        employeeName: 'Djob Misael',
        division: 'Tech',
        requestType: 'Missed Clock-Out',
        requestedDate: '2024-10-09',
        reason: 'Lupa clock-out karena meeting darurat di luar kantor hingga malam.',
        status: 'Pending',
        correctionData: { type: 'Clock Out', time: '17:30', location: 'Manual Correction' }
    },
    {
        id: 2,
        employeeId: 103,
        employeeName: 'Ahmad Budi',
        division: 'Finance',
        requestType: 'Location Mismatch',
        requestedDate: '2024-10-12',
        reason: 'Server GPS kantor sedang error, lokasi terbaca 100 meter dari kantor.',
        status: 'Pending',
        correctionData: { type: 'Clock In', time: '07:55', location: 'Kantor Pusat (Correction)' }
    },
];

// Pastikan Anda juga menambahkan kedua data ini ke `useAuth.js` agar state-nya diinisialisasi dan disimpan di localStorage.

// **********************************************************************
// CATATAN PENTING:
// FUNGSI calculateTotalSalary, formattedCurrency, dan showSwal SUDAH
// DIHAPUS DARI FILE INI dan dipindahkan ke utils/formatters.js dan utils/swal.js.
// **********************************************************************