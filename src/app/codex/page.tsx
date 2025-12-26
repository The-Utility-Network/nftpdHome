'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Codex from '@/components/Codex';

export default function CodexPage() {
    return (
        <div className="min-h-screen bg-transparent text-white">
            <Navbar />
            <div className="pt-24 min-h-screen">
                <Codex />
            </div>
            <Footer />
        </div>
    );
}
