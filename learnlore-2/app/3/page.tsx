'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is photosynthesis?', tag: 'Biology', type: 'Definition', back: 'The process by which green plants convert sunlight, water, and CO₂ into glucose and oxygen.', explanation: 'Photosynthesis occurs in chloroplasts and is the foundation of nearly all food chains on Earth.', hook: 'Plants are solar-powered kitchens — sunlight is the stove, CO₂ and water are the ingredients, and glucose is the meal.', source: 'Biology 201 — Chapter 6, Page 142' },
  { id: 2, front: 'Explain the water cycle.', tag: 'Earth Science', type: 'Scenario', back: 'Evaporation → Condensation → Precipitation → Collection. Water continuously moves between Earth\'s surface and atmosphere.', explanation: 'The water cycle is driven by solar energy and gravity. It distributes heat and sustains all ecosystems.', hook: 'Water is Earth\'s greatest recycler — every drop you drink has been rain, river, and ocean countless times.', source: 'Environmental Science — Lecture 4 Notes' },
  { id: 3, front: 'What are the three types of rocks?', tag: 'Geology', type: 'Formula', back: 'Igneous (from magma/lava), Sedimentary (from compressed sediment), Metamorphic (transformed by heat/pressure).', explanation: 'The rock cycle shows how these three types transform into each other over geological time.', hook: 'Igneous = fire-born, Sedimentary = layer cake, Metamorphic = pressure-cooked makeover.', source: 'Geology Fundamentals — Section 2.3' },
  { id: 4, front: 'Define symbiosis.', tag: 'Ecology', type: 'Definition', back: 'A close, long-term biological interaction between two different species.', explanation: 'Types include mutualism (both benefit), commensalism (one benefits, neutral to other), and parasitism (one benefits, one harmed).', hook: 'Clownfish and anemones are roommates who both pay rent — that\'s mutualism.', source: 'Ecology Notes — Week 7 Summary' },
  { id: 5, front: 'What is the greenhouse effect?', tag: 'Climate', type: 'Concept', back: 'Certain atmospheric gases trap heat from the sun, warming Earth\'s surface above what it would be otherwise.', explanation: 'Without the natural greenhouse effect, Earth would average -18°C. Human-enhanced greenhouse effect drives climate change.', hook: 'Earth wears a blanket of gases — we\'ve been adding extra layers.', source: 'Climate Science 101 — Lecture 2, Slide 15' },
];

export default function Design3() {
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
    { label: 'Forgot', color: '#c05555', bg: '#c0555510' },
    { label: 'Hard', color: '#c09040', bg: '#c0904010' },
    { label: 'Good', color: '#5a8f55', bg: '#5a8f5510' },
    { label: 'Easy', color: '#4a8a7a', bg: '#4a8a7a10' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .nature-page {
          font-family: 'DM Sans', sans-serif;
          background: #eef3ec;
          color: #2d3a28;
          min-height: 100vh;
          position: relative;
        }
        .nature-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at 20% 0%, rgba(74,103,65,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(74,103,65,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        .nature-heading { font-family: 'Fraunces', serif; }
        .nature-card {
          background: linear-gradient(160deg, #f7faf5 0%, #eef4eb 100%);
          border: 1px solid rgba(74,103,65,0.1);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(74,103,65,0.06), 0 2px 8px rgba(74,103,65,0.03);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .nature-btn {
          cursor: pointer;
          border: none;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s ease;
          border-radius: 16px;
        }
        .nature-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(74,103,65,0.1); }
        .nature-tag {
          background: rgba(74,103,65,0.08);
          color: #4a6741;
          padding: 5px 14px;
          border-radius: 24px;
          font-size: 12px;
          font-weight: 500;
        }
        .nature-fade { animation: natureFade 0.5s ease; }
        @keyframes natureFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .leaf-accent {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(74,103,65,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>
      <div className="nature-page">
        {/* Decorative elements */}
        <div className="leaf-accent" style={{ top: '10%', right: '-40px' }} />
        <div className="leaf-accent" style={{ bottom: '20%', left: '-60px', width: '220px', height: '220px' }} />

        {/* Header */}
        <header style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(74,103,65,0.08)', background: 'rgba(238,243,236,0.85)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6b8f63' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#2d3a28' }} className="nature-heading">Natural Sciences</div>
              <div style={{ fontSize: '11px', color: '#6b8f63' }}>Midterm Review</div>
            </div>
            <span className="nature-tag">🌿 Review Queue</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, maxWidth: '280px', margin: '0 24px' }}>
            <span style={{ fontSize: '13px', color: '#4a6741', whiteSpace: 'nowrap', fontWeight: 500 }}>{cardIndex + 1} / {CARDS.length}</span>
            <div style={{ flex: 1, height: '6px', background: 'rgba(74,103,65,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, #8fb583, #6b8f63)', borderRadius: '3px', transition: 'width 0.5s ease', width: `${progress}%` }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#6b8f63' }}>
            <span>7 min · 82% confident</span>
            <button className="nature-btn" style={{ padding: '6px 16px', background: 'rgba(74,103,65,0.06)', fontSize: '12px', color: '#4a6741' }}>Pause</button>
          </div>
        </header>

        {/* Main Content */}
        <div style={{ display: 'flex', maxWidth: '1140px', margin: '0 auto', padding: '36px 24px 120px', gap: '28px', position: 'relative', zIndex: 1 }}>
          {/* Center */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="nature-card nature-fade" style={{ padding: '52px', textAlign: 'center', width: '100%', maxWidth: '600px' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌱</div>
                <div className="nature-heading" style={{ fontSize: '26px', fontWeight: 700, color: '#2d3a28', marginBottom: '12px' }}>Session Complete</div>
                <p style={{ fontSize: '15px', color: '#5a7a50', marginBottom: '24px' }}>{CARDS.length} cards reviewed · Great growth today!</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {Object.entries(grades).map(([id, g]) => {
                    const c = CARDS.find(cc => cc.id === Number(id));
                    const opt = gradeOptions.find(o => o.label === g);
                    return <span key={id} className="nature-tag" style={{ background: opt?.bg, color: opt?.color }}>{c?.tag}: {g}</span>;
                  })}
                </div>
                <p style={{ fontSize: '13px', color: '#8aaa80' }}>Next review: Tomorrow morning · Weakest: Climate</p>
                <button className="nature-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ marginTop: '20px', padding: '12px 32px', background: 'linear-gradient(135deg, #6b8f63, #5a7a50)', color: '#fff', fontSize: '14px', fontWeight: 500 }}>Start Again</button>
              </div>
            ) : (
              <>
                <div className="nature-card nature-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ padding: '44px 52px', width: '100%', maxWidth: '600px', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
                        <span className="nature-tag">{card.tag}</span>
                        <span className="nature-tag" style={{ background: 'rgba(107,143,99,0.08)' }}>{card.type}</span>
                      </div>
                      <div className="nature-heading" style={{ fontSize: '23px', fontWeight: 500, lineHeight: 1.5, color: '#2d3a28', flex: 1, display: 'flex', alignItems: 'center' }}>
                        {card.front}
                      </div>
                      <div style={{ marginTop: '28px', fontSize: '12px', color: '#a3bfa0' }}>Tap or press space to reveal</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                        <span className="nature-tag">{card.tag}</span>
                        <span className="nature-tag" style={{ background: 'rgba(74,138,122,0.08)', color: '#4a8a7a' }}>Answer</span>
                      </div>
                      <div className="nature-heading" style={{ fontSize: '19px', fontWeight: 500, lineHeight: 1.6, color: '#2d3a28', marginBottom: '14px' }}>
                        {card.back}
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#5a7a50', marginBottom: '12px' }}>{card.explanation}</p>
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: '#8aaa80', padding: 0, fontFamily: 'DM Sans, sans-serif' }}>
                        {showDetails ? '▲ Less detail' : '▼ Memory hook & source'}
                      </button>
                      {showDetails && (
                        <div className="nature-fade" style={{ marginTop: '12px', padding: '16px 20px', background: 'rgba(74,103,65,0.04)', borderRadius: '16px' }}>
                          <div style={{ fontSize: '14px', color: '#4a6741', marginBottom: '8px' }}>🌿 {card.hook}</div>
                          <div style={{ fontSize: '12px', color: '#8aaa80' }}>📖 {card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {!flipped ? (
                    <>
                      <button className="nature-btn" onClick={() => setFlipped(true)} style={{ padding: '14px 44px', background: 'linear-gradient(135deg, #6b8f63, #5a7a50)', color: '#fff', fontSize: '15px', fontWeight: 500 }}>Show Answer</button>
                      <button className="nature-btn" style={{ padding: '14px 20px', background: 'rgba(74,103,65,0.06)', color: '#6b8f63', fontSize: '13px' }}>Skip</button>
                    </>
                  ) : (
                    gradeOptions.map(g => (
                      <button key={g.label} className="nature-btn" onClick={() => handleGrade(g.label)} style={{ padding: '14px 28px', background: g.bg, color: g.color, fontSize: '14px', fontWeight: 600, border: `1.5px solid ${g.color}20` }}>
                        {g.label}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Panel */}
          <aside style={{ width: '260px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '20px', background: 'rgba(74,103,65,0.04)', borderRadius: '20px', border: '1px solid rgba(74,103,65,0.06)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#4a6741', marginBottom: '8px' }} className="nature-heading">🌱 Why This Card</div>
              <p style={{ fontSize: '13px', color: '#6b8f63', lineHeight: 1.7 }}>Weak area detected — you've struggled with this concept in past sessions.</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(74,103,65,0.04)', borderRadius: '20px', border: '1px solid rgba(74,103,65,0.06)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#4a6741', marginBottom: '8px' }} className="nature-heading">🍃 Coach</div>
              <p style={{ fontSize: '13px', color: '#5a7a50', lineHeight: 1.7 }}>Close your eyes and visualize the process before revealing. Spatial memory helps retention.</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(74,103,65,0.04)', borderRadius: '20px', border: '1px solid rgba(74,103,65,0.06)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#4a6741', marginBottom: '8px' }} className="nature-heading">Session</div>
              <div style={{ fontSize: '13px', color: '#6b8f63', lineHeight: 2 }}>
                <div>{CARDS.length - Object.keys(grades).length} cards left</div>
                <div>2 weak concepts ahead</div>
                <div>~6 min remaining</div>
              </div>
            </div>
          </aside>
        </div>

        <NavigationBubbles theme="nature" />
      </div>
    </>
  );
}
