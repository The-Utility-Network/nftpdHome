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
  title: 'NFTPD | Decentralized Web Security & Intelligence',
  description: 'Protecting the decentralized web through education, vigilance, and superior security technology. Home of the Web3 Security Codex.',
  keywords: 'Web3 security, NFT protection, blockchain forensics, smart contract audit, crypto security training',
  openGraph: {
    title: 'NFTPD | Web3 Security Intelligence',
    description: 'The standard for decentralized web security.',
    url: 'https://nftpd.org',
    siteName: 'NFTPD',
    images: [
      {
        url: 'https://nftpd.org/assets/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTPD | Web3 Security Intelligence',
    description: 'Protecting the decentralized web through education and vigilance.',
    images: ['https://nftpd.org/assets/twitter-image.jpg'],
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
