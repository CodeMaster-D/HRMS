// src/pages/Dashboard/OwnerDashboard/OwnerWorkSettings.jsx
import React, { useState, useEffect } from 'react';
import { showSwal } from '../../../utils/swal';
import { formattedCurrency } from '../../../utils/formatters';

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

// Days selection component
const DaysSelector = ({ selectedDays, onChange, label = "Select Days", required = false }) => {
    const daysOfWeek = [
        { id: 'monday', label: 'Mon', fullLabel: 'Monday' },
        { id: 'tuesday', label: 'Tue', fullLabel: 'Tuesday' },
        { id: 'wednesday', label: 'Wed', fullLabel: 'Wednesday' },
        { id: 'thursday', label: 'Thu', fullLabel: 'Thursday' },
        { id: 'friday', label: 'Fri', fullLabel: 'Friday' },
        { id: 'saturday', label: 'Sat', fullLabel: 'Saturday' },
        { id: 'sunday', label: 'Sun', fullLabel: 'Sunday' }
    ];

    const handleDayToggle = (dayId) => {
        const updatedDays = selectedDays.includes(dayId)
            ? selectedDays.filter(d => d !== dayId)
            : [...selectedDays, dayId];
        onChange(updatedDays);
    };

    return (
        <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                <i className="fas fa-calendar-week text-[#708993] text-xs"></i> {label}
                {required && <span className="text-red-400">*</span>}
            </label>
            <div className="flex flex-wrap gap-2">
                {daysOfWeek.map(day => (
                    <button
                        key={day.id}
                        type="button"
                        onClick={() => handleDayToggle(day.id)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                            selectedDays.includes(day.id)
                                ? 'bg-[#708993] text-white'
                                : 'bg-white/40 text-[#708993] border border-[#708993]/20 hover:bg-white/60'
                        }`}
                        title={day.fullLabel}
                    >
                        {day.label}
                    </button>
                ))}
            </div>
            {selectedDays.length === 0 && required && (
                <p className="mt-2 text-xs text-red-400">Please select at least one day</p>
            )}
        </div>
    );
};

// Glass Card component with iOS 26 liquid glass design
const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-2xl bg-white/30 border border-[#708993]/20 rounded-3xl shadow-sm ${className}`}>
        {children}
    </div>
);

const OwnerWorkSettings = ({ workSettings, setWorkSettings }) => {
    // Initialize with default shifts if not provided
    const defaultShifts = [
        {
            id: 'day-shift',
            name: 'Day Shift',
            startTime: '08:00',
            endTime: '17:00',
            lateDeduction: 50000,
            earlyLeaveDeduction: 75000,
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], // Default to weekdays
            enabled: true
        },
        {
            id: 'night-shift',
            name: 'Night Shift',
            startTime: '22:00',
            endTime: '06:00',
            lateDeduction: 60000,
            earlyLeaveDeduction: 85000,
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], // Default to weekdays
            enabled: false
        }
    ];

    // Gunakan state lokal untuk form
    const [formData, setFormData] = useState({
        shifts: workSettings.shifts || defaultShifts
    });

    useEffect(() => {
        // Sinkronisasi jika prop workSettings berubah dari luar (misal dari localStorage)
        setFormData({
            shifts: workSettings.shifts || defaultShifts
        });
    }, [workSettings]);

    const handleShiftChange = (index, field, value) => {
        const updatedShifts = [...formData.shifts];
        
        if (field === 'enabled') {
            updatedShifts[index][field] = value;
        } else if (field === 'days') {
            updatedShifts[index][field] = value;
        } else if (field.includes('Deduction')) {
            updatedShifts[index][field] = parseInt(value) || 0;
        } else {
            updatedShifts[index][field] = value;
        }
        
        setFormData({ shifts: updatedShifts });
    };

    const addNewShift = () => {
        const newShift = {
            id: `shift-${Date.now()}`,
            name: `Shift ${formData.shifts.length + 1}`,
            startTime: '09:00',
            endTime: '18:00',
            lateDeduction: 50000,
            earlyLeaveDeduction: 75000,
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], // Default to weekdays
            enabled: true
        };
        
        setFormData({
            shifts: [...formData.shifts, newShift]
        });
    };

    const removeShift = (index) => {
        if (formData.shifts.length <= 1) {
            showSwal('Error', 'You must have at least one shift.', 'error');
            return;
        }
        
        const updatedShifts = formData.shifts.filter((_, i) => i !== index);
        setFormData({ shifts: updatedShifts });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validasi waktu untuk setiap shift yang diaktifkan
        for (const shift of formData.shifts) {
            if (!shift.enabled) continue;
            
            // Check if at least one day is selected
            if (shift.days.length === 0) {
                showSwal('Failed', `For ${shift.name}, please select at least one day.`, 'error');
                return;
            }
            
            // For regular shifts (not spanning midnight)
            if (shift.startTime < shift.endTime) {
                if (shift.startTime >= shift.endTime) {
                    showSwal('Failed', `For ${shift.name}, end time must be greater than start time.`, 'error');
                    return;
                }
            }
            // For shifts spanning midnight (like night shift)
            else {
                if (shift.startTime === shift.endTime) {
                    showSwal('Failed', `For ${shift.name}, start and end time cannot be the same.`, 'error');
                    return;
                }
            }
        }

        // Terapkan perubahan ke state utama
        setWorkSettings(formData);

        showSwal('Success!', 'Work hours and deduction settings have been updated.', 'success', 2000);
    };

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] rounded-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="bg-[#708993] p-3 rounded-2xl">
                            <i className="fas fa-cog text-white text-lg"></i>
                        </div>
                        Work Settings
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">Configure work hours and deduction policies</p>
                </div>
            </div>

            <GlassCard className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Shifts Section */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <i className="fas fa-clock text-[#708993]"></i>
                                Shift Settings
                            </h3>
                            <ActionButton 
                                type="button" 
                                variant="ghost"
                                onClick={addNewShift}
                            >
                                <i className="fas fa-plus mr-2"></i> Add Shift
                            </ActionButton>
                        </div>

                        {formData.shifts.map((shift, index) => (
                            <div key={shift.id} className="mb-6 border border-[#708993]/10 rounded-2xl p-4 bg-white/30">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                className="sr-only peer" 
                                                checked={shift.enabled}
                                                onChange={(e) => handleShiftChange(index, 'enabled', e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#708993]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#708993]"></div>
                                        </label>
                                        <FormInput
                                            label="Shift Name"
                                            icon="fa-tag"
                                            type="text"
                                            value={shift.name}
                                            onChange={(e) => handleShiftChange(index, 'name', e.target.value)}
                                            required={shift.enabled}
                                            className="mt-0"
                                        />
                                    </div>
                                    {formData.shifts.length > 1 && (
                                        <ActionButton 
                                            type="button" 
                                            variant="danger"
                                            onClick={() => removeShift(index)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </ActionButton>
                                    )}
                                </div>
                                
                                {shift.enabled && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormInput
                                                label="Start Time"
                                                icon="fa-play"
                                                type="time"
                                                value={shift.startTime}
                                                onChange={(e) => handleShiftChange(index, 'startTime', e.target.value)}
                                                required
                                            />
                                            
                                            <FormInput
                                                label="End Time"
                                                icon="fa-stop"
                                                type="time"
                                                value={shift.endTime}
                                                onChange={(e) => handleShiftChange(index, 'endTime', e.target.value)}
                                                required
                                            />
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <FormInput
                                                    label="Late Arrival Deduction"
                                                    icon="fa-hourglass-end"
                                                    type="number"
                                                    value={shift.lateDeduction}
                                                    onChange={(e) => handleShiftChange(index, 'lateDeduction', e.target.value)}
                                                    required
                                                    min="0"
                                                />
                                                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                                                    <i className="fas fa-info-circle text-[#708993]"></i>
                                                    Current: {formattedCurrency(shift.lateDeduction || 0)}
                                                </p>
                                            </div>

                                            <div>
                                                <FormInput
                                                    label="Early Leave Deduction"
                                                    icon="fa-running"
                                                    type="number"
                                                    value={shift.earlyLeaveDeduction}
                                                    onChange={(e) => handleShiftChange(index, 'earlyLeaveDeduction', e.target.value)}
                                                    required
                                                    min="0"
                                                />
                                                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                                                    <i className="fas fa-info-circle text-[#708993]"></i>
                                                    Current: {formattedCurrency(shift.earlyLeaveDeduction || 0)}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Days Selection */}
                                        <DaysSelector
                                            selectedDays={shift.days || []}
                                            onChange={(days) => handleShiftChange(index, 'days', days)}
                                            required={shift.enabled}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Additional Settings */}
                    <div className="border-t border-[#708993]/10 pt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <i className="fas fa-sliders-h text-[#708993]"></i>
                            Additional Settings
                        </h3>
                        
                        <div className="bg-[#708993]/5 rounded-2xl p-4 border border-[#708993]/10">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-lightbulb text-[#708993] mt-1"></i>
                                <div className="text-sm text-gray-600">
                                    <p className="font-medium text-gray-700 mb-1">Work Hours Policy</p>
                                    <p>These settings will be applied to all attendance calculations. Deductions are automatically calculated based on employee check-in and check-out times.</p>
                                    <p className="mt-2">You can create multiple shifts with different time schedules and deduction policies. Enable or disable shifts as needed.</p>
                                    <p className="mt-2">You can also select specific days for each shift to apply. For example, you might have different shifts for weekdays and weekends.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-[#708993]/10">
                        <ActionButton 
                            type="button" 
                            variant="secondary"
                            onClick={() => setFormData({ shifts: workSettings.shifts || defaultShifts })}
                        >
                            <i className="fas fa-undo mr-2"></i> Reset
                        </ActionButton>
                        <ActionButton type="submit">
                            <i className="fas fa-save mr-2"></i> Save Settings
                        </ActionButton>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};

export default OwnerWorkSettings;