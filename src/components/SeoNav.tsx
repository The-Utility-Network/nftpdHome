'use client';

import Link from 'next/link';

export default function SeoNav() {
    const sections = [
        {
            title: 'Global Jurisdictions',
            description: 'Explore the compliant territories where NFTPD enforces digital asset security.',
            link: '/locations',
            icon: '🌍',
            color: '#3B82F6'
        },
        {
            title: 'Secured Verticals',
            description: 'Discover how we protect DeFi, Gaming, and Real World Assets from exploitation.',
            link: '/industries',
            icon: '🛡️',
            color: '#3B82F6'
        },
        {
            title: 'Protocol Comparisons',
            description: 'See why NFTPD is the superior choice for proactive blockchain security.',
            link: '/comparisons',
            icon: '⚖️',
            color: '#3B82F6'
        }
    ];

    return (
        <section className="py-24 px-6 relative border-t border-white/5 bg-gradient-to-b from-transparent to-blue-950/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-mono tracking-[0.2em] text-xs font-bold uppercase">
                        Protocol Intelligence
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Explore the Network
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 font-mono text-sm uppercase">
                        Deep dive into our operational reach, secured sectors, and competitive advantages.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <Link
                            key={section.title}
                            href={section.link}
                            className="group relative p-1 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />

                            <div className="relative bg-black/90 h-full p-8 rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {section.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {section.description}
                                </p>
                                <span className="inline-flex items-center text-blue-500 font-bold uppercase text-sm tracking-wider">
                                    Explore <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
