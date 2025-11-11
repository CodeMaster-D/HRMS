// src/components/Reporting/ManagerPayrollReport.jsx
import React, { useState, useMemo } from 'react';
import { GlassCard } from '../Shared/Modals/componentsUtilityUI'; 
import { DUMMY_MANAGER_REPORTS } from '../../utils/constants'; 
import { formattedCurrency } from '../../utils/formatters';
import PayrollTable from '../Reporting/PayrollTable';
import ReportGenerator from '../Reporting/ReportGenerator';
import SalaryAdjustmentModal from './SalaryAdjustmentModal';

const ManagerPayrollReport = ({ workSettings }) => { 
    const [selectedMonth, setSelectedMonth] = useState('2024-08');
    const [filterDivision, setFilterDivision] = useState('All');
    const [showAdjustmentModal, setShowAdjustmentModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Data dengan mapping yang lebih clean dan berbagai divisi
    const reports = useMemo(() => [
        // Tech Division
        {
            id: 101,
            name: 'Andi Pratama',
            division: 'Tech',
            role: 'employee',
            salary: 12000000,
            allowance: 2000000,
            overtimePay: 800000,
            bonus: 1500000,
            deductions: 500000,
            lateDeduction: 100000,
            earlyLeaveDeduction: 0,
            net: 14800000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 150000 },
                { type: 'BPJS Ketenagakerjaan', amount: 80000 },
                { type: 'Pajak Penghasilan', amount: 270000 }
            ]
        },
        {
            id: 102,
            name: 'Siti Nurhaliza',
            division: 'Tech',
            role: 'employee',
            salary: 15000000,
            allowance: 2500000,
            overtimePay: 1200000,
            bonus: 2000000,
            deductions: 600000,
            lateDeduction: 0,
            earlyLeaveDeduction: 50000,
            net: 20150000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 180000 },
                { type: 'BPJS Ketenagakerjaan', amount: 100000 },
                { type: 'Pajak Penghasilan', amount: 320000 }
            ]
        },
        {
            id: 103,
            name: 'Budi Santoso',
            division: 'Tech',
            role: 'supervisor',
            salary: 18000000,
            allowance: 3000000,
            overtimePay: 600000,
            bonus: 2500000,
            deductions: 800000,
            lateDeduction: 150000,
            earlyLeaveDeduction: 0,
            net: 23150000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 200000 },
                { type: 'BPJS Ketenagakerjaan', amount: 120000 },
                { type: 'Pajak Penghasilan', amount: 480000 }
            ]
        },
        
        // Marketing Division
        {
            id: 201,
            name: 'Rina Wijaya',
            division: 'Marketing',
            role: 'employee',
            salary: 10000000,
            allowance: 1500000,
            overtimePay: 400000,
            bonus: 3000000,
            deductions: 400000,
            lateDeduction: 0,
            earlyLeaveDeduction: 0,
            net: 14500000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 120000 },
                { type: 'BPJS Ketenagakerjaan', amount: 70000 },
                { type: 'Pajak Penghasilan', amount: 210000 }
            ]
        },
        {
            id: 202,
            name: 'Doni Hermawan',
            division: 'Marketing',
            role: 'employee',
            salary: 9000000,
            allowance: 1200000,
            overtimePay: 600000,
            bonus: 1800000,
            deductions: 350000,
            lateDeduction: 100000,
            earlyLeaveDeduction: 50000,
            net: 12000000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 110000 },
                { type: 'BPJS Ketenagakerjaan', amount: 65000 },
                { type: 'Pajak Penghasilan', amount: 175000 }
            ]
        },
        
        // Finance Division
        {
            id: 301,
            name: 'Maya Sari',
            division: 'Finance',
            role: 'employee',
            salary: 11000000,
            allowance: 1800000,
            overtimePay: 300000,
            bonus: 1200000,
            deductions: 450000,
            lateDeduction: 0,
            earlyLeaveDeduction: 0,
            net: 13850000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 130000 },
                { type: 'BPJS Ketenagakerjaan', amount: 75000 },
                { type: 'Pajak Penghasilan', amount: 245000 }
            ]
        },
        {
            id: 302,
            name: 'Ahmad Fauzi',
            division: 'Finance',
            role: 'supervisor',
            salary: 16000000,
            allowance: 2800000,
            overtimePay: 500000,
            bonus: 2200000,
            deductions: 700000,
            lateDeduction: 0,
            earlyLeaveDeduction: 100000,
            net: 20700000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 190000 },
                { type: 'BPJS Ketenagakerjaan', amount: 110000 },
                { type: 'Pajak Penghasilan', amount: 400000 }
            ]
        },
        
        // HR Division
        {
            id: 401,
            name: 'Dewi Lestari',
            division: 'HR',
            role: 'employee',
            salary: 9500000,
            allowance: 1300000,
            overtimePay: 200000,
            bonus: 1000000,
            deductions: 380000,
            lateDeduction: 50000,
            earlyLeaveDeduction: 0,
            net: 11570000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 115000 },
                { type: 'BPJS Ketenagakerjaan', amount: 68000 },
                { type: 'Pajak Penghasilan', amount: 197000 }
            ]
        },
        
        // Operations Division
        {
            id: 501,
            name: 'Eko Prasetyo',
            division: 'Operations',
            role: 'employee',
            salary: 8500000,
            allowance: 1000000,
            overtimePay: 700000,
            bonus: 800000,
            deductions: 320000,
            lateDeduction: 100000,
            earlyLeaveDeduction: 50000,
            net: 10330000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 105000 },
                { type: 'BPJS Ketenagakerjaan', amount: 60000 },
                { type: 'Pajak Penghasilan', amount: 155000 }
            ]
        },
        {
            id: 502,
            name: 'Fitri Handayani',
            division: 'Operations',
            role: 'supervisor',
            salary: 14000000,
            allowance: 2200000,
            overtimePay: 400000,
            bonus: 1800000,
            deductions: 600000,
            lateDeduction: 0,
            earlyLeaveDeduction: 0,
            net: 17800000,
            status: 'Completed',
            deductionDetails: [
                { type: 'BPJS Kesehatan', amount: 170000 },
                { type: 'BPJS Ketenagakerjaan', amount: 95000 },
                { type: 'Pajak Penghasilan', amount: 335000 }
            ]
        }
    ], []);

    // Filter data berdasarkan divisi yang dipilih
    const filteredReports = useMemo(() => {
        return reports.filter(report => 
            filterDivision === 'All' || report.division === filterDivision
        );
    }, [reports, filterDivision]);

    // Dapatkan daftar unik divisi
    const uniqueDivisions = useMemo(() => {
        const divisions = new Set(reports.map(r => r.division));
        return ['All', ...divisions];
    }, [reports]);

    const payrollColumns = [
        { header: 'ID', dataKey: 'id' },
        { header: 'Nama', dataKey: 'name' },
        { header: 'Divisi', dataKey: 'division' },
        { header: 'Gaji Pokok', dataKey: 'salary', format: formattedCurrency },
        { header: 'Tunjangan', dataKey: 'allowance', format: formattedCurrency },
        { header: 'Lembur', dataKey: 'overtimePay', format: formattedCurrency },
        { header: 'Bonus', dataKey: 'bonus', format: formattedCurrency },
        { header: 'Total Potongan', dataKey: 'deductions', format: formattedCurrency },
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
                        Laporan Penggajian Tim
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Kelola dan pantau penggajian tim Anda</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#708993]/30 text-black"
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
                        title={`Laporan Gaji Tim - Periode ${selectedMonth}`}
                        data={filteredReports}
                        columns={payrollColumns}
                        filename={`Laporan_Gaji_Tim_${selectedMonth}_${filterDivision}`}
                        buttonText="Download Laporan Gaji"
                        className="justify-end"
                    />
                </div>

                {/* Payroll Table */}
                <PayrollTable 
                    payrollData={filteredReports} 
                    showRole={false}
                    onAdjustSalary={handleAdjustSalary}
                />

                {filteredReports.length === 0 && (
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

export default ManagerPayrollReport;