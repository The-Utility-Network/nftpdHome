'use client';

import { motion } from 'framer-motion';

interface ChapterArtDocsProps {
    chapterNumber: number;
    color: string;
}

export default function ChapterArtDocs({ chapterNumber, color }: ChapterArtDocsProps) {
    // Different geometric patterns for each chapter
    const renderArt = () => {
        switch (chapterNumber) {
            case 1: // Introduction - Shield/Protection motif
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-auto">
                        <defs>
                            <linearGradient id={`grad1-${chapterNumber}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                                <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        {/* Shield shape */}
                        <motion.path
                            d="M200 20 L320 60 L320 120 Q320 180 200 190 Q80 180 80 120 L80 60 Z"
                            fill={`url(#grad1-${chapterNumber})`}
                            stroke={color}
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2 }}
                        />
                        {/* Inner lines */}
                        <motion.line x1="200" y1="60" x2="200" y2="150" stroke={color} strokeWidth="1" opacity="0.5"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
                        <motion.line x1="140" y1="80" x2="260" y2="80" stroke={color} strokeWidth="1" opacity="0.5"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
                        {/* Pulse circle */}
                        <motion.circle cx="200" cy="110" r="20" fill="none" stroke={color} strokeWidth="1"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }} />
                    </svg>
                );

            case 2: // Protocol - Network/Nodes
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-auto">
                        <defs>
                            <filter id="glow2">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Network nodes */}
                        {[
                            { x: 100, y: 60 }, { x: 200, y: 40 }, { x: 300, y: 60 },
                            { x: 80, y: 120 }, { x: 200, y: 100 }, { x: 320, y: 120 },
                            { x: 140, y: 160 }, { x: 260, y: 160 }
                        ].map((pos, i) => (
                            <motion.circle
                                key={i}
                                cx={pos.x}
                                cy={pos.y}
                                r="8"
                                fill={color}
                                filter="url(#glow2)"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                        {/* Connecting lines */}
                        {[
                            'M100,60 L200,40', 'M200,40 L300,60', 'M100,60 L80,120',
                            'M200,40 L200,100', 'M300,60 L320,120', 'M80,120 L140,160',
                            'M200,100 L140,160', 'M200,100 L260,160', 'M320,120 L260,160',
                            'M100,60 L200,100', 'M300,60 L200,100'
                        ].map((d, i) => (
                            <motion.path
                                key={i}
                                d={d}
                                stroke={color}
                                strokeWidth="1"
                                fill="none"
                                opacity="0.4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                            />
                        ))}
                    </svg>
                );

            case 3: // Why NFTs - Unique fingerprint/identity
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-auto">
                        {/* Fingerprint lines */}
                        {[...Array(8)].map((_, i) => (
                            <motion.ellipse
                                key={i}
                                cx="200"
                                cy="100"
                                rx={30 + i * 15}
                                ry={20 + i * 10}
                                fill="none"
                                stroke={color}
                                strokeWidth="1.5"
                                opacity={0.3 + (i * 0.08)}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: i * 0.15, duration: 1 }}
                            />
                        ))}
                        {/* Central unique marker */}
                        <motion.circle
                            cx="200"
                            cy="100"
                            r="15"
                            fill={color}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2, type: 'spring' }}
                        />
                        <motion.text
                            x="200"
                            y="105"
                            textAnchor="middle"
                            fill="black"
                            fontSize="12"
                            fontWeight="bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                        >
                            ID
                        </motion.text>
                    </svg>
                );

            case 4: // Implementation - Roadmap/Progress
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-auto">
                        {/* Progress line */}
                        <motion.line
                            x1="60" y1="100" x2="340" y2="100"
                            stroke={color}
                            strokeWidth="2"
                            opacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />
                        {/* Milestone circles */}
                        {[
                            { x: 100, label: 'I', complete: true },
                            { x: 180, label: 'II', complete: true },
                            { x: 260, label: 'III', complete: false },
                            { x: 340, label: 'IV', complete: false }
                        ].map((m, i) => (
                            <g key={i}>
                                <motion.circle
                                    cx={m.x}
                                    cy="100"
                                    r="20"
                                    fill={m.complete ? color : 'transparent'}
                                    stroke={color}
                                    strokeWidth="2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.2 }}
                                />
                                <motion.text
                                    x={m.x}
                                    y="105"
                                    textAnchor="middle"
                                    fill={m.complete ? 'black' : color}
                                    fontSize="12"
                                    fontWeight="bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 + i * 0.2 }}
                                >
                                    {m.label}
                                </motion.text>
                            </g>
                        ))}
                        {/* Progress fill */}
                        <motion.line
                            x1="60" y1="100" x2="180" y2="100"
                            stroke={color}
                            strokeWidth="4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        />
                    </svg>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-12 p-8 rounded-2xl"
            style={{ backgroundColor: `${color}10` }}>
            {renderArt()}
        </div>
    );
}
