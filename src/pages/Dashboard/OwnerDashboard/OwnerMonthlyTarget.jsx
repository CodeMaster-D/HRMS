// src/pages/Dashboard/OwnerDashboard/OwnerMonthlyTarget.jsx
import React, { useState, useEffect } from 'react';
import { showSwal } from '../../../utils/swal';

// Fungsi helper untuk mendapatkan/mengubah bulan
const getMonthYear = (date) => new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
const currentMonthYear = getMonthYear(new Date());

// Glass Card component with iOS 26 liquid glass design
const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-2xl bg-white/30 border border-[#708993]/20 rounded-3xl shadow-sm ${className}`}>
        {children}
    </div>
);

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
            className="w-full px-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
        />
    </div>
);

// Textarea with consistent styling
const FormTextarea = ({ label, icon, value, onChange, name, rows = 3, className = '' }) => (
    <div className={className}>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <i className={`fas ${icon} text-[#708993] text-xs`}></i> {label}
        </label>
        <textarea 
            name={name}
            value={value || ''} 
            onChange={onChange}
            rows={rows}
            className="w-full px-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200 resize-none"
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
            className="w-full px-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

// File upload component
const FileUpload = ({ label, icon, onChange, name, className = '' }) => (
    <div className={className}>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <i className={`fas ${icon} text-[#708993] text-xs`}></i> {label}
        </label>
        <div className="relative">
            <input
                type="file"
                name={name}
                onChange={onChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="w-full px-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 flex items-center justify-center gap-2 cursor-pointer hover:bg-white/70 transition-all duration-200">
                <i className="fas fa-cloud-upload-alt text-[#708993]"></i>
                <span className="text-sm">Pilih File</span>
            </div>
        </div>
    </div>
);

// Employee card component
const EmployeeTargetCard = ({ employee, targetValue, onTargetChange, isSelected, onClick }) => (
    <div
        onClick={onClick}
        className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
            isSelected
                ? 'bg-[#708993]/10 border-[#708993] shadow-sm'
                : 'bg-white/40 border-white/40 hover:bg-white/60 hover:border-[#708993]/30'
        }`}
    >
        <div className="flex items-start justify-between">
            <div className="flex-1">
                <p className="font-semibold text-gray-800 text-sm">{employee.name}</p>
                <p className="text-xs text-gray-600 mt-1">{employee.division}</p>
            </div>
            <span className="text-xs text-gray-500">ID: {employee.id}</span>
        </div>
        <div className="mt-3">
            <label className="text-xs text-gray-600 block mb-1">Target (Qty)</label>
            <input
                type="number"
                value={targetValue || 0}
                onChange={(e) => onTargetChange(employee.id, e.target.value)}
                min="0"
                className="w-full px-3 py-2 bg-white/70 border border-[#708993]/20 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-[#708993]/30 text-black"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    </div>
);

// Initialize targets for employees
const initializeTargets = (employees) => {
    return employees.map(emp => ({
        id: emp.id,
        name: emp.name,
        division: emp.division,
        // Dapatkan target saat ini, atau default ke 0
        currentTarget: emp.targets?.find(t => t.month === currentMonthYear)?.value || 0, 
    }));
};

const OwnerMonthlyTarget = ({ employees, setEmployees }) => {
    const [monthlyTargets, setMonthlyTargets] = useState(initializeTargets(employees));
    const [filterDivision, setFilterDivision] = useState('All');
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [targetDetails, setTargetDetails] = useState({
        title: '',
        description: '',
        deadline: '',
        file: null
    });
    
    // Dapatkan daftar unik divisi
    const uniqueDivisions = ['All', ...new Set(employees.map(e => e.division))];

    // Update monthly targets when employees change
    useEffect(() => {
        setMonthlyTargets(initializeTargets(employees));
    }, [employees]);

    const handleTargetChange = (id, value) => {
        setMonthlyTargets(prev => prev.map(target => 
            target.id === id ? { ...target, currentTarget: parseInt(value) || 0 } : target
        ));
    };

    const handleDetailChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setTargetDetails(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setTargetDetails(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleEmployeeSelect = (employeeId) => {
        setSelectedEmployees(prev => 
            prev.includes(employeeId) 
                ? prev.filter(id => id !== employeeId)
                : [...prev, employeeId]
        );
    };

    const handleSelectAll = () => {
        if (selectedEmployees.length === filteredTargets.length) {
            setSelectedEmployees([]);
        } else {
            setSelectedEmployees(filteredTargets.map(t => t.id));
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!targetDetails.title) {
            showSwal('Error', 'Judul target wajib diisi.', 'error');
            return;
        }

        if (selectedEmployees.length === 0) {
            showSwal('Error', 'Pilih minimal satu karyawan untuk menetapkan target.', 'error');
            return;
        }

        const updatedEmployees = employees.map(emp => {
            if (!selectedEmployees.includes(emp.id)) return emp;
            
            const targetEntry = monthlyTargets.find(t => t.id === emp.id);
            if (!targetEntry) return emp;
            
            // Perbarui/tambahkan target di array targets karyawan
            const existingTargetIndex = emp.targets?.findIndex(t => t.month === currentMonthYear);
            
            let newTargets = [...(emp.targets || [])];
            
            if (existingTargetIndex !== undefined && existingTargetIndex !== -1) {
                newTargets[existingTargetIndex] = { 
                    month: currentMonthYear, 
                    value: targetEntry.currentTarget,
                    title: targetDetails.title,
                    description: targetDetails.description,
                    deadline: targetDetails.deadline,
                    file: targetDetails.file?.name || null
                };
            } else {
                newTargets.push({ 
                    month: currentMonthYear, 
                    value: targetEntry.currentTarget,
                    title: targetDetails.title,
                    description: targetDetails.description,
                    deadline: targetDetails.deadline,
                    file: targetDetails.file?.name || null
                });
            }

            return { ...emp, targets: newTargets };
        });

        // Simpan ke state utama
        setEmployees(updatedEmployees);

        showSwal('Sukses!', `Target "${targetDetails.title}" untuk ${selectedEmployees.length} karyawan berhasil disimpan.`, 'success', 2500);
        
        // Reset form
        setTargetDetails({
            title: '',
            description: '',
            deadline: '',
            file: null
        });
        setSelectedEmployees([]);
    };

    const filteredTargets = monthlyTargets.filter(target => 
        filterDivision === 'All' || target.division === filterDivision
    );

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] rounded-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="bg-[#708993] p-3 rounded-2xl">
                            <i className="fas fa-bullseye text-white text-lg"></i>
                        </div>
                        Penetapan Target Bulanan ({currentMonthYear})
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">Tetapkan target untuk karyawan dengan detail lengkap</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Target Details Form */}
                <GlassCard className="lg:col-span-1 p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Detail Target</h3>
                    
                    <form onSubmit={handleSave} className="space-y-4">
                        <FormInput
                            label="Judul Target"
                            icon="fa-heading"
                            name="title"
                            value={targetDetails.title}
                            onChange={handleDetailChange}
                            required
                        />
                        
                        <FormTextarea
                            label="Deskripsi"
                            icon="fa-align-left"
                            name="description"
                            value={targetDetails.description}
                            onChange={handleDetailChange}
                            rows={3}
                        />
                        
                        <FormInput
                            label="Deadline"
                            icon="fa-calendar-alt"
                            type="date"
                            name="deadline"
                            value={targetDetails.deadline}
                            onChange={handleDetailChange}
                        />
                        
                        <FileUpload
                            label="Dokumen Pendukung"
                            icon="fa-file-upload"
                            name="file"
                            onChange={handleDetailChange}
                        />
                        
                        <div className="pt-4">
                            <ActionButton type="submit" className="w-full text-black border-none focus:outline-none">
                                <i className="fas fa-save mr-2"></i> Simpan Target
                            </ActionButton>
                        </div>
                    </form>
                </GlassCard>

                {/* Employee List */}
                <GlassCard className="lg:col-span-2 p-5">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Daftar Karyawan</h3>
                        <div className="flex items-center gap-3">
                            <FormSelect
                                label=""
                                icon=""
                                name="division"
                                value={filterDivision}
                                onChange={(e) => setFilterDivision(e.target.value)}
                                options={uniqueDivisions.map(div => ({ value: div, label: div }))}
                                className="w-40"
                            />
                            <ActionButton onClick={handleSelectAll} variant="secondary" className="text-sm text-black border-none focus:outline-none">
                                {selectedEmployees.length === filteredTargets.length ? 'Batal Pilih Semua' : 'Pilih Semua'}
                            </ActionButton>
                        </div>
                    </div>
                    
                    <div className="mb-3 text-sm text-gray-600">
                        {selectedEmployees.length} dari {filteredTargets.length} karyawan dipilih
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[65vh] overflow-y-auto pr-2">
                        {filteredTargets.length === 0 ? (
                            <div className="col-span-2 text-center py-8 text-gray-500">
                                <i className="fas fa-users text-3xl mb-3 text-gray-300"></i>
                                <p className="text-sm">Tidak ada karyawan ditemukan</p>
                            </div>
                        ) : (
                            filteredTargets.map(t => (
                                <EmployeeTargetCard
                                    key={t.id}
                                    employee={t}
                                    targetValue={t.currentTarget}
                                    onTargetChange={handleTargetChange}
                                    isSelected={selectedEmployees.includes(t.id)}
                                    onClick={() => handleEmployeeSelect(t.id)}
                                />
                            ))
                        )}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default OwnerMonthlyTarget;