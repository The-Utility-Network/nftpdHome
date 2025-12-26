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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#3B82F6' },
  ],
};

export const metadata: Metadata = {
  title: 'NFTPD | Decentralized Web Security & Intelligence',
  description: 'Protecting the decentralized web through education, vigilance, and superior security technology. Home of the Web3 Security Codex.',
  keywords: 'Web3 security, NFT protection, blockchain forensics, smart contract audit, crypto security training',

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'NFTPD',
  },

  openGraph: {
    title: 'NFTPD | Web3 Security Intelligence',
    description: 'The standard for decentralized web security.',
    url: 'https://nftpd.org',
    siteName: 'NFTPD Protocol',
    // images: handled automatically by opengraph-image.tsx
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTPD | Web3 Security Intelligence',
    description: 'Protecting the decentralized web through education and vigilance.',
    // images: handled automatically by twitter-image.tsx
  },
};

import ForensicGrid from "@/components/ForensicGrid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Manual theme-color meta tag for maximum iOS compatibility */}
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen relative`}
        style={{ background: 'radial-gradient(circle at center, #080d1a 0%, #000 100%)' }}
      >
        <div className="relative z-10">
          {children}
        </div>
        <ForensicGrid />
      </body>
    </html>
  );
}
