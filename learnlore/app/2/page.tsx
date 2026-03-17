'use client';

import { DM_Serif_Display, Nunito } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

const concepts = [
  { id: 1, title: 'Photosynthesis', emoji: '🌿', date: '2h ago', story: `Once upon a time, in the heart of every leaf, there existed a magical green kingdom called Chloroplast. The tiny villagers — the Chlorophyll family — were sun catchers by trade. Every morning they spread their emerald nets wide, catching golden sunbeams that poured through the leaf's translucent ceiling. With each sunbeam caught, they powered their legendary Water Wheel, which split water droplets into breath (oxygen) and sparkling hydrogen gems. These gems traveled along Crystal Bridge — an electron chain that produced shimmering ATP coins. Next door, at the Calvin Bakery, baker molecules kneaded air (CO₂) and ATP together, producing sweet glucose loaves that fed the entire plant kingdom above.`, hooks: [{ hook: '🌿 Sun Catchers', target: 'Chlorophyll absorbs light energy' }, { hook: '💧 Water Wheel', target: 'Photolysis splits H₂O → O₂ + H⁺ + e⁻' }, { hook: '🌉 Crystal Bridge', target: 'Electron transport chain makes ATP' }, { hook: '🍞 Calvin Bakery', target: 'Calvin Cycle: CO₂ → Glucose (C₆H₁₂O₆)' }, { hook: '💨 Breath Chimney', target: 'Stomata release oxygen to atmosphere' }] },
  { id: 2, title: 'Quantum Entanglement', emoji: '✨', date: '1d ago', story: `Deep in the quantum realm, particles play by different rules. When two particles become entangled, they form an invisible bond that transcends space and time. Measure one particle's spin, and its twin instantly reveals the opposite spin — regardless of the distance between them. It's like having two coins that always land on opposite sides, even when flipped on different continents simultaneously. Einstein famously called this "spooky action at a distance," refusing to accept that information could travel faster than light. Yet experiment after experiment confirms it: entangled particles are bound in a shared quantum state, their fates intertwined forever.`, hooks: [{ hook: '✨ Quantum Twins', target: 'Entangled particles share correlated states' }, { hook: '👻 Spooky Action', target: "Einstein's famous objection" }, { hook: '🪙 Opposite Coins', target: 'Measuring one instantly determines the other' }, { hook: '🌍 Beyond Distance', target: 'Works across any distance in the universe' }] },
  { id: 3, title: 'Mitochondria', emoji: '🔬', date: '3d ago', story: `Long ago, a wandering bacterium swam into a larger cell. Instead of being eaten, it was welcomed in as a guest — then as family. Over billions of years, it became the mitochondria, the powerhouse of the cell. This tiny organelle has its own circular DNA, a relic of its independent past, passed down only through the maternal line. Every second, thousands of mitochondria churn out ATP, the energy currency that powers every heartbeat, every thought, every blink. Without them, complex life would never have evolved. We are, quite literally, powered by ancient bacteria.`, hooks: [{ hook: '🔬 Ancient Guest', target: 'Mitochondria was once an independent bacterium' }, { hook: '⚡ Powerhouse', target: 'Generates ATP from glucose and oxygen' }, { hook: '👩 Maternal DNA', target: 'Inherited only from your mother' }, { hook: '💎 Energy Currency', target: 'ATP powers all cellular processes' }] },
  { id: 4, title: 'Neural Networks', emoji: '🧠', date: '1w ago', story: `In the architecture of intelligence, neurons are the workers and synapses are the connections between them. When you learn something new, pathways strengthen — neurons that fire together, wire together. Neural networks in computers mimic this with layers of artificial neurons. Each connection has a "weight" that adjusts through training. Show a network enough pictures of cats, and it learns to recognize cats — not through rules, but through patterns extracted from millions of examples. The deeper the network, the more complex the patterns it can perceive.`, hooks: [{ hook: '🧠 Neural Architects', target: 'Layers of artificial neurons process information' }, { hook: '🔗 Synaptic Weights', target: 'Connection strengths learned from data' }, { hook: '📚 Pattern Learning', target: 'Learns from examples, not explicit rules' }, { hook: '📈 Deep Layers', target: 'Deeper networks see more complex patterns' }] },
  { id: 5, title: 'DNA Replication', emoji: '🧬', date: '2w ago', story: `Before a cell can divide, it must copy its instructions — a precise molecular photocopying job. The enzyme helicase unzips the double helix, splitting it into two strands. Then DNA polymerase reads each strand and builds a new complementary strand. Adenine always pairs with thymine; cytosine always pairs with guanine — a perfect, error-free pairing. The result: two identical DNA molecules, each containing one original strand and one new copy. This semi-conservative method ensures genetic information passes faithfully from generation to generation.`, hooks: [{ hook: '🧬 Master Copier', target: 'DNA polymerase replicates with 99.9% accuracy' }, { hook: '🔓 Helicase', target: 'Unzips the double helix at replication fork' }, { hook: 'A-T, C-G', target: 'Base pairing rules: always matched perfectly' }, { hook: '📋 Semi-Conservative', target: 'Each new DNA has one old, one new strand' }] },
];

export default function Design2() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={nunito.className} style={{ minHeight: '100vh', background: '#F7F3ED', color: '#3D3929', display: 'flex' }}>
      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh', background: '#FEFCF8',
        borderRight: '1px solid rgba(61,57,41,0.08)', display: 'flex', flexDirection: 'column',
        flexShrink: 0, animation: 'fadeIn 0.4s ease-out',
      }}>
        <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #8DB580, #C4D7A4)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: '16px',
          }}>🌱</div>
          <span className={dmSerif.className} style={{ fontSize: '20px', color: '#5B7A4A' }}>LearnLore</span>
        </div>
        <div style={{ padding: '0 16px 16px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '14px', background: 'linear-gradient(135deg, #8DB580, #A8C99B)',
              color: '#FFF', border: 'none', borderRadius: '14px', fontFamily: 'inherit',
              fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(141,181,128,0.3)', transition: 'transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >✦ New Concept</button>
        </div>
        <div style={{ padding: '0 16px', marginBottom: '8px' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(61,57,41,0.35)', textTransform: 'uppercase' }}>Recent</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 10px' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '14px 14px', borderRadius: '12px', cursor: 'pointer', marginBottom: '4px',
                background: selected === i && !showNew ? 'rgba(141,181,128,0.12)' : 'transparent',
                transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '10px',
                animation: `slideInLeft 0.3s ease-out ${i * 0.06}s both`,
              }}
              onMouseEnter={e => { if (selected !== i || showNew) e.currentTarget.style.background = 'rgba(141,181,128,0.06)'; }}
              onMouseLeave={e => { if (selected !== i || showNew) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: '20px' }}>{c.emoji}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '13px', fontWeight: 700, marginBottom: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</p>
                <span style={{ fontSize: '11px', color: 'rgba(61,57,41,0.4)' }}>{c.date}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', padding: '0' }}>
        {showNew ? (
          <div style={{ padding: '60px 48px', maxWidth: '640px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={dmSerif.className} style={{ fontSize: '36px', marginBottom: '8px', color: '#5B7A4A' }}>Plant a new idea</h2>
            <p style={{ fontSize: '14px', color: 'rgba(61,57,41,0.5)', marginBottom: '36px' }}>Type a concept or upload your study material — PDFs, text, or photos of notes.</p>
            <input
              type="text" placeholder="What would you like to learn?"
              style={{
                width: '100%', padding: '18px 20px', border: '2px solid rgba(141,181,128,0.3)',
                borderRadius: '16px', background: '#FEFCF8', fontFamily: 'inherit', fontSize: '16px',
                outline: 'none', marginBottom: '20px', color: '#3D3929',
              }}
            />
            <div style={{
              border: '2px dashed rgba(141,181,128,0.3)', borderRadius: '16px', padding: '48px',
              textAlign: 'center', cursor: 'pointer', marginBottom: '24px', background: 'rgba(141,181,128,0.03)',
            }}>
              <p style={{ fontSize: '24px', marginBottom: '8px' }}>🌱</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#5B7A4A', marginBottom: '4px' }}>Drop your files here</p>
              <p style={{ fontSize: '12px', color: 'rgba(61,57,41,0.4)' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button style={{
              padding: '16px 36px', background: 'linear-gradient(135deg, #8DB580, #A8C99B)',
              color: '#FFF', border: 'none', borderRadius: '14px', fontFamily: 'inherit',
              fontWeight: 700, fontSize: '15px', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(141,181,128,0.3)',
            }}>Generate Story ✦</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '680px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>{concepts[selected].emoji}</span>
              <span style={{ fontSize: '11px', color: 'rgba(61,57,41,0.35)', fontWeight: 600 }}>{concepts[selected].date}</span>
            </div>
            <h2 className={dmSerif.className} style={{ fontSize: '38px', marginBottom: '36px', color: '#3D3929', lineHeight: 1.2 }}>{concepts[selected].title}</h2>

            {/* Story */}
            <div style={{
              background: '#FEFCF8', borderRadius: '20px', padding: '28px',
              border: '1px solid rgba(141,181,128,0.15)', marginBottom: '28px',
              boxShadow: '0 2px 12px rgba(61,57,41,0.04)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#8DB580', marginBottom: '14px', textTransform: 'uppercase' }}>✦ Story</p>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: '#555040' }}>{concepts[selected].story}</p>
            </div>

            {/* Memory Hooks */}
            <div style={{
              background: '#FEFCF8', borderRadius: '20px', padding: '28px',
              border: '1px solid rgba(141,181,128,0.15)',
              boxShadow: '0 2px 12px rgba(61,57,41,0.04)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#8DB580', marginBottom: '18px', textTransform: 'uppercase' }}>✦ Memory Hooks</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                  <div key={i} style={{
                    display: 'flex', gap: '14px', padding: '14px 16px',
                    background: 'rgba(141,181,128,0.06)', borderRadius: '14px',
                    animation: `fadeIn 0.3s ease-out ${0.15 + i * 0.06}s both`,
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#5B7A4A', whiteSpace: 'nowrap' }}>{m.hook}</span>
                    <span style={{ fontSize: '13px', color: '#6B6350' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={2} bgColor="rgba(254,252,248,0.95)" textColor="#3D3929" accentColor="#5B7A4A" hoverBg="rgba(141,181,128,0.12)" borderColor="rgba(141,181,128,0.2)" />
    </div>
  );
}
