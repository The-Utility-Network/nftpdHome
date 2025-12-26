export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
}

export interface Quiz {
    passingScore: number; // Percentage required to pass (e.g., 80)
    questions: QuizQuestion[];
}

export interface CourseQuiz {
    courseId: string;
    quiz: Quiz;
}

export const COURSE_QUIZZES: CourseQuiz[] = [
    // ========================================
    // COURSE 1: Web3 Foundation & Cryptography
    // ========================================
    {
        courseId: 'web3-foundations-cryptography',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'wfc-1',
                    question: 'In the secp256k1 elliptic curve used by Bitcoin and Ethereum, how is the public key derived from the private key?',
                    options: [
                        'By adding the private key to the generator point G',
                        'By performing scalar multiplication: P = k * G, where k is the private key',
                        'By hashing the private key with SHA-256',
                        'By XORing the private key with the curve parameters'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'wfc-2',
                    question: 'What is the critical difference between Keccak-256 (used by Ethereum) and the finalized SHA-3 standard?',
                    options: [
                        'Keccak-256 uses a larger block size',
                        'SHA-3 was finalized with different padding rules than the original Keccak submission',
                        'Keccak-256 is quantum-resistant while SHA-3 is not',
                        'There is no difference; they are identical algorithms'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'wfc-3',
                    question: 'In a BIP-44 derivation path "m/44\'/60\'/0\'/0/0", what does the "60\'" specifically represent?',
                    options: [
                        'The account index',
                        'The address index',
                        'The coin type (Ethereum)',
                        'The change address indicator'
                    ],
                    correctAnswer: 2
                },
                {
                    id: 'wfc-4',
                    question: 'An Eclipse Attack on a blockchain node primarily works by:',
                    options: [
                        'Overwhelming the node with computational puzzles',
                        'Surrounding the victim node with attacker-controlled peers to manipulate its view of the network',
                        'Exploiting vulnerabilities in the nodes cryptographic libraries',
                        'Injecting malicious code into the nodes firmware'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'wfc-5',
                    question: 'Under EIP-1559, which component of the gas fee is permanently destroyed (burned)?',
                    options: [
                        'The Priority Fee (Tip)',
                        'The Gas Limit',
                        'The Base Fee',
                        'The entire transaction fee'
                    ],
                    correctAnswer: 2
                },
                {
                    id: 'wfc-6',
                    question: 'What is "Pre-image Resistance" in the context of cryptographic hash functions?',
                    options: [
                        'The inability to find two different inputs that produce the same hash',
                        'Given a hash H, the infeasibility of finding any message m such that hash(m) = H',
                        'The property that small changes in input produce large changes in output',
                        'The fixed-size output regardless of input size'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'wfc-7',
                    question: 'Why is using a public RPC provider considered a privacy risk for institutional users?',
                    options: [
                        'Public RPCs have slower transaction speeds',
                        'Public RPCs often log IP addresses, wallet addresses, and interaction history',
                        'Public RPCs charge higher fees',
                        'Public RPCs cannot handle high transaction volumes'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    },
    // ========================================
    // COURSE 2: Institutional Security Architecture
    // ========================================
    {
        courseId: 'institutional-architecture-elite',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'isa-1',
                    question: 'What is the primary advantage of MPC (Multi-Party Computation) over traditional on-chain Multi-Sig?',
                    options: [
                        'MPC requires more signers for better security',
                        'MPC produces a single signature and is chain-agnostic, while Multi-Sig is on-chain, visible, and chain-specific',
                        'MPC is faster to execute on-chain',
                        'MPC does not require any communication between parties'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'isa-2',
                    question: 'What is the minimum FIPS 140-2 level that requires physical resistance to tampering and "Zeroization" of keys upon intrusion detection?',
                    options: [
                        'Level 1',
                        'Level 2',
                        'Level 3',
                        'Level 4'
                    ],
                    correctAnswer: 2
                },
                {
                    id: 'isa-3',
                    question: 'In zk-SNARKs, what is the "Trusted Setup" and why is it a potential security concern?',
                    options: [
                        'A one-time key generation ceremony; if the "toxic waste" entropy is not destroyed, proofs can be forged',
                        'A recurring verification process that adds latency',
                        'An on-chain registration of all verifiers',
                        'A standardized testing protocol for proof validity'
                    ],
                    correctAnswer: 0
                },
                {
                    id: 'isa-4',
                    question: 'In Shamirs Secret Sharing, why is a single share completely useless for reconstructing the secret?',
                    options: [
                        'Because individual shares are encrypted',
                        'Because sharing requires a t-of-n threshold; fewer than t shares provide zero information about the polynomial constant (the secret)',
                        'Because shares automatically expire after generation',
                        'Because the secret is stored in a separate database'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'isa-5',
                    question: 'The Ronin Bridge hack was primarily caused by:',
                    options: [
                        'A smart contract reentrancy vulnerability',
                        'Compromising the validator set through social engineering (spear-phishing)',
                        'An exploit in the underlying blockchain consensus',
                        'A flash loan attack on the bridge liquidity pool'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'isa-6',
                    question: 'What distinguishes zk-STARKs from zk-SNARKs in terms of post-quantum security?',
                    options: [
                        'STARKs are smaller and faster than SNARKs',
                        'STARKs require no trusted setup and are based on hash functions (post-quantum secure), while SNARKs rely on elliptic curves',
                        'SNARKs are post-quantum secure but STARKs are not',
                        'There is no difference in their quantum resistance'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    },
    // ========================================
    // COURSE 3: ERC-4337 Account Abstraction
    // ========================================
    {
        courseId: 'account-abstraction-revolution',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'aa-1',
                    question: 'In ERC-4337, what is the role of the EntryPoint contract?',
                    options: [
                        'It stores user private keys securely',
                        'It acts as a universal singleton gateway that validates and executes UserOperations',
                        'It manages the gas price oracle for the network',
                        'It distributes block rewards to validators'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'aa-2',
                    question: 'What is "Paymaster Siphoning" in the context of Account Abstraction?',
                    options: [
                        'A method to efficiently batch gas payments',
                        'An attack where crafted transactions pass Paymaster validation but fail during execution, draining the Paymasters funds',
                        'A technique to reduce gas costs for sponsored transactions',
                        'A protocol for distributing gas refunds to users'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'aa-3',
                    question: 'Why do ERC-4337 UserOperations require strict "Opacity" rules during validation?',
                    options: [
                        'To improve transaction privacy',
                        'To prevent attackers from invalidating UserOps by changing account state, which would DoS bundlers',
                        'To reduce the computational cost of signature verification',
                        'To comply with regulatory requirements'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'aa-4',
                    question: 'What is the primary purpose of "Session Keys" in smart account architectures?',
                    options: [
                        'To permanently store user authentication credentials',
                        'To provide temporary keys with restricted permissions (e.g., trading limits) for specific use cases like institutional trading desks',
                        'To encrypt all outgoing transactions',
                        'To generate new account addresses for each session'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'aa-5',
                    question: 'In Social Recovery for smart accounts, what happens if a user loses their primary key?',
                    options: [
                        'The account is permanently lost',
                        'A set of pre-defined "Guardians" can sign a transaction to rotate the accounts controlling key',
                        'The protocol automatically generates a new key pair',
                        'Users must re-deploy a new smart account'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    },
    // ========================================
    // COURSE 4: Global Compliance & Forensics
    // ========================================
    {
        courseId: 'compliance-forensics-investigation',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'cf-1',
                    question: 'The FATF "Travel Rule" requires Virtual Asset Service Providers (VASPs) to:',
                    options: [
                        'Limit transaction sizes to a maximum threshold',
                        'Share originator and beneficiary information for transactions above a certain value',
                        'Report all transactions to a central blockchain authority',
                        'Use only privacy-preserving cryptocurrencies'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'cf-2',
                    question: 'The "Common Input Heuristic" in blockchain forensics suggests that:',
                    options: [
                        'Addresses that receive funds at the same time are related',
                        'If multiple addresses are used as inputs in a single transaction, they are likely controlled by the same entity',
                        'All outputs to the same address are from the same sender',
                        'Transactions with similar gas prices are from the same source'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'cf-3',
                    question: 'Under the proposed FATF V4 guidance, "Control Persons" (such as DAO founders and large token holders) may face:',
                    options: [
                        'Reduced liability for protocol operations',
                        'Tax exemptions for governance participation',
                        'Increased liability for AML failures of the protocol they influence',
                        'Automatic regulatory approval for new token launches'
                    ],
                    correctAnswer: 2
                },
                {
                    id: 'cf-4',
                    question: 'In the Ronin Hack forensic analysis, investigators attributed the attack to the Lazarus Group primarily by:',
                    options: [
                        'Analyzing the smart contract vulnerabilities',
                        'Identifying a "Chain of Custody" error in the gas source for withdrawal relayers',
                        'Tracing the stolen funds to a known North Korean exchange',
                        'Decrypting communications from the attackers'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'cf-5',
                    question: 'What is "Behavioral Fingerprinting" in blockchain forensics?',
                    options: [
                        'Using biometric data to verify transaction signers',
                        'Identifying actors by unique patterns in their blockchain interactions (gas prices, dApp usage, operation sequences)',
                        'Encrypting transaction data with unique identifiers',
                        'Registering all wallet addresses with a central authority'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'cf-6',
                    question: 'Under MiCA (Markets in Crypto-Assets), stablecoin issuers must:',
                    options: [
                        'Hold reserves only in cryptocurrency',
                        'Maintain high-liquidity reserves and undergo regular audits',
                        'Limit their market cap to prevent systemic risk',
                        'Operate exclusively within the European Union'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    },
    // ========================================
    // COURSE 5: Physical OpSec & Stealth
    // ========================================
    {
        courseId: 'physical-security-opsec',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'ps-1',
                    question: 'What does "TEMPEST Protection" specifically guard against?',
                    options: [
                        'Physical theft of hardware devices',
                        'Eavesdropping through electromagnetic or RF emanations from computing equipment',
                        'Network-based intrusion attempts',
                        'Social engineering attacks on personnel'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'ps-2',
                    question: 'Why is a Faraday Cage insufficient alone for elite institutional security?',
                    options: [
                        'Faraday Cages are too expensive for practical use',
                        'Attackers can still use acoustic methods (laser microphones on keyboard clicks) to extract data',
                        'Faraday Cages block all wireless communication needed for operations',
                        'Faraday Cages only work for specific frequency ranges'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'ps-3',
                    question: 'When mitigating hardware supply chain attacks on devices like hardware wallets, "Glitter-Paint Seals" are used for:',
                    options: [
                        'Aesthetic branding of institutional devices',
                        'Creating unique, high-resolution patterns that reveal if a package has been opened during transit',
                        'Protecting devices from electromagnetic interference',
                        'Waterproofing the hardware for secure storage'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'ps-4',
                    question: 'For an institutional "Signing Room," which of the following is NOT a recommended security measure?',
                    options: [
                        'All mobile devices left in biometric lockers outside the perimeter',
                        'Isolated power supply (dedicated UPS) to prevent power-line side-channel attacks',
                        'Glass windows for natural lighting and visual comfort',
                        'Zero cameras with line-of-sight to any screens'
                    ],
                    correctAnswer: 2
                },
                {
                    id: 'ps-5',
                    question: 'What is "firmware verification" in the context of hardware wallet security?',
                    options: [
                        'Checking the warranty status of the device',
                        'Using a separate, air-gapped machine to verify the hash of the devices firmware matches the manufacturers published hash before first use',
                        'Updating the firmware to the latest version',
                        'Registering the device with the manufacturer'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    },
    // ========================================
    // COURSE 6: Forensics & Incident Response
    // ========================================
    {
        courseId: 'threat-detection-ir',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'tdir-1',
                    question: 'A "Mempool Sentinel" is a defensive tool that:',
                    options: [
                        'Stores transaction data for historical analysis',
                        'Monitors the public mempool for malicious transactions targeting your contracts and can execute defensive front-runs',
                        'Validates blocks before they are added to the chain',
                        'Manages gas price optimization for outgoing transactions'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'tdir-2',
                    question: 'If an attacker uses a private RPC like Flashbots to submit an exploit, how does this change the defensive strategy?',
                    options: [
                        'Defense becomes easier because private RPCs are slower',
                        'Mempool monitoring becomes useless; defense must shift to post-execution blocking (e.g., preventing further transfers)',
                        'Private RPCs automatically notify the protocol of malicious intent',
                        'There is no change; mempool sentinels can still detect the transaction'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'tdir-3',
                    question: 'In Web3 supply chain attacks, "NPM Package Poisoning" refers to:',
                    options: [
                        'Corrupting the npm package manager software',
                        'An attacker gaining control of a popular library and injecting code that steals private keys from users browsers',
                        'Publishing fake packages with similar names to popular ones',
                        'Intentionally slowing down package downloads'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'tdir-4',
                    question: 'During the "First 60 Minutes" of an institutional crisis response, what is typically the action at T+20?',
                    options: [
                        'Release the first public advisory',
                        'Contact exchange compliance teams (Binance, Coinbase, Circle) to freeze tainted funds',
                        'Establish the War Room communication channel',
                        'Complete a full forensic analysis'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'tdir-5',
                    question: 'What is "Cold Boot Attack" in the context of hardware forensics?',
                    options: [
                        'Hacking a computer by exposing it to extreme cold temperatures',
                        'Extracting encryption keys from RAM immediately after a computer is shut down, before the memory fully clears',
                        'Breaking into a system before it has finished booting up',
                        'Deploying malware that activates on system restart'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'tdir-6',
                    question: 'Hosting a dApp frontend on IPFS/Arweave with an ENS link primarily mitigates which attack vector?',
                    options: [
                        'Smart contract reentrancy attacks',
                        'DNS Hijacking attacks that redirect users to malicious clones',
                        'Private key extraction from user wallets',
                        'Flash loan attacks on the protocols liquidity'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    },
    // ========================================
    // COURSE 7: Advanced Proxy Architectures
    // ========================================
    {
        courseId: 'advanced-proxy-architectures',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'apa-1',
                    question: 'The ERC-2535 Diamond Standard solves which fundamental limitation of smart contracts?',
                    options: [
                        'Transaction throughput limits',
                        'The 24KB contract code size limit by allowing multiple "Facets" to share a single storage context',
                        'Gas cost optimization for complex operations',
                        'Cross-chain interoperability'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'apa-2',
                    question: 'In UUPS (Universal Upgradeable Proxy Standard), where is the upgrade logic located?',
                    options: [
                        'In the proxy contract itself',
                        'In a separate governance contract',
                        'In the implementation contract',
                        'In an off-chain upgrade service'
                    ],
                    correctAnswer: 2
                },
                {
                    id: 'apa-3',
                    question: 'What is the "Brick" risk specific to UUPS proxies?',
                    options: [
                        'Gas costs becoming too high for operation',
                        'If an implementation is deployed without the upgradeTo function, the contract becomes permanently non-upgradeable',
                        'Storage collisions corrupting existing data',
                        'Unauthorized parties gaining admin access'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'apa-4',
                    question: 'Diamond Storage patterns use a "random slot" strategy by storing structs at slots calculated from:',
                    options: [
                        'Sequential integers starting from slot 0',
                        'The hash of a unique namespace string (e.g., keccak256("org.nftpd.diamond.storage.main"))',
                        'The block number at deployment time',
                        'Random values generated at runtime'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'apa-5',
                    question: 'If Facet X and Facet Y in a Diamond both try to use storage slot 0x1 through standard variable declarations, what happens?',
                    options: [
                        'The Diamond automatically resolves the conflict',
                        'A compilation error prevents deployment',
                        'Writing to one facets variable will overwrite the others data (storage collision)',
                        'Both facets share the data cooperatively'
                    ],
                    correctAnswer: 2
                }
            ]
        }
    },
    // ========================================
    // COURSE 8: Elite Auditing & Formal Verification
    // ========================================
    {
        courseId: 'auditing-formal-verification-mastery',
        quiz: {
            passingScore: 80,
            questions: [
                {
                    id: 'afv-1',
                    question: 'In Uniswap V3 Concentrated Liquidity, liquidity is distributed in discrete "Ticks." How is the price at a given tick calculated?',
                    options: [
                        'Price = tick * 1.0001',
                        'Price = 1.0001^tick',
                        'Price = tick / totalLiquidity',
                        'Price = sqrt(tick)'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'afv-2',
                    question: 'What is "Formal Verification" in the context of smart contract auditing?',
                    options: [
                        'Manual code review by multiple auditors',
                        'Using mathematical proofs to verify that code behaves according to its specification for ALL possible inputs',
                        'Running automated test suites with high coverage',
                        'Checking code against a style guide'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'afv-3',
                    question: 'Why is auditing Concentrated Liquidity AMMs more complex than traditional AMMs?',
                    options: [
                        'They use different programming languages',
                        'Liquidity is no longer distributed along a global curve but in discrete ticks, creating complex edge cases at tick boundaries',
                        'They require more gas for operations',
                        'They are deployed across multiple chains'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'afv-4',
                    question: 'In formal verification, an "invariant" is:',
                    options: [
                        'A variable that changes with each transaction',
                        'A property that must ALWAYS be true, regardless of the contract state or inputs',
                        'A temporary value used during computation',
                        'An external data feed for price information'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 'afv-5',
                    question: '"Symbolic Execution" in smart contract analysis works by:',
                    options: [
                        'Using random values to test edge cases',
                        'Executing the code with abstract "symbolic" values instead of concrete inputs to explore all possible execution paths',
                        'Compiling the contract to a simpler representation',
                        'Measuring gas consumption for different inputs'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    }
];

// Helper function to get quiz for a specific course
export function getQuizForCourse(courseId: string): Quiz | undefined {
    const courseQuiz = COURSE_QUIZZES.find(cq => cq.courseId === courseId);
    return courseQuiz?.quiz;
}
