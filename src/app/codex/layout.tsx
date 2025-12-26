import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Codex | NFTPD',
    description: 'The ultimate glossary of Web3 security terms, attack vectors, and defensive strategies.',
    openGraph: {
        title: 'Security Codex | NFTPD',
        description: 'Master the language of blockchain security with the NFTPD Codex.',
        url: 'https://nftpd.org/codex',
        siteName: 'NFTPD Protocol',
        locale: 'en_US',
        type: 'website',
    },
};

export default function CodexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
