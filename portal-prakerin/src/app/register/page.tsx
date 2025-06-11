'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/navbar2';
import Image from 'next/image';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // CSS filter untuk warna biru #2D8EFF
  const blueFilter =
    'brightness(0) saturate(100%) invert(61%) sepia(48%) saturate(645%) hue-rotate(180deg) brightness(99%) contrast(105%)';

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validasi dan simpan data bisa ditambahkan di sini
    router.push('/login'); // Arahkan ke halaman login
  };

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

      {/* KANAN: Form Register */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
          <h2 className="text-[32px] font-bold text-gray-800 mb-2">
            Daftar di PT. Sarastya
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Daftarkan akunmu dan manage karyawan dengan mudah dengan PT. Sarastya
          </p>
          <div className="w-full h-[3px] bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-full mb-4" />

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Nama Lengkap */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Nama Perusahaan */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Nama Perusahaan</label>
              <input
                type="text"
                placeholder="Nama Perusahaan"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Nomor Telepon */}
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Nomor Telepon</label>
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-1 relative">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
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
                placeholder="Konfirmasi Password"
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

            {/* Tombol Daftar */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-4 mb-3"
            >
              Daftar Sekarang
            </button>

            {/* Divider Metode Lain */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-grow h-px bg-blue-300" />
              <span className="text-sm font-semibold text-blue-400 whitespace-nowrap">
                Metode Lain
              </span>
              <div className="flex-grow h-px bg-blue-300" />
            </div>

            {/* Tombol alternatif */}
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md bg-white font-semibold mt-2">
              <span>Gunakan akun Google</span>
              <Image src="/icon-google.svg" alt="Google" width={20} height={20} />
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Sudah pernah daftar?{' '}
            <Link href="/login" className="text-blue-600 font-medium hover:underline">
              Masuk disini
            </Link>
          </p>
          <p className="text-xs text-center text-gray-500 mt-2">
            Dengan menekan tombol daftar, saya telah membaca dan menyetujui serta patuh kepada{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Syarat & Ketentuan PT. Sarastya
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
