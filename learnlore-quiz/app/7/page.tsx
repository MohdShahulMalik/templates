'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'Classical', q: 'In which century did Mozart compose most of his works?', options: ['17th', '18th', '19th', '20th'], correct: 1 },
  { id: 2, topic: 'Jazz', q: 'Which instrument is Miles Davis famous for playing?', options: ['Saxophone', 'Piano', 'Trumpet', 'Drums'], correct: 2 },
  { id: 3, topic: 'Music Theory', q: 'How many notes are in a chromatic scale?', options: ['7', '8', '10', '12'], correct: 3 },
  { id: 4, topic: 'Opera', q: 'Who composed "The Marriage of Figaro"?', options: ['Verdi', 'Puccini', 'Mozart', 'Wagner'], correct: 2 },
  { id: 5, topic: 'Modern', q: 'Which decade saw the birth of rock and roll?', options: ['1940s', '1950s', '1960s', '1970s'], correct: 1 },
];

export default function Design7() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const q = questions[currentQ];

  const handleSelect = (idx: number) => { setSelected(idx); const na = [...answers]; na[currentQ] = idx; setAnswers(na); };
  const next = () => { if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setSelected(answers[currentQ + 1]); } else setShowResult(true); };
  const prev = () => { if (currentQ > 0) { setCurrentQ(currentQ - 1); setSelected(answers[currentQ - 1]); } };
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1f1a',
      color: '#e8e0d0',
      fontFamily: '"Josefin Sans", sans-serif',
      position: 'relative',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poiret+One&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
        .deco-opt { transition: all 0.3s; position: relative; }
        .deco-opt:hover { background: #c9a84c22 !important; }
        .deco-opt::before { content: ''; position: absolute; top: 50%; left: -8px; width: 4px; height: 0; background: #c9a84c; transition: height 0.3s; transform: translateY(-50%); }
        .deco-opt:hover::before { height: 60%; }
      `}</style>

      {/* Art Deco top border */}
      <div style={{ padding: '0 40px' }}>
        <div style={{ height: 3, background: '#c9a84c' }} />
        <div style={{ height: 1, background: '#c9a84c44', marginTop: 4 }} />
        <div style={{ height: 1, background: '#c9a84c22', marginTop: 2 }} />
      </div>

      {/* Geometric corner decoration */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: 120, height: 120, pointerEvents: 'none', zIndex: 0 }}>
        <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0 0 L120 0 L0 120 Z" fill="#c9a84c08" />
          <line x1="0" y1="0" x2="80" y2="80" stroke="#c9a84c22" strokeWidth="1" />
          <line x1="0" y1="40" x2="40" y2="80" stroke="#c9a84c22" strokeWidth="1" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 740, margin: '0 auto', padding: '48px 24px 120px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: 'Poiret One, cursive', fontSize: 11, letterSpacing: 12, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>LearnLore Presents</div>
          <h1 style={{ fontFamily: 'Poiret One, cursive', fontSize: 56, fontWeight: 400, margin: 0, lineHeight: 1, color: '#c9a84c' }}>Music History</h1>

          {/* Deco divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '20px 0' }}>
            <div style={{ width: 60, height: 1, background: '#c9a84c44' }} />
            <div style={{ width: 8, height: 8, background: '#c9a84c', transform: 'rotate(45deg)' }} />
            <div style={{ width: 60, height: 1, background: '#c9a84c44' }} />
          </div>

          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 12, letterSpacing: 4, color: '#c9a84c66', textTransform: 'uppercase' }}>
            Concept-Level Quiz · {questions.length} Questions · Adaptive Mode
          </div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 13, fontStyle: 'italic', color: '#c9a84c44', marginTop: 10 }}>
            "Built from Chapter 6: The Evolution of Western Music"
          </div>
        </div>

        {!showResult ? (
          <div>
            {/* Progress diamonds */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 36 }}>
              {questions.map((_, i) => (
                <div key={i} style={{
                  width: 14, height: 14, transform: 'rotate(45deg)',
                  border: `1.5px solid ${i === currentQ ? '#c9a84c' : '#c9a84c44'}`,
                  background: answers[i] !== null ? '#c9a84c' : 'transparent',
                  transition: 'all 0.4s',
                }} />
              ))}
            </div>

            <div style={{ textAlign: 'center', fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', color: '#c9a84c66', marginBottom: 12 }}>
              {q.topic}
            </div>

            <h2 style={{ textAlign: 'center', fontFamily: 'Poiret One, cursive', fontSize: 28, fontWeight: 400, lineHeight: 1.5, marginBottom: 36, color: '#fff' }}>
              {q.q}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 480, margin: '0 auto' }}>
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(idx)} className="deco-opt" style={{
                  padding: '14px 24px', textAlign: 'left',
                  background: selected === idx ? '#c9a84c' : 'transparent',
                  color: selected === idx ? '#0a1f1a' : '#e8e0d0',
                  border: `1px solid ${selected === idx ? '#c9a84c' : '#c9a84c33'}`,
                  cursor: 'pointer', fontSize: 16, fontFamily: 'Josefin Sans, sans-serif', fontWeight: selected === idx ? 600 : 300,
                  letterSpacing: 1,
                }}>
                  {opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36, maxWidth: 480, margin: '36px auto 0' }}>
              <button onClick={prev} disabled={currentQ === 0} style={{
                padding: '10px 24px', background: 'transparent', color: currentQ === 0 ? '#c9a84c33' : '#c9a84c',
                border: `1px solid ${currentQ === 0 ? '#c9a84c22' : '#c9a84c55'}`, cursor: currentQ === 0 ? 'default' : 'pointer',
                fontSize: 12, fontFamily: 'Josefin Sans, sans-serif', letterSpacing: 4, textTransform: 'uppercase',
              }}>← Prev</button>
              <button onClick={next} style={{
                padding: '10px 28px', background: '#c9a84c', color: '#0a1f1a', border: '1px solid #c9a84c', cursor: 'pointer',
                fontSize: 12, fontFamily: 'Josefin Sans, sans-serif', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600,
              }}>{currentQ === questions.length - 1 ? 'Finish' : 'Next →'}</button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Poiret One, cursive', fontSize: 80, color: '#c9a84c', marginBottom: 8 }}>{Math.round((score / questions.length) * 100)}%</div>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 14, letterSpacing: 4, color: '#c9a84c66', textTransform: 'uppercase', marginBottom: 32 }}>{score} of {questions.length} correct</div>

            {/* Deco divider */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '0 0 24px' }}>
              <div style={{ width: 40, height: 1, background: '#c9a84c44' }} />
              <div style={{ width: 6, height: 6, background: '#c9a84c', transform: 'rotate(45deg)' }} />
              <div style={{ width: 40, height: 1, background: '#c9a84c44' }} />
            </div>

            {questions.map((quest, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, padding: '8px 0', fontSize: 15 }}>
                <span style={{ color: answers[i] === quest.correct ? '#c9a84c' : '#c9a84c33' }}>{answers[i] === quest.correct ? '◆' : '◇'}</span>
                <span style={{ fontFamily: 'Josefin Sans, sans-serif', letterSpacing: 1, fontWeight: 300 }}>{quest.topic}</span>
              </div>
            ))}

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} style={{
              marginTop: 32, padding: '12px 40px', background: '#c9a84c', color: '#0a1f1a', border: 'none', cursor: 'pointer',
              fontFamily: 'Josefin Sans, sans-serif', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600,
            }}>Encore</button>
          </div>
        )}
      </div>
      <NavBubbles current={7} variant="deco" />
    </div>
  );
}
