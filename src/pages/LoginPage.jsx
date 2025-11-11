import React, { useState } from 'react';
import { PrimaryButton2 } from '../components/UI/Buttons';

// --- DEFINISI KOMPONEN DAN KONSTANTA UNTUK MEMPERBAIKI ERROR RESOLUTION ---

const COLORS = {
    Primary: '#000000ff', // Blue-500
};

const PrimaryButton = ({ children, className = '', disabled, ...props }) => {
    // Menggunakan bracket notation untuk warna dinamis Tailwind
    return (
        <button
            className={`
                px-6 py-3 font-semibold text-white rounded-2xl 
                bg-[${COLORS.Primary}] hover:bg-blue-600 
                shadow-lg shadow-blue-500/50 
                transition-all duration-300 ease-in-out 
                transform hover:scale-[1.02] active:scale-[0.98] 
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
                ${className}
            `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

const GlassCard = ({ children, className = '' }) => {
    return (
        <div 
            className={`
                p-8 rounded-[30px] border border-white/50 
                bg-white/20 backdrop-blur-md shadow-xl 
                ${className}
            `}
        >
            {children}
        </div>
    );
};

// --- END OF DEFINISI ---


const LoginPage = ({ handleLogin, isLoading }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('password');
    const [showPassword, setShowPassword] = useState(false);
    
    // STATE UNTUK MENGONTROL FOKUS INPUT
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    // KELAS VALIDASI PASSWORD (TRUE jika >= 8 karakter)
    const isPasswordValid = password.length >= 8;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Cek juga validasi password sebelum login (opsional)
        if (password.length < 8) {
            console.error("Password harus minimal 8 karakter.");
            return;
        }
        handleLogin(username, password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#D3DFFE] p-4">
            <GlassCard className="w-full max-w-sm text-center transform transition-all duration-500 ">
         // Bagian div logo yang sudah diperbaiki
<div className="flex flex-col items-center mb-8">
    {/* Menggunakan ikon Lucide "User" sebagai siluet manusia */}
    {/* Anda bisa ganti "User" dengan "Users" jika ingin siluet banyak orang */}
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#708993" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mb-4">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
    
    <h1 className="text-2xl font-bold text-gray-800">HRMS</h1>
    <p className="text-gray-500 text-sm mt-1">Human Resource Management System</p>
</div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Field */}
                    <div>
                        <div className="relative">
                            <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onFocus={() => setIsUsernameFocused(true)} // Handle Fokus
                                onBlur={() => setIsUsernameFocused(false)} // Handle Blur
                                required
                                className={`
                                    w-full pl-10 pr-4 py-3 border rounded-2xl 
                                    bg-white/50 backdrop-blur-sm shadow-sm 
                                    placeholder-gray-600 text-gray-800 focus:outline-none 
                                    // Styling saat tidak focus (menggunakan border netral yang sudah ada)
                                    ${!isUsernameFocused ? 'border-white/50' : ''} 
                                    
                                    // LOGIC: Focus Hijau untuk Username (tidak ada validasi panjang)
                                    ${isUsernameFocused ? 'border-green-500' : ''}
                                `}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="relative">
                            <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                                required
                                className={`
                                    w-full pl-10 pr-12 py-3 border rounded-2xl 
                                    bg-white/50 backdrop-blur-sm shadow-sm 
                                    placeholder-gray-600 text-gray-800 focus:outline-none 
                                    // Styling saat tidak focus (menggunakan border netral yang sudah ada)
                                    ${!isPasswordFocused ? 'border-white/50' : ''}

                                    // LOGIC: Focus Merah/Hijau untuk Password
                                    ${isPasswordFocused && !isPasswordValid ? 'border-red-500 ' : ''}
                                    ${isPasswordFocused && isPasswordValid ? 'border-green-500' : ''}
                                `}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 bg-transparent focus:outline-none border-none"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {/* Optional: Tampilkan pesan validasi di bawah input password saat fokus */}
                        {isPasswordFocused && password.length > 0 && (
                            <p className={`mt-1 text-xs text-left ${isPasswordValid ? 'text-green-600' : 'text-red-600'}`}>
                                {isPasswordValid ? '' : `Minimal 8 karakter. Kurang ${8 - password.length} karakter.`}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <PrimaryButton2 type="submit" className="w-full mt-6" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <i className="fas fa-spinner fa-spin mr-2"></i> Memproses...
                            </>
                        ) : (
                            <>
                                <i className="fas fa-sign-in-alt mr-2"></i> Masuk
                            </>
                        )}
                    </PrimaryButton2>
                </form>

                <div className="mt-8 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30">
                    <p className="text-xs text-gray-600 font-medium mb-2">Coba login sebagai:</p>
                    <div className="space-y-1 text-xs text-left">
                        <p className="text-gray-700">
                            <span className="font-medium">Karyawan:</span> <code className="bg-white/50 px-2 py-1 rounded">karyawan/password</code>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Manajer:</span> <code className="bg-white/50 px-2 py-1 rounded">manager/password</code>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Supervisor:</span> <code className="bg-white/50 px-2 py-1 rounded">supervisor/password</code>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Owner:</span> <code className="bg-white/50 px-2 py-1 rounded">owner/password</code>
                        </p>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
};

export default LoginPage;
