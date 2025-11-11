import React from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line
} from 'recharts';
import { formattedCurrency, calculateTotalSalary } from '../../../utils/formatters';

const OwnerSummary = ({ managers = [], employees = [], supervisors = [] }) => {
  // --- Gabung semua personil ---
  const allPersonnel = [...(managers || []), ...(employees || []), ...(supervisors || [])];
  const totalPersonnel = allPersonnel.length;

  // --- Pastikan field status selalu ada ---
  const activePersonnel = allPersonnel.filter(p => p?.status === 'Active').length;

  // --- Statistik Absensi ---
  const totalAttendanceRecords = allPersonnel
    .flatMap(p => p?.currentMonthAttendance || [])
    .length;

  const totalLates = allPersonnel
    .flatMap(p => p?.currentMonthAttendance || [])
    .filter(a => a?.type === 'Clock In' && a?.late)
    .length;

  // --- Statistik Divisi ---
  const divisionData = allPersonnel.reduce((acc, person) => {
    const division = person?.division || 'Unassigned';
    acc[division] = (acc[division] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(divisionData).map((name, index) => ({
    name,
    value: divisionData[name],
    color: getColorByIndex(index),
  }));

  // --- Statistik Gaji ---
  const totalMonthlySalary = allPersonnel.reduce((sum, person) => {
    return sum + (calculateTotalSalary(person?.salaryDetails || {}) || 0);
  }, 0);

  const averageSalary = totalPersonnel > 0 ? totalMonthlySalary / totalPersonnel : 0;

  // --- Role Distribution Data ---
  const roleDistributionData = [
    { name: 'Karyawan', value: employees.length, color: '#4F86C6' },
    { name: 'Supervisor', value: supervisors.length, color: '#708993' },
    { name: 'Manager', value: managers.length, color: '#6B7AA1' },
  ];

  // --- Salary Range Data ---
  const salaryRangeData = [
    { range: '< 5Jt', count: 0, color: '#A5B9C7' },
    { range: '5-10Jt', count: 0, color: '#8CA3B5' },
    { range: '10-15Jt', count: 0, color: '#708993' },
    { range: '15-20Jt', count: 0, color: '#5A717E' },
    { range: '> 20Jt', count: 0, color: '#445A66' },
  ];

  allPersonnel.forEach(person => {
    const salary = calculateTotalSalary(person?.salaryDetails || {}) || 0;
    if (salary < 5000000) salaryRangeData[0].count++;
    else if (salary < 10000000) salaryRangeData[1].count++;
    else if (salary < 15000000) salaryRangeData[2].count++;
    else if (salary < 20000000) salaryRangeData[3].count++;
    else salaryRangeData[4].count++;
  });

  // --- Attendance Trend Data ---
  const attendanceTrendData = [
    { month: 'Jan', attendance: 85, late: 15 },
    { month: 'Feb', attendance: 88, late: 12 },
    { month: 'Mar', attendance: 82, late: 18 },
    { month: 'Apr', attendance: 90, late: 10 },
    { month: 'May', attendance: 87, late: 13 },
    { month: 'Jun', attendance: 92, late: 8 },
  ];

  function getColorByIndex(index) {
    const colors = ['#708993', '#5A717E', '#445A66', '#8CA3B5', '#A5B9C7'];
    return colors[index % colors.length];
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Ringkasan Owner Dashboard</h2>

      {/* BARIS 1: STATS UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: 'fa-users', color: 'blue', label: 'Total Personil', value: totalPersonnel },
          { icon: 'fa-user-check', color: 'green', label: 'Personil Aktif', value: activePersonnel },
          { icon: 'fa-calendar-check', color: 'purple', label: 'Total Absensi Bulan Ini', value: totalAttendanceRecords },
          { icon: 'fa-hourglass-end', color: 'red', label: 'Total Keterlambatan', value: totalLates },
        ].map((item, i) => (
          <div key={i} className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
            <div className="flex items-center">
              <div className={`bg-${item.color}-100 p-3 rounded-xl`}>
                <i className={`fas ${item.icon} text-${item.color}-600 text-lg`}></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BARIS 2: STATS KEUANGAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SummaryCard icon="fa-money-bill-wave" color="indigo" label="Total Gaji Bulanan" value={formattedCurrency(totalMonthlySalary)} />
        <SummaryCard icon="fa-wallet" color="pink" label="Rata-rata Gaji" value={formattedCurrency(averageSalary)} />
        <SummaryCard
          icon="fa-percentage"
          color="yellow"
          label="Tingkat Kehadiran"
          value={
            totalAttendanceRecords > 0
              ? `${Math.round((totalAttendanceRecords - totalLates) / totalAttendanceRecords * 100)}%`
              : '0%'
          }
        />
      </div>

      {/* BARIS 3: GRAFIK */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Distribusi Personil per Divisi">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} Personil`} />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Distribusi Role">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roleDistributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" name="Jumlah" radius={[8, 8, 0, 0]}>
                {roleDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* BARIS 4: GRAFIK LANJUTAN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Tren Kehadiran 6 Bulan Terakhir">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#708993" strokeWidth={2} name="Kehadiran (%)" />
              <Line type="monotone" dataKey="late" stroke="#EF4444" strokeWidth={2} name="Keterlambatan (%)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Distribusi Gaji">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salaryRangeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" name="Jumlah Karyawan" radius={[8, 8, 0, 0]}>
                {salaryRangeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

// --- Small helper components ---
const SummaryCard = ({ icon, color, label, value }) => (
  <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
    <div className="flex items-center">
      <div className={`bg-${color}-100 p-3 rounded-xl`}>
        <i className={`fas ${icon} text-${color}-600 text-lg`}></i>
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
    <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

export default OwnerSummary;
