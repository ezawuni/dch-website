// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

import SkipLink from "@/components/SkipLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
});

// Italic is only used for a word or two of emphasis, so it loads after the page
// instead of competing with the main content.
const serifItalic = Fraunces({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  style: "italic",
  preload: false,
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
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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
    streetAddress: "12 Kennife Close, Tema Community 22",
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
        className={`${geistSans.variable} ${serif.variable} ${serifItalic.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Accessibility: Tab once to reveal this, jumps to <main id="main"> */}
        <SkipLink />
        <Navbar />

        <main id="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
