'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

interface CertificateProps {
    name: string;
    course: string;
    date: string;
}

export default function CertificateGenerator({ name, course, date }: CertificateProps) {
    const certificateRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const downloadJPEG = async () => {
        if (!certificateRef.current) return;
        setIsGenerating(true);
        try {
            const element = certificateRef.current;
            // Capture exact dimensions
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#030712',
                logging: false,
                width: 1100,
                height: 850,
                windowWidth: 1100,
                windowHeight: 850,
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0,
                onclone: (clonedDoc) => {
                    // Force the element to the top-left corner in the cloned document
                    const clonedElement = clonedDoc.getElementById('certificate-container');
                    if (clonedElement) {
                        clonedElement.style.position = 'fixed';
                        clonedElement.style.top = '0';
                        clonedElement.style.left = '0';
                        clonedElement.style.margin = '0';
                        clonedElement.style.transform = 'none';
                    }
                    clonedDoc.body.style.margin = '0';
                    clonedDoc.body.style.padding = '0';
                }
            });
            const link = document.createElement('a');
            link.download = `NFTPD_Certificate_${name.replace(/\s+/g, '_')}.jpg`;
            link.href = canvas.toDataURL('image/jpeg', 0.95);
            link.click();
        } catch (error) {
            console.error('Error generating JPEG:', error);
        }
        setIsGenerating(false);
    };

    const downloadPDF = async () => {
        if (!certificateRef.current) return;
        setIsGenerating(true);
        try {
            const element = certificateRef.current;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#030712',
                logging: false,
                width: 1100,
                height: 850,
                windowWidth: 1100,
                windowHeight: 850,
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0,
                onclone: (clonedDoc) => {
                    // Force the element to the top-left corner in the cloned document
                    const clonedElement = clonedDoc.getElementById('certificate-container');
                    if (clonedElement) {
                        clonedElement.style.position = 'fixed';
                        clonedElement.style.top = '0';
                        clonedElement.style.left = '0';
                        clonedElement.style.margin = '0';
                        clonedElement.style.transform = 'none';
                    }
                    clonedDoc.body.style.margin = '0';
                    clonedDoc.body.style.padding = '0';
                }
            });

            const imgData = canvas.toDataURL('image/png');

            // Create PDF with custom size based on image dimensions
            // Canvas is 2200x1700 (2x scale), convert to inches: 2200/200 = 11in, 1700/200 = 8.5in
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'in',
                format: [11, 8.5]
            });

            // Get internal page dimensions and fill completely
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
            pdf.save(`NFTPD_Certificate_${name.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
        setIsGenerating(false);
    };

    const shareSocial = (platform: 'twitter' | 'linkedin') => {
        const text = `I just earned my NFTPD Academy certification for ${course}! 🚀 #NFTPD #Web3Academy #Blockchain`;
        const url = window.location.href;
        let shareUrl = '';
        if (platform === 'twitter') {
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        } else if (platform === 'linkedin') {
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        }
        window.open(shareUrl, '_blank');
    };

    return (
        <div className="flex flex-col items-center gap-10 w-full mx-auto overflow-x-auto">
            {/* Certificate Container - fixed dimensions for consistent export */}
            <div
                id="certificate-container"
                ref={certificateRef}
                className="relative overflow-hidden flex-shrink-0"
                style={{
                    background: '#030712',
                    width: '1100px',
                    height: '850px',
                }}
            >
                {/* Deep Space Background */}
                <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse 120% 80% at 50% 30%, #1e3a8a 0%, #0c1929 40%, #030712 80%)'
                }} />

                {/* Subtle Particle Field - deterministic positions to avoid hydration mismatch */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    {[...Array(30)].map((_, i) => {
                        // Use deterministic values based on index
                        const left = ((i * 37 + 13) % 100);
                        const top = ((i * 53 + 7) % 100);
                        const delay = ((i * 0.17) % 3);
                        const duration = 2 + ((i * 0.13) % 3);
                        return (
                            <div
                                key={i}
                                className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse"
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    animationDelay: `${delay}s`,
                                    animationDuration: `${duration}s`,
                                }}
                            />
                        );
                    })}
                </div>

                {/* Film Grain Texture */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* ORNATE FRAME */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1100 850" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="goldFrame" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e40af" />
                            <stop offset="25%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#60a5fa" />
                            <stop offset="75%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#1e40af" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Frame Layers */}
                    <rect x="20" y="20" width="1060" height="810" fill="none" stroke="url(#goldFrame)" strokeWidth="1" opacity="0.3" />
                    <rect x="35" y="35" width="1030" height="780" fill="none" stroke="url(#goldFrame)" strokeWidth="2" opacity="0.6" filter="url(#glow)" />
                    <rect x="50" y="50" width="1000" height="750" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                    {/* Corner Flourishes */}
                    <g stroke="url(#goldFrame)" strokeWidth="2" fill="none" filter="url(#glow)">
                        {/* Top Left */}
                        <path d="M 35 120 Q 35 35 120 35" />
                        <circle cx="35" cy="35" r="10" strokeWidth="1" />

                        {/* Top Right */}
                        <path d="M 980 35 Q 1065 35 1065 120" />
                        <circle cx="1065" cy="35" r="10" strokeWidth="1" />

                        {/* Bottom Left */}
                        <path d="M 35 730 Q 35 815 120 815" />
                        <circle cx="35" cy="815" r="10" strokeWidth="1" />

                        {/* Bottom Right */}
                        <path d="M 980 815 Q 1065 815 1065 730" />
                        <circle cx="1065" cy="815" r="10" strokeWidth="1" />
                    </g>

                    {/* Top Center Crest */}
                    <g transform="translate(550, 25)" stroke="url(#goldFrame)" strokeWidth="1.5" fill="none" filter="url(#glow)">
                        <path d="M -60 0 L -30 0 L 0 -12 L 30 0 L 60 0" />
                        <circle cx="0" cy="0" r="4" fill="url(#goldFrame)" />
                    </g>

                    {/* Bottom Center Crest */}
                    <g transform="translate(550, 825)" stroke="url(#goldFrame)" strokeWidth="1.5" fill="none" filter="url(#glow)">
                        <path d="M -60 0 L -30 0 L 0 12 L 30 0 L 60 0" />
                        <circle cx="0" cy="0" r="4" fill="url(#goldFrame)" />
                    </g>
                </svg>

                {/* Logo - Top Left Corner */}
                <div className="absolute top-12 left-12">
                    <img
                        src="/assets/logo-square.png"
                        alt="Logo"
                        className="w-28 h-28 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                    />
                </div>

                {/* Medallion - Bottom Right Corner */}
                <div className="absolute bottom-12 right-12">
                    <div className="relative">
                        <div className="absolute inset-0 -m-4 rounded-full bg-blue-500/10 blur-xl" />
                        <img
                            src="/Medallions/NFTPD.png"
                            alt="Official Seal"
                            className="w-44 h-44 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                        />
                        <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-blue-500/50 font-mono text-[7px] tracking-[0.3em] uppercase whitespace-nowrap">
                            OFFICIAL SEAL
                        </p>
                    </div>
                </div>

                {/* Date - Bottom Left Corner */}
                <div className="absolute bottom-16 left-16 text-left">
                    <p className="text-zinc-600 font-mono text-[8px] tracking-[0.2em] uppercase">Issue Date</p>
                    <p className="text-white/70 font-mono text-[12px]">{date}</p>
                </div>

                {/* Main Content - Spread vertically */}
                <div className="relative h-full flex flex-col items-center justify-between px-32 py-16 text-center">
                    {/* Top Section */}
                    <div className="flex flex-col items-center">
                        {/* Subtitle */}
                        <p className="text-blue-400/60 font-mono text-[9px] tracking-[0.5em] uppercase mb-4">
                            Official NFTPD Academy Deployment Certification
                        </p>

                        {/* Main Title */}
                        <h1 className="text-white text-5xl font-black italic tracking-tight uppercase leading-none"
                            style={{ textShadow: '0 0 40px rgba(59,130,246,0.3), 0 4px 15px rgba(0,0,0,0.8)' }}>
                            NFTPD ACADEMY
                        </h1>
                    </div>

                    {/* Middle Section - Name and Course */}
                    <div className="flex flex-col items-center">
                        {/* Divider */}
                        <div className="flex items-center gap-4 w-full max-w-sm mb-6">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                            <span className="text-blue-600/40 font-mono text-[7px] tracking-[0.3em] whitespace-nowrap">SEC-OPS DIV // CLASSIFIED</span>
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                        </div>

                        {/* Verification Text */}
                        <p className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-2">
                            This document certifies that
                        </p>

                        {/* Name - using solid color as html2canvas doesn't support background-clip: text */}
                        <h2 className="text-5xl font-serif italic font-bold mb-2 tracking-tight text-white"
                            style={{
                                textShadow: '0 0 30px rgba(147, 197, 253, 0.6), 0 2px 10px rgba(0,0,0,0.5)',
                            }}>
                            {name}
                        </h2>

                        <p className="text-zinc-500 font-mono text-[9px] tracking-[0.15em] uppercase mb-6 max-w-md leading-relaxed">
                            has demonstrated exceptional tactical proficiency and achieved operational competency in:
                        </p>

                        {/* Course Name Banner */}
                        <div className="relative w-full max-w-lg py-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent" />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                            <h3 className="text-xl font-black text-blue-400 tracking-[0.2em] uppercase relative"
                                style={{ textShadow: '0 0 20px rgba(59,130,246,0.5)' }}>
                                {course}
                            </h3>
                        </div>
                    </div>

                    {/* Bottom Section - Clearance Level Centered */}
                    <div className="text-center space-y-1">
                        <p className="text-zinc-600 font-mono text-[8px] tracking-[0.2em] uppercase">Clearance Level</p>
                        <p className="text-blue-400 font-mono text-[14px] font-bold tracking-wider">LEVEL-4 ALPHA</p>
                    </div>
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                <button
                    onClick={downloadJPEG}
                    disabled={isGenerating}
                    className="py-4 bg-white text-black font-black tracking-widest uppercase text-[10px] hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-50"
                >
                    {isGenerating ? '...' : 'JPEG'}
                </button>
                <button
                    onClick={downloadPDF}
                    disabled={isGenerating}
                    className="py-4 bg-zinc-900 border border-white/10 text-white font-black tracking-widest uppercase text-[10px] hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50"
                >
                    {isGenerating ? '...' : 'PDF'}
                </button>
                <button
                    onClick={() => shareSocial('twitter')}
                    className="py-4 bg-blue-600 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-500 transition-all active:scale-95"
                >
                    SHARE X
                </button>
                <button
                    onClick={() => shareSocial('linkedin')}
                    className="py-4 bg-blue-900 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-800 transition-all active:scale-95"
                >
                    LINKEDIN
                </button>
            </div>
        </div>
    );
}
