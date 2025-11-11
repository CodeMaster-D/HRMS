// src/pages/Dashboard/OwnerDashboard/OwnerSupervisorManagement.jsx
import React, { useState, useEffect } from 'react';
import { showSwal } from '../../../utils/swal';
import { formattedCurrency } from '../../../utils/formatters';

const roles = ['supervisor'];
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

// Supervisor card component
const SupervisorCard = ({ supervisor, isSelected, onClick }) => (
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
                <p className="font-semibold text-gray-800 text-sm">{supervisor.name}</p>
                <p className="text-xs text-gray-600 mt-1">{supervisor.division}</p>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                supervisor.status === 'Active' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-red-100 text-red-700'
            }`}>
                {supervisor.status}
            </span>
        </div>
        <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-gray-500">ID: {supervisor.id}</span>
            <span className="text-xs text-[#708993] font-medium">Supervisor</span>
        </div>
    </div>
);

const OwnerSupervisorManagement = ({ supervisors, setSupervisors }) => {
    const [selectedSupervisor, setSelectedSupervisor] = useState(null);
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
        role: 'supervisor',
        // Dummy default data
        salaryDetails: { basic: 10000000, allowance: 2500000, overtimeHours: 0, overtimeRate: 0, bonus: 0, deductions: 0 },
    };

    // Initialize form data when a supervisor is selected or when creating a new one
    useEffect(() => {
        if (isCreating) {
            setFormData(initialFormData);
        } else if (selectedSupervisor && isEditing) {
            setFormData({ 
                ...selectedSupervisor, 
                salaryDetails: selectedSupervisor.salaryDetails || initialFormData.salaryDetails,
                joinDate: selectedSupervisor.joinDate ? new Date(selectedSupervisor.joinDate).toISOString().split('T')[0] : initialFormData.joinDate
            });
        } else if (!isEditing) {
            setFormData({});
        }
    }, [selectedSupervisor, isEditing, isCreating]);

    // Filter supervisors based on search term
    const filteredSupervisors = supervisors.filter(sprv =>
        sprv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sprv.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(sprv.id).includes(searchTerm)
    );

    // --- Handlers ---
    const handleFormChange = (e) => {
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

    const handleSelectSupervisor = (supervisor) => {
        setSelectedSupervisor(supervisor);
        setIsCreating(false);
        setIsEditing(false);
    };

    const handleCreateSupervisor = () => {
        if (!formData.name || !formData.email) {
            showSwal('Error', 'Nama dan Email wajib diisi.', 'error');
            return;
        }
        
        const newSupervisor = {
            ...formData,
            id: Date.now(),
        };
        
        setSupervisors([...supervisors, newSupervisor]);
        showSwal('Berhasil', `Supervisor ${newSupervisor.name} berhasil ditambahkan.`, 'success');
        resetState();
    };

    const handleUpdateSupervisor = () => {
        setSupervisors(supervisors.map(sprv => 
            sprv.id === selectedSupervisor.id ? { ...formData } : sprv
        ));
        setSelectedSupervisor({ ...formData });
        showSwal('Berhasil', `Data ${formData.name} berhasil diperbarui.`, 'success');
        setIsEditing(false);
    };

    const handleDeleteSupervisor = () => {
        showSwal('Konfirmasi Hapus', 'Anda yakin ingin menghapus data supervisor ini?', 'warning', 0, true, 'Ya, Hapus!').then((result) => {
            if (result.isConfirmed) {
                setSupervisors(supervisors.filter(sprv => sprv.id !== selectedSupervisor.id));
                showSwal('Terhapus!', 'Data supervisor berhasil dihapus.', 'success');
                resetState();
            }
        });
    };
    
    const resetState = () => {
        setIsCreating(false);
        setIsEditing(false);
        setSelectedSupervisor(null);
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
                    onChange={handleFormChange}
                    required
                />
                <FormInput
                    label="Email"
                    icon="fa-envelope"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                />
                <FormInput
                    label="Nomor Telepon"
                    icon="fa-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                />
                <FormInput
                    label="Tanggal Gabung"
                    icon="fa-calendar"
                    type="date"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={handleFormChange}
                    required
                />
                <FormSelect
                    label="Divisi"
                    icon="fa-briefcase"
                    name="division"
                    value={formData.division}
                    onChange={handleFormChange}
                    options={divisions.map(div => ({ value: div, label: div }))}
                />
                <FormSelect
                    label="Status"
                    icon="fa-shield-alt"
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' }
                    ]}
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
                        onChange={handleFormChange}
                        min="0"
                    />
                    <FormInput
                        label="Tunjangan"
                        icon="fa-hand-holding-usd"
                        type="number"
                        name="salaryDetails.allowance"
                        value={formData.salaryDetails?.allowance || 0}
                        onChange={handleFormChange}
                        min="0"
                    />
                    <FormInput
                        label="Potongan"
                        icon="fa-minus-circle"
                        type="number"
                        name="salaryDetails.deductions"
                        value={formData.salaryDetails?.deductions || 0}
                        onChange={handleFormChange}
                        min="0"
                    />
                </div>
            </div>
        </div>
    );

    const renderSupervisorDetail = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-gray-500 text-xs">ID</p>
                        <p className="text-gray-800">{selectedSupervisor.id}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Nama</p>
                        <p className="text-gray-800">{selectedSupervisor.name}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Email</p>
                        <p className="text-gray-800">{selectedSupervisor.email}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Telepon</p>
                        <p className="text-gray-800">{selectedSupervisor.phone}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Divisi</p>
                        <p className="text-gray-800">{selectedSupervisor.division}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Role</p>
                        <p className="text-gray-800 capitalize">{selectedSupervisor.role}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Status</p>
                        <p className="text-gray-800">{selectedSupervisor.status}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Bergabung</p>
                        <p className="text-gray-800">{selectedSupervisor.joinDate}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-500 text-xs">Gaji Bersih</p>
                        <p className="text-gray-800">{formattedCurrency(selectedSupervisor.salaryDetails.basic + selectedSupervisor.salaryDetails.allowance - selectedSupervisor.salaryDetails.deductions)}</p>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-[#708993]/10 pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Detail Gaji</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Gaji Pokok:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedSupervisor.salaryDetails.basic)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Tunjangan:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedSupervisor.salaryDetails.allowance)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Potongan:</span>
                        <span className="text-gray-800">{formattedCurrency(selectedSupervisor.salaryDetails.deductions)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Gaji Bersih:</span>
                        <span className="text-gray-800 font-semibold">{formattedCurrency(selectedSupervisor.salaryDetails.basic + selectedSupervisor.salaryDetails.allowance - selectedSupervisor.salaryDetails.deductions)}</span>
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
                            <i className="fas fa-user-shield text-white text-lg"></i>
                        </div>
                        Manajemen Supervisor
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">Kelola data supervisor dan informasi gaji</p>
                </div>
                <ActionButton 
                    onClick={() => { resetState(); setIsCreating(true); }}
                    variant="primary"
                >
                    <i className="fas fa-user-plus"></i>
                    Tambah Supervisor
                </ActionButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Supervisor List */}
                <GlassCard className="lg:col-span-1 p-5">
                    <div className="mb-4">
                        <div className="relative">
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                            <input
                                type="text"
                                placeholder="Cari supervisor..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-2">
                        {filteredSupervisors.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                <i className="fas fa-user-shield text-3xl mb-3 text-gray-300"></i>
                                <p className="text-sm">Tidak ada supervisor ditemukan</p>
                            </div>
                        ) : (
                            filteredSupervisors.map(sprv => (
                                <SupervisorCard
                                    key={sprv.id}
                                    supervisor={sprv}
                                    isSelected={selectedSupervisor?.id === sprv.id}
                                    onClick={() => handleSelectSupervisor(sprv)}
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
                                <h3 className="text-xl font-semibold text-gray-800">Tambah Supervisor Baru</h3>
                                <ActionButton onClick={resetState} variant="ghost">
                                    <i className="fas fa-times"></i>
                                </ActionButton>
                            </div>
                            {renderForm()}
                            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#708993]/10">
                                <ActionButton onClick={resetState} variant="secondary">
                                    Batal
                                </ActionButton>
                                <ActionButton onClick={handleCreateSupervisor}>
                                    <i className="fas fa-save"></i>
                                    Simpan Supervisor
                                </ActionButton>
                            </div>
                        </>
                    ) : selectedSupervisor ? (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {isEditing ? 'Edit Data Supervisor' : 'Detail Supervisor'}
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
                                            <ActionButton onClick={handleUpdateSupervisor}>
                                                <i className="fas fa-save"></i> Simpan
                                            </ActionButton>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            {isEditing ? renderForm() : renderSupervisorDetail()}
                            
                            {!isEditing && (
                                <div className="flex gap-3 mt-8 pt-6 border-t border-[#708993]/10">
                                    <ActionButton 
                                        onClick={() => setIsEditing(true)}
                                        variant="primary"
                                    >
                                        <i className="fas fa-edit"></i> Edit Data
                                    </ActionButton>
                                    <ActionButton 
                                        onClick={handleDeleteSupervisor} 
                                        variant="danger"
                                    >
                                        <i className="fas fa-trash-alt"></i> Hapus Supervisor
                                    </ActionButton>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <i className="fas fa-user-shield text-5xl mb-4"></i>
                            <p className="text-lg font-medium text-gray-500">Pilih supervisor</p>
                            <p className="text-sm text-gray-400 mt-1">Pilih supervisor dari daftar untuk melihat detail</p>
                        </div>
                    )}
                </GlassCard>
            </div>
        </div>
    );
};

export default OwnerSupervisorManagement;