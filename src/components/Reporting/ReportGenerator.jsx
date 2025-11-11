// src/components/ReportGenerator.jsx
import React from 'react';
import { PrimaryButton } from '../Shared/Modals/componentsUtilityUI';
import { showSwal } from '../../utils/swal'; // Pastikan showSwal diimpor dari utils/swal.js

// Pastikan library ini sudah terinstall:
// npm install jspdf jspdf-autotable xlsx
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

/**
 * Komponen utility untuk menghasilkan dan mendownload laporan dalam format PDF dan Excel.
 *
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul Laporan
 * @param {Array<object>} props.data - Data array yang akan diekspor
 * @param {Array<{header: string, dataKey: string, format?: (value: any) => string}>} props.columns - Definisi kolom untuk tabel (untuk jsPDF dan data mapping)
 * @param {string} props.filename - Nama file tanpa ekstensi
 * @param {string} props.buttonText - Teks pada tombol utama
 * @param {string} props.className - Kelas CSS tambahan untuk tombol
 */
const ReportGenerator = ({ title, data, columns, filename, buttonText, className = '' }) => {

    // --- LOGIC EXPORT PDF (jsPDF + autoTable) ---
    const exportPDF = () => {
        if (!data || data.length === 0) {
            showSwal('Gagal', 'Tidak ada data untuk diekspor ke PDF.', 'error');
            return;
        }
        
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const tableColumn = columns.map(col => col.header);
        const tableRows = data.map(item => 
            columns.map(col => col.format ? col.format(item[col.dataKey]) : item[col.dataKey])
        );

        doc.setFontSize(18);
        doc.text(title, 14, 20);
        doc.setFontSize(11);
        doc.text(`Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}`, 14, 25);

        doc.autoTable({
            startY: 30,
            head: [tableColumn],
            body: tableRows,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [40, 40, 100], textColor: 255 },
            alternateRowStyles: { fillColor: [240, 240, 240] },
            margin: { top: 10 }
        });

        doc.save(`${filename}_${new Date().toISOString().split('T')[0]}.pdf`);
        showSwal('Sukses!', 'Laporan PDF berhasil di-download.', 'success', 2000);
    };

    // --- LOGIC EXPORT EXCEL (XLSX) ---
    const exportExcel = () => {
        if (!data || data.length === 0) {
            showSwal('Gagal', 'Tidak ada data untuk diekspor ke Excel.', 'error');
            return;
        }

        // 1. Mapping data ke format yang lebih mudah dibaca di Excel
        const exportData = data.map(item => {
            let row = {};
            columns.forEach(col => {
                // Gunakan header sebagai kunci, dan gunakan format jika ada
                row[col.header] = col.format ? col.format(item[col.dataKey]) : item[col.dataKey];
            });
            return row;
        });

        // 2. Membuat workbook dan sheet
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, title.substring(0, 30)); // Batasi nama sheet

        // 3. Download
        XLSX.writeFile(wb, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
        showSwal('Sukses!', 'Laporan Excel berhasil di-download.', 'success', 2000);
    };


    return (
        <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ${className}`}>
            <PrimaryButton onClick={exportPDF} className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                <i className="fas fa-file-pdf mr-2"></i> Download PDF
            </PrimaryButton>
            <PrimaryButton onClick={exportExcel} className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                <i className="fas fa-file-excel mr-2"></i> Download Excel
            </PrimaryButton>
        </div>
    );
};

export default ReportGenerator;