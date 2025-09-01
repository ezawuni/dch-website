// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ⬇️ Add these imports (they point to files you created in /components)
import SkipLink from "@/components/SkipLink";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevChangeHub | Powering Development Through Evidence Across Africa",
  description:
    "DevChangeHub connects data, evidence, and action for impactful development in Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        {/* Accessibility: Tab once to reveal this, jumps to <main id="main"> */}
        <SkipLink />

        {/* Sticky glassy navbar with focus styles */}
        <Navbar />

        {/* Thin orange bar that shows scroll progress (sits under navbar) */}
        <ScrollProgress />

        {/* Main content target for the skip-link */}
        <main id="main" className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
