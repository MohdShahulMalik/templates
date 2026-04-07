'use client';

import { useState, useEffect } from 'react';
import NavBubbles from '../components/NavBubbles';

const questions = [
  { id: 1, topic: 'CRYPTOGRAPHY', q: 'Which algorithm is used in Bitcoin for hashing?', options: ['MD5', 'SHA-256', 'RSA', 'AES'], correct: 1 },
  { id: 2, topic: 'NETWORKING', q: 'What port does HTTPS use by default?', options: ['80', '443', '8080', '22'], correct: 1 },
  { id: 3, topic: 'DATABASES', q: 'ACID stands for Atomicity, Consistency, Isolation, and _____.', options: ['Durability', 'Distribution', 'Decryption', 'Dependency'], correct: 0 },
  { id: 4, topic: 'ALGORITHMS', q: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correct: 1 },
  { id: 5, topic: 'OS CONCEPTS', q: 'Which scheduling algorithm may cause starvation?', options: ['Round Robin', 'FCFS', 'Priority Scheduling', 'SJF'], correct: 2 },
];

export default function Design4() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const q = questions[currentQ];

  useEffect(() => {
    const interval = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 150); }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (idx: number) => { setSelected(idx); const na = [...answers]; na[currentQ] = idx; setAnswers(na); };
  const next = () => { if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setSelected(answers[currentQ + 1]); } else setShowResult(true); };
  const prev = () => { if (currentQ > 0) { setCurrentQ(currentQ - 1); setSelected(answers[currentQ - 1]); } };
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  return (
    <div style={{
      minHeight: '100vh', background: '#05050f', color: '#e0e0e0',
      fontFamily: '"Share Tech Mono", "Courier New", monospace',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.97; } }
        .neon-text { text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff4; }
        .neon-pink { text-shadow: 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f4; }
        .cyber-btn { transition: all 0.2s; }
        .cyber-btn:hover { box-shadow: 0 0 20px #0ff4, inset 0 0 20px #0ff1; }
      `}</style>

      {/* Scanline */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, background: '#0ff2', animation: 'scanline 4s linear infinite', zIndex: 2, pointerEvents: 'none' }} />
      {/* CRT overlay */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'repeating-linear-gradient(transparent, transparent 2px, #00000015 2px, #00000015 4px)', animation: 'flicker 0.1s infinite' }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: 860, margin: '0 auto', padding: '40px 24px 120px', filter: glitch ? 'hue-rotate(90deg)' : 'none', transition: 'filter 0.1s' }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, letterSpacing: 6, color: '#0ff8', marginBottom: 8 }}>SYS://LEARNLORE/QUIZ_ENGINE</div>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 36, fontWeight: 900, margin: 0, lineHeight: 1.2 }}>
            <span className="neon-text" style={{ color: '#0ff' }}>COMPUTER</span>{' '}
            <span className="neon-pink" style={{ color: '#f0f' }}>SCIENCE</span>
          </h1>
          <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: 11, color: '#0ff8' }}>
            {['TIMED MODE', `${questions.length} NODES`, 'EXAM-PACK', 'DIFFICULTY: HARD'].map((t, i) => (
              <span key={i} style={{ padding: '4px 12px', border: '1px solid #0ff4', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: 10, fontSize: 11, color: '#f0f8', fontStyle: 'italic' }}>
            &gt; ALERT: Weak nodes detected in CRYPTOGRAPHY and OS CONCEPTS subsystems.
          </div>
        </div>

        {!showResult ? (
          <div>
            {/* Progress bar */}
            <div style={{ height: 3, background: '#ffffff0a', marginBottom: 32, borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: `${((currentQ + 1) / questions.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #0ff, #f0f)', transition: 'width 0.5s', boxShadow: '0 0 10px #0ff' }} />
            </div>

            <div style={{ fontSize: 11, color: '#0ff6', marginBottom: 8, fontFamily: 'Share Tech Mono, monospace' }}>
              [{String(currentQ + 1).padStart(2, '0')}/{String(questions.length).padStart(2, '0')}] // {q.topic}
            </div>

            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 32, fontFamily: 'Orbitron, sans-serif', lineHeight: 1.4, color: '#fff' }}>
              {q.q}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(idx)} className="cyber-btn" style={{
                  padding: '16px 20px', textAlign: 'left',
                  background: selected === idx ? '#0ff' : '#0a0a1a',
                  color: selected === idx ? '#000' : '#e0e0e0',
                  border: `1px solid ${selected === idx ? '#0ff' : '#0ff3'}`,
                  cursor: 'pointer', fontSize: 14, fontFamily: 'Share Tech Mono, monospace',
                  fontWeight: selected === idx ? 700 : 400,
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                }}>
                  <span style={{ opacity: 0.4 }}>[{idx}] </span>{opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32 }}>
              <button onClick={prev} disabled={currentQ === 0} className="cyber-btn" style={{
                padding: '10px 24px', background: 'transparent', color: currentQ === 0 ? '#ffffff33' : '#0ff',
                border: `1px solid ${currentQ === 0 ? '#ffffff22' : '#0ff'}`, cursor: currentQ === 0 ? 'default' : 'pointer',
                fontSize: 12, fontFamily: 'Orbitron, sans-serif', letterSpacing: 2,
              }}>◄ PREV</button>
              <button onClick={next} className="cyber-btn" style={{
                padding: '10px 28px', background: '#0ff', color: '#000',
                border: '1px solid #0ff', cursor: 'pointer',
                fontSize: 12, fontFamily: 'Orbitron, sans-serif', letterSpacing: 2, fontWeight: 700,
                boxShadow: '0 0 20px #0ff4',
              }}>{currentQ === questions.length - 1 ? 'EXECUTE ►' : 'NEXT ►'}</button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, letterSpacing: 6, color: '#0ff6', marginBottom: 16 }}>SCAN COMPLETE</div>
            <div className="neon-text" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 80, fontWeight: 900, color: '#0ff', marginBottom: 8 }}>{Math.round((score / questions.length) * 100)}%</div>
            <div style={{ fontSize: 14, color: '#f0f8', marginBottom: 36 }}>{score}/{questions.length} NODES CLEARED</div>

            {questions.map((quest, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px', borderBottom: '1px solid #0ff1', fontSize: 13 }}>
                <span style={{ color: answers[i] === quest.correct ? '#0f0' : '#f00', fontFamily: 'Orbitron, sans-serif', fontSize: 11 }}>{answers[i] === quest.correct ? '[PASS]' : '[FAIL]'}</span>
                <span style={{ color: '#0ff8' }}>{quest.topic}</span>
              </div>
            ))}

            <button onClick={() => { setShowResult(false); setCurrentQ(0); setSelected(null); setAnswers(Array(questions.length).fill(null)); }} className="cyber-btn" style={{
              marginTop: 32, padding: '12px 36px', background: '#0ff', color: '#000',
              border: '1px solid #0ff', cursor: 'pointer', fontSize: 12, fontFamily: 'Orbitron, sans-serif',
              letterSpacing: 3, fontWeight: 700, boxShadow: '0 0 30px #0ff4',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            }}>REINITIALIZE ►</button>
          </div>
        )}
      </div>
      <NavBubbles current={4} variant="neon" />
    </div>
  );
}
