// src/pages/Dashboard/OwnerDashboard/OwnerAttendanceDetailReport.jsx
import React, { useState, useMemo } from 'react';
import { GlassCard } from '../../../components/Shared/Modals/componentsUtilityUI';
import { formattedCurrency } from '../../../utils/formatters';
import { showSwal } from '../../../utils/swal';
import ReportGenerator from '../../../components/Reporting/ReportGenerator';

// Modern button with rounded design
const ActionButton = ({ onClick, children, variant = 'primary', disabled = false, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200";
    const variants = {
        primary: "bg-[#708993] text-white hover:bg-[#5a6f7a] active:scale-95",
        secondary: "bg-white/40 text-[#708993] border border-[#708993]/30 hover:bg-white/60",
        danger: "bg-red-500/90 text-white hover:bg-red-600 active:scale-95",
        ghost: "bg-transparent text-[#708993] hover:bg-white/40"
    };
    
    const disabledClasses = "opacity-50 cursor-not-allowed";
    
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={`${baseClasses} ${variants[variant]} ${disabled ? disabledClasses : ''}`} 
            {...props}
        >
            {children}
        </button>
    );
};

// Input field with consistent styling
const FormInput = ({ label, icon, type = 'text', value, onChange, name, required = false, className = '' }) => (
    <div className={className}>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <i className={`fas ${icon} text-[#708993] text-xs`}></i> {label}
            {required && <span className="text-red-400">*</span>}
        </label>
        <input 
            type={type} 
            name={name}
            value={value || ''} 
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 bg-white border border-[#708993]/20 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
        />
    </div>
);

// Select input with consistent styling
const FormSelect = ({ label, icon, value, onChange, name, options, className = '' }) => (
    <div className={className}>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <i className={`fas ${icon} text-[#708993] text-xs`}></i> {label}
        </label>
        <select 
            name={name}
            value={value || ''} 
            onChange={onChange}
            className="w-full px-4 py-3 bg-white border border-[#708993]/20 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

// Flatten dan gabungkan semua data absensi dari semua personil
const flattenAttendanceData = (employees, managers, supervisors) => {
    const allPersonnel = [...employees, ...managers, ...supervisors];
    
    return allPersonnel.flatMap(person => 
        (person.currentMonthAttendance || []).map(record => ({
            ...record,
            employeeName: person.name,
            division: person.division || person.role,
            role: person.role,
        }))
    ).sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time)); // Urutkan terbaru
};

const OwnerAttendanceDetailReport = ({ employees, managers, supervisors }) => {
    const fullAttendanceData = useMemo(() => flattenAttendanceData(employees, managers, supervisors), [employees, managers, supervisors]);
    
    const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]);
    const [filterDivision, setFilterDivision] = useState('All');
    
    const uniqueDivisions = ['All', ...new Set([...employees, ...managers, ...supervisors].map(e => e.division || e.role))];
    
    const filteredData = fullAttendanceData.filter(d => 
        (filterDivision === 'All' || d.division === filterDivision) &&
        (d.date === filterDate)
    );

    // Columns for ReportGenerator
    const attendanceColumns = [
        { header: 'Name', dataKey: 'employeeName' },
        { header: 'Division', dataKey: 'division' },
        { header: 'Role', dataKey: 'role' },
        { header: 'Date', dataKey: 'date' },
        { header: 'Time', dataKey: 'time' },
        { header: 'Type', dataKey: 'type' },
        { header: 'Late', dataKey: 'late', format: (v) => v ? 'Yes' : 'No' },
        { header: 'Early Leave', dataKey: 'earlyLeave', format: (v) => v ? 'Yes' : 'No' },
        { header: 'Location', dataKey: 'location', format: (v) => v.split(' (')[0] }
    ];

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] rounded-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="bg-[#708993] p-3 rounded-2xl">
                            <i className="fas fa-list-alt text-white text-lg"></i>
                        </div>
                        Detailed Attendance Report
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">View and export detailed attendance records</p>
                </div>
            </div>

            <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-sm border border-[#708993]/20 p-6">
                {/* Filter Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <FormInput
                            label="Date"
                            icon="fa-calendar"
                            type="date"
                            name="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            max={new Date().toISOString().split('T')[0]}
                            className="w-full sm:w-48"
                        />
                        <FormSelect
                            label="Division/Role"
                            icon="fa-filter"
                            name="division"
                            value={filterDivision}
                            onChange={(e) => setFilterDivision(e.target.value)}
                            options={uniqueDivisions.map(div => ({ value: div, label: div }))}
                            className="w-full sm:w-48"
                        />
                    </div>
                    
                    {/* Report Generator */}
                    <ReportGenerator 
                        title={`Detailed Attendance Report - ${filterDate}`}
                        data={filteredData}
                        columns={attendanceColumns}
                        filename={`AttendanceDetail_${filterDate}_${filterDivision}`}
                        buttonText="Download Report"
                    />
                </div>

                {/* Attendance Table */}
                <div className="overflow-x-auto rounded-xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr className="bg-[#708993]">
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-xl">Name & Division</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date & Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-xl">Location (Coordinates)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.map((d, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{d.employeeName}</div>
                                        <div className="text-xs text-gray-500">{d.division} ({d.role})</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {d.date} <span className="font-semibold text-gray-700">{d.time}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${d.type === 'Clock In' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                                            {d.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${d.late || d.earlyLeave ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                            {d.late ? 'Late' : d.earlyLeave ? 'Early Leave' : 'On Time'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-gray-500 max-w-xs truncate">
                                        {d.location.split(' (')[0]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <i className="fas fa-calendar-times text-4xl text-gray-400 mb-3"></i>
                        <p className="text-gray-500">No attendance data found for the selected criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OwnerAttendanceDetailReport;