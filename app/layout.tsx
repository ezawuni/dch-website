import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'DevChangeHub | Powering Development Through Evidence Across Africa',
  description: 'DevChangeHub connects data, evidence, and action for impactful development in Africa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 bg-white shadow px-4 py-2 mb-8">
  <a href="/" className="text-green-800 font-semibold">Home</a>
  <a href="/blog" className="text-green-800 font-semibold">Blog</a>
  <a href="/team" className="text-green-800 font-semibold">Team</a>
  <a href="/careers" className="text-green-800 font-semibold">Careers</a>
  <a href="/dashboards" className="text-green-800 font-semibold">Dashboards</a>
  <a href="/contact" className="text-green-800 font-semibold">Contact</a>
</nav>
        {children}
      </body>
    </html>
  );
}
<nav className="...">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/team">Team</a>
  <a href="/careers">Careers</a>
  <a href="/dashboards">Dashboards</a>
  <a href="/contact">Contact</a>
</nav>
