// src/app/layout.tsx
import '../input.css'; // ⬅️ penting!

export const metadata = {
  title: 'Portal Prakerin',
  description: 'Website pendaftaran',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
