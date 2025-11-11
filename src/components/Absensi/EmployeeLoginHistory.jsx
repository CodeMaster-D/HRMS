import React, { useState } from 'react';
import { GlassCard } from '../UI/Cards'; 

const EmployeeLoginHistory = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Sample login history data with attendance status
    const loginHistory = [
        {
            id: 1,
            datetime: '2024-01-15 07:45:00',
            status: 'Login Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Tepat Waktu'
        },
        {
            id: 2,
            datetime: '2024-01-15 17:05:00',
            status: 'Logout Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Tepat Waktu'
        },
        {
            id: 3,
            datetime: '2024-01-14 08:15:00',
            status: 'Login Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Terlambat'
        },
        {
            id: 4,
            datetime: '2024-01-14 16:45:00',
            status: 'Logout Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Pulang Cepat'
        },
        {
            id: 5,
            datetime: '2024-01-13 07:50:00',
            status: 'Login Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Tepat Waktu'
        },
        {
            id: 6,
            datetime: '2024-01-13 17:10:00',
            status: 'Logout Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Tepat Waktu'
        },
        {
            id: 7,
            datetime: '2024-01-12 08:20:00',
            status: 'Login Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Terlambat'
        },
        {
            id: 8,
            datetime: '2024-01-12 17:00:00',
            status: 'Logout Sukses',
            ip: '192.168.1.100',
            location: 'Kantor PT Wilmar',
            attendanceStatus: 'Tepat Waktu'
        }
    ];

    // Filter history based on search term
    const filteredHistory = loginHistory.filter(log =>
        log.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.attendanceStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getAttendanceStatusColor = (status) => {
        switch (status) {
            case 'Tepat Waktu': return 'green';
            case 'Terlambat': return 'yellow';
            case 'Pulang Cepat': return 'red';
            default: return 'gray';
        }
    };

    const getStatusColor = (status) => {
        return status.includes('Sukses') ? 'green' : 'red';
    };

    return (
        <GlassCard className="mt-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <i className="fas fa-history mr-3 text-yellow-600"></i> Riwayat Login & Absensi
            </h2>

            {/* Search Box */}
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Cari riwayat (status, lokasi, keterangan)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 pl-10 border border-[#708993] rounded-full bg-white focus:outline-none text-black"
                    />
                    <i className="fas fa-search absolute left-3 top-4 text-gray-400"></i>
                </div>
            </div>

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <i className="fas fa-check-circle text-green-500 text-2xl mb-2"></i>
                    <p className="text-lg font-semibold text-green-800">
                        {loginHistory.filter(log => log.attendanceStatus === 'Tepat Waktu').length}
                    </p>
                    <p className="text-sm text-green-600">Tepat Waktu</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                    <i className="fas fa-clock text-yellow-500 text-2xl mb-2"></i>
                    <p className="text-lg font-semibold text-yellow-800">
                        {loginHistory.filter(log => log.attendanceStatus === 'Terlambat').length}
                    </p>
                    <p className="text-sm text-yellow-600">Terlambat</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <i className="fas fa-running text-red-500 text-2xl mb-2"></i>
                    <p className="text-lg font-semibold text-red-800">
                        {loginHistory.filter(log => log.attendanceStatus === 'Pulang Cepat').length}
                    </p>
                    <p className="text-sm text-red-600">Pulang Cepat</p>
                </div>
            </div>

            {/* History Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Waktu
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status Login
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status Absensi
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Lokasi (IP)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredHistory.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {new Date(log.datetime).toLocaleDateString('id-ID', { 
                                            weekday: 'short',
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </div>
                                    <div className="text-sm text-gray-500 font-mono">
                                        {new Date(log.datetime).toLocaleTimeString('id-ID', { 
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getStatusColor(log.status)}-100 text-${getStatusColor(log.status)}-800`}>
                                        {log.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getAttendanceStatusColor(log.attendanceStatus)}-100 text-${getAttendanceStatusColor(log.attendanceStatus)}-800`}>
                                        {log.attendanceStatus}
                                    </span>
                                    {log.attendanceStatus !== 'Tepat Waktu' && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            {log.attendanceStatus === 'Terlambat' ? '> 08:00' : '< 17:00'}
                                        </p>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div>{log.location}</div>
                                    <div className="text-xs text-gray-400">({log.ip})</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredHistory.length === 0 && (
                <div className="text-center py-8">
                    <i className="fas fa-history text-4xl text-gray-300 mb-3"></i>
                    <p className="text-gray-500">
                        {searchTerm ? 'Tidak ada riwayat yang sesuai dengan pencarian.' : 'Belum ada riwayat login.'}
                    </p>
                </div>
            )}

            {/* Summary Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Informasi:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Tepat Waktu:</strong> Login sebelum 08:00 dan Logout setelah 17:00</li>
                    <li>• <strong>Terlambat:</strong> Login setelah 08:00</li>
                    <li>• <strong>Pulang Cepat:</strong> Logout sebelum 17:00</li>
                    <li>• Data lokasi berdasarkan IP dan geolocation</li>
                </ul>
            </div>
        </GlassCard>
    );
};

export default EmployeeLoginHistory;