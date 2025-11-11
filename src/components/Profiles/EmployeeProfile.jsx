import React, { useState, useRef, useEffect } from 'react';
import { PrimaryButton, PrimaryButton2 } from '../UI/Buttons'; 
import { GlassCard } from '../UI/Cards'; 
import { showSwal } from '../../utils/swal';

const EmployeeProfile = ({ user, employees, setEmployees, setAuthUser, pendingProfileChanges, setPendingProfileChanges }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });
    const [profileImage, setProfileImage] = useState(user.profileImage || null);
    const [cvFile, setCvFile] = useState(user.cvFile || null);
    const [diplomaFile, setDiplomaFile] = useState(user.diplomaFile || null);
    
    const fileInputRef = useRef(null);
    const cvInputRef = useRef(null);
    const diplomaInputRef = useRef(null);

    const pendingRequest = pendingProfileChanges.find(p => p.employeeId === user.id);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCvChange = (e) => {
        setCvFile(e.target.files[0]);
    };

    const handleDiplomaChange = (e) => {
        setDiplomaFile(e.target.files[0]);
    };

    const handleSave = () => {
        const changes = {};
        let hasChanges = false;
        
        const editableFields = ['email', 'phone', 'address'];

        editableFields.forEach(key => {
            if (formData[key] !== user[key]) {
                changes[key] = formData[key];
                hasChanges = true;
            }
        });

        if (profileImage !== user.profileImage) {
            changes.profileImage = profileImage;
            hasChanges = true;
        }

        if (cvFile && cvFile !== user.cvFile) {
            changes.cvFile = { 
                name: cvFile.name, 
                size: cvFile.size, 
                type: cvFile.type, 
                lastModified: cvFile.lastModified 
            };
            hasChanges = true;
        }

        if (diplomaFile && diplomaFile !== user.diplomaFile) {
            changes.diplomaFile = { 
                name: diplomaFile.name, 
                size: diplomaFile.size, 
                type: diplomaFile.type,
                lastModified: diplomaFile.lastModified
            };
            hasChanges = true;
        }

        if (!hasChanges) {
            showSwal('Tidak Ada Perubahan', 'Anda tidak membuat perubahan apa pun.', 'info');
            setIsEditing(false);
            return;
        }

        handleRequestProfileUpdate(changes);
    };

    const handleRequestProfileUpdate = (changes) => {
        const newRequestId = Date.now();

        const newRequest = {
            id: newRequestId,
            employeeId: user.id,
            employeeName: user.name,
            requestedChanges: changes,
            status: 'Pending',
            requestedAt: new Date().toISOString().split('T')[0],
            division: user.division
        };

        setPendingProfileChanges(prev => [...prev, newRequest]);

        showSwal(
            'Permintaan Terkirim',
            'Perubahan profil Anda memerlukan persetujuan Manajer. Status: Pending.',
            'success'
        );
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({ ...user });
        setProfileImage(user.profileImage || null);
        setCvFile(user.cvFile || null);
        setDiplomaFile(user.diplomaFile || null);
        setIsEditing(false);
    };

    useEffect(() => {
        setFormData({ ...user });
        setProfileImage(user.profileImage || null);
        setCvFile(user.cvFile || null);
        setDiplomaFile(user.diplomaFile || null);
    }, [user]);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <i className="fas fa-user-circle mr-3 text-[#708993]"></i> Profil Karyawan
                </h2>
                
                {!isEditing && (
                    <PrimaryButton2 
                        onClick={() => setIsEditing(true)} 
                        disabled={!!pendingRequest}
                        className="bg-[#708993] hover:bg-[#5a727a] text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        <i className="fas fa-edit mr-2"></i> Ubah Profil
                    </PrimaryButton2>
                )}
            </div>

            {pendingRequest && (
                <div className="p-4 mb-6 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
                    <i className="fas fa-clock text-amber-500 mt-1 mr-3"></i>
                    <div>
                        <p className="font-medium text-amber-800">Permintaan Perubahan Pending</p>
                        <p className="text-sm text-amber-700 mt-1">Menunggu persetujuan Manajer</p>
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Kolom Kiri: Foto dan Info Utama */}
                <div className="lg:w-1/3 flex flex-col items-center">
                    {/* Foto Profil */}
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-[#708993] overflow-hidden">
                            <img
                                src={profileImage || 'https://picsum.photos/seed/profile/150/150.jpg'}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {isEditing && (
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="absolute -bottom-2 -right-2 bg-[#708993] text-white p-2 rounded-full hover:bg-[#5a727a] transition-colors shadow-lg"
                                title="Ubah Foto Profil"
                            >
                                <i className="fas fa-camera text-sm"></i>
                            </button>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                    
                    {/* Informasi Utama */}
                    <div className="text-center w-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h3>
                        <div className="inline-block bg-[#708993] text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                            {user.division || 'N/A'}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{user.role}</p>
                        
                        <div className="space-y-3 w-full max-w-xs">
                            <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <p className="text-xs text-gray-500 font-medium mb-1">NIK</p>
                                <p className="text-gray-800 font-mono">{user.nik}</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <p className="text-xs text-gray-500 font-medium mb-1">Tanggal Bergabung</p>
                                <p className="text-gray-800">{user.joinDate}</p>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
                                <p className="text-xs text-green-600 font-medium mb-1">Sisa Cuti Tahunan</p>
                                <p className="text-green-700 font-bold text-lg">{user.cutiBalance} Hari</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Detail Data & Edit Form */}
                <div className="lg:w-2/3">
                    {isEditing && (
                        <div className="flex justify-end gap-3 mb-6 pb-4 border-b border-gray-100">
                            <button
                                onClick={handleCancel}
                                disabled={!!pendingRequest}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
                            >
                                <i className="fas fa-times mr-2"></i> Batal
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={!!pendingRequest}
                                className="bg-[#708993] hover:bg-[#5a727a] text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                            >
                                <i className="fas fa-save mr-2"></i> Simpan & Kirim Permintaan
                            </button>
                        </div>
                    )}
                    
                    <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* NIK (non-editable) */}
                            <div>
                                <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-2">NIK</label>
                                <input
                                    type="text"
                                    id="nik"
                                    name="nik"
                                    value={user.nik || '5452388891 (NIK Dummy)'}
                                    disabled
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-black"
                                />
                            </div>

                            {/* Nama (non-editable) */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name || ''}
                                    disabled
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-black"
                                />
                            </div>

                            {/* Divisi (non-editable) */}
                            <div>
                                <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-2">Divisi</label>
                                <input
                                    type="text"
                                    id="division"
                                    name="division"
                                    value={user.division || ''}
                                    disabled
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-black"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email || ''}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full p-3 border rounded-lg transition-all text-black ${
                                        isEditing 
                                            ? 'border-[#708993] focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white' 
                                            : 'border-gray-200 bg-gray-50'
                                    }`}
                                    required
                                    placeholder="Contoh: john.doe@example.com"
                                />
                            </div>
                            
                            {/* Telepon */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone || ''}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full p-3 border rounded-lg transition-all text-black ${
                                        isEditing 
                                            ? 'border-[#708993] focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white' 
                                            : 'border-gray-200 bg-gray-50'
                                    }`}
                                    placeholder="Contoh: 081234567890"
                                />
                            </div>
                            
                            {/* Alamat */}
                            <div className="md:col-span-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Alamat Domisili</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows="3"
                                    value={formData.address || ''}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full p-3 border rounded-lg transition-all text-black ${
                                        isEditing 
                                            ? 'border-[#708993] focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white' 
                                            : 'border-gray-200 bg-gray-50'
                                    }`}
                                    placeholder="Contoh: Jalan Raya No. 123, Jakarta Pusat, DKI Jakarta"
                                />
                            </div>

                            {/* Dokumen: CV */}
                            <div className="md:col-span-2 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Curriculum Vitae (CV)</label>
                                {isEditing ? (
                                    <div className="flex items-center gap-4">
                                        <button 
                                            type="button"
                                            onClick={() => cvInputRef.current.click()} 
                                            className="bg-[#708993] hover:bg-[#5a727a] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                                        >
                                            <i className="fas fa-upload mr-2"></i> {user.cvFile ? 'Ganti CV' : 'Upload CV'}
                                        </button>
                                        <input type="file" ref={cvInputRef} onChange={handleCvChange} accept=".pdf,.doc,.docx" className="hidden" />
                                        {(cvFile || user.cvFile) && (
                                            <div className="text-sm text-gray-600">
                                                <i className="fas fa-file mr-2 text-[#708993]"></i>
                                                <span className="font-medium">
                                                    {cvFile?.name || user.cvFile?.name || 'Tersimpan'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        {user.cvFile ? (
                                            <div className="flex items-center text-[#708993]">
                                                <i className="fas fa-file-pdf mr-2"></i>
                                                <span className="font-medium">{user.cvFile.name}</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-500 text-sm">Belum ada file CV</span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Dokumen: Ijazah */}
                            <div className="md:col-span-2 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Ijazah Terakhir</label>
                                {isEditing ? (
                                    <div className="flex items-center gap-4">
                                        <button 
                                            type="button"
                                            onClick={() => diplomaInputRef.current.click()} 
                                            className="bg-[#708993] hover:bg-[#5a727a] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                                        >
                                            <i className="fas fa-upload mr-2"></i> {user.diplomaFile ? 'Ganti Ijazah' : 'Upload Ijazah'}
                                        </button>
                                        <input type="file" ref={diplomaInputRef} onChange={handleDiplomaChange} accept=".pdf,.jpg,.png" className="hidden" />
                                        {(diplomaFile || user.diplomaFile) && (
                                            <div className="text-sm text-gray-600">
                                                <i className="fas fa-file-alt mr-2 text-[#708993]"></i>
                                                <span className="font-medium">
                                                    {diplomaFile?.name || user.diplomaFile?.name || 'Tersimpan'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        {user.diplomaFile ? (
                                            <div className="flex items-center text-[#708993]">
                                                <i className="fas fa-file-alt mr-2"></i>
                                                <span className="font-medium">{user.diplomaFile.name}</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-500 text-sm">Belum ada file ijazah</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;