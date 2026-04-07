'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'Cell Biology', q: 'What organelle is known as the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'], correct: 1 },
  { id: 2, topic: 'Genetics', q: 'DNA stands for deoxyribonucleic acid.', options: ['True', 'False'], correct: 0, type: 'tf' },
  { id: 3, topic: 'Ecology', q: 'Which trophic level has the most energy?', options: ['Producers', 'Primary consumers', 'Secondary consumers', 'Decomposers'], correct: 0 },
  { id: 4, topic: 'Evolution', q: 'Natural selection acts on which level?', options: ['Gene', 'Individual', 'Population', 'Species'], correct: 1 },
  { id: 5, topic: 'Anatomy', q: 'The largest organ in the human body is the _____.', options: ['Liver', 'Skin', 'Brain', 'Lungs'], correct: 1 },
];

export default function Design2() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    setSelected(idx);
    const na = [...answers]; na[currentQ] = idx; setAnswers(na);
  };
  const next = () => { if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setSelected(answers[currentQ + 1]); } else setShowResult(true); };
  const prev = () => { if (currentQ > 0) { setCurrentQ(currentQ - 1); setSelected(answers[currentQ - 1]); } };
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #fef3f0 0%, #f0f4ff 40%, #f0fdf4 70%, #fefce8 100%)',
      fontFamily: '"Quicksand", "Nunito", system-ui, sans-serif',
      padding: 0,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
        .soft-card { background: rgba(255,255,255,0.75); backdrop-filter: blur(20px); border-radius: 24px; border: 1px solid rgba(255,255,255,0.9); box-shadow: 0 8px 40px rgba(0,0,0,0.04); }
        .soft-btn { transition: all 0.3s ease; }
        .soft-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(99,102,241,0.2); }
        .opt-btn { transition: all 0.25s ease; }
        .opt-btn:hover { transform: scale(1.01); }
      `}</style>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 120px' }}>
        {/* Header Card */}
        <div className="soft-card" style={{ padding: 32, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #a78bfa, #f472b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🧬</div>
            <div>
              <div style={{ fontSize: 13, color: '#a78bfa', fontWeight: 600 }}>Course: Biology 101</div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: '#1e1b4b', margin: 0, fontFamily: 'Nunito, sans-serif' }}>Cell Biology & Genetics</h1>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
            {[{l:'Concept Quiz',c:'#ede9fe',t:'#7c3aed'},{l:'5 Questions',c:'#fce7f3',t:'#db2777'},{l:'~5 min',c:'#ecfdf5',t:'#059669'},{l:'Adaptive',c:'#fef9c3',t:'#ca8a04'}].map((b,i)=>(
              <span key={i} style={{ padding: '6px 14px', borderRadius: 20, background: b.c, color: b.t, fontSize: 12, fontWeight: 600 }}>{b.l}</span>
            ))}
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
            ✨ Recommended because your retention on Cell Biology topics dropped below 70% this week.
          </div>
        </div>

        {!showResult ? (
          <div className="soft-card" style={{ padding: 32 }}>
            {/* Progress dots */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 28 }}>
              {questions.map((_, i) => (
                <div key={i} style={{
                  width: i === currentQ ? 32 : 10, height: 10, borderRadius: 10,
                  background: i === currentQ ? 'linear-gradient(90deg, #a78bfa, #f472b6)' : answers[i] !== null ? '#c4b5fd' : '#e2e8f0',
                  transition: 'all 0.4s ease',
                }} />
              ))}
            </div>

            <div style={{ textAlign: 'center', fontSize: 12, color: '#a78bfa', fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>
              {q.topic.toUpperCase()}
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1e1b4b', textAlign: 'center', marginBottom: 28, lineHeight: 1.5, fontFamily: 'Nunito, sans-serif' }}>
              {q.q}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(idx)} className="opt-btn" style={{
                  padding: '16px 20px', borderRadius: 16,
                  background: selected === idx ? 'linear-gradient(135deg, #a78bfa, #f472b6)' : '#f8fafc',
                  color: selected === idx ? '#fff' : '#475569',
                  border: selected === idx ? 'none' : '1.5px solid #e2e8f0',
                  cursor: 'pointer', fontSize: 15, fontWeight: 600, textAlign: 'left',
                  fontFamily: 'Quicksand, sans-serif',
                  boxShadow: selected === idx ? '0 4px 20px rgba(167,139,250,0.3)' : 'none',
                }}>
                  <span style={{ opacity: 0.6, marginRight: 10 }}>{String.fromCharCode(65 + idx)}.</span>{opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
              <button onClick={prev} disabled={currentQ === 0} className="soft-btn" style={{
                padding: '10px 24px', borderRadius: 14, background: '#f1f5f9', color: currentQ === 0 ? '#cbd5e1' : '#64748b',
                border: 'none', cursor: currentQ === 0 ? 'default' : 'pointer', fontWeight: 600, fontSize: 14, fontFamily: 'Quicksand, sans-serif',
              }}>← Back</button>
              <button onClick={next} className="soft-btn" style={{
                padding: '10px 28px', borderRadius: 14, background: 'linear-gradient(135deg, #a78bfa, #f472b6)', color: '#fff',
                border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, fontFamily: 'Quicksand, sans-serif',
                boxShadow: '0 4px 16px rgba(167,139,250,0.3)',
              }}>{currentQ === questions.length - 1 ? 'See Results ✨' : 'Next →'}</button>
            </div>
          </div>
        ) : (
          <div className="soft-card" style={{ padding: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 8 }}>🌟</div>
            <div style={{ fontSize: 56, fontWeight: 800, color: '#1e1b4b', fontFamily: 'Nunito, sans-serif' }}>{Math.round((score / questions.length) * 100)}%</div>
            <div style={{ fontSize: 15, color: '#94a3b8', fontWeight: 600, marginBottom: 28 }}>{score} of {questions.length} correct</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left', marginBottom: 28 }}>
              {questions.map((quest, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderRadius: 12, background: answers[i] === quest.correct ? '#ecfdf5' : '#fef2f2' }}>
                  <span style={{ fontSize: 18 }}>{answers[i] === quest.correct ? '✅' : '❌'}</span>
                  <span style={{ fontSize: 13, color: '#475569', fontWeight: 600 }}>{quest.topic}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#faf5ff', borderRadius: 16, padding: 20, marginBottom: 24, textAlign: 'left' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#7c3aed', marginBottom: 8 }}>💡 What to do next</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.8 }}>
                • Review flashcards for missed topics<br />
                • Revisit Chapter 3 lecture notes<br />
                • Try another adaptive drill in 2 days
              </div>
            </div>

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} className="soft-btn" style={{
              padding: '12px 32px', borderRadius: 16, background: 'linear-gradient(135deg, #a78bfa, #f472b6)', color: '#fff',
              border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 15, fontFamily: 'Quicksand, sans-serif',
              boxShadow: '0 4px 20px rgba(167,139,250,0.3)',
            }}>Try Again 🔄</button>
          </div>
        )}
      </div>
      <NavBubbles current={2} variant="light" />
    </div>
  );
}
