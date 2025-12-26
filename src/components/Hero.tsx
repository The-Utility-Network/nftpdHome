import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
            {/* Background Image with Forensic Filter */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Spectral Base (Behind Image) */}
                <div className="absolute inset-0 bg-blue-950/40" />

                <Image
                    src="/assets/hero-bg.jpg"
                    alt="NFTPD Cityscape"
                    fill
                    className="object-cover filter grayscale contrast-[1.8] brightness-[1.1] mix-blend-screen opacity-60"
                    priority
                />

                {/* Aberration Layer */}
                <Image
                    src="/assets/hero-bg.jpg"
                    alt=""
                    fill
                    className="object-cover filter grayscale contrast-[2] brightness-[1.5] mix-blend-color-dodge opacity-30 translate-x-[3px] scale-[1.02]"
                    priority
                />

                {/* Intense Blue Duotone Overlay */}
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-color" />

                {/* Tactical Overlays (Scanlines & Screen Mesh) */}
                <div className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), linear-gradient(90deg, rgba(59, 130, 246, 0.08), rgba(0, 0, 0, 0), rgba(59, 130, 246, 0.08))',
                        backgroundSize: '100% 4px, 150px 100%'
                    }}
                />

                {/* Vignette & Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" />

                {/* Active HUD Border */}
                <div className="absolute inset-2 md:inset-8 border border-blue-500/20 pointer-events-none" />
            </div>

            <div className="max-w-5xl mx-auto text-center z-10 relative">
                {/* Logo or Badge */}
                <div className="inline-flex items-center justify-center mb-8 opacity-0 animate-fadeInUp">
                    <div className="relative w-32 h-32 md:w-48 md:h-48">
                        <Image
                            src="/assets/logo-square.png"
                            alt="NFTPD Badge"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 opacity-0 animate-fadeInUp stagger-1 drop-shadow-lg">
                    <span className="block text-white">NFTPD</span>
                    <span className="block text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest text-[#3B82F6] mt-2 font-mono uppercase">
                        Blockchain Security Experts
                    </span>
                </h1>

                {/* Mission Statement */}
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fadeInUp stagger-2 font-mono">
                    Protecting the Web3 community through education, security services, and cutting-edge training.
                    <br className="hidden md:block" />
                    <span className="text-blue-400">To Serve and Protect the Blockchain.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fadeInUp stagger-3">
                    <Link href="#mission" className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wider uppercase skew-x-[-10deg] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                        <span className="inline-block skew-x-[10deg]">Learn More</span>
                    </Link>
                    <Link href="#contact" className="group relative px-8 py-4 bg-transparent border-2 border-white/20 hover:border-blue-500 text-white font-bold tracking-wider uppercase skew-x-[-10deg] transition-all duration-300 hover:bg-blue-500/10">
                        <span className="inline-block skew-x-[10deg]">Get Started</span>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp stagger-5">
                <Link href="#mission" className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Inspect</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
