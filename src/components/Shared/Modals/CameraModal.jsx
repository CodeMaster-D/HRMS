// src/components/Shared/Modals/CameraModal.jsx
import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import { PrimaryButton } from '../../UI/Buttons';
import { GlassCard } from '../../UI/Cards';
import { useCamera } from '../../../hooks/useCamera';
import { useFaceDetection } from '../../../hooks/useFaceDetection';
import { showSwal } from '../../../utils/swal';

const CameraModal = ({ isOpen, onClose, onCapture, user, title = "Ambil Foto Selfie untuk Absensi" }) => {
    const { webcamRef, canvasRef, streamReady, startCamera, stopCamera, setStreamReady } = useCamera(isOpen);
    const { isModelLoaded, faceDetected, loadModel, detectFaces } = useFaceDetection(webcamRef);

    // --- Load model AI saat modal terbuka ---
    useEffect(() => {
        if (isOpen) loadModel(() => {});
    }, [isOpen, loadModel]);

    // --- Start kamera otomatis ---
    useEffect(() => {
        if (isOpen) startCamera();
        else stopCamera();
    }, [isOpen, startCamera, stopCamera]);

    // --- Interval deteksi wajah dan frame kotak ---
    useEffect(() => {
        let interval;
        const drawFaceFrame = (face) => {
            const canvas = canvasRef.current;
            const video = webcamRef.current?.video;
            if (!canvas || !video) return;

            const ctx = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Warna frame
            ctx.strokeStyle = face ? 'lime' : 'red';
            ctx.lineWidth = 3;

            // Kotak di tengah (200x200)
            const boxWidth = 200;
            const boxHeight = 200;
            const x = (canvas.width - boxWidth) / 2;
            const y = (canvas.height - boxHeight) / 2;

            ctx.strokeRect(x, y, boxWidth, boxHeight);
        };

        if (isOpen && streamReady && isModelLoaded) {
            interval = setInterval(async () => {
                await detectFaces();
                drawFaceFrame(faceDetected);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isOpen, streamReady, isModelLoaded, detectFaces, faceDetected, canvasRef, webcamRef]);

    // --- Capture Foto ---
    const handleCaptureConfirm = () => {
        if (!faceDetected) {
            showSwal('Wajah Tidak Terdeteksi', 'Pastikan wajah berada di tengah frame.', 'warning');
            return;
        }

        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            onCapture(imageSrc);
            onClose();
            stopCamera();
        }
    };

    if (!isOpen) return null;
    const loadingStatus = !streamReady || !isModelLoaded;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md" onClick={onClose}></div>

            <GlassCard className="relative w-full max-w-lg mx-auto p-6 shadow-2xl bg-white/70">
                <h2 className="text-xl font-bold mb-4">{title}</h2>

                {/* Webcam + Canvas */}
                <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border-4 border-gray-700">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        mirrored={true} // Foto asli normal
                        videoConstraints={{ facingMode: 'user' }}
                        onUserMedia={() => setStreamReady(true)}
                        onUserMediaError={() => showSwal('Gagal Akses Kamera', 'Mohon izinkan kamera.', 'error')}
                        className="w-full h-full object-cover"
                        style={{ display: streamReady ? 'block' : 'none' }}
                    />

                    {/* Loading Placeholder */}
                    {!streamReady && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                            <i className="fas fa-video-slash text-white text-3xl animate-pulse"></i>
                        </div>
                    )}

                    {/* Canvas untuk frame */}
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

                    {/* Overlay Status */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-white text-xs flex justify-between">
                        {streamReady && isModelLoaded ? (
                            <span className={`font-semibold ${faceDetected ? 'text-green-400' : 'text-red-400'}`}>
                                <i className={`fas ${faceDetected ? 'fa-check-circle' : 'fa-exclamation-triangle'} mr-1`}></i>
                                {faceDetected ? 'Wajah Terdeteksi' : 'Wajah Belum Terdeteksi'}
                            </span>
                        ) : (
                            <span className="text-yellow-400 font-semibold">
                                <i className="fas fa-spinner fa-spin mr-1"></i> Memuat AI...
                            </span>
                        )}
                        <span className="text-gray-400">{user.name}</span>
                    </div>
                </div>

                {/* Tombol Aksi */}
                <div className="mt-4 flex justify-end space-x-3">
                    <PrimaryButton onClick={onClose} className="bg-gray-500 hover:bg-gray-600">
                        Batal
                    </PrimaryButton>
                    <PrimaryButton onClick={handleCaptureConfirm} disabled={loadingStatus || !faceDetected}>
                        <i className="fas fa-camera mr-2"></i> Konfirmasi Foto
                    </PrimaryButton>
                </div>
            </GlassCard>
        </div>
    );
};

export default CameraModal;
