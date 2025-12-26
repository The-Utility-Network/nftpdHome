'use client';

import { useEffect, useRef } from 'react';

export default function ForensicGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;

        const particles: any[] = [];
        const hexStrings: any[] = [];
        const particleCount = 100;
        const hexCount = 30;
        const connectionDistance = 220;

        class HexString {
            x: number;
            y: number;
            speed: number;
            text: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.speed = Math.random() * 0.4 + 0.1;
                this.text = Math.random().toString(16).substring(2, 10).toUpperCase();
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            update() {
                this.y -= this.speed;
                if (this.y < -50) {
                    this.y = height + 50;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.font = '9px monospace';
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            life: number;
            isClusterHead: boolean;
            history: { x: number; y: number }[];

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.size = Math.random() * 2.5 + 1;
                this.life = Math.random() * 0.5 + 0.5;
                this.isClusterHead = Math.random() > 0.94;
                this.history = [];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > 15) this.history.shift();
            }

            draw() {
                if (!ctx) return;

                // Draw Tail
                if (this.history.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(this.history[0].x, this.history[0].y);
                    for (let i = 1; i < this.history.length; i++) {
                        ctx.lineTo(this.history[i].x, this.history[i].y);
                    }
                    ctx.strokeStyle = this.isClusterHead
                        ? `rgba(59, 130, 246, 0.25)`
                        : `rgba(59, 130, 246, 0.12)`;
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.isClusterHead
                    ? `rgba(59, 130, 246, ${this.life})`
                    : `rgba(59, 130, 246, ${this.life * 0.7})`;
                ctx.fill();
            }
        }

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const init = () => {
            resize();
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            for (let i = 0; i < hexCount; i++) {
                hexStrings.push(new HexString());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Background Grid (Subtle)
            const gridSize = 100;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
            ctx.lineWidth = 1;
            for (let x = 0; x < width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Draw Hex Drift
            hexStrings.forEach(h => {
                h.update();
                h.draw();
            });

            // Pulse Effect
            const pulse = (Math.sin(Date.now() / 1500) + 1) / 2;

            // Update and draw particles
            particles.forEach(p => {
                p.update();
                p.draw();

                if (p.isClusterHead) {
                    const glowSize = p.size * (20 + pulse * 10);
                    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
                    gradient.addColorStop(0, `rgba(59, 130, 246, ${0.4 * pulse})`);
                    gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.1 * pulse})`);
                    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
                    ctx.fill();

                    // Active Scanning Ping
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 12 * pulse, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.6 * (1 - pulse)})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.4;
                        ctx.strokeStyle = (p1.isClusterHead || p2.isClusterHead)
                            ? `rgba(100, 180, 255, ${opacity * 1.5})`
                            : `rgba(59, 130, 246, ${opacity})`;

                        ctx.lineWidth = (p1.isClusterHead && p2.isClusterHead) ? 1 : 0.4;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-100"
            />
            {/* Subtle Corner Accents Only */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-32 right-8 w-4 h-4 border-t border-r border-blue-500/30" />
                <div className="absolute bottom-32 left-8 w-4 h-4 border-b border-l border-blue-500/30" />
            </div>
        </>
    );
}
