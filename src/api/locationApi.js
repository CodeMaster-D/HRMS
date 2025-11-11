import { showSwal } from '../utils/swal';

// === Fungsi untuk dapatkan lokasi user ===
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
          // Reverse geocoding (OpenStreetMap)
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { headers: { 'User-Agent': 'HRIS-System/1.0' } }
          );

          const data = await response.json();
          const address = data.display_name || 'Lokasi tidak diketahui';

          resolve({
            latitude,
            longitude,
            address,
            coordinates: `${latitude}, ${longitude}`,
          });
        } catch (error) {
          showSwal('Gagal Lokasi', 'Gagal mendapatkan alamat: ' + error.message, 'error');
          reject(error);
        }
      },
      (error) => {
        let message = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Izin lokasi ditolak oleh pengguna.';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Informasi lokasi tidak tersedia.';
            break;
          case error.TIMEOUT:
            message = 'Permintaan lokasi melebihi batas waktu.';
            break;
          default:
            message = 'Terjadi kesalahan yang tidak diketahui.';
        }
        showSwal('Gagal Lokasi', `Gagal mendapatkan lokasi: ${message}`, 'error');
        reject(new Error(message));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
};

// ==== Fungsi menghitung jarak (meter) ====
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371e3;
  const φ1 = toRad(parseFloat(lat1));
  const φ2 = toRad(parseFloat(lat2));
  const Δφ = toRad(parseFloat(lat2) - parseFloat(lat1));
  const Δλ = toRad(parseFloat(lon2) - parseFloat(lon1));

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

