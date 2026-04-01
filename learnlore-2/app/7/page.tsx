'use client';

import { useState, useCallback } from 'react';
import NavigationBubbles from '../components/NavigationBubbles';

const CARDS = [
  { id: 1, front: 'What is serotonin\'s role in the brain?', tag: 'Neuroscience', type: 'Definition', back: 'Serotonin is a neurotransmitter that regulates mood, sleep, appetite, and social behavior. Low levels are linked to depression.', explanation: 'Produced primarily in the gut (95%) and brainstem. SSRIs work by preventing serotonin reuptake, keeping more available in synapses.', hook: 'Your gut makes most of your "happy chemical" — that\'s why butterflies in your stomach affect your mood.', source: 'Neuroscience 201 — Neurotransmitters, Page 78' },
  { id: 2, front: 'Define neuroplasticity.', tag: 'Neuroscience', type: 'Definition', back: 'The brain\'s ability to reorganize itself by forming new neural connections throughout life.', explanation: 'Enables learning, memory, and recovery from brain injury. Challenged the old belief that the adult brain is fixed.', hook: 'Your brain is clay, not concrete — every new skill physically reshapes it.', source: 'Brain Science — Chapter 11, Plasticity' },
  { id: 3, front: 'What is the HPA axis?', tag: 'Endocrinology', type: 'Formula', back: 'Hypothalamic-Pituitary-Adrenal axis. The body\'s central stress response system. Hypothalamus → CRH → Pituitary → ACTH → Adrenals → Cortisol.', explanation: 'Dysregulation of the HPA axis is implicated in chronic stress, anxiety disorders, PTSD, and depression.', hook: 'H-P-A: Help! Panic! Adrenaline! — the body\'s three-step alarm system.', source: 'Physiology 301 — Stress Systems, Lecture 8' },
  { id: 4, front: 'Explain the blood-brain barrier.', tag: 'Anatomy', type: 'Concept', back: 'A selective permeability barrier formed by endothelial cells in brain capillaries. Protects the brain from toxins and pathogens while allowing nutrients through.', explanation: 'Tight junctions between cells block most molecules. This is why many drugs can\'t reach the brain and why brain infections are so dangerous.', hook: 'The brain has its own bouncer — very exclusive guest list, no exceptions.', source: 'Medical Anatomy — CNS Protection, Page 156' },
  { id: 5, front: 'What are mirror neurons?', tag: 'Cognitive Science', type: 'Definition', back: 'Neurons that fire both when performing an action and when observing the same action performed by another.', explanation: 'Discovered in macaque monkeys. Proposed to play a role in empathy, imitation, language acquisition, and understanding others\' intentions.', hook: 'Watching someone eat a lemon makes you pucker — thank your mirror neurons.', source: 'Cognitive Neuroscience — Rizzolatti et al., Review Notes' },
];

export default function Design7() {
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
    { label: 'Forgot', color: '#e87181', bg: 'linear-gradient(135deg, #fde2e5, #fce8ea)' },
    { label: 'Hard', color: '#e8a87a', bg: 'linear-gradient(135deg, #fde8d8, #fdeddf)' },
    { label: 'Good', color: '#7ab8e8', bg: 'linear-gradient(135deg, #ddeffc, #e4f2fd)' },
    { label: 'Easy', color: '#7ae8a8', bg: 'linear-gradient(135deg, #dcf8e8, #e2faed)' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@300;400;500;600&display=swap');
        .pastel-page {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(160deg, #f5f3ff 0%, #fdf2f8 30%, #f0fdf4 60%, #f5f3ff 100%);
          color: #4a4560;
          min-height: 100vh;
          position: relative;
        }
        .pastel-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse at 15% 15%, rgba(167,139,250,0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 85% 85%, rgba(251,146,180,0.06) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, rgba(110,231,183,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        .pastel-heading { font-family: 'Quicksand', sans-serif; font-weight: 700; }
        .pastel-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(167,139,250,0.12);
          border-radius: 28px;
          box-shadow: 0 8px 32px rgba(167,139,250,0.06), 0 2px 8px rgba(0,0,0,0.02);
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .pastel-card:hover { box-shadow: 0 12px 40px rgba(167,139,250,0.1); transform: translateY(-2px); }
        .pastel-btn {
          cursor: pointer;
          border: none;
          font-family: 'Quicksand', sans-serif;
          font-weight: 600;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          border-radius: 20px;
        }
        .pastel-btn:hover { transform: translateY(-2px) scale(1.02); }
        .pastel-btn:active { transform: scale(0.98); }
        .pastel-tag {
          background: rgba(167,139,250,0.08);
          color: #8b78d0;
          padding: 5px 16px;
          border-radius: 24px;
          font-size: 11px;
          font-weight: 600;
        }
        .pastel-fade { animation: pastelFade 0.5s cubic-bezier(0.4,0,0.2,1); }
        @keyframes pastelFade { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .pastel-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>
      <div className="pastel-page">
        <div className="pastel-blob" style={{ top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(167,139,250,0.15)' }} />
        <div className="pastel-blob" style={{ bottom: '-10%', right: '-5%', width: '250px', height: '250px', background: 'rgba(251,146,180,0.12)' }} />
        <div className="pastel-blob" style={{ top: '40%', right: '10%', width: '200px', height: '200px', background: 'rgba(110,231,183,0.1)' }} />

        {/* Header */}
        <header style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(167,139,250,0.08)', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '10px', background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🧠</div>
            <div>
              <div className="pastel-heading" style={{ fontSize: '14px', color: '#4a4560' }}>Brain Science 201</div>
              <div style={{ fontSize: '11px', color: '#a399c0' }}>Midterm Review</div>
            </div>
            <span className="pastel-tag">✨ Review Mode</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="pastel-heading" style={{ fontSize: '13px', color: '#8b78d0' }}>{cardIndex + 1}/{CARDS.length}</span>
            <div style={{ width: '120px', height: '8px', background: 'rgba(167,139,250,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, #a78bfa, #f9a8d4, #6ee7b7)', borderRadius: '4px', transition: 'width 0.5s ease', width: `${progress}%` }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: '#a399c0' }}>
            <span>5 min · 85%</span>
            <button className="pastel-btn" style={{ padding: '6px 16px', background: 'rgba(167,139,250,0.06)', fontSize: '12px', color: '#8b78d0' }}>Pause</button>
          </div>
        </header>

        {/* Main */}
        <div style={{ display: 'flex', maxWidth: '1100px', margin: '0 auto', padding: '36px 24px 120px', gap: '24px', position: 'relative', zIndex: 1 }}>
          {/* Center Stage */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {sessionComplete ? (
              <div className="pastel-card pastel-fade" style={{ padding: '52px', textAlign: 'center', width: '100%', maxWidth: '580px' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
                <div className="pastel-heading" style={{ fontSize: '24px', color: '#4a4560', marginBottom: '10px' }}>All Done!</div>
                <p style={{ fontSize: '14px', color: '#a399c0', marginBottom: '24px' }}>{CARDS.length} cards reviewed · You&apos;re doing great!</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {Object.entries(grades).map(([id, g]) => {
                    const c = CARDS.find(cc => cc.id === Number(id));
                    const opt = gradeOptions.find(o => o.label === g);
                    return <span key={id} className="pastel-tag" style={{ background: `${opt?.color}15`, color: opt?.color }}>{c?.tag.split(' ')[0]}: {g}</span>;
                  })}
                </div>
                <p style={{ fontSize: '12px', color: '#c4b5d4' }}>Next review: Tomorrow · Weakest: Endocrinology</p>
                <button className="pastel-btn" onClick={() => { setCardIndex(0); setFlipped(false); setGrades({}); setSessionComplete(false); }} style={{ marginTop: '16px', padding: '12px 32px', background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)', color: '#fff', fontSize: '14px' }}>Study Again</button>
              </div>
            ) : (
              <>
                <div className="pastel-card pastel-fade" key={card.id + (flipped ? 'b' : 'f')} style={{ padding: '44px 48px', width: '100%', maxWidth: '580px', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
                  {!flipped ? (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                        <span className="pastel-tag">{card.tag}</span>
                        <span className="pastel-tag" style={{ background: 'rgba(251,146,180,0.1)', color: '#e87e9f' }}>{card.type}</span>
                      </div>
                      <div className="pastel-heading" style={{ fontSize: '22px', lineHeight: 1.5, color: '#4a4560', flex: 1, display: 'flex', alignItems: 'center' }}>
                        {card.front}
                      </div>
                      <div style={{ marginTop: '24px', fontSize: '12px', color: '#c4b5d4' }}>💜 Tap to see the answer</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                        <span className="pastel-tag">{card.tag}</span>
                        <span className="pastel-tag" style={{ background: 'rgba(110,231,183,0.1)', color: '#4aba8a' }}>Answer</span>
                      </div>
                      <div className="pastel-heading" style={{ fontSize: '18px', lineHeight: 1.6, color: '#4a4560', marginBottom: '14px' }}>
                        {card.back}
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#7a7590', marginBottom: '12px' }}>{card.explanation}</p>
                      <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: '#a78bfa', fontFamily: 'Quicksand, sans-serif', fontWeight: 600, padding: 0 }}>
                        {showDetails ? '▲ Less' : '▼ Memory hook & source'}
                      </button>
                      {showDetails && (
                        <div className="pastel-fade" style={{ marginTop: '12px', padding: '16px 20px', background: 'rgba(167,139,250,0.04)', borderRadius: '18px' }}>
                          <div style={{ fontSize: '14px', color: '#8b78d0', marginBottom: '8px' }}>💡 {card.hook}</div>
                          <div style={{ fontSize: '12px', color: '#c4b5d4' }}>📚 {card.source}</div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {!flipped ? (
                    <>
                      <button className="pastel-btn" onClick={() => setFlipped(true)} style={{ padding: '14px 44px', background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)', color: '#fff', fontSize: '15px' }}>Show Answer 💜</button>
                      <button className="pastel-btn" style={{ padding: '14px 20px', background: 'rgba(167,139,250,0.06)', color: '#a399c0', fontSize: '13px' }}>Skip</button>
                    </>
                  ) : (
                    gradeOptions.map(g => (
                      <button key={g.label} className="pastel-btn" onClick={() => handleGrade(g.label)} style={{ padding: '14px 26px', background: g.bg, color: g.color, fontSize: '14px', border: `1px solid ${g.color}20` }}>
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
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.5)', borderRadius: '22px', border: '1px solid rgba(167,139,250,0.08)', backdropFilter: 'blur(8px)' }}>
              <div className="pastel-heading" style={{ fontSize: '12px', color: '#a78bfa', marginBottom: '8px' }}>💭 Why This Card</div>
              <p style={{ fontSize: '13px', color: '#8a80a8', lineHeight: 1.7 }}>You marked this <span style={{ color: '#e8a87a', fontWeight: 600 }}>Hard</span> last time. Let&apos;s try again!</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.5)', borderRadius: '22px', border: '1px solid rgba(251,146,180,0.08)', backdropFilter: 'blur(8px)' }}>
              <div className="pastel-heading" style={{ fontSize: '12px', color: '#e87e9f', marginBottom: '8px' }}>🌟 Coach Tip</div>
              <p style={{ fontSize: '13px', color: '#8a80a8', lineHeight: 1.7 }}>Try connecting this to something you already know. Analogy is your friend!</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.5)', borderRadius: '22px', border: '1px solid rgba(110,231,183,0.08)', backdropFilter: 'blur(8px)' }}>
              <div className="pastel-heading" style={{ fontSize: '12px', color: '#4aba8a', marginBottom: '8px' }}>📊 Session</div>
              <div style={{ fontSize: '13px', color: '#8a80a8', lineHeight: 2 }}>
                <div>{CARDS.length - Object.keys(grades).length} cards left</div>
                <div>2 tricky ones ahead</div>
                <div>~5 min remaining</div>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.4)', borderRadius: '22px', border: '1px solid rgba(167,139,250,0.06)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['✏️ Edit', '🔄 Regen', '📄 Source', '📝 Note'].map(a => (
                  <button key={a} className="pastel-btn" style={{ padding: '6px 14px', background: 'rgba(167,139,250,0.05)', fontSize: '11px', color: '#8a80a8', borderRadius: '14px' }}>{a}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <NavigationBubbles theme="pastel" />
      </div>
    </>
  );
}
