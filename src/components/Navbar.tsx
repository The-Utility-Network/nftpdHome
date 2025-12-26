'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'MISSION', href: '/#mission' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'CODEX', href: '/codex' },
    { label: 'DOCS', href: '/documents' },
    { label: 'GLOSSARY', href: '/definitions' },
    { label: 'CONTACT', href: '/contact-security' },
];

export default function Navbar({ themeColor: propsThemeColor }: { themeColor?: string }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [time, setTime] = useState('');
    const themeColor = propsThemeColor || '#3B82F6'; // Use prop or default NFTPD Blue

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const tick = () => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        tick();
        const interval = setInterval(tick, 1000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'bg-black/60 backdrop-blur-2xl border-b shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3'
                    : 'py-5 bg-transparent'
                    }`}
                style={scrolled ? { borderBottomColor: `${themeColor}30`, boxShadow: `0 4px 30px ${themeColor}10` } : { borderBottomColor: 'transparent' }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo & System Status */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-500/40 transition-all duration-500" />
                                <img
                                    src="/Medallions/NFTPD.png"
                                    alt="NFTPD Medallion"
                                    className="w-10 h-10 relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="hidden md:block text-[10px] font-mono tracking-widest opacity-80" style={{ color: themeColor }}>
                                    SYSTEM.OPERATIONAL
                                </span>
                                <span className="text-lg font-bold text-white tracking-widest font-mono group-hover:opacity-80 transition-opacity">
                                    TUC//NFTPD
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-xs font-mono tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Time Display */}
                        <div className="hidden md:block text-xs font-mono tracking-wider" style={{ color: themeColor }}>
                            {time}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="https://portal.nftpd.org"
                            className="text-xs font-mono tracking-wider px-6 py-3 rounded font-black hover:opacity-90 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            style={{ backgroundColor: themeColor, color: '#000' }}
                        >
                            VISIT PORTAL
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-white transition-colors"
                            style={{ color: mobileMenuOpen ? themeColor : 'white' }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-black/80 backdrop-blur-xl mt-2 mx-4 rounded-2xl p-4 animate-fadeInUp border shadow-2xl" style={{ borderColor: `${themeColor}40` }}>
                        <div className="flex flex-col gap-2 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-mono tracking-wider text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="https://portal.nftpd.org"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 px-4 py-3 text-xs font-mono tracking-wider font-black rounded transition-all"
                                style={{ backgroundColor: themeColor, color: '#000' }}
                            >
                                VISIT PORTAL
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* HUD Decorative Lines */}
            <div className="fixed top-20 left-0 right-0 pointer-events-none z-40 opacity-30">
                <div className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full" />
            </div>
        </>
    );
}
