'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CODEX } from '@/data/codex';

export default function DefinitionsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = Array.from(new Set(CODEX.map(term => term.category)));

    const filteredTerms = CODEX.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? term.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-blue-500 selection:text-white font-sans">
            <Navbar />

            <main className="pt-32 pb-24 px-6 relative min-h-screen text-center">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight">
                            Protocol <span className="text-blue-500">Definitions</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg uppercase font-mono">
                            Decrypted terminology for the NFTPD ecosystem. Identify, learn, and master the language of Web3 security.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="w-full md:w-1/2 relative">
                            <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search protocols, terms, or concepts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 transition-colors"
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-2 rounded-full text-xs font-mono uppercase whitespace-nowrap transition-colors border ${selectedCategory === null
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                    }`}
                            >
                                All
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase whitespace-nowrap transition-colors border ${selectedCategory === cat
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTerms.map((term) => (
                            <Link
                                href={`/definitions/${term.slug}`}
                                key={term.slug}
                                className="group p-8 bg-zinc-900/30 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 rounded-2xl transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="flex justify-between items-start mb-4 w-full">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-blue-500 transition-colors">
                                        {term.category}
                                    </span>
                                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">
                                    {term.term}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow uppercase font-mono">
                                    {term.definition}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 justify-center w-full">
                                    {term.relatedIndustries.slice(0, 3).map(ind => (
                                        <span key={ind} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-500 font-mono uppercase">
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredTerms.length === 0 && (
                        <div className="text-center py-24">
                            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Matches Found</h3>
                            <p className="text-gray-600">Try adjusting your search query or filters.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
