'use client';

import { useState } from 'react';
import CertificateGenerator from '@/components/CertificateGenerator';

export default function DebugCertificatePage() {
    const [customName, setCustomName] = useState('Test Agent Alpha');
    const [customCourse, setCustomCourse] = useState('Web3 Foundation & Cryptography');

    // Only render in development with debug flag
    if (process.env.NODE_ENV !== 'development' || !process.env.NEXT_PUBLIC_DEBUG_CERTIFICATE) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <p>Debug certificate page is disabled.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-black text-white mb-2">Certificate Debug Page</h1>
                <p className="text-white/50 font-mono text-sm mb-8">
                    Test certificate export and sharing functionality
                </p>

                {/* Custom Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div>
                        <label className="block text-white/70 font-mono text-xs uppercase tracking-wider mb-2">
                            Recipient Name
                        </label>
                        <input
                            type="text"
                            value={customName}
                            onChange={(e) => setCustomName(e.target.value)}
                            className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-3 text-white font-serif text-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter name..."
                        />
                    </div>
                    <div>
                        <label className="block text-white/70 font-mono text-xs uppercase tracking-wider mb-2">
                            Course Name
                        </label>
                        <input
                            type="text"
                            value={customCourse}
                            onChange={(e) => setCustomCourse(e.target.value)}
                            className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
                            placeholder="Enter course..."
                        />
                    </div>
                </div>

                <CertificateGenerator
                    name={customName}
                    course={customCourse}
                    date={new Date().toLocaleDateString()}
                />
            </div>
        </div>
    );
}
