// src/components/PayrollTable.jsx
import React from 'react';
import { formattedCurrency } from '../../utils/formatters';

const PayrollTable = ({ payrollData, showRole = true, onAdjustSalary }) => {
    
    const totalGross = payrollData.reduce((sum, item) => sum + (item.basic + item.allowance + item.overtimePay + item.bonus), 0);
    const totalDeductions = payrollData.reduce((sum, item) => sum + (item.deductions + item.lateDeduction + item.earlyLeaveDeduction), 0);
    const totalNet = payrollData.reduce((sum, item) => sum + item.net, 0);

    return (
        <div className="overflow-x-auto rounded-2xl backdrop-blur-sm">
            <table className="min-w-full divide-y divide-gray-200/50">
                <thead className="bg-[#708993]/10 backdrop-blur-sm">
                    <tr>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tl-2xl">
                            Karyawan
                        </th>
                        {showRole && (
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Role
                            </th>
                        )}
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Gaji Pokok
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Pendapatan
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Potongan
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Bersih
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tr-2xl">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white/30 backdrop-blur-sm divide-y divide-gray-200/30">
                    {payrollData.map((report, index) => (
                        <tr key={report.id || index} className="backdrop-blur-sm">
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#708993]/20 rounded-full flex items-center justify-center">
                                        <i className="fas fa-user text-[#708993] text-xs"></i>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-900">
                                            {report.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {report.division}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            {showRole && (
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">
                                    {report.role}
                                </td>
                            )}
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                                {formattedCurrency(report.basic)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-700 space-y-1">
                                    <div className="text-green-600">+{formattedCurrency(report.allowance)}</div>
                                    <div className="text-green-600">+{formattedCurrency(report.overtimePay)}</div>
                                    <div className="text-green-600">+{formattedCurrency(report.bonus)}</div>
                                </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="text-sm text-red-600 space-y-1">
                                    <div>-{formattedCurrency(report.deductions)}</div>
                                    <div className="text-xs text-gray-500">
                                        {report.lateDeduction > 0 && `Termasuk potongan absensi ${formattedCurrency(report.lateDeduction + report.earlyLeaveDeduction)}`}
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="text-base font-semibold text-[#708993]">
                                    {formattedCurrency(report.net)}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {report.status}
                                </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                <button
                                    onClick={() => onAdjustSalary(report)}
                                    className="text-[#708993] hover:text-[#5a717b] transition-colors duration-200 p-2 rounded-xl bg-white/50 backdrop-blur-sm"
                                    title="Atur Gaji"
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    
                    {/* Footer Total */}
                    {payrollData.length > 0 && (
                        <tr className="bg-[#708993]/10 backdrop-blur-sm font-semibold border-t-2 border-[#708993]/20">
                            <td className={`px-4 py-4 whitespace-nowrap text-gray-900 rounded-bl-2xl ${showRole ? 'col-span-2' : ''}`} colSpan={showRole ? 2 : 1}>
                                Total
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-gray-700">
                                {formattedCurrency(payrollData.reduce((sum, item) => sum + item.basic, 0))}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-green-600">
                                {formattedCurrency(totalGross - payrollData.reduce((sum, item) => sum + item.basic, 0))}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-red-600">
                                -{formattedCurrency(totalDeductions)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-[#708993] text-lg">
                                {formattedCurrency(totalNet)}
                            </td>
                            <td className="px-4 py-4 rounded-br-2xl"></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PayrollTable;