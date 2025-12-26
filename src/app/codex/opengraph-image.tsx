import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'NFTPD Security Codex';
export const size = { width: 2400, height: 1260 };
export const contentType = 'image/png';

export default async function Image() {
    const primaryColor = '#3B82F6'; // NFTPD Blue

    const bgData = readFileSync(join(process.cwd(), 'public', 'og-images', 'tuc_og.jpg'));
    const bgBase64 = `data:image/jpeg;base64,${bgData.toString('base64')}`;

    const medallionData = readFileSync(join(process.cwd(), 'public', 'Medallions', 'NFTPD.png')); // NFTPD Medallion
    const medallionBase64 = `data:image/png;base64,${medallionData.toString('base64')}`;

    return new ImageResponse(
        (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${bgBase64})`,
                backgroundSize: '100% 100%',
                backgroundColor: '#000000',
                position: 'relative',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />

                {/* Left Wing */}
                <div style={{
                    position: 'absolute',
                    left: 200,
                    top: 480,
                    width: 800,
                    height: 320,
                    borderRadius: '40px 0 0 40px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    padding: '40px 280px 40px 40px',
                    boxShadow: 'inset 2px 2px 20px rgba(255,255,255,0.2)',
                }}>
                    <img src={bgBase64} width={2400} height={1260} style={{ position: 'absolute', left: -200, top: -480, width: 2400, height: 1260, objectFit: 'cover', filter: 'blur(30px)', transform: 'scale(1.1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.05)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(255,255,255,0.1)', borderRight: 'none', borderRadius: '40px 0 0 40px' }} />

                    <div style={{ position: 'relative', fontSize: 60, fontWeight: 700, color: 'white', lineHeight: 0.9, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10, textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                        <span>SECURITY</span>
                        <span style={{ color: primaryColor }}>INTELLIGENCE</span>
                        <span>CODEX</span>
                    </div>
                </div>

                {/* Right Wing */}
                <div style={{
                    position: 'absolute',
                    right: 200,
                    top: 480,
                    width: 800,
                    height: 320,
                    borderRadius: '0 40px 40px 0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '40px 40px 40px 280px',
                    boxShadow: 'inset -2px 2px 20px rgba(255,255,255,0.2)',
                }}>
                    <img src={bgBase64} width={2400} height={1260} style={{ position: 'absolute', right: -200, top: -480, width: 2400, height: 1260, objectFit: 'cover', filter: 'blur(30px)', transform: 'scale(1.1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.05)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(255,255,255,0.3)', borderLeft: 'none', borderRadius: '0 40px 40px 0' }} />

                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 10 }}>
                        <div style={{ fontSize: 44, color: 'white', fontWeight: 300, lineHeight: 1.2, display: 'flex', flexDirection: 'column', maxWidth: 500, textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                            <span>Know The Threat.</span>
                            <span>Defend The Net.</span>
                        </div>
                        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12, borderLeft: `6px solid ${primaryColor}`, paddingLeft: 30 }}>
                            <span style={{ fontSize: 24, color: '#D1D5DB', letterSpacing: '0.15em', fontWeight: 500, textShadow: '0 2px 10px black' }}>PROTOCOL</span>
                            <span style={{ fontSize: 24, color: primaryColor, letterSpacing: '0.15em', fontWeight: 700, textShadow: '0 2px 10px black' }}>nftpd.org</span>
                        </div>
                    </div>
                </div>

                {/* Medallion */}
                <div style={{
                    position: 'absolute',
                    left: 850,
                    top: 280,
                    width: 700,
                    height: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 50
                }}>
                    <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `4px solid ${primaryColor}`, boxShadow: `0 0 50px ${primaryColor}60`, display: 'flex' }} />
                    <img src={medallionBase64} width={700} height={700} style={{ position: 'relative', width: 700, height: 700, objectFit: 'contain', padding: 30 }} />
                </div>
            </div>
        ),
        { ...size }
    );
}
