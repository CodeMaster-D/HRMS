// src/pages/Dashboard/OwnerDashboard/OwnerEmployeeManagement.jsx
import React, { useState, useEffect } from 'react';
import { showSwal } from '../../../utils/swal';
import { formattedCurrency } from '../../../utils/formatters';

// Data dummy untuk opsi role dan divisi
const roles = ['employee', 'supervisor', 'manager'];
const divisions = ['Tech', 'Marketing', 'Finance', 'HR', 'Operations'];

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
                    : 'bg-red-100 text-red-700'
            }`}>
                {employee.status}
            </span>
        </div>
        <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-gray-500">ID: {employee.id}</span>
            <span className="text-xs text-[#708993] font-medium">{employee.role}</span>
        </div>
    </div>
);

const OwnerEmployeeManagement = ({ employees, setEmployees }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const initialFormData = {
        id: Date.now(),
        name: '',
        division: divisions[0],
        email: '',
        phone: '',
        status: 'Active',
        joinDate: new Date().toISOString().split('T')[0],
        cutiBalance: 12,
        role: 'employee',
        // Dummy default data
        currentMonthAttendance: [],
        attendancePhotos: [],
        targets: [],
        salaryDetails: { basic: 0, allowance: 0, overtimeHours: 0, overtimeRate: 0, bonus: 0, deductions: 0 },
        loginHistory: [],
    };

    // Initialize form data when an employee is selected or when creating a new one
    useEffect(() => {
        if (isCreating) {
            setFormData(initialFormData);
        } else if (selectedEmployee && isEditing) {
            setFormData({ 
                ...selectedEmployee, 
                salaryDetails: selectedEmployee.salaryDetails || initialFormData.salaryDetails,
                // Format tanggal agar sesuai input type=date
                joinDate: selectedEmployee.joinDate ? new Date(selectedEmployee.joinDate).toISOString().split('T')[0] : initialFormData.joinDate
            });
        } else if (!isEditing) {
            setFormData({});
        }
    }, [selectedEmployee, isEditing, isCreating]);

    // Filter employees based on search term
    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(emp.id).includes(searchTerm)
    );

    // --- Handlers ---
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('salaryDetails.')) {
            const key = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                salaryDetails: {
                    ...prev.salaryDetails,
                    [key]: parseInt(value) || 0,
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSelectEmployee = (employee) => {
        setSelectedEmployee(employee);
        setIsCreating(false);
        setIsEditing(false);
    };

    const handleCreateEmployee = () => {
        if (!formData.name || !formData.email) {
            showSwal('Error', 'Nama dan Email wajib diisi.', 'error');
            return;
        }
        
        const newEmployee = {
            ...formData,
            id: Date.now(),
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
        showSwal('Konfirmasi Hapus', 'Anda yakin ingin menghapus data karyawan ini? Tindakan ini tidak dapat dibatalkan.', 'warning', 0, true, 'Ya, Hapus!').then((result) => {
            if (result.isConfirmed) {
                setEmployees(prev => prev.filter(emp => emp.id !== selectedEmployee.id));
                showSwal('Terhapus!', 'Data karyawan berhasil dihapus.', 'success');
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
                    label="Nama Lengkap"
                    icon="fa-user"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <FormInput
                    label="Email"
                    icon="fa-envelope"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <FormInput
                    label="Nomor Telepon"
                    icon="fa-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Tanggal Gabung"
                    icon="fa-calendar"
                    type="date"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={handleInputChange}
                    required
                />
                <FormSelect
                    label="Divisi"
                    icon="fa-briefcase"
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    options={divisions.map(div => ({ value: div, label: div }))}
                />
                <FormSelect
                    label="Role"
                    icon="fa-user-tag"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    options={roles.map(r => ({ value: r, label: r.toUpperCase() }))}
                />
                <FormSelect
                    label="Status"
                    icon="fa-shield-alt"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' }
                    ]}
                />
                <FormInput
                    label="Jatah Cuti"
                    icon="fa-calendar-alt"
                    type="number"
                    name="cutiBalance"
                    value={formData.cutiBalance}
                    onChange={handleInputChange}
                    min="0"
                />
            </div>
            
            <div className="border-t border-[#708993]/10 pt-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Detail Gaji (Bulanan)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormInput
                        label="Gaji Pokok"
                        icon="fa-money-bill"
                        type="number"
                        name="salaryDetails.basic"
                        value={formData.salaryDetails?.basic || 0}
                        onChange={handleInputChange}
                        min="0"
                    />
                    <FormInput
                        label="Tunjangan"
                        icon="fa-hand-holding-usd"
                        type="number"
                        name="salaryDetails.allowance"
                        value={formData.salaryDetails?.allowance || 0}
                        onChange={handleInputChange}
                        min="0"
                    />
                    <FormInput
                        label="Potongan Lain-lain"
                        icon="fa-minus-circle"
                        type="number"
                        name="salaryDetails.deductions"
                        value={formData.salaryDetails?.deductions || 0}
                        onChange={handleInputChange}
                        min="0"
                    />
                    <FormInput
                        label="Jam Lembur Standar"
                        icon="fa-clock"
                        type="number"
                        name="salaryDetails.overtimeHours"
                        value={formData.salaryDetails?.overtimeHours || 0}
                        onChange={handleInputChange}
                        min="0"
                    />
                    <FormInput
                        label="Rate Lembur Per Jam"
                        icon="fa-hourglass-half"
                        type="number"
                        name="salaryDetails.overtimeRate"
                        value={formData.salaryDetails?.overtimeRate || 0}
                        onChange={handleInputChange}
                        min="0"
                    />
                    <FormInput
                        label="Bonus Standar"
                        icon="fa-gift"
                        type="number"
                        name="salaryDetails.bonus"
                        value={formData.salaryDetails?.bonus || 0}
                        onChange={handleInputChange}
                        min="0"
                    />
                </div>
            </div>
        </div>
    );

    const renderEmployeeDetail = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-gray-500 text-xs">ID</p>
                        <p className="text-gray-800">{selectedEmployee.id}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Nama</p>
                        <p className="text-gray-800">{selectedEmployee.name}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Email</p>
                        <p className="text-gray-800">{selectedEmployee.email}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Telepon</p>
                        <p className="text-gray-800">{selectedEmployee.phone}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Divisi</p>
                        <p className="text-gray-800">{selectedEmployee.division}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Role</p>
                        <p className="text-gray-800 capitalize">{selectedEmployee.role}</p>
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
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Gaji Bersih</p>
                        <p className="text-gray-800">{formattedCurrency((selectedEmployee.salaryDetails?.basic || 0) + (selectedEmployee.salaryDetails?.allowance || 0) - (selectedEmployee.salaryDetails?.deductions || 0))}</p>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-[#708993]/10 pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Detail Gaji</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Gaji Pokok:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedEmployee.salaryDetails?.basic || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Tunjangan:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedEmployee.salaryDetails?.allowance || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Potongan:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedEmployee.salaryDetails?.deductions || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Bonus:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedEmployee.salaryDetails?.bonus || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Jam Lembur:</span>
                        <span className="text-gray-800">{selectedEmployee.salaryDetails?.overtimeHours || 0} jam</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Rate Lembur:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedEmployee.salaryDetails?.overtimeRate || 0)}/jam</span>
                    </div>
                </div>
            </div>
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
                        Manajemen Karyawan
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">Kelola data karyawan dan informasi gaji</p>
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

export default OwnerEmployeeManagement;