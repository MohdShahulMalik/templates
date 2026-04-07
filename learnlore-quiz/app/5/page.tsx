'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'Art History', q: 'Who painted the ceiling of the Sistine Chapel?', options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'], correct: 1 },
  { id: 2, topic: 'Architecture', q: 'The Parthenon is an example of which architectural order?', options: ['Ionic', 'Corinthian', 'Doric', 'Tuscan'], correct: 2 },
  { id: 3, topic: 'Impressionism', q: 'Which artist is known for painting water lilies?', options: ['Renoir', 'Monet', 'Degas', 'Cézanne'], correct: 1 },
  { id: 4, topic: 'Sculpture', q: "Rodin's 'The Thinker' was originally part of a larger work called?", options: ['The Kiss', 'The Gates of Hell', 'The Burghers of Calais', 'Dancing Figure'], correct: 1 },
  { id: 5, topic: 'Contemporary', q: 'Who created the "Campbell Soup Cans" artwork?', options: ['Roy Lichtenstein', 'Andy Warhol', 'Jasper Johns', 'Jean-Michel Basquiat'], correct: 1 },
];

export default function Design5() {
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
      minHeight: '100vh', background: '#0c1220',
      color: '#e8dcc8', fontFamily: '"Cormorant Garamond", Georgia, serif',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        .lux-opt { transition: all 0.3s ease; }
        .lux-opt:hover { border-color: #d4a853 !important; }
      `}</style>

      {/* Gold line top */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #d4a853, transparent)' }} />

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '48px 24px 120px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 8, textTransform: 'uppercase', color: '#d4a853', marginBottom: 12 }}>LearnLore Premium Collection</div>
          <h1 style={{ fontSize: 44, fontWeight: 300, fontStyle: 'italic', margin: 0, lineHeight: 1.2, color: '#fff' }}>History of Art</h1>
          <div style={{ width: 60, height: 1, background: '#d4a853', margin: '16px auto' }} />
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, letterSpacing: 2, color: '#d4a85388', marginTop: 8 }}>
            EXAM PREPARATION · {questions.length} QUESTIONS · CURATED SELECTION
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, fontStyle: 'italic', color: '#d4a85366', marginTop: 12 }}>
            Crafted from your lecture notes and selected readings
          </div>
        </div>

        {!showResult ? (
          <div>
            {/* Elegant progress */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
              {questions.map((_, i) => (
                <div key={i} style={{
                  width: 12, height: 12, borderRadius: '50%',
                  border: `1.5px solid ${i === currentQ ? '#d4a853' : answers[i] !== null ? '#d4a85366' : '#ffffff1a'}`,
                  background: answers[i] !== null ? (i === currentQ ? '#d4a853' : '#d4a85344') : 'transparent',
                  transition: 'all 0.4s',
                }} />
              ))}
            </div>

            <div style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4a85366', marginBottom: 16 }}>
              {q.topic}
            </div>

            <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.5, marginBottom: 36, color: '#fff', maxWidth: 560, margin: '0 auto 36px' }}>
              {q.q}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 500, margin: '0 auto' }}>
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(idx)} className="lux-opt" style={{
                  padding: '16px 24px',
                  background: selected === idx ? '#d4a853' : 'transparent',
                  color: selected === idx ? '#0c1220' : '#e8dcc8',
                  border: `1px solid ${selected === idx ? '#d4a853' : '#ffffff1a'}`,
                  cursor: 'pointer', fontSize: 17, fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: selected === idx ? 600 : 400, textAlign: 'left',
                  letterSpacing: 0.5,
                }}>
                  {opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, maxWidth: 500, margin: '40px auto 0' }}>
              <button onClick={prev} disabled={currentQ === 0} style={{
                padding: '10px 24px', background: 'transparent', color: currentQ === 0 ? '#ffffff1a' : '#d4a853',
                border: `1px solid ${currentQ === 0 ? '#ffffff0a' : '#d4a85344'}`, cursor: currentQ === 0 ? 'default' : 'pointer',
                fontSize: 12, fontFamily: 'Montserrat, sans-serif', letterSpacing: 3, textTransform: 'uppercase',
              }}>Previous</button>
              <button onClick={next} style={{
                padding: '10px 28px', background: '#d4a853', color: '#0c1220',
                border: '1px solid #d4a853', cursor: 'pointer',
                fontSize: 12, fontFamily: 'Montserrat, sans-serif', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600,
              }}>{currentQ === questions.length - 1 ? 'Complete' : 'Continue'}</button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 6, color: '#d4a85366', marginBottom: 16 }}>RESULTS</div>
            <div style={{ fontSize: 72, fontWeight: 300, fontStyle: 'italic', color: '#d4a853', marginBottom: 4 }}>{Math.round((score / questions.length) * 100)}%</div>
            <div style={{ fontSize: 16, fontStyle: 'italic', color: '#d4a85388', marginBottom: 36 }}>{score} of {questions.length} correct</div>

            <div style={{ borderTop: '1px solid #ffffff0a', paddingTop: 24, marginBottom: 32 }}>
              {questions.map((quest, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #ffffff08', maxWidth: 400, margin: '0 auto' }}>
                  <span style={{ fontStyle: 'italic', fontSize: 15 }}>{quest.topic}</span>
                  <span style={{ color: answers[i] === quest.correct ? '#d4a853' : '#ffffff33', fontSize: 18 }}>{answers[i] === quest.correct ? '◆' : '◇'}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 14, fontStyle: 'italic', color: '#d4a85355', maxWidth: 420, margin: '0 auto 28px' }}>
              Your mastery in Impressionism and Contemporary art has strengthened. Architecture requires further attention.
            </div>

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} style={{
              padding: '12px 36px', background: '#d4a853', color: '#0c1220', border: 'none', cursor: 'pointer',
              fontSize: 12, fontFamily: 'Montserrat, sans-serif', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600,
            }}>Begin Again</button>
          </div>
        )}
      </div>
      <NavBubbles current={5} variant="gold" />
    </div>
  );
}
