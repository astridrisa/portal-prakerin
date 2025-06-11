'use client';

import Navbar from '@/app/landing_page/navbar';
import Footer from '@/app/landing_page/footer';

export default function TentangPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-8 py-16 bg-[#f8f8f8] text-center">
        <h2
          className="font-bold leading-tight mb-2"
          style={{ fontSize: '64px', fontFamily: 'Inter, sans-serif', color: '#1E3A5F' }}
        >
          SARASTYA<br />INTERNSHIP PROGRAM
        </h2>
        <p className="text-[#1E3A5F] mb-10 text-base max-w-3xl mx-auto">
          Sarastya Internship Academy merupakan program pendidikan magang seperti PKL/Prakerin, Magang Pra Profesional, Magang Profesional dan sebagainya di SARASTYA yang bertujuan untuk memaksimalkan <strong>KOMPETENSI, KEMAMPUAN</strong> dan <strong>KAPASITAS</strong> peserta magang baik dari siswa SMK ataupun Mahasiswa untuk beradaptasi di lingkungan kerja. Sehingga mampu mengembangkan sikap profesional sesuai bidang keahliannya di perusahaan/industri.
        </p>

        <div className="max-w-4xl mx-auto text-left space-y-6">
          {/* Waktu Kegiatan */}
          <div className="pl-8">
            <hr className="border-t-[3px] border-[#1E3A5F] mb-4" />
            <details className="group" open>
              <summary className="flex items-center gap-2 cursor-pointer font-semibold text-[#1E3A5F] text-lg">
                <span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
                <span>Kapan Waktu Kegiatan PKL/Prakerin?</span>
              </summary>
              <p className="text-gray-600 mt-2 text-base ml-8">
                <strong>Senin s.d Jum’at:</strong> 08.00 WIB s.d 17.00 WIB<br />
                <strong>Pakaian:</strong> Bebas, rapi, sopan (bukan seragam sekolah atau almamater).
              </p>
            </details>
            <hr className="border-t-[3px] border-[#7CA5BF] mt-4" />
          </div>

          {/* Lokasi */}
          <div className="pl-8">
            <hr className="border-t-[3px] border-[#1E3A5F] mb-4" />
            <details className="group" open>
              <summary className="flex items-center gap-2 cursor-pointer font-semibold text-[#1E3A5F] text-lg">
                <span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
                <span>Dimana lokasi PKL/Prakerin?</span>
              </summary>
              <p className="text-gray-600 mt-2 text-base ml-8">
                <strong>Lokasi:</strong> Sarastya Building - Jl. Trs.Candi Mendut No.9B, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142.
              </p>
            </details>
            <hr className="border-t-[3px] border-[#7CA5BF] mt-4" />
          </div>

          {/* Narahubung */}
          <div className="pl-8">
            <hr className="border-t-[3px] border-[#1E3A5F] mb-4" />
            <details className="group" open>
              <summary className="flex items-center gap-2 cursor-pointer font-semibold text-[#1E3A5F] text-lg">
                <span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
                <span>Narahubung</span>
              </summary>
              <ul className="text-gray-600 mt-2 text-base ml-8 list-disc list-inside">
                <li>WA: 0851-7686-3899</li>
                <li>Appslings: appslings1@gmail.com</li>
                <li>SAI: sarastya.hg@gmail.com</li>
                <li>STI: sasrastyatechnology.hg@gmail.com</li>
                <li>WA: 0851-7538-5499</li>
                <li>WA: 0813-3300-7665</li>
              </ul>
            </details>
            <hr className="border-t-[3px] border-[#7CA5BF] mt-4" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
