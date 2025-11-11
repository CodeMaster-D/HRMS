import React, { useState, useRef } from 'react';
import { GlassCard } from '../UI/Cards';
import { PrimaryButton, TabButton, PrimaryButton2 } from '../UI/Buttons';
import { showSwal } from '../../utils/swal';

const EmployeePermission = ({ user }) => {
  const [activeType, setActiveType] = useState('late');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [permissionHistory, setPermissionHistory] = useState([]);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(file);
  };

  const handleOpenCamera = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      showSwal('Gagal', 'Deskripsi wajib diisi.', 'error');
      return;
    }
    if (!photo) {
      showSwal('Gagal', 'Bukti foto wajib diunggah.', 'error');
      return;
    }

    setIsSubmitting(true);

    const newPermission = {
      id: Date.now(),
      type: activeType === 'late' ? 'Izin Telat Datang' : 'Izin Cepat Pulang',
      description,
      photo: URL.createObjectURL(photo),
      date: new Date().toLocaleString(),
      status: 'Pending'
    };

    setPermissionHistory((prev) => [newPermission, ...prev]);
    setDescription('');
    setPhoto(null);
    setIsSubmitting(false);

    showSwal(
      'Berhasil!',
      `Pengajuan ${newPermission.type} telah dikirim untuk persetujuan.`,
      'success'
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <i className="fas fa-user-clock mr-3 text-[#708993]"></i> Izin Keterlambatan & Pulang Cepat
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <TabButton
          active={activeType === 'late'}
          onClick={() => setActiveType('late')}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
            activeType === 'late'
              ? 'border-[#708993] text-[#708993]'
              : 'border-transparent text-gray-500 hover:text-gray-700 border-none focus:outline-none'
          }`}
        >
          Izin Telat Datang
        </TabButton>
        <TabButton
          active={activeType === 'early'}
          onClick={() => setActiveType('early')}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
            activeType === 'early'
              ? 'border-[#708993] text-[#708993]'
              : 'border-transparent text-gray-500 hover:text-gray-700 border-none focus:outline-none'
          }`}
        >
          Izin Cepat Pulang
        </TabButton>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi
          </label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={
              activeType === 'late'
                ? 'Contoh: Terlambat karena macet di jalan...'
                : 'Contoh: Harus pulang cepat karena urusan keluarga...'
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#708993] focus:ring-2 focus:ring-[#708993]/20 bg-white text-black"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bukti Foto
          </label>
          <div className="flex items-center space-x-4">
            <PrimaryButton2
              type="button"
              onClick={handleOpenCamera}
              className="px-4 py-2 text-white rounded-lg"
            >
              <i className="fas fa-file mr-2"></i> Kirim Bukti
            </PrimaryButton2>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleFileChange}
            />
            {photo && (
              <img
                src={URL.createObjectURL(photo)}
                alt="Preview"
                className="w-16 h-16 object-cover rounded-lg border"
              />
            )}
          </div>
        </div>

        <PrimaryButton2
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-[#708993] text-white rounded-lg hover:bg-[#5c737d] transition"
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Pengajuan'}
        </PrimaryButton2>
      </form>

      {/* History */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Riwayat Pengajuan
        </h3>
        {permissionHistory.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada pengajuan izin.</p>
        ) : (
          <div className="space-y-3">
            {permissionHistory.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={p.photo}
                    alt="bukti"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{p.type}</p>
                    <p className="text-xs text-gray-500">{p.description}</p>
                    <p className="text-xs text-gray-400">{p.date}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    p.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeePermission;
