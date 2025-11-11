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

// Glass Card component with iOS 26 liquid glass design
const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-2xl bg-white/30 border border-[#708993]/20 rounded-3xl shadow-sm ${className}`}>
        {children}
    </div>
);

const OwnerWorkSettings = ({ workSettings, setWorkSettings }) => {
    // Gunakan state lokal untuk form
    const [formData, setFormData] = useState({ 
        ...workSettings,
        lateDeduction: workSettings.lateDeduction || 50000,
        earlyLeaveDeduction: workSettings.earlyLeaveDeduction || 75000,
    });

    useEffect(() => {
        // Sinkronisasi jika prop workSettings berubah dari luar (misal dari localStorage)
        setFormData(workSettings);
    }, [workSettings]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: name.includes('Deduction') ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validasi waktu
        if (formData.startTime >= formData.endTime) {
            showSwal('Failed', 'End time must be greater than start time.', 'error');
            return;
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
                    {/* Work Hours Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <i className="fas fa-clock text-[#708993]"></i>
                            Standard Work Hours
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="Start Time"
                                icon="fa-play"
                                type="time"
                                name="startTime"
                                value={formData.startTime || '08:00'}
                                onChange={handleChange}
                                required
                            />
                            
                            <FormInput
                                label="End Time"
                                icon="fa-stop"
                                type="time"
                                name="endTime"
                                value={formData.endTime || '17:00'}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Deduction Policies Section */}
                    <div className="border-t border-[#708993]/10 pt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <i className="fas fa-money-bill-wave text-[#708993]"></i>
                            Deduction Policies (Per Occurrence)
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <FormInput
                                    label="Late Arrival Deduction"
                                    icon="fa-hourglass-end"
                                    type="number"
                                    name="lateDeduction"
                                    value={formData.lateDeduction || 0}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                />
                                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                                    <i className="fas fa-info-circle text-[#708993]"></i>
                                    Current: {formattedCurrency(formData.lateDeduction || 0)}
                                </p>
                            </div>

                            <div>
                                <FormInput
                                    label="Early Leave Deduction"
                                    icon="fa-running"
                                    type="number"
                                    name="earlyLeaveDeduction"
                                    value={formData.earlyLeaveDeduction || 0}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                />
                                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                                    <i className="fas fa-info-circle text-[#708993]"></i>
                                    Current: {formattedCurrency(formData.earlyLeaveDeduction || 0)}
                                </p>
                            </div>
                        </div>
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-[#708993]/10">
                        <ActionButton 
                            type="button" 
                            variant="secondary"
                            onClick={() => setFormData(workSettings)}
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