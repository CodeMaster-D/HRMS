import React, { useState } from 'react';
import EmployeeAttendance from '../../components/Absensi/EmployeeAttendance';
import EmployeeProfile from '../../components/Profiles/EmployeeProfile';
import EmployeeLeaveRequest from '../../components/Absensi/EmployeeLeaveRequest';
import EmployeeSalary from '../../components/Absensi/EmployeeSalary';
import EmployeePerformance from '../../components/Absensi/EmployeePerformance';
import EmployeeLoginHistory from '../../components/Absensi/EmployeeLoginHistory';
import EmployeePermission from '../../components/Absensi/EmployeePermission';

const EmployeeDashboard = (props) => {
  const {
    user,
    employees,
    setEmployees,
    workSettings,
    pendingProfileChanges,
    setPendingProfileChanges,
    setAuthUser,
    setPendingLeave,
  } = props;

  const [activeTab, setActiveTab] = useState('attendance');
  const [performanceScore] = useState(85);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const safeWorkSettings = workSettings || {};

  const tabs = [
    { id: 'attendance', label: 'Attendance', icon: 'fa-calendar-check' },
    { id: 'profile', label: 'Profile', icon: 'fa-user' },
    { id: 'leave', label: 'Leave', icon: 'fa-calendar-plus' },
    { id: 'permission', label: 'Permission', icon: 'fa-user-clock'},
    { id: 'salary', label: 'Salary', icon: 'fa-money-bill-wave' },
    { id: 'performance', label: 'Performance', icon: 'fa-chart-line' },
    { id: 'loginHistory', label: 'History', icon: 'fa-history' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'attendance':
        return (
          <EmployeeAttendance
            user={user}
            employees={employees}
            setEmployees={setEmployees}
            workSettings={safeWorkSettings}
          />
        );
      case 'profile':
        return (
          <EmployeeProfile
            user={user}
            employees={employees}
            setEmployees={setEmployees}
            setAuthUser={setAuthUser}
            pendingProfileChanges={pendingProfileChanges}
            setPendingProfileChanges={setPendingProfileChanges}
          />
        );
      case 'leave':
        return <EmployeeLeaveRequest user={user} setPendingLeave={setPendingLeave} />;
      case 'salary':
        return <EmployeeSalary user={user} />;
      case 'performance':
        return <EmployeePerformance user={user} />;
      case 'loginHistory':
        return <EmployeeLoginHistory user={user} />;
      case 'permission':
        return <EmployeePermission user={user} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#D3DFFE] pt-16 lg:pt-22">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-[#19183B] backdrop-blur-2xl rounded-2xl p-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] transition-all duration-300"
        >
          <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'} text-gray-700/90`}></i>
        </button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="container mx-auto px-3 sm:px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4">


          {/* Sidebar */}
          <div className={`
            lg:w-64 transform transition-all duration-300 ease-in-out
            ${sidebarOpen 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'
            }
            fixed lg:static left-0 top-20 h-full lg:h-auto z-40 w-64 lg:w-auto
          `}>
            <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-4 lg:sticky lg:top-24 border border-white/20 h-full lg:h-auto overflow-y-auto">
              {/* Close button for mobile */}
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="text-lg font-semibold text-gray-800/90">Menu</h3>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-2xl hover:bg-white/20 transition-all duration-200"
                >
                  <i className="fas fa-times text-gray-600/80"></i>
                </button>
              </div>

              {/* User Info bla bla */}
              <div className="flex items-center mb-6 p-3 bg-white/20 backdrop-blur-xl backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] text-left ">
                <div className="relative">
                  <img
                    src={user?.profileImage || 'https://picsum.photos/seed/employee/48/48.jpg'}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/50 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)]"
                  />                
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-600/80 truncate max-w-[120px]">{user?.name || 'Guest'}</p>
                  <p className="text-xs text-gray-600/80 capitalize">
                    {user?.role === 'employee' 
                      ? (user?.division || 'Employee')
                      : user?.role || 'User'}
                  </p>
                </div>
              </div>

      {/* Navigation */}
<div className="space-y-2 ">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => {
        setActiveTab(tab.id);
        setSidebarOpen(false);
      }}
      className={`w-full flex items-center px-4 py-3 rounded-xl focus:outline-none ${
        activeTab === tab.id
          ? // ACTIVE STATE: Background biru terang, Teks & Ikon Hitam, Shadow tipis
            'bg-[#708993] text-white shadow-md'
          : // INACTIVE STATE: Background transparan/putih, Teks & Ikon sedikit pudar, Hover ada background abu-abu/biru
            'text-black '
      }`}
    >
      {/* ICON: Selalu hitam (atau warna yang lo mau) */}
      <i className={`fas ${tab.icon} mr-3 text-sm ${activeTab === tab.id ? 'text-' : 'text-black-500'}`}></i>
      
      {/* LABEL: Selalu hitam */}
      <span className={`text-sm font-medium ${activeTab === tab.id ? 'text-white' : 'text-gray-700'}`}>{tab.label}</span>
      
      {/* CHEVRON: Hanya muncul saat aktif, warna hitam */}
      {activeTab === tab.id && (
        <i className="fas fa-chevron-right ml-auto text-xs text-white"></i>
      )}
    </button>
  ))}
</div>

              {/* Quick Stats */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-green-400/20 backdrop-blur-xl rounded-2xl p-2 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                    <i className="fas fa-check-circle text-green-500/80 text-sm"></i>
                    <p className="text-xs text-gray-600/80 mt-1">Active</p>
                  </div>
                  <div className="bg-blue-400/20 backdrop-blur-xl rounded-2xl p-2 border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                    <i className="fas fa-clock text-blue-500/80 text-sm"></i>
                    <p className="text-xs text-gray-600/80 mt-1">On Time</p>
                  </div>
                </div>
              </div>

              {/* Current Date */}
              <div className="mt-4 p-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
                <p className="text-xs text-gray-600/80 text-center">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 lg:ml-0">
            <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-4 sm:p-6 border border-white/20 min-h-[calc(100vh-6rem)]">
              {/* Content Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800/90 tracking-tight text-left">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h2>
                  <p className="text-sm text-gray-600/80 mt-1 text-left">
                    Manage your {activeTab.toLowerCase()} information
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-[#708993] backdrop-blur-xl rounded-2xl px-3 py-2 border border-white/30 shadow-[0_4px_16px_0_RGBA(31,38,135,0.1)]">
                    <span className="text-xs font-medium text-white">
                      PT. DOODLE INDONESIA
                    </span>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;