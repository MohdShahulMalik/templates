'use client';

import { Caveat, Poppins } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94'];

const concepts = [
  {
    id: 1, title: 'Photosynthesis', icon: '☀️', color: '#FFE66D', pin: '#FF6B6B',
    story: `Imagine a tiny green house inside every leaf — that's a chloroplast! The little green guys (chlorophyll) are like solar panels, soaking up sunlight. When they catch enough light, they use it to break apart water — POP! — releasing oxygen (yay, we breathe that!) and keeping the useful bits. Those bits ride a tiny escalator (electron transport chain) that makes energy coins called ATP. Then, in the back room, the Calvin Cycle kitchen takes CO₂ from the air and bakes it into sugar using those ATP coins. Sunlight → sugar → life! 🌱`,
    hooks: [
      { hook: '☀️ Solar Panels', target: 'Chlorophyll catches sunlight', color: '#FFE66D' },
      { hook: '💧 POP!', target: 'Photolysis breaks water → O₂ + H⁺ + e⁻', color: '#4ECDC4' },
      { hook: '🎢 Tiny Escalator', target: 'Electron Transport Chain → ATP', color: '#A8E6CF' },
      { hook: '🍪 Back Room Kitchen', target: 'Calvin Cycle bakes CO₂ into glucose', color: '#FF8B94' },
      { hook: '🌬️ Oxygen Gift', target: 'Stomata release O₂ we breathe', color: '#FFE66D' },
    ],
  },
  {
    id: 2, title: 'Quantum Entanglement', icon: '🔗', color: '#4ECDC4', pin: '#FFE66D',
    story: `OK so imagine you have two magic dice. You roll them on opposite sides of the planet, and they ALWAYS show matching numbers. Not because they're rigged — they just... know. That's quantum entanglement! Two particles that have been entangled share a connection that doesn't care about distance. Measure one, and you instantly know about the other. Einstein thought this was bonkers (he called it "spooky") but it's been proven real again and again. Scientists now use it for super-secure communication! 🎲`,
    hooks: [
      { hook: '🎲 Magic Dice', target: 'Entangled particles always correlate', color: '#4ECDC4' },
      { hook: '👻 Spooky!', target: 'Einstein\'s famous objection', color: '#FF6B6B' },
      { hook: '🌍 Any Distance', target: 'Works across galaxies', color: '#A8E6CF' },
      { hook: '🔐 Super Secure', target: 'Quantum cryptography is unbreakable', color: '#FFE66D' },
    ],
  },
  {
    id: 3, title: 'Mitochondria', icon: '⚡', color: '#A8E6CF', pin: '#4ECDC4',
    story: `Plot twist: your cells have tiny batteries inside them that used to be their own creatures! Billions of years ago, a little bacterium got swallowed by a bigger cell. But instead of being lunch, they made a deal: "I'll make energy, you keep me safe." That little buddy became the mitochondrion! They still have their own DNA (from your mom only — thanks, Mom!) and they power EVERYTHING you do — breathing, thinking, running, dreaming. You are literally a walking battery pack of ancient bacteria. 🔋`,
    hooks: [
      { hook: '🤝 The Deal', target: 'Ancient endosymbiosis = cellular partnership', color: '#A8E6CF' },
      { hook: '🔋 Tiny Batteries', target: 'Make ATP — energy currency of life', color: '#FFE66D' },
      { hook: '👩 Mom\'s DNA', target: 'Mitochondrial DNA inherited maternally only', color: '#FF8B94' },
      { hook: '🦠 Ex-Bacteria', target: 'Once free-living α-proteobacterium', color: '#4ECDC4' },
    ],
  },
  {
    id: 4, title: 'Neural Networks', icon: '🧠', color: '#FF8B94', pin: '#A8E6CF',
    story: `Think of a neural network like a city's road system. Each intersection is a neuron, and roads have speed limits (weights). When a car (data) enters the city, it takes certain routes based on speed limits. After seeing a MILLION cars, the city learns which routes work best and adjusts its speed limits. Show it enough cat photos, and it builds perfect cat-detecting highways. That's deep learning — no one programs the rules. The network figures it out by watching patterns! 🚗💨`,
    hooks: [
      { hook: '🏙️ Road System', target: 'Nodes (neurons) connected by weighted edges', color: '#FF8B94' },
      { hook: '🚦 Speed Limits', target: 'Weights = how much each connection matters', color: '#FFE66D' },
      { hook: '🗺️ Route Learning', target: 'Training adjusts weights via backpropagation', color: '#4ECDC4' },
      { hook: '🐱 Cat Highways', target: 'Pattern recognition without explicit rules', color: '#A8E6CF' },
    ],
  },
  {
    id: 5, title: 'DNA Replication', icon: '🧬', color: '#FFE66D', pin: '#FF6B6B',
    story: `Before a cell splits in two, it needs to photocopy its entire instruction manual — 3 BILLION letters! First, an enzyme called helicase grabs the zipper (double helix) and ZZZZIP pulls it apart. Then DNA polymerase slides along each side, reading letters and writing the match: A gets T, C gets G. Super simple rules, super accurate results. The error rate is literally 1 mistake per BILLION letters. Each new copy has one old stripe and one new stripe — like a half-and-half cookie! 🍪`,
    hooks: [
      { hook: '🤐 ZZZZIP!', target: 'Helicase unzips the double helix', color: '#4ECDC4' },
      { hook: '📝 Perfect Match', target: 'A→T, C→G base pairing rules', color: '#FFE66D' },
      { hook: '🎯 1 in a BILLION', target: 'Error rate after proofreading', color: '#FF6B6B' },
      { hook: '🍪 Half-and-Half', target: 'Semi-conservative: old strand + new strand', color: '#A8E6CF' },
    ],
  },
];

export default function Design12() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={poppins.className} style={{ minHeight: '100vh', background: '#FFF8F0', color: '#3A3226', display: 'flex', position: 'relative' }}>
      {/* Dot pattern */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
        <svg width="100%" height="100%"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#3A3226" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg>
      </div>

      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh',
        borderRight: '2px dashed rgba(58,50,38,0.1)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: '#FFF8F0',
      }}>
        <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: '#FFE66D', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', transform: 'rotate(-3deg)',
            boxShadow: '2px 3px 0px rgba(0,0,0,0.1)',
          }}>📝</div>
          <span className={caveat.className} style={{ fontSize: '28px', fontWeight: 700, color: '#FF6B6B' }}>LearnLore!</span>
        </div>
        <div style={{ padding: '0 16px 16px' }}>
          <button
            onClick={() => setShowNew(true)}
            className={caveat.className}
            style={{
              width: '100%', padding: '14px', background: '#FF6B6B', color: '#FFF',
              border: 'none', borderRadius: '12px', fontSize: '20px', fontWeight: 700,
              cursor: 'pointer', boxShadow: '3px 4px 0px rgba(0,0,0,0.1)',
              transform: 'rotate(-0.5deg)', transition: 'transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0.5deg) scale(1.02)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-0.5deg)'; }}
          >+ New Idea!</button>
        </div>
        <div style={{ padding: '4px 20px 10px' }}>
          <span className={caveat.className} style={{ fontSize: '16px', color: 'rgba(58,50,38,0.35)' }}>My Scrapbook</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 10px' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '14px 14px', borderRadius: '12px', cursor: 'pointer', marginBottom: '6px',
                background: selected === i && !showNew ? `${c.color}22` : 'transparent',
                border: selected === i && !showNew ? `2px solid ${c.color}55` : '2px solid transparent',
                display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s',
                transform: `rotate(${(i % 2 === 0 ? -0.5 : 0.5)}deg)`,
                animation: `slideInLeft 0.3s ease-out ${i * 0.06}s both`,
              }}
            >
              <span style={{ fontSize: '22px' }}>{c.icon}</span>
              <div>
                <p className={caveat.className} style={{ fontSize: '20px', fontWeight: 700, marginBottom: '-2px' }}>{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '60px 48px', maxWidth: '600px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={caveat.className} style={{ fontSize: '44px', fontWeight: 700, color: '#FF6B6B', marginBottom: '4px', transform: 'rotate(-1deg)' }}>New Idea! ✨</h2>
            <p style={{ fontSize: '14px', color: 'rgba(58,50,38,0.5)', marginBottom: '32px' }}>Type what you want to learn, or stick in your notes!</p>
            <input
              type="text" placeholder="What's on your mind?"
              className={caveat.className}
              style={{
                width: '100%', padding: '16px 18px', border: '2px dashed rgba(58,50,38,0.15)',
                borderRadius: '14px', background: '#FFF', fontSize: '22px', fontWeight: 500,
                color: '#3A3226', outline: 'none', marginBottom: '20px',
              }}
            />
            <div style={{
              border: '2px dashed rgba(58,50,38,0.12)', borderRadius: '16px', padding: '44px',
              textAlign: 'center', cursor: 'pointer', marginBottom: '24px',
              background: 'rgba(255,230,109,0.08)', transform: 'rotate(0.3deg)',
            }}>
              <p style={{ fontSize: '28px', marginBottom: '4px' }}>📎</p>
              <p className={caveat.className} style={{ fontSize: '20px', fontWeight: 600, color: '#3A3226', marginBottom: '2px' }}>Stick your files here!</p>
              <p style={{ fontSize: '12px', color: 'rgba(58,50,38,0.4)' }}>PDFs, text files, photos of notes</p>
            </div>
            <button
              className={caveat.className}
              style={{
                padding: '14px 36px', background: '#4ECDC4', color: '#FFF', border: 'none',
                borderRadius: '12px', fontSize: '22px', fontWeight: 700, cursor: 'pointer',
                boxShadow: '3px 4px 0px rgba(0,0,0,0.1)',
              }}
            >Generate! 🚀</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '660px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '32px' }}>{concepts[selected].icon}</span>
            </div>
            <h2 className={caveat.className} style={{ fontSize: '48px', fontWeight: 700, marginBottom: '28px', color: '#3A3226', transform: 'rotate(-0.5deg)' }}>{concepts[selected].title}</h2>

            {/* Story sticky note */}
            <div style={{
              borderRadius: '4px', padding: '28px', marginBottom: '24px',
              background: `${concepts[selected].color}30`,
              boxShadow: '4px 5px 0px rgba(0,0,0,0.06)',
              transform: 'rotate(-0.3deg)', position: 'relative',
            }}>
              {/* Tape */}
              <div style={{
                position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%) rotate(2deg)',
                width: '80px', height: '24px', background: 'rgba(255,230,109,0.6)',
                borderRadius: '2px', opacity: 0.7,
              }} />
              <p className={caveat.className} style={{ fontSize: '16px', fontWeight: 600, color: concepts[selected].pin, marginBottom: '10px', letterSpacing: '0.05em' }}>📖 The Story</p>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: '#4A4035' }}>{concepts[selected].story}</p>
            </div>

            {/* Memory Hooks */}
            <p className={caveat.className} style={{ fontSize: '22px', fontWeight: 700, color: '#3A3226', marginBottom: '14px', transform: 'rotate(0.3deg)' }}>🧠 Memory Hooks</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {concepts[selected].hooks.map((m: { hook: string; target: string; color: string }, i: number) => (
                <div key={i} style={{
                  display: 'flex', gap: '12px', padding: '14px 16px',
                  background: `${m.color}18`, borderRadius: '12px',
                  borderLeft: `4px solid ${m.color}`,
                  boxShadow: '2px 3px 0px rgba(0,0,0,0.04)',
                  transform: `rotate(${(i % 2 === 0 ? -0.3 : 0.3)}deg)`,
                  animation: `fadeIn 0.3s ease-out ${0.15 + i * 0.06}s both`,
                }}>
                  <span className={caveat.className} style={{ fontSize: '18px', fontWeight: 700, color: '#3A3226', whiteSpace: 'nowrap' }}>{m.hook}</span>
                  <span style={{ fontSize: '13px', color: '#6B5D4F', alignSelf: 'center' }}>{m.target}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={12} bgColor="rgba(255,248,240,0.95)" textColor="#3A3226" accentColor="#FF6B6B" hoverBg="rgba(255,107,107,0.1)" borderColor="rgba(255,107,107,0.2)" />
    </div>
  );
}
