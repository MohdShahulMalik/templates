'use client';

import { useState } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'NEURAL NETWORKS', q: 'What is the primary function of an activation function in a neural network?', options: ['Normalize input data', 'Introduce non-linearity', 'Reduce overfitting', 'Speed up training'], correct: 1 },
  { id: 2, topic: 'BACKPROPAGATION', q: 'Which algorithm is used to compute gradients in neural networks?', options: ['Gradient descent', 'Backpropagation', 'Adam optimizer', 'Stochastic search'], correct: 1 },
  { id: 3, topic: 'LOSS FUNCTIONS', q: 'Cross-entropy loss is typically used for which type of problem?', options: ['Regression', 'Classification', 'Clustering', 'Dimensionality reduction'], correct: 1 },
  { id: 4, topic: 'REGULARIZATION', q: 'Dropout randomly sets neurons to zero during which phase?', options: ['Testing', 'Training', 'Validation', 'Deployment'], correct: 1 },
  { id: 5, topic: 'OPTIMIZATION', q: 'What does the learning rate control?', options: ['Model complexity', 'Step size in parameter updates', 'Batch size', 'Number of epochs'], correct: 1 },
];

export default function Design1() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(answers[currentQ + 1]);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(answers[currentQ - 1]);
    }
  };

  const score = answers.filter((a, i) => a === questions[i].correct).length;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      fontFamily: '"Courier New", Courier, monospace',
      padding: 0,
      position: 'relative',
    }}>
      {/* Brutalist grid lines */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, #ffffff08 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #ffffff08 80px)',
        backgroundSize: '80px 80px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '40px 24px 120px' }}>
        {/* Header */}
        <div style={{ borderBottom: '4px solid #fff', paddingBottom: 20, marginBottom: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.5, marginBottom: 8 }}>LEARNLORE // RETRIEVAL PRACTICE</div>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, margin: 0, textTransform: 'uppercase', letterSpacing: -2 }}>
            DEEP LEARNING<br />FUNDAMENTALS
          </h1>
          <div style={{ display: 'flex', gap: 32, marginTop: 16, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>
            <span style={{ borderLeft: '3px solid #fff', paddingLeft: 12 }}>WEAK-AREA DRILL</span>
            <span style={{ borderLeft: '3px solid #fff', paddingLeft: 12 }}>{questions.length} QUESTIONS</span>
            <span style={{ borderLeft: '3px solid #fff', paddingLeft: 12 }}>~8 MIN</span>
            <span style={{ borderLeft: '3px solid #fff', paddingLeft: 12 }}>ADAPTIVE</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 11, opacity: 0.4, letterSpacing: 1 }}>
            → RECOMMENDED: 3 TOPICS SHOWING RETENTION DECAY. LAST REVIEWED 4 DAYS AGO.
          </div>
        </div>

        {!showResult ? (
          <div>
            {/* Progress */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
              {questions.map((_, i) => (
                <div key={i} style={{
                  flex: 1, height: 6,
                  background: i === currentQ ? '#fff' : answers[i] !== null ? '#ffffff66' : '#ffffff1a',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>

            {/* Question */}
            <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.4 }}>
              Q.{String(currentQ + 1).padStart(2, '0')} // {q.topic}
            </div>

            <div style={{
              fontSize: 28, fontWeight: 700, lineHeight: 1.3, marginBottom: 40,
              borderLeft: '6px solid #fff', paddingLeft: 24,
              textTransform: 'uppercase', letterSpacing: -0.5,
            }}>
              {q.q}
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 24px',
                    background: selected === idx ? '#fff' : 'transparent',
                    color: selected === idx ? '#000' : '#fff',
                    border: selected === idx ? '2px solid #fff' : '2px solid #ffffff33',
                    cursor: 'pointer',
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: 16, fontWeight: selected === idx ? 800 : 400,
                    textTransform: 'uppercase', letterSpacing: 1,
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <span style={{ fontSize: 13, opacity: 0.5, minWidth: 28 }}>[{String.fromCharCode(65 + idx)}]</span>
                  {opt}
                </button>
              ))}
            </div>

            {/* Nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
              <button onClick={handlePrev} disabled={currentQ === 0} style={{
                padding: '12px 32px', background: 'transparent', color: currentQ === 0 ? '#ffffff33' : '#fff',
                border: `2px solid ${currentQ === 0 ? '#ffffff33' : '#fff'}`, cursor: currentQ === 0 ? 'default' : 'pointer',
                fontFamily: '"Courier New", Courier, monospace', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 3,
              }}>← PREV</button>
              <button onClick={handleNext} style={{
                padding: '12px 32px', background: '#fff', color: '#000',
                border: '2px solid #fff', cursor: 'pointer',
                fontFamily: '"Courier New", Courier, monospace', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 3,
              }}>{currentQ === questions.length - 1 ? 'FINISH →' : 'NEXT →'}</button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 11, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.4, marginBottom: 16 }}>RESULTS // SESSION COMPLETE</div>
            <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>
              {Math.round((score / questions.length) * 100)}%
            </div>
            <div style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.5, marginBottom: 40 }}>
              {score}/{questions.length} CORRECT
            </div>

            <div style={{ borderTop: '4px solid #fff', paddingTop: 24 }}>
              <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20, opacity: 0.5 }}>PERFORMANCE BREAKDOWN</div>
              {questions.map((quest, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid #ffffff1a' }}>
                  <span style={{ fontSize: 11, opacity: 0.4, minWidth: 40 }}>Q.{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.6, minWidth: 160 }}>{quest.topic}</span>
                  <span style={{ fontSize: 20, fontWeight: 900 }}>{answers[i] === quest.correct ? '■' : '□'}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, padding: 24, border: '2px solid #fff' }}>
              <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12, opacity: 0.5 }}>NEXT ACTIONS</div>
              <div style={{ fontSize: 14, letterSpacing: 1, lineHeight: 2 }}>
                → REVIEW FLAGGED WEAK AREAS<br />
                → GENERATE TARGETED DRILL<br />
                → REVISIT SOURCE MATERIAL
              </div>
            </div>

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} style={{
              marginTop: 32, padding: '14px 40px', background: '#fff', color: '#000',
              border: '2px solid #fff', cursor: 'pointer',
              fontFamily: '"Courier New", Courier, monospace', fontSize: 13, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: 3,
            }}>RESTART DRILL →</button>
          </div>
        )}
      </div>

      <NavBubbles current={1} variant="dark" />
    </div>
  );
}
