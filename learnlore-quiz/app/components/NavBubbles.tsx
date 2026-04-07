'use client';

import Link from 'next/link';

interface NavBubblesProps {
  current: number;
  variant?: 'light' | 'dark' | 'neon' | 'gold' | 'industrial' | 'deco' | 'candy' | 'editorial';
}

const variantStyles: Record<string, { bg: string; activeBg: string; text: string; activeText: string; border: string; shadow: string }> = {
  light: {
    bg: 'rgba(255,255,255,0.7)',
    activeBg: '#6366f1',
    text: '#64748b',
    activeText: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    shadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  dark: {
    bg: 'rgba(30,30,30,0.8)',
    activeBg: '#fff',
    text: '#888',
    activeText: '#000',
    border: '1px solid rgba(255,255,255,0.1)',
    shadow: '0 4px 24px rgba(0,0,0,0.4)',
  },
  neon: {
    bg: 'rgba(10,10,30,0.85)',
    activeBg: '#0ff',
    text: '#0ff8',
    activeText: '#000',
    border: '1px solid #0ff3',
    shadow: '0 0 30px rgba(0,255,255,0.2)',
  },
  gold: {
    bg: 'rgba(15,23,42,0.9)',
    activeBg: '#d4a853',
    text: '#d4a85388',
    activeText: '#0f172a',
    border: '1px solid #d4a85333',
    shadow: '0 4px 30px rgba(212,168,83,0.15)',
  },
  industrial: {
    bg: 'rgba(30,42,34,0.9)',
    activeBg: '#22c55e',
    text: '#8aaa8e',
    activeText: '#000',
    border: '2px solid #3d5a42',
    shadow: '0 4px 20px rgba(34,197,94,0.2)',
  },
  deco: {
    bg: 'rgba(5,30,25,0.9)',
    activeBg: '#c9a84c',
    text: '#c9a84c88',
    activeText: '#0a1f1a',
    border: '1px solid #c9a84c44',
    shadow: '0 4px 30px rgba(201,168,76,0.15)',
  },
  candy: {
    bg: 'rgba(255,255,255,0.85)',
    activeBg: '#f472b6',
    text: '#a78bfa',
    activeText: '#fff',
    border: '2px solid #f0abfc44',
    shadow: '0 8px 32px rgba(244,114,182,0.2)',
  },
  editorial: {
    bg: 'rgba(250,245,235,0.95)',
    activeBg: '#1a1a1a',
    text: '#999',
    activeText: '#faf5eb',
    border: '1px solid #ddd',
    shadow: '0 2px 16px rgba(0,0,0,0.06)',
  },
};

export default function NavBubbles({ current, variant = 'light' }: NavBubblesProps) {
  const s = variantStyles[variant] || variantStyles.light;
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 8,
        padding: '8px 16px',
        borderRadius: 50,
        background: s.bg,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: s.border,
        boxShadow: s.shadow,
        zIndex: 9999,
        alignItems: 'center',
      }}
    >
      {pages.map((n) => {
        const isActive = n === current;
        return (
          <Link
            key={n}
            href={`/${n}`}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? s.activeText : s.text,
              background: isActive ? s.activeBg : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {n}
          </Link>
        );
      })}
    </div>
  );
}
