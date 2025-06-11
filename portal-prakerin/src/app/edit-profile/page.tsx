'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const blueFilter =
    'brightness(0) saturate(100%) invert(61%) sepia(48%) saturate(645%) hue-rotate(180deg) brightness(99%) contrast(105%)';

  // Simulasi load data dari backend
  useEffect(() => {
    // Ini bisa diganti dengan fetch('/api/profile')
    const dummyData = {
      fullName: 'Yayun Eldina',
      companyName: 'PT. Sarastya Technology',
      email: 'yayun@example.com',
      phone: '08123456789',
    };
    setFormData(prev => ({ ...prev, ...dummyData }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data yang akan disimpan:', formData);
    // Kirim ke backend pakai fetch atau axios
  };

  return (
    <div className="flex min-h-screen bg-white flex-col md:flex-row">
      {/* KIRI */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-start text-white pt-8 p-10 bg-white">
        <Image
          src="/icon.jpg"
          alt="HRIS Icon"
          width={700}
          height={700}
          className="mb-4 object-contain"
        />
        <h1
          className="text-5xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, #7CA5BF, #1E3A5F)',
          }}
        >
          Edit Profil
        </h1>
        <p className="mt-4 text-center max-w-md text-gray-700 text-lg">
          Ubah informasi akunmu untuk tetap update.
        </p>
      </div>

      {/* KANAN */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
          <h2 className="text-[28px] font-bold text-gray-800 mb-4">
            Profil Kamu
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Nama Lengkap */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Nama Lengkap</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Nama Perusahaan */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Nama Perusahaan</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-sm"
                readOnly
              />
            </div>

            {/* Nomor Telepon */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Nomor Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Baru */}
            <div className="space-y-1 relative">
              <label className="text-sm text-gray-600">Password Baru</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Kosongkan jika tidak ingin mengubah"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 cursor-pointer"
              >
                <Image
                  src={showPassword ? '/password_on.svg' : '/password_off.svg'}
                  alt="Toggle Password"
                  width={20}
                  height={20}
                  style={showPassword ? { filter: blueFilter } : {}}
                />
              </span>
            </div>

            {/* Konfirmasi Password */}
            <div className="space-y-1 relative">
              <label className="text-sm text-gray-600">Konfirmasi Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Ulangi password baru"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 cursor-pointer"
              >
                <Image
                  src={showConfirmPassword ? '/password_on.svg' : '/password_off.svg'}
                  alt="Toggle Confirm Password"
                  width={20}
                  height={20}
                  style={showConfirmPassword ? { filter: blueFilter } : {}}
                />
              </span>
            </div>

            {/* Tombol Simpan */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-4"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
