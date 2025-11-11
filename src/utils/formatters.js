// src/utils/formatters.js

/**
 * Memformat angka menjadi mata uang Rupiah (dari constants.js)
 */
export const formattedCurrency = (amount) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

/**
 * Memformat angka menjadi mata uang Rupiah (versi lain dari DummyPayrollReport.jsx)
 */
export const formatRupiah = (number) => {
    if (number === undefined || number === null) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};

/**
 * Menghitung Total Gaji Bersih (dari constants.js)
 */
export const calculateTotalSalary = (details) => {
    if (!details) return 0;
    const grossSalary = details.basic + details.allowance + (details.overtimeHours * details.overtimeRate) + details.bonus;
    return grossSalary - details.deductions;
};