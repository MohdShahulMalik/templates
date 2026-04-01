'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is the time complexity of binary search?', tag: 'Algorithms', type: 'Definition', back: 'O(log n)', explanation: 'Binary search halves the search space each step, giving logarithmic time complexity.', hook: 'Think of tearing a phone book in half repeatedly — each tear eliminates half the pages.', source: 'From Lecture Notes — Week 3, Page 12' },
  { id: 2, front: 'Define the Liskov Substitution Principle.', tag: 'SOLID Principles', type: 'Definition', back: 'Objects of a superclass should be replaceable with objects of its subclasses without altering program correctness.', explanation: 'LSP ensures that derived classes extend behavior without changing the expected interface contract.', hook: 'If it looks like a duck but needs batteries, you probably violated LSP.', source: 'From Textbook — Clean Architecture, Ch.9' },
  { id: 3, front: 'What does CAP theorem state?', tag: 'Distributed Systems', type: 'Scenario', back: 'A distributed system can provide at most two of three guarantees: Consistency, Availability, Partition tolerance.', explanation: 'In practice, partition tolerance is non-negotiable, so the real trade-off is between consistency and availability.', hook: 'Pick two out of three: the eternal triangle of distributed heartbreak.', source: 'From Study Notes — Distributed Computing, Section 5' },
  { id: 4, front: 'Explain the difference between stack and heap memory.', tag: 'Computer Architecture', type: 'Reverse Card', back: 'Stack: LIFO, automatic, fast, limited size. Heap: dynamic, manual/GC-managed, larger, slower.', explanation: 'Stack memory is used for static allocation and function call management. Heap memory handles dynamic allocation at runtime.', hook: 'Stack is your tidy desk drawer; heap is the warehouse — bigger but you need a map.', source: 'From Lecture Recording — Memory Management, 14:32' },
  { id: 5, front: 'What is a closure in programming?', tag: 'Language Concepts', type: 'Definition', back: 'A closure is a function that captures and retains access to variables from its enclosing lexical scope, even after that scope has finished executing.', explanation: 'Closures enable data encapsulation and are fundamental to functional programming patterns.', hook: 'A closure is a backpack — the function carries its environment wherever it goes.', source: 'From Course Notes — JavaScript Deep Dive, Ch.3' },
];

export default function Design1() {
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

  const handleReveal = () => setFlipped(true);

  const gradeColors: Record<string, string> = {
    Forgot: '#b04040',
    Hard: '#c08030',
    Good: '#5a8a50',
    Easy: '#3a7a6a',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');
        .warm-page { font-family: 'Source Sans 3', sans-serif; background: #faf5eb; color: #3a2e22; min-height: 100vh; }
        .warm-page * { box-sizing: border-box; }
        .warm-heading { font-family: 'Playfair Display', serif; }
        .warm-card {
          background: linear-gradient(145deg, #fffdf7 0%, #f7f0e3 100%);
          border: 1px solid rgba(92,64,51,0.12);
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(92,64,51,0.08), 0 1px 4px rgba(92,64,51,0.04);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .warm-card:hover { box-shadow: 0 8px 40px rgba(92,64,51,0.12); }
        .warm-btn { transition: all 0.2s ease; cursor: pointer; border: none; }
        .warm-btn:hover { transform: translateY(-1px); }
        .warm-btn:active { transform: translateY(0); }
        .warm-tag { background: rgba(92,64,51,0.08); color: #6b5242; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .warm-progress-bg { background: rgba(92,64,51,0.08); height: 4px; border-radius: 2px; overflow: hidden; }
        .warm-progress-fill { background: linear-gradient(90deg, #7a9a6a, #5a7a4a); height: 100%; border-radius: 2px; transition: width 0.5s ease; }
        .fade-in { animation: warmFadeIn 0.4s ease; }
        @keyframes warmFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .warm-grain { position: fixed; inset: 0; pointer-events: none; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); }
      `}</style>
      <div className="warm-page">
        <div className="warm-grain" />
        {/* Header */}
        <header style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(92,64,51,0.08)', background: 'rgba(250,245,235,0.9)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#5c4033' }} className="warm-heading">Computer Science 301</div>
              <div style={{ fontSize: '12px', color: '#8b7355' }}>Final Exam Prep</div>
            </div>
            <span className="warm-tag">Review Queue</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, maxWidth: '300px', margin: '0 32px' }}>
            <span style={{ fontSize: '13px', color: '#6b5242', whiteSpace: 'nowrap' }}>Card {cardIndex + 1} of {CARDS.length}</span>
            <div className="warm-progress-bg" style={{ flex: 1 }}>
              <div className="warm-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '12px', color: '#8b7355', textAlign: 'right' }}>
              <span style={{ fontWeight: 500, color: '#5c4033' }}>78%</span> confident · <span style={{ fontWeight: 500, color: '#5c4033' }}>6 min</span>
            </div>
            <button className="warm-btn" style={{ padding: '6px 16px', borderRadius: '8px', background: 'rgba(92,64,51,0.06)', fontSize: '13px', color: '#6b5242' }}>Pause</button>
            <button className="warm-btn" style={{ padding: '6px 16px', borderRadius: '8px', background: 'rgba(92,64,51,0.06)', fontSize: '13px', color: '#6b5242' }}>Exit</button>
          </div>
        </header>

        {/* Main */}
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 120px', gap: '32px' }}>
          {/* Center Stage */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="warm-card fade-in" style={{ padding: '48px', textAlign: 'center', width: '100%', maxWidth: '640px' }}>
                <div className="warm-heading" style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: '#5c4033' }}>Session Complete</div>
                <p style={{ fontSize: '16px', color: '#6b5242', marginBottom: '24px' }}>{CARDS.length} cards reviewed · Weakest area: Distributed Systems</p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {Object.entries(grades).map(([id, g]) => {
                    const c = CARDS.find(cc => cc.id === Number(id));
                    return <span key={id} className="warm-tag" style={{ background: `${gradeColors[g]}18`, color: gradeColors[g] }}>{c?.tag}: {g}</span>;
                  })}
                </div>
                <p style={{ marginTop: '24px', fontSize: '14px', color: '#8b7355' }}>Next review: Tomorrow at 9:00 AM</p>
                <button className="warm-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ marginTop: '20px', padding: '10px 28px', borderRadius: '10px', background: '#5a7a4a', color: '#fff', fontSize: '14px', fontWeight: 500 }}>Restart Session</button>
              </div>
            ) : (
              <>
                <div className="warm-card fade-in" key={card.id + (flipped ? '-back' : '-front')} style={{ padding: '40px 48px', width: '100%', maxWidth: '640px', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                        <span className="warm-tag">{card.tag}</span>
                        <span className="warm-tag" style={{ background: 'rgba(90,122,74,0.1)', color: '#5a7a4a' }}>{card.type}</span>
                      </div>
                      <div className="warm-heading" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.4, color: '#3a2e22', flex: 1, display: 'flex', alignItems: 'center' }}>
                        {card.front}
                      </div>
                      <div style={{ marginTop: '32px', fontSize: '13px', color: '#b09a82', fontStyle: 'italic' }}>Tap to reveal answer</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                        <span className="warm-tag">{card.tag}</span>
                        <span className="warm-tag" style={{ background: 'rgba(58,122,106,0.1)', color: '#3a7a6a' }}>Answer</span>
                      </div>
                      <div className="warm-heading" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.5, color: '#3a2e22', marginBottom: '16px' }}>
                        {card.back}
                      </div>
                      <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#6b5242', marginBottom: '12px' }}>{card.explanation}</p>
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#8b7355', textDecoration: 'underline', textAlign: 'left', padding: 0, marginBottom: showDetails ? '12px' : 0 }}>
                        {showDetails ? 'Hide details ▲' : 'Show memory hook & source ▼'}
                      </button>
                      {showDetails && (
                        <div className="fade-in" style={{ padding: '16px', background: 'rgba(92,64,51,0.04)', borderRadius: '10px', marginTop: '4px' }}>
                          <div style={{ fontSize: '14px', color: '#6b5242', marginBottom: '8px' }}>💡 <strong>Memory Hook:</strong> {card.hook}</div>
                          <div style={{ fontSize: '13px', color: '#8b7355' }}>📄 {card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Action Zone */}
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {!flipped ? (
                    <>
                      <button className="warm-btn" onClick={handleReveal} style={{ padding: '14px 48px', borderRadius: '12px', background: 'linear-gradient(135deg, #5c4033, #7a5a48)', color: '#faf5eb', fontSize: '16px', fontWeight: 600, letterSpacing: '0.3px' }}>Show Answer</button>
                      <button className="warm-btn" style={{ padding: '14px 24px', borderRadius: '12px', background: 'rgba(92,64,51,0.06)', color: '#8b7355', fontSize: '14px' }}>Skip</button>
                      <button className="warm-btn" style={{ padding: '14px 24px', borderRadius: '12px', background: 'rgba(92,64,51,0.06)', color: '#8b7355', fontSize: '14px' }}>🚩 Flag</button>
                    </>
                  ) : (
                    Object.entries(gradeColors).map(([label, color]) => (
                      <button key={label} className="warm-btn" onClick={() => handleGrade(label)} style={{ padding: '14px 28px', borderRadius: '12px', background: `${color}14`, color, fontSize: '15px', fontWeight: 600, border: `1.5px solid ${color}30` }}>
                        {label}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Panel */}
          <aside style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '20px', background: 'rgba(92,64,51,0.04)', borderRadius: '14px', border: '1px solid rgba(92,64,51,0.06)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#5c4033', marginBottom: '10px' }} className="warm-heading">Why This Card Now</div>
              <p style={{ fontSize: '13px', color: '#8b7355', lineHeight: 1.6 }}>This concept was marked <strong style={{ color: '#c08030' }}>Hard</strong> last session. Resurfacing for reinforcement.</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(92,64,51,0.04)', borderRadius: '14px', border: '1px solid rgba(92,64,51,0.06)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#5c4033', marginBottom: '10px' }} className="warm-heading">Session Snapshot</div>
              <div style={{ fontSize: '13px', color: '#6b5242', lineHeight: 1.8 }}>
                <div>{CARDS.length - cardIndex - (sessionComplete ? 0 : 1)} cards remaining</div>
                <div>3 weak concepts queued</div>
                <div>~8 min estimated</div>
              </div>
            </div>
            <div style={{ padding: '20px', background: 'rgba(90,122,74,0.06)', borderRadius: '14px', border: '1px solid rgba(90,122,74,0.1)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#5a7a4a', marginBottom: '10px' }} className="warm-heading">Coach Tip</div>
              <p style={{ fontSize: '13px', color: '#6b5242', lineHeight: 1.6 }}>Try saying the definition aloud before flipping. Active recall strengthens memory traces.</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(92,64,51,0.04)', borderRadius: '14px', border: '1px solid rgba(92,64,51,0.06)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#5c4033', marginBottom: '10px' }} className="warm-heading">Quick Actions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['✏️ Edit card', '🔄 Regenerate', '📄 Open source', '📝 Add note'].map(a => (
                  <button key={a} className="warm-btn" style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '8px', background: 'rgba(92,64,51,0.04)', fontSize: '13px', color: '#6b5242' }}>{a}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <NavigationBubbles theme="warm" />
      </div>
    </>
  );
}
