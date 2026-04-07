'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'MECHANICS', q: 'What is Newton\'s second law of motion?', options: ['F = mv', 'F = ma', 'F = mg', 'F = m/a'], correct: 1 },
  { id: 2, topic: 'THERMODYNAMICS', q: 'Entropy in an isolated system tends to:', options: ['Decrease', 'Stay constant', 'Increase', 'Oscillate'], correct: 2 },
  { id: 3, topic: 'ELECTRICITY', q: 'Ohm\'s law relates voltage, current, and:', options: ['Power', 'Resistance', 'Capacitance', 'Inductance'], correct: 1 },
  { id: 4, topic: 'OPTICS', q: 'The speed of light in vacuum is approximately:', options: ['3×10⁶ m/s', '3×10⁸ m/s', '3×10¹⁰ m/s', '3×10⁴ m/s'], correct: 1 },
  { id: 5, topic: 'WAVES', q: 'Sound cannot travel through:', options: ['Water', 'Steel', 'Vacuum', 'Air'], correct: 2 },
];

export default function Design6() {
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
      background: '#1e2a22',
      color: '#e0e0e0',
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&display=swap');
        .ind-opt { transition: all 0.15s ease; }
        .ind-opt:hover { background: #22c55e !important; color: #000 !important; }
      `}</style>

      {/* Caution stripe */}
      <div style={{ height: 8, background: 'repeating-linear-gradient(45deg, #22c55e, #22c55e 10px, #0a1a0e 10px, #0a1a0e 20px)' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 24px 120px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 32, paddingBottom: 24, borderBottom: '3px solid #22c55e' }}>
          <div style={{ background: '#22c55e', color: '#000', padding: '8px 16px', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 36, lineHeight: 1, writingMode: 'vertical-lr', textOrientation: 'mixed', letterSpacing: 2 }}>⚡</div>
          <div>
            <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 42, fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: 2, lineHeight: 1 }}>PHYSICS</h1>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 20, fontWeight: 400, margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: 4, color: '#22c55e' }}>WEAK-AREA DRILL</h2>
            <div style={{ display: 'flex', gap: 12, marginTop: 12, fontSize: 12, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: 1, textTransform: 'uppercase' }}>
              {[`${questions.length} ITEMS`, '~7 MIN', 'DIFFICULTY: MED', 'TIMED'].map((t, i) => (
                <span key={i} style={{ padding: '4px 10px', background: '#2a3a2e', border: '1px solid #3d5a42' }}>{t}</span>
              ))}
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: '#8aaa8e', fontFamily: 'Barlow Condensed, sans-serif' }}>
              ⚠ System detected weakness in THERMODYNAMICS and OPTICS sectors.
            </div>
          </div>
        </div>

        {!showResult ? (
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20 }}>
            {/* Side numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {questions.map((_, i) => (
                <div key={i} style={{
                  width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Oswald, sans-serif', fontSize: 18, fontWeight: 700,
                  background: i === currentQ ? '#22c55e' : answers[i] !== null ? '#3d5a42' : '#2a3a2e',
                  color: i === currentQ ? '#000' : answers[i] !== null ? '#ddd' : '#556b58',
                  border: `2px solid ${i === currentQ ? '#22c55e' : '#3d5a42'}`,
                }}>{String(i + 1).padStart(2, '0')}</div>
              ))}
            </div>

            {/* Question area */}
            <div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#22c55e', marginBottom: 8 }}>{q.topic}</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 26, fontWeight: 500, lineHeight: 1.4, marginBottom: 28, textTransform: 'uppercase' }}>{q.q}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {q.options.map((opt, idx) => (
                  <button key={idx} onClick={() => handleSelect(idx)} className="ind-opt" style={{
                    padding: '14px 18px', textAlign: 'left',
                    background: selected === idx ? '#22c55e' : '#2a3a2e',
                    color: selected === idx ? '#000' : '#ccc',
                    border: `2px solid ${selected === idx ? '#22c55e' : '#3d5a42'}`,
                    cursor: 'pointer', fontSize: 16, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 500,
                    textTransform: 'uppercase', letterSpacing: 1,
                  }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', opacity: 0.4, marginRight: 12 }}>{String.fromCharCode(65 + idx)}</span>{opt}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
                <button onClick={prev} disabled={currentQ === 0} style={{
                  padding: '10px 24px', background: currentQ === 0 ? '#253028' : '#3d5a42', color: currentQ === 0 ? '#556b58' : '#fff',
                  border: `2px solid ${currentQ === 0 ? '#3d5a42' : '#4d7a52'}`, cursor: currentQ === 0 ? 'default' : 'pointer',
                  fontFamily: 'Oswald, sans-serif', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2,
                }}>◄ BACK</button>
                <button onClick={next} style={{
                  padding: '10px 28px', background: '#22c55e', color: '#000', border: '2px solid #22c55e', cursor: 'pointer',
                  fontFamily: 'Oswald, sans-serif', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700,
                }}>{currentQ === questions.length - 1 ? 'SUBMIT ►' : 'NEXT ►'}</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28 }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 80, fontWeight: 700, color: '#22c55e', lineHeight: 1 }}>{Math.round((score / questions.length) * 100)}%</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, color: '#8aaa8e', textTransform: 'uppercase', letterSpacing: 2 }}>{score}/{questions.length} CLEARED</div>
            </div>

            <div style={{ borderTop: '3px solid #22c55e', paddingTop: 20, marginBottom: 28 }}>
              {questions.map((quest, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #2a3a2e' }}>
                  <span style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: answers[i] === quest.correct ? '#22c55e' : '#600', color: answers[i] === quest.correct ? '#000' : '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 13, fontWeight: 700 }}>{answers[i] === quest.correct ? '✓' : '✗'}</span>
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 15, textTransform: 'uppercase', letterSpacing: 1 }}>{quest.topic}</span>
                </div>
              ))}
            </div>

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} style={{
              padding: '12px 36px', background: '#22c55e', color: '#000', border: '2px solid #22c55e', cursor: 'pointer',
              fontFamily: 'Oswald, sans-serif', fontSize: 14, textTransform: 'uppercase', letterSpacing: 3, fontWeight: 700,
            }}>RESTART DRILL ►</button>
          </div>
        )}
      </div>
      <NavBubbles current={6} variant="industrial" />
    </div>
  );
}
