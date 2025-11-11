// src/main.jsx (Kode Lengkap)
import React, { StrictMode } from 'react' // <--- UBAH BARIS INI
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css' // <--- PATH BARU
import './styles/App.css' // <--- PATH BARU

createRoot(document.getElementById('root')).render(
  // Sekarang JSX ini kenal 'React'
  <StrictMode> 
    <App />
  </StrictMode>,
)