'use client';

import Link from 'next/link';

export default function CodexPreview() {
    const stats = [
        { label: 'TRACKS', value: '09', icon: '🛣️' },
        { label: 'LESSONS', value: '40+', icon: '⚡' },
        { label: 'EXPERTS', value: '12', icon: '🕵️' },
        { label: 'CADETS', value: '5.2K', icon: '🎓' }
    ];

    return (
        <section className="py-24 px-6 bg-blue-600 relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                <div className="lg:max-w-2xl text-center lg:text-left">
                    <span className="text-white/60 font-mono tracking-[0.2em] text-xs font-bold uppercase bg-white/10 px-3 py-1 rounded-full">
                        ELITE ACADEMY ACCESS
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-8 tracking-tighter">
                        THE WEB3 <br /> SECURITY <span className="opacity-60 italic">CODEX.</span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                        The world's most advanced repository of Web3 security intelligence. Designed for institutional researchers and enterprise security architects.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-12">
                        {stats.map(stat => (
                            <div key={stat.label} className="text-center lg:text-left">
                                <div className="text-white text-3xl font-black mb-1">{stat.value}</div>
                                <div className="text-blue-100 text-[10px] font-mono font-bold tracking-[0.2em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/codex"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-white text-blue-600 font-black tracking-widest uppercase text-sm rounded-none hover:bg-zinc-950 hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 shadow-2xl shadow-black/20"
                    >
                        Enter Academia
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="relative w-full max-w-md aspect-square bg-zinc-950 p-8 border-4 border-white/20 shadow-[40px_-40px_0_0_rgba(0,0,0,0.2)]">
                    <div className="h-full w-full border border-white/10 p-6 flex flex-col justify-between font-mono">
                        <div className="space-y-2">
                            <div className="text-[10px] text-blue-500 font-bold tracking-widest uppercase flex justify-between">
                                <span>Module Status</span>
                                <span className="animate-pulse">DECRYPTING...</span>
                            </div>
                            <div className="w-full h-px bg-white/10" />
                        </div>

                        <div className="space-y-4 text-xs text-gray-500 uppercase overflow-hidden">
                            <div className="flex justify-between items-center text-white">
                                <span>01// Smart Contract Auditing</span>
                                <span className="text-blue-500">ACTIVE</span>
                            </div>
                            <div className="flex justify-between items-center text-white">
                                <span>02// DeFi Incident Response</span>
                                <span className="text-blue-500">ACTIVE</span>
                            </div>
                            <div className="flex justify-between items-center text-white">
                                <span>03// Zero Knowledge Proofs</span>
                                <span className="text-blue-500">ACTIVE</span>
                            </div>
                            <div className="flex justify-between items-center text-white">
                                <span>04// EVM Forensics</span>
                                <span className="text-blue-500">ACTIVE</span>
                            </div>
                            <div className="flex justify-between items-center text-white">
                                <span>05// Cross-Chain Security</span>
                                <span className="text-blue-500">ACTIVE</span>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <div className="text-[10px] text-gray-500 leading-relaxed">
                                NFTPD//SEC-GLS-04
                                <br />
                                ACADEMY ACCESS GRANTED
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
