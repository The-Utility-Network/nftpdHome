import Image from 'next/image';

const programs = [
    {
        title: 'Blockchain Security Fundamentals',
        desc: 'Master the basics of wallet hygiene, transaction analysis, and identifying common attack vectors.',
        image: '/assets/training-1.jpg',
        level: 'CADET'
    },
    {
        title: 'Smart Contract Auditing',
        desc: 'Deep dive into Solidity and Vyper. Learn to read code, spot vulnerabilities, and secure protocols.',
        image: '/assets/training-2.jpg',
        level: 'OFFICER'
    },
    {
        title: 'Incident Response & Forensics',
        desc: 'Advanced training on tracking stolen funds, negotiating with hackers, and asset recovery strategies.',
        image: '/assets/training-3.jpg',
        level: 'DETECTIVE'
    }
];

export default function TrainingPrograms() {
    return (
        <section id="training" className="relative py-24 px-6 bg-zinc-900/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-mono tracking-[0.2em] text-xs font-bold uppercase">
                        ACADEMY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Cutting-Edge Training</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
                        Join the ranks of the elite. Our training programs are designed to forge the next generation of blockchain security experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div key={program.title} className="group bg-black border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-widest text-white">
                                    {program.level}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {program.desc}
                                </p>
                                <button className="w-full py-3 border border-white/20 text-xs font-mono tracking-widest text-white uppercase hover:bg-white hover:text-black transition-all">
                                    Enlist Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
