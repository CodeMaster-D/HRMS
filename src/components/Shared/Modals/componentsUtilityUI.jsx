// src/components/Shared/Modals/componentsUtilityUI.jsx
import React from 'react';
import { COLORS } from '../../../utils/constants'; 
import { formattedCurrency } from '../../../utils/formatters'; // Import constants

// --- Komponen Card dengan efek Glassmorphism (Dipindahkan dari App.jsx) ---
export const GlassCard = ({ children, className = '' }) => (
    <div className={`${className} p-6 glass-card rounded-xl smooth-transition`}>
        {children}
    </div>
);

// --- Komponen Tombol Utama (Dipindahkan dari App.jsx) ---
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

// --- Komponen Tab (Dipindahkan dari App.jsx) ---
export const TabButton = ({ isActive, onClick, children }) => (
    <button
        onClick={onClick}
        className={`${isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'} px-5 py-3 font-medium text-sm md:text-base smooth-transition rounded-lg`}
    >
        {children}
    </button>
);

// --- Custom Cell component for Recharts PieChart (Dipindahkan dari App.jsx) ---
export const Cell = ({ fill }) => <path d="M0 0" fill={fill} />;

// --- Stat Card Component (Dipindahkan dari App.jsx) ---
export const StatCard = ({ title, value, icon, color = 'blue' }) => (
  <GlassCard className={`${color}-500 p-4`}>
    <div className="flex items-center">
      <div className={`p-3 rounded-lg bg-${color}-100 text-${color}-600 mr-4`}>
        <i className={`${icon} text-lg`}></i>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </GlassCard>
);
