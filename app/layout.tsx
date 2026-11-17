// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const SITE_URL = "https://www.devchangehub.com";
const SITE_NAME = "DevChangeHub";
const DEFAULT_TITLE = "DevChangeHub | Powering Development Through Evidence Across Africa";
const DEFAULT_DESCRIPTION =
  "DevChangeHub is a Ghana-based evidence and data consultancy. We deliver evaluations, surveys, dashboards and technical assistance for governments, donors and businesses across West Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | DevChangeHub" },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/logo.png", alt: "DevChangeHub logo" }],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Development Change Hub (DevChangeHub)",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "devchangehub@gmail.com",
  telephone: "+233203817101",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Kenniffe Close, Tema Community 22",
    addressCountry: "GH",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Accessibility: Tab once to reveal this, jumps to <main id="main"> */}
        <SkipLink />
        <Navbar />
        <ScrollProgress />

        <main id="main" className="min-h-screen">
          {children}
        </main>

        <footer className="bg-emerald-800 py-6 text-center text-white">
          © {new Date().getFullYear()} Development Change Hub (DCH). All rights reserved.
        </footer>
      </body>
    </html>
  );
}
