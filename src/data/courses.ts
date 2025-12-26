export interface Lesson {
    id: string;
    title: string;
    content: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    level: 'CADET' | 'OFFICER' | 'DETECTIVE';
    lessons: Lesson[];
}

export const COURSES: Course[] = [
    {
        id: 'web3-foundations-cryptography',
        title: 'Web3 Foundation & Cryptography',
        description: 'University-level deep dive into the mathematical and cryptographic primitives of the blockchain.',
        level: 'CADET',
        lessons: [
            {
                id: 'asymmetric-cryptography-math',
                title: 'Asymmetric Cryptography: The Math of Sovereignty',
                content: `
# Asymmetric Cryptography: The Math of Sovereignty

Web3 security is built on the bedrock of Asymmetric (Public-Key) Cryptography. Unlike symmetric systems where one key performs both encryption and decryption, asymmetric systems use a mathematically linked pair: a **Private Key** and a **Public Key**.

## The Elliptic Curve Digital Signature Algorithm (ECDSA)
Most modern blockchains, including Bitcoin and Ethereum, utilize the **secp256k1** elliptic curve.

### The Equation
The curve follows the Weierstrass form:
\`y^2 = x^3 + 7 \pmod p\`
Where \`p\` is a large prime number:
\`p = 2^{256} - 2^{32} - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1\`

### Key Generation Lifecycle
1. **The Private Key (k):** A 256-bit integer chosen uniformly at random in the range \`[1, n-1]\`, where \`n\` is the order of the curve.
2. **The Public Key (P):** A point on the curve calculated as \`P = k * G\`, where \`G\` is a predefined generator point.
3. **Point Addition & Scalar Multiplication:** The "multiplication" here is not standard integer multiplication but repeated elliptic curve point addition, which is a one-way function.

## Hashing: The Fingerprint of Data
Hashing is a one-way function that maps input data of any size to a fixed-size bit string.

### Keccak-256 vs. SHA-3
Ethereum uses **Keccak-256**. While often confused with SHA-3, Keccak-256 is the version of the algorithm *before* it was finalized by NIST as SHA-3. The padding rules are slightly different, leading to different hash outputs for the same input.

### Properties of Cryptographic Hashes
- **Pre-image Resistance:** Given \`H\`, it's infeasible to find \`m\` such that \`hash(m) = H\`.
- **Second Pre-image Resistance:** Given \`m1\`, it's infeasible to find \`m2\` such that \`hash(m1) = hash(m2)\`.
- **Collision Resistance:** It's infeasible to find *any* two messages \`m1\` and \`m2\` such that \`hash(m1) = hash(m2)\`.

### 🛠 Tactical Activity: ECDSA Key derivation Simulation
**Objective:** Visualize the derivation of a public key from a private key.
1. Use an ECDSA playground tool (like BitAddress or a Python script).
2. Input a private key (hex): \`0x1\`.
3. **Observe:** The public key point \`(x, y)\`.
4. Input a private key: \`0x2\`.
5. **Observe:** Is the new point just "double" the old one in a linear sense? No, the point "jumps" across the curve according to the point-addition rules.
`
            },
            {
                id: 'bip-standards-keys',
                title: 'BIP Standards: Seeds, Mnemonics, and Derivation',
                content: `
# BIP Standards: The Anatomy of a Modern Wallet

The user-friendly wallets we use today are built on several "Bitcoin Improvement Proposals" (BIPs) that have become industry standards for all blockchains.

## BIP-39: Mnemonic Code
BIP-39 defines how to generate a "Mnemonic Sentence" (seed phrase) from random entropy.
1. **Entropy Generation:** 128 to 256 bits of randomness.
2. **Checksum Calculation:** Hash the entropy, take the first \`entropy_length / 32\` bits.
3. **Mapping:** Combine entropy and checksum, split into 11-bit segments. Each segment is an index in the 2048-word dictionary.

## BIP-32: Hierarchical Deterministic (HD) Wallets
BIP-32 allows for the creation of a "tree" of keys from a single seed.
- **Child Key Derivation (CKD):** Deriving a child key from a parent key and an index.
- **Extended Keys (xprv/xpub):** These contain the key plus "Chain Code" (additional entropy), allowing the derivation of entire sub-trees without the master key.

## BIP-44: Multi-Account Hierarchy
Provides a standard path for BIP-32 HD wallets:
\`m / purpose' / coin_type' / account' / change / address_index\`
- **60'** is the coin type for Ethereum.
- **0'** is the coin type for Bitcoin.

### 📋 Security Checklist: Seed Management for Institutions
- [ ] **Entropy Quality:** Was the seed generated using a FIPS-compliant Random Number Generator?
- [ ] **Physical Substrate:** Is the backup on a non-corrosive metal (e.g., 316L Stainless Steel)?
- [ ] **Zero-Digital Policy:** Has the seed ever been entered on a device with a camera, microphone, or internet connection?
- [ ] **Shamir's Secret Sharing (BIP-85):** Are you using advanced derivation to manage multiple seeds from one master?
`
            },
            {
                id: 'p2p-networking-security',
                title: 'P2P Networking & Node Security',
                content: `
# P2P: The Nervous System of Decentralization

Blockchains rely on Peer-to-Peer (P2P) networks to propagate transactions and blocks. Security at the networking layer is often overlooked but critical.

## Gossip Protocols
Nodes use "Gossip" protocols to spread information. A node receives a message and forwards it to a subset of its neighbors.

## Networking Attacks
1. **Eclipse Attacks:** An attacker surrounds a victim node with malicious peers, controlling its view of the network. This can lead to double-spending or preventing the node from seeing legitimate transactions.
2. **Sybil Attacks:** Creating a large number of identities (nodes) to gain a disproportionate influence over the network routing or consensus.
3. **BGP Hijacking:** Attacking the internet routing infrastructure to intercept node traffic.

## Hardening the Node
- **Peering Policy:** Manually whitelisting known "Good" institutional peers.
- **Monitoring:** Watching for anomalies in peer count, latency, and block propagation times.
- **Isolation:** Running nodes in isolated VPCs with restricted ingress/egress.

### 🛠 Tactical Activity: Peer Topology Analysis
**Objective:** Identify signs of a potential Eclipse attack.
1. Log into a Geth or Erigon node console.
2. Run \`admin.peers\`.
3. **Task:** Analyze the geographic and ISP diversity of your peers.
4. **Logic:** If 80% of your peers are coming from a single IP range or AWS region, are you at risk?
`
            },
            {
                id: 'gas-tokenomics-security',
                title: 'Gas Math & Transaction Security',
                content: `
# Gas: The Economic Shield

Gas is the mechanism that prevents "Infinite Loop" attacks (DoS) on the Ethereum Virtual Machine (EVM).

## EIP-1559: The Modern Gas Market
- **Base Fee:** The minimum gas price burned by the network.
- **Priority Fee:** The "Tip" to the validator to ensure inclusion.
- **Gas Limit:** The maximum amount of computation a transaction can perform.

## Gas-Related Vulnerabilities
1. **Out-of-Gas DoS:** A loop that is too large will fail, but if used correctly, it can block specific contract functionalities.
2. **Gas Siphoning:** Malicious contracts that trick users into paying for the contract's internal computations.
3. **Gas Token Exploits:** (Legacy) Using gas tokens to profit from gas price fluctuations while bloating the state.

### 📋 Security Checklist: Transaction Hardening
- [ ] **Strict Limits:** Have you implemented hard caps on gas limits for automated treasury bots?
- [ ] **Slippage Control:** Is your gas price strategy integrated with your trade slippage tolerance?
- [ ] **Private Relays:** Are institutional transfers using Flashbots or other private mempool bypasses to avoid gas-war front-running?
`
            },
            {
                id: 'json-rpc-security-cadet',
                title: 'JSON-RPC: The Interface of Risk',
                content: `
# JSON-RPC: The Gateway to your Wallet

JSON-RPC is the protocol used by wallets (MetaMask), dApps, and nodes to communicate. If this bridge is compromised, your local "Safe" keys can be tricked into signing malicious payloads.

## Key Risks
- **RPC Spoofing:** A malicious RPC provider can return a fake balance or state, leading you to interact with a malicious contract.
- **Data Leaks:** Public RPC nodes often log IP addresses, wallet addresses, and interaction history, shattering user privacy.

## Best Practices
1. **Authenticated RPCs:** Use providers that require API keys and offer allow-listing for IPs and Origins.
2. **Local Nodes:** For institutional volume, running a local "Light Client" or full node is the only way to achieve 100% data sovereignty.

### 🛠 Tactical Activity: RPC Integrity Check
**Objective:** Detect a "Spliced" RPC result.
1. Set your MetaMask to a custom, public RPC provider.
2. **Task:** Compare the block height returned by the public RPC with the height returned by an official explorer (Etherscan).
3. **Question:** If the public RPC is 100 blocks behind, what does that imply for your transaction's success?
`
            }
        ]
    },
    {
        id: 'institutional-architecture-elite',
        title: 'Institutional Security Architecture',
        description: 'Advanced protocols for high-stakes asset management within enterprise ecosystems.',
        level: 'OFFICER',
        lessons: [
            {
                id: 'mpc-threshold-cryptography',
                title: 'MPC & Threshold Cryptography',
                content: `
# MPC: The Future of Institutional Custody

Multi-Party Computation (MPC) is a subfield of cryptography that allows multiple parties to compute a function over their inputs while keeping those inputs private.

## Threshold Signature Schemes (TSS)
TSS is a specific application of MPC for creating digital signatures.
- **Distributed Key Generation (DKG):** Parties collectively generate a public key. The corresponding private key never exists in its entirety in any single location. Instead, each party holds a "Secret Share."
- **Interactive Signing:** To sign a transaction, a threshold of parties (\`t-of-n\`) must perform a multi-round communication protocol.

### MPC vs. Multi-Sig
- **Multi-Sig:** On-chain, multiple signatures. High gas, visible signers, chain-specific.
- **MPC:** Off-chain, single signature. Low gas, private signers, chain-agnostic (works on Bitcoin, Ethereum, Solana).

### 🛠 Tactical Activity: Designing a 3-Tier MPC Policy
**Objective:** Balance speed and security for a corporate treasury.
1. **Tier 1 (Hot):** $0 - $10k. 2-of-3 MPC shards (2 automated, 1 human).
2. **Tier 2 (Warm):** $10k - $1M. 3-of-5 MPC shards (3 humans in different regions).
3. **Tier 3 (Cold):** > $1M. 5-of-9 MPC shards + On-chain Multi-Sig wrap.
4. **Task:** Map out the "Approval Roles" for each tier (Finance, Legal, Ops).
`
            },
            {
                id: 'hsm-fips-standards',
                title: 'HSM: Hardening the Physical Layer',
                content: `
# HSM: The Physical Boundary of Security

Hardware Security Modules (HSMs) are the "Safe" of the digital age. They are specialized hardware designed to provide a "Secure Execution Environment" for cryptographic keys.

## FIPS 140-2 Standards
- **Level 1:** Software-grade security with basic encryption.
- **Level 2:** Requires physical evidence of tampering (e.g., broken seals).
- **Level 3:** Requires physical resistance to tampering and "Zeroization" of keys if intrusion is detected.
- **Level 4:** The highest level. Includes protection against environmental attacks (voltage, temp) and high-level physical penetration.

## Cloud vs. On-Premise HSM
- **Cloud HSM (e.g., AWS CloudHSM):** High availability, low maintenance, but you are trusting the cloud provider's physical security.
- **On-Premise (e.g., nCipher, Thales):** Maximum control, but requires physical data center security and specialized expertise.

### 📋 Security Checklist: HSM Management
- [ ] **Dual Control:** Are at least 2 people required to perform any administrative task on the HSM?
- [ ] **Quorum-based operations:** Are keys backed up using an M-of-N quorum of physical smart cards?
- [ ] **Audit logging:** Are HSM logs sent to an immutable, off-site server?
`
            },
            {
                id: 'zk-proofs-institutional-privacy',
                title: 'ZK-Proofs & Institutional Privacy',
                content: `
# Zero-Knowledge Proofs: Privacy at Scale

Zero-Knowledge Proofs (ZKPs) allow one party (the prover) to prove to another party (the verifier) that a statement is true, without revealing any information beyond the validity of the statement.

## SNARKs vs. STARKs
- **zk-SNARKs (Succinct Non-interactive ARgument of Knowledge):**
    - Small proof size (fast verification).
    - Requires a "Trusted Setup" (a potential security risk if the "toxic waste" entropy is not destroyed).
- **zk-STARKs (Scalable Transparent ARgument of Knowledge):**
    - Larger proof size.
    - No trusted setup required (Transparent).
    - Post-quantum secure (based on hash functions rather than elliptic curves).

## Institutional Applications
- **Private Compliance:** Proving a user is not on a sanctions list without revealing the user's name.
- **Private Liquidity:** Interacting with DeFi protocols without revealing the institution's position size or strategy to front-runners.

### 🛠 Tactical Activity: ZK-Privacy Pool Analysis
**Objective:** Understand how "Anonymity Sets" work.
1. Research a privacy pool like **Privacy Pools v0** or **Tornado Cash**.
2. **Scenario:** 100 people deposit 1 ETH each. 1 person withdraws 1 ETH.
3. **Question:** What is the "Anonymity Set" for that withdrawal? If 50 of those people are known to be malicious, how does that affect the "Cleanliness Score" of the remaining 50?
`
            },
            {
                id: 'sss-math-deep-dive',
                title: "Shamir's Secret Sharing: The Math",
                content: `
# Shamir's Secret Sharing: Interpolating the Secret

SSS is an algorithm that allows a secret to be divided into \`n\` shares, such that any \`t\`-of-\`n\` shares can reconstruct the secret.

## The Polynomial Logic
The secret is encoded as the \`y\`-intercept (\`a_0\`) of a polynomial of degree \`t-1\`.
\`f(x) = a_0 + a_1x + a_2x^2 + ... + a_{t-1}x^{t-1}\`

1. **Share Generation:** Randomly choose coefficients \`a_1, ..., a_{t-1}\`.
2. **Distribution:** Give each participant a point on the curve \`(x_i, f(x_i))\`.
3. **Reconstruction:** Using Lagrange Interpolation, any \`t\` participants can solve for the unknown coefficients and find \`a_0\`.

### 🛠 Tactical Activity: Manual 2-of-3 SSS
**Objective:** Solve for the secret.
1. **Points:** \`(1, 5)\` and \`(2, 8)\`.
2. **Assumption:** This is a 2-of-3 scheme (Degree 1 polynomial: \`y = mx + b\`).
3. **Task:** Calculate \`m\` (slope) and \`b\` (Secret).
4. **Logic:** Why is a single share \`(1, 5)\` completely useless for finding the secret \`b\`?
`
            },
            {
                id: 'institutional-bridge-security',
                title: 'Bridge Architecture & Cross-Chain Risk',
                content: `
# Bridges: The Most Vulnerable Link

Bridges allow assets to move between blockchains. Because they often involve complex off-chain logic and multisig setups, they are the primary target for elite hackers.

## Bridge Types
1. **Lock-and-Mint:** Asset is locked on Source, wrapped token minted on Destination.
2. **Burn-and-Mint:** Asset is burned on Source, native asset minted on Destination.
3. **Liquidity Pools:** Assets are swapped from a pool on Source for an asset from a pool on Destination.

## Common Failures
- **Signature Forgery:** Compromising the validator set (e.g., Ronin Hack).
- **Infinite Mint:** Exploiting the bridge's vault contract to mint wrapped assets without corresponding locked collateral.
- **Oracle Failure:** Tricking the bridge into believing a transaction on the source chain succeeded when it didn't.

### 📋 Security Checklist: Bridge Due Diligence
- [ ] **Validator Set:** Is the validator set decentralized or controlled by the bridge team?
- [ ] **Time-Locks:** Does the bridge have a delay before large withdrawals are finalized?
- [ ] **Audits:** Has the bridge undergone a Tier-1 audit and a public bug bounty?
`
            }
        ]
    },
    {
        id: 'account-abstraction-revolution',
        title: 'ERC-4337: Account Abstraction & Smart Accounts',
        description: 'Mastering the transition from EOAs to programmable smart contract accounts.',
        level: 'OFFICER',
        lessons: [
            {
                id: 'erc-4337-lifecycle',
                title: 'ERC-4337: The End of EOAs',
                content: `
# ERC-4337: Account Abstraction Architecture

Account Abstraction (AA) decouples the object that holds assets (the account) from the object that authorizes transactions (the signer).

## The UserOperation (UserOp)
Instead of a standard transaction, users broadcast a \`UserOperation\`.
- **Sender:** The smart account address.
- **CallData:** The actual instruction to execute.
- **Signature:** A signature that the smart account knows how to validate (can be ECDSA, biometric, or multisig).

## The EntryPoint Contract
A singleton contract that acts as the universal gateway for all UserOps. It handles:
1. **Validation Loop:** Ensuring the account can pay for the operation.
2. **Execution Loop:** Performing the actual call to the target contract.

### 🛠 Tactical Activity: Decoding a UserOp
**Objective:** Identify the components of a smart account interaction.
1. Use a tool like **Jiffyscan** to find a transaction on a chain like Polygon or Base.
2. **Task:** Locate the \`UserOperation\` and identify the \`callData\`.
3. **Analysis:** What contract is the EntryPoint on the chain you chose?
`
            },
            {
                id: 'paymasters-gas-sponsorship',
                title: 'Paymasters: Gas Sponsorship & Strategic Flex',
                content: `
# Paymasters: Programming the Fee Layer

Paymasters allow third parties to sponsor gas fees for users, or allow users to pay gas in ERC-20 tokens (like USDC) instead of the native chain token (ETH).

## Operation Modes
1. **Sponsorship:** An application pays for the user's gas to improve onboarding.
2. **Token-to-Gas:** The Paymaster accepts USDC from the user and pays the EntryPoint in ETH.

## Security Risk: Paymaster Siphoning
If a Paymaster's validation logic is weak, an attacker can craft a transaction that passes validation (so the Paymaster commits to paying) but fails during execution, wasting the Paymaster's funds.

### 📋 Security Checklist: Paymaster Hardening
- [ ] **Sybil Resistance:** Is your gas sponsorship capped per user/IP?
- [ ] **Verified Logic:** Has the Paymaster's \`validatePaymasterUserOp\` been formally verified?
- [ ] **Balance Monitoring:** Do you have alerts for sudden drops in the Paymaster's EntryPoint deposit?
`
            },
            {
                id: 'bundlers-alt-mempool',
                title: 'Bundlers & The Alternative Mempool',
                content: `
# Bundlers: The New Block Producers

Bundlers listen for UserOps in a specialized "Alternative Mempool." They package multiple UserOps into a single standard Ethereum transaction and submit it to the EntryPoint.

## Economic Incentives
Bundlers earn a fee for every UserOp they include. They must be careful to only include UserOps that are guaranteed to pay.

## The Alt-Mempool DoS
Because UserOps are not standard transactions, they can be used to DoS bundlers by constantly changing the account state so that the UserOp becomes invalid. ERC-4337 includes strict "Opacity" rules for validation to prevent this.

### 🛠 Tactical Activity: Bundler Efficiency Calculation
**Objective:** Calculate the profit margin for a bundler.
1. **Inputs:** 5 UserOps, each paying a 0.0001 ETH fee. Gas cost for the bundle transaction is 0.0003 ETH.
2. **Task:** Calculate the net profit for the bundler.
`
            },
            {
                id: 'social-recovery-session-keys',
                title: 'On-chain Social Recovery & Session Keys',
                content: `
# Beyond the Seed Phrase: Social Recovery

Smart accounts enable complex recovery logic that is impossible with standard EOAs.

## Social Recovery
If a user loses their key, a set of "Guardians" (friends, institutional keys, or second devices) can sign a transaction to rotate the account's key.

## Session Keys
Temporary keys with restricted permissions (e.g., "Can only trade USDC for ETH with a limit of $500/day"). This is critical for institutional "Trading Desks" where traders shouldn't have full custody.

### 📋 Security Checklist: Guardian Management
- [ ] **Threshold Logic:** Is the guardian threshold (e.g., 3-of-5) high enough to prevent collusion?
- [ ] **Guardian Hygiene:** Are the guardian keys themselves stored on hardware?
- [ ] **Key Rotation:** Do you have a protocol for regularly testing the recovery process?
`
            }
        ]
    },
    {
        id: 'compliance-forensics-investigation',
        title: 'Global Compliance & Forensic Deep Dive',
        description: 'Advanced protocols for tracking actors, navigating MiCA, and institutional AML.',
        level: 'OFFICER',
        lessons: [
            {
                id: 'global-aml-landscape',
                title: 'Institutional AML & The Travel Rule',
                content: `
# AML: Navigating the Global Regulatory Maze

Anti-Money Laundering (AML) is no longer just for banks. In the Web3 era, every institutional participant must understand the requirements.

## The FATF Travel Rule
The Financial Action Task Force (FATF) Recommendation 16 requires Virtual Asset Service Providers (VASPs) to share "originator" and "beneficiary" information for transactions over a certain threshold.

## MiCA (Markets in Crypto-Assets)
The EU's MiCA regulation is the first comprehensive framework for crypto-assets.
- **Asset Service Providers:** Must be licensed and follow strict prudential requirements.
- **Stablecoins:** Must maintain high-liquidity reserves and undergo regular audits.

## Sanctions Screening
Institutions must screen every address they interact with against lists from:
- **OFAC** (USA)
- **UN Security Council**
- **HM Treasury** (UK)

### 📋 Security Checklist: Institutional Compliance Program
- [ ] **Risk Assessment:** Have you documented the specific risks associated with each protocol you use?
- [ ] **Transaction Monitoring:** Do you have an automated tool (e.g., Chainalysis, Elliptic) to flag high-risk transfers?
- [ ] **Vetted Counterparties:** Are your OTC desks and market makers fully licensed and KYB'd?
`
            },
            {
                id: 'advanced-forensic-heuristics',
                title: 'Advanced Forensic Heuristics & Attribution',
                content: `
# Forensics: Tracking the Invisible

Blockchain forensics is the art and science of identifying the people and organizations behind blockchain addresses.

## Attribution Heuristics
Heuristics are "rules of thumb" used to cluster addresses.
- **Common Input Heuristic:** If addresses A, B, and C are all used as inputs in a single transaction, they are highly likely controlled by the same entity.
- **Change Address Heuristic:** In a UTXO system (like Bitcoin), identifying which output is the "change" returning to the sender.
- **Temporal Heuristic:** Analyzing the time of transactions. For example, if an address always signs transactions during North Korean office hours, it's a strong indicator.

## Behavioral Fingerprinting
Every actor has a unique "fingerprint" in their blockchain interactions:
- Preferred gas prices.
- Specific dApps they interact with.
- Sequence of operations.

### 🛠 Tactical Activity: Graph Analysis Lab
**Objective:** Visualize an institutional cluster.
1. Open a tool like **Arkham Intelligence** or **Breadcrumbs**.
2. Search for a large exchange deposit address.
3. **Task:** Identify 5 "Deposit Wallets" that feed into that exchange address.
4. **Analysis:** Can you find a common source of funding for those 5 wallets? If so, you've found the root of the cluster.
`
            },
            {
                id: 'ai-driven-forensics',
                title: 'The Future: AI-Driven Forensic Analysis',
                content: `
# AI Forensics: Scaling Investigator Intelligence

As the volume of blockchain data grows, human investigators cannot keep up. AI and Machine Learning (ML) are the next frontier.

## Applications of ML in Forensics
1. **Anomaly Detection:** Identifying patterns that deviate from "normal" user behavior, which often indicates a hack or a bot.
2. **Automated Clustering:** Using neural networks to identify related addresses based on 1,000+ subtle variables that a human would miss.
3. **Predictive Analytics:** Assessing the probability that a specific address will be involved in an exploit based on its previous interactions.

## The "Cat and Mouse" Game
As investigators use AI to track attackers, attackers will use AI to "obfuscate" their behavior by creating "noise" in the blockchain data.

### 🛠 Tactical Activity: Anomaly Detection Logic
**Objective:** Design a "Hack Trigger" algorithm.
1. Define "Normal" for a specific lending protocol (e.g., average withdrawal is 1 ETH).
2. **Logic:** What combination of variables would trigger an immediate "Protocol Freeze"?
   - Withdrawal > 500 ETH?
   - Withdrawal from an address with no previous interaction?
   - Gas price 10x higher than market?
`
            },
            {
                id: 'fatf-v4-preview',
                title: 'FATF V4 & The Future of Decentralization',
                content: `
# FATF V4: The Looming Compliance Horizon

The Financial Action Task Force (FATF) is preparing updated guidance that could fundamentally alter the Web3 landscape.

## Focus Areas
1. **Unhosted Wallets:** Proposals to require institutions to "identity-verify" every self-custody wallet they interact with.
2. **DeFi Governance:** Increasing the liability for "Control Persons" (DAO founders and large token holders) for AML failures of the protocol.
3. **P2P Privacy Tech:** High-level pressure to ban or restrict the use of privacy-preserving protocols by institutional actors.

### 🛠 Tactical Activity: Impact Analysis
**Objective:** Assess the cost of "Self-Custody Verification."
1. Imagine every transaction now requires a 10-cent "identity clearing" fee.
2. **Task:** Calculate the revenue loss for a high-frequency trading firm performing 100,000 tx/day.
`
            },
            {
                id: 'case-study-lazarus-attribution',
                title: 'Case Study: The Lazarus Attribution',
                content: `
# Case Study: The North Korean "Cyber-Heist" Machine

The Lazarus Group has stolen billions in crypto-assets. Their success is due to professionalized operations; their failure is due to distinct technical patterns.

## The Ronin Hack Post-Mortem
1. **Compromise:** Targeted spear-phishing of a Sky Mavis engineer via a fake job offer.
2. **Exfiltration:** Funds were moved through intermediate wallets, then into Tornado Cash.
3. **Attribution:** Investigators linked the hack to Lazarus by identifying a "Chain of Custody" error in the gas source for several withdrawal relayers.

### 📋 Security Checklist: Anti-State-Actor Defense
- [ ] **Hardware Only:** Absolutely zero administrative software on computers with internet access.
- [ ] **Dual-Path verification:** Every large transfer verified via a secondary, out-of-band communication channel (e.g., voice/face-to-face).
`
            }
        ]
    },
    {
        id: 'physical-security-opsec',
        title: 'Institutional Physical OpSec & Stealth',
        description: 'Hardening the human and physical layer against high-stakes coercion and interdiction.',
        level: 'OFFICER',
        lessons: [
            {
                id: 'faraday-tempest-shielding',
                title: 'Faraday Cages & TEMPEST Shielding',
                content: `
# Physical Isolation: The Air-Gap is Not Enough

For elite institutions, security must move beyond the digital. If an attacker can see the electromagnetic radiation from your laptop, they can see your private keys.

## TEMPEST Protection
TEMPEST is a NSA specification for preventing eavesdropping through emanations (EMI/RFI).
1. **EMI Shielding:** Using shielded cables and cages to block signals from leaving the signing room.
2. **Acoustic Jamming:** Using white noise to prevent laser-microphone eavesdropping on keyboard clicks (which can be used to reconstruct passwords).

## The Institutional "Safe Room"
A dedicated, windowless room with 100% Faraday shielding where all high-value transactions are signed.

### 📋 Security Checklist: Signing Room Audit
- [ ] **No Mobile Devices:** All phones left in biometric lockers outside the perimeter.
- [ ] **Isolated Power:** Does the signing room use a dedicated UPS to prevent power-line side-channel attacks?
- [ ] **Visual Privacy:** Are there 0 cameras or glass windows with a line-of-sight to any screens?
`
            },
            {
                id: 'hardware-supply-chain-interdiction',
                title: 'Hardware Supply Chain & Interdiction',
                content: `
# The Poisoned Apple: Supply Chain Attacks

If an attacker intercepts your hardware wallet during shipping, they can replace its firmware or physical chip with a "Backdoored" version.

## Mitigation Strategies
1. **Glitter-Paint Seals:** High-resolution photos of unique glitter patterns on seals to detect opening.
2. **Direct Procurement:** Buying hardware directly from the factory, bypassing third-party distributors.
3. **Firmware Verification:** Using a separate, air-gapped machine to verify the hash of the device's firmware before the first use.

### 🛠 Tactical Activity: Seal Verification Lab
**Objective:** Spot a tampered seal.
1. Research "Tamper-Evident Bag" failures on YouTube.
2. **Analysis:** Why is a "Void" sticker not enough for an institutional-grade security protocol?
`
            }
        ]
    },
    {
        id: 'threat-detection-ir',
        title: 'Forensics & Incident Response',
        description: 'Elite technical protocols for mempool monitoring, attribution, and crisis recovery.',
        level: 'DETECTIVE',
        lessons: [
            {
                id: 'mempool-sentinel-ops',
                title: 'Mempool Sentinels & Anti-Drainer Ops',
                content: `
# Mempool Defenses: The Front-Line

In Web3, the first 12 seconds (one block) are the difference between safety and insolvency.

## Mempool Monitoring
A "Sentinel" is a high-speed bot that monitors the public mempool for transactions targeting your sensitive contracts.

### Defensive Strategies
1. **The "Rescue" Front-run:** If a malicious transaction is detected, the sentinel broadcasts a "Safety Withdrawal" with a higher gas price (Priority Fee) to move the funds to a secure "Safe Room" before the attacker's transaction can execute.
2. **Automated Pausing:** Many modern protocols include a "Pause" function. A sentinel can automatically call this function if it detects an exploit signature.

## Dealing with Private RPCs
Sophisticated attackers use private RPCs (like Flashbots) to bypass the public mempool, making their transactions invisible until they are already included in a block. In this case, defense must move to the **Post-Execution** phase (blocking further transfers).

### 🛠 Tactical Activity: Simulated Rescue Mission
**Objective:** Calculate the window for success.
1. **Scenario:** Attacker broadcasts a 100 ETH drain transaction with a 50 Gwei priority fee.
2. **Task:** If you broadcast a "Pause" transaction with 250 Gwei, what is the probability of winning the block? 
3. **Variable:** How does "Flashbots" (private relay) change this calculation for the attacker?
`
            },
            {
                id: 'supply-chain-security-web3',
                title: 'Web3 Supply Chain & Infrastructure Hacks',
                content: `
# Supply Chain: The Hidden Attack Surface

A smart contract might be audited and perfect, but if the website's frontend or the backend infrastructure is compromised, the project is at risk.

## Infamous Attack Vectors
1. **NPM Package Poisoning:** Attackers gain control of a popular library (like \`ethers.js\` or a UI component) and inject code that steals private keys from the user's browser.
2. **DNS Hijacking:** Redirecting a protocol's website (\`app.uniswap.org\`) to a malicious clone that looks identical.
3. **JSON-RPC Exploits:** If an institution uses an insecure RPC provider, an attacker can "spoof" transaction results, leading the institution to believe a transaction succeeded when it failed.

## Defensive Posture
- **Code Signing:** Verifying the integrity of every dependency.
- **Cold Frontends:** Hosting the frontend on IPFS/Arweave with an ENS link to prevent DNS hijacking.
- **Private RPC Nodes:** Institutions must run their own nodes rather than relying on public shared endpoints.

### 📋 Security Checklist: Infrastructure Hardening
- [ ] **Dependency Audit:** Are you using \`npm audit\` or \`Snyk\` for every build?
- [ ] **MFA Everywhere:** Is Mandatory Multi-Factor Authentication (Hardware keys) enabled for GitHub, AWS, and Cloudflare?
- [ ] **Browser Security:** Do your developers use "Clean" machines for signing transactions?
`
            },
            {
                id: 'crisis-communications-ir',
                title: 'Crisis Communications & Recovery',
                content: `
# Crisis Management: Institutional IR

When a breach occurs, the technical response is only one part of the solution. Public perception and legal preservation are equally critical.

## The "War Room" Protocol
1. **Detection & Triage:** Identify the scope and the vector.
2. **Containment:** Stop the bleeding (Pause contracts, Notify Exchanges).
3. **Eradication:** Patch the vulnerability.
4. **Recovery:** Restore services and assets.
5. **Post-Mortem:** Learn and share.

## Legal Evidence Preservation
Forensics investigators must maintain a "Chain of Custody" for digital evidence.
- **Log Integrity:** Immutable snapshots of server and node logs.
- **Attestation:** Cryptographically proving that the evidence captured has not been altered.

### 📋 Security Checklist: The First 60 Minutes
- [ ] **T+0:** Sentinel Alarm. Establish the War Room (Secure Signal/Telegram).
- [ ] **T+10:** Execute "Emergency Action" (e.g., Pause bridge).
- [ ] **T+20:** Contact Binance, Coinbase, Circle compliance teams to freeze tainted funds.
- [ ] **T+45:** Release the first "Public Advisory" to prevent further user loss.
`
            },
            {
                id: 'cloud-security-web3-stack',
                title: 'AWS & Cloud Security for Web3',
                content: `
# Hardening the Cloud: Beyond the Chain

Most Web3 infrastructure (RPCs, indexing, frontends) runs on AWS, Azure, or GCP. An insecure bucket can compromise your protocol just as easily as a reentrancy bug.

## Critical Misconfigurations
1. **IAM Over-Privilege:** A single API key with "Admin" access used for a read-only script.
2. **Unencrypted Buckets:** Storing private logs or (unbelievably) shard-shares in a public S3 bucket.
3. **Missing Logs:** Failing to enable VPC Flow Logs or CloudTrail, leaving no trail for investigators.

### 🛠 Tactical Activity: IAM Policy Audit
**Objective:** Write a "Least Privilege" policy.
1. **Task:** Write an AWS IAM JSON policy for a server that ONLY needs to upload logs to one specific S3 bucket.
`
            },
            {
                id: 'hardware-forensics-investigation',
                title: 'Hardware Forensics & Theft Recovery',
                content: `
# Hardware Forensics: Physical Extraction

Physical theft of a computer or phone can lead to key extraction if the OS is not properly hardened.

## The "Rubber Hose" Cryptanalysis
- **Encryption at Rest:** Using LUKS (Linux) or FileVault (macOS) to ensure data is useless without a password.
- **Cold Boot Attacks:** Extracting keys from RAM immediately after a computer is shut down.

### 📋 Security Checklist: The "Mobile Office" Policy
- [ ] **Auto-Wipe:** Does the device wipe itself after 10 failed login attempts?
- [ ] **External Storage:** Are all sensitive files stored on an encrypted, portable hardware key (e.g., Nitrokey)?
`
            }
        ]
    },
    {
        id: 'advanced-proxy-architectures',
        title: 'Advanced Proxy & Upgradeability Standards',
        description: 'Elite technical patterns for multi-faceted contract architecture and storage management.',
        level: 'DETECTIVE',
        lessons: [
            {
                id: 'erc-2535-diamond-standard',
                title: 'ERC-2535 Diamond Standard: Multi-Facet Architectures',
                content: `
# ERC-2535: Breaking the 24KB Contract Limit

The Diamond Standard (ERC-2535) allows a single contract (the Diamond) to use multiple "Facets" (implementation contracts) to provide its functionality.

## The Core Mechanism: \`delegatecall\`
The Diamond contract maintains a mapping of function selectors to Facet addresses. When a function is called, it performs a \`delegatecall\` to the appropriate Facet.

## Key Advantages
- **Infinite Modularity:** No more 24KB code size limit.
- **Granular Upgradeability:** You can upgrade a single function (selector) without redeploying the entire contract.
- **Shared Storage:** All Facets read and write to the Diamond's storage.

## Security Warning: Storage Collisions
Because all Facets share the same storage space, standard variable declarations (\`uint256 value;\`) are extremely dangerous. You must use **Diamond Storage** patterns.

### 🛠 Tactical Activity: Diamond Selector Mapping
**Objective:** Design a Facet distribution for a complex DAO.
1. **Facet A:** Voting & Delegation.
2. **Facet B:** Treasury & Yield.
3. **Facet C:** Metadata & URI.
4. **Task:** List at least 3 function selectors that would belong to Facet B.
5. **Logic:** Why is keeping "Facet C" separate from "Facet B" better for security?
`
            },
            {
                id: 'uups-vs-transparent-proxies',
                title: 'UUPS: Universal Upgradeable Proxy Patterns',
                content: `
# UUPS vs. Transparent Proxies

Standard proxies (Transparent) put the upgrade logic in the proxy itself. UUPS (Universal Upgradeable Proxy Standard) puts the upgrade logic in the **Implementation** contract.

## Why UUPS?
- **Gas Efficiency:** The proxy is significantly cheaper to interact with because it doesn't need to check if the caller is an admin on every transaction.
- **Future-Proofing:** If you want to remove upgradeability later, you simply deploy an implementation *without* the upgrade function.

## The "Brick" Risk
If you deploy a UUPS implementation that is missing the \`upgradeTo\` function, your contract becomes permanently non-upgradeable (Bricked).

### 📋 Security Checklist: UUPS Implementation
- [ ] **Inheritance:** Does your implementation inherit from OpenZeppelin's \`UUPSUpgradeable\`?
- [ ] **Auth Check:** Is your \`_authorizeUpgrade\` function properly restricted to \`onlyOwner\` or a multisig?
- [ ] **Storage Layout:** Have you checked for storage collisions using a tool like \`hardhat-upgrades\`?
`
            },
            {
                id: 'diamond-storage-patterns',
                title: 'Diamond Storage & Storage Collision Mitigation',
                content: `
# Diamond Storage: Mastering the Slots

In proxy-based architectures, your variables don't live at fixed offsets. They live at specific, calculated hashes to avoid collisions.

## The "Random Slot" Strategy
Instead of starting at slot 0, you store a struct at a slot calculated as:
\`keccak256("org.nftpd.diamond.storage.main")\`

\`\`\`solidity
struct MainStorage {
    uint256 totalAssets;
    mapping(address => uint256) balances;
}

function diamondStorage() internal pure returns (MainStorage storage ds) {
    bytes32 slot = MAIN_STORAGE_POSITION;
    assembly { ds.slot := slot }
}
\`\`\`

### 🛠 Tactical Activity: Collision Detection
**Objective:** Identify a potential "Ghost" variable.
1. **Scenario:** Facet X uses slot \`0x1\`. Facet Y uses slot \`0x1\` via standard declaration.
2. **Task:** What happens to Facet X's data when Facet Y writes to its internal variable?
3. **Question:** How does the Diamond Storage pattern make this scenario impossible?
`
            }
        ]
    },
    {
        id: 'auditing-formal-verification-mastery',
        title: 'Elite Auditing & Formal Verification',
        description: 'Advanced methodologies for mathematical proof of protocol correctness and economic resiliency.',
        level: 'DETECTIVE',
        lessons: [
            {
                id: 'v3-amm-calculus',
                title: 'AMM Calculus & Concentrated Liquidity',
                content: `
# AMM V3: The Logic of Concentrated Liquidity

Uniswap V3 and its clones introduced "Concentrated Liquidity," which significantly increased the complexity of auditing liquidity pools.

## The Math of Ticks
Liquidity is not distributed along a global curve but in discrete "Ticks."
- **Price Calculation:** \`Price = 1.0001^{tick}\`
- **Audit Vector:** Tick-crossing logic. When a large swap crosses multiple ticks, the accounting for fees and liquidity must be perfect. Even a 1-wei rounding error can lead to a "Drain-by-a-thousand-cuts" attack.

## Precision Loss Vulnerabilities
Smart contracts use fixed-point math. When multiplying large numbers and then dividing, the order of operations matters.
- **Rule:** Multiply before you divide.
- **Risk:** If the scale is too small, precision loss can be exploited in high-volume protocols.

### 🛠 Tactical Activity: Precision Gap Analysis
**Objective:** audit a "Fixed-Point" library.
1. Inspect the math of a simple yield aggregator.
2. **Scenario:** A user deposits 1.000000000000000001 ETH.
3. **Task:** Calculate if the contract's rounding "favors the protocol" or "favors the user."
4. **Conclusion:** If it favors the user even by 1 wei, how can an attacker use 1,000,000 transactions to drain the treasury?
`
            },
            {
                id: 'dao-governance-logic-hacks',
                title: 'DAO Governance: Logic & Game Theory Hacks',
                content: `
# DAO Security: Beyond the Code

DAO governance contracts (like GovernorAlpha/Bravo) are the targets of a unique class of attacks that combine code exploits with economic game theory.

## Governance Attack Vectors
1. **Flash Loan Takeover:** An attacker borrows a massive amount of tokens via flash loan, uses them to vote for a malicious proposal, and then repays the loan in the same block.
2. **Veto-Extortion:** Using enough voting power to block all legitimate proposals unless a "Ransom" is paid to the attacker.
3. **Proposal Shadowing:** Hiding a malicious function call inside a complex, multi-action proposal that looks benign to a casual observer.

## Institutional Defenses
- **Timestamped Voting:** Voting power is calculated based on snapshots of balances from several blocks in the past (prevents flash loans).
- **Governance Delays:** A mandatory "Timelock" (e.g., 48 hours) between a proposal passing and being executed.

### 🛠 Tactical Activity: Defensive Governance Design
**Objective:** Design a "Hostile Takeover" prevention system.
1. Define the parameters for your DAO:
   - **Quorum:** Minimum votes needed.
   - **Threshold:** Percentage of 'Yes' votes needed.
   - **Timelock:** Wait time before execution.
2. **Scenario:** An attacker gains 20% of the token supply.
3. **Task:** Which parameter is the most effective defense against them passing a "Withdraw All Funds" proposal?
`
            },
            {
                id: 'formal-verification-advanced',
                title: 'Formal Verification: Proving Invariants',
                content: `
# Formal Verification: The Mathematical Prover

Formal Verification (FV) is the process of using mathematical proofs to ensure that a contract behaves *exactly* as intended for all possible inputs.

## Writing the "Spec"
In FV, we don't write "Tests"; we write "Rules" or "Invariants."
- **Solvency Invariant:** \`totalSurplus() >= 0\`
- **Access Control Invariant:** \`onlyOwner()\` can call sensitive functions.

## Tools of the Trade
- **Certora Prover:** The industry standard. Uses the SMV (Symbolic Model Verifier) technique to solve mathematical constraints.
- **HEVM:** A symbolic execution engine for the EVM.
- **Foundry Invariant Testing:** A bridge between standard fuzzing and formal verification.

### 📋 Security Checklist: The "Zero-Error" Audit Workflow
- [ ] **State Machine Proof:** Have you proven that the contract cannot reach a "Stuck" state?
- [ ] **Economic Proof:** Have you proven that no combination of transactions (no matter how complex) leads to this rule being false?
- [ ] **Boundary Proof:** Have you checked all \`uint256\` max/min boundaries?
`
            },
            {
                id: 'read-only-reentrancy-v2',
                title: 'Advanced Vector: Cross-Contract Read-Only Reentrancy',
                content: `
# Read-Only Reentrancy: The Silent Killer

Standard reentrancy is well-known and easily prevented with a "Reentrancy Guard." **Read-Only Reentrancy** is far more dangerous because it targets "View" functions.

## The Mechanism
1. **Contract A (Lending):** Performs a withdrawal. It burns the user's tokens but has *not yet* updated its internal "Total Liquidity" tracker.
2. **Contract B (Attacker):** Re-enters a *different* protocol (Contract C) that uses Contract A as a price oracle.
3. **Contract C (Insurance/Stablecoin):** Calls Contract A's \`getPrice()\` (a view function). Because Contract A's state is inconsistent, the price is wrong.
4. **The Exploit:** The attacker uses the wrong price to mint massive amounts of stablecoins or clear an insurance claim.

## Defensive Posture
- **Global Reentrancy Guards:** Using a shared "Lock" across all related contracts.
- **Oracle Delays:** Ensuring price data is only pulled from "Safe" checkpoints that are finalized at the end of a transaction.

### 🛠 Tactical Activity: Vulnerability Identification
**Objective:** Find the "Inconsistency Window."
1. Look at the code for a Liquidity Pool's \`burn()\` function.
2. **Task:** Identify the exact line where tokens are burnt and the line where the price is updated.
3. **Logic:** Is there a external function call between these two lines? If so, you've found a reentrancy window.
`
            },
            {
                id: 'oracle-laggardness-attacks',
                title: 'Oracle Laggardness & Stale Price Risks',
                content: `
# Oracle Security: The Feed is the Reality

Oracles provide the "Reality" that smart contracts live by. If that reality is out of sync with the true market, the contract can be drained.

## Stale Price Exploits
If an oracle doesn't update for several blocks during a massive price crash, an attacker can "Buy" an asset at the stale (old, higher) price and immediately liquidate it.

### 🛠 Tactical Activity: Calculating the "Crash Window"
**Objective:** Identify the risk for a specific collateral.
1. Research the "Heartbeat" (Update frequency) of the Chainlink ETH/USD oracle.
2. **Task:** If ETH drops 10% in 5 minutes, and the heartbeat is 20 minutes, what is the dollar value of the profit an attacker can extract if they have $1M in capital?
`
            },
            {
                id: 'yield-aggregator-logic-hacks',
                title: 'Yield Aggregator Architecture & Logic Hacks',
                content: `
# Yield Aggregators: Compounding the Risk

Yield aggregators (Yearn, Beefy) move funds between different lending protocols to maximize APR. This introduces "Compounded Protocol Risk."

## Attack: The "Strategy Re-entry"
If the underlying lending protocol has a reentrancy bug, the aggregator can be used to multiply the impact of that bug.

### 📋 Security Checklist: Aggregator Audit
- [ ] **Strategy isolation:** Can one failed strategy drain the entire vault?
- [ ] **Total Value Cap:** Is the vault size capped to mitigate systemic risk?
`
            }
        ]
    },
    {
        id: 'advanced-defi-primitives-mev',
        title: 'Advanced DeFi Primitives & MEV Security',
        description: 'Elite technical deep dive into market dynamics, capital efficiency, and extractable value.',
        level: 'DETECTIVE',
        lessons: [
            {
                id: 'mev-boost-institutional',
                title: 'MEV-Boost & Institutional Order Flow',
                content: `
# MEV: The Invisible Tax on Ethereum

Maximal Extractable Value (MEV) is the profit that validators can extract by including, excluding, or reordering transactions in a block.

## The Searcher-Relayer Ecosystem
- **Searchers:** Bots that find MEV opportunities (arbitrage, liquidations).
- **Bundlers:** Searchers group their transactions into bundles.
- **Relayers:** Neutral parties that pass bundles to validators via **MEV-Boost**.

## Toxic MEV: Sandwiching
Attacker detects a user trade, front-runs with a buy, user trades at a worse price, attacker back-runs with a sell. This is a direct theft from the user.

### 🛠 Tactical Activity: Sandwich Impact Analysis
**Objective:** Calculate the "Slippage Loss" of a $1M swap.
1. **Scenario:** A user swaps 1M USDC for ETH with a 0.5% slippage limit.
2. **Task:** Calculate the maximum profit an MEV bot can extract by "Sandwiching" this trade to the edge of the slippage limit.
`
            },
            {
                id: 'flash-loans-auditing',
                title: 'Flash Loans: Auditing for Capital Efficiency',
                content: `
# Flash Loans: Zero-Collateral Attacks

Flash loans allow anyone to borrow millions of dollars in capital for the duration of a single transaction, as long as the loan is repaid by the end of that transaction.

## The Auditor's Perspective
Flash loans don't *create* vulnerabilities, but they make exploit-scale infinitely larger.
- **Old World:** Attacker needs $100M to crash a price oracle.
- **New World:** Attacker needs $10 gas to borrow $100M and crash the oracle.

### 📋 Security Checklist: Flash Loan Resiliency
- [ ] **Oracle Strength:** Is your price oracle resistant to sudden, single-transaction volume changes?
- [ ] **Liquidity Check:** Do you have "Circuit Breakers" that trigger if 50% of protocol liquidity moves in one block?
`
            },
            {
                id: 'liquidity-provisioning-security',
                title: 'Liquidity Provisioning Security',
                content: `
# LP Security: Protecting the Provider

Providing liquidity in AMMs (Automated Market Makers) exposes the provider to unique risks beyond just "Impermanent Loss."

## Ambient vs. Concentrated Liquidity
- **Ambient:** Liquidity spread across the entire curve (\`x * y = k\`).
- **Concentrated:** Liquidity provided in narrow "Ticks" (Uniswap V3).

## Risk: JIT Liquidity (Just-In-Time)
An MEV searcher detects a large incoming swap. They "Inject" massive liquidity in the exact tick range of the swap just before it executes and "Remove" it immediately after. This steals the swap fees from the long-term LP providers.

### 🛠 Tactical Activity: JIT Detection
**Objective:** Identify a JIT signature on-chain.
1. Open Etherscan and look at a high-volume Uniswap V3 pool.
2. **Task:** Find a block where the same address \`mint()\` and \`burn()\` liquidity in the same transaction.
`
            }
        ]
    }
];
