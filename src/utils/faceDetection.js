// src/utils/faceDetection.js
import * as tf from '@tensorflow/tfjs'; 
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-webgl'; 
import '@mediapipe/face_mesh';
import { showSwal } from './constants'; // Import helper Swal

let detector = null;

/**
 * Memuat model deteksi wajah (TensorFlow.js MediaPipeFaceMesh).
 * Model hanya dimuat sekali (Singleton pattern).
 */
export const loadFaceDetectionModel = async (setIsLoading) => {
    if (detector) return detector;
    
    setIsLoading(true);
    showSwal('Memuat Model AI', 'Memuat model deteksi wajah (TensorFlow.js)... Ini mungkin memakan waktu beberapa detik.', 'info', 0);
    
    try {
        await tf.setBackend('webgl'); // Set backend terbaik untuk performa
        
        const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
        const detectorConfig = {
            runtime: 'mediapipe',
            maxFaces: 1,
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619/',
             // Solusi path diperlukan jika tidak menggunakan bundler yang mendukung penyalinan aset (mis. Create React App default)
             };
        
        detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
        setIsLoading(false);
        if (typeof Swal !== 'undefined' && Swal.isVisible()) Swal.close(); // Tutup loading swal
        return detector;
        
    } catch (error) {
        console.error("Gagal memuat model deteksi wajah:", error);
        setIsLoading(false);
        if (typeof Swal !== 'undefined' && Swal.isVisible()) Swal.close();
        showSwal('Gagal Memuat AI', 'Model deteksi wajah gagal dimuat. Absensi mungkin tidak berfungsi. Silakan refresh.', 'error', 0);
        return null;
    }
};

/**
 * Mendeteksi wajah menggunakan instance detector.
 */
export const detectFace = async (detectorInstance, video) => {
    console.log("🚀 Mulai deteksi wajah...");
    // Pastikan detector dan video siap
    if (!detectorInstance || !video || video.readyState !== 4) return null;
    
    try {
        // Logika deteksi dari App.jsx lama
const faces = await detectorInstance.estimateFaces(video, { flipHorizontal: true });
console.log("📸 Hasil deteksi:", faces.length);
        return faces.length > 0 ? faces[0] : null; // Mengembalikan wajah yang terdeteksi pertama
    } catch (e) {
        console.error("Error during face estimation:", e);
        return null;
    }
    
};

// Fungsi helper opsional untuk mendapatkan instance detector
export const getDetector = () => detector;