'use client';

import Link from 'next/link';

const termsByLetter: { [key: string]: string[] } = {
    'A': ['Account Abstraction', 'Airdrop Security', 'Anti-Phishing', 'Asset Recovery', 'Audit Standards'],
    'B': ['Blockchain Forensics', 'Bridge Security', 'Bug Bounty', 'Byzantine Fault Tolerance'],
    'C': ['Cold Storage', 'Compliance Audit', 'Consensus Security', 'Cryptography'],
    'D': ['Diamond Standard', 'DDoS Mitigation', 'DeFi Safety', 'DEX Security', 'Digital Identity'],
    'E': ['EntryPoint Contract', 'Encryption Protocols', 'Entropy Management', 'ERC-20 Auditing', 'Exploit Defense'],
    'F': ['Faraday Cage', 'Flash Loan Defense', 'Forensic Analysis', 'Front-Running Mitigation', 'Full Node Security'],
    'G': ['Gas Limit Safety', 'Governance Attacks', 'Ghost Assets', 'Graph Analysis'],
    'H': ['Hardware Wallets', 'Hash Integrity', 'Honey Pots', 'Hot Wallet Risk'],
    'I': ['Incident Response', 'Infiltration Testing', 'Insurance Protocols', 'IPFS Security'],
    'J': ['JIT Liquidity'],
    'K': ['Key Management', 'KYC Verification', 'Know Your Transaction', 'Keystroke Defense'],
    'L': ['Layer 2 Security', 'Ledger Integrity', 'Liquidity Protection', 'Live Monitoring'],
    'M': ['Malware Analysis', 'MeV Protection', 'Multi-Sig Setup', 'Mnemonic Security'],
    'N': ['Network Hardening', 'NFT Verification', 'Node Integrity', 'Non-Custodial Safety'],
    'O': ['Oracle Security', 'On-Chain Forensics', 'Open Source Audit', 'Operating Security'],
    'P': ['Paymaster', 'Private Key Safety', 'Phishing Prevention', 'Protocol Audits', 'Proof of Reserves'],
    'R': ['Re-entrancy Defense', 'Reactive Security', 'Risk Assessment', 'Rug Pull Prevention'],
    'S': ['Sandwich Attack', 'Smart Contract Audit', 'Sidechain Security', 'Seed Phrase Safety', 'Sybil Resistance'],
    'T': ['TBA Security', 'Tokenomics Audit', 'Transaction Verification', 'Threat Intelligence'],
    'U': ['UUPS'],
    'V': ['Validator Security', 'Vulnerability Scan', 'Vault Technology', 'VRF Security'],
    'W': ['Web3 Firewall', 'Wallet Hygiene', 'White-Hat Hacking', 'Whale Tracking'],
    'Z': ['Zero-Knowledge Proofs', 'Zero-Day Defense', 'ZK-Rollup Security', 'Zone Isolation']
};

export default function SeoLinks() {
    const slugify = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    return (
        <section className="py-24 px-6 bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-blue-500 font-mono tracking-[0.2em] text-xs font-bold uppercase">
                        INTELLIGENCE INDEX
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Security Glossary</h2>
                    <p className="max-w-2xl text-gray-400 font-mono text-sm uppercase">Technical terminology and defensive protocols for the Web3 landscape.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
                    {Object.entries(termsByLetter).map(([letter, terms]) => (
                        <div key={letter} className="space-y-4">
                            <h3 className="text-xl font-black text-blue-500/50 font-mono border-b border-white/10 pb-2">{letter}</h3>
                            <ul className="space-y-2">
                                {terms.map((term) => (
                                    <li key={term}>
                                        <Link
                                            href={`/definitions/${slugify(term)}`}
                                            className="text-[10px] font-mono text-gray-500 hover:text-blue-400 transition-colors uppercase tracking-wider block"
                                        >
                                            {term}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
