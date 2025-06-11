import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="px-8 py-20 bg-gray-50 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Kiri: Text */}
      <div className="lg:w-1/2 space-y-6 text-left">
        <h2
          className="leading-tight"
          style={{
            fontSize: "64px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            color: "#1E3A5F"
          }}
        >
          Siap Mengubah<br />Cara Anda<br />Mengelola SDM?
        </h2>
        <p className="text-[#1E3A5F] text-base">
          Coba HRIS <strong>gratis 14 hari</strong> — tidak perlu kartu kredit
        </p>

        <div className="flex gap-4">
          {/* Tombol Hubungi Kami */}
          <Link href="#" className="bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-[24px] p-1 text-white items-center">
            <span className="inline-block bg-white text-[#1E3A5F] rounded-[20px] px-6 py-2 text-sm font-medium">
              Hubungi Kami
            </span>
          </Link>

          {/* Tombol Demo Gratis */}
          <Link href="#" className="bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-[24px] p-1 text-white items-center">
            <span className="inline-block bg-white text-[#1E3A5F] rounded-[20px] px-6 py-2 text-sm font-medium">
              Demo Gratis
            </span>
          </Link>
        </div>
      </div>

      {/* Kanan: Gambar dengan border gradasi */}
      <div className="lg:w-1/2">
        <div
          className="rounded-[24px] p-[4px]"
          style={{
            background: 'linear-gradient(to right, #7CA5BF, #1E3A5F)',
          }}
        >
          <Image
            src="/icon.jpg"
            alt="Dashboard aplikasi"
            width={600}
            height={400}
            className="rounded-[20px] w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}