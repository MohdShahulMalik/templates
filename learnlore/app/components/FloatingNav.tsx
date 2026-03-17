'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FloatingNavProps {
  currentRoute: number;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  hoverBg?: string;
  borderColor?: string;
  fontFamily?: string;
}

export default function FloatingNav({
  currentRoute,
  bgColor = 'rgba(0,0,0,0.85)',
  textColor = '#ffffff',
  accentColor = '#ff4444',
  hoverBg = 'rgba(255,255,255,0.1)',
  borderColor = 'rgba(255,255,255,0.1)',
  fontFamily = 'system-ui, sans-serif',
}: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        fontFamily,
      }}
    >
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '58px',
            right: '0',
            background: bgColor,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: '8px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            border: `1px solid ${borderColor}`,
            animation: 'scaleIn 0.2s ease-out',
            minWidth: '140px',
          }}
        >
          {routes.map((r) => (
            <Link
              key={r}
              href={`/${r}`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: r === currentRoute ? '700' : '500',
                color: r === currentRoute ? accentColor : textColor,
                background: r === currentRoute ? hoverBg : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
                border: r === currentRoute ? `1.5px solid ${accentColor}` : '1.5px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (r !== currentRoute) {
                  (e.target as HTMLElement).style.background = hoverBg;
                }
              }}
              onMouseLeave={(e) => {
                if (r !== currentRoute) {
                  (e.target as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              {r}
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          background: bgColor,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1.5px solid ${borderColor}`,
          color: accentColor,
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          transition: 'all 0.2s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
        aria-label="Navigate designs"
      >
        {isOpen ? '✕' : currentRoute}
      </button>
    </div>
  );
}
