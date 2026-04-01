'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is tensile strength?', tag: 'Materials', type: 'Definition', back: 'The maximum stress a material can withstand while being stretched before breaking. Measured in Pascals (Pa) or PSI.', explanation: 'Critical in structural engineering for selecting materials. Steel has high tensile strength (~400-550 MPa), while concrete is strong in compression but weak in tension.', hook: 'How hard can you pull a steel rod before it snaps? That force per area is tensile strength.', source: 'Engineering Materials — Chapter 3, Table 3.2' },
  { id: 2, front: 'Define moment of inertia.', tag: 'Mechanics', type: 'Formula', back: 'I = Σmᵢrᵢ². A measure of an object\'s resistance to rotational acceleration about an axis.', explanation: 'Depends on mass distribution relative to the axis. A hollow cylinder has more moment of inertia than a solid one of equal mass.', hook: 'It\'s easier to spin a pencil than a barbell — the barbell\'s mass is farther from the center.', source: 'Classical Mechanics — Rotational Dynamics, Page 201' },
  { id: 3, front: 'What is Bernoulli\'s principle?', tag: 'Fluid Dynamics', type: 'Concept', back: 'In a flowing fluid, an increase in velocity occurs simultaneously with a decrease in pressure or potential energy.', explanation: 'Explains how airplane wings generate lift, how carburetors work, and why shower curtains blow inward.', hook: 'Fast air = low pressure. That\'s why the shower curtain attacks you.', source: 'Fluid Mechanics — Bernoulli (1738), Study Notes' },
  { id: 4, front: 'Explain the factor of safety.', tag: 'Structural', type: 'Scenario', back: 'FoS = Ultimate Strength / Working Load. A design margin ensuring structures can handle loads beyond normal operation. Typical values: 1.5-3 for steel, 6-8 for concrete.', explanation: 'Accounts for material defects, unexpected loads, fatigue, and modeling inaccuracies. Higher FoS = more conservative = heavier & more expensive.', hook: 'If a bridge can hold 100 tons but we only load it to 33 — that\'s a factor of safety of 3.', source: 'Structural Engineering — Design Codes, Section 2.1' },
  { id: 5, front: 'What is Young\'s modulus?', tag: 'Materials', type: 'Formula', back: 'E = σ/ε (stress/strain). A measure of material stiffness — how much it deforms under load within the elastic region.', explanation: 'Steel: ~200 GPa (very stiff). Rubber: ~0.01 GPa (very flexible). Higher E = stiffer material.', hook: 'Poke rubber and poke steel with the same force — the difference in dent is Young\'s modulus in action.', source: 'Materials Science — Elastic Properties, Page 87' },
];

export default function Design8() {
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
      setTimeout(() => setCardIndex(i => i + 1), 200);
    } else {
      setSessionComplete(true);
    }
  }, [card, cardIndex]);

  const gradeOptions = [
    { label: 'Forgot', color: '#ef4444' },
    { label: 'Hard', color: '#f59e0b' },
    { label: 'Good', color: '#a3a3a3' },
    { label: 'Easy', color: '#22c55e' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap');
        .ind-page {
          font-family: 'Roboto Mono', monospace;
          background: #1a1a18;
          color: #b3b0a8;
          min-height: 100vh;
          position: relative;
        }
        .ind-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(245,158,11,0.02) 39px, rgba(245,158,11,0.02) 40px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(245,158,11,0.02) 39px, rgba(245,158,11,0.02) 40px);
          pointer-events: none;
          z-index: 0;
        }
        .ind-heading { font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 2px; }
        .ind-card {
          background: #222220;
          border: 1px solid #333330;
          border-radius: 2px;
          position: relative;
        }
        .ind-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px;
          height: 100%;
          background: #f59e0b;
        }
        .ind-btn {
          font-family: 'Oswald', sans-serif;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.15s ease;
          border-radius: 2px;
        }
        .ind-btn:hover { transform: translateY(-1px); }
        .ind-btn:active { transform: translateY(0); }
        .ind-tag {
          background: rgba(245,158,11,0.08);
          border: 1px solid rgba(245,158,11,0.15);
          padding: 3px 12px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #f59e0b;
          font-family: 'Oswald', sans-serif;
        }
        .ind-divider {
          height: 1px;
          background: repeating-linear-gradient(90deg, #333330 0px, #333330 4px, transparent 4px, transparent 8px);
          margin: 16px 0;
        }
        .ind-fade { animation: indFade 0.25s ease; }
        @keyframes indFade { from { opacity: 0; } to { opacity: 1; } }
        .ind-stripe {
          background: repeating-linear-gradient(135deg, transparent 0px, transparent 8px, rgba(245,158,11,0.03) 8px, rgba(245,158,11,0.03) 16px);
        }
      `}</style>
      <div className="ind-page">
        {/* Header */}
        <header style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #f59e0b', background: '#1a1a18', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '12px', height: '12px', background: '#f59e0b', transform: 'rotate(45deg)' }} />
            <span className="ind-heading" style={{ fontSize: '14px', color: '#f59e0b' }}>Engineering 301</span>
            <span className="ind-tag">▮ Review Queue</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '10px', color: '#666', letterSpacing: '1.5px', fontFamily: 'Roboto Mono, monospace' }}>UNIT {String(cardIndex + 1).padStart(2, '0')}/{String(CARDS.length).padStart(2, '0')}</span>
            <div style={{ width: '120px', height: '4px', background: '#2a2a28', borderRadius: '0' }}>
              <div style={{ height: '100%', background: '#f59e0b', width: `${progress}%`, transition: 'width 0.3s ease' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '10px', color: '#555', letterSpacing: '1px' }}>08:22 | 74% | 14 PENDING</span>
            <button className="ind-btn" style={{ padding: '4px 14px', fontSize: '10px', background: 'transparent', color: '#666', border: '1px solid #333330' }}>EXIT</button>
          </div>
        </header>

        {/* Main */}
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '36px 24px 120px', gap: '28px', position: 'relative', zIndex: 1 }}>
          {/* Left Rail */}
          <aside style={{ width: '200px', flexShrink: 0 }}>
            <div className="ind-heading" style={{ fontSize: '10px', color: '#555', marginBottom: '12px', letterSpacing: '3px' }}>Queue Status</div>
            {CARDS.map((c, i) => (
              <div key={c.id} onClick={() => { if (!grades[c.id]) { setCardIndex(i); setFlipped(false); setShowDetails(false); } }} style={{ padding: '8px 12px', borderLeft: i === cardIndex ? '3px solid #f59e0b' : '3px solid #2a2a28', background: i === cardIndex ? '#2a2a28' : 'transparent', fontSize: '11px', color: i === cardIndex ? '#f59e0b' : '#555', cursor: 'pointer', marginBottom: '2px', transition: 'all 0.15s ease' }}>
                <span style={{ color: '#333', marginRight: '6px' }}>{String(i + 1).padStart(2, '0')}</span>
                {c.tag.toUpperCase()}
                {grades[c.id] && <span style={{ float: 'right', color: gradeOptions.find(g => g.label === grades[c.id])?.color, fontSize: '9px' }}>■</span>}
              </div>
            ))}
            <div className="ind-divider" style={{ margin: '20px 0' }} />
            <div style={{ padding: '14px', background: '#222220', border: '1px solid #333330' }}>
              <div className="ind-heading" style={{ fontSize: '9px', color: '#555', marginBottom: '8px', letterSpacing: '3px' }}>Metrics</div>
              <div style={{ fontSize: '11px', color: '#777', lineHeight: 2 }}>
                <div>REMAINING: <span style={{ color: '#b3b0a8' }}>{CARDS.length - Object.keys(grades).length}</span></div>
                <div>WEAK AREAS: <span style={{ color: '#f59e0b' }}>3</span></div>
                <div>EST TIME: <span style={{ color: '#b3b0a8' }}>~9 min</span></div>
              </div>
            </div>
          </aside>

          {/* Center */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="ind-card ind-fade" style={{ padding: '48px', width: '100%', maxWidth: '640px', textAlign: 'center' }}>
                <div className="ind-heading" style={{ fontSize: '24px', color: '#f59e0b', marginBottom: '16px' }}>Session Complete</div>
                <div className="ind-divider" />
                <div style={{ fontSize: '12px', color: '#777', lineHeight: 2, marginBottom: '16px' }}>
                  <div>CARDS REVIEWED: {CARDS.length}</div>
                  <div>WEAKEST: MECHANICS</div>
                  <div>NEXT REVIEW: TOMORROW 09:00</div>
                </div>
                <button className="ind-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ padding: '10px 32px', fontSize: '12px', background: '#f59e0b', color: '#1a1a18', border: '2px solid #f59e0b', fontWeight: 600 }}>Restart</button>
              </div>
            ) : (
              <>
                <div className="ind-card ind-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ padding: '40px 48px 40px 52px', width: '100%', maxWidth: '640px', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                        <span className="ind-tag">{card.tag}</span>
                        <span className="ind-tag" style={{ borderColor: 'rgba(163,163,163,0.2)', color: '#888', background: 'rgba(163,163,163,0.06)' }}>{card.type}</span>
                      </div>
                      <div className="ind-heading" style={{ fontSize: '20px', lineHeight: 1.6, color: '#e5e2da', flex: 1, display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                        {card.front}
                      </div>
                      <div className="ind-divider" />
                      <div style={{ fontSize: '10px', color: '#444', letterSpacing: '3px' }}>▶ REVEAL ANSWER</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                        <span className="ind-tag">{card.tag}</span>
                        <span className="ind-tag" style={{ borderColor: 'rgba(34,197,94,0.2)', color: '#22c55e', background: 'rgba(34,197,94,0.06)' }}>Answer</span>
                      </div>
                      <div className="ind-heading" style={{ fontSize: '17px', lineHeight: 1.6, color: '#e5e2da', marginBottom: '14px', fontWeight: 400 }}>
                        {card.back}
                      </div>
                      <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.8, marginBottom: '12px' }}>{card.explanation}</p>
                      <div className="ind-divider" />
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', color: '#555', letterSpacing: '2px', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', padding: 0 }}>
                        {showDetails ? '▮ Collapse' : '▮ Hook & Source'}
                      </button>
                      {showDetails && (
                        <div className="ind-fade ind-stripe" style={{ marginTop: '12px', padding: '16px', border: '1px solid #333330' }}>
                          <div style={{ fontSize: '12px', color: '#f59e0b', marginBottom: '8px', fontStyle: 'italic' }}>&quot;{card.hook}&quot;</div>
                          <div style={{ fontSize: '10px', color: '#555' }}>SRC: {card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
                  {!flipped ? (
                    <>
                      <button className="ind-btn" onClick={() => setFlipped(true)} style={{ padding: '12px 40px', fontSize: '12px', background: '#f59e0b', color: '#1a1a18', border: '2px solid #f59e0b', fontWeight: 600 }}>Reveal</button>
                      <button className="ind-btn" style={{ padding: '12px 20px', fontSize: '11px', background: 'transparent', color: '#555', border: '1px solid #333330' }}>Skip</button>
                      <button className="ind-btn" style={{ padding: '12px 20px', fontSize: '11px', background: 'transparent', color: '#555', border: '1px solid #333330' }}>Flag</button>
                    </>
                  ) : (
                    gradeOptions.map(g => (
                      <button key={g.label} className="ind-btn" onClick={() => handleGrade(g.label)} style={{ padding: '12px 24px', fontSize: '11px', background: `${g.color}10`, color: g.color, border: `1.5px solid ${g.color}`, fontWeight: 500 }}>
                        {g.label}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Panel */}
          <aside style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '16px', background: '#222220', border: '1px solid #333330', borderTop: '3px solid #f59e0b' }}>
              <div className="ind-heading" style={{ fontSize: '9px', color: '#f59e0b', marginBottom: '8px', letterSpacing: '3px' }}>Priority Reason</div>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>Weak area — failed 2 of 3 attempts. Requires reinforcement before exam.</div>
            </div>
            <div style={{ padding: '16px', background: '#222220', border: '1px solid #333330', borderTop: '3px solid #22c55e' }}>
              <div className="ind-heading" style={{ fontSize: '9px', color: '#22c55e', marginBottom: '8px', letterSpacing: '3px' }}>Coach Advisory</div>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>Work through the formula by hand. Write it twice from memory before grading.</div>
            </div>
            <div style={{ padding: '16px', background: '#222220', border: '1px solid #333330', borderTop: '3px solid #a3a3a3' }}>
              <div className="ind-heading" style={{ fontSize: '9px', color: '#a3a3a3', marginBottom: '8px', letterSpacing: '3px' }}>Provenance</div>
              <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.7 }}>AI-generated · Verified · Cross-checked with textbook equations</div>
            </div>
            <div style={{ padding: '16px', background: '#222220', border: '1px solid #333330' }}>
              <div className="ind-heading" style={{ fontSize: '9px', color: '#555', marginBottom: '10px', letterSpacing: '3px' }}>Actions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {['EDIT CARD', 'REGENERATE', 'OPEN SOURCE', 'ADD NOTE', 'REPORT ISSUE'].map(a => (
                  <button key={a} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '6px 0', fontSize: '10px', color: '#666', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>→ {a}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <NavigationBubbles theme="industrial" />
      </div>
    </>
  );
}
