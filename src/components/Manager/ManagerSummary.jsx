// src/components/Manager/ManagerSummary.jsx
import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ManagerSummary = ({ employees, pendingLeave, user }) => {
  const totalEmployees = 9; // Total 9 karyawan untuk dummy data
  const activeEmployees = 6; // 6 aktif, 3 non-aktif untuk dummy data
  
  // Data dummy untuk karyawan yang terlambat hari ini
  const lateToday = 3; // 3 orang terlambat hari ini

  const pendingLeaveCount = pendingLeave?.length || 3; // 3 pending leave untuk dummy

  // Data DUMMY untuk line chart (kehadiran 7 hari terakhir)
  const getLast7DaysData = () => {
    return [
      { 
        date: 'Mon, Dec 1', 
        onTime: 3, 
        late: 3, 
        absent: 3,
        total: 6
      },
      { 
        date: 'Tue, Dec 2', 
        onTime: 4, 
        late: 2, 
        absent: 3,
        total: 6
      },
      { 
        date: 'Wed, Dec 3', 
        onTime: 5, 
        late: 1, 
        absent: 3,
        total: 6
      },
      { 
        date: 'Thu, Dec 4', 
        onTime: 3, 
        late: 3, 
        absent: 3,
        total: 6
      },
      { 
        date: 'Fri, Dec 5', 
        onTime: 6, 
        late: 0, 
        absent: 3,
        total: 6
      },
      { 
        date: 'Sat, Dec 6', 
        onTime: 2, 
        late: 4, 
        absent: 3,
        total: 6
      },
      { 
        date: 'Sun, Dec 7', 
        onTime: 3, 
        late: 3, 
        absent: 3,
        total: 6
      }
    ];
  };

  const attendanceData = getLast7DaysData();

  // Data DUMMY untuk bar chart (status karyawan)
  const employeeStatusData = [
    { name: 'Active', value: 6, color: '#10B981' },
    { name: 'Inactive', value: 2, color: '#EF4444' },
    { name: 'On Leave', value: 1, color: '#F59E0B' },
  ];

  // Statistik tambahan berdasarkan data dummy
  const averageAttendance = (attendanceData.reduce((sum, day) => sum + day.total, 0) / 7).toFixed(1);
  const attendanceRate = ((attendanceData.reduce((sum, day) => sum + day.total, 0) / (totalEmployees * 7)) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Statistik Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-xl">
              <i className="fas fa-users text-blue-600 text-lg"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Team</p>
              <p className="text-2xl font-bold text-gray-800">{totalEmployees}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-xl">
              <i className="fas fa-user-check text-green-600 text-lg"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Members</p>
              <p className="text-2xl font-bold text-gray-800">{activeEmployees}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-xl">
              <i className="fas fa-hourglass-end text-red-600 text-lg"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Late Today</p>
              <p className="text-2xl font-bold text-gray-800">{lateToday}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <i className="fas fa-plane-departure text-yellow-600 text-lg"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending Leave</p>
              <p className="text-2xl font-bold text-gray-800">{pendingLeaveCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart - Attendance Trend */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Attendance Trend (Last 7 Days)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="date" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="onTime" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="On Time"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="late" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  name="Late"
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="absent" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Absent"
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart - Employee Status */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Team Status Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={employeeStatusData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  name="Employees"
                  radius={[4, 4, 0, 0]}
                >
                  {employeeStatusData.map((entry, index) => (
                    <cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] text-center">
          <i className="fas fa-chart-line text-blue-500 text-2xl mb-2"></i>
          <p className="text-sm text-gray-600">Avg Daily Attendance</p>
          <p className="text-2xl font-bold text-gray-800">{averageAttendance}</p>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] text-center">
          <i className="fas fa-percentage text-green-500 text-2xl mb-2"></i>
          <p className="text-sm text-gray-600">Attendance Rate</p>
          <p className="text-2xl font-bold text-gray-800">{attendanceRate}%</p>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] text-center">
          <i className="fas fa-calendar-check text-purple-500 text-2xl mb-2"></i>
          <p className="text-sm text-gray-600">Pending Approvals</p>
          <p className="text-2xl font-bold text-gray-800">{pendingLeaveCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerSummary;