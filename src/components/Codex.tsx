'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COURSES } from '@/data/courses';

export default function Codex() {
    return (
        <section id="codex" className="relative py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
                    <div>
                        <span className="text-blue-500 font-mono tracking-[0.2em] text-xs font-bold uppercase">
                            OFFICIAL ACADEMY
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter">
                            SECURITY <span className="text-blue-500">CODEX.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-500 font-mono text-sm leading-relaxed uppercase">
                        The definitive repository for decentralized security knowledge. Master the protocols. Secure the future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COURSES.map((course) => (
                        <Link
                            href={`/codex/${course.id}`}
                            key={course.id}
                            className="group relative p-8 bg-zinc-900/30 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="text-4xl">📚</span>
                            </div>

                            <div className="mb-6">
                                <span className={`px-2 py-1 text-[10px] font-mono font-bold tracking-widest bg-blue-600/20 text-blue-500 border border-blue-500/30`}>
                                    {course.level}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors">
                                {course.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {course.description}
                            </p>

                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                    {course.lessons.length} LESSONS
                                </span>
                                <span className="text-blue-500 text-xs font-bold group-hover:translate-x-2 transition-transform uppercase">
                                    ENROLL NOW →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
