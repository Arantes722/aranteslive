import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ArantesLive",
    template: "%s | ArantesLive",
  },
  description:
    "Casino offers, live content, giveaways and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-white">

        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Top Bar */}
        <TopBar />

        {/* Main Content */}
        <div className="lg:pl-72 pt-20">

          <main
            className="
    min-h-screen
    px-35
    pt-12
    pb-12
  "
          >
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  );
}