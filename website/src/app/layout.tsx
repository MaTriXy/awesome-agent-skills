import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WikiSidebar from "@/components/WikiSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "awesome-agent-skills | The Modern Agent Wiki",
  description: "A curated source of truth for modular AI agent capabilities, tools, and workflows in 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-grow flex max-w-[1600px] mx-auto w-full">
          <WikiSidebar />
          <main className="flex-grow min-w-0">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
