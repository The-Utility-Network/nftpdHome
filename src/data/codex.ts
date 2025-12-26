export interface CodexTerm {
    term: string;
    slug: string;
    definition: string;
    longDescription: string;
    category: 'Technology' | 'Economics' | 'Philosophy' | 'Infrastructure' | 'Security' | 'Cryptography' | 'Hardware' | 'Logo' | 'Development' | 'Forensics' | 'Compliance' | 'Enterprise';
    relatedIndustries: string[];
    relatedLocations: string[];
}

export const CODEX: CodexTerm[] = [
    {
        term: 'Formal Verification',
        slug: 'formal-verification',
        definition: 'The act of proving or disproving the correctness of intended algorithms underlying a system with respect to a certain formal specification or property.',
        longDescription: 'Formal verification is the gold standard for high-stakes smart contracts. It involves creating a mathematical model of the system and using automated provers to exhaustively verify that the code behaves exactly as specified. This is essential for Fortune 500 companies deploying enterprise-grade blockchain infrastructure where a single bug can result in catastrophic financial loss.',
        category: 'Development',
        relatedIndustries: ['Aerospace', 'FinTech', 'Cryptography'],
        relatedLocations: ['Zurich', 'Palo Alto']
    },
    {
        term: 'Societal Consensus Protocol',
        slug: 'societal-consensus-protocol',
        definition: 'A multi-layered agreement mechanism that integrates technical consensus with human governance frameworks.',
        longDescription: 'Beyond simple proof-of-work or proof-of-stake, a Societal Consensus Protocol (SCP) incorporates ethical guidelines, legal compliance, and community values into the block validation process. NFTPD specifically consults on SCP design for sovereign entities and large organizations requiring decentralized but accountable governance.',
        category: 'Philosophy',
        relatedIndustries: ['Governance', 'Legal', 'Infrastructure'],
        relatedLocations: ['Geneva', 'Brussels']
    },
    {
        term: 'SOC2 Type II Blockchain Compliance',
        slug: 'soc2-blockchain-compliance',
        definition: 'A rigorous auditing procedure that ensures service providers manage data securely to protect the interests of their organization and the privacy of their clients.',
        longDescription: 'SOC2 Type II compliance in a decentralized environment requires mapping Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, and Privacy) to on-chain operations. This involves continuous monitoring of validator nodes, secure key management lifecycle, and transparent audit trails which are foundational for enterprise adoption of Web3.',
        category: 'Compliance',
        relatedIndustries: ['Banking', 'Cybersecurity', 'Audit'],
        relatedLocations: ['New York', 'London']
    },
    {
        term: 'Multi-Party Computation (MPC)',
        slug: 'multi-party-computation',
        definition: 'A subfield of cryptography that allows multiple parties to jointly compute a function over their inputs while keeping those inputs private.',
        longDescription: 'MPC is a cornerstone of enterprise-grade digital asset custody. By splitting a private key into "shares" distributed across multiple independent servers, no single entity ever sees the full key. This eliminates the "single point of failure" risk, making it a preferred choice for institutional-scale security over traditional hardware wallets.',
        category: 'Cryptography',
        relatedIndustries: ['Custody', 'Banking', 'Institutional Finance'],
        relatedLocations: ['Tel Aviv', 'San Francisco']
    },
    {
        term: 'Zero-Knowledge Rollup (ZK-Rollup)',
        slug: 'zk-rollup',
        definition: 'A layer 2 scaling solution that offloads transactions from the main blockchain while maintaining security through zero-knowledge proofs.',
        longDescription: 'ZK-Rollups offer the ultimate combination of scalability and security. By batching hundreds of transactions into a single validity proof verified by the Layer 1, they provide mathematical certainty of transaction correctness. For Fortune 500 enterprises, ZK-Rollups enable high-throughput private transactions on public networks without compromising on decentralization.',
        category: 'Infrastructure',
        relatedIndustries: ['Supply Chain', 'Global Trade', 'Payments'],
        relatedLocations: ['Global']
    },
    {
        term: 'Oracle Manipulation Defense',
        slug: 'oracle-manipulation-defense',
        definition: 'Tactical countermeasures designed to protect DeFi protocols from price feed exploits.',
        longDescription: 'Oracle manipulation is one of the most common and devastating attack vectors in DeFi. Professional-grade defense involves utilizing decentralized oracle networks (like Chainlink), implementing Time-Weighted Average Prices (TWAP), and deploying secondary guardrail oracles to detect and pause operations during extreme volatility or deviations.',
        category: 'Security',
        relatedIndustries: ['Finance', 'Insurance', 'Commodities'],
        relatedLocations: ['Remote']
    },
    {
        term: 'Byzantine Fault Tolerance (BFT)',
        slug: 'byzantine-fault-tolerance',
        definition: 'The property of a system that is able to reach consensus even if some of its components are failing or acting maliciously.',
        longDescription: 'Enterprise blockchain networks must be resilient to arbitrary (Byzantine) failures. BFT-based consensus mechanisms ensure that as long as more than two-thirds of the network behaves correctly, the system maintains integrity. This is critical for industrial consortiums where participants may have competing interests.',
        category: 'Infrastructure',
        relatedIndustries: ['Consortium Blockchain', 'Industrial Internet of Things'],
        relatedLocations: ['Munich', 'Tokyo']
    },
    {
        term: 'Smart Contract Audit',
        slug: 'smart-contract-audit',
        definition: 'A thorough clinical examination of code to identify vulnerabilities and ensure logic alignment with specifications.',
        longDescription: 'An elite-level audit goes beyond simple bug hunting. It includes game-theoretic analysis, economic stress testing, and formal verification of critical invariants. The NFTPD audit methodology is designed to provide institutional confidence for protocols handling billions in TVL.',
        category: 'Security',
        relatedIndustries: ['Finance', 'Real Estate', 'Venture Capital'],
        relatedLocations: ['Global']
    },
    {
        term: 'WalterWallets',
        slug: 'walterwallets',
        definition: 'Next-generation Token Bound Accounts (ERC-6551) acting as programmable digital vaults.',
        longDescription: 'WalterWallets transform NFTs from static collectibles into active agents. By implementing ERC-6551, these wallets can hold assets, own sub-identities, and execute complex logic. For enterprises, this enables advanced asset management where a single NFT represents an entire portfolio or a business entity with its own history and credentials.',
        category: 'Infrastructure',
        relatedIndustries: ['Gaming', 'Collectibles', 'Entity Management'],
        relatedLocations: ['Metaverse']
    },
    {
        term: 'Airdrop Security',
        slug: 'airdrop-security',
        definition: 'Protocols for safely distributing tokens to prevent sybil attacks and phishing exploits.',
        longDescription: 'Airdrops are frequent targets for malicious actors. Elite security involves utilizing merkle trees for efficient proof verify, anti-sybil checks, and dedicated claim portals that minimize user exposure to fake "claim" links commonly found on social media.',
        category: 'Security',
        relatedIndustries: ['Marketing', 'DeFi'],
        relatedLocations: ['Global']
    },
    {
        term: 'Anti-Phishing',
        slug: 'anti-phishing',
        definition: 'Technical and educational countermeasures against fraudulent attempts to obtain sensitive information.',
        longDescription: 'Phishing remains the #1 entry point for enterprise security breaches. Modern defense includes SPF/DKIM/DMARC enforcement, hardware-backed 2FA (Yubikeys), and real-time domain monitoring to take down lookalike sites before they capture user credentials.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Enterprise'],
        relatedLocations: ['Global']
    },
    {
        term: 'Asset Recovery',
        slug: 'asset-recovery',
        definition: 'The methodical process of tracing and retrieving stolen or lost digital assets.',
        longDescription: 'Institutional asset recovery involves a combination of chain analysis, legal intervention (Mareva injunctions), and technical collaboration with exchanges. NFTPD utilizes advanced forensics to track laundered funds across mixers and cross-chain bridges.',
        category: 'Forensics',
        relatedIndustries: ['Legal', 'Banking'],
        relatedLocations: ['Switzerland', 'Cayman Islands']
    },
    {
        term: 'Audit Standards',
        slug: 'audit-standards',
        definition: 'The rigorous frameworks and methodologies used to evaluate the security of decentralised protocols.',
        longDescription: 'Beyond code review, modern audit standards incorporate game-theoretic analysis, stress testing under extreme market conditions, and verification of administrative controls. Organizations like the EEA (Enterprise Ethereum Alliance) contribute to these evolving benchmarks.',
        category: 'Compliance',
        relatedIndustries: ['Consulting', 'Software Development'],
        relatedLocations: ['New York', 'London']
    },
    {
        term: 'Blockchain Forensics',
        slug: 'blockchain-forensics',
        definition: 'The scientific study of on-chain data to investigate criminal activity and map financial flows.',
        longDescription: 'Professional forensics goes beyond simple explorer searches. It utilizes pattern recognition, address clustering, and attribution tagging to identify the entities behind anonymous transactions. This is critical for regulatory compliance and incident response.',
        category: 'Forensics',
        relatedIndustries: ['Law Enforcement', 'Compliance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Bridge Security',
        slug: 'bridge-security',
        definition: 'Defensive architectures for protecting assets as they move between independent blockchain networks.',
        longDescription: 'Cross-chain bridges are high-value targets. Elite bridge security employs decentralized validator sets, optimistic challenge periods, and rate-limiting to prevent the catastrophic drain of locked collateral in the event of a protocol exploit.',
        category: 'Infrastructure',
        relatedIndustries: ['Interoperability', 'Liquidity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Bug Bounty',
        slug: 'bug-bounty',
        definition: 'Incentive programs that reward ethical hackers for discovering and responsibly disclosing vulnerabilities.',
        longDescription: 'Institutional bug bounties (e.g., through Immunefi) offer millions in rewards for critical exploits. A well-structured program is a key component of a protocol\'s long-term security posture, acting as a continuous, decentralized audit.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Cold Storage',
        slug: 'cold-storage',
        definition: 'The practice of keeping digital assets in offline environments to eliminate remote hacking risks.',
        longDescription: 'For Fortune 500 treasuries, cold storage involves air-gapped hardware, physical vaults, and geographically distributed key fragments. This "offline" status ensures that even a total network compromise cannot result in asset loss.',
        category: 'Security',
        relatedIndustries: ['Custody', 'Institutional Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Compliance Audit',
        slug: 'compliance-audit',
        definition: 'A formal review to ensure adherence to regulatory requirements and internal policy frameworks.',
        longDescription: 'Compliance audits in Web3 must bridge the gap between traditional finance (AML/KYC) and on-chain transparency. They verify that the protocol operates within legal boundaries across all active jurisdictions.',
        category: 'Compliance',
        relatedIndustries: ['Legal', 'Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Consensus Security',
        slug: 'consensus-security',
        definition: 'Defenses against attacks targeting the agreement mechanisms of a blockchain network.',
        longDescription: 'Consensus security protects against 51% attacks, sybil attacks, and long-range attacks. It ensures the integrity and finality of the ledger, forming the foundational trust layer of any decentralized system.',
        category: 'Security',
        relatedIndustries: ['Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'DDoS Mitigation',
        slug: 'ddos-mitigation',
        definition: 'Strategies for preventing Distributed Denial of Service attacks from disrupting network availability.',
        longDescription: 'Web3 DDoS defense involves protecting RPC endpoints, validator nodes, and front-end infrastructure. Solutions include anycast networks, rate-limiting, and hardened infrastructure providers like Cloudflare or specialized Web3 nodes.',
        category: 'Infrastructure',
        relatedIndustries: ['Cybersecurity', 'Cloud Computing'],
        relatedLocations: ['Global']
    },
    {
        term: 'DeFi Safety',
        slug: 'defi-safety',
        definition: 'The comprehensive set of standards and practices for reducing risk in decentralized financial protocols.',
        longDescription: 'DeFi safety covers smart contract risk, economic risk (oracle failure), and liquidity risk. Tools like DeFi Safety scores help institutional investors evaluate the maturity and security of various protocols before deploying capital.',
        category: 'Security',
        relatedIndustries: ['Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'DEX Security',
        slug: 'dex-security',
        definition: 'Protection mechanisms for Decentralized Exchanges against sandwich attacks, flash loans, and pool manipulation.',
        longDescription: 'DEX security involves implementing slippage protection, utilizing robust oracles, and ensuring the mathematical correctness of Automated Market Maker (AMM) formulas. Protecting users from MEV (Maximal Extractable Value) is a primary focus.',
        category: 'Security',
        relatedIndustries: ['Trading', 'Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Digital Identity',
        slug: 'digital-identity',
        definition: 'Self-sovereign systems for managing personal information and credentials on the blockchain.',
        longDescription: 'Decentralized Identifiers (DIDs) allow users to own their identity data without relying on central providers. For enterprises, this enables privacy-preserving KYC and verified credentials for professional access.',
        category: 'Technology',
        relatedIndustries: ['Identity Management', 'Legal'],
        relatedLocations: ['Global']
    },
    {
        term: 'Encryption Protocols',
        slug: 'encryption-protocols',
        definition: 'Mathematical standards used to secure data transmission and storage in a digital environment.',
        longDescription: 'AES-256, RSA, and Elliptic Curve Cryptography (ECC) are standard. In Web3, specialized protocols like ChaCha20-Poly1305 are often used for efficient on-device encryption of sensitive key material.',
        category: 'Cryptography',
        relatedIndustries: ['Cybersecurity', 'Hardware'],
        relatedLocations: ['Global']
    },
    {
        term: 'Entropy Management',
        slug: 'entropy-management',
        definition: 'The critical process of ensuring true randomness in the generation of cryptographic keys.',
        longDescription: 'Poor entropy is a common cause of wallet theft. Institutional entropy management utilizes hardware random number generators (TRNGs) and environmental noise to ensure that keys are mathematically impossible to guess.',
        category: 'Cryptography',
        relatedIndustries: ['Math', 'Security'],
        relatedLocations: ['Global']
    },
    {
        term: 'ERC-20 Auditing',
        slug: 'erc-20-auditing',
        definition: 'Specialized security review for fungible token contracts to prevent supply manipulation and lockups.',
        longDescription: 'Auditing ERC-20 tokens focuses on non-standard behaviors, re-entrancy in transfer hooks, and ensuring administrative roles cannot arbitrarily mint or freeze funds without proper governance checks.',
        category: 'Development',
        relatedIndustries: ['FinTech'],
        relatedLocations: ['Global']
    },
    {
        term: 'Exploit Defense',
        slug: 'exploit-defense',
        definition: 'Proactive and reactive measures to protect against software vulnerabilities and malicious code.',
        longDescription: 'Exploit defense includes runtime protection, static analysis, and real-time monitoring. In Web3, this often involves "white-hat" front-running to save funds before an attacker can complete a malicious transaction.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Flash Loan Defense',
        slug: 'flash-loan-defense',
        definition: 'Techniques for preventing attackers from utilizing uncollateralized loans to manipulate protocol logic.',
        longDescription: 'Flash loan attacks often target price oracles. Defense includes using multi-block VWAP oracles, implementing "freshness" checks for price data, and requiring users to wait at least one block between sensitive actions.',
        category: 'Security',
        relatedIndustries: ['DeFi', 'Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Forensic Analysis',
        slug: 'forensic-analysis',
        definition: 'The detailed investigation of security incidents to understand the root cause and impact.',
        longDescription: 'Forensic analysis in Web3 involves replaying transactions on local nodes, analyzing memory states, and tracing funds through complex tumbler and mixer protocols to identify the perpetrator.',
        category: 'Forensics',
        relatedIndustries: ['Law Enforcement', 'Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Front-Running Mitigation',
        slug: 'front-running-mitigation',
        definition: 'Countermeasures against actors who use advanced knowledge of pending transactions to profit from price movements.',
        longDescription: 'Mitigation includes using private transaction pools (like Flashbots Protect), commit-reveal schemes, and Fair Sequencing Services (FSS) to ensure transaction ordering is not manipulated for profit.',
        category: 'Security',
        relatedIndustries: ['Trading', 'DEX'],
        relatedLocations: ['Global']
    },
    {
        term: 'Full Node Security',
        slug: 'full-node-security',
        definition: 'Hardening the infrastructure responsible for validating and propagating transactions across a network.',
        longDescription: 'Securing a full node involves network-level protection (firewalls, VPNs), secure key storage for validators, and monitoring for resource exhaustion attacks that could knock the node offline.',
        category: 'Infrastructure',
        relatedIndustries: ['Infrastructure', 'Mining'],
        relatedLocations: ['Global']
    },
    {
        term: 'Gas Limit Safety',
        slug: 'gas-limit-safety',
        definition: 'Strategic management of transaction resource limits to prevent out-of-gas errors and resource exhaustion exploits.',
        longDescription: 'Institutions must optimize gas costs while ensuring transactions don\'t fail during high network congestion. Elite safety involves utilizing dynamic gas price estimation and implementing "gas-aware" smart contracts that can gracefully handle partial execution if resource limits are reached.',
        category: 'Development',
        relatedIndustries: ['FinTech', 'Cloud Computing'],
        relatedLocations: ['Global']
    },
    {
        term: 'Governance Attacks',
        slug: 'governance-attacks',
        definition: 'Malicious attempts to subvert the decision-making processes of a DAO or protocol.',
        longDescription: 'Governance attacks include "hostile takeovers" via flash loans, sybil voting, and social engineering of key stakeholders. Defense strategies involve long voting periods, quorum requirements, and "timelocks" that allow users to exit a protocol before a malicious proposal can be executed.',
        category: 'Security',
        relatedIndustries: ['Governance', 'DAO Management'],
        relatedLocations: ['Global']
    },
    {
        term: 'Ghost Assets',
        slug: 'ghost-assets',
        definition: 'Digital tokens that appear to have value but lack underlying liquidity or functional utility.',
        longDescription: 'Detecting ghost assets is a core function of Web3 forensics. These assets are often used in pump-and-dump schemes or to inflate the perceived "total value locked" (TVL) of a fraudulent protocol. Proper auditing involves verifying the reality of underlying reserves.',
        category: 'Economics',
        relatedIndustries: ['Audit', 'Analysis'],
        relatedLocations: ['Global']
    },
    {
        term: 'Graph Analysis',
        slug: 'graph-analysis',
        definition: 'The use of mathematical graph theory to map and analyze complex relationships in on-chain data.',
        longDescription: 'Graph analysis allows investigators to visualize the "velocity" of money and identify transaction clusters that indicate organized criminal activity. It is a foundational tool for mapping large-scale money laundering networks across the blockchain.',
        category: 'Forensics',
        relatedIndustries: ['Data Science', 'Law Enforcement'],
        relatedLocations: ['Global']
    },
    {
        term: 'Hardware Wallets',
        slug: 'hardware-wallets',
        definition: 'Physical devices designed to store private keys in an isolated, secure environment.',
        longDescription: 'Hardware wallets provide a "root of trust" by keeping private keys away from internet-connected devices. For absolute security, NFTPD recommends combining hardware wallets with Multi-Sig (Multi-Signature) and MPC (Multi-Party Computation) frameworks.',
        category: 'Hardware',
        relatedIndustries: ['Cybersecurity', 'Consumer Electronics'],
        relatedLocations: ['Global']
    },
    {
        term: 'Hash Integrity',
        slug: 'hash-integrity',
        definition: 'The verification that a piece of data has not been altered, confirmed by its cryptographic hash.',
        longDescription: 'Hash integrity is the cornerstone of blockchain immutability. By comparing the hash of current data with a previously recorded hash, users can mathematically prove that no tampering has occurred. This is essential for verifying software binaries and transaction histories.',
        category: 'Cryptography',
        relatedIndustries: ['Cybersecurity', 'Data Verification'],
        relatedLocations: ['Global']
    },
    {
        term: 'Honey Pots',
        slug: 'honey-pots',
        definition: 'Decoy systems or contracts designed to attract and identify malicious actors.',
        longDescription: 'In a defensive context, honey pots are used by security researchers to study attacker behavior and gather threat intelligence. In a malicious context, they are "trap" contracts that appear vulnerable but are designed to lock an attacker\'s (or user\'s) funds indefinitely.',
        category: 'Security',
        relatedIndustries: ['Ethical Hacking', 'Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Hot Wallet Risk',
        slug: 'hot-wallet-risk',
        definition: 'The inherent security vulnerabilities associated with keeping private keys on internet-connected devices.',
        longDescription: 'While convenient for frequent trading, hot wallets are vulnerable to malware, phishing, and remote exploits. Enterprise security policies strictly limit the amount of capital kept in "hot" environments, primarily utilizing cold storage for treasury assets.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Personal Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Incident Response',
        slug: 'incident-response',
        definition: 'The structured approach for managing the aftermath of a security breach or technical failure.',
        longDescription: 'NFTPD\'s elite incident response includes immediate bridge freezing, "white-hat" counter-exploits, and coordinated communication with law enforcement and victims to mitigate damage and recover lost assets as quickly as possible.',
        category: 'Security',
        relatedIndustries: ['Crisis Management', 'Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Infiltration Testing',
        slug: 'infiltration-testing',
        definition: 'The proactive simulation of attacks to identify weaknesses in a protocol\'s architecture or governance.',
        longDescription: 'Also known as "Red Teaming," infiltration testing goes beyond simple code audits. It tests the "human layer" of a protocol, including administrative setups and emergency response times, to ensure resilience against sophisticated real-world adversaries.',
        category: 'Security',
        relatedIndustries: ['Ethical Hacking', 'Risk Management'],
        relatedLocations: ['Global']
    },
    {
        term: 'Insurance Protocols',
        slug: 'insurance-protocols',
        definition: 'Decentralized systems for mitigating financial loss in the event of smart contract exploits or custodian failure.',
        longDescription: 'Protocols like Nexus Mutual provide a decentralized safety net. However, for elite organizations, insurance is a secondary layer that supplements—not replaces—rigorous formal verification and multi-stage audit procedures.',
        category: 'Economics',
        relatedIndustries: ['Insurance', 'Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'IPFS Security',
        slug: 'ipfs-security',
        definition: 'Best practices for ensuring the availability and integrity of data stored on the InterPlanetary File System.',
        longDescription: 'While IPFS is decentralized, it is not "private." Security involves encrypting sensitive data before upload and utilizing "pinning" services to ensure metadata and front-end assets remain accessible even during network outages.',
        category: 'Infrastructure',
        relatedIndustries: ['Decentralized Storage', 'Web Hosting'],
        relatedLocations: ['Global']
    },
    {
        term: 'Key Management',
        slug: 'key-management',
        definition: 'The comprehensive lifecycle management of cryptographic keys, from generation to rotation and destruction.',
        longDescription: 'Institutional key management involves strictly enforced policies around who can access fragments of a key and under what conditions. NFTPD utilizes HSM (Hardware Security Modules) and MPC to ensure no single point of failure exists for mission-critical keys.',
        category: 'Cryptography',
        relatedIndustries: ['Cybersecurity', 'Enterprise Security'],
        relatedLocations: ['Global']
    },
    {
        term: 'KYC Verification',
        slug: 'kyc-verification',
        definition: 'The process of identifying and verifying the identity of users to ensure regulatory compliance.',
        longDescription: 'Know Your Customer (KYC) in Web3 is evolving toward "Zero-Knowledge KYC," where users can prove their verified status without leaking PII (Personally Identifiable Information) on-chain. This is a primary focus for compliant enterprise dApps.',
        category: 'Compliance',
        relatedIndustries: ['Regulatory Tech', 'Legal'],
        relatedLocations: ['Global']
    },
    {
        term: 'Know Your Transaction',
        slug: 'know-your-transaction',
        definition: 'Real-time monitoring and screening of on-chain transactions to identify and block high-risk financial flows.',
        longDescription: 'Unlike traditional banking, KYT allows for instantaneous screening of transaction history. Institutional providers use this to ensure they are not receiving funds associated with sanctioned addresses or laundered proceeds.',
        category: 'Compliance',
        relatedIndustries: ['Banking', 'Analysis'],
        relatedLocations: ['Global']
    },
    {
        term: 'Keystroke Defense',
        slug: 'keystroke-defense',
        definition: 'Protections against malware designed to capture private keys or seed phrases during user input.',
        longDescription: 'Keystroke logging is a frequent point of failure for hot wallets. Defenses include utilizing on-screen virtual keyboards, password managers that use "autofill" rather than typing, and hardware wallets that authorize transactions in isolated environments.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Software Security'],
        relatedLocations: ['Global']
    },
    {
        term: 'Layer 2 Security',
        slug: 'layer-2-security',
        definition: 'The specific defensive measures required for scaling solutions that operate on top of a base blockchain.',
        longDescription: 'L2 security relies on the integrity of "sequencers" and the robustness of "fraud proofs" (Optimistic) or "validity proofs" (ZK). Elite implementations involve decentralized sequencers and open-source verification of the proof systems.',
        category: 'Infrastructure',
        relatedIndustries: ['Blockchain Scaling', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'Ledger Integrity',
        slug: 'ledger-integrity',
        definition: 'The property of a blockchain that ensures the history of transactions is accurate and practically unchangeable.',
        longDescription: 'Ledger integrity is achieved through distributed consensus and cryptographic hashing. It is the fundamental technical guarantee that allows for trustless financial coordination between parties who do not trust each other.',
        category: 'Infrastructure',
        relatedIndustries: ['Database Management', 'Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Liquidity Protection',
        slug: 'liquidity-protection',
        definition: 'Safeguards designed to prevent sudden, catastrophic drains of assets from decentralized exchange pools.',
        longDescription: 'Liquidity protection involves implementing "circuit breakers" that pause trading during extreme volatility and "exit fees" that penalize those who attempt to drain pools during a panic. It is essential for maintaining market stability in DeFi.',
        category: 'Economics',
        relatedIndustries: ['Trading', 'Market Making'],
        relatedLocations: ['Global']
    },
    {
        term: 'Live Monitoring',
        slug: 'live-monitoring',
        definition: 'Continuous, real-time surveillance of on-chain activity to detect and respond to security threats immediately.',
        longDescription: 'NFTPD\'s live monitoring platform uses AI to identify anomalous transaction patterns that indicate a logic exploit or a targeted phishing campaign. This allows for automated "pause" signals to be sent to protocol guardians.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Operations'],
        relatedLocations: ['Global']
    },
    {
        term: 'Malware Analysis',
        slug: 'malware-analysis',
        definition: 'The process of dissecting and understanding the behavior of malicious software targeting Web3 environments.',
        longDescription: 'Institutions must defend against "clip-board switchers," "drainer" scripts, and sophisticated trojans. Analysis involves static and dynamic inspection of binaries to identify command-and-control (C2) servers and prevent data exfiltration.',
        category: 'Forensics',
        relatedIndustries: ['Cybersecurity', 'Banking'],
        relatedLocations: ['Global']
    },
    {
        term: 'MeV Protection',
        slug: 'mev-protection',
        definition: 'Countermeasures against Maximal Extractable Value extraction by validators and searchers.',
        longDescription: 'MEV extraction (like front-running and sandwiching) costs users billions. Protective measures include using MEV-Boost, private transaction submission (Flashbots), and commit-reveal schemes to ensure fair transaction ordering.',
        category: 'Security',
        relatedIndustries: ['Trading', 'DEX'],
        relatedLocations: ['Global']
    },
    {
        term: 'Multi-Sig Setup',
        slug: 'multi-sig-setup',
        definition: 'Security configurations requiring multiple independent approvals to authorize high-value transactions.',
        longDescription: 'A 3-of-5 or 5-of-8 multi-sig setup is the minimum standard for institutional treasury management. It ensures that even if a single executive\'s key is compromised, the organization\'s funds remain secure.',
        category: 'Security',
        relatedIndustries: ['Corporate Governance', 'Institutional Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Mnemonic Security',
        slug: 'mnemonic-security',
        definition: 'The defensive protocols for generating, storing, and utilizing seed phrases.',
        longDescription: 'Mnemonic security involves "split-shamir" backups, metal storage (engraved plates), and strictly avoiding digital entry of seed phrases on any internet-connected device. It is the ultimate line of defense for non-custodial assets.',
        category: 'Security',
        relatedIndustries: ['Personal Finance', 'Hardware'],
        relatedLocations: ['Global']
    },
    {
        term: 'Network Hardening',
        slug: 'network-hardening',
        definition: 'The multi-layered process of securing the physical and virtual infrastructure of a blockchain node.',
        longDescription: 'Hardening involves disabling unnecessary ports, implementing intrusion detection systems (IDS), and utilizing specialized OS distributions designed for security-critical operations in untrusted environments.',
        category: 'Infrastructure',
        relatedIndustries: ['Cybersecurity', 'Cloud Computing'],
        relatedLocations: ['Global']
    },
    {
        term: 'NFT Verification',
        slug: 'nft-verification',
        definition: 'Cryptographic proof that an NFT is authentic and originated from the claimed creator or collection.',
        longDescription: 'Verification prevents "copy-mint" fraud. It involves checking collection address signatures and utilizing standards like OpenSea\'s blue checkmark or platform-agnostic metadata verification protocols.',
        category: 'Technology',
        relatedIndustries: ['Art', 'Collectibles'],
        relatedLocations: ['Global']
    },
    {
        term: 'Node Integrity',
        slug: 'node-integrity',
        definition: 'Ensuring that a blockchain node is running un-tampered software and correctly validating ledger state.',
        longDescription: 'Node integrity is maintained through code checksums, secure boot procedures, and continuous monitoring for logic drifts or unauthorized configuration changes that could lead to double-spending or censorship.',
        category: 'Infrastructure',
        relatedIndustries: ['Mining', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'Non-Custodial Safety',
        slug: 'non-custodial-safety',
        definition: 'Best practices for users who maintain full control over their private keys and digital assets.',
        longDescription: 'Safety in a non-custodial environment means being your own bank. This requires rigorous hardware wallet hygiene, cold storage for long-term holds, and a deep understanding of transaction signing risks.',
        category: 'Security',
        relatedIndustries: ['Personal Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Oracle Security',
        slug: 'oracle-security',
        definition: 'Protocols for ensuring the accuracy and resilience of external data feeds into smart contracts.',
        longDescription: 'Oracle security involves utilizing decentralized networks (Chainlink), verifying data sources, and implementing "sanity checks" to prevent protocols from reacting to manipulated or stale data during market shocks.',
        category: 'Security',
        relatedIndustries: ['Data Feeds', 'DeFi'],
        relatedLocations: ['Global']
    },
    {
        term: 'On-Chain Forensics',
        slug: 'on-chain-forensics',
        definition: 'The real-time and retrospective analysis of ledger data to map flow of funds and identify entities.',
        longDescription: 'On-chain forensics uses clustering algorithms to follow transactions through multiple hops. It is the primary tool for identifying money laundering and tracking the aftermath of high-profile protocol exploits.',
        category: 'Forensics',
        relatedIndustries: ['Compliance', 'Law'],
        relatedLocations: ['Global']
    },
    {
        term: 'Open Source Audit',
        slug: 'open-source-audit',
        definition: 'Publicly verifiable security reviews of open-source codebase to ensure transparency and community trust.',
        longDescription: 'Auditing open-source code allows for continuous crowdsourced bug hunting. Institutional projects must balance transparency with the need to protect sensitive business logic through modular architecture.',
        category: 'Security',
        relatedIndustries: ['Software Development'],
        relatedLocations: ['Global']
    },
    {
        term: 'Operating Security',
        slug: 'operating-security',
        definition: 'The broader set of organizational (OpSec) practices designed to protect against social engineering and internal threats.',
        longDescription: 'OpSec includes secure communication (Signal/Hard-keys), limiting public disclosure of holdings, and "need-to-know" access control for administrative keys and infrastructure.',
        category: 'Security',
        relatedIndustries: ['Operations', 'Intelligence'],
        relatedLocations: ['Global']
    },
    {
        term: 'Private Key Safety',
        slug: 'private-key-safety',
        definition: 'The absolute requirement to protect the cryptographic secret that controls a blockchain address.',
        longDescription: 'Private keys are the highest-value data in the Web3 ecosystem. Safety protocols include hardware isolation, zero-knowledge storage, and multi-signature authorization to prevent a single lost key from causing a total loss of funds.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Phishing Prevention',
        slug: 'phishing-prevention',
        definition: 'Tools and education designed to help users identify and avoid fraudulent sites and messages.',
        longDescription: 'Prevention includes browser extensions that block known malicious URLs, hardware 2FA that prevents credential reuse, and strict organizational policies against clicking untrusted links in emails or DMs.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Protocol Audits',
        slug: 'protocol-audits',
        definition: 'Deep technical reviews of a protocol\'s entire architecture, including smart contracts, front-end, and cross-chain logic.',
        longDescription: 'An elite protocol audit ensures that all components work together securely. It includes formal verification of core logic and economic stress testing to identify edge cases that could lead to systemic failure.',
        category: 'Security',
        relatedIndustries: ['DeFi', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'Proof of Reserves',
        slug: 'proof-of-reserves',
        definition: 'A cryptographic method for centralized and decentralized entities to prove they hold the assets they claim.',
        longDescription: 'PoR involves a merkle-tree proof of user balances and cryptographic evidence of address ownership. It is the standard for institutional transparency in both CeFi and DeFi environments.',
        category: 'Compliance',
        relatedIndustries: ['Audit', 'Banking'],
        relatedLocations: ['Global']
    },
    {
        term: 'Re-entrancy Defense',
        slug: 're-entrancy-defense',
        definition: 'Programming patterns designed to prevent a common smart contract exploit where a function is called repeatedly before the first execution is finished.',
        longDescription: 'Elite defense involves using the "Checks-Effects-Interactions" pattern and implementing "Reentrancy Guard" modifiers. This prevented the catastrophic drain seen in the historic DAO exploit.',
        category: 'Development',
        relatedIndustries: ['Software Development'],
        relatedLocations: ['Global']
    },
    {
        term: 'Reactive Security',
        slug: 'reactive-security',
        definition: 'Automated systems that detect and respond to security incidents literally as they are occurring.',
        longDescription: 'Reactive security includes "circuit breakers" and "white-hat bots" that can front-run malicious transactions. In Web3, speed is everything; the difference between recovery and loss is often measured in milliseconds.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Automation'],
        relatedLocations: ['Global']
    },
    {
        term: 'Risk Assessment',
        slug: 'risk-assessment',
        definition: 'The methodical identification and quantification of technical, economic, and legal risks in a blockchain project.',
        longDescription: 'NFTPD conducts institutional-grade risk assessments for venture capital and enterprise partners, covering everything from smart contract logic to governance centralization and regulatory exposure.',
        category: 'Compliance',
        relatedIndustries: ['Consulting', 'Venture Capital'],
        relatedLocations: ['Global']
    },
    {
        term: 'Rug Pull Prevention',
        slug: 'rug-pull-prevention',
        definition: 'Protocols and analysis tools designed to identify and avoid fraudulent projects where developers intend to drain liquidity.',
        longDescription: 'Prevention involves verifying liquidity locks, checking for administrative backdoors, and ensuring that no single entity holds a disproportionate amount of the token supply without long-term vesting.',
        category: 'Security',
        relatedIndustries: ['Investment', 'DeFi'],
        relatedLocations: ['Global']
    },
    {
        term: 'Sidechain Security',
        slug: 'sidechain-security',
        definition: 'The unique security considerations for independent blockchains that run parallel to a main chain.',
        longDescription: 'Sidechain security relies on the independent consensus of the sidechain itself. Elite implementations use decentralized validator sets and robust "check-pointing" onto the main chain to ensure finality.',
        category: 'Infrastructure',
        relatedIndustries: ['Blockchain Scaling'],
        relatedLocations: ['Global']
    },
    {
        term: 'Seed Phrase Safety',
        slug: 'seed-phrase-safety',
        definition: 'Maximum-security protocols for protecting the human-readable representation of a private key.',
        longDescription: 'Safety involves using metal backups, geographically distributed fragments (Shamir\'s Secret Sharing), and strict "no-digital-copy" rules to prevent remote theft.',
        category: 'Security',
        relatedIndustries: ['Personal Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Sybil Resistance',
        slug: 'sybil-resistance',
        definition: 'The property of a system to resist attacks where a single entity creates multiple fake identities to gain control.',
        longDescription: 'Achieved through high "cost of entry" (Proof of Work/Stake) or verified identity systems (Proof of Personhood). Sybil resistance is critical for fair governance and resource distribution.',
        category: 'Security',
        relatedIndustries: ['Governance', 'Economics'],
        relatedLocations: ['Global']
    },
    {
        term: 'TBA Security',
        slug: 'tba-security',
        definition: 'Defensive architecture for Token Bound Accounts (ERC-6551) to prevent unauthorized execution by sub-addresses.',
        longDescription: 'TBA security ensures that only the rightful owner of the parent NFT can authorize actions from the account. It includes handling potential logic loops and ensuring delegated permissions are revocable.',
        category: 'Security',
        relatedIndustries: ['Collectibles', 'Entity Management'],
        relatedLocations: ['Global']
    },
    {
        term: 'Tokenomics Audit',
        slug: 'tokenomics-audit',
        definition: 'Economic analysis of a token\'s supply, demand, and incentive structures to ensure long-term sustainability.',
        longDescription: 'Tokenomics audits identify inflation risks, unsustainable yield models, and potential for market manipulation by large holders (whales).',
        category: 'Economics',
        relatedIndustries: ['Economics', 'Venture Capital'],
        relatedLocations: ['Global']
    },
    {
        term: 'Transaction Verification',
        slug: 'transaction-verification',
        definition: 'The process of confirming that a transaction is technically valid and authorized by the correct parties.',
        longDescription: 'Verification is performed by nodes across the network. Institutional verification also includes internal compliance checks to ensure transaction recipients are not on sanction lists.',
        category: 'Technology',
        relatedIndustries: ['Banking', 'Analysis'],
        relatedLocations: ['Global']
    },
    {
        term: 'Threat Intelligence',
        slug: 'threat-intelligence',
        definition: 'The proactive gathering and sharing of information about emerging attack vectors and malicious actors.',
        longDescription: 'Elite threat intelligence involves monitoring dark web forums, analyzing zero-day exploits, and participating in global security consortiums to identify threats before they reach the protocol.',
        category: 'Security',
        relatedIndustries: ['Intelligence', 'Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Validator Security',
        slug: 'validator-security',
        definition: 'Maximal protection for the infrastructure responsible for block production and consensus participation.',
        longDescription: 'Validator security includes hardware isolation for signing keys, DDOS protection for public endpoints, and redundant "sentry" nodes to hide the validator\'s actual IP address.',
        category: 'Infrastructure',
        relatedIndustries: ['Mining', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'Vulnerability Scan',
        slug: 'vulnerability-scan',
        definition: 'Automated testing of codebase and infrastructure to identify known security weaknesses.',
        longDescription: 'Continuous vulnerability scanning (using tools like Slither or Mythril) is part of a modern CI/CD pipeline, catching low-hanging fruit before it ever reaches production.',
        category: 'Security',
        relatedIndustries: ['Software Development'],
        relatedLocations: ['Global']
    },
    {
        term: 'Vault Technology',
        slug: 'vault-technology',
        definition: 'Advanced smart contract architectures designed for the long-term, secure storage of digital assets.',
        longDescription: 'Vaults include features like "withdrawal delays," "authorized recipient lists," and "emergency pause" functions to prevent the total loss of funds even if an administrative key is lost.',
        category: 'Infrastructure',
        relatedIndustries: ['Custody', 'Banking'],
        relatedLocations: ['Global']
    },
    {
        term: 'VRF Security',
        slug: 'vrf-security',
        definition: 'Ensuring the integrity and unpredictability of Verifiable Random Functions used in on-chain logic.',
        longDescription: 'Randomness is a common target for manipulation. VRF security (e.g., Chainlink VRF) ensures that outcomes like airdrop distribution or game results cannot be predicted or influenced by miners or users.',
        category: 'Cryptography',
        relatedIndustries: ['Gaming', 'Math'],
        relatedLocations: ['Global']
    },
    {
        term: 'Web3 Firewall',
        slug: 'web3-firewall',
        definition: 'Infrastructure-level protection that screens incoming RPC calls and smart contract interactions for malicious patterns.',
        longDescription: 'A Web3 firewall can block "drainer" transactions at the wallet or node level based on a real-time database of malicious contracts and known attack signatures.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'Wallet Hygiene',
        slug: 'wallet-hygiene',
        definition: 'The daily practices and habits that minimize the risk of address compromise and asset loss.',
        longDescription: 'Hygiene includes using separate wallets for interaction vs. storage, revoking unnecessary token approvals (using tools like Revoke.cash), and strictly utilizing hardware wallets for all high-value transactions.',
        category: 'Security',
        relatedIndustries: ['Personal Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'White-Hat Hacking',
        slug: 'white-hat-hacking',
        definition: 'Ethical security research performed with the intention of uncovering vulnerabilities and helping projects fix them.',
        longDescription: 'White-hats are the unsung heroes of Web3. Through bug bounties and coordinated disclosures, they prevent billions in losses by staying one step ahead of "black-hat" malicious actors.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Research'],
        relatedLocations: ['Global']
    },
    {
        term: 'Whale Tracking',
        slug: 'whale-tracking',
        definition: 'The analysis of large-scale asset movements to identify market trends and institutional sentiment.',
        longDescription: 'Whale tracking allows investigators to understand how "smart money" is moving. While often used for trading, it also serves as a security alert for sudden liquidity exits from protocols.',
        category: 'Economics',
        relatedIndustries: ['Trading', 'Analysis'],
        relatedLocations: ['Global']
    },
    {
        term: 'Zero-Knowledge Proofs',
        slug: 'zero-knowledge-proofs',
        definition: 'A cryptographic method by which one party can prove to another that they know a value, without conveying any information apart from the fact that they know that value.',
        longDescription: 'ZKP is the pinnacle of privacy and security in Web3. It enables scalable verification (ZK-Rollups) and private identity (ZK-KYC). For enterprises, it allows proving compliance or data integrity without revealing sensitive business logic.',
        category: 'Cryptography',
        relatedIndustries: ['Cryptography', 'Privacy'],
        relatedLocations: ['Global']
    },
    {
        term: 'Zero-Day Defense',
        slug: 'zero-day-defense',
        definition: 'Protocols for protecting against vulnerabilities that are exploited before developers are aware of them.',
        longDescription: 'Defense involves "defense-in-depth" architecture, where even if one layer is compromised, secondary layers (like air-gapped custody or timelocks) prevent immediate total loss.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'ZK-Rollup Security',
        slug: 'zk-rollup-security',
        definition: 'The cryptographic guarantees and implementation details that ensure the safety of Layer 2 ZK scaling solutions.',
        longDescription: 'Security relies on the mathematical soundness of the proof system (e.g., PLONK or STARK) and the secure setup of "trusted parameters" if required by the protocol.',
        category: 'Security',
        relatedIndustries: ['Infrastructure', 'Math'],
        relatedLocations: ['Global']
    },
    {
        term: 'Zone Isolation',
        slug: 'zone-isolation',
        definition: 'Architectural strategies for compartmentalizing protocol components to prevent "lateral movement" during an exploit.',
        longDescription: 'Isolation ensures that a vulnerability in a peripheral component (like a frontend or a non-critical logic contract) cannot be used to gain access to core treasury or administrative functions.',
        category: 'Security',
        relatedIndustries: ['Infrastructure', 'Cybersecurity'],
        relatedLocations: ['Global']
    },
    {
        term: 'Account Abstraction (ERC-4337)',
        slug: 'account-abstraction',
        definition: 'The process of making blockchain accounts more programmable by moving away from EOAs to smart contract wallets.',
        longDescription: 'ERC-4337 enables features like social recovery, multi-signature transactions, and gas sponsorship without requiring consensus-level changes to the network.',
        category: 'Development',
        relatedIndustries: ['Wallets', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'Diamond Standard (ERC-2535)',
        slug: 'diamond-standard',
        definition: 'A multi-facet proxy pattern that solves the 24KB contract size limit and enables modular upgradeability.',
        longDescription: 'Diamonds allow a single contract to utilize multiple implementation contracts (facets), sharing a single storage space and state.',
        category: 'Development',
        relatedIndustries: ['Architecture', 'Goverance'],
        relatedLocations: ['Global']
    },
    {
        term: 'UUPS (Universal Upgradeable Proxy Standard)',
        slug: 'uups',
        definition: 'An upgradeable proxy pattern where logic resides in the implementation contract, reducing gas costs and improving security.',
        longDescription: 'UUPS (ERC-1822) is generally preferred over transparent proxies because the upgrade logic is part of the implementation, making the proxy itself more gas-efficient.',
        category: 'Development',
        relatedIndustries: ['Security', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'UserOperation (UserOp)',
        slug: 'useroperation',
        definition: 'A pseudo-transaction structure used in ERC-4337 that describes an action to be taken on behalf of a user.',
        longDescription: 'Unlike standard transactions, UserOps are handled by an alternative mempool and processed by Bundlers before being submitted to the EntryPoint contract.',
        category: 'Development',
        relatedIndustries: ['Infrastructure', 'Wallets'],
        relatedLocations: ['Global']
    },
    {
        term: 'Paymaster',
        slug: 'paymaster',
        definition: 'A smart contract in ERC-4337 that can sponsor gas fees for users or allow them to pay in ERC-20 tokens.',
        longDescription: 'Paymasters enable "gasless" user experiences or fee-sponsorship models, critical for institutional onboarding and corporate treasury management.',
        category: 'Development',
        relatedIndustries: ['Infrastructure', 'Finance'],
        relatedLocations: ['Global']
    },
    {
        term: 'Bundler',
        slug: 'bundler',
        definition: 'A specialized node that packages UserOperations from an alternative mempool into standard Ethereum transactions.',
        longDescription: 'Bundlers earn fees for submitting UserOps to the EntryPoint contract and are a key infrastructural component of the Account Abstraction ecosystem.',
        category: 'Infrastructure',
        relatedIndustries: ['Mining', 'Infrastructure'],
        relatedLocations: ['Global']
    },
    {
        term: 'EntryPoint Contract',
        slug: 'entrypoint-contract',
        definition: 'The singleton gateway contract in ERC-4337 that manages the validation and execution of UserOperations.',
        longDescription: 'The EntryPoint is the core of the ERC-4337 stack, ensuring that accounts have enough funds and that signatures are valid before executing the requested action.',
        category: 'Development',
        relatedIndustries: ['Infrastructure', 'Security'],
        relatedLocations: ['Global']
    },
    {
        term: 'MEV-Boost',
        slug: 'mev-boost',
        definition: 'A middleware that allows validators to access a competitive market for building blocks with maximal extractable value.',
        longDescription: 'MEV-Boost separates the roles of block builder and block proposer, allowing for more fair and efficient extraction of value while protecting validators.',
        category: 'Infrastructure',
        relatedIndustries: ['Mining', 'Institutional Trading'],
        relatedLocations: ['Global']
    },
    {
        term: 'TEMPEST',
        slug: 'tempest',
        definition: 'A technical specification for limiting electromagnetic emanations from electronic equipment to prevent eavesdropping.',
        longDescription: 'TEMPEST security is critical for institutional "Safe Rooms" where sensitive signing operations occur, protecting against side-channel electromagnetic monitoring.',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Defense'],
        relatedLocations: ['Global']
    },
    {
        term: 'Faraday Cage',
        slug: 'faraday-cage',
        definition: 'An enclosure used to block electromagnetic fields, critical for physical security in high-stakes signing environments.',
        longDescription: 'Institutions use Faraday cages to isolate signing devices from the internet and electromagnetic eavesdropping, creating an absolute physical "Air-Gap."',
        category: 'Security',
        relatedIndustries: ['Cybersecurity', 'Defense'],
        relatedLocations: ['Global']
    },
    {
        term: 'JIT Liquidity',
        slug: 'jit-liquidity',
        definition: 'Just-In-Time liquidity; an MEV strategy where an attacker adds and removes liquidity in a single block to capture fees from a specific trade.',
        longDescription: 'JIT liquidity targets large incoming trades in concentrated liquidity pools (like Uniswap V3), effectively stealing fees from passive liquidity providers.',
        category: 'Security',
        relatedIndustries: ['Finance', 'Trading'],
        relatedLocations: ['Global']
    },
    {
        term: 'Sandwich Attack',
        slug: 'sandwich-attack',
        definition: 'A front-running strategy where an attacker places orders before and after a user\'s transaction to profit from price slippage.',
        longDescription: 'Sandwiching is the most common form of "Toxic MEV," directly impacting user pricing and protocol economic health.',
        category: 'Security',
        relatedIndustries: ['Finance', 'Trading'],
        relatedLocations: ['Global']
    }
];
