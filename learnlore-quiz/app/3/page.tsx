'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'Romanticism', q: 'Who wrote "I Wandered Lonely as a Cloud"?', options: ['Keats', 'Wordsworth', 'Shelley', 'Byron'], correct: 1 },
  { id: 2, topic: 'Modernism', q: 'Which novel begins with "Call me Ishmael"?', options: ['The Great Gatsby', 'Moby-Dick', '1984', 'Ulysses'], correct: 1 },
  { id: 3, topic: 'Shakespeare', q: 'In which play does the "To be or not to be" soliloquy appear?', options: ['Macbeth', 'Othello', 'Hamlet', 'King Lear'], correct: 2 },
  { id: 4, topic: 'Poetry', q: 'A sonnet traditionally has how many lines?', options: ['10', '12', '14', '16'], correct: 2 },
  { id: 5, topic: 'Gothic Fiction', q: 'Who wrote Frankenstein?', options: ['Bram Stoker', 'Mary Shelley', 'Edgar Allan Poe', 'Ann Radcliffe'], correct: 1 },
];

export default function Design3() {
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
      minHeight: '100vh', background: '#faf5eb',
      fontFamily: '"Georgia", "Times New Roman", serif', color: '#1a1a1a',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
        .ed-option { transition: all 0.2s ease; border-bottom: 2px solid transparent; }
        .ed-option:hover { border-bottom-color: #1a1a1a; }
      `}</style>

      {/* Top rule */}
      <div style={{ borderBottom: '3px double #1a1a1a', margin: '0 40px' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 120px' }}>
        {/* Masthead */}
        <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid #1a1a1a33' }}>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 11, letterSpacing: 8, textTransform: 'uppercase', opacity: 0.4, marginBottom: 8 }}>The LearnLore Quarterly</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 48, fontWeight: 900, fontStyle: 'italic', margin: 0, lineHeight: 1.1 }}>English Literature</h1>
          <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: 15, marginTop: 8, fontStyle: 'italic', opacity: 0.6 }}>A Retrieval Practice Examination — Exam Pack: Midterm Review</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 16, fontSize: 12, fontFamily: 'Source Serif 4, serif', opacity: 0.5 }}>
            <span>Vol. {questions.length} Questions</span>
            <span>·</span>
            <span>Est. 6 minutes</span>
            <span>·</span>
            <span>Source-Level Quiz</span>
          </div>
        </div>

        <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: 13, fontStyle: 'italic', opacity: 0.5, marginBottom: 32, textAlign: 'center', maxWidth: 500, margin: '0 auto 32px' }}>
          "Recommended: Your recall accuracy on Romantic-era authors has declined 18% since Tuesday."
        </div>

        {!showResult ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 40 }}>
            {/* Main column */}
            <div>
              <div style={{ fontSize: 12, fontFamily: 'Source Serif 4, serif', letterSpacing: 3, textTransform: 'uppercase', opacity: 0.4, marginBottom: 12 }}>
                Question {currentQ + 1} of {questions.length} — {q.topic}
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 700, lineHeight: 1.4, marginBottom: 32 }}>
                {q.q}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {q.options.map((opt, idx) => (
                  <button key={idx} onClick={() => handleSelect(idx)} className="ed-option" style={{
                    display: 'flex', alignItems: 'baseline', gap: 12, padding: '14px 0',
                    background: 'none', border: 'none', borderBottom: selected === idx ? '2px solid #1a1a1a' : '1px solid #1a1a1a15',
                    cursor: 'pointer', textAlign: 'left', fontFamily: 'Source Serif 4, serif', fontSize: 17,
                    color: '#1a1a1a', fontWeight: selected === idx ? 700 : 400,
                  }}>
                    <span style={{ fontStyle: 'italic', opacity: 0.4, minWidth: 24, fontFamily: 'Playfair Display, serif' }}>{String.fromCharCode(97 + idx)})</span>
                    {opt}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36 }}>
                <button onClick={prev} disabled={currentQ === 0} style={{
                  padding: '8px 20px', background: 'none', border: '1px solid #1a1a1a', cursor: currentQ === 0 ? 'default' : 'pointer', fontSize: 13,
                  fontFamily: 'Source Serif 4, serif', opacity: currentQ === 0 ? 0.3 : 1,
                }}>← Previous</button>
                <button onClick={next} style={{
                  padding: '8px 24px', background: '#1a1a1a', color: '#faf5eb', border: 'none', cursor: 'pointer', fontSize: 13,
                  fontFamily: 'Source Serif 4, serif', fontWeight: 600,
                }}>{currentQ === questions.length - 1 ? 'Submit' : 'Continue →'}</button>
              </div>
            </div>

            {/* Side rail */}
            <div style={{ borderLeft: '1px solid #1a1a1a22', paddingLeft: 24 }}>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.4, marginBottom: 16, fontFamily: 'Source Serif 4, serif' }}>Progress</div>
              {questions.map((quest, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', fontSize: 12, fontFamily: 'Source Serif 4, serif',
                  opacity: i === currentQ ? 1 : 0.5, fontWeight: i === currentQ ? 700 : 400,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: answers[i] !== null ? '#1a1a1a' : i === currentQ ? '#1a1a1a55' : '#1a1a1a22' }} />
                  {quest.topic}
                </div>
              ))}

              <div style={{ marginTop: 24, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.4, marginBottom: 8, fontFamily: 'Source Serif 4, serif' }}>Answered</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, fontWeight: 900 }}>{answers.filter(a => a !== null).length}/{questions.length}</div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 64, fontWeight: 900, fontStyle: 'italic', marginBottom: 8 }}>{Math.round((score / questions.length) * 100)}%</div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: 16, fontStyle: 'italic', opacity: 0.5, marginBottom: 32 }}>{score} of {questions.length} answered correctly</div>
            <div style={{ borderTop: '1px solid #1a1a1a33', borderBottom: '1px solid #1a1a1a33', padding: '20px 0', marginBottom: 32 }}>
              {questions.map((quest, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', fontFamily: 'Source Serif 4, serif', fontSize: 14 }}>
                  <span style={{ fontStyle: 'italic' }}>{quest.topic}</span>
                  <span style={{ fontWeight: 700 }}>{answers[i] === quest.correct ? '●' : '○'}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: 14, fontStyle: 'italic', opacity: 0.6, marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
              The system suggests reviewing Romantic era poetry and Gothic fiction source materials before your next session.
            </div>
            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} style={{
              padding: '10px 32px', background: '#1a1a1a', color: '#faf5eb', border: 'none', cursor: 'pointer',
              fontFamily: 'Source Serif 4, serif', fontSize: 14, fontWeight: 600,
            }}>Begin Again</button>
          </div>
        )}
      </div>
      <NavBubbles current={3} variant="editorial" />
    </div>
  );
}
