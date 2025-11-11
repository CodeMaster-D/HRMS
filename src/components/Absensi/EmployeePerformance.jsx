import React, { useState } from 'react';
import { GlassCard } from '../UI/Cards';
import { showSwal } from '../../utils/swal';

const EmployeePerformance = ({ user }) => {
    const [taskSearch, setTaskSearch] = useState('');
    const [activeTaskTab, setActiveTaskTab] = useState('all');

    // Sample performance data
    const performanceScore = user.performanceScore || 85;
    const [tasksState, setTasksState] = useState(user.tasks || [
        {
            id: 1,
            title: 'Development Fitur Absensi',
            description: 'Membuat fitur absensi dengan geolocation',
            status: 'Completed',
            deadline: '2024-01-15',
            priority: 'High',
            submittedFile: 'laporan_absensi.pdf',
            submissionDescription: 'Telah menyelesaikan fitur absensi dengan geolocation dan notifikasi'
        },
        {
            id: 2,
            title: 'Bug Fixing Dashboard',
            description: 'Memperbaiki bug pada dashboard manager',
            status: 'In Progress',
            deadline: '2024-01-20',
            priority: 'Medium',
            submittedFile: null,
            submissionDescription: ''
        },
        {
            id: 3,
            title: 'Documentation API',
            description: 'Membuat dokumentasi untuk API endpoints',
            status: 'Pending',
            deadline: '2024-01-25',
            priority: 'Low',
            submittedFile: null,
            submissionDescription: ''
        },
        {
            id: 4,
            title: 'Performance Optimization',
            description: 'Optimasi performa aplikasi frontend',
            status: 'Pending',
            deadline: '2024-01-30',
            priority: 'High',
            submittedFile: null,
            submissionDescription: ''
        }
    ]);

    const completedTasks = tasksState.filter(task => task.status === 'Completed').length;
    const pendingTasks = tasksState.filter(task => task.status === 'Pending' || task.status === 'In Progress').length;
    const inProgressTasks = tasksState.filter(task => task.status === 'In Progress').length;

    // Filter tasks based on search and tab
    const filteredTasks = tasksState.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(taskSearch.toLowerCase()) ||
                            task.description.toLowerCase().includes(taskSearch.toLowerCase());
        
        if (activeTaskTab === 'all') return matchesSearch;
        if (activeTaskTab === 'completed') return matchesSearch && task.status === 'Completed';
        if (activeTaskTab === 'pending') return matchesSearch && (task.status === 'Pending' || task.status === 'In Progress');
        
        return matchesSearch;
    });

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'red';
            case 'Medium': return 'yellow';
            case 'Low': return 'green';
            default: return 'gray';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'green';
            case 'In Progress': return 'blue';
            case 'Pending': return 'yellow';
            default: return 'gray';
        }
    };

    const getStatusGradient = (status) => {
        switch (status) {
            case 'Completed': return 'from-green-500/20 to-emerald-600/20 border-green-400/30';
            case 'In Progress': return 'from-blue-500/20 to-cyan-600/20 border-blue-400/30';
            case 'Pending': return 'from-yellow-500/20 to-amber-600/20 border-yellow-400/30';
            default: return 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
        }
    };

    const getPriorityGradient = (priority) => {
        switch (priority) {
            case 'High': return 'from-red-500/20 to-rose-600/20 border-red-400/30';
            case 'Medium': return 'from-yellow-500/20 to-amber-600/20 border-yellow-400/30';
            case 'Low': return 'from-green-500/20 to-emerald-600/20 border-green-400/30';
            default: return 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
        }
    };

    // Fungsi untuk handle pengumpulan tugas
    const handleSubmitTask = (task) => {
        // Buat form HTML untuk SweetAlert
        const formHtml = `
            <div class="text-left space-y-4">
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Judul Tugas</label>
                    <input 
                        type="text" 
                        id="taskTitle" 
                        value="${task.title}" 
                        class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readonly
                    />
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Deskripsi Tugas</label>
                    <textarea 
                        id="taskDesc" 
                        class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="2"
                        readonly
                    >${task.description}</textarea>
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">File Tugas <span class="text-red-400">*</span></label>
                    <input 
                        type="file" 
                        id="taskFile" 
                        class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                        accept=".pdf,.doc,.docx,.zip,.rar,.jpg,.jpeg,.png"
                    />
                    <p class="text-gray-300 text-xs mt-1">Format: PDF, DOC, DOCX, ZIP, RAR, JPG, PNG (Max: 10MB)</p>
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Deskripsi Pengumpulan</label>
                    <textarea 
                        id="taskDescription" 
                        rows="4" 
                        placeholder="Tambahkan deskripsi atau catatan mengenai tugas yang dikumpulkan..."
                        class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
            </div>
        `;

        // Tampilkan SweetAlert dengan form
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: '<h2 class="text-2xl font-bold text-white">Kumpulkan Tugas</h2>',
                html: formHtml,
                showCancelButton: true,
                confirmButtonText: 'Kirim Tugas',
                cancelButtonText: 'Batal',
                background: '#708993',
                width: '90%',
                padding: '2rem',
                customClass: {
                    popup: 'rounded-2xl shadow-2xl',
                    title: 'text-white',
                    confirmButton: 'bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl mr-2 transition-all duration-300 border-none focus:outline-none',
                    cancelButton: 'bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 border-none focus:outline-none',
                    container: 'backdrop-blur-sm'
                },
                buttonsStyling: false,
                preConfirm: () => {
                    const fileInput = document.getElementById('taskFile');
                    const description = document.getElementById('taskDescription').value;
                    
                    // Validasi
                    if (!fileInput.files[0]) {
                        Swal.showValidationMessage('Harap unggah file tugas');
                        return false;
                    }

                    // Validasi ukuran file (max 10MB)
                    const file = fileInput.files[0];
                    if (file.size > 10 * 1024 * 1024) {
                        Swal.showValidationMessage('Ukuran file maksimal 10MB');
                        return false;
                    }

                    return {
                        file: file,
                        description: description
                    };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { file, description } = result.value;
                    
                    // Update task dengan data pengumpulan
                    setTasksState(prev => prev.map(t => 
                        t.id === task.id 
                            ? { 
                                ...t, 
                                submittedFile: file ? file.name : null,
                                submissionDescription: description,
                                status: 'Completed'
                            } 
                            : t
                    ));

                    // Tampilkan konfirmasi sukses
                    showSwal(
                        'Berhasil!', 
                        `Tugas "${task.title}" berhasil dikumpulkan!`,
                        'success',
                        3000
                    );
                }
            });
        }
    };

    // Fungsi untuk melihat detail pengumpulan
    const handleViewSubmission = (task) => {
        const submissionHtml = `
            <div class="text-left space-y-4 text-white">
                <div>
                    <h3 class="font-bold text-lg mb-2 text-white">Detail Pengumpulan</h3>
                </div>
                
                <div class="bg-white/10 p-4 rounded-xl">
                    <label class="block text-sm font-medium mb-1 text-blue-300">Judul Tugas</label>
                    <p class="text-white font-semibold">${task.title}</p>
                </div>
                
                <div class="bg-white/10 p-4 rounded-xl">
                    <label class="block text-sm font-medium mb-1 text-blue-300">File Terkirim</label>
                    <div class="flex items-center justify-between">
                        <p class="text-white">${task.submittedFile || 'Tidak ada file'}</p>
                        ${task.submittedFile ? 
                            '' 
                            : ''
                        }
                    </div>
                </div>
                
                <div class="bg-white/10 p-4 rounded-xl">
                    <label class="block text-sm font-medium mb-1 text-blue-300">Deskripsi Pengumpulan</label>
                    <p class="text-white whitespace-pre-wrap">${task.submissionDescription || 'Tidak ada deskripsi'}</p>
                </div>
                
                <div class="text-center pt-4">
                    <p class="text-green-400 text-sm font-medium">
                        <i class="fas fa-check-circle mr-2"></i>
                        Tugas telah dikumpulkan dan disetujui
                    </p>
                </div>
            </div>
        `;

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: '<h2 class="text-2xl font-bold text-white">Detail Pengumpulan</h2>',
                html: submissionHtml,
                icon: 'info',
                background: '#708993',
                width: '90%',
                padding: '2rem',
                customClass: {
                    popup: 'rounded-2xl shadow-2xl',
                    title: 'text-white',
                    confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 border-none focus:outline-none'
                },
                buttonsStyling: false,
                confirmButtonText: 'Tutup',
                didOpen: () => {
                    // Tambahkan fungsi download jika diperlukan
                    window.downloadFile = () => {
                        showSwal('Info', 'Fitur download akan segera tersedia', 'info', 2000);
                    };
                }
            });
        }
    };

    // Fungsi untuk menghapus pengumpulan
    const handleDeleteSubmission = (task) => {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: '<h2 class="text-2xl font-bold text-white">Hapus Pengumpulan?</h2>',
                html: `<div class="text-white text-left">
                         <p>Apakah Anda yakin ingin menghapus pengumpulan tugas:</p>
                         <p class="font-bold text-lg mt-2">"${task.title}"</p>
                         <p class="text-yellow-300 text-sm mt-2"><i class="fas fa-exclamation-triangle mr-1"></i> Tugas akan kembali status "Pending"</p>
                       </div>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya, Hapus',
                cancelButtonText: 'Batal',
                background: '#708993',
                customClass: {
                    popup: 'rounded-2xl shadow-2xl',
                    title: 'text-white',
                    confirmButton: 'bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl mr-2 transition-all duration-300 border-none focus:outline-none',
                    cancelButton: 'bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 border-none focus:outline-none'
                },
                buttonsStyling: false
            }).then((result) => {
                if (result.isConfirmed) {
                    setTasksState(prev => prev.map(t => 
                        t.id === task.id 
                            ? { 
                                ...t, 
                                submittedFile: null,
                                submissionDescription: '',
                                status: 'Pending'
                            } 
                            : t
                    ));

                    showSwal(
                        'Dihapus!', 
                        'Pengumpulan tugas berhasil dihapus.',
                        'success',
                        2000
                    );
                }
            });
        }
    };

    const handleToggleComplete = (taskId) => {
        setTasksState(prev => prev.map(t => {
            if (t.id !== taskId) return t;
            const newStatus = t.status === 'Completed' ? 'Pending' : 'Completed';
            return { ...t, status: newStatus };
        }));
    };

    const handleDelete = (taskId) => {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: '<h2 class="text-2xl font-bold text-white">Hapus Tugas?</h2>',
                html: `<div class="text-white text-left">
                         <p>Apakah Anda yakin ingin menghapus tugas ini?</p>
                         <p class="text-red-300 text-sm mt-2"><i class="fas fa-exclamation-triangle mr-1"></i> Tindakan ini tidak dapat dibatalkan</p>
                       </div>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya, Hapus',
                cancelButtonText: 'Batal',
                background: '#708993',
                customClass: {
                    popup: 'rounded-2xl shadow-2xl',
                    title: 'text-white',
                    confirmButton: 'bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl mr-2 transition-all duration-300 border-none focus:outline-none',
                    cancelButton: 'bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 border-none focus:outline-none'
                },
                buttonsStyling: false
            }).then((result) => {
                if (result.isConfirmed) {
                    setTasksState(prev => prev.filter(t => t.id !== taskId));
                    showSwal('Dihapus!', 'Tugas berhasil dihapus.', 'success', 2000);
                }
            });
        }
    };

    return (
        <GlassCard className="mt-6 relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
            <div className="p-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                    <div>
                        <h2 className="text-4xl font-bold bg-[#708993] bg-clip-text text-transparent">
                            Dashboard Performa
                        </h2>
                        <p className="text-gray-600 mt-2 flex items-center">
                            <i className="fas fa-user-check mr-2 text-[#708993]"></i>
                            Tracking produktivitas dan penyelesaian tugas
                        </p>
                    </div>
                </div>
                {/* Performance Score & Stats */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
                    {/* Main Performance Score */}
                    <div className="xl:col-span-1">
                        <div className="p-6 rounded-2xl bg-[#708993] backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-chart-line text-white text-3xl"></i>
                                </div>
                                <p className="text-lg font-semibold text-white mb-2">Skor Performa</p>
                                <p className="text-5xl font-extrabold text-white">{performanceScore}</p>
                                <p className="text-white font-medium">/ 100</p>
                                <div className="mt-4 w-full bg-white/20 rounded-full h-3">
                                    <div 
                                        className="bg-white rounded-full h-3 transition-all duration-1000"
                                        style={{ width: `${performanceScore}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Stats */}
                    <div className="xl:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-400/30 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-gray-600">Tugas Selesai</p>
                                    <p className="text-2xl font-bold text-gray-800 mt-1">{completedTasks}</p>
                                    <p className="text-xs text-gray-500">dari {tasksState.length} total</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <i className="fas fa-check-circle text-green-600 text-xl"></i>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-400/30 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-gray-600">Tugas Pending</p>
                                    <p className="text-2xl font-bold text-gray-800 mt-1">{pendingTasks}</p>
                                    <p className="text-xs text-gray-500">perlu penyelesaian</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                    <i className="fas fa-clock text-yellow-600 text-xl"></i>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-400/30 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-gray-600">Dalam Proses</p>
                                    <p className="text-2xl font-bold text-gray-800 mt-1">{inProgressTasks}</p>
                                    <p className="text-xs text-gray-500">sedang dikerjakan</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <i className="fas fa-spinner text-blue-600 text-xl animate-spin"></i>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#708993] backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-white">Target Tercapai</p>
                                    <p className="text-2xl font-bold text-white mt-1">{performanceScore}%</p>
                                    <p className="text-xs text-white">dari target</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/30 border border-white/20 flex items-center justify-center">
                                    <i className="fas fa-bullseye text-white text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task List Section */}
                <div className="mt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                            <i className="fas fa-tasks mr-3 text-black"></i>                             
                            Daftar Tugas
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            {/* Search Box */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-search text-gray-400"></i>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Cari tugas..."
                                    value={taskSearch}
                                    onChange={(e) => setTaskSearch(e.target.value)}
                                    className="w-full p-3 pl-10 border border-[#708993] rounded-2xl bg-white focus:outline-none text-black"
                                />
                            </div>

                           {/* Filter Buttons */}
                            <div className="flex space-x-1 bg-white/20 backdrop-blur-sm p-1 rounded-2xl">
                                <button
                                    onClick={() => setActiveTaskTab('all')}
                                    className={`
                                        px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 
                                        focus:outline-none 
                                        ${
                                            activeTaskTab === 'all' 
                                                ? 'bg-purple-600 text-white shadow-lg'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/30'
                                        }`}
                                >
                                    Semua
                                </button>
                                <button
                                    onClick={() => setActiveTaskTab('completed')}
                                    className={`
                                        px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 
                                        focus:outline-none 
                                        ${
                                            activeTaskTab === 'completed' 
                                                ? 'bg-green-600 text-white shadow-lg'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/30'
                                        }`}
                                >
                                    Selesai
                                </button>
                                <button
                                    onClick={() => setActiveTaskTab('pending')}
                                    className={`
                                        px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 
                                        focus:outline-none 
                                        ${
                                            activeTaskTab === 'pending' 
                                                ? 'bg-yellow-600 text-white shadow-lg'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/30'
                                        }`}
                                >
                                    Pending
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tasks Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredTasks.map((task) => {
                            const statusText = task.status === 'Completed' ? 'Selesai' : 
                                            task.status === 'In Progress' ? 'Dalam Proses' : 'Pending';
                            const statusTextColor = task.status === 'Completed' ? 'text-green-600' :
                                                    task.status === 'In Progress' ? 'text-blue-600' :
                                                    'text-yellow-600';

                            const priorityTextColor = 
                                task.priority === 'High' ? 'text-red-700' :
                                task.priority === 'Medium' ? 'text-orange-700' :
                                'text-gray-700';

                            return (
                                <div 
                                    key={task.id}
                                    className={`p-5 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-md ${getStatusGradient(task.status)}`}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-gray-800 text-lg flex-1" style={{ textAlign: 'left' }}>
                                            {task.title}
                                        </h4>
                                        <div className="flex space-x-2 ml-3">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPriorityGradient(task.priority)} ${priorityTextColor}`}>
                                                {task.priority}
                                            </span>
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusGradient(task.status)} ${statusTextColor}`}>
                                                {statusText}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{ textAlign: 'left' }}>
                                        {task.description}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="fas fa-calendar-alt mr-2"></i>
                                            <span>{new Date(task.deadline).toLocaleDateString('id-ID')}</span>
                                            {new Date(task.deadline) < new Date() && task.status !== 'Completed' && (
                                                <span className="ml-2 px-2 py-1 text-xs bg-red-500/20 text-red-700 rounded-full font-medium">
                                                    Terlambat
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* Tombol Aksi */}
                                        <div className="flex space-x-2">
                                            {/* Tombol Kumpulkan/Edit Pengumpulan */}
                                            {task.status !== 'Completed' ? (
                                                <button
                                                    onClick={() => handleSubmitTask(task)}
                                                    className="w-8 h-8 rounded-full bg-blue-500/20 hover:bg-blue-500/30 flex items-center justify-center transition-colors border-none focus:outline-none"
                                                    title="Kumpulkan Tugas"
                                                >
                                                    <i className="fas fa-upload text-blue-600 text-xs"></i>
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => handleViewSubmission(task)}
                                                        className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center transition-colors focus:outline-none"
                                                        title="Lihat Pengumpulan"
                                                    >
                                                        <i className="fas fa-eye text-green-600 text-xs"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteSubmission(task)}
                                                        className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors focus:outline-none"
                                                        title="Hapus Pengumpulan"
                                                    >
                                                        <i className="fas fa-trash text-red-600 text-xs"></i>
                                                    </button>
                                                </>
                                            )}
                                            
                                            {/* Tombol Complete Toggle */}
                                            <button
                                                onClick={() => handleToggleComplete(task.id)}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors focus:outline-none ${task.status === 'Completed' ? 'bg-yellow-400/20 hover:bg-yellow-400/30' : 'bg-green-500/20 hover:bg-green-500/30'}`}
                                                title={task.status === 'Completed' ? 'Tandai Belum Selesai' : 'Tandai Selesai'}
                                            >
                                                <i className={`fas ${task.status === 'Completed' ? 'fa-undo' : 'fa-check'} ${task.status === 'Completed' ? 'text-yellow-600' : 'text-green-600'} text-xs`}></i>
                                            </button>

                                            {/* Tombol Delete Task */}
                                            <button
                                                onClick={() => handleDelete(task.id)}
                                                className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors focus:outline-none"
                                                title="Hapus Tugas"
                                            >
                                                <i className="fas fa-times text-red-600 text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredTasks.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 rounded-2xl bg-gray-200/50 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-tasks text-gray-400 text-3xl"></i>
                            </div>
                            <p className="text-gray-500 text-lg font-medium">
                                {taskSearch ? 'Tidak ada tugas yang sesuai dengan pencarian.' : 'Tidak ada tugas.'}
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                {taskSearch ? 'Coba dengan kata kunci lain' : 'Semua tugas telah selesai atau belum ditambahkan'}
                            </p>
                        </div>
                    )}

                    {/* Performance Summary */}
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-chart-pie mr-3 text-purple-500"></i>
                            Ringkasan Performa
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-check-circle text-green-600"></i>
                                        </div>
                                        <span className="font-semibold text-gray-700">Pencapaian</span>
                                    </div>
                                    <span className={`font-semibold ${
                                        performanceScore >= 80 ? 'text-green-600' : 
                                        performanceScore >= 70 ? 'text-blue-600' : 
                                        performanceScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                                    }`}>
                                        {performanceScore >= 80 ? 'Sangat Baik' : 
                                         performanceScore >= 70 ? 'Baik' : 
                                         performanceScore >= 60 ? 'Cukup' : 'Perlu Peningkatan'}
                                    </span>
                                </div>
                                
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-tasks text-blue-600"></i>
                                        </div>
                                        <span className="font-semibold text-gray-700">Produktivitas</span>
                                    </div>
                                    <span className="font-semibold text-gray-800">{completedTasks}/{tasksState.length} tugas</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-bullseye text-purple-600"></i>
                                        </div>
                                        <span className="font-semibold text-gray-700">Target</span>
                                    </div>
                                    <span className={`font-semibold ${performanceScore >= 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {performanceScore >= 80 ? 'Terpenuhi' : 'Belum Terpenuhi'}
                                    </span>
                                </div>
                                
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-clock text-yellow-600"></i>
                                        </div>
                                        <span className="font-semibold text-gray-700">Timeline</span>
                                    </div>
                                    <span className={`font-semibold ${pendingTasks > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                                        {pendingTasks > 0 ? 'Ada tugas tertunda' : 'Semua sesuai jadwal'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default EmployeePerformance;