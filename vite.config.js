import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Tambahkan impor path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ========================================================
  // FIX KRUSIAL 3: Menambahkan Path Alias (@) untuk Absolute Import
  // Memungkinkan import seperti: import MyComp from '@/components/MyComp'
  // ========================================================
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    }
  },

  // Konfigurasi Server
  server: {
    host: '0.0.0.0', 
    allowedHosts: [
      'localhost',
      '127.0.0.1', 
      '*.ngrok-free.app',
      'dev-tunnel.local' 
    ]
  },
  
  // ========================================================
  // FIX KRUSIAL 1: Memaksa Vite memproses dependensi (optimizeDeps)
  // Sekarang termasuk semua packages untuk dokumen (docx, xlsx, pdf) dan file-saver.
  // ========================================================
  optimizeDeps: {
    include: [
      '@tensorflow/tfjs',
      '@tensorflow-models/face-landmarks-detection',
      // Memastikan MediaPipe di-pre-bundle
      '@mediapipe/face_mesh',
      
      // FIX untuk error "Failed to resolve import"
      'xlsx',
      'docx',
      'file-saver',
      'jspdf',
      'jspdf-autotable'
    ],
  },
  
  // ========================================================
  // FIX KRUSIAL 2: Mengatasi BUG WASM MediaPipe (RuntimeError: abort)
  // Ini adalah penyesuaian utama untuk error WASM.
  // ========================================================
  build: {
    // 1. Memastikan file kecil tidak di-inline sebagai Base64, 
    //    yang dapat mengganggu worker WASM (set ke 0 untuk wasm/worker)
    assetsInlineLimit: 0, 
  },
  
  // 2. Memberitahu Vite untuk memperlakukan semua file WASM, tflite, dan bin sebagai assets
  assetsInclude: ['**/*.tflite', '**/*.bin', '**/*.wasm'], 
})
