'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is a race condition?', tag: 'CONCURRENCY', type: 'DEF', back: 'A race condition occurs when two or more threads access shared data concurrently, and the outcome depends on the order of execution.', explanation: 'Race conditions lead to non-deterministic bugs that are notoriously hard to reproduce and debug.', hook: 'Two people editing the same Google Doc cell at once — whoever saves last wins, and the other person loses their work.', source: 'lecture_07_concurrency.pdf — page 14' },
  { id: 2, front: 'Explain eventual consistency.', tag: 'DIST_SYS', type: 'CONCEPT', back: 'Eventual consistency guarantees that, given enough time without new updates, all replicas will converge to the same value.', explanation: 'This is the weakest consistency model but enables high availability in distributed systems.', hook: 'Like gossip in a village — eventually everyone knows, but not everyone knows at the same time.', source: 'distributed_systems_notes.md — section 3.2' },
  { id: 3, front: 'What is the difference between TCP and UDP?', tag: 'NETWORKING', type: 'COMPARE', back: 'TCP: connection-oriented, reliable, ordered. UDP: connectionless, unreliable, faster.', explanation: 'TCP guarantees delivery via handshakes and retransmission. UDP trades reliability for speed — used in streaming, gaming.', hook: 'TCP is registered mail; UDP is shouting across the room and hoping they hear you.', source: 'networking_fundamentals.pdf — ch.4' },
  { id: 4, front: 'Define idempotency in API design.', tag: 'API_DESIGN', type: 'DEF', back: 'An idempotent operation produces the same result whether executed once or multiple times with the same input.', explanation: 'Critical for safe retries in distributed systems. GET, PUT, DELETE should be idempotent. POST typically is not.', hook: 'Pressing an elevator button 50 times doesn\'t make it come faster — that\'s idempotency.', source: 'api_design_patterns.pdf — page 28' },
  { id: 5, front: 'What does ACID stand for in databases?', tag: 'DATABASES', type: 'FORMULA', back: 'Atomicity, Consistency, Isolation, Durability.', explanation: 'ACID properties ensure reliable transaction processing in relational database systems.', hook: 'A-C-I-D: All Changes In Databases (must be) reliable.', source: 'db_theory_lecture_03.pdf — slide 7' },
];

export default function Design2() {
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

  const gradeMap: { label: string; key: string; color: string }[] = [
    { label: 'FORGOT', key: 'Forgot', color: '#ff3333' },
    { label: 'HARD', key: 'Hard', color: '#ff9900' },
    { label: 'GOOD', key: 'Good', color: '#33cc66' },
    { label: 'EASY', key: 'Easy', color: '#3399ff' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Archivo+Black&display=swap');
        .brutal-page {
          font-family: 'JetBrains Mono', monospace;
          background: #0a0a0a;
          color: #e0e0e0;
          min-height: 100vh;
          position: relative;
        }
        .brutal-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.015) 1px, rgba(255,255,255,0.015) 2px);
          pointer-events: none;
          z-index: 0;
        }
        .brutal-heading { font-family: 'Archivo Black', sans-serif; text-transform: uppercase; letter-spacing: 1px; }
        .brutal-card {
          background: #111;
          border: 2px solid #333;
          transition: all 0.15s ease;
          position: relative;
        }
        .brutal-card::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          right: -6px;
          bottom: -6px;
          border: 2px solid #222;
          z-index: -1;
        }
        .brutal-btn {
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer;
          border: 2px solid;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
          transition: all 0.1s ease;
        }
        .brutal-btn:hover { transform: translate(-2px, -2px); }
        .brutal-btn:active { transform: translate(0, 0); }
        .brutal-tag {
          border: 1px solid #444;
          padding: 2px 10px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
        }
        .brutal-fade { animation: brutalIn 0.2s ease; }
        @keyframes brutalIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      <div className="brutal-page">
        {/* Header */}
        <header style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #222', position: 'sticky', top: 0, background: '#0a0a0a', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="brutal-heading" style={{ fontSize: '12px', color: '#fff' }}>SYS_DESIGN_401</span>
            <span className="brutal-tag">▪ REVIEW_QUEUE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '11px', color: '#666' }}>[{String(cardIndex + 1).padStart(2, '0')}/{String(CARDS.length).padStart(2, '0')}]</span>
            <div style={{ width: '120px', height: '3px', background: '#222', position: 'relative' }}>
              <div style={{ height: '100%', background: '#33cc66', width: `${progress}%`, transition: 'width 0.3s ease' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '10px', color: '#555', letterSpacing: '1px' }}>06:42 | 78% CONF | 12 DUE_TMW</span>
            <button className="brutal-btn" style={{ padding: '4px 12px', fontSize: '10px', background: 'transparent', color: '#666', borderColor: '#333' }}>EXIT</button>
          </div>
        </header>

        {/* Main */}
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 120px', gap: '32px', position: 'relative', zIndex: 1 }}>
          {/* Left Rail */}
          <aside style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#444', marginBottom: '8px', textTransform: 'uppercase' }}>Queue</div>
            {CARDS.map((c, i) => (
              <div key={c.id} style={{ padding: '8px 12px', borderLeft: i === cardIndex ? '3px solid #33cc66' : '3px solid #1a1a1a', background: i === cardIndex ? '#1a1a1a' : 'transparent', fontSize: '11px', color: i === cardIndex ? '#fff' : '#555', cursor: 'pointer' }} onClick={() => { if (!grades[c.id]) { setCardIndex(i); setFlipped(false); setShowDetails(false); } }}>
                <span style={{ color: '#333', marginRight: '8px' }}>{String(i + 1).padStart(2, '0')}</span>
                {c.tag}
                {grades[c.id] && <span style={{ marginLeft: '8px', color: gradeMap.find(g => g.key === grades[c.id])?.color, fontSize: '9px' }}>■ {grades[c.id]?.toUpperCase()}</span>}
              </div>
            ))}
            <div style={{ marginTop: '24px', padding: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#444', marginBottom: '8px', textTransform: 'uppercase' }}>Stats</div>
              <div style={{ fontSize: '11px', color: '#666', lineHeight: 2 }}>
                <div>remaining: {CARDS.length - Object.keys(grades).length}</div>
                <div>weak_topics: 3</div>
                <div>est_time: ~8m</div>
              </div>
            </div>
          </aside>

          {/* Center */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="brutal-card brutal-fade" style={{ padding: '48px', width: '100%', maxWidth: '660px', textAlign: 'center' }}>
                <div className="brutal-heading" style={{ fontSize: '20px', color: '#33cc66', marginBottom: '20px' }}>SESSION_COMPLETE</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: 2 }}>
                  <div>cards_reviewed: {CARDS.length}</div>
                  <div>weakest_area: CONCURRENCY</div>
                  <div>next_review: tomorrow_09:00</div>
                </div>
                <button className="brutal-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ marginTop: '24px', padding: '10px 28px', fontSize: '11px', background: '#33cc66', color: '#000', borderColor: '#33cc66' }}>RESTART</button>
              </div>
            ) : (
              <>
                <div className="brutal-card brutal-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ padding: '40px 48px', width: '100%', maxWidth: '660px', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
                        <span className="brutal-tag">{card.tag}</span>
                        <span className="brutal-tag" style={{ borderColor: '#33cc66', color: '#33cc66' }}>{card.type}</span>
                      </div>
                      <div className="brutal-heading" style={{ fontSize: '20px', lineHeight: 1.6, color: '#fff', flex: 1, display: 'flex', alignItems: 'center' }}>
                        {card.front}
                      </div>
                      <div style={{ marginTop: '32px', fontSize: '10px', color: '#333', letterSpacing: '2px' }}>▶ REVEAL_ANSWER</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                        <span className="brutal-tag">{card.tag}</span>
                        <span className="brutal-tag" style={{ borderColor: '#3399ff', color: '#3399ff' }}>ANS</span>
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.7, color: '#fff', marginBottom: '16px' }}>{card.back}</div>
                      <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.8, marginBottom: '12px' }}>{card.explanation}</div>
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', color: '#555', letterSpacing: '2px', textAlign: 'left', padding: 0, fontFamily: 'JetBrains Mono, monospace' }}>
                        {showDetails ? '[-] COLLAPSE' : '[+] EXPAND_DETAILS'}
                      </button>
                      {showDetails && (
                        <div className="brutal-fade" style={{ marginTop: '12px', padding: '16px', border: '1px solid #222', background: '#0d0d0d' }}>
                          <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>// memory_hook</div>
                          <div style={{ fontSize: '13px', color: '#ccc', marginBottom: '12px' }}>{card.hook}</div>
                          <div style={{ fontSize: '10px', color: '#555' }}>src: {card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
                  {!flipped ? (
                    <>
                      <button className="brutal-btn" onClick={() => setFlipped(true)} style={{ padding: '12px 40px', fontSize: '12px', background: '#fff', color: '#000', borderColor: '#fff' }}>SHOW_ANSWER</button>
                      <button className="brutal-btn" style={{ padding: '12px 20px', fontSize: '11px', background: 'transparent', color: '#555', borderColor: '#333' }}>SKIP</button>
                      <button className="brutal-btn" style={{ padding: '12px 20px', fontSize: '11px', background: 'transparent', color: '#555', borderColor: '#333' }}>FLAG</button>
                    </>
                  ) : (
                    gradeMap.map(g => (
                      <button key={g.key} className="brutal-btn" onClick={() => handleGrade(g.key)} style={{ padding: '12px 24px', fontSize: '11px', background: 'transparent', color: g.color, borderColor: g.color }}>
                        {g.label}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Panel */}
          <aside style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#444', marginBottom: '8px' }}>PRIORITY_REASON</div>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>marked_hard × 2 sessions<br />resurfacing for drill</div>
            </div>
            <div style={{ padding: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#444', marginBottom: '8px' }}>COACH_TIP</div>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>Try explaining this concept without looking. Teaching solidifies recall.</div>
            </div>
            <div style={{ padding: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#444', marginBottom: '8px' }}>ACTIONS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {['edit_card', 'regenerate', 'open_source', 'add_note', 'report'].map(a => (
                  <button key={a} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '6px 0', fontSize: '11px', color: '#555', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.5px' }}>→ {a}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <NavigationBubbles theme="dark" />
      </div>
    </>
  );
}
