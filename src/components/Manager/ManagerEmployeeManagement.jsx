// src/components/Manager/ManagerEmployeeManagement.jsx
import React, { useState, useEffect } from 'react';
import { showSwal } from '../../utils/swal';

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

// Employee card component
const EmployeeCard = ({ employee, isSelected, onClick }) => (
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
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                employee.status === 'Active' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : employee.status === 'On Leave'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-red-100 text-red-700'
            }`}>
                {employee.status}
            </span>
        </div>
        <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-gray-500">NIK: {employee.nik}</span>
            <span className="text-xs text-[#708993] font-medium">{employee.cutiBalance} hari cuti</span>
        </div>
    </div>
);

// --- B5. Manajemen Karyawan (CRUD) ---
const ManagerEmployeeManagement = ({ employees, setEmployees }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    // Initialize form data when an employee is selected or when creating a new one
    useEffect(() => {
        if (isCreating) {
            setFormData({ 
                role: 'employee', 
                status: 'Active', 
                cutiBalance: 12 
            });
        } else if (selectedEmployee && isEditing) {
            setFormData(selectedEmployee);
        } else if (!isEditing) {
            setFormData({});
        }
    }, [selectedEmployee, isEditing, isCreating]);

    // Filter employees based on search term
    const filteredEmployees = employees
        .filter(employee => employee.role === 'employee')
        .filter(employee => 
            employee.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.nik?.includes(searchTerm) ||
            employee.division?.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // --- Handlers ---
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectEmployee = (employee) => {
        setSelectedEmployee(employee);
        setIsCreating(false);
        setIsEditing(false);
    };

    const handleCreateEmployee = () => {
        if (!formData.name || !formData.nik) {
            showSwal('Error', 'Nama dan NIK wajib diisi.', 'error');
            return;
        }
        
        const newEmployee = {
            ...formData,
            id: Date.now(),
            joinDate: new Date().toLocaleDateString('id-ID'),
            currentMonthAttendance: [],
            attendancePhotos: []
        };
        
        setEmployees(prev => [...prev, newEmployee]);
        showSwal('Berhasil', `Karyawan ${newEmployee.name} berhasil ditambahkan.`, 'success');
        resetState();
    };

    const handleUpdateEmployee = () => {
        setEmployees(prevEmployees =>
            prevEmployees.map(emp =>
                emp.id === selectedEmployee.id ? { ...formData } : emp
            )
        );
        setSelectedEmployee({ ...formData });
        showSwal('Berhasil', `Data ${formData.name} berhasil diperbarui.`, 'success');
        setIsEditing(false);
    };

    const handleDeleteEmployee = () => {
        showSwal({
            title: 'Hapus Karyawan?',
            text: `Data ${selectedEmployee.name} akan dihapus secara permanen.`,
            icon: 'warning',
            buttons: {
                cancel: "Batal",
                confirm: {
                    text: "Ya, Hapus!",
                    value: true,
                    className: "bg-red-500"
                }
            }
        }).then((willDelete) => {
            if (willDelete) {
                setEmployees(prev => prev.filter(emp => emp.id !== selectedEmployee.id));
                showSwal('Berhasil', 'Karyawan berhasil dihapus.', 'success');
                resetState();
            }
        });
    };
    
    const resetState = () => {
        setIsCreating(false);
        setIsEditing(false);
        setSelectedEmployee(null);
        setFormData({});
        setSearchTerm('');
    };

    const renderForm = () => (
        <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                    label="NIK"
                    icon="fa-id-card"
                    name="nik"
                    value={formData.nik}
                    onChange={handleInputChange}
                    required
                />
                <FormInput
                    label="Nama Lengkap"
                    icon="fa-user"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <FormInput
                    label="Divisi"
                    icon="fa-briefcase"
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Email"
                    icon="fa-envelope"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Nomor Telepon"
                    icon="fa-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <FormSelect
                    label="Status"
                    icon="fa-shield-alt"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' },
                        { value: 'On Leave', label: 'On Leave' }
                    ]}
                />
            </div>
            
            <FormTextarea
                label="Alamat"
                icon="fa-map-marker-alt"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={2}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                    label="Saldo Cuti (Hari)"
                    icon="fa-calendar-alt"
                    type="number"
                    name="cutiBalance"
                    value={formData.cutiBalance}
                    onChange={handleInputChange}
                    min="0"
                />
            </div>
        </div>
    );

    const renderEmployeeDetail = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-gray-500 text-xs">NIK</p>
                        <p className="text-gray-800">{selectedEmployee.nik}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Nama</p>
                        <p className="text-gray-800">{selectedEmployee.name}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Divisi</p>
                        <p className="text-gray-800">{selectedEmployee.division}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Email</p>
                        <p className="text-gray-800">{selectedEmployee.email}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Telepon</p>
                        <p className="text-gray-800">{selectedEmployee.phone}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Status</p>
                        <p className="text-gray-800">{selectedEmployee.status}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Bergabung</p>
                        <p className="text-gray-800">{selectedEmployee.joinDate}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Saldo Cuti</p>
                        <p className="text-gray-800">{selectedEmployee.cutiBalance} hari</p>
                    </div>
                </div>
            </div>
            {selectedEmployee.address && (
                <div>
                    <p className="font-medium text-gray-500 text-xs mb-1">Alamat</p>
                    <p className="text-gray-800 text-sm">{selectedEmployee.address}</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] rounded-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="bg-[#708993] p-3 rounded-2xl">
                            <i className="fas fa-users text-white text-lg"></i>
                        </div>
                        Kelola Tim
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">Kelola data karyawan dan informasi tim</p>
                </div>
                <ActionButton 
                    onClick={() => { resetState(); setIsCreating(true); }}
                    variant="primary"
                >
                    <i className="fas fa-user-plus"></i>
                    Tambah Karyawan
                </ActionButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Employee List */}
                <GlassCard className="lg:col-span-1 p-5">
                    <div className="mb-4">
                        <div className="relative">
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                            <input
                                type="text"
                                placeholder="Cari karyawan..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-2">
                        {filteredEmployees.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                <i className="fas fa-users text-3xl mb-3 text-gray-300"></i>
                                <p className="text-sm">Tidak ada karyawan ditemukan</p>
                            </div>
                        ) : (
                            filteredEmployees.map(employee => (
                                <EmployeeCard
                                    key={employee.id}
                                    employee={employee}
                                    isSelected={selectedEmployee?.id === employee.id}
                                    onClick={() => handleSelectEmployee(employee)}
                                />
                            ))
                        )}
                    </div>
                </GlassCard>

                {/* Form & Details */}
                <GlassCard className="lg:col-span-2 p-6">
                    {isCreating ? (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">Tambah Karyawan Baru</h3>
                                <ActionButton onClick={resetState} variant="ghost">
                                    <i className="fas fa-times"></i>
                                </ActionButton>
                            </div>
                            {renderForm()}
                            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#708993]/10">
                                <ActionButton onClick={resetState} variant="secondary">
                                    Batal
                                </ActionButton>
                                <ActionButton onClick={handleCreateEmployee}>
                                    <i className="fas fa-save"></i>
                                    Simpan Karyawan
                                </ActionButton>
                            </div>
                        </>
                    ) : selectedEmployee ? (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {isEditing ? 'Edit Data Karyawan' : 'Detail Karyawan'}
                                </h3>
                                <div className="flex gap-2">
                                    {isEditing ? (
                                        <>
                                            <ActionButton 
                                                onClick={() => setIsEditing(false)} 
                                                variant="secondary"
                                            >
                                                <i className="fas fa-times"></i> Batal
                                            </ActionButton>
                                            <ActionButton onClick={handleUpdateEmployee}>
                                                <i className="fas fa-save"></i> Simpan
                                            </ActionButton>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            {isEditing ? renderForm() : renderEmployeeDetail()}
                            
                            {!isEditing && (
                                <div className="flex gap-3 mt-8 pt-6 border-t border-[#708993]/10">
                                    <ActionButton 
                                        onClick={() => setIsEditing(true)}
                                        variant="primary"
                                    >
                                        <i className="fas fa-edit"></i> Edit Data
                                    </ActionButton>
                                    <ActionButton 
                                        onClick={handleDeleteEmployee} 
                                        variant="danger"
                                    >
                                        <i className="fas fa-trash-alt"></i> Hapus Karyawan
                                    </ActionButton>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <i className="fas fa-user text-5xl mb-4"></i>
                            <p className="text-lg font-medium text-gray-500">Pilih karyawan</p>
                            <p className="text-sm text-gray-400 mt-1">Pilih karyawan dari daftar untuk melihat detail</p>
                        </div>
                    )}
                </GlassCard>
            </div>
        </div>
    );
};

export default ManagerEmployeeManagement;