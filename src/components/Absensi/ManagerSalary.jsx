// src/components/Reporting/ManagerSalary.jsx
import React from 'react';
import { GlassCard, StatCard } from '../UI/Cards'; 
import { formattedCurrency, calculateTotalSalary } from '../../utils/formatters'; 
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const ManagerSalary = ({ user }) => {
    const salary = user.salaryDetails || {};
    const totalSalary = calculateTotalSalary(salary);

    const salaryComponents = [
        { 
            title: 'Gaji Pokok', 
            value: salary.basic, 
            icon: 'fas fa-wallet', 
            color: 'blue',
            gradient: 'from-blue-500/20 to-blue-600/20',
            border: 'border-blue-400/30'
        },
        { 
            title: 'Tunjangan', 
            value: salary.allowance, 
            icon: 'fas fa-gift', 
            color: 'green',
            gradient: 'from-green-500/20 to-emerald-600/20',
            border: 'border-green-400/30'
        },
        { 
            title: 'Tunjangan Jabatan', 
            value: salary.positionAllowance, 
            icon: 'fas fa-briefcase', 
            color: 'indigo',
            gradient: 'from-indigo-500/20 to-purple-600/20',
            border: 'border-indigo-400/30'
        },
        { 
            title: 'Lembur', 
            value: `${salary.overtimeHours} jam`, 
            subValue: formattedCurrency(salary.overtimeHours * salary.overtimeRate),
            icon: 'fas fa-hourglass-start', 
            color: 'yellow',
            gradient: 'from-yellow-500/20 to-amber-600/20',
            border: 'border-yellow-400/30'
        },
        { 
            title: 'Bonus', 
            value: salary.bonus, 
            icon: 'fas fa-star', 
            color: 'purple',
            gradient: 'from-purple-500/20 to-pink-600/20',
            border: 'border-purple-400/30'
        },
        { 
            title: 'Potongan', 
            value: salary.deductions, 
            icon: 'fas fa-minus-circle', 
            color: 'red',
            gradient: 'from-red-500/20 to-rose-600/20',
            border: 'border-red-400/30'
        },
    ];

    const generatePdf = () => {
        const doc = new jsPDF();
        
        doc.setFontSize(18);
        doc.text("Slip Gaji Manager", 14, 22);
        
        doc.setFontSize(10);
        doc.text(`Periode: ${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}`, 14, 30);
        doc.text(`Nama: ${user.name}`, 14, 36);
        doc.text(`Jabatan: ${user.position || 'Manager'}`, 14, 42);
        doc.text(`Divisi: ${user.division || 'N/A'}`, 14, 48);

        const tableData = [
            ["KOMPONEN PENDAPATAN", "JUMLAH"],
            ["Gaji Pokok", formattedCurrency(salary.basic)],
            ["Tunjangan", formattedCurrency(salary.allowance)],
            ["Tunjangan Jabatan", formattedCurrency(salary.positionAllowance)],
            ["Lembur", formattedCurrency(salary.overtimeHours * salary.overtimeRate)],
            ["Bonus", formattedCurrency(salary.bonus)],
            ["Potongan", `-${formattedCurrency(salary.deductions)}`],
            ["GAJI BERSIH (NET SALARY)", formattedCurrency(totalSalary)],
        ];

        autoTable(doc, {
            startY: 55,
            head: [tableData[0]],
            body: tableData.slice(1, -1).map(row => [row[0], { content: row[1], styles: { halign: 'right' } }]),
            foot: [tableData.slice(-1)],
            theme: 'striped',
            headStyles: { fillColor: [59, 130, 246] },
            footStyles: { fillColor: [209, 213, 219], textColor: [0, 0, 0], fontStyle: 'bold' },
            styles: { fontSize: 10, cellPadding: 3 },
            columnStyles: {
                0: { cellWidth: 80 },
                1: { cellWidth: 80, halign: 'right' },
            }
        });

        doc.save(`Slip_Gaji_${user.name}_${new Date().getMonth() + 1}_${new Date().getFullYear()}.pdf`);
    };

    return (
        <GlassCard className="mt-6 relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
            <div className="p-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                    <div>
                        <h2 className="text-4xl font-bold bg-[#708993] bg-clip-text text-transparent">
                            Detail Gaji
                        </h2>
                        <p className="text-gray-600 mt-2 flex items-center">
                            <i className="fas fa-calendar-alt mr-2 text-[#708993]"></i>
                            Periode: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                    
                    {/* Download Button */}
                    <button
                        onClick={generatePdf}
                        className="mt-4 lg:mt-0 px-6 py-3 rounded-full bg-[#708993] hover:bg-[#5a727a] text-white font-semibold shadow-lg transition-all duration-300 flex items-center group border-none focus:outline-none"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                            <i className="fas fa-file-pdf text-white"></i>
                        </div>
                        Download Slip Gaji
                    </button>
                </div>

                {/* Net Salary Card */}
                <div className="mb-8 p-8 rounded-2xl bg-[#708993] backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="relative z-10 text-white">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <div className="text-center lg:text-left mb-6 lg:mb-0">
                                <p className="text-xl font-semibold opacity-90 mb-2 flex items-center justify-center lg:justify-start">
                                    <i className="fas fa-wallet mr-3 text-2xl"></i>
                                    Gaji Bersih Bulan Ini
                                </p>
                                <p className="text-5xl lg:text-6xl font-extrabold mt-2">
                                    {formattedCurrency(totalSalary)}
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-2xl bg-green-500/30 backdrop-blur-sm border border-green-400/50 flex items-center justify-center mb-3">
                                    <i className="fas fa-money-bill-wave text-3xl"></i>
                                </div>
                                <span className="text-sm font-semibold bg-green-500/30 px-3 py-1 rounded-full">
                                    NET SALARY
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Salary Components */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i className="fas fa-puzzle-piece mr-3 text-blue-500"></i>
                        Komponen Gaji
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {salaryComponents.map((item, index) => (
                            <div 
                                key={index}
                                className={`p-6 rounded-2xl bg-[#FBFCFF] border border-[#708993] backdrop-blur-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                                            <i className={`${item.icon} text-${item.color}-600 text-lg`}></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                                            {item.subValue && (
                                                <p className="text-sm text-gray-600 font-medium">{item.subValue}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-left">
                                    <p className={`text-2xl font-extrabold ${
                                        item.title === 'Potongan' 
                                            ? 'text-red-600' 
                                            : item.title === 'Lembur'
                                            ? 'text-gray-800'
                                            : 'text-gray-900'
                                    }`}>
                                        {item.title === 'Potongan' 
                                            ? `-${formattedCurrency(item.value)}`
                                            : item.title === 'Lembur'
                                            ? item.value
                                            : formattedCurrency(item.value)
                                        }
                                    </p>
                                    {item.title === 'Lembur' && (
                                        <p className="text-lg font-bold text-gray-700 mt-1">
                                            {formattedCurrency(salary.overtimeHours * salary.overtimeRate)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                                <i className="fas fa-info-circle mr-2 text-blue-500"></i>
                                Informasi Gaji
                            </h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Rate Lembur:</span>
                                    <span className="font-semibold">{formattedCurrency(salary.overtimeRate)}/jam</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Total Jam Lembur:</span>
                                    <span className="font-semibold">{salary.overtimeHours} jam</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tunjangan Jabatan:</span>
                                    <span className="font-semibold text-green-600">{formattedCurrency(salary.positionAllowance)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Status Pembayaran:</span>
                                    <span className="font-semibold text-green-600">Aktif</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                                <i className="fas fa-clock mr-2 text-purple-500"></i>
                                Timeline
                            </h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Periode:</span>
                                    <span className="font-semibold">{new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tanggal Transfer:</span>
                                    <span className="font-semibold">25 {new Date().toLocaleDateString('id-ID', { month: 'long' })} {new Date().getFullYear()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Metode:</span>
                                    <span className="font-semibold">Transfer Bank</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default ManagerSalary;