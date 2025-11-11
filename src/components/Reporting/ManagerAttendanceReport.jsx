// src/components/Reporting/ManagerAttendanceReport.jsx
import React, { useState, useMemo } from 'react';
import { GlassCard } from '../UI/Cards';
import { PrimaryButton2 } from '../UI/Buttons';
import { showSwal } from '../../utils/swal';

// --- B6. Laporan Absensi Selfie ---
const ManagerAttendanceReport = ({ employees }) => {
    const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Kumpulkan semua foto absensi dari semua karyawan dan filter berdasarkan tanggal
    const filteredPhotos = useMemo(() => {
        // Gabungkan semua attendancePhotos dari setiap karyawan
        const allPhotos = employees.flatMap(emp => 
            emp.attendancePhotos ? emp.attendancePhotos.map(photo => ({
                ...photo,
                employeeName: emp.name, // Tambahkan nama karyawan
                employeeDivision: emp.division || 'N/A' // Tambahkan divisi
            })) : []
        );

        // Filter berdasarkan tanggal yang dipilih
        return allPhotos.filter(photo => photo.date === filterDate);
    }, [employees, filterDate]);

    // Handler untuk menampilkan modal foto
    const handleViewPhoto = (photo) => {
        setSelectedPhoto(photo);
    };

    // Handler untuk Export data ke Excel
    const handleExportExcel = () => {
        const { default: XLSX } = require('xlsx'); // Import lokal

        const data = filteredPhotos.map(photo => ({
            "Tanggal": photo.date,
            "Waktu": photo.time,
            "Nama Karyawan": photo.employeeName,
            "Tipe Absensi": photo.type,
            "Lokasi": photo.location,
            "ID Karyawan": photo.employeeId,
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Absensi Selfie");
        
        XLSX.writeFile(workbook, `Laporan_Absensi_Selfie_${filterDate}.xlsx`);
        showSwal('Berhasil!', 'Laporan Absensi Selfie telah di-export ke Excel.', 'success');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <i className="fas fa-camera mr-3 text-[#708993]"></i> Laporan Absensi Selfie
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <i className="fas fa-info-circle"></i>
                    <span>Total {filteredPhotos.length} foto absensi</span>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-3 md:space-y-0">
                    {/* Filter Tanggal */}
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                        <label htmlFor="date-filter" className="font-medium text-gray-700">Pilih Tanggal:</label>
                        <input
                            type="date"
                            id="date-filter"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="p-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#708993] focus:border-transparent text-black"
                        />
                    </div>
                    {/* Tombol Export */}
                    <PrimaryButton2 onClick={handleExportExcel} className="bg-[#708993] hover:bg-[#5a717b] text-sm py-2 px-4 w-full md:w-auto">
                        <i className="fas fa-file-excel mr-2"></i> Export Data
                    </PrimaryButton2>
                </div>
                
                {/* Grid Foto Absensi */}
                {filteredPhotos.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <i className="fas fa-calendar-times text-4xl text-gray-300 mb-3"></i>
                        <p className="text-gray-500">Tidak ada foto absensi pada tanggal <span className="font-semibold">{filterDate}</span>.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[70vh] overflow-y-auto p-2">
                        {filteredPhotos.map((photo) => (
                            <div 
                                key={photo.id} 
                                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                onClick={() => handleViewPhoto(photo)}
                            >
                                {/* Foto Selfie */}
                                <img
                                    src={photo.photo}
                                    alt={`Absensi ${photo.employeeName} pada ${photo.time}`}
                                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay Info */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="font-semibold text-sm truncate">{photo.employeeName}</p>
                                    <p className="text-xs">{photo.type} | {photo.time}</p>
                                    <p className="text-xs italic mt-1 text-gray-200 truncate" title={photo.location}>{photo.location.split('(')[0]}</p>
                                </div>
                                {/* Badge Tipe */}
                                <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded ${photo.type === 'Clock In' ? 'bg-[#708993]' : 'bg-orange-500'}`}>
                                    {photo.type}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal Detail Foto */}
            {selectedPhoto && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {/* Header Modal */}
                        <div className="bg-gradient-to-r from-[#708993] to-[#5a717b] p-4 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white">Detail Foto Absensi</h3>
                            <button 
                                onClick={() => setSelectedPhoto(null)} 
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                            >
                                <i className="fas fa-times text-white"></i>
                            </button>
                        </div>
                        
                        {/* Content Modal */}
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <img 
                                        src={selectedPhoto.photo} 
                                        alt="Absensi detail" 
                                        className="w-full h-auto rounded-lg shadow-md object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{selectedPhoto.employeeName}</h4>
                                        <p className="text-sm text-gray-600">{selectedPhoto.employeeDivision}</p>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm">
                                            <i className="fas fa-tag w-5 text-[#708993]"></i>
                                            <span className="font-medium mr-2">Tipe:</span>
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${selectedPhoto.type === 'Clock In' ? 'bg-[#708993]/20 text-[#708993]' : 'bg-orange-100 text-orange-600'}`}>
                                                {selectedPhoto.type}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center text-sm">
                                            <i className="fas fa-calendar-day w-5 text-[#708993]"></i>
                                            <span className="font-medium mr-2">Tanggal:</span>
                                            <span className="text-gray-700">{selectedPhoto.date}</span>
                                        </div>
                                        
                                        <div className="flex items-center text-sm">
                                            <i className="fas fa-clock w-5 text-[#708993]"></i>
                                            <span className="font-medium mr-2">Waktu:</span>
                                            <span className="text-gray-700">{selectedPhoto.time}</span>
                                        </div>
                                        
                                        <div className="flex items-start text-sm">
                                            <i className="fas fa-map-marker-alt w-5 text-[#708993] mt-0.5"></i>
                                            <span className="font-medium mr-2">Lokasi:</span>
                                            <span className="text-gray-700 break-words">{selectedPhoto.location}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="pt-4">
                                        <button 
                                            onClick={() => setSelectedPhoto(null)}
                                            className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            Tutup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerAttendanceReport;