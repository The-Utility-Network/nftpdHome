import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Protocol Whitepaper | NFTPD',
    description: 'A comprehensive treatise on decentralized security infrastructure and the philosophical foundations of wallet identity.',
    openGraph: {
        title: 'Protocol Whitepaper | NFTPD',
        description: 'Read the NFTPD Whitepaper: The blueprint for the Web3 security layer.',
        url: 'https://nftpd.org/documents',
        siteName: 'NFTPD Protocol',
        locale: 'en_US',
        type: 'article',
    },
};

export default function DocumentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
