'use client';

import { Audiowide, Quicksand } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const concepts = [
  {
    id: 1, title: 'Photosynthesis', tag: 'BIO', color: '#FF6EC7',
    story: `In the neon bioscape of a leaf cell, chloroplasts glow like miniature reactors. Chlorophyll pigments — tuned to the solar frequency — intercept photon streams and channel them into the PHOTOLYSIS protocol. Water molecules shatter in bursts of light, releasing O₂ vapor trails and free electrons that ride the Electron Transport Highway. At each relay station, energy is siphoned off and compressed into ATP power cells. The Calvin Cycle synthesizer downstream takes atmospheric CO₂ and ATP inputs, remixing them into glucose — pure chemical fuel. The entire loop runs in real-time, converting starlight into life force, every single day.`,
    hooks: [
      { hook: '🌆 Neon Reactors', target: 'Chloroplasts convert light to chemical energy' },
      { hook: '⚡ Photon Stream', target: 'Chlorophyll captures specific light frequencies' },
      { hook: '💧 Shatter Protocol', target: 'Photolysis breaks H₂O → O₂ + H⁺ + e⁻' },
      { hook: '🛣️ Energy Highway', target: 'Electron Transport Chain generates ATP' },
      { hook: '🎛️ Synthesizer', target: 'Calvin Cycle remixes CO₂ into glucose' },
    ],
  },
  {
    id: 2, title: 'Quantum Entanglement', tag: 'PHY', color: '#00FFFF',
    story: `In the deepest layer of reality, particles dance to rules that defy common sense. When two particles become entangled, they form a bond that laughs at distance. Measure one in Tokyo, and its partner in New York responds instantly — not because a signal was sent, but because they share a single quantum state split across space. Einstein found this so disturbing he called it "spooky." Modern physicists use it to build unbreakable encryption and quantum computers that operate in parallel universes of probability.`,
    hooks: [
      { hook: '🔮 Quantum Bond', target: 'Particles share one state across any distance' },
      { hook: '👻 Spooky Link', target: 'Instantaneous correlation without signal' },
      { hook: '🔐 Crypto Shield', target: 'Quantum key distribution is theoretically unbreakable' },
      { hook: '🌀 Probability Worlds', target: 'Quantum computers exploit parallel states' },
    ],
  },
  {
    id: 3, title: 'Mitochondria', tag: 'BIO', color: '#FF6EC7',
    story: `Billions of cycles ago, a micro-organism merged with a host cell in the ultimate symbiosis. That guest never left. It became the mitochondrion — the power core running inside every one of your cells. These organelles have their own DNA, their own replication cycle, inherited only from your mother's line. They burn glucose and oxygen in a controlled chain reaction, outputting ATP — the universal energy token that powers muscle contractions, neuron firing, and every heartbeat you've ever had.`,
    hooks: [
      { hook: '🤝 Symbiosis', target: 'Ancient bacterium became permanent cellular guest' },
      { hook: '⚡ Power Core', target: 'Oxidative phosphorylation outputs ATP' },
      { hook: '🧬 Own Code', target: 'Circular mtDNA — relic of bacterial origin' },
      { hook: '👩 Mother\'s Gift', target: 'Mitochondrial DNA passes maternally' },
    ],
  },
  {
    id: 4, title: 'Neural Networks', tag: 'CS', color: '#FFFF00',
    story: `Imagine a city of billions of lights, each connected to thousands of others. Every connection has a dimmer switch. When data flows through the city — an image, a sentence, a sound — certain paths light up brighter. Through millions of examples, the dimmers adjust: bright paths become brighter, dim ones fade. Eventually the city develops instinct. Show it a cat, and the right lights fire instantly. This is a neural network: no explicit rules, just the emergent intelligence of adjusted connections.`,
    hooks: [
      { hook: '🌃 City of Lights', target: 'Neurons as interconnected processing units' },
      { hook: '🎚️ Dimmer Switches', target: 'Weights adjusted through backpropagation' },
      { hook: '📸 Pattern Flow', target: 'Data flows through layers for recognition' },
      { hook: '✨ Emergent Mind', target: 'Intelligence from collective weight patterns' },
    ],
  },
  {
    id: 5, title: 'DNA Replication', tag: 'BIO', color: '#FF6EC7',
    story: `Before the great cell division, the genome must be duplicated — all 3 billion base pairs. Helicase enzymes unzip the double helix at incredible speed. Behind them, DNA polymerase reads each strand and synthesizes the complement: A bonds T, C bonds G, always perfect. The result: two identical helices, each carrying one original and one fresh strand. Error rate? Less than one mistake per billion characters. It's the most precise copying mechanism in existence, running in every dividing cell in your body right now.`,
    hooks: [
      { hook: '🔓 Helicase Unzip', target: 'Separates double helix at replication fork' },
      { hook: '📋 Perfect Copy', target: 'Polymerase achieves <1 error per 10⁹ bases' },
      { hook: '🔗 A-T, C-G', target: 'Complementary base pairing ensures accuracy' },
      { hook: '✂️ Semi-Conservative', target: 'Each daughter DNA: one old + one new strand' },
    ],
  },
];

export default function Design10() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={quicksand.className} style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0D0221 0%, #150535 40%, #261447 70%, #0D0221 100%)',
      color: '#E0D4F5', display: 'flex', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid Floor */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '45vh',
        background: 'linear-gradient(180deg, transparent 0%, rgba(255,110,199,0.04) 100%)',
        pointerEvents: 'none', zIndex: 0,
      }}>
        <svg width="100%" height="100%" style={{ opacity: 0.08 }}>
          <defs>
            <pattern id="synthgrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#FF6EC7" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#synthgrid)" style={{ transform: 'perspective(300px) rotateX(55deg)', transformOrigin: 'bottom' }} />
        </svg>
      </div>
      {/* Sun glow */}
      <div style={{
        position: 'fixed', bottom: '8%', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '260px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.12) 0%, rgba(255,165,0,0.06) 40%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(40px)', zIndex: 0,
      }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '270px', minHeight: '100vh',
        borderRight: '1px solid rgba(255,110,199,0.12)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 2,
        background: 'rgba(13,2,33,0.85)', backdropFilter: 'blur(16px)',
      }}>
        <div style={{ padding: '24px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '6px',
            background: 'linear-gradient(135deg, #FF6EC7, #FFA500)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(255,110,199,0.4)',
          }}>
            <span className={audiowide.className} style={{ fontSize: '14px', color: '#0D0221' }}>L</span>
          </div>
          <span className={audiowide.className} style={{ fontSize: '16px', background: 'linear-gradient(90deg, #FF6EC7, #FFA500, #00FFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LEARNLORE</span>
        </div>
        <div style={{ padding: '0 14px 14px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '11px', borderRadius: '10px',
              background: 'linear-gradient(90deg, #FF6EC7, #FFA500)', color: '#0D0221',
              border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '13px',
              cursor: 'pointer', boxShadow: '0 0 20px rgba(255,110,199,0.3)',
              letterSpacing: '0.05em',
            }}
          >+ NEW WAVE</button>
        </div>
        <div style={{ padding: '8px 18px' }}>
          <span className={audiowide.className} style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(224,212,245,0.3)' }}>TRACKS</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 8px' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '13px 12px', borderRadius: '10px', cursor: 'pointer', marginBottom: '3px',
                background: selected === i && !showNew ? 'rgba(255,110,199,0.1)' : 'transparent',
                border: selected === i && !showNew ? '1px solid rgba(255,110,199,0.2)' : '1px solid transparent',
                display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s',
                animation: `slideInLeft 0.3s ease-out ${i * 0.05}s both`,
              }}
            >
              <span style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', color: c.color,
                border: `1px solid ${c.color}33`, borderRadius: '4px', padding: '2px 6px',
              }}>{c.tag}</span>
              <span style={{ fontSize: '13px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 2 }}>
        {showNew ? (
          <div style={{ padding: '60px 48px', maxWidth: '620px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={audiowide.className} style={{
              fontSize: '32px', marginBottom: '8px',
              background: 'linear-gradient(90deg, #FF6EC7, #FFA500, #00FFFF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              textShadow: 'none',
            }}>NEW WAVE</h2>
            <p style={{ fontSize: '14px', color: 'rgba(224,212,245,0.4)', marginBottom: '36px' }}>Input a concept or drop your study materials.</p>
            <input
              type="text" placeholder="Enter concept..."
              className={audiowide.className}
              style={{
                width: '100%', padding: '14px 16px',
                border: '1px solid rgba(255,110,199,0.3)',
                borderRadius: '10px', background: 'rgba(255,110,199,0.04)',
                fontFamily: 'inherit', fontSize: '15px', color: '#E0D4F5', outline: 'none',
                marginBottom: '20px',
              }}
            />
            <div style={{
              border: '1px dashed rgba(255,110,199,0.25)', borderRadius: '12px', padding: '44px',
              textAlign: 'center', cursor: 'pointer', marginBottom: '24px',
              background: 'rgba(255,110,199,0.03)',
            }}>
              <p className={audiowide.className} style={{ fontSize: '12px', color: '#FF6EC7', marginBottom: '4px' }}>DROP FILES</p>
              <p style={{ fontSize: '11px', color: 'rgba(224,212,245,0.3)' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button style={{
              padding: '12px 32px', borderRadius: '10px',
              background: 'linear-gradient(90deg, #FF6EC7, #FFA500)', color: '#0D0221',
              border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '13px',
              cursor: 'pointer', boxShadow: '0 0 20px rgba(255,110,199,0.3)',
            }}>GENERATE ▶</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '700px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: concepts[selected].color,
                border: `1px solid ${concepts[selected].color}44`, borderRadius: '4px', padding: '3px 8px',
              }}>{concepts[selected].tag}</span>
              <span style={{ fontSize: '10px', color: 'rgba(224,212,245,0.3)' }}>CONCEPT {concepts[selected].id}</span>
            </div>
            <h2 className={audiowide.className} style={{
              fontSize: '40px', marginBottom: '32px', lineHeight: 1.15,
              background: 'linear-gradient(90deg, #FF6EC7, #FFA500, #00FFFF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>{concepts[selected].title}</h2>

            {/* Story */}
            <div style={{
              borderRadius: '16px', padding: '24px', marginBottom: '20px',
              background: 'linear-gradient(135deg, rgba(255,110,199,0.06), rgba(0,255,255,0.03))',
              border: '1px solid rgba(255,110,199,0.1)',
            }}>
              <p className={audiowide.className} style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#FF6EC7', marginBottom: '12px' }}>▶ STORY</p>
              <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(224,212,245,0.75)' }}>{concepts[selected].story}</p>
            </div>

            {/* Memory Hooks */}
            <div style={{
              borderRadius: '16px', padding: '24px',
              background: 'rgba(0,255,255,0.03)', border: '1px solid rgba(0,255,255,0.08)',
            }}>
              <p className={audiowide.className} style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#00FFFF', marginBottom: '14px' }}>▶ MEMORY HOOKS</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {concepts[selected].hooks.map((m, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '14px', padding: '11px 14px',
                    background: 'rgba(255,110,199,0.04)', borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.04)',
                    animation: `fadeIn 0.3s ease-out ${0.15 + i * 0.05}s both`,
                  }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#E0D4F5', whiteSpace: 'nowrap' }}>{m.hook}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(224,212,245,0.45)' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={10} bgColor="rgba(13,2,33,0.95)" textColor="#E0D4F5" accentColor="#FF6EC7" hoverBg="rgba(255,110,199,0.12)" borderColor="rgba(255,110,199,0.2)" />
    </div>
  );
}
