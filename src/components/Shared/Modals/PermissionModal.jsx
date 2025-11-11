import React, { useState } from 'react';

const PermissionModal = ({ isOpen, onClose, onSubmit, user, permissionData, workSettings }) => {
  const [note, setNote] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !permissionData) return null;

  const { type, isLate, isEarlyOut, currentTime, lateDuration } = permissionData;
  const workTime = type === 'In' ? workSettings?.startTime || '08:00' : workSettings?.endTime || '17:00';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.trim()) {
      alert('Harap isi alasan izin');
      return;
    }
    if (!file) {
      alert('Harap upload bukti pendukung');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        note: note.trim(),
        file: file ? URL.createObjectURL(file) : null,
        originalTime: currentTime,
        workTime: workTime,
        type: type,
        lateDuration: lateDuration
      });
      setNote('');
      setFile(null);
    } catch (error) {
      console.error('Error submitting permission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
      alert('Ukuran file maksimal 5MB');
      return;
    }
    setFile(selectedFile);
  };

  // Check if both fields are filled
  const isFormValid = note.trim() && file;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex h-full">
          {/* Left Panel - Info Section */}
          <div className="w-1/3 p-8 bg-gradient-to-br from-[#708993] to-[#5a6f7a] text-white">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {type === 'In' ? 'Izin Terlambat' : 'Izin Pulang Cepat'}
                </h3>
                <p className="text-white/80">
                  {type === 'In' ? 'Clock In' : 'Clock Out'} - {currentTime}
                </p>
                {isLate && lateDuration > 0 && (
                  <p className="text-yellow-300 text-sm mt-1">
                    Terlambat {lateDuration} menit
                  </p>
                )}
              </div>
              
              <div className="bg-white/10 rounded-2xl p-4 mb-6">
                <div className="flex items-start">
                  <i className="fas fa-info-circle text-white/80 mt-1 mr-3"></i>
                  <div>
                    <p className="font-medium mb-1">
                      {type === 'In' ? 'Anda terlambat masuk kerja' : 'Anda pulang lebih cepat'}
                    </p>
                    <p className="text-sm text-white/80">
                      Jam kerja: {workTime}
                    </p>
                    <p className="text-sm text-white/80">
                      Waktu aktual: {currentTime}
                    </p>
                    {isLate && lateDuration > 0 && (
                      <p className="text-sm text-yellow-300 mt-1">
                        Durasi keterlambatan: {lateDuration} menit
                      </p>
                    )}
                    <p className="text-sm mt-2 text-white/80">
                      {type === 'Out' 
                        ? 'Setelah izin disetujui, clock out akan dicatat otomatis.'
                        : 'Harap lengkapi form izin untuk melanjutkan absensi.'
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 bg-white/10 text-white rounded-2xl font-medium hover:bg-white/20 border-none focus:outline-none"
                  disabled={isSubmitting}
                >
                  <i className="fas fa-times mr-2"></i>
                  Batal
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Form Section */}
          <div className="w-2/3 p-8 bg-gray-50">
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              {/* Reason Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Alasan Izin <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={`Jelaskan alasan ${type === 'In' ? 'terlambat masuk' : 'pulang lebih cepat'}...`}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#708993] focus:border-transparent resize-none placeholder-gray-400 text-black"
                  rows="4"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Upload Bukti Pendukung <span className="text-red-500">*</span>
                </label>
                <div className={`border-2 border-dashed rounded-2xl p-4 text-center transition-all ${
                  file 
                    ? 'border-green-400 bg-green-50' 
                    : 'border-gray-300 bg-white hover:border-[#708993]'
                }`}>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    className="hidden"
                    id="file-upload"
                    required
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                      <i className={`fas fa-cloud-upload-alt text-2xl mb-2 ${
                        file ? 'text-green-600' : 'text-gray-400'
                      }`}></i>
                      <p className={`font-medium ${
                        file ? 'text-green-700' : 'text-gray-600'
                      }`}>
                        {file ? file.name : 'Klik untuk upload file'}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        JPG, PNG, PDF, DOC (Maks. 5MB)
                      </p>
                    </div>
                  </label>
                </div>
                {file && (
                  <div className="flex items-center justify-between mt-2 p-2 bg-green-50 rounded-xl">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      <span className="text-green-700 text-sm">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                )}
              </div>
              {/* Submit Button */}
              <div className="mt-auto">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-3 px-4 rounded-2xl font-medium transition-all flex items-center justify-center border-none focus:outline-none ${
                    isFormValid && !isSubmitting
                      ? 'bg-[#708993] text-white hover:bg-[#5a6f7a] shadow-md'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      Mengajukan...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Ajukan Izin
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;