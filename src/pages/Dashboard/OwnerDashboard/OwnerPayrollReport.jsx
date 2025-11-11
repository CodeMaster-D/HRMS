// src/pages/Dashboard/OwnerDashboard/OwnerPayrollReport.jsx
import React, { useState, useMemo } from 'react';
import { GlassCard } from '../../../components/Shared/Modals/componentsUtilityUI'; 
import { formattedCurrency } from '../../../utils/formatters';
import PayrollTable from '../../../components/Reporting/PayrollTable'; 
import ReportGenerator from '../../../components/Reporting/ReportGenerator';
import SalaryAdjustmentModal from '../../../components/Reporting/SalaryAdjustmentModal';

// --- LOGIKA UTAMA: Generate Data Gaji (TETAP) ---
const generatePayrollData = (employees, workSettings) => {
    return employees.map(emp => {
        // Data Gaji
        const details = emp.salaryDetails || {};
        const basic = details.basic || 0;
        const allowance = details.allowance || 0;
        const overtimeHours = details.overtimeHours || 0;
        const overtimeRate = details.overtimeRate || 0;
        const bonus = details.bonus || 0;
        
        // Perhitungan Lembur
        const overtimePay = overtimeHours * overtimeRate;

        // Data Absensi
        const attendanceRecords = emp.currentMonthAttendance || [];
        const totalLate = attendanceRecords.filter(a => a.type === 'Clock In' && a.late).length;
        const totalEarlyLeave = attendanceRecords.filter(a => a.type === 'Clock Out' && a.earlyLeave).length;

        // Perhitungan Potongan
        const lateDeduction = (workSettings.lateDeduction || 0) * totalLate;
        const earlyLeaveDeduction = (workSettings.earlyLeaveDeduction || 0) * totalEarlyLeave;
        const deductionsOther = details.deductions || 0;
        const totalDeductions = deductionsOther + lateDeduction + earlyLeaveDeduction;

        // Perhitungan Total
        const grossSalary = basic + allowance + overtimePay + bonus;
        const netSalary = grossSalary - totalDeductions;

        return {
            id: emp.id,
            name: emp.name,
            role: emp.role,
            division: emp.division,
            basic,
            allowance,
            overtimePay,
            bonus,
            deductions: deductionsOther,
            lateDeduction,
            earlyLeaveDeduction,
            grossSalary,
            totalDeductions,
            net: netSalary,
            lateCount: totalLate,
            earlyLeaveCount: totalEarlyLeave,
            status: 'Completed',
            // Data detail pemotongan untuk modal
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 150000 },
                { type: 'BPJS Ketenagakerjaan', amount: 80000 },
                { type: 'Pajak Penghasilan', amount: 200000 }
            ]
        };
    });
};

const OwnerPayrollReport = ({ employees, workSettings }) => {
    const payrollData = useMemo(() => generatePayrollData(employees, workSettings), [employees, workSettings]);
    const [filterDivision, setFilterDivision] = useState('All');
    const [selectedMonth, setSelectedMonth] = useState('2024-08');
    const [showAdjustmentModal, setShowAdjustmentModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    
    const uniqueDivisions = ['All', ...new Set(employees.map(e => e.division))];

    const filteredData = payrollData.filter(d => 
        filterDivision === 'All' || d.division === filterDivision
    );

    const monthYear = new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    
    // Kolom untuk ReportGenerator (ekspor PDF/Excel)
    const payrollColumns = [
        { header: 'ID', dataKey: 'id' },
        { header: 'Nama', dataKey: 'name' },
        { header: 'Role', dataKey: 'role', format: (v) => v.toUpperCase() },
        { header: 'Divisi', dataKey: 'division' },
        { header: 'Gaji Pokok', dataKey: 'basic', format: formattedCurrency },
        { header: 'Tunjangan', dataKey: 'allowance', format: formattedCurrency },
        { header: 'Lembur', dataKey: 'overtimePay', format: formattedCurrency },
        { header: 'Bonus', dataKey: 'bonus', format: formattedCurrency },
        { header: 'Potongan Non-Absensi', dataKey: 'deductions', format: formattedCurrency },
        { header: 'Potongan Absensi', dataKey: 'lateDeduction', format: (v, item) => formattedCurrency(v + (item.earlyLeaveDeduction || 0)) },
        { header: 'Gaji Bersih', dataKey: 'net', format: formattedCurrency },
        { header: 'Status', dataKey: 'status' },
    ];

    const handleAdjustSalary = (employee) => {
        setSelectedEmployee(employee);
        setShowAdjustmentModal(true);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 text-left">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <i className="fas fa-file-invoice-dollar mr-3 text-[#708993]"></i>
                        Laporan Penggajian Perusahaan
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Kelola dan pantau penggajian seluruh karyawan</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#708993]/30 text-black"
                    >
                        <option value="2024-08">Agustus 2024</option>
                        <option value="2024-07">Juli 2024</option>
                        <option value="2024-06">Juni 2024</option>
                    </select>

                    <button
                        onClick={() => handleAdjustSalary(null)}
                        className="px-4 py-2 bg-[#708993] text-white rounded-2xl text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:bg-[#5a717b] active:scale-95"
                    >
                        <i className="fas fa-edit mr-2"></i>
                        Atur Penggajian
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <GlassCard className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-3xl p-6">
                {/* Filter and Export Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-3 md:space-y-0">
                    <div className="flex items-center">
                        <label htmlFor="division-filter" className="text-sm font-medium text-gray-700 mr-2">Filter Divisi:</label>
                        <select 
                            id="division-filter"
                            value={filterDivision}
                            onChange={(e) => setFilterDivision(e.target.value)}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#708993]/30 text-black"
                        >
                            {uniqueDivisions.map(div => (
                                <option key={div} value={div}>{div}</option>
                            ))}
                        </select>
                    </div>
                    
                    <ReportGenerator 
                        title={`Laporan Gaji Personil - ${monthYear}`}
                        data={filteredData}
                        columns={payrollColumns}
                        filename={`LaporanGaji_${new Date().toISOString().split('T')[0]}_${filterDivision}`}
                        buttonText="Download Laporan Gaji"
                        className="justify-end"
                    />
                </div>

                {/* Payroll Table */}
                <PayrollTable 
                    payrollData={filteredData} 
                    showRole={true}
                    onAdjustSalary={handleAdjustSalary}
                />

                {filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <i className="fas fa-inbox text-4xl text-gray-400 mb-3"></i>
                        <p className="text-gray-500">Tidak ada data laporan gaji untuk periode ini.</p>
                    </div>
                )}
            </GlassCard>

            {/* Salary Adjustment Modal */}
            {showAdjustmentModal && (
                <SalaryAdjustmentModal
                    employee={selectedEmployee}
                    onClose={() => setShowAdjustmentModal(false)}
                    onSave={(adjustmentData) => {
                        console.log('Data penyesuaian:', adjustmentData);
                        // Implementasi save logic di sini
                        setShowAdjustmentModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default OwnerPayrollReport;