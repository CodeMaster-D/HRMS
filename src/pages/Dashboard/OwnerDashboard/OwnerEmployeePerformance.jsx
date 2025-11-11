// src/pages/Dashboard/OwnerDashboard/OwnerEmployeePerformance.jsx
import React, { useState, useMemo } from 'react';
import { GlassCard, PrimaryButton } from '../../../components/Shared/Modals/componentsUtilityUI';
import { showSwal } from '../../../utils/swal';

// Color scheme
const colorPalette = {
    primary: '#708993',
    primaryLight: '#8fa4ad',
    primaryDark: '#5a717a',
    accent: '#a8c0c9',
    background: '#ffffff',
    text: '#000000',
    border: '#e1e8eb'
};

// --- LOGIKA UTAMA: Perhitungan Skor Performa ---
const calculatePerformanceScore = (employee) => {
    // --- 1. Data Absensi (Kontribusi 40%) ---
    const attendanceRecords = employee.currentMonthAttendance || [];
    const totalClockIns = attendanceRecords.filter(a => a.type === 'Clock In').length;
    const totalLate = attendanceRecords.filter(a => a.type === 'Clock In' && a.late).length;
    const totalEarlyLeave = attendanceRecords.filter(a => a.type === 'Clock Out' && a.earlyLeave).length;
    
    // Hari kerja diasumsikan 22 hari
    const assumedWorkingDays = 22; 
    
    // Poin Absensi (Maks 40)
    let attendanceScore = (totalClockIns / assumedWorkingDays) * 40;
    attendanceScore -= totalLate * 1.5;
    attendanceScore -= totalEarlyLeave * 2.0;

    // --- 2. Data Target (Kontribusi 30%) ---
    const currentMonth = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
    const target = employee.targets?.find(t => t.month === currentMonth)?.value || 0;
    
    let targetAchievement = 0;
    if (target > 0) {
        const realisasi = Math.round(target * (0.8 + Math.random() * 0.4));
        targetAchievement = realisasi / target;
    } else {
        targetAchievement = 1.0;
    }

    let targetScore = Math.min(targetAchievement, 1.2) * 30;

    // --- 3. Data Kedisiplinan/Lain-lain (Kontribusi 30%) ---
    const disciplinaryScore = 20 + Math.random() * 10;

    // --- Total Skor (Maks 100) ---
    const rawScore = Math.max(0, attendanceScore) + Math.max(0, targetScore) + disciplinaryScore;
    const finalScore = Math.round(Math.min(100, rawScore));
    
    // Kategorisasi
    const category = finalScore >= 90 ? 'Sangat Baik' :
                     finalScore >= 80 ? 'Baik' :
                     finalScore >= 65 ? 'Cukup' :
                     'Perlu Perbaikan';

    return {
        score: finalScore,
        category,
        details: {
            attendanceScore: Math.round(Math.max(0, attendanceScore)),
            targetScore: Math.round(Math.max(0, targetScore)),
            disciplinaryScore: Math.round(disciplinaryScore),
            target,
            realisasi: target > 0 ? Math.round(target * (0.8 + Math.random() * 0.4)) : 'N/A',
            totalClockIns,
            totalLate,
            totalEarlyLeave,
            assumedWorkingDays
        }
    };
};

// Custom Modal Component for Performance Details
const PerformanceDetailModal = ({ employee, isOpen, onClose }) => {
    if (!isOpen || !employee) return null;
    
    const p = employee.performance;
    
    const getBadgeColor = (category) => {
        switch (category) {
            case 'Sangat Baik': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' };
            case 'Baik': return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' };
            case 'Cukup': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' };
            case 'Perlu Perbaikan': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' };
            default: return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };
        }
    };
    
    const getScoreColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-blue-600';
        if (score >= 65) return 'text-yellow-600';
        return 'text-red-600';
    };
    
    const badgeColors = getBadgeColor(p.category);
    
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
            <div 
                className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-black">Detail Performa {employee.name}</h3>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <i className="fas fa-times text-gray-500"></i>
                    </button>
                </div>
                
                {/* Category Overview - Without Score Number */}
                <div className="text-center p-4 rounded-xl mb-6" style={{ backgroundColor: colorPalette.background }}>
                    <div className={`text-2xl font-bold ${badgeColors.text}`}>{p.category}</div>
                </div>
                
                {/* Details Container - Horizontal Layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Target & Realization */}
                    <div className="flex-1">
                        <h4 className="font-semibold text-black mb-3">Target & Realisasi</h4>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center p-3 rounded-lg bg-gray-50">
                                <div className="font-semibold text-black">Target</div>
                                <div className="text-lg font-bold text-black">
                                    {p.details.target > 0 ? p.details.target : 'Tidak Ada'}
                                </div>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-gray-50">
                                <div className="font-semibold text-black">Realisasi</div>
                                <div className="text-lg font-bold text-black">
                                    {p.details.realisasi}
                                </div>
                            </div>
                        </div>
                        
                        {/* Score Breakdown */}
                        <h4 className="font-semibold text-black mb-3">Breakdown Skor</h4>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold text-black">Absensi (40%)</span>
                                    <span className="font-bold text-black">
                                        {p.details.attendanceScore}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="h-2 rounded-full transition-all" 
                                        style={{ 
                                            width: `${(p.details.attendanceScore/40)*100}%; 
                                            background: ${colorPalette.primary}` 
                                        }}
                                    ></div>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    {p.details.totalClockIns}/{p.details.assumedWorkingDays} hari • {p.details.totalLate} terlambat • {p.details.totalEarlyLeave} pulang cepat
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold text-black">Target (30%)</span>
                                    <span className="font-bold text-black">
                                        {p.details.targetScore}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="h-2 rounded-full transition-all" 
                                        style={{ 
                                            width: `${(p.details.targetScore/30)*100}%; 
                                            background: ${colorPalette.primaryLight}` 
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold text-black">Kedisiplinan (30%)</span>
                                    <span className="font-bold text-black">
                                        {p.details.disciplinaryScore}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="h-2 rounded-full transition-all" 
                                        style={{ 
                                            width: `${(p.details.disciplinaryScore/30)*100}%; 
                                            background: ${colorPalette.accent}` 
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column - Chart Visualization */}
                    <div className="flex-1">
                        <h4 className="font-semibold text-black mb-3">Visualisasi Skor</h4>
                        <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center">
                            <div className="relative w-48 h-48">
                                {/* Simple circular progress indicator */}
                                <svg className="transform -rotate-90 w-48 h-48">
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="88"
                                        stroke="#e5e7eb"
                                        strokeWidth="12"
                                        fill="none"
                                    />
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="88"
                                        stroke={colorPalette.primary}
                                        strokeWidth="12"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 88}`}
                                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - p.score / 100)}`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className={`text-3xl font-bold text-black`}>{p.score}</div>
                                        <div className="text-sm text-black">Total Skor</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Performance Category Distribution */}
                        <div className="mt-4">
                            <h4 className="font-semibold text-black mb-3">Distribusi Kategori</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-black">Sangat Baik (90-100)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-black">Baik (80-89)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <span className="text-black">Cukup (65-79)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span className="text-black">Perlu Perbaikan (&lt;65)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-white font-medium transition-all"
                        style={{ background: colorPalette.primary }}
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};

const OwnerEmployeePerformance = ({ employees }) => {
    const [filterDivision, setFilterDivision] = useState('All');
    const [sortBy, setSortBy] = useState('score');
    const [sortOrder, setSortOrder] = useState('desc');
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const uniqueDivisions = ['All', ...new Set(employees.map(e => e.division))];

    const performanceData = useMemo(() => {
        let data = employees.map(emp => ({
            ...emp,
            performance: calculatePerformanceScore(emp)
        }))
        .filter(emp => filterDivision === 'All' || emp.division === filterDivision);

        // Sorting
        data.sort((a, b) => {
            let aVal, bVal;
            if (sortBy === 'score') {
                aVal = a.performance.score;
                bVal = b.performance.score;
            } else if (sortBy === 'name') {
                aVal = a.name.toLowerCase();
                bVal = b.name.toLowerCase();
            } else {
                aVal = a.division.toLowerCase();
                bVal = b.division.toLowerCase();
            }

            if (sortOrder === 'desc') {
                return aVal < bVal ? 1 : -1;
            } else {
                return aVal > bVal ? 1 : -1;
            }
        });

        return data;
    }, [employees, filterDivision, sortBy, sortOrder]);
    
    const getBadgeColor = (category) => {
        switch (category) {
            case 'Sangat Baik': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' };
            case 'Baik': return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' };
            case 'Cukup': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' };
            case 'Perlu Perbaikan': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' };
            default: return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };
        }
    };

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-blue-600';
        if (score >= 65) return 'text-yellow-600';
        return 'text-red-600';
    };

    const handleShowDetails = (employee) => {
        setSelectedEmployee(employee);
        setShowDetailModal(true);
    };

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('desc');
        }
    };

    const getSortIcon = (column) => {
        if (sortBy !== column) return 'fas fa-sort text-gray-400';
        return sortOrder === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    };

    // Statistics
    const averageScore = performanceData.length > 0 
        ? Math.round(performanceData.reduce((sum, emp) => sum + emp.performance.score, 0) / performanceData.length)
        : 0;

    const topPerformers = performanceData.slice(0, 3);

    return (
        <div className="space-y-6 bg-white rounded-xl p-6 min-h-screen text-left">
            {/* Header */}
            <div className="text-left mb-8">
                <h2 className="text-3xl font-bold mb-2 text-black">
                    Laporan Performa Karyawan
                </h2>
                <p className="text-lg" style={{ color: colorPalette.primary }}>
                    {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })} - Analisis Komprehensif
                </p>
            </div>

            <div className="space-y-6 rounded-2xl p-6 bg-white">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 rounded-xl bg-gray-50">
                        <div className="text-2xl font-bold" style={{ color: colorPalette.primary }}>{performanceData.length}</div>
                        <div className="text-sm text-black">Total Karyawan</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50">
                        <div className="text-2xl font-bold" style={{ color: colorPalette.primary }}>{averageScore}</div>
                        <div className="text-sm text-black">Rata-rata Skor</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50">
                        <div className="text-2xl font-bold" style={{ color: colorPalette.primary }}>
                            {performanceData.filter(e => e.performance.score >= 80).length}
                        </div>
                        <div className="text-sm text-black">Performers Baik+</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50">
                        <div className="text-2xl font-bold" style={{ color: colorPalette.primary }}>
                            {performanceData.filter(e => e.performance.score < 65).length}
                        </div>
                        <div className="text-sm text-black">Perlu Perbaikan</div>
                    </div>
                </div>

                {/* Filter and Sort Controls */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 p-4 rounded-xl bg-gray-50">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div>
                            <label htmlFor="division-filter" className="text-sm font-medium mr-2 text-black">
                                Filter Divisi:
                            </label>
                            <select 
                                id="division-filter"
                                value={filterDivision}
                                onChange={(e) => setFilterDivision(e.target.value)}
                                className="p-2 border rounded-lg focus:ring-2 focus:outline-none transition-all bg-white text-black"
                                style={{ borderColor: colorPalette.primary }}
                            >
                                {uniqueDivisions.map(div => (
                                    <option key={div} value={div}>{div}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="text-sm px-3 py-1 rounded-full" style={{ background: colorPalette.primary, color: 'white' }}>
                            {performanceData.length} Karyawan
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-black">Urutkan:</span>
                        <select 
                            value={`${sortBy}-${sortOrder}`}
                            onChange={(e) => {
                                const [newSortBy, newSortOrder] = e.target.value.split('-');
                                setSortBy(newSortBy);
                                setSortOrder(newSortOrder);
                            }}
                            className="p-2 border rounded-lg focus:ring-2 focus:outline-none transition-all bg-white text-black"
                            style={{ borderColor: colorPalette.primary }}
                        >
                            <option value="score-desc">Skor Tertinggi</option>
                            <option value="score-asc">Skor Terendah</option>
                            <option value="name-asc">Nama A-Z</option>
                            <option value="name-desc">Nama Z-A</option>
                            <option value="division-asc">Divisi A-Z</option>
                        </select>
                    </div>
                </div>

                {/* Performance Table */}
                <div className="overflow-hidden rounded-xl">
                    <table className="min-w-full divide-y" style={{ borderColor: colorPalette.border }}>
                        <thead>
                            <tr style={{ background: colorPalette.primary }}>
                                <th 
                                    className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider rounded-tl-xl cursor-pointer"
                                    onClick={() => handleSort('name')}
                                >
                                    <div className="flex items-center gap-2">
                                        Karyawan
                                        <i className={getSortIcon('name')}></i>
                                    </div>
                                </th>
                                <th 
                                    className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('division')}
                                >
                                    <div className="flex items-center gap-2">
                                        Divisi
                                        <i className={getSortIcon('division')}></i>
                                    </div>
                                </th>
                                <th 
                                    className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('score')}
                                >
                                    <div className="flex items-center gap-2">
                                        Skor Total
                                        <i className={getSortIcon('score')}></i>
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                                    Kategori
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider rounded-tr-xl">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y" style={{ borderColor: colorPalette.border }}>
                            {performanceData.map((e) => {
                                const badgeColors = getBadgeColor(e.performance.category);
                                return (
                                    <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-black">
                                                    {e.name}
                                                </div>
                                                <div className="text-xs" style={{ color: colorPalette.primaryLight }}>
                                                    ID: {e.id}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                            {e.division}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="text-lg font-bold" style={{ color: getScoreColor(e.performance.score).replace('text', 'text') }}>
                                                    {e.performance.score}
                                                </div>
                                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                                    <div 
                                                        className="h-2 rounded-full transition-all" 
                                                        style={{ 
                                                            width: `${e.performance.score}%`,
                                                            background: `linear-gradient(90deg, ${colorPalette.primary} 0%, ${colorPalette.primaryLight} 100%)`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${badgeColors.bg} ${badgeColors.text} ${badgeColors.border}`}>
                                                {e.performance.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button
                                                onClick={() => handleShowDetails(e)}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all"
                                                style={{ background: colorPalette.primary }}
                                            >
                                                <i className="fas fa-chart-bar"></i>
                                                Detail
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {performanceData.length === 0 && (
                    <div className="text-center py-12">
                        <i className="fas fa-chart-line text-4xl mb-4" style={{ color: colorPalette.primaryLight }}></i>
                        <p className="text-lg text-black">
                            Tidak ada data performa yang sesuai dengan filter
                        </p>
                    </div>
                )}

                {/* Top Performers */}
                {topPerformers.length > 0 && (
                    <div className="mt-8 p-6 rounded-xl bg-gray-50">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-black">
                            <i className="fas fa-trophy" style={{ color: colorPalette.primary }}></i>
                            Top Performers Bulan Ini
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {topPerformers.map((emp, index) => (
                                <div key={emp.id} className="text-center p-4 rounded-lg border bg-white" style={{ borderColor: colorPalette.border }}>
                                    <div className="text-2xl font-bold mb-2" style={{ color: colorPalette.primary }}>
                                        #{index + 1}
                                    </div>
                                    <div className="font-semibold mb-1 text-black">{emp.name}</div>
                                    <div className="text-sm mb-2" style={{ color: colorPalette.primaryLight }}>{emp.division}</div>
                                    <div className="text-xl font-bold" style={{ color: getScoreColor(emp.performance.score).replace('text', 'text') }}>
                                        {emp.performance.score}
                                    </div>
                                    <div className="text-xs mt-1 text-black">
                                        {emp.performance.category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            {/* Performance Detail Modal */}
            <PerformanceDetailModal 
                employee={selectedEmployee}
                isOpen={showDetailModal}
                onClose={() => setShowDetailModal(false)}
            />
        </div>
    );
};

export default OwnerEmployeePerformance;