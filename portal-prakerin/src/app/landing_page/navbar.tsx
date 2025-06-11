'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full py-4 px-6 bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] flex items-center justify-between shadow-md">
      {/* Kiri: Logo dan Nama */}
      <div className="flex items-center space-x-3">
        <Image
          src="/sarastya.jpg"
          alt="Sarastya Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-white">
          PT. Sarastya Technologi
        </span>
      </div>

      {/* Kanan: Navigasi berbentuk tombol */}
      <div className="flex items-center space-x-4">
        {[
          { label: 'Tentang', href: '/tentang' },
          { label: 'Role Pekerjaan', href: '#role' },
          { label: 'Solusi', href: '#solusi' },
          { label: 'Register', href: '/register' },
          { label: 'Login', href: '/login' },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-[24px] p-[2px]"
          >
            <span className="inline-block bg-white text-[#1E3A5F] rounded-[20px] px-5 py-2 text-sm font-semibold">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
