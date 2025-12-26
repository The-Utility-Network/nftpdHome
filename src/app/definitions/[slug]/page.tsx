'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CODEX } from '@/data/codex';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function DefinitionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const term = CODEX.find(t => t.slug === slug);

    if (!term) return <div>Term not found</div>;

    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-blue-500 selection:text-white font-sans">
            <Navbar />

            <main className="pt-32 pb-24 px-6 relative min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <div className="mb-12 flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-gray-500">
                        <Link href="/definitions" className="hover:text-blue-500">GLOSSARY</Link>
                        <span>/</span>
                        <span className="text-blue-500">{term.category}</span>
                    </div>

                    {/* Term Header */}
                    <div className="relative mb-16">
                        <div className="absolute -left-12 top-0 h-full w-1 bg-blue-500 hidden md:block" />
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                            {term.term}
                        </h1>
                        <p className="text-2xl text-gray-400 font-medium leading-relaxed italic">
                            {term.definition}
                        </p>
                    </div>

                    {/* Detailed Content */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm mb-16">
                        <div className="prose prose-invert prose-blue max-w-none text-gray-300 leading-relaxed text-lg font-light">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{term.longDescription}</ReactMarkdown>
                        </div>
                    </div>

                    {/* Metadata Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-2xl">
                            <h4 className="text-[10px] font-mono text-blue-500/50 font-bold tracking-widest uppercase mb-4 text-center">RELATED INDUSTRIES</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {term.relatedIndustries.map(ind => (
                                    <span key={ind} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono uppercase">
                                        {ind}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-2xl">
                            <h4 className="text-[10px] font-mono text-blue-500/50 font-bold tracking-widest uppercase mb-4 text-center">OPERATIONAL LOCATIONS</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {term.relatedLocations.map(loc => (
                                    <span key={loc} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono uppercase">
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Back to Glossary CTA */}
                    <div className="mt-24 text-center">
                        <Link
                            href="/definitions"
                            className="inline-flex items-center gap-4 text-xs font-mono font-black tracking-widest uppercase text-gray-500 hover:text-white transition-colors group"
                        >
                            <span className="group-hover:-translate-x-2 transition-transform">←</span>
                            BACK TO GLOSSARY
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
