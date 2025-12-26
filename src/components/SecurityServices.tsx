import Image from 'next/image';

export default function SecurityServices() {
    return (
        <section id="services" className="relative py-24 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-blue-500 font-mono tracking-[0.2em] text-xs font-bold uppercase">
                            TACTICAL OPERATIONS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                            Comprehensive Security Services
                        </h2>

                        <div className="space-y-12">
                            {/* Service 1 */}
                            <div className="relative pl-8 border-l-2 border-blue-900 hover:border-blue-500 transition-colors duration-300 group">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Stay Safe</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Our threat detection algorithms and community reporting systems keep you one step ahead of scams, rug pulls, and phishing attacks.
                                </p>
                            </div>

                            {/* Service 2 */}
                            <div className="relative pl-8 border-l-2 border-blue-900 hover:border-blue-500 transition-colors duration-300 group">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">WalterWallets</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Next-generation Token Bound Accounts (ERC-6551) that act as your secure digital vault. Programmable, recoverable, and built for the future of asset management.
                                </p>
                            </div>

                            {/* Service 3 */}
                            <div className="relative pl-8 border-l-2 border-blue-900 hover:border-blue-500 transition-colors duration-300 group">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Stay Informed</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Real-time intelligence feeds and security bulletins. We verify the news so you don't have to guess what's FUD and what's fact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group">
                        <Image
                            src="/assets/service-illustration.jpg"
                            alt="NFTPD Security Services"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
