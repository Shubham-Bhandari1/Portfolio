import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CyberGrid } from "@/components/background/CyberGrid";
import { ParticleCanvas } from "@/components/background/ParticleCanvas";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shubham Bhandari | Full Stack Developer & Data Analytics Enthusiast",
  description:
    "Portfolio of Shubham Bhandari, Full Stack Software Engineer and Data Analytics Enthusiast specializing in Next.js, TypeScript, Node.js, NestJS, PostgreSQL, SQL Analytics, and AI-powered products.",
  keywords: [
    "Shubham Bhandari",
    "Full Stack Developer",
    "Data Analytics",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Node.js",
    "PostgreSQL",
    "AI Search Engine",
  ],
  authors: [{ name: "Shubham Bhandari" }],
  creator: "Shubham Bhandari",
  openGraph: {
    title: "Shubham Bhandari | Full Stack Developer & Data Analytics",
    description:
      "Building scalable, modern, and interactive web applications with a focus on clean architecture, data insights, and great user experiences.",
    url: "https://shubhambhandari.dev",
    siteName: "Shubham Bhandari Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Bhandari | Full Stack Developer",
    description:
      "Building scalable modern web applications and data-driven systems.",
    creator: "@shubham_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030712] text-neutral-100 min-h-screen antialiased selection:bg-cyan-500/30 selection:text-white relative`}
      >
        {/* Accessible Keyboard Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-cyan-500 focus:text-neutral-950 focus:font-bold focus:shadow-[0_0_20px_#00f2fe] focus:outline-none"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <CyberGrid />
        <ParticleCanvas />
        {children}
      </body>
    </html>
  );
}
