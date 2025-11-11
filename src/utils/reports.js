// src/utils/reports.js
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
// Asumsi library DOCX (atau yang kamu pakai) sudah terinstal
import { Document, Packer, Paragraph, TextRun } from 'docx'; 
import { formattedCurrency } from './formatters'; // Import formatter baru

/**
 * Fungsi untuk Export Data ke PDF (menggunakan jspdf-autotable)
 * @param {string} title - Judul laporan
 * @param {Array<string>} headers - Header kolom
 * @param {Array<Array<any>>} data - Data baris
 * @param {string} filename - Nama file
 */
export const exportToPDF = (title, headers, data, filename = 'laporan.pdf') => {
    const doc = new jsPDF();
    doc.text(title, 14, 20);

    // Pastikan data dipetakan ke string jika ada angka yang perlu diformat (misalnya di dashboard gaji)
    const body = data.map(row => row.map(cell => {
        if (typeof cell === 'number') {
            return formattedCurrency(cell);
        }
        return cell;
    }));

    doc.autoTable({
        startY: 25,
        head: [headers],
        body: body,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246] }, // Warna biru (Primary dari COLORS)
    });

    doc.save(filename);
};

/**
 * Fungsi untuk Export Data ke Excel (XLSX)
 * @param {string} sheetName - Nama sheet
 * @param {Array<Object>} data - Array of objects (lebih mudah diproses XLSX)
 * @param {string} filename - Nama file
 */
export const exportToXLSX = (sheetName, data, filename = 'laporan.xlsx') => {
    // Data harus dalam format array of objects: [{ header: value, ... }]
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    
    // Terapkan format Rupiah ke kolom yang mengandung nilai uang (misalnya, 'salary', 'deductions', 'net')
    const sheet = workbook.Sheets[sheetName];
    const range = XLSX.utils.decode_range(sheet['!ref']);
    
    for(let R = range.s.r; R <= range.e.r; ++R) {
        for(let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = XLSX.utils.encode_cell({r: R, c: C});
            const cell = sheet[cellAddress];
            
            // Cek jika header kolom adalah data uang
            const headerCell = sheet[XLSX.utils.encode_cell({r: 0, c: C})];
            const header = headerCell ? headerCell.v.toLowerCase() : '';

            if (cell && (header.includes('gaji') || header.includes('salary') || header.includes('net') || header.includes('potongan') || header.includes('deduction')) && typeof cell.v === 'number') {
                 // Set format mata uang Indonesia
                cell.z = "Rp#,##0"; 
            }
        }
    }
    
    XLSX.writeFile(workbook, filename);
};


/**
 * Fungsi untuk Export Teks/Laporan Sederhana ke DOCX
 * @param {string} content - Konten teks
 * @param {string} filename - Nama file
 */
export const exportToDOCX = async (content, filename = 'laporan.docx') => {
    const doc = new Document({
        sections: [{
            children: [
                new Paragraph({
                    children: [
                        new TextRun(content),
                    ],
                }),
            ],
        }],
    });

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    
    // Trigger download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};