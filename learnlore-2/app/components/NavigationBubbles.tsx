'use client';

import { usePathname, useRouter } from 'next/navigation';

interface NavigationBubblesProps {
  theme?: 'light' | 'dark' | 'warm' | 'nature' | 'deco' | 'editorial' | 'retro' | 'pastel' | 'industrial';
}

export default function NavigationBubbles({ theme = 'light' }: NavigationBubblesProps) {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [1, 2, 3, 4, 5, 6, 7, 8];
  const current = parseInt(pathname.replace('/', ''), 10);

  const themeStyles: Record<string, { bg: string; active: string; text: string; activeText: string; border: string; container: string }> = {
    light: { bg: 'rgba(255,255,255,0.7)', active: '#1a1a1a', text: '#666', activeText: '#fff', border: 'rgba(0,0,0,0.1)', container: 'rgba(255,255,255,0.5)' },
    dark: { bg: 'rgba(40,40,40,0.8)', active: '#fff', text: '#888', activeText: '#000', border: 'rgba(255,255,255,0.1)', container: 'rgba(0,0,0,0.5)' },
    warm: { bg: 'rgba(245,235,220,0.8)', active: '#5c4033', text: '#8b7355', activeText: '#faf5eb', border: 'rgba(92,64,51,0.15)', container: 'rgba(245,235,220,0.6)' },
    nature: { bg: 'rgba(236,243,234,0.8)', active: '#4a6741', text: '#6b8f63', activeText: '#fff', border: 'rgba(74,103,65,0.15)', container: 'rgba(236,243,234,0.6)' },
    deco: { bg: 'rgba(20,25,45,0.8)', active: '#c9a84c', text: '#6a6e8a', activeText: '#0f1325', border: 'rgba(201,168,76,0.2)', container: 'rgba(15,19,37,0.7)' },
    editorial: { bg: 'rgba(250,248,245,0.8)', active: '#c41e3a', text: '#999', activeText: '#fff', border: 'rgba(0,0,0,0.08)', container: 'rgba(250,248,245,0.6)' },
    retro: { bg: 'rgba(15,15,25,0.8)', active: '#00f0ff', text: '#445', activeText: '#000', border: 'rgba(0,240,255,0.15)', container: 'rgba(10,10,20,0.7)' },
    pastel: { bg: 'rgba(255,255,255,0.6)', active: '#a78bfa', text: '#c4b5d4', activeText: '#fff', border: 'rgba(167,139,250,0.15)', container: 'rgba(245,243,255,0.5)' },
    industrial: { bg: 'rgba(45,45,42,0.8)', active: '#f59e0b', text: '#777', activeText: '#1a1a18', border: 'rgba(245,158,11,0.2)', container: 'rgba(35,35,32,0.7)' },
  };

  const s = themeStyles[theme] || themeStyles.light;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '50px',
        background: s.container,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid ${s.border}`,
      }}
    >
      {routes.map((r) => (
        <button
          key={r}
          onClick={() => router.push(`/${r}`)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: current === r ? 'none' : `1px solid ${s.border}`,
            background: current === r ? s.active : s.bg,
            color: current === r ? s.activeText : s.text,
            fontSize: '13px',
            fontWeight: current === r ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            if (current !== r) {
              (e.target as HTMLButtonElement).style.transform = 'scale(1.15)';
            }
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
