import { useState, useEffect } from 'react';
import { 
    DUMMY_AUTH, 
    INITIAL_EMPLOYEES, 
    INITIAL_MANAGERS, 
    INITIAL_PENDING_LEAVE, // Import showSwal disatukan ke constants
} from '../utils/constants'; 
import { showSwal } from '../utils/swal';


// Helper function untuk lazy initialization state
// Mengambil data dari localStorage atau menggunakan data awal (INITIAL_...)
const getInitialState = (key, initialData) => {
    const saved = localStorage.getItem(key);
    // Jika ada data di localStorage, gunakan data tersebut. Jika tidak, gunakan initialData.
    return saved ? JSON.parse(saved) : initialData;
};

export const useAuth = () => {
    const [authUser, setAuthUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    );
    const [isLoading, setIsLoading] = useState(false);
    
    // ✨ FIX: Menggunakan lazy initializer function untuk inisialisasi data
    // Ini menggantikan logika useState dan useEffect inisialisasi yang lama
    const [employees, setEmployees] = useState(() => getInitialState('employees', INITIAL_EMPLOYEES));
    const [managers, setManagers] = useState(() => getInitialState('managers', INITIAL_MANAGERS));
    const [pendingLeave, setPendingLeave] = useState(() => getInitialState('pendingLeave', INITIAL_PENDING_LEAVE));
    
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    // ✨ CATATAN: useEffect inisialisasi (yang memeriksa localStorage === null) DIHAPUS 
    // karena sudah ditangani oleh lazy initialization di atas.

    // Sync state ke localStorage (Effect ini tetap dibutuhkan untuk menyimpan perubahan)
    useEffect(() => {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('managers', JSON.stringify(managers));
        localStorage.setItem('pendingLeave', JSON.stringify(pendingLeave));
    }, [authUser, employees, managers, pendingLeave]);

    // --- Update handleLogin jadi dinamis ---\r\n
    const handleLogin = (username, password) => {
        setIsLoading(true);

        setTimeout(() => {
            let foundUser = null;

            // Loop melalui semua role untuk menemukan user
            for (const key in DUMMY_AUTH) {
                const user = DUMMY_AUTH[key];
                if (user.username === username && user.password === password) {
                    // Cari data employee/manager lengkap dari state utama (employees/managers)
                    if (user.role === 'employee') {
                        foundUser = employees.find(e => e.id === user.id) || user;
                    } else if (user.role === 'manager') {
                        foundUser = managers.find(m => m.id === user.id) || user;
                    } else {
                        // Owner/Supervisor: Gunakan data dari DUMMY_AUTH
                        foundUser = user;
                    }
                    
                    // Tambahkan riwayat login
                    const loginRecord = { time: new Date().toISOString(), method: 'Username/Password' };
                    // Ambil riwayat lama atau array kosong, lalu tambahkan yang baru (maks 5)
                    const currentHistory = foundUser.loginHistory || [];
                    foundUser.loginHistory = [loginRecord, ...currentHistory.slice(0, 4)]; 
                    
                    // Update state employee/manager di state utama
                    if (user.role === 'employee') {
                        setEmployees(prev => prev.map(e => e.id === foundUser.id ? foundUser : e));
                    } else if (user.role === 'manager') {
                        setManagers(prev => prev.map(m => m.id === foundUser.id ? foundUser : m));
                    }

                    break;
                }
            }

            if (foundUser) {
                setAuthUser(foundUser);
                showSwal('Login Berhasil!', `Selamat datang, ${foundUser.name} (${foundUser.role.toUpperCase()})!`, 'success', 2000);
            } else {
                showSwal('Login Gagal', 'Username atau password salah.', 'error');
            }

            setIsLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        localStorage.removeItem('authUser');
        setAuthUser(null);
        setIsLogoutModalOpen(false);
        showSwal('Logout Sukses', 'Anda telah berhasil keluar.', 'success', 1500);
    };

    const handleLogoutClick = () => {
        setIsLogoutModalOpen(true);
    };

    return {
        authUser,
        setAuthUser,
        isLoading,
        employees,
        setEmployees,
        managers,
        setManagers,
        pendingLeave,
        setPendingLeave,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        handleLogin,
        handleLogout,
        handleLogoutClick,
    };
};