import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Great Filter | NFTPD',
    description: 'Exploring the philosophical and economic models behind the NFTPD protocol and the Creative Revolution.',
    openGraph: {
        title: 'The Great Filter | NFTPD',
        description: 'Why we must secure the Metaverse: A philosophical deep dive.',
        url: 'https://nftpd.org/our-model',
        siteName: 'NFTPD Protocol',
        locale: 'en_US',
        type: 'article',
    },
};

export default function OurModelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
