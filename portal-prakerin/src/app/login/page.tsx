'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  // CSS filter warna biru #2D8EFF
  const blueFilter =
    'brightness(0) saturate(100%) invert(61%) sepia(48%) saturate(645%) hue-rotate(180deg) brightness(99%) contrast(105%)';

  return (
    <div className="flex min-h-screen bg-white flex-col md:flex-row">
      {/* KIRI: Section HRIS */}
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
          PT. SARASTYA TECHNOLOGY
        </h1>
        <p className="mt-4 text-center max-w-md text-gray-700 text-lg">
          Platform PT.Sarastya all-in-one untuk otomatisasi pendaftaran
          untuk memudahkan Manager dan Pegawai.
        </p>
      </div>

      {/* KANAN: Form Login */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
          <h2 className="text-[32px] font-bold text-gray-800 mb-2 leading-tight">
            Masuk HRIS
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Selamat datang kembali di HRIS cmlabs! Atur semua dengan mudah
          </p>
          <div className="w-full h-[3px] bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-full mb-4" />

          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="alamat@email.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password + toggle */}
            <div className="space-y-1 relative">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="--- --- ---"
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

            {/* Ingat saya + Lupa Password */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Ingat saya
                </label>
              </div>
              <a href="#" className="text-xs text-blue-500 hover:underline">
                Lupa Password?
              </a>
            </div>

            {/* Tombol Masuk */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Masuk Sekarang
            </button>

            {/* Divider Metode Lain */}
            <div className="flex items-center gap-2 my-3">
              <div className="flex-grow h-px bg-blue-300" />
              <span className="text-sm font-semibold text-blue-400 whitespace-nowrap">
                Metode Lain
              </span>
              <div className="flex-grow h-px bg-blue-300" />
            </div>

            {/* Tombol alternatif */}
            <button className="w-full border border-gray-300 py-2 rounded-md bg-white font-semibold text-sm mb-2">
              Masuk dengan ID Karyawan
            </button>
            <button className="w-full border border-gray-300 py-2 rounded-md bg-white font-semibold text-sm mb-2">
              Masuk dengan Nomor Telepon
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md bg-white font-semibold text-sm">
              <span>Masuk dengan akun Google</span>
              <img src="/icon-google.svg" alt="Google" className="w-5 h-5" />
            </button>
          </form>

          {/* Link Daftar */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Belum memiliki akun?{' '}
            <Link
              href="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Daftar lewat sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
