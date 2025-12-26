import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NFTPDContactForm from '@/components/NFTPDContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Inquiry | NFTPD',
    description: 'Contact NFTPD for security audits, smart contract reviews, and chain blacklist integration services for your NFT project.',
};

export default function SecurityContactPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div>
                            <span className="section-heading text-blue-500">SECURITY SERVICES</span>
                            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
                                Protect Your <br />
                                <span className="text-gray-500">NFT Project.</span>
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                                Whether you need a comprehensive security audit, smart contract review,
                                or integration with our chain blacklist protocol, NFTPD is here to
                                safeguard your project and community.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="glass-panel p-6 rounded-xl border border-white/5">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Our Services</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">●</span> NFT Security Audits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">●</span> Smart Contract Reviews
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">●</span> Chain Blacklist Integration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">●</span> Protocol Security Assessment
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">●</span> Incident Response
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">●</span> Security Training & Consultation
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-panel p-6 rounded-xl border border-white/5">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">General Inquiries</h3>
                                <a href="mailto:security@nftpd.org" className="text-2xl font-mono text-white hover:text-blue-500 transition-colors">
                                    security@nftpd.org
                                </a>
                            </div>

                            <div className="glass-panel p-6 rounded-xl border border-white/5">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Join the Community</h3>
                                <div className="flex gap-4">
                                    <a href="https://discord.gg/nftpd" target="_blank" className="px-4 py-2 bg-white/5 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                                        Discord
                                    </a>
                                    <a href="https://twitter.com/NFTPD" target="_blank" className="px-4 py-2 bg-white/5 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                                        Twitter / X
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        {/* Decorative Glow */}
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl opacity-20 rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <NFTPDContactForm />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
