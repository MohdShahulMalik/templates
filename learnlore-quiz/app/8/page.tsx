'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'Geography', q: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correct: 1 },
  { id: 2, topic: 'Capitals', q: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correct: 2 },
  { id: 3, topic: 'Oceans', q: 'Which is the largest ocean?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3 },
  { id: 4, topic: 'Mountains', q: 'Which mountain range contains Mount Everest?', options: ['Andes', 'Alps', 'Himalayas', 'Rockies'], correct: 2 },
  { id: 5, topic: 'Countries', q: 'Which country has the most time zones?', options: ['Russia', 'USA', 'China', 'France'], correct: 3 },
];

export default function Design8() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const q = questions[currentQ];

  const handleSelect = (idx: number) => { setSelected(idx); const na = [...answers]; na[currentQ] = idx; setAnswers(na); };
  const next = () => { if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setSelected(answers[currentQ + 1]); } else setShowResult(true); };
  const prev = () => { if (currentQ > 0) { setCurrentQ(currentQ - 1); setSelected(answers[currentQ - 1]); } };
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const colors = ['#f472b6', '#a78bfa', '#34d399', '#fbbf24', '#60a5fa', '#f87171', '#818cf8', '#fb923c'];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #ede9fe 30%, #dbeafe 60%, #ecfdf5 100%)',
      fontFamily: '"Fredoka", "Baloo 2", system-ui, sans-serif',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@400;500;600;700;800&display=swap');
        .candy-opt { transition: all 0.25s ease; }
        .candy-opt:hover { transform: scale(1.03) rotate(-0.5deg); }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-2deg); } 75% { transform: rotate(2deg); } }
      `}</style>

      {/* Floating decorative blobs */}
      {[{t:60,l:10,s:180,c:'#f472b622'},{t:200,l:'75%',s:120,c:'#a78bfa22'},{t:500,l:'5%',s:100,c:'#34d39922'},{t:350,l:'85%',s:140,c:'#fbbf2422'}].map((b, i) => (
        <div key={i} style={{ position: 'absolute', top: b.t, left: b.l, width: b.s, height: b.s, borderRadius: '50%', background: b.c, animation: `float ${3 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s`, zIndex: 0 }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', padding: '40px 20px 120px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 8, animation: 'wiggle 2s ease-in-out infinite' }}>🌍</div>
          <h1 style={{ fontFamily: 'Baloo 2, cursive', fontSize: 36, fontWeight: 800, color: '#6d28d9', margin: 0 }}>World Geography!</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            {[{l:'🎯 Quiz Mode',c:'#fce7f3',t:'#db2777'},{l:'5 Qs',c:'#ede9fe',t:'#7c3aed'},{l:'⏱ 5min',c:'#dbeafe',t:'#2563eb'},{l:'🌱 Easy',c:'#ecfdf5',t:'#059669'}].map((b,i)=>(
              <span key={i} style={{ padding: '6px 14px', borderRadius: 20, background: b.c, color: b.t, fontSize: 13, fontWeight: 600, fontFamily: 'Fredoka, sans-serif' }}>{b.l}</span>
            ))}
          </div>
          <div style={{ marginTop: 10, fontSize: 13, color: '#a78bfa', fontFamily: 'Fredoka, sans-serif' }}>
            🧠 Let&apos;s strengthen your Geography knowledge!
          </div>
        </div>

        {!showResult ? (
          <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 28, padding: 32, boxShadow: '0 8px 40px rgba(0,0,0,0.06)', backdropFilter: 'blur(10px)' }}>
            {/* Fun progress bar */}
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 24 }}>
              {questions.map((_, i) => (
                <div key={i} style={{
                  width: 40, height: 8, borderRadius: 4,
                  background: i === currentQ ? colors[i % colors.length] : answers[i] !== null ? `${colors[i % colors.length]}66` : '#e2e8f0',
                  transition: 'all 0.4s', transform: i === currentQ ? 'scaleY(1.5)' : 'scaleY(1)',
                }} />
              ))}
            </div>

            <div style={{ textAlign: 'center', fontSize: 12, color: colors[currentQ % colors.length], fontWeight: 600, letterSpacing: 1, marginBottom: 8, fontFamily: 'Fredoka, sans-serif' }}>
              {q.topic.toUpperCase()}
            </div>

            <h2 style={{ textAlign: 'center', fontFamily: 'Baloo 2, cursive', fontSize: 22, fontWeight: 700, color: '#1e1b4b', marginBottom: 24, lineHeight: 1.4 }}>
              {q.q}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(idx)} className="candy-opt" style={{
                  padding: '16px 16px', borderRadius: 16, textAlign: 'center',
                  background: selected === idx ? colors[idx % colors.length] : '#f8fafc',
                  color: selected === idx ? '#fff' : '#475569',
                  border: `2.5px solid ${selected === idx ? colors[idx % colors.length] : '#e2e8f0'}`,
                  cursor: 'pointer', fontSize: 15, fontFamily: 'Fredoka, sans-serif', fontWeight: 600,
                  boxShadow: selected === idx ? `0 6px 20px ${colors[idx % colors.length]}44` : '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  {opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
              <button onClick={prev} disabled={currentQ === 0} style={{
                padding: '10px 20px', borderRadius: 14, background: '#f1f5f9', color: currentQ === 0 ? '#cbd5e1' : '#64748b',
                border: 'none', cursor: currentQ === 0 ? 'default' : 'pointer', fontWeight: 600, fontSize: 14, fontFamily: 'Fredoka, sans-serif',
              }}>← Back</button>
              <button onClick={next} style={{
                padding: '10px 24px', borderRadius: 14, background: colors[currentQ % colors.length], color: '#fff',
                border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, fontFamily: 'Fredoka, sans-serif',
                boxShadow: `0 4px 16px ${colors[currentQ % colors.length]}44`,
              }}>{currentQ === questions.length - 1 ? 'Done! 🎉' : 'Next →'}</button>
            </div>
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 28, padding: 40, boxShadow: '0 8px 40px rgba(0,0,0,0.06)', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: 64, marginBottom: 8 }}>{score >= 4 ? '🏆' : score >= 3 ? '⭐' : '💪'}</div>
            <div style={{ fontFamily: 'Baloo 2, cursive', fontSize: 48, fontWeight: 800, color: '#6d28d9', marginBottom: 4 }}>{Math.round((score / questions.length) * 100)}%</div>
            <div style={{ fontSize: 15, color: '#94a3b8', fontWeight: 600, marginBottom: 24, fontFamily: 'Fredoka, sans-serif' }}>{score} of {questions.length} correct!</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left', marginBottom: 24 }}>
              {questions.map((quest, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderRadius: 14,
                  background: answers[i] === quest.correct ? '#ecfdf5' : '#fef2f2',
                  border: `1.5px solid ${answers[i] === quest.correct ? '#34d39933' : '#f8717133'}`,
                }}>
                  <span style={{ fontSize: 20 }}>{answers[i] === quest.correct ? '✅' : '😅'}</span>
                  <span style={{ fontSize: 14, color: '#475569', fontWeight: 600, fontFamily: 'Fredoka, sans-serif' }}>{quest.topic}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#ede9fe', borderRadius: 16, padding: 18, marginBottom: 20, textAlign: 'left' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#6d28d9', marginBottom: 6, fontFamily: 'Fredoka, sans-serif' }}>🚀 Up Next</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, fontFamily: 'Fredoka, sans-serif' }}>
                • Practice flashcards for missed topics<br />
                • Try the Oceans & Rivers drill<br />
                • Come back tomorrow for a review!
              </div>
            </div>

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} style={{
              padding: '12px 32px', borderRadius: 18, background: 'linear-gradient(135deg, #a78bfa, #f472b6)', color: '#fff',
              border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 16, fontFamily: 'Fredoka, sans-serif',
              boxShadow: '0 6px 24px rgba(167,139,250,0.3)',
            }}>Play Again! 🔄</button>
          </div>
        )}
      </div>
      <NavBubbles current={8} variant="candy" />
    </div>
  );
}
