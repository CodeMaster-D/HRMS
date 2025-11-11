// src/utils/swal.js
// Fungsi kustom untuk menampilkan SweetAlert2 (asumsi Swal sudah di-load di index.html)
export const showSwal = (title, text, icon, timer = 0) => {
  if (typeof Swal !== 'undefined') {
    Swal.fire({ 
      title, 
      html: text, 
      icon, 
      timer: timer > 0 ? timer : undefined,
      showConfirmButton: timer === 0,
      customClass: { 
        popup: 'rounded-xl shadow-lg bg-white',
        title: 'text-xl font-bold text-gray-800',
        htmlContainer: 'text-gray-600',
        confirmButton: 'focus:outline-none',
      },
      buttonsStyling: false,
    });
  } else {
    // Fallback jika Swal tidak terdefinisi
    console.warn(`[Swal Mock] Title: ${title}, Text: ${text}, Icon: ${icon}`);
    alert(`${title}\n${text}`);
  }
};
