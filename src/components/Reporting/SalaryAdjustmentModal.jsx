// src/components/Reporting/SalaryAdjustmentModal.jsx
import React, { useState } from 'react';
import { GlassCard, PrimaryButton } from '../Shared/Modals/componentsUtilityUI';

const SalaryAdjustmentModal = ({ employee, onClose, onSave }) => {
    const [adjustmentType, setAdjustmentType] = useState('raise');
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState('all');
    const [otherDeductionReason, setOtherDeductionReason] = useState('');

    const MAX_DIGITS = 12; // Maximum 12 digits for salary amount

    const divisions = ['Semua Divisi', 'Marketing', 'IT', 'HR', 'Finance', 'Operations'];
    const employeesList = [
        { id: 1, name: 'Ahmad Wijaya', division: 'Marketing', currentSalary: 5000000 },
        { id: 2, name: 'Sari Dewi', division: 'IT', currentSalary: 6000000 },
        { id: 3, name: 'Budi Santoso', division: 'HR', currentSalary: 4500000 },
        // ... tambahkan data dummy lainnya
    ];

    const deductionTypes = [
        'BPJS Kesehatan',
        'BPJS Ketenagakerjaan', 
        'Pajak Penghasilan',
        'Potongan Absensi',
        'Pinjaman Karyawan',
        'Lainnya'
    ];

    // Simplified validation function
    const validateAmount = (value) => {
        const numValue = parseFloat(value);
        
        // Only check digit limit, no percentage restriction
        if (value.toString().replace(/\D/g, '').length > MAX_DIGITS) {
            return false;
        }

        if (adjustmentType === 'deduction') {
            const currentSalary = employeesList.find(emp => selectedEmployees.includes(emp.id))?.currentSalary;
            if (numValue > currentSalary) {
                return false;
            }
        }
        return true;
    };

    // Handle amount input with digit limit
    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (value.toString().replace(/\D/g, '').length <= MAX_DIGITS) {
            // Allow negative values for deductions
            if (adjustmentType === 'deduction' && !value.startsWith('-')) {
                setAmount(`-${value}`);
            } else {
                setAmount(value);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateAmount(amount)) return;
        
        onSave({
            type: adjustmentType,
            amount: parseFloat(amount),
            reason: reason === 'Lainnya' ? `Lainnya: ${otherDeductionReason}` : reason,
            employees: selectedEmployees,
            division: selectedDivision,
            timestamp: new Date().toISOString()
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#708993] to-[#5a717b] p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white flex items-center">
                            <i className="fas fa-edit mr-3"></i>
                            Atur Penyesuaian Gaji
                        </h3>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                        >
                            <i className="fas fa-times text-white"></i>
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="flex gap-6">
                        {/* Left Column - Type Selection & Scope */}
                        <div className="w-1/3 space-y-5">
                            {/* Type Selection */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Jenis Penyesuaian</h4>
                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        onClick={() => setAdjustmentType('raise')}
                                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${
                                            adjustmentType === 'raise' 
                                                ? 'border-[#708993] bg-[#708993]/5' 
                                                : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    >
                                        <i className={`fas fa-arrow-up text-2xl mb-2 ${adjustmentType === 'raise' ? 'text-[#708993]' : 'text-gray-400'}`}></i>
                                        <div className={`font-medium ${adjustmentType === 'raise' ? 'text-[#708993]' : 'text-gray-700'}`}>Kenaikan Gaji</div>
                                        <div className="text-xs text-gray-500 mt-1">Tambah pendapatan</div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setAdjustmentType('deduction')}
                                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${
                                            adjustmentType === 'deduction' 
                                                ? 'border-[#708993] bg-[#708993]/5' 
                                                : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    >
                                        <i className={`fas fa-arrow-down text-2xl mb-2 ${adjustmentType === 'deduction' ? 'text-[#708993]' : 'text-gray-400'}`}></i>
                                        <div className={`font-medium ${adjustmentType === 'deduction' ? 'text-[#708993]' : 'text-gray-700'}`}>Potongan Gaji</div>
                                        <div className="text-xs text-gray-500 mt-1">Kurangi gaji bersih</div>
                                    </button>
                                </div>
                            </div>

                            {/* Scope Selection */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Pilih Divisi</h4>
                                <select
                                    value={selectedDivision}
                                    onChange={(e) => setSelectedDivision(e.target.value)}
                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#708993] focus:border-transparent transition-all duration-200 text-black"
                                >
                                    {divisions.map(div => (
                                        <option key={div} value={div.toLowerCase()}>
                                            {div}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Employee Selection - Updated */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Pilih Karyawan</h4>
                                <div className="max-h-48 overflow-y-auto space-y-2 p-3 border border-gray-200 rounded-xl bg-gray-50">
                                    {employeesList.map(emp => (
                                        <label key={emp.id} className="flex items-center justify-between p-2 hover:bg-white rounded-lg cursor-pointer transition-colors duration-150">
                                            <div className="flex items-center space-x-3">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedEmployees.includes(emp.id)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedEmployees([...selectedEmployees, emp.id]);
                                                        } else {
                                                            setSelectedEmployees(selectedEmployees.filter(id => id !== emp.id));
                                                        }
                                                    }}
                                                    className="w-4 h-4 text-[#708993] border-gray-300 rounded focus:ring-[#708993]"
                                                />
                                                <span className="text-sm text-black">
                                                    {emp.name} <span className="text-gray-400">({emp.division})</span>
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Rp {emp.currentSalary.toLocaleString('id-ID')}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Amount, Reason and Actions */}
                        <div className="w-2/3 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                                        <i className="fas fa-money-bill-wave mr-2 text-[#708993]"></i>
                                        Jumlah {adjustmentType === 'raise' ? 'Kenaikan' : 'Potongan'}
                                    </h4>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                                            Rp
                                        </span>
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            placeholder="0"
                                            className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#708993] focus:border-transparent transition-all duration-200 text-black"
                                            required
                                            max={adjustmentType === 'raise' ? '999999999999' : ''} // 12 digits max for raise
                                        />
                                    </div>
                                </div>

                                {adjustmentType === 'deduction' && (
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">
                                            <i className="fas fa-list mr-2 text-[#708993]"></i>
                                            Jenis Potongan
                                        </h4>
                                        <select
                                            value={reason}
                                            onChange={(e) => {
                                                setReason(e.target.value);
                                                if (e.target.value !== 'Lainnya') {
                                                    setOtherDeductionReason('');
                                                }
                                            }}
                                            className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#708993] focus:border-transparent transition-all duration-200 text-black"
                                        >
                                            <option value="">Pilih jenis potongan</option>
                                            {deductionTypes.map(type => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>

                            {/* Move Lainnya input here, before preview */}
                            {adjustmentType === 'deduction' && reason === 'Lainnya' && (
                                <div className="bg-yellow-50/50 rounded-xl p-4 border border-yellow-100">
                                    <h4 className="text-sm font-medium text-yellow-700 mb-2">
                                        <i className="fas fa-exclamation-circle mr-2"></i>
                                        Alasan Potongan Lainnya
                                    </h4>
                                    <input
                                        type="text"
                                        value={otherDeductionReason}
                                        onChange={(e) => setOtherDeductionReason(e.target.value)}
                                        placeholder="Contoh: Menyebabkan kerugian perusahaan, Kehilangan inventaris, dll."
                                        className="w-full p-3 bg-white border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-black"
                                        required
                                    />
                                </div>
                            )}

                            {/* Preview Salary After Deduction - New Section */}
                            {adjustmentType === 'deduction' && selectedEmployees.length > 0 && (
                                <div className="bg-blue-50 rounded-xl p-4">
                                    <h4 className="text-sm font-medium text-blue-700 mb-2">Preview Gaji Setelah Potongan</h4>
                                    {selectedEmployees.map(empId => {
                                        const emp = employeesList.find(e => e.id === empId);
                                        const afterDeduction = emp.currentSalary - (parseFloat(amount) || 0);
                                        const deductionPercentage = ((parseFloat(amount) || 0) / emp.currentSalary * 100).toFixed(1);
                                        return (
                                            <div key={emp.id} className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-600">{emp.name}</span>
                                                <div className="text-sm">
                                                    <span className="text-blue-600 font-medium">Rp {afterDeduction.toLocaleString('id-ID')}</span>
                                                    <span className="text-xs text-gray-400 ml-2">
                                                        (Gaji saat ini: Rp {emp.currentSalary.toLocaleString('id-ID')})
                                                    </span>
                                                    <span className="text-xs text-red-500 ml-2">
                                                        (-{deductionPercentage}%)
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Summary Section */}
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Ringkasan Penyesuaian</h4>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Jenis: <span className="font-medium text-black">{adjustmentType === 'raise' ? 'Kenaikan Gaji' : 'Potongan Gaji'}</span></p>
                                        <p className="text-sm text-gray-600">Jumlah Karyawan: <span className="font-medium text-black">{selectedEmployees.length}</span></p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Total {adjustmentType === 'raise' ? 'Kenaikan' : 'Potongan'}:</p>
                                        <p className="text-xl font-bold text-[#708993]">
                                            Rp {amount ? (parseFloat(amount) * selectedEmployees.length).toLocaleString('id-ID') : '0'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <i className="fas fa-times mr-2"></i>
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 px-4 bg-[#708993] text-white rounded-xl font-medium hover:bg-[#5a717b] transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <i className="fas fa-check mr-2"></i>
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SalaryAdjustmentModal;