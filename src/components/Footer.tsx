'use client';

import Link from "next/image";
import LinkNext from "next/link";
import Image from "next/image";

const footerLinks = [
    {
        title: 'RESOURCES',
        links: [
            { label: 'SECURITY CODEX', href: '/codex' },
            { label: 'DEFINITIONS', href: '/definitions' },
            { label: 'REPORT A SCAM', href: '/definitions/scam-reporter' },
        ]
    },
    {
        title: 'MISSION',
        links: [
            { label: 'OUR VISION', href: '/#mission' },
            { label: 'SERVICES', href: '/#services' },
            { label: 'TRAINING', href: '/codex' },
        ]
    },
    {
        title: 'CONNECT',
        links: [
            { label: 'PORTAL', href: 'https://portal.nftpd.org' },
            { label: 'SUPPORT', href: 'mailto:support@nftpd.org' },
        ]
    }
];

export default function Footer() {
    return (
        <footer className="bg-black/40 backdrop-blur-xl border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/Medallions/NFTPD.png"
                                alt="NFTPD Logo"
                                className="w-8 h-8 brightness-200"
                            />
                            <span className="text-xl font-black text-white tracking-widest">NFTPD</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed font-mono">
                            The standard for decentralized web security. Protecting assets through vigilance, intelligence, and advanced cryptography.
                        </p>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-xs font-mono font-bold tracking-widest text-white mb-6 uppercase">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <LinkNext
                                            href={link.href}
                                            className="text-xs font-mono text-gray-500 hover:text-blue-500 transition-colors"
                                        >
                                            {link.label}
                                        </LinkNext>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                            © {new Date().getFullYear()} NFTPD. | SECURITY BY DESIGN.
                        </p>
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                            An Endeavor of <LinkNext href="https://theutilitycompany.co" target="_blank" className="hover:text-blue-500 transition-colors">The Utility Company</LinkNext>
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono text-gray-800 uppercase tracking-widest">CODE: SECURE</span>
                        <span className="text-[10px] font-mono text-blue-500/50 uppercase tracking-widest">VER. 2.0.4</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
