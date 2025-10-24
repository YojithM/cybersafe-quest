import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

export const metadata: Metadata = {
  title: "CyberSafe Quest",
  description: "Gamified cybersecurity coach",
  openGraph: { title: "CyberSafe Quest", description: "Build habits that protect you." }
};

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
  <html lang="en" className={sora.variable}>
    <body className="min-h-dvh font-sans text-zinc-100 antialiased flex flex-col">
      {/* aurora background */}
      <div className="aurora fixed inset-0 -z-10" />

      {/* main content */}
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-10">
        {children}
      </main>

      {/* footer */}
      <footer className="py-6 border-t border-zinc-800 text-center text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-medium">CyberSafe Quest</span> • Learn safely.  
        <br />
        <span className="text-zinc-600">Built with Next.js & Tailwind CSS</span>
      </footer>
    </body>
  </html>
);

}
