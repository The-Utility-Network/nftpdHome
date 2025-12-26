'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import SecurityServices from '@/components/SecurityServices';
import TrainingPrograms from '@/components/TrainingPrograms';
import SeoLinks from '@/components/SeoLinks';
import SeoNav from '@/components/SeoNav';
import CodexPreview from '@/components/CodexPreview';

export default function Home() {
    return (
        <main className="min-h-screen bg-transparent overflow-hidden selection:bg-blue-500 selection:text-white">
            <Navbar />

            <Hero />
            <Mission />
            <SecurityServices />

            {/* Interactive Sections */}
            <CodexPreview />
            <TrainingPrograms />
            <TrainingPrograms />
            <SeoNav />
            <SeoLinks />

            <Footer />
        </main>
    );
}
