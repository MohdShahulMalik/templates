'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is quantum entanglement?', tag: 'Quantum Physics', type: 'Concept', back: 'When two particles become correlated so that the quantum state of one instantly influences the other, regardless of distance.', explanation: 'Measuring one entangled particle immediately determines the state of its partner. Einstein called it "spooky action at a distance."', hook: 'Magic dice: roll one in Tokyo, the other in New York always shows the matching face — instantly.', source: 'Quantum Mechanics 401 — Chapter 12' },
  { id: 2, front: 'State Heisenberg\'s Uncertainty Principle.', tag: 'Quantum Physics', type: 'Formula', back: 'ΔxΔp ≥ ℏ/2. You cannot simultaneously know both the exact position and momentum of a particle.', explanation: 'This is not about measurement limitations — it\'s a fundamental property of quantum systems. The more precisely you know position, the less you can know about momentum.', hook: 'The universe itself doesn\'t know both values at once. It\'s not that we\'re bad at measuring — reality is genuinely fuzzy.', source: 'Modern Physics — Heisenberg (1927), Lecture Notes' },
  { id: 3, front: 'What is dark matter?', tag: 'Astrophysics', type: 'Definition', back: 'Invisible matter that doesn\'t emit, absorb, or reflect light but exerts gravitational force. Makes up ~27% of the universe.', explanation: 'Detected only through gravitational effects on visible matter. Galaxy rotation curves don\'t match predictions without it.', hook: 'Imagine a carousel spinning so fast the horses should fly off — dark matter is the invisible chain holding them on.', source: 'Cosmology 201 — Dark Matter Unit, Page 89' },
  { id: 4, front: 'Explain the Doppler effect.', tag: 'Wave Physics', type: 'Scenario', back: 'The change in frequency/wavelength of a wave as the source and observer move relative to each other.', explanation: 'Approaching objects: higher frequency (blueshift). Receding objects: lower frequency (redshift). Used in radar, medical imaging, and measuring cosmic expansion.', hook: 'The ambulance siren goes EEEeeee as it passes — higher coming toward you, lower going away.', source: 'Physics Fundamentals — Waves, Section 7.3' },
  { id: 5, front: 'What is Schrödinger\'s Cat?', tag: 'Quantum Physics', type: 'Scenario', back: 'A thought experiment: a cat in a sealed box with a quantum-triggered poison is simultaneously alive and dead until observed.', explanation: 'Illustrates the absurdity of applying quantum superposition to macroscopic objects. Not meant as a real proposal — it\'s a critique of the Copenhagen interpretation.', hook: 'The cat is a protest sign: quantum rules make no sense at our scale. Schrödinger wasn\'t a cat person, he was making a point.', source: 'Quantum Theory — Schrödinger (1935), Study Guide' },
];

export default function Design6() {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [grades, setGrades] = useState<Record<number, string>>({});
  const [sessionComplete, setSessionComplete] = useState(false);

  const card = CARDS[cardIndex];
  const progress = ((cardIndex + (grades[card?.id] ? 1 : 0)) / CARDS.length) * 100;

  const handleGrade = useCallback((grade: string) => {
    setGrades(prev => ({ ...prev, [card.id]: grade }));
    setFlipped(false);
    setShowDetails(false);
    if (cardIndex < CARDS.length - 1) {
      setTimeout(() => setCardIndex(i => i + 1), 250);
    } else {
      setSessionComplete(true);
    }
  }, [card, cardIndex]);

  const gradeOptions = [
    { label: 'Forgot', color: '#ff2266', glow: '#ff226630' },
    { label: 'Hard', color: '#ff9900', glow: '#ff990030' },
    { label: 'Good', color: '#00f0ff', glow: '#00f0ff30' },
    { label: 'Easy', color: '#00ff88', glow: '#00ff8830' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap');
        .retro-page {
          font-family: 'IBM Plex Mono', monospace;
          background: #08080f;
          color: #b0b8c8;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .retro-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.008) 2px, rgba(0,240,255,0.008) 4px),
            radial-gradient(ellipse at 30% 20%, rgba(0,240,255,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(255,34,102,0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
        .retro-heading { font-family: 'Orbitron', sans-serif; letter-spacing: 2px; }
        .retro-card {
          background: rgba(15,15,25,0.9);
          border: 1px solid rgba(0,240,255,0.15);
          border-radius: 2px;
          position: relative;
          backdrop-filter: blur(4px);
        }
        .retro-card::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          border-radius: 2px;
          background: linear-gradient(135deg, rgba(0,240,255,0.1), transparent, rgba(255,34,102,0.05));
          z-index: -1;
        }
        .retro-glow-cyan { text-shadow: 0 0 8px rgba(0,240,255,0.4); color: #00f0ff; }
        .retro-glow-pink { text-shadow: 0 0 8px rgba(255,34,102,0.4); color: #ff2266; }
        .retro-btn {
          font-family: 'IBM Plex Mono', monospace;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 11px;
          position: relative;
        }
        .retro-btn:hover {
          box-shadow: 0 0 16px var(--btn-glow, rgba(0,240,255,0.3));
        }
        .retro-tag {
          border: 1px solid rgba(0,240,255,0.2);
          padding: 2px 10px;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00f0ff;
        }
        .retro-fade { animation: retroFade 0.3s ease; }
        @keyframes retroFade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .scanline {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          pointer-events: none;
          z-index: 9998;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.05) 3px,
            rgba(0,0,0,0.05) 6px
          );
          opacity: 0.3;
        }
      `}</style>
      <div className="retro-page">
        <div className="scanline" />

        {/* Header */}
        <header style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,240,255,0.1)', background: 'rgba(8,8,15,0.95)', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="retro-heading retro-glow-cyan" style={{ fontSize: '12px' }}>PHYS_401</span>
            <span className="retro-tag">⟐ REVIEW</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '10px', color: '#445', letterSpacing: '1px' }}>{`[${String(cardIndex + 1).padStart(2, '0')}/${String(CARDS.length).padStart(2, '0')}]`}</span>
            <div style={{ width: '140px', height: '3px', background: 'rgba(0,240,255,0.08)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, #00f0ff, #ff2266)', width: `${progress}%`, transition: 'width 0.4s ease', boxShadow: '0 0 8px rgba(0,240,255,0.4)' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '9px', color: '#334', letterSpacing: '1.5px' }}>07:14 | 76% CONF | STREAK:4</span>
            <button className="retro-btn" style={{ padding: '3px 12px', background: 'transparent', color: '#445', borderColor: 'rgba(0,240,255,0.15)' }}>EXIT</button>
          </div>
        </header>

        {/* Main */}
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 120px', gap: '28px', position: 'relative', zIndex: 1 }}>
          {/* Left Rail */}
          <aside style={{ width: '180px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: '#334', marginBottom: '6px' }}>QUEUE_MAP</div>
            {CARDS.map((c, i) => (
              <div key={c.id} onClick={() => { if (!grades[c.id]) { setCardIndex(i); setFlipped(false); setShowDetails(false); } }} style={{ padding: '6px 10px', fontSize: '10px', color: i === cardIndex ? '#00f0ff' : '#334', borderLeft: i === cardIndex ? '2px solid #00f0ff' : '2px solid #1a1a28', cursor: 'pointer', background: i === cardIndex ? 'rgba(0,240,255,0.03)' : 'transparent', transition: 'all 0.2s ease' }}>
                {String(i + 1).padStart(2, '0')} {c.tag.split(' ')[0]}
                {grades[c.id] && <span style={{ marginLeft: '4px', color: gradeOptions.find(g => g.label === grades[c.id])?.color, fontSize: '8px' }}>●</span>}
              </div>
            ))}
          </aside>

          {/* Center */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="retro-card retro-fade" style={{ padding: '48px', width: '100%', maxWidth: '640px', textAlign: 'center' }}>
                <div className="retro-heading retro-glow-cyan" style={{ fontSize: '16px', marginBottom: '16px' }}>SESSION_COMPLETE</div>
                <div style={{ fontSize: '12px', color: '#445', lineHeight: 2 }}>
                  cards: {CARDS.length} | weak: quantum_physics | next: tmw_09:00
                </div>
                <button className="retro-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ marginTop: '20px', padding: '8px 28px', background: 'rgba(0,240,255,0.08)', color: '#00f0ff', borderColor: 'rgba(0,240,255,0.3)', '--btn-glow': 'rgba(0,240,255,0.3)' } as React.CSSProperties}>RESTART</button>
              </div>
            ) : (
              <>
                <div className="retro-card retro-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ padding: '40px 48px', width: '100%', maxWidth: '640px', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                        <span className="retro-tag">{card.tag}</span>
                        <span className="retro-tag" style={{ borderColor: 'rgba(255,34,102,0.2)', color: '#ff2266' }}>{card.type}</span>
                      </div>
                      <div className="retro-heading" style={{ fontSize: '18px', lineHeight: 1.7, color: '#dde0ea', flex: 1, display: 'flex', alignItems: 'center' }}>
                        {card.front}
                      </div>
                      <div style={{ marginTop: '24px', fontSize: '9px', color: '#223', letterSpacing: '2px' }}>▶ REVEAL</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                        <span className="retro-tag">{card.tag}</span>
                        <span className="retro-tag" style={{ borderColor: 'rgba(0,255,136,0.2)', color: '#00ff88' }}>ANS</span>
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.7, color: '#dde0ea', marginBottom: '14px' }}>{card.back}</div>
                      <div style={{ fontSize: '13px', color: '#667', lineHeight: 1.8, marginBottom: '12px' }}>{card.explanation}</div>
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '9px', color: '#445', letterSpacing: '2px', fontFamily: 'IBM Plex Mono, monospace', padding: 0 }}>
                        {showDetails ? '[-] COLLAPSE' : '[+] HOOK_&_SRC'}
                      </button>
                      {showDetails && (
                        <div className="retro-fade" style={{ marginTop: '12px', padding: '14px', border: '1px solid rgba(0,240,255,0.06)', background: 'rgba(0,240,255,0.02)' }}>
                          <div style={{ fontSize: '12px', color: '#00f0ff', marginBottom: '8px', opacity: 0.7 }}>&gt; {card.hook}</div>
                          <div style={{ fontSize: '10px', color: '#334' }}>src: {card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
                  {!flipped ? (
                    <>
                      <button className="retro-btn" onClick={() => setFlipped(true)} style={{ padding: '10px 36px', background: 'rgba(0,240,255,0.08)', color: '#00f0ff', borderColor: 'rgba(0,240,255,0.3)', '--btn-glow': 'rgba(0,240,255,0.3)' } as React.CSSProperties}>REVEAL</button>
                      <button className="retro-btn" style={{ padding: '10px 16px', background: 'transparent', color: '#334', borderColor: 'rgba(255,255,255,0.05)', '--btn-glow': 'rgba(255,255,255,0.05)' } as React.CSSProperties}>SKIP</button>
                    </>
                  ) : (
                    gradeOptions.map(g => (
                      <button key={g.label} className="retro-btn" onClick={() => handleGrade(g.label)} style={{ padding: '10px 22px', background: `${g.color}0a`, color: g.color, borderColor: `${g.color}40`, '--btn-glow': g.glow } as React.CSSProperties}>
                        {g.label.toUpperCase()}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Panel */}
          <aside style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[{ icon: '⟐', title: 'PRIORITY', text: 'Exam-critical. Flagged twice. Resurfacing in strengthen mode.', accent: '#ff2266' }, { icon: '⟡', title: 'AI_COACH', text: 'Visualize the quantum system. Draw a diagram in your mind before looking.', accent: '#00f0ff' }, { icon: '◈', title: 'SOURCE', text: 'AI-generated · High confidence · Cross-referenced with textbook', accent: '#00ff88' }].map(p => (
              <div key={p.title} style={{ padding: '14px', border: `1px solid ${p.accent}15`, background: `${p.accent}04` }}>
                <div style={{ fontSize: '9px', letterSpacing: '2px', color: p.accent, marginBottom: '8px', opacity: 0.7 }}>{p.icon} {p.title}</div>
                <div style={{ fontSize: '11px', color: '#556', lineHeight: 1.7 }}>{p.text}</div>
              </div>
            ))}
          </aside>
        </div>

        <NavigationBubbles theme="retro" />
      </div>
    </>
  );
}
