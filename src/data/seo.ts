export interface SEOLocation {
    city: string;
    slug: string;
    country: string;
    region: string;
    description: string;
    coordinates: { x: number; y: number }; // [Longitude, Latitude] for react-simple-maps
    keyFocus: string; // e.g., "DeFi", "Supply Chain"
    code: string; // IATA-style code (e.g. NYC, LON)
    regulatoryContext: string; // Detailed regulatory analysis
    complianceNarrative: string; // How NFTPD meets these exact regs on-chain
    localTokenizationEconomy: string; // What exactly is being traded/tokenized in this hub
    activeSubsidiaries: string[]; // Protocol Partners in this region
}

export interface SEOIndustry {
    title: string;
    slug: string;
    description: string;
    automationNarrative: string; // "The Automation Engine"
    tokenizationNarrative: string; // "The Tokenization Engine"
    complianceNarrative: string; // "Compliance as Code"
    reportingNarrative: string; // "Real-Time Intelligence"
    subsidiaries: string[]; // Partners/Integrations
    marketSize?: string;
    processStages?: { icon: string; title: string; desc: string }[];
}

export type ComparisonCategory = 'Security' | 'Compliance' | 'Traditional' | 'Identity';

export interface SEOComparison {
    competitor: string;
    slug: string;
    category: ComparisonCategory;
    description: string;
    nftpdAdvantage: string; // Why NFTPD is better/different
}

export const LOCATIONS: SEOLocation[] = [
    {
        city: 'Zug',
        slug: 'zug',
        country: 'Switzerland',
        region: 'Europe',
        description: 'The global heart of privacy-preserving decentralized governance. NFTPD aligns with Swiss privacy laws to offer compliant yet anonymous blacklisting.',
        coordinates: { x: 8.5417, y: 47.3769 },
        keyFocus: 'Privacy & Governance',
        code: 'ZUG',
        regulatoryContext: 'Switzerland\'s FINMA sets the gold standard for DAO recognition. NFTPD leverages this framework to legally recognize the "Blacklist DAO" outcomes.',
        complianceNarrative: 'Our Zero-Knowledge Proofs ensure that wallet blacklisting occurs without revealing the reporter\'s identity, adhering to Swiss strict privacy ethos.',
        localTokenizationEconomy: 'Governance tokens, privacy coins, and DAO memberships.',
        activeSubsidiaries: ['NFTPD Protocol', 'Privacy Guard'],
    },
    {
        city: 'New York',
        slug: 'new-york',
        country: 'USA',
        region: 'North America',
        description: 'The center of institutional finance. NFTPD provides the "BitLicense" compliant layer for permissioned DeFi.',
        coordinates: { x: -74.006, y: 40.7128 },
        keyFocus: 'Institutional Compliance',
        code: 'NYC',
        regulatoryContext: 'Strict SEC and NYDFS oversight requires robust KYC/AML. NFTPD offers the "Negative KYC" layer that instantly filters out sanctioned entities.',
        complianceNarrative: 'We automate OFAC compliance. Any wallet on the SDN list is automatically rejected by NFTPD-protected smart contracts, preventing "dirty money" contamination.',
        localTokenizationEconomy: 'RWA (Real World Assets), Security Tokens, and Institutional Stablecoins.',
        activeSubsidiaries: ['NFTPD Enterprise', 'Wall St. Node'],
    },
    {
        city: 'Singapore',
        slug: 'singapore',
        country: 'Singapore',
        region: 'Asia',
        description: 'A global fintech hub ensuring clean digital asset flows across Asia.',
        coordinates: { x: 103.8198, y: 1.3521 },
        keyFocus: 'Exchange & Trading',
        code: 'SIN',
        regulatoryContext: 'The MAS provides clear guidance on digital payment tokens. NFTPD helps exchanges meet the "Travel Rule" requirements by flagging suspicious counter-parties.',
        complianceNarrative: 'Our protocol acts as a shared threat intelligence database for V.A.S.P.s (Virtual Asset Service Providers), creating a herd immunity against hacks.',
        localTokenizationEconomy: 'Cross-border payments, Trade Finance, and Utility Tokens.',
        activeSubsidiaries: ['NFTPD Exchange Layer', 'Asia Compliance Node'],
    },
    {
        city: 'Dubai',
        slug: 'dubai',
        country: 'UAE',
        region: 'Middle East',
        description: 'The world\'s first dedicated Virtual Assets Regulatory Authority (VARA). NFTPD is the native security layer for this jurisdiction.',
        coordinates: { x: 55.2708, y: 25.2048 },
        keyFocus: 'Metaverse & Virtual Assets',
        code: 'DXB',
        regulatoryContext: 'VARA provides a tailored framework for the Metaverse. NFTPD protects virtual real estate and assets from theft and unauthorized transfer.',
        complianceNarrative: 'If a virtual villa is stolen, the NFTPD "Freeze" function can be invoked by the authorized DAO, preventing the thief from liquidating the asset.',
        localTokenizationEconomy: 'Metaverse Land, NFT Art, and Virtual Goods.',
        activeSubsidiaries: ['NFTPD Metaverse', 'VARA Bridge'],
    },
    {
        city: 'Cheyenne',
        slug: 'cheyenne',
        country: 'USA',
        region: 'North America',
        description: 'Home of the DAO LLC. Wyoming is where digital identity meets legal recognition.',
        coordinates: { x: -104.8202, y: 41.1400 },
        keyFocus: 'Legal Identity',
        code: 'CYS',
        regulatoryContext: 'Wyoming laws recognize DAOs as legal entities. NFTPD facilitates the "Corporate Veil" by proving that the DAO took reasonable security measures.',
        complianceNarrative: 'By implementing NFTPD, a Wyoming DAO demonstrates "Best Efforts" in preventing money laundering, a key requirement for banking access.',
        localTokenizationEconomy: 'DAO Governance Tokens, LLC Equity, and State Stablecoins.',
        activeSubsidiaries: ['NFTPD DAO Services', 'Wyoming Node'],
    },
    {
        city: 'London',
        slug: 'london',
        country: 'UK',
        region: 'Europe',
        description: 'The historic financial capital adapting to crypto insurance and risk management.',
        coordinates: { x: -0.1276, y: 51.5074 },
        keyFocus: 'Insurance & Risk',
        code: 'LON',
        regulatoryContext: 'The FCA requires robust systems and controls. NFTPD provides the "Kill Switch" infrastructure that insurers demand before underwriting crypto policies.',
        complianceNarrative: 'Insurance premiums are discounted for protocols integrating NFTPD, as the risk of catastrophic fund loss via hacking is mathematically reduced.',
        localTokenizationEconomy: 'Crypto Insurance Policies, DeFi Derivatives, and automated Claims.',
        activeSubsidiaries: ['NFTPD Risk', 'Lloyd\'s Broker Node'],
    },
    {
        city: 'San Salvador',
        slug: 'san-salvador',
        country: 'El Salvador',
        region: 'Latin America',
        description: 'The first bitcoin nation. NFTPD secures the state-level infrastructure against bad actors.',
        coordinates: { x: -89.2182, y: 13.6929 },
        keyFocus: 'National Adoption',
        code: 'SAL',
        regulatoryContext: 'As legal tender, Bitcoin must be protected from theft. NFTPD offers a "National Blacklist" of known cartel and ransomware addresses.',
        complianceNarrative: 'We provide the government with a tool to freeze assets associated with criminal organizations without enabling broad censorship of legitimate users.',
        localTokenizationEconomy: 'Bitcoin-backed bonds, Chivo Wallet infrastructure, and remittances.',
        activeSubsidiaries: ['NFTPD Gov', 'Volcano Node'],
    },
    {
        city: 'Lisbon',
        slug: 'lisbon',
        country: 'Portugal',
        region: 'Europe',
        description: 'Europe\'s crypto lifestyle hub. Securing the everyday payments of digital nomads.',
        coordinates: { x: -9.1393, y: 38.7223 },
        keyFocus: 'Retail Adoption',
        code: 'LIS',
        regulatoryContext: 'Portugal\'s tax-friendly status attracts high-net-worth crypto individuals. NFTPD protects their personal "Hodl" wallets from phishing attacks.',
        complianceNarrative: 'Personal application of NFTPD allows individuals to whitelist only their known devices, making their main vault impenetrable to remote phishing.',
        localTokenizationEconomy: 'Personal Wealth, Real Estate NFTs, and Digital Nomad Visas.',
        activeSubsidiaries: ['NFTPD Personal', 'Nomad Security'],
    }
];

export const INDUSTRIES: SEOIndustry[] = [
    {
        title: 'DeFi (Decentralized Finance)',
        slug: 'defi',
        description: 'Preventing protocol drains and ensuring clean liquidity pools.',
        automationNarrative: 'Automated circuit breakers trigger instantly upon detecting anomalous withdrawal patterns, pausing the protocol before the drain completes.',
        tokenizationNarrative: 'We tokenize "Risk". Liquidity providers can see the "Cleanliness Score" of a pool, ensuring they are not mixing funds with laundered money.',
        complianceNarrative: 'DeFi protocols can remain permissionless while still blocking US-Sanctioned addresses at the smart contract level, avoiding regulatory crackdown.',
        reportingNarrative: 'Real-time dashboards show the "Health" of the protocol\'s Total Value Locked (TVL), flagging any tainted assets attempting to enter.',
        processStages: [
            { icon: '🛡️', title: 'Filter', desc: 'Block Sanctions' },
            { icon: '⚡', title: 'Monitor', desc: 'Watch Flows' },
            { icon: '❄️', title: 'Freeze', desc: 'Halt Hacks' },
            { icon: '✅', title: 'Audit', desc: 'Clean Funds' }
        ],
        subsidiaries: ['NFTPD Protocol', 'DeFi Guard'],
    },
    {
        title: 'NFT Marketplaces',
        slug: 'nft-marketplaces',
        description: 'Stopping the sale of stolen art and protecting creator royalties.',
        automationNarrative: 'When an NFT is reported stolen, NFTPD instantly propagates a "Do Not Trade" signal to all partner marketplaces (OpenSea, Blur, etc.).',
        tokenizationNarrative: 'The "Stolen" status is metadata attached to the asset itself. The token becomes illiquid, destroying the incentive for theft.',
        complianceNarrative: 'Marketplaces are shielded from liability by automatically rejecting distinct stolen assets, complying with "Know Your Transaction" (KYT) principles.',
        reportingNarrative: 'Creators and collectors receive instant alerts if their artwork moves suspiciously, allowing for rapid community response.',
        processStages: [
            { icon: '🎨', title: 'Mint', desc: 'Secure Origin' },
            { icon: '🚨', title: 'Alert', desc: 'Theft Report' },
            { icon: '🚫', title: 'Block', desc: 'Trade Halt' },
            { icon: '⚖️', title: 'Resolve', desc: 'Dispute mgmt' }
        ],
        subsidiaries: ['NFTPD Art', 'Marketplace Shield'],
    },
    {
        title: 'Web3 Gaming',
        slug: 'web3-gaming',
        description: 'Anti-cheat enforcement and asset protection for play-to-earn economies.',
        automationNarrative: 'Bots and cheaters are detected by behavioral analysis. NFTPD automatically blacklists their wallets, banning them from the game economy.',
        tokenizationNarrative: 'In-game items owned by cheaters are "Soulbound" to the blacklist—they cannot be transferred or sold, preserving the economy\'s integrity.',
        complianceNarrative: 'Game studios can enforce Terms of Service on-chain. a ban is not just a database entry; it is a cryptographic rejection of the player\'s identity.',
        reportingNarrative: 'Economy designers see a clear view of "Legitimate" vs "Bot" activity, allowing for better balancing of rewards.',
        processStages: [
            { icon: '🎮', title: 'Play', desc: 'Action Log' },
            { icon: '🤖', title: 'Detect', desc: 'Bot Pattern' },
            { icon: '🔨', title: 'Ban', desc: 'Wallet list' },
            { icon: '♻️', title: 'Burn', desc: 'Remove Assets' }
        ],
        subsidiaries: ['NFTPD GameFi', 'Fair Play Node'],
    },
    {
        title: 'Supply Chain',
        slug: 'supply-chain',
        description: 'Combating counterfeits and ensuring the integrity of physical-to-digital bridges.',
        automationNarrative: 'If a physical luxury handbag is reported stolen, its "Digital Twin" NFT is blacklisted. The physical item loses its verifiable authenticity.',
        tokenizationNarrative: 'Authenticity is a token. If the chain of custody breaks (e.g., unauthorized reseller), the authenticity token burns or locks.',
        complianceNarrative: 'Brands can enforce selective distribution agreements on-chain. Unauthorized grey-market sales are blocked at the protocol level.',
        reportingNarrative: 'Brand protection officers get a global map of where counterfeit attempts are occurring.',
        processStages: [
            { icon: '👜', title: 'Tag', desc: 'NFC/NFT Link' },
            { icon: '🚚', title: 'Move', desc: 'Scan Updates' },
            { icon: '🚩', title: 'Flag', desc: 'Theft/Loss' },
            { icon: '💀', title: 'Kill', desc: 'Void Auth' }
        ],
        subsidiaries: ['NFTPD Logistics', 'Brand Secure'],
    },
    {
        title: 'Identity & DAO',
        slug: 'identity',
        description: 'Reputation management and Sybil resistance for decentralized governance.',
        automationNarrative: 'Sybil attackers (one person pretending to be 100) are identified by wallet clustering. NFTPD strips their voting power automatically.',
        tokenizationNarrative: 'Reputation is collateral. Bad actors lose their "Credit Score" SBTs, barring them from future participation in the DAO ecosystem.',
        complianceNarrative: 'DAOs can prove they are not controlled by sanctioned entities, allowing them to interact with the traditional banking system.',
        reportingNarrative: 'Governance forums show "Verified Human" badges next to voters who have passed the NFTPD negative-check.',
        processStages: [
            { icon: '🗳️', title: 'Vote', desc: 'Check Rep' },
            { icon: '🎭', title: 'Sybil', desc: 'Identify' },
            { icon: '📉', title: 'Slash', desc: 'Remove Power' },
            { icon: '🛡️', title: 'Secure', desc: 'Clean DAO' }
        ],
        subsidiaries: ['NFTPD ID', 'Civic Guard'],
    },
    {
        title: 'Stablecoins',
        slug: 'stablecoins',
        description: 'Maintaining the peg and regulatory compliance for fiat-backed assets.',
        automationNarrative: 'Stablecoin issuers (Circle, Tether, etc.) use NFTPD to instantly freeze assets in wallets linked to terrorist financing or ransomware.',
        tokenizationNarrative: 'The "Fiat" value is conditional. It only exists if the holder is not on the global blacklist. This programmable money prevents crime.',
        complianceNarrative: 'Issuers meet global AML/CFT standards automatically. "Settlement Finality" is only granted effectively after the compliance check clears.',
        reportingNarrative: 'Regulators receive automated reports on "Frozen Assets" and "Intercepted Flows", satisfying transparency mandates.',
        processStages: [
            { icon: '💵', title: 'Mint', desc: 'Backing Check' },
            { icon: '💸', title: 'Send', desc: 'Compliance Scan' },
            { icon: '🧊', title: 'Freeze', desc: 'Illicit Act' },
            { icon: '🔥', title: 'Burn', desc: ' seize Funds' }
        ],
        subsidiaries: ['NFTPD Cash', 'Stable Guard'],
    }
];

export const COMPARISONS: SEOComparison[] = [
    {
        competitor: 'Chainalysis',
        slug: 'chainalysis',
        category: 'Security',
        description: 'The industry leader in blockchain data analysis and investigation.',
        nftpdAdvantage: 'Chainalysis is reactive; they tell you *after* the hack where the money went. NFTPD is proactive; we block the hacker from moving the money in the first place at the protocol level.',
    },
    {
        competitor: 'OFAC Sanctions List',
        slug: 'ofac',
        category: 'Compliance',
        description: 'The US Treasury\'s official list of sanctioned entities (PDF/Text).',
        nftpdAdvantage: 'OFAC lists are static PDFs. NFTPD is a living, smart-contract enforceable Oracle. We turn a legal document into executable code that prevents violations before they happen.',
    },
    {
        competitor: 'Token Gating (Allowlists)',
        slug: 'token-gating',
        category: 'Traditional',
        description: 'Restrictive security that only lets pre-approved people in.',
        nftpdAdvantage: 'Allowlists destroy growth; you can\'t onboard new users easily. NFTPD uses "Blocklists" (Denylists), allowing open, permissionless access to 99.9% of the world while only blocking the known bad 0.1%.',
    },
    {
        competitor: 'TRM Labs',
        slug: 'trm-labs',
        category: 'Compliance',
        description: 'Compliance and risk management platform for digital assets.',
        nftpdAdvantage: 'TRM provides great risk scores for compliance officers. NFTPD provides immediate *action* for smart contracts. We are the enforcement arm to their intelligence arm.',
    },
    {
        competitor: 'Tether (USDT) Blacklist',
        slug: 'tether-blacklist',
        category: 'Security',
        description: 'Centralized freezing mechanism within the Tether smart contract.',
        nftpdAdvantage: 'Tether\'s blacklist is centralized and manual; only Tether Inc. controls it. NFTPD is a decentralized, community-governed protocol that any token (USDC, DAI, WBTC) can subscribe to.',
    },
    {
        competitor: 'WorldCoin',
        slug: 'worldcoin',
        category: 'Identity',
        description: 'Biometric identity verification (Orb).',
        nftpdAdvantage: 'WorldCoin requires specialized hardware and scans your eyeballs. NFTPD infers reputation from on-chain behavior and "Wallet History", preserving privacy without requiring physical biometrics.',
    },
    {
        competitor: 'OpenZeppelin Defender',
        slug: 'openzeppelin',
        category: 'Security',
        description: 'Security operations platform for smart contracts.',
        nftpdAdvantage: 'Defender is a tool for devs to pause their own contracts. NFTPD is a shared global reputation layer. A threat detected by Protocol A is instantly blocked by Protocol B via the shared NFTPD registry.',
    },
    {
        competitor: 'CertiK',
        slug: 'certik',
        category: 'Security',
        description: 'Smart contract auditing and monitoring.',
        nftpdAdvantage: 'Audits find bugs in code. NFTPD stops bugs in people. Even a perfectly audited contract can be used by a money launderer. We solve the "Malicious User" problem, not just the "Buggy Code" problem.',
    }
];
