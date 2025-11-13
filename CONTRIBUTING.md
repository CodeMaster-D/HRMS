# Panduan Kontribusi ke Human Resource Management System

Selamat datang di panduan kontribusi untuk proyek "Human Resource Management System : Real-time Attendance & Permit Management". Kami sangat senang Anda tertarik untuk berkontribusi pada pengembangan sistem manajemen sumber daya manusia yang modern ini!

## Kode Etik

Kami menerapkan Kode Etik yang diharapkan dipatuhi oleh semua peserta proyek. Mohon [baca teks lengkapnya](./CODE_OF_CONDUCT.md) agar Anda memahami tindakan-tindakan yang akan atau tidak akan ditoleransi.

## Proses Pengembangan Kami

Kami menggunakan GitHub untuk melacak masalah (issues) dan permintaan fitur, serta sebagai tempat utama untuk menerima permintaan tarik (pull requests). Proses pengembangan kami berfokus pada kolaborasi terbuka untuk memastikan kualitas dan stabilitas aplikasi.

## Permintaan Tarik (Pull Requests)

Kami dengan penuh semangat menyambut permintaan tarik (pull requests) dari Anda, baik itu untuk perbaikan bug, penambahan fitur, maupun peningkatan dokumentasi. Untuk berkontribusi pada proyek ini, ikuti langkah-langkah di bawah ini:

1.  **Fork Repositori dan Buat Cabang**

    -   Fork repositori ini ke akun GitHub Anda.
    -   Buatlah cabang baru dari branch `main` (atau `master`) di repositori Anda untuk setiap fitur atau perbaikan yang Anda kerjakan. Gunakan nama cabang yang deskriptif, misalnya: `feature/tambah-validasi-izin` atau `fix/perbaiki-modal-kamera`.

2.  **Lakukan Perubahan Kode**

    -   Identifikasi area yang akan Anda ubah. Proyek ini memiliki struktur yang modular, perhatikan direktori berikut:
        -   `src/components/`: Untuk perubahan atau penambahan komponen UI (misalnya, modal, tabel, formulir).
        -   `src/hooks/`: Untuk perubahan pada logika yang dapat digunakan kembali, seperti `useAuth.js`, `useCamera.js`, atau `useFaceDetection.js`.
        -   `src/services/`: Untuk modifikasi cara aplikasi berinteraksi dengan API (meskipun saat ini menggunakan data dummy, ini adalah tempat logika API akan berada).
    -   Ikuti gaya dan pola kode yang sudah ada untuk menjaga konsistensi.

3.  **Uji Perubahan Anda**

    -   Jalankan server pengembangan untuk memastikan perubahan Anda tidak merusak fungsionalitas yang ada.
        ```bash
        npm run dev
        ```
    -   Pastikan fitur yang Anda ubah berjalan dengan baik. Misalnya, jika Anda mengubah deteksi wajah, uji modal kamera. Jika Anda mengubah RBAC, uji dengan berbagai peran pengguna.
    -   Jalankan perintah build untuk memastikan tidak ada kesalahan saat aplikasi dibuat untuk produksi.
        ```bash
        npm run build
        ```

4.  **Commit, Push, dan Pull-Request**

    -   Lakukan commit perubahan Anda dengan pesan commit yang jelas dan deskriptif.
    -   Push commit Anda ke cabang di repositori GitHub Anda.
    -   Ajukan pull-request dari cabang Anda ke branch `main` di repositori ini. Berikan deskripsi yang jelas tentang apa yang Anda ubah dan mengapa perubahan itu diperlukan.

Kami akan melakukan review pada permintaan tarik yang diajukan dan merespons secepat mungkin. Terima kasih atas kontribusi Anda untuk membuat Human Resource Management System ini semakin baik!

## Masalah (Issues)

Kami menggunakan GitHub Issues untuk melacak bug publik dan permintaan fitur. Saat membuat isu baru, pastikan deskripsi Anda jelas dan memiliki informasi yang cukup untuk mereproduksi masalah. Jika memungkinkan, berikan langkah-langkah reproduksi, perilaku yang diharapkan, dan perilaku yang terjadi.

## Pengelolaan Masalah

Berikut adalah beberapa label (tag) yang kami gunakan untuk mengatur masalah di repositori ini:

-   `good first issue`: Kandidat yang baik untuk kontributor baru dalam proyek ini.
-   `help wanted`: Masalah yang perlu ditangani dan kami menyambut permintaan tarik untuknya, tetapi mungkin memerlukan penyelidikan atau pekerjaan yang signifikan.
-   `bug`: Kesalahan atau perilaku yang tidak diinginkan dalam aplikasi.
-   `enhancement`: Permintaan untuk peningkatan fitur yang sudah ada.
-   `documentation`: Terkait peningkatan dokumentasi proyek (README, komentar kode, dll.).
-   `question`: Pertanyaan khusus untuk para pengelola atau komunitas.

## Area Fokus Kontribusi

Proyek ini memiliki beberapa area teknis yang menantang. Kontribusi Anda sangat dihargai, terutama di area berikut:

1.  **Komponen UI/UX**: Meningkatkan desain, aksesibilitas, dan pengalaman pengguna pada komponen seperti formulir izin, dashboard, dan modal absensi.
2.  **Logika Bisnis & Hooks**: Memperbaiki atau menambahkan fungsionalitas pada custom hooks seperti `useAuth` (manajemen peran), `useCamera` (integrasi kamera), dan `useFaceDetection` (integrasi ML).
3.  **Integrasi Machine Learning**: Area yang paling kompleks. Bantuan dalam mengoptimalkan performa model deteksi wajah (MediaPipe/TensorFlow), menangani kasus edge (gagal deteksi), atau mengganti model dengan yang lebih ringan akan sangat berharga.
4.  **Dokumentasi**: Membuat dokumentasi yang lebih mendalam, baik di dalam kode (komentar) maupun di luar kode (misalnya, panduan cara menambahkan peran baru atau cara kerja alur geolokasi).

Kami berkomitmen untuk menjaga kualitas dan keandalan sistem ini. Kontribusi Anda dalam memantau, melaporkan, atau membantu pengembangan akan sangat dihargai.

## Lisensi

Dengan berkontribusi pada Human Resource Management System, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah [Lisensi Apache 2.0](./LICENSE).
