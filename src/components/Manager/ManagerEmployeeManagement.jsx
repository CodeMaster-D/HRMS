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

// File input with consistent styling
const FormFileInput = ({ label, icon, value, onChange, name, className = '' }) => (
    <div className={className}>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <i className={`fas ${icon} text-[#708993] text-xs`}></i> {label}
        </label>
        <input 
            type="file" 
            name={name}
            accept="image/jpeg, image/png"
            onChange={onChange}
            className="w-full px-4 py-3 bg-white/50 border border-[#708993]/20 rounded-2xl text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#708993]/20 file:text-[#708993] hover:file:bg-[#708993]/30 focus:outline-none focus:ring-2 focus:ring-[#708993]/30 focus:border-transparent transition-all duration-200"
        />
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

// Filter Component
const FilterPanel = ({ filters, onFilterChange, onResetFilters }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <GlassCard className="p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-filter text-[#708993]"></i>
                    Filter Karyawan
                </h3>
                <div className="flex gap-2">
                    <ActionButton 
                        onClick={() => setIsExpanded(!isExpanded)}
                        variant="ghost"
                        className="text-xs text-black"
                    >
                        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                        {isExpanded ? 'Sembunyikan' : 'Tampilkan'}
                    </ActionButton>
                    <ActionButton 
                        onClick={onResetFilters}
                        variant="secondary"
                        className="text-xs text-black"
                    >
                        <i className="fas fa-refresh"></i>
                        Reset
                    </ActionButton>
                </div>
            </div>

            {isExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[#708993]/10">
                    <FormInput
                        label="ID"
                        icon="fa-hashtag"
                        name="id"
                        value={filters.id}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Account ID"
                        icon="fa-user-circle"
                        name="account_id"
                        value={filters.account_id}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Nama"
                        icon="fa-user"
                        name="name"
                        value={filters.name}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="NIK"
                        icon="fa-id-card"
                        name="nik"
                        value={filters.nik}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Telepon"
                        icon="fa-phone"
                        name="phone"
                        value={filters.phone}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Alamat"
                        icon="fa-map-marker-alt"
                        name="address"
                        value={filters.address}
                        onChange={onFilterChange}
                    />
                    <FormSelect
                        label="Jenis Kelamin"
                        icon="fa-venus-mars"
                        name="gender"
                        value={filters.gender}
                        onChange={onFilterChange}
                        options={[
                            { value: '', label: 'Semua' },
                            { value: 'male', label: 'Laki-laki' },
                            { value: 'female', label: 'Perempuan' }
                        ]}
                    />
                    <FormSelect
                        label="Agama"
                        icon="fa-place-of-worship"
                        name="religion"
                        value={filters.religion}
                        onChange={onFilterChange}
                        options={[
                            { value: '', label: 'Semua' },
                            { value: 'Islam', label: 'Islam' },
                            { value: 'Kristen', label: 'Kristen' },
                            { value: 'Katolik', label: 'Katolik' },
                            { value: 'Hindu', label: 'Hindu' },
                            { value: 'Buddha', label: 'Buddha' },
                            { value: 'Konghucu', label: 'Konghucu' }
                        ]}
                    />
                    <FormInput
                        label="Tempat Lahir"
                        icon="fa-map-marker-alt"
                        name="birth_place"
                        value={filters.birth_place}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Tanggal Lahir"
                        icon="fa-calendar"
                        type="date"
                        name="birth_date"
                        value={filters.birth_date}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Posisi"
                        icon="fa-briefcase"
                        name="position"
                        value={filters.position}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Divisi"
                        icon="fa-building"
                        name="division"
                        value={filters.division}
                        onChange={onFilterChange}
                    />
                    <FormInput
                        label="Tanggal Mulai Kerja"
                        icon="fa-calendar-check"
                        type="date"
                        name="hired_at"
                        value={filters.hired_at}
                        onChange={onFilterChange}
                    />
                    <FormSelect
                        label="Status Karyawan"
                        icon="fa-shield-alt"
                        name="employment_status"
                        value={filters.employment_status}
                        onChange={onFilterChange}
                        options={[
                            { value: '', label: 'Semua' },
                            { value: 'Active', label: 'Aktif' },
                            { value: 'Inactive', label: 'Tidak Aktif' },
                            { value: 'On Leave', label: 'Cuti' }
                        ]}
                    />
                    <FormInput
                        label="Tanggal Berhenti"
                        icon="fa-calendar-times"
                        type="date"
                        name="resigned_at"
                        value={filters.resigned_at}
                        onChange={onFilterChange}
                    />
                    <FormSelect
                        label="Status Aktif"
                        icon="fa-check-circle"
                        name="is_active"
                        value={filters.is_active}
                        onChange={onFilterChange}
                        options={[
                            { value: '', label: 'Semua' },
                            { value: 'true', label: 'Aktif' },
                            { value: 'false', label: 'Tidak Aktif' }
                        ]}
                    />
                </div>
            )}
        </GlassCard>
    );
};

// --- B5. Manajemen Karyawan (CRUD) ---
const ManagerEmployeeManagement = ({ employees = [], setEmployees = () => {} }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        id: '',
        account_id: '',
        name: '',
        nik: '',
        phone: '',
        address: '',
        gender: '',
        religion: '',
        birth_place: '',
        birth_date: '',
        position: '',
        division: '',
        hired_at: '',
        employment_status: '',
        resigned_at: '',
        is_active: ''
    });
    
    // Dummy shift data - replace with actual API call when database is ready
    const [shifts, setShifts] = useState([
        {
            id: 'day-shift',
            name: 'Day Shift',
            startTime: '08:00',
            endTime: '17:00',
            clockInStart: '07:45',
            clockInEnd: '08:15',
            clockOutStart: '16:45',
            clockOutEnd: '17:15',
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            enabled: true
        },
        {
            id: 'night-shift',
            name: 'Night Shift',
            startTime: '22:00',
            endTime: '06:00',
            clockInStart: '21:45',
            clockInEnd: '22:15',
            clockOutStart: '05:45',
            clockOutEnd: '06:15',
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            enabled: false
        }
    ]);
    
    // Fetch shifts from database when component mounts
    useEffect(() => {
        // This is where you would fetch shifts from your database
        // For now, we'll use the dummy data
        
        // Example of how you might fetch from an API:
        /*
        fetch('/api/shifts')
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    setShifts(data);
                }
            })
            .catch(error => {
                console.error('Error fetching shifts:', error);
                // Keep using dummy data if fetch fails
            });
        */
    }, []);

    // Initialize form data when an employee is selected or when creating a new one
    useEffect(() => {
        if (isCreating) {
            setFormData({ 
                role: 'employee', 
                status: 'Active', 
                cutiBalance: 12,
                cutiTahunan: 12,
                agama: 'Kristen',
                gender: 'male',
                // Default to first enabled shift
                shiftId: shifts.find(s => s.enabled)?.id || ''
            });
        } else if (selectedEmployee && isEditing) {
            setFormData({
                ...selectedEmployee,
                // Ensure shiftId is set, default to first enabled shift if not present
                shiftId: selectedEmployee.shiftId || shifts.find(s => s.enabled)?.id || ''
            });
        } else if (!isEditing) {
            setFormData({});
        }
    }, [selectedEmployee, isEditing, isCreating, shifts]);

    if (!Array.isArray(employees)) {
        console.warn('⚠️ [ManagerEmployeeManagement] employees is not an array:', employees);
    }

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Reset all filters
    const handleResetFilters = () => {
        setFilters({
            id: '',
            account_id: '',
            name: '',
            nik: '',
            phone: '',
            address: '',
            gender: '',
            religion: '',
            birth_place: '',
            birth_date: '',
            position: '',
            division: '',
            hired_at: '',
            employment_status: '',
            resigned_at: '',
            is_active: ''
        });
    };

    // Filter employees based on search term and filters
    const filteredEmployees = employees
        .filter(employee => employee.role === 'employee')
        .filter(employee => {
            // Search term filter
            const searchMatch = 
                employee.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.nik?.includes(searchTerm) ||
                employee.division?.toLowerCase().includes(searchTerm.toLowerCase());

            // Advanced filters
            const filterMatch = Object.entries(filters).every(([key, value]) => {
                if (!value) return true;

                const employeeValue = employee[key] || employee[key === 'religion' ? 'agama' : key] || 
                                   employee[key === 'employment_status' ? 'status' : key] ||
                                   employee[key === 'hired_at' ? 'hireAt' : key];

                if (key === 'is_active') {
                    if (value === 'true') return employee.status === 'Active';
                    if (value === 'false') return employee.status !== 'Active';
                }

                if (typeof employeeValue === 'string') {
                    return employeeValue.toLowerCase().includes(value.toLowerCase());
                }

                return String(employeeValue) === value;
            });

            return searchMatch && filterMatch;
        });

    // --- Handlers ---
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            // Handle file input separately
            setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
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
        if (!formData.name || !formData.nik || !formData.password) {
            showSwal('Error', 'Nama, NIK, dan Password wajib diisi.', 'error');
            return;
        }
        
        // Get shift details from shifts array
        const selectedShift = shifts.find(s => s.id === formData.shiftId);
        
        const newEmployee = {
            ...formData,
            id: Date.now(),
            joinDate: new Date().toLocaleDateString('id-ID'),
            currentMonthAttendance: [],
            attendancePhotos: [],
            // Store shift details for easy access
            shift: selectedShift ? {
                id: selectedShift.id,
                name: selectedShift.name,
                startTime: selectedShift.startTime,
                endTime: selectedShift.endTime
            } : null
        };
        
        setEmployees(prev => [...prev, newEmployee]);
        showSwal('Berhasil', `Karyawan ${newEmployee.name} berhasil ditambahkan.`, 'success');
        resetState();
    };

    const handleUpdateEmployee = () => {
        // Get shift details from shifts array
        const selectedShift = shifts.find(s => s.id === formData.shiftId);
        
        const updatedEmployee = {
            ...formData,
            // Update shift details
            shift: selectedShift ? {
                id: selectedShift.id,
                name: selectedShift.name,
                startTime: selectedShift.startTime,
                endTime: selectedShift.endTime
            } : null
        };
        
        setEmployees(prevEmployees =>
            prevEmployees.map(emp =>
                emp.id === selectedEmployee.id ? updatedEmployee : emp
            )
        );
        setSelectedEmployee(updatedEmployee);
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
                    label="Name"
                    icon="fa-user"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <FormInput
                    label="Password"
                    icon="fa-lock"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <FormSelect
                    label="Role"
                    icon="fa-user-tag"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    options={[
                        { value: 'employee', label: 'Employee' },
                        { value: 'manager', label: 'Manager' },
                        { value: 'owner', label: 'Owner' },
                        { value: 'supervisor', label: 'Supervisor' },
                        { value: 'superadmin', label: 'Superadmin' }
                    ]}
                />
                <FormSelect
                    label="Gender"
                    icon="fa-venus-mars"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' }
                    ]}
                />
                <FormSelect
                    label="Religion"
                    icon="fa-place-of-worship"
                    name="agama"
                    value={formData.agama}
                    onChange={handleInputChange}
                    options={[
                        { value: 'Islam', label: 'Islam' },
                        { value: 'Kristen', label: 'Kristen' },
                        { value: 'Katolik', label: 'Katolik' },
                        { value: 'Hindu', label: 'Hindu' },
                        { value: 'Buddha', label: 'Buddha' },
                        { value: 'Konghucu', label: 'Konghucu' }
                    ]}
                />
                <FormInput
                    label="Birth Place"
                    icon="fa-map-marker-alt"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Birth Date"
                    icon="fa-calendar"
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                />
                <FormFileInput
                    label="Profile Photo"
                    icon="fa-camera"
                    name="profile"
                    value={formData.profile}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Position"
                    icon="fa-briefcase"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Hire Date"
                    icon="fa-calendar-check"
                    type="date"
                    name="hireAt"
                    value={formData.hireAt}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Resigned Date"
                    icon="fa-calendar-times"
                    type="date"
                    name="resignedAt"
                    value={formData.resignedAt}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Division"
                    icon="fa-building"
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
                    label="Phone Number"
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
                {/* Shift Selection */}
                <FormSelect
                    label="Work Shift"
                    icon="fa-clock"
                    name="shiftId"
                    value={formData.shiftId || ''}
                    onChange={handleInputChange}
                    options={[
                        { value: '', label: 'Select a shift' },
                        ...shifts
                            .filter(shift => shift.enabled)
                            .map(shift => ({
                                value: shift.id,
                                label: `${shift.name} (${shift.startTime} - ${shift.endTime})`
                            }))
                    ]}
                />
            </div>
            
            <FormTextarea
                label="Address"
                icon="fa-map-marker-alt"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={2}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                    label="leave balance (days)"
                    icon="fa-calendar-alt"
                    type="number"
                    name="cutiBalance"
                    value={formData.cutiBalance}
                    onChange={handleInputChange}
                    min="0"
                />
                <FormInput
                    label="Annual Leave (Days)"
                    icon="fa-calendar-check"
                    type="number"
                    name="cutiTahunan"
                    value={formData.cutiTahunan}
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
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="font-medium text-gray-500 text-xs">Agama</p>
                    <p className="text-gray-800">{selectedEmployee.agama || '-'}</p>
                </div>
                <div>
                    <p className="font-medium text-gray-500 text-xs">Cuti Tahunan</p>
                    <p className="text-gray-800">{selectedEmployee.cutiTahunan || 0} hari</p>
                </div>
                <div>
                    <p className="font-medium text-gray-500 text-xs">Work Shift</p>
                    <p className="text-gray-800">
                        {selectedEmployee.shift ? 
                            `${selectedEmployee.shift.name} (${selectedEmployee.shift.startTime} - ${selectedEmployee.shift.endTime})` : 
                            'Not assigned'
                        }
                    </p>
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

            {/* Filter Panel */}
            <FilterPanel 
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
            />

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
                                {(searchTerm || Object.values(filters).some(filter => filter !== '')) && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        Coba ubah pencarian atau filter
                                    </p>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="text-xs text-gray-500 mb-2">
                                    Menampilkan {filteredEmployees.length} karyawan
                                </div>
                                {filteredEmployees.map(employee => (
                                    <EmployeeCard
                                        key={employee.id}
                                        employee={employee}
                                        isSelected={selectedEmployee?.id === employee.id}
                                        onClick={() => handleSelectEmployee(employee)}
                                    />
                                ))}
                            </>
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