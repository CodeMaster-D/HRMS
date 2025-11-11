// src/components/UI/Buttons.jsx
import React from 'react';

// --- Komponen Tombol Utama (Dipindahkan dari componentsUtilityUI.jsx) ---
export const PrimaryButton = ({ onClick, children, className = '', type = 'button', disabled = false }) => (
    <button 
        onClick={onClick} 
        type={type}
        disabled={disabled}
        className={`${className} bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg smooth-transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
    >
        {children}
    </button>
);

export const PrimaryButton2 = ({ onClick, children, className = '', type = 'button', disabled = false }) => (
    <button 
        onClick={onClick} 
        type={type}
        disabled={disabled}
        className={`${className} bg-[#708993] text-white font-medium py-2.5 px-5 rounded-lg smooth-transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
    >
        {children}
    </button>
);

// --- Komponen Tab (Dipindahkan dari componentsUtilityUI.jsx) ---
export const TabButton = ({ isActive, onClick, children }) => (
    <button
        onClick={onClick}
        className={`${isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'} px-5 py-3 font-medium text-sm md:text-base smooth-transition rounded-lg focus:outline-none`}
    >
        {children}
    </button>
);

// CATATAN: GlassCard, StatCard, dan Cell TIDAK ADA DI SINI.