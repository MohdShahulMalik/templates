'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is the golden ratio?', tag: 'Mathematics', type: 'Formula', back: 'φ ≈ 1.618. The ratio where (a+b)/a = a/b. Found throughout nature, art, and architecture.', explanation: 'The golden ratio appears in the Fibonacci sequence, nautilus shells, the Parthenon, and Renaissance paintings.', hook: 'Nature\'s favorite number — spirals, petals, and galaxies all speak φ.', source: 'Art History & Mathematics — Lecture 2' },
  { id: 2, front: 'Define chiaroscuro in painting.', tag: 'Art History', type: 'Definition', back: 'The use of strong contrasts between light and dark to create a sense of volume and three-dimensionality in painting.', explanation: 'Mastered by Caravaggio and Rembrandt, chiaroscuro gives paintings dramatic, almost theatrical lighting.', hook: 'Imagine a spotlight in a dark theater — that\'s chiaroscuro on canvas.', source: 'Renaissance Art — Chapter 8, Page 204' },
  { id: 3, front: 'What is counterpoint in music?', tag: 'Music Theory', type: 'Concept', back: 'The art of combining two or more independent melodic lines that sound harmonious when played simultaneously.', explanation: 'Bach was the supreme master. Counterpoint is the foundation of fugues and canons.', hook: 'A conversation where everyone talks at once — but somehow it\'s beautiful.', source: 'Music Theory 301 — Polyphony Unit' },
  { id: 4, front: 'Explain the Bauhaus design philosophy.', tag: 'Design', type: 'Scenario', back: 'Form follows function. Unity of art and technology. Clean geometry, primary colors, rejection of ornament.', explanation: 'Founded by Walter Gropius in 1919. Influenced modern architecture, furniture design, and typography.', hook: 'Strip away decoration until only purpose remains — that\'s Bauhaus.', source: 'Design History — Section 4.1' },
  { id: 5, front: 'What is the Rule of Thirds?', tag: 'Photography', type: 'Formula', back: 'Divide the frame into 9 equal parts with 2 horizontal and 2 vertical lines. Place key elements along these lines or their intersections.', explanation: 'Creates more dynamic, balanced compositions than centering the subject.', hook: 'Off-center is more interesting — in photos and in life.', source: 'Photography Fundamentals — Composition, Page 34' },
];

export default function Design4() {
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
      setTimeout(() => setCardIndex(i => i + 1), 300);
    } else {
      setSessionComplete(true);
    }
  }, [card, cardIndex]);

  const gradeOptions = [
    { label: 'Forgot', color: '#c94040' },
    { label: 'Hard', color: '#d4a040' },
    { label: 'Good', color: '#c9a84c' },
    { label: 'Easy', color: '#6a9a6a' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poiret+One&family=Raleway:wght@300;400;500;600&display=swap');
        .deco-page {
          font-family: 'Raleway', sans-serif;
          background: #0f1325;
          color: #d4cfc0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .deco-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.03) 0%, transparent 40%);
          pointer-events: none;
        }
        .deco-heading { font-family: 'Poiret One', cursive; letter-spacing: 3px; }
        .deco-card {
          background: linear-gradient(160deg, #171b33 0%, #12152a 100%);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }
        .deco-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #c9a84c 50%, transparent 100%);
        }
        .deco-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.3) 50%, transparent 100%);
        }
        .deco-btn {
          font-family: 'Raleway', sans-serif;
          cursor: pointer;
          border: 1px solid rgba(201,168,76,0.3);
          transition: all 0.25s ease;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 11px;
        }
        .deco-btn:hover {
          background: rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 0 20px rgba(201,168,76,0.1);
        }
        .deco-tag {
          border: 1px solid rgba(201,168,76,0.2);
          padding: 3px 14px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #c9a84c;
        }
        .deco-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 50%, transparent 100%);
          margin: 16px 0;
        }
        .deco-fade { animation: decoFade 0.5s ease; }
        @keyframes decoFade { from { opacity: 0; } to { opacity: 1; } }
        .deco-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: rgba(201,168,76,0.25);
          border-style: solid;
        }
        .geo-pattern {
          position: fixed;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(201,168,76,0.04);
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>
      <div className="deco-page">
        <div className="geo-pattern" style={{ top: '-100px', right: '-100px' }} />
        <div className="geo-pattern" style={{ bottom: '-80px', left: '-120px', width: '250px', height: '250px' }} />

        {/* Header */}
        <header style={{ padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,168,76,0.1)', position: 'sticky', top: 0, background: 'rgba(15,19,37,0.95)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="deco-heading" style={{ fontSize: '16px', color: '#c9a84c' }}>Arts & Aesthetics</div>
            <span className="deco-tag">◆ Review</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: '#6a6e8a', letterSpacing: '1px' }}>CARD {cardIndex + 1} OF {CARDS.length}</span>
            <div style={{ width: '150px', height: '2px', background: 'rgba(201,168,76,0.1)' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, #c9a84c, #d4b85c)', width: `${progress}%`, transition: 'width 0.5s ease' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', color: '#6a6e8a', letterSpacing: '1.5px' }}>80% · 5 MIN</span>
            <button className="deco-btn" style={{ padding: '5px 16px', background: 'transparent', color: '#6a6e8a' }}>EXIT</button>
          </div>
        </header>

        {/* Main */}
        <div style={{ display: 'flex', maxWidth: '1100px', margin: '0 auto', padding: '48px 32px 120px', gap: '36px', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="deco-card deco-fade" style={{ padding: '56px', width: '100%', maxWidth: '620px', textAlign: 'center' }}>
                <div className="deco-heading" style={{ fontSize: '28px', color: '#c9a84c', marginBottom: '20px' }}>Session Complete</div>
                <div className="deco-divider" />
                <p style={{ fontSize: '14px', color: '#8a8aa0', marginBottom: '20px', letterSpacing: '1px' }}>{CARDS.length} cards mastered</p>
                <button className="deco-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ padding: '10px 32px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c' }}>Begin Again</button>
              </div>
            ) : (
              <>
                <div className="deco-card deco-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ padding: '48px 56px', width: '100%', maxWidth: '620px', minHeight: '360px', display: 'flex', flexDirection: 'column' }}>
                  {/* Decorative corners */}
                  <div className="deco-corner" style={{ top: '12px', left: '12px', borderWidth: '1px 0 0 1px' }} />
                  <div className="deco-corner" style={{ top: '12px', right: '12px', borderWidth: '1px 1px 0 0' }} />
                  <div className="deco-corner" style={{ bottom: '12px', left: '12px', borderWidth: '0 0 1px 1px' }} />
                  <div className="deco-corner" style={{ bottom: '12px', right: '12px', borderWidth: '0 1px 1px 0' }} />

                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
                        <span className="deco-tag">{card.tag}</span>
                        <span className="deco-tag" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>{card.type}</span>
                      </div>
                      <div className="deco-heading" style={{ fontSize: '22px', lineHeight: 1.6, color: '#eee8d5', flex: 1, display: 'flex', alignItems: 'center' }}>
                        {card.front}
                      </div>
                      <div className="deco-divider" />
                      <div style={{ fontSize: '11px', color: '#4a4e6a', letterSpacing: '2px', textTransform: 'uppercase' }}>Reveal Answer</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                        <span className="deco-tag">{card.tag}</span>
                        <span className="deco-tag" style={{ borderColor: 'rgba(106,154,106,0.4)', color: '#6a9a6a' }}>Answer</span>
                      </div>
                      <div className="deco-heading" style={{ fontSize: '19px', lineHeight: 1.6, color: '#eee8d5', marginBottom: '14px' }}>
                        {card.back}
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#8a8aa0', marginBottom: '14px' }}>{card.explanation}</p>
                      <div className="deco-divider" />
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', color: '#6a6e8a', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Raleway, sans-serif', padding: 0 }}>
                        {showDetails ? '◆ Hide Details' : '◆ Memory Hook & Source'}
                      </button>
                      {showDetails && (
                        <div className="deco-fade" style={{ marginTop: '16px', padding: '16px 20px', border: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.02)' }}>
                          <div style={{ fontSize: '13px', color: '#c9a84c', marginBottom: '10px', fontStyle: 'italic' }}>&ldquo;{card.hook}&rdquo;</div>
                          <div style={{ fontSize: '11px', color: '#6a6e8a', letterSpacing: '1px' }}>{card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div style={{ marginTop: '28px', display: 'flex', gap: '10px' }}>
                  {!flipped ? (
                    <>
                      <button className="deco-btn" onClick={() => setFlipped(true)} style={{ padding: '12px 44px', background: 'rgba(201,168,76,0.12)', color: '#c9a84c', borderColor: 'rgba(201,168,76,0.4)' }}>Reveal</button>
                      <button className="deco-btn" style={{ padding: '12px 20px', background: 'transparent', color: '#4a4e6a' }}>Skip</button>
                    </>
                  ) : (
                    gradeOptions.map(g => (
                      <button key={g.label} className="deco-btn" onClick={() => handleGrade(g.label)} style={{ padding: '12px 24px', background: `${g.color}12`, color: g.color, borderColor: `${g.color}40` }}>
                        {g.label}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Side Panel */}
          <aside style={{ width: '260px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[{ title: 'Priority', content: 'Exam-critical concept. Appears frequently in past papers.' }, { title: 'Coach', content: 'Try to recall a visual example before flipping. Connect abstract concepts to concrete images.' }, { title: 'Provenance', content: 'AI-generated card · High confidence · Verified against source material' }].map(panel => (
              <div key={panel.title} style={{ padding: '20px', border: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.02)' }}>
                <div className="deco-heading" style={{ fontSize: '11px', letterSpacing: '3px', color: '#c9a84c', marginBottom: '10px', textTransform: 'uppercase' }}>{panel.title}</div>
                <p style={{ fontSize: '13px', color: '#8a8aa0', lineHeight: 1.7 }}>{panel.content}</p>
              </div>
            ))}
          </aside>
        </div>

        <NavigationBubbles theme="deco" />
      </div>
    </>
  );
}
