import React, { useState, useRef, useEffect } from 'react';
import { Camera, ClipboardList, TrendingUp, DollarSign, X } from 'lucide-react';

// Data dummy untuk simulasi laporan
const dummyReports = [
    { id: 1, name: 'Bambang Sudarsono', role: 'Manager', salary: 15000000, deductions: 1200000, net: 13800000, status: 'Completed' },
    { id: 2, name: 'Siti Nurhaliza', role: 'Staff Marketing', salary: 7500000, deductions: 500000, net: 7000000, status: 'Pending' },
    { id: 3, name: 'Joko Widodo', role: 'Staff IT Support', salary: 8200000, deductions: 650000, net: 7550000, status: 'Completed' },
];

// Fungsi untuk memformat angka menjadi mata uang Rupiah
const formatRupiah = (number) => {
    if (number === undefined || number === null) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};

// Komponen utama (Menggunakan nama 'App' agar kompatibel dengan lingkungan React sandbox)
const ManagerReports = () => {
    const [reports, setReports] = useState(dummyReports);
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [cameraStatus, setCameraStatus] = useState('Idle: Klik tombol untuk memulai presensi.');
    const videoRef = useRef(null);
    const streamRef = useRef(null); // Untuk menyimpan stream kamera agar bisa dihentikan

    // Fungsi untuk memulai akses kamera
    const startCamera = async () => {
        // Cek apakah API MediaDevices tersedia di browser
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setCameraStatus('Gagal: Browser tidak mendukung akses kamera (MediaDevices API tidak ditemukan).');
            setIsCameraActive(false);
            return;
        }
        
        setCameraStatus('Meminta akses kamera...');
        setIsCameraActive(true);

        try {
            // Meminta akses ke video (kamera) dengan resolusi ideal
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: {
                    width: { ideal: 640 }, 
                    height: { ideal: 480 }
                } 
            });
            
            // Menampilkan stream ke elemen <video>
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                // Memastikan video mulai diputar
                videoRef.current.play().catch(e => console.error("Video play failed:", e));
            }
            streamRef.current = stream; // Simpan stream
            setCameraStatus('Live Camera Feed Aktif. Waktunya Presensi!');

        } catch (error) {
            console.error("Gagal mengakses kamera:", error);
            setIsCameraActive(false);
            
            let errorMessage = 'Terjadi kesalahan tidak terduga saat memulai kamera.';
            if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
                errorMessage = 'Gagal Akses: Mohon izinkan penggunaan kamera. (Izin Ditolak Browser).';
            } else if (error.name === 'NotFoundError') {
                errorMessage = 'Gagal: Tidak ditemukan perangkat kamera di perangkat ini.';
            } else if (error.name === 'NotReadableError') {
                errorMessage = 'Gagal: Kamera sedang digunakan oleh aplikasi lain.';
            }

            setCameraStatus(errorMessage);
        }
    };

    // Fungsi untuk menghentikan akses kamera
    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        setIsCameraActive(false);
        setCameraStatus('Akses kamera dihentikan.');
    };

    // Bersihkan stream saat komponen di-unmount
    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    // Handler untuk tombol presensi
    const handlePresensiClick = () => {
        if (!isCameraActive) {
            startCamera();
        } else {
            stopCamera();
        }
    };

    // Kartu untuk menampilkan status kamera
    const CameraCard = () => (
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Sistem Presensi
            </h3>
            
            <button
                onClick={handlePresensiClick}
                className={`w-full py-3 px-4 mb-3 rounded-lg font-bold transition duration-300 transform hover:scale-[1.02] ${
                    isCameraActive 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-md' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                }`}
            >
                {isCameraActive ? 'Hentikan Kamera' : 'Mulai Presensi (Akses Kamera)'}
            </button>

            {/* Elemen Video untuk menampilkan feed kamera */}
            {/* Aspect-video memastikan rasio tetap saat kamera aktif */}
            <div className={`w-full aspect-video overflow-hidden rounded-lg bg-gray-900 border-4 border-gray-700 transition-all duration-300 ${isCameraActive ? 'block' : 'hidden'}`}>
                {isCameraActive && (
                    <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        className="w-full h-full object-cover"
                        style={{ transform: 'scaleX(-1)' }} // Membalik gambar (agar terlihat seperti cermin)
                    />
                )}
            </div>

            {/* Status Kamera yang Lebih Informatif */}
            <p className={`mt-4 text-sm font-medium text-center p-2 rounded-lg w-full ${
                cameraStatus.includes('Gagal Akses') || cameraStatus.includes('Gagal:') || cameraStatus.includes('tidak ditemukan')
                    ? 'bg-red-100 text-red-700' 
                    : isCameraActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
            }`}>
                {cameraStatus}
            </p>
            {(cameraStatus.includes('Izin Ditolak') || cameraStatus.includes('tidak didukung')) && (
                <p className="text-xs text-red-500 mt-1 text-center">
                    Tolong pastikan Anda memberikan izin akses kamera pada *pop-up* browser atau cek perangkat Anda.
                </p>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
                    <ClipboardList className="w-8 h-8 mr-2 text-indigo-600" />
                    Employee Payroll & Access System
                </h1>
                <p className="text-gray-500">Dummy Data untuk Laporan Gaji dan Integrasi Kamera Presensi</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Kolom 1: Kamera dan Presensi */}
                <div className="lg:col-span-1">
                    <CameraCard />
                </div>

                {/* Kolom 2: Laporan Gaji */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                            <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                            Ringkasan Laporan Gaji (Periode Okt 2025)
                        </h2>
                        
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {['Nama Karyawan', 'Jabatan', 'Gaji Pokok', 'Potongan', 'Gaji Bersih', 'Status'].map(header => (
                                            <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {reports.map((report) => (
                                        <tr key={report.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{formatRupiah(report.salary)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">{formatRupiah(report.deductions)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-bold">{formatRupiah(report.net)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    report.status === 'Completed' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {report.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
                Data ini adalah dummy dan fungsionalitas kamera diaktifkan menggunakan Web Media API.
            </footer>
        </div>
    );
};

export default ManagerReports;
