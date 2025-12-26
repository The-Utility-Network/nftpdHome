export default function Mission() {
    const values = [
        {
            title: 'PROTECT',
            desc: 'Safeguarding assets and identities in the decentralized web.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: 'EDUCATE',
            desc: 'Providing knowledge to navigate the blockchain safely.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: 'EMPOWER',
            desc: 'Giving users control over their digital security.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: 'EVOLVE',
            desc: 'Adapting to the ever-changing landscape of Web3 threats.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        }
    ];

    return (
        <section id="mission" className="relative py-24 px-6 bg-zinc-900/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-mono tracking-[0.2em] text-xs font-bold uppercase">
                        CORE DIRECTIVES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Our Mission</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
                        To build a safer Web3 ecosystem where innovation thrives without fear of exploitation.
                        We stand as the vanguard against digital threats.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={value.title}
                            className="bg-black/40 border border-white/10 p-8 rounded-sm hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
                        >
                            <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white font-mono tracking-wider mb-3 group-hover:text-blue-400 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
