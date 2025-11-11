import { showSwal } from '../utils/swal'; 
import axios from 'axios'; // Tambahkan import axios jika lo menggunakannya di tempat lain

// Fungsi untuk mendapatkan lokasi (getCurrentLocation)
export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation tidak didukung oleh browser ini'));
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                
                try {
                    // Menggunakan Nominatim API dari OpenStreetMap untuk reverse geocoding
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
                        {
                            headers: {
                                'User-Agent': 'HRIS-System/1.0' // Penting untuk API eksternal
                            }
                        }
                    );
                    
                    if (!response.ok) {
                        throw new Error('Gagal mendapatkan alamat dari lokasi');
                    }
                    
                    const data = await response.json();
                    const address = data.display_name || 'Lokasi tidak diketahui';
                    
                    resolve({
                        coordinates: `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`,
                        address: address
                    });
                } catch (error) {
                    // Blok ini menangani GAGAL mendapatkan alamat dari lokasi (Reverse Geocoding Gagal)
                    console.error('Error getting address:', error);
                    
                    // Logika Fallback (tetap gunakan koordinat dan estimasi nama lokasi)
                    let locationName = 'Lokasi tidak diketahui (Gagal Reverse Geocoding)';
                    
                    if (latitude > -6.3 && latitude < -6.1 && longitude > 106.7 && longitude < 106.9) {
                        locationName = 'Jakarta Pusat, Indonesia (Estimasi)';
                    } else if (latitude > -6.4 && latitude < -6.2 && longitude > 106.8 && longitude < 107.0) {
                        locationName = 'Jakarta Selatan, Indonesia (Estimasi)';
                    } else if (latitude > -6.1 && latitude < -5.9 && longitude > 106.7 && longitude < 106.9) {
                        locationName = 'Jakarta Utara, Indonesia (Estimasi)';
                    }
                    
                    // LOKASI TETAP DIDAPATKAN (HANYA ALAMATNYA YANG ESTIMASI)
                    resolve({
                        coordinates: `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`,
                        address: locationName
                    });
                }
            },
            (error) => {
                let errorMessage = 'Tidak dapat mendapatkan lokasi';
                let alertMessage = 'Lokasi Anda tidak dapat diakses. Pastikan Anda mengizinkan akses lokasi untuk melakukan absensi.';
                
                switch(error.code) {
                    case error.PERMISSION_DENIED: 
                        errorMessage = 'Izin lokasi ditolak oleh pengguna'; 
                        alertMessage = 'Izin lokasi ditolak. Harap izinkan akses lokasi di pengaturan browser/HP Anda. Absensi dibatalkan.';
                        break;
                    case error.POSITION_UNAVAILABLE: 
                        errorMessage = 'Informasi lokasi tidak tersedia (Coba hidupkan GPS)'; 
                        alertMessage = 'Informasi lokasi tidak tersedia. Pastikan **GPS** Anda aktif atau coba di tempat terbuka. Absensi dibatalkan.';
                        break;
                    case error.TIMEOUT: 
                        errorMessage = 'Permintaan lokasi timeout'; 
                        alertMessage = 'Permintaan lokasi **timeout**. Koneksi lambat atau GPS tidak stabil. Coba lagi. Absensi dibatalkan.';
                        break;
                    default: 
                        errorMessage = 'Error tidak diketahui'; 
                        break;
                }
                
                // Panggil Sweet Alert untuk kasus GAGAL akses lokasi (PERMISSION_DENIED, TIMEOUT, dsb)
                showSwal(
                    'Absensi Gagal!',
                    alertMessage,
                    'error', // Gunakan 'error' untuk menunjukkan kegagalan total
                    5000 
                );
                
                // Tolak Promise, yang akan memicu blok catch di handleAttendanceClock dan menghentikan absensi
                reject(new Error(errorMessage));
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
    });
};

// Fungsi untuk menangani absensi (logic dari handleCameraCapture/handleClockIn/Out)
export const handleAttendanceClock = async (user, photoData, type) => {
    const action = type === 'Clock In' ? 'Masuk' : 'Pulang';
    
    try {
        // Jika getCurrentLocation berhasil resolve (baik lokasi tepat atau estimasi alamat)
        const location = await getCurrentLocation(); 
        
        // Logika pembuatan record baru jika lokasi SUKSES atau GAGAL REVERSE GEOCODING
        const now = new Date();
        const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const dateString = now.toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const isLate = type === 'Clock In' && (now.getHours() > 8 || (now.getHours() === 8 && now.getMinutes() > 0));
        
        const newRecord = { 
            id: Date.now(), 
            date: dateString, 
            type: type, 
            time: timeString, 
            location: `${location.coordinates} (${location.address})`, 
            late: isLate, 
            photo: photoData 
        };
        
        const newPhotoRecord = { 
            id: Date.now(), 
            date: dateString, 
            time: timeString, 
            type: type, 
            photo: photoData, 
            location: `${location.coordinates} (${location.address})`, 
            employeeId: user.id, 
            employeeName: user.name, 
            division: user.division || 'N/A', 
            employeeEmail: user.email || 'N/A', 
            employeePhone: user.phone || 'N/A', 
        };
        
        showSwal( 
            'Absensi Sukses!', 
            `Anda berhasil <strong>Clock ${action}</strong> pada pukul <strong>${timeString}</strong>.<br/> Lokasi: ${location.address}<br/> Foto selfie telah dikirim ke manager. ${isLate ? '<span class="text-red-600 font-bold">Terlambat!</span>' : ''}`, 
            'success', 
            4000 
        );

        return { success: true, newRecord, newPhotoRecord };

    } catch (error) {
        // Blok ini menangani GAGAL TOTAL mendapatkan lokasi (PERMISSION_DENIED, TIMEOUT, dsb)
        // SweetAlert sudah dipanggil di getCurrentLocation.
        console.error('Absensi dibatalkan karena Gagal Lokasi:', error.message);
        
        // HENTIKAN proses absensi. Jangan buat record.
        return { success: false, error: error.message };
    }
};

// Di sini nanti akan ditambah fungsi seperti updateEmployeeProfile, approveLeave, dll.
export default {
    getCurrentLocation,
    handleAttendanceClock,
};
