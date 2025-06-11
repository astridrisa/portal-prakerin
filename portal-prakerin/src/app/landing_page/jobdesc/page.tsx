'use client';

import Navbar from '@/app/landing_page/navbar';
import Footer from '@/app/landing_page/footer';

export default function PekerjaanPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-6 md:px-16 py-12 text-gray-800">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* UNIT BISNIS SARASTYA */}
          <section className="bg-white border-l-4 border-[#1E3A5F] p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">UNIT BISNIS SARASTYA</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>AGILITY</strong> adalah perusahaan di bidang Konsultasi Bisnis dengan area pengelolaan SDM dan Manajemen Proses berbasis Ambidextrous Organization.
            </p>

            <h3 className="text-2xl font-semibold text-[#1E3A5F] mb-4">APA YANG DIPELAJARI?</h3>
            <div className="space-y-6">
              <div className="bg-[#f7fafc] rounded-lg p-4 shadow">
                <h4 className="font-bold text-[#1E3A5F] mb-2">BRANDING TEAM</h4>
                <ul className="list-disc list-inside">
                  <li><strong>Content Creative:</strong> Produksi konten untuk videografi, animasi, fotografi, podcast, dll.</li>
                  <li><strong>Social Media Specialist:</strong> Pengelolaan konten edukasi dan komersial digital.</li>
                </ul>
              </div>
              <div className="bg-[#f7fafc] rounded-lg p-4 shadow">
                <h4 className="font-bold text-[#1E3A5F] mb-2">COMMERCIAL TEAM</h4>
                <ul className="list-disc list-inside">
                  <li><strong>Customer Relationship Management (CRM):</strong> Analisis konsumen dan pengelolaan hubungan pelanggan.</li>
                </ul>
              </div>
              <div className="bg-[#f7fafc] rounded-lg p-4 shadow">
                <h4 className="font-bold text-[#1E3A5F] mb-2">OPERATION TEAM</h4>
                <ul className="list-disc list-inside">
                  <li><strong>Event Organizer:</strong> Pengelolaan event offline & online (pendaftaran, venue, catering, dsb).</li>
                  <li><strong>Finance & Accounting:</strong> Pencatatan dan penyusunan anggaran event dan operasional.</li>
                  <li><strong>Data Analytics & Governance:</strong> Tata kelola organisasi dan analisis data bisnis.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SARASTYA TECHNOLOGY */}
          <section className="bg-gradient-to-br from-[#1E3A5F] to-[#7CA5BF] text-white p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">SARASTYA TECHNOLOGY</h2>
            <p className="text-lg leading-relaxed mb-6">
              Perusahaan di bidang pengembangan sistem/aplikasi (Process Automation) berbasis Business Process Management Suites (BPMS) dan Enterprise Resources Planning (ERP) yang mengintegrasikan People, Process, dan Technology.
            </p>

            <h3 className="text-2xl font-semibold mb-4">APA YANG DIPELAJARI?</h3>
            <div className="space-y-6">
              <div className="bg-white text-[#1E3A5F] rounded-lg p-4 shadow">
                <ul className="list-disc list-inside">
                  <li><strong>Front End Developer:</strong> Desain UI/UX sistem BPMS & ERP sesuai kebutuhan pengguna.</li>
                  <li><strong>Back End Developer:</strong> Pemrograman, database, dan server sesuai kebutuhan pengguna.</li>
                  <li><strong>Web Developer:</strong> Pengembangan aplikasi web internal dan eksternal Sarastya.</li>
                </ul>
              </div>
              <div className="bg-white text-[#1E3A5F] rounded-lg p-4 shadow">
                <ul className="list-disc list-inside">
                  <li><strong>Mobile Developer:</strong> Pengembangan aplikasi mobile untuk kebutuhan internal & eksternal.</li>
                  <li><strong>Network Engineer:</strong> Pengelolaan dan keamanan jaringan komputer.</li>
                  <li><strong>Digital Creative & Implementation Consultant:</strong> Dokumentasi pengguna, marketing kit, sosial media sistem.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
