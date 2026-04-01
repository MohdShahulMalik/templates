'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is the Sapir-Whorf hypothesis?', tag: 'Linguistics', type: 'Definition', back: 'Language influences or determines thought and perception. The strong version claims language determines thought; the weak version claims it influences it.', explanation: 'Also called linguistic relativity. Still debated, but evidence supports that language shapes certain cognitive processes like spatial reasoning and color perception.', hook: 'Does the word for "blue" in your language change how you see the sky? Possibly, yes.', source: 'Cognitive Linguistics — Chapter 3, Page 67' },
  { id: 2, front: 'Define cognitive dissonance.', tag: 'Psychology', type: 'Definition', back: 'The mental discomfort experienced when holding two contradictory beliefs, values, or attitudes simultaneously.', explanation: 'Introduced by Leon Festinger in 1957. People reduce dissonance by changing beliefs, adding new cognitions, or reducing the importance of the conflict.', hook: 'You know smoking is bad but you smoke anyway — the uncomfortable gap between belief and behavior is cognitive dissonance.', source: 'Social Psychology — Festinger (1957), Review Notes' },
  { id: 3, front: 'What is the difference between deductive and inductive reasoning?', tag: 'Logic', type: 'Compare', back: 'Deductive: general premises to specific conclusion (certain). Inductive: specific observations to general conclusion (probable).', explanation: 'Deductive reasoning guarantees truth if premises are true. Inductive reasoning can lead to false conclusions even from true observations.', hook: 'Deductive: "All men are mortal. Socrates is a man. Therefore Socrates is mortal." Inductive: "Every swan I\'ve seen is white, so all swans must be white." (Until you visit Australia.)' , source: 'Philosophy of Logic — Section 1.4' },
  { id: 4, front: 'Explain the trolley problem.', tag: 'Ethics', type: 'Scenario', back: 'A thought experiment: a trolley will kill 5 people. You can divert it to a track where it kills 1. Is it moral to actively cause one death to save five?', explanation: 'Tests the tension between utilitarian ethics (greatest good for greatest number) and deontological ethics (certain actions are inherently wrong regardless of outcomes).', hook: 'Five lives vs. one — but pulling the lever makes YOU the cause. That\'s where ethics gets complicated.', source: 'Moral Philosophy — Philippa Foot, 1967' },
  { id: 5, front: 'What is Occam\'s Razor?', tag: 'Epistemology', type: 'Definition', back: 'Among competing hypotheses, the one with the fewest assumptions should be selected. Simpler explanations are generally preferable.', explanation: 'Not a law of nature but a problem-solving principle. Named after William of Ockham (14th century). Crucial in scientific reasoning and model selection.', hook: 'If you hear hoofbeats, think horses, not zebras. (Unless you\'re in Africa.)', source: 'Philosophy of Science — Foundations, Page 22' },
];

export default function Design5() {
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
    { label: 'Forgot', color: '#c41e3a' },
    { label: 'Hard', color: '#e08000' },
    { label: 'Good', color: '#1a1a1a' },
    { label: 'Easy', color: '#2a7a5a' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        .edit-page {
          font-family: 'Inter', sans-serif;
          background: #faf8f5;
          color: #1a1a1a;
          min-height: 100vh;
        }
        .edit-heading { font-family: 'Cormorant Garamond', serif; }
        .edit-card {
          background: #fff;
          border: 1px solid #e8e4de;
          transition: all 0.3s ease;
        }
        .edit-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .edit-btn {
          cursor: pointer;
          border: 1px solid #ddd;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
          background: #fff;
        }
        .edit-btn:hover { border-color: #999; }
        .edit-accent { background: #c41e3a; }
        .edit-tag {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #999;
          font-weight: 500;
        }
        .edit-rule {
          height: 1px;
          background: #e8e4de;
          margin: 20px 0;
        }
        .edit-fade { animation: editFade 0.4s ease; }
        @keyframes editFade { from { opacity: 0; } to { opacity: 1; } }
        .edit-red-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #c41e3a;
        }
      `}</style>
      <div className="edit-page">
        {/* Header — editorial thin bar */}
        <header style={{ padding: '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e8e4de', background: '#faf8f5', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span className="edit-heading" style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', fontStyle: 'italic' }}>LearnLore</span>
            <div style={{ width: '1px', height: '20px', background: '#ddd' }} />
            <span className="edit-tag">Humanities Review</span>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#c41e3a' }} />
            <span className="edit-tag" style={{ color: '#c41e3a' }}>Active</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '13px', color: '#999' }}>{cardIndex + 1} of {CARDS.length}</span>
            <div style={{ width: '100px', height: '2px', background: '#e8e4de' }}>
              <div style={{ height: '100%', background: '#1a1a1a', width: `${progress}%`, transition: 'width 0.4s ease' }} />
            </div>
            <span style={{ fontSize: '12px', color: '#bbb' }}>6 min · 80%</span>
            <button className="edit-btn" style={{ padding: '4px 14px', fontSize: '11px', color: '#999', borderRadius: '0' }}>×</button>
          </div>
        </header>

        {/* Main — asymmetric editorial layout */}
        <div style={{ display: 'flex', maxWidth: '1100px', margin: '0 auto', padding: '48px 40px 120px' }}>
          {/* Left narrow column — drop cap style context */}
          <div style={{ width: '220px', paddingRight: '32px', borderRight: '1px solid #e8e4de', flexShrink: 0 }}>
            <div className="edit-heading" style={{ fontSize: '64px', fontWeight: 700, color: '#c41e3a', lineHeight: 1, marginBottom: '16px' }}>
              {String(cardIndex + 1).padStart(2, '0')}
            </div>
            <div className="edit-tag" style={{ marginBottom: '20px' }}>Current Card</div>
            <div className="edit-rule" />
            <div style={{ fontSize: '12px', color: '#999', lineHeight: 2 }}>
              <div><span style={{ color: '#666' }}>{CARDS.length - Object.keys(grades).length}</span> remaining</div>
              <div><span style={{ color: '#666' }}>3</span> weak concepts</div>
              <div><span style={{ color: '#666' }}>~7 min</span> left</div>
            </div>
            <div className="edit-rule" />
            <div className="edit-tag" style={{ marginBottom: '8px' }}>Why Now</div>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>Overdue by 2 days. This concept appears in 3 of your weak areas.</p>
            <div className="edit-rule" />
            <div className="edit-tag" style={{ marginBottom: '8px' }}>Coach Note</div>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7, fontStyle: 'italic' }}>&ldquo;Try to explain the concept as if teaching it to someone else.&rdquo;</p>
          </div>

          {/* Center — main card */}
          <div style={{ flex: 1, paddingLeft: '48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {sessionComplete ? (
              <div className="edit-fade" style={{ width: '100%' }}>
                <div className="edit-heading" style={{ fontSize: '48px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px', fontStyle: 'italic' }}>Fin.</div>
                <div className="edit-rule" />
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, maxWidth: '500px' }}>{CARDS.length} cards completed. Your weakest area this session was <strong>Ethics</strong>. Next review scheduled for tomorrow.</p>
                <button className="edit-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ marginTop: '24px', padding: '10px 28px', fontSize: '12px', color: '#1a1a1a', borderRadius: '0', borderColor: '#1a1a1a', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>Restart</button>
              </div>
            ) : (
              <>
                <div className="edit-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                    <span className="edit-tag">{card.tag}</span>
                    <span className="edit-tag" style={{ color: '#c41e3a' }}>{card.type}</span>
                  </div>

                  {!flipped ? (
                    <>
                      <h2 className="edit-heading" style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.4, color: '#1a1a1a', marginBottom: '32px', maxWidth: '560px' }}>
                        {card.front}
                      </h2>
                      <div className="edit-rule" />
                      <p style={{ fontSize: '12px', color: '#ccc', letterSpacing: '1px' }}>Press to reveal</p>
                    </>
                  ) : (
                    <>
                      <div style={{ position: 'relative', paddingLeft: '20px', marginBottom: '20px' }}>
                        <div className="edit-red-line" />
                        <h3 className="edit-heading" style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1.5, color: '#1a1a1a' }}>
                          {card.back}
                        </h3>
                      </div>
                      <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555', marginBottom: '16px', maxWidth: '540px' }}>{card.explanation}</p>
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: '#c41e3a', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', padding: 0, fontWeight: 500 }}>
                        {showDetails ? '— Collapse' : '+ Hook & Source'}
                      </button>
                      {showDetails && (
                        <div className="edit-fade" style={{ marginTop: '16px', paddingLeft: '20px', borderLeft: '2px solid #e8e4de' }}>
                          <p className="edit-heading" style={{ fontSize: '16px', fontStyle: 'italic', color: '#666', marginBottom: '8px', lineHeight: 1.6 }}>&ldquo;{card.hook}&rdquo;</p>
                          <p style={{ fontSize: '11px', color: '#bbb', letterSpacing: '0.5px' }}>{card.source}</p>
                        </div>
                      )}
                      <div className="edit-rule" />
                    </>
                  )}
                </div>

                <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                  {!flipped ? (
                    <>
                      <button className="edit-btn" onClick={() => setFlipped(true)} style={{ padding: '12px 36px', fontSize: '12px', background: '#1a1a1a', color: '#fff', borderColor: '#1a1a1a', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', borderRadius: '0' }}>Reveal Answer</button>
                      <button className="edit-btn" style={{ padding: '12px 20px', fontSize: '11px', color: '#bbb', borderRadius: '0' }}>Skip</button>
                    </>
                  ) : (
                    gradeOptions.map(g => (
                      <button key={g.label} className="edit-btn" onClick={() => handleGrade(g.label)} style={{ padding: '12px 24px', fontSize: '11px', color: g.color, borderColor: g.color, fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', borderRadius: '0' }}>
                        {g.label}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <NavigationBubbles theme="editorial" />
      </div>
    </>
  );
}
