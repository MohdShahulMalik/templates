'use client';

import { Bebas_Neue, Lato } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] });

const concepts = [
  {
    id: 1, title: 'Photosynthesis', classification: 'CASE FILE #001', status: 'CLOSED',
    story: `The investigation began inside a single leaf cell. The suspects: tiny green organelles called chloroplasts. Their method: intercepting sunlight. The evidence trail is clear. Photons from the sun are absorbed by chlorophyll pigments — molecular antennae tuned to specific wavelengths. This captured energy is used to crack water molecules open, releasing oxygen as an exhaust product — the very air witnesses breathe. The liberated electrons travel through a chain of protein complexes embedded in the thylakoid membrane, each handoff banking energy into ATP. Finally, the Calvin Cycle operation takes atmospheric CO₂ and, using that stored ATP, assembles it into glucose. The operation is clean. No waste. Running 24/7 in every illuminated leaf on the planet. Case closed.`,
    hooks: [
      { hook: 'GREEN SUSPECTS', target: 'Chloroplasts — scene of the crime' },
      { hook: 'MOLECULAR ANTENNAE', target: 'Chlorophyll absorbs λ 400-700nm' },
      { hook: 'CRACKED OPEN', target: 'Photolysis: H₂O → O₂ + H⁺ + e⁻' },
      { hook: 'PROTEIN CHAIN', target: 'Electron Transport Chain → ATP' },
      { hook: 'THE OPERATION', target: 'Calvin Cycle: CO₂ → glucose (C₆H₁₂O₆)' },
    ],
  },
  {
    id: 2, title: 'Quantum Entanglement', classification: 'CASE FILE #007', status: 'OPEN',
    story: `This is the strangest case in the files. Two particles, once connected, maintain an invisible link across any distance. Interrogate one in Moscow, and its partner in Buenos Aires instantaneously confesses the complementary state. No signal is transmitted. No wire connects them. Einstein called it "spooky action at a distance" and spent years trying to expose it as a fraud. He failed. Bell's inequalities proved that no local hidden variable theory could explain the correlations. The connection is real, non-local, and instantaneous. It defies every intuition about how the universe should work. The case remains open.`,
    hooks: [
      { hook: 'INVISIBLE LINK', target: 'Entangled particles share quantum state' },
      { hook: 'SIMULTANEOUS CONFESSION', target: 'Measurement of A determines B instantly' },
      { hook: 'EINSTEIN\'S FRAUD CLAIM', target: 'EPR paradox — local realism argument' },
      { hook: 'BELL\'S PROOF', target: 'No hidden variables explain the correlations' },
    ],
  },
  {
    id: 3, title: 'Mitochondria', classification: 'CASE FILE #003', status: 'COLD CASE',
    story: `Approximately two billion years ago, a larger cell engulfed a smaller bacterium. The expected outcome: digestion. The actual outcome: a partnership that changed the course of life on Earth. The bacterium became the mitochondrion — a permanent tenant that generates ATP in exchange for shelter and raw materials. Evidence of its independent past remains: its own circular DNA, its own bacterial-type ribosomes (70S), its double membrane (the outer one — the original food vacuole). All of it is inherited solely through the maternal line. Every human mitochondrion traces an unbroken chain back to a single woman — "Mitochondrial Eve."`,
    hooks: [
      { hook: 'THE ENGULFING', target: 'Endosymbiotic event ~2 billion years ago' },
      { hook: 'PERMANENT TENANT', target: 'Mitochondrion generates ATP for the cell' },
      { hook: 'EVIDENCE TRAIL', target: 'Own DNA, own ribosomes, double membrane' },
      { hook: 'MITOCHONDRIAL EVE', target: 'All human mtDNA traces to one maternal ancestor' },
    ],
  },
  {
    id: 4, title: 'Neural Networks', classification: 'CASE FILE #042', status: 'ACTIVE',
    story: `The network operates silently. Millions of nodes, connected by weighted edges, arranged in layers. Data enters at one end — raw numbers, pixels, text tokens — and travels forward through the network. At each node, incoming signals are weighted, summed, and passed through an activation function. The output is compared against the truth. The error is propagated backward, and every weight in the network is nudged slightly toward smaller error. Repeat this billions of times. The network develops what can only be described as instinct. It recognizes patterns no human programmed. It makes decisions no human can fully explain. The question is no longer whether it works. The question is how far it goes.`,
    hooks: [
      { hook: 'SILENT NETWORK', target: 'Layers of nodes connected by weighted edges' },
      { hook: 'FORWARD PASS', target: 'Data flows input → hidden → output' },
      { hook: 'BACKWARD NUDGE', target: 'Backpropagation adjusts all weights' },
      { hook: 'INSTINCT', target: 'Emergent pattern recognition from training' },
    ],
  },
  {
    id: 5, title: 'DNA Replication', classification: 'CASE FILE #012', status: 'CLOSED',
    story: `The most precise copying operation known to exist. Before any cell division, the entire genome — three billion base pairs — must be duplicated with near-perfect fidelity. The enzyme helicase arrives at the origin of replication and pries the two strands apart. Single-strand binding proteins stabilize the exposed DNA. DNA polymerase then reads each strand, assembling the complementary sequence one nucleotide at a time: A pairs with T, C pairs with G. The leading strand is copied continuously. The lagging strand is synthesized in fragments (Okazaki), later sealed by ligase. Final error rate: approximately 10⁻⁹ per base after proofreading and mismatch repair. The most reliable copy machine in existence.`,
    hooks: [
      { hook: 'THE HEIST PREP', target: 'Full genome must be copied before cell division' },
      { hook: 'PRYING APART', target: 'Helicase separates the double helix' },
      { hook: 'FRAGMENT TRAIL', target: 'Okazaki fragments on lagging strand' },
      { hook: 'PERFECT FIDELITY', target: '~10⁻⁹ errors/base after repair systems' },
    ],
  },
];

export default function Design13() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={lato.className} style={{
      minHeight: '100vh', background: '#0F0F0F', color: '#E8E8E8',
      display: 'flex', position: 'relative', overflow: 'hidden',
    }}>
      {/* Film grain */}
      <div style={{
        position: 'fixed', inset: 0, opacity: 0.035, pointerEvents: 'none', mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
      {/* Spotlight */}
      <div style={{
        position: 'fixed', top: '-10%', left: '40%', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(30px)',
      }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: 'rgba(15,15,15,0.95)',
      }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className={bebas.className} style={{ fontSize: '34px', letterSpacing: '0.12em', color: '#E8E8E8', lineHeight: 1 }}>LEARN</div>
          <div className={bebas.className} style={{ fontSize: '34px', letterSpacing: '0.12em', color: '#C41E3A', lineHeight: 1, marginTop: '-2px' }}>LORE</div>
          <div style={{ width: '100%', height: '2px', background: '#C41E3A', marginTop: '8px' }} />
        </div>
        <div style={{ padding: '14px 16px' }}>
          <button
            onClick={() => setShowNew(true)}
            className={bebas.className}
            style={{
              width: '100%', padding: '11px', background: '#C41E3A', color: '#FFF',
              border: 'none', fontSize: '18px', letterSpacing: '0.15em', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#D42E4A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C41E3A'; }}
          >+ NEW CASE</button>
        </div>
        <div style={{ padding: '8px 20px' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(232,232,232,0.2)', textTransform: 'uppercase' }}>Case Files</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '16px 20px', cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                background: selected === i && !showNew ? 'rgba(196,30,58,0.06)' : 'transparent',
                borderLeft: selected === i && !showNew ? '3px solid #C41E3A' : '3px solid transparent',
                transition: 'all 0.2s', animation: `fadeIn 0.3s ease-out ${i * 0.05}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700 }}>{c.title}</span>
                <span style={{
                  fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em',
                  color: c.status === 'OPEN' ? '#C41E3A' : c.status === 'ACTIVE' ? '#FFA500' : 'rgba(232,232,232,0.3)',
                  border: `1px solid ${c.status === 'OPEN' ? '#C41E3A44' : c.status === 'ACTIVE' ? '#FFA50044' : 'rgba(232,232,232,0.1)'}`,
                  padding: '2px 6px', borderRadius: '2px',
                }}>{c.status}</span>
              </div>
              <span style={{ fontSize: '10px', color: 'rgba(232,232,232,0.3)', letterSpacing: '0.05em' }}>{c.classification}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '60px 48px', maxWidth: '640px', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={bebas.className} style={{ fontSize: '48px', color: '#E8E8E8', letterSpacing: '0.1em', marginBottom: '4px' }}>NEW CASE</h2>
            <div style={{ width: '60px', height: '3px', background: '#C41E3A', marginBottom: '24px' }} />
            <p style={{ fontSize: '14px', color: 'rgba(232,232,232,0.4)', marginBottom: '32px' }}>Enter a subject for investigation or submit evidence files.</p>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(232,232,232,0.3)', display: 'block', marginBottom: '8px' }}>SUBJECT</span>
              <input
                type="text" placeholder="Enter subject of investigation..."
                style={{
                  width: '100%', padding: '14px', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0', background: 'rgba(255,255,255,0.03)', fontFamily: 'inherit',
                  fontSize: '15px', color: '#E8E8E8', outline: 'none',
                }}
              />
            </div>
            <div style={{
              border: '1px dashed rgba(255,255,255,0.1)', padding: '44px', textAlign: 'center',
              cursor: 'pointer', marginBottom: '24px', background: 'rgba(255,255,255,0.01)',
            }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(232,232,232,0.3)' }}>SUBMIT EVIDENCE</span>
              <p style={{ fontSize: '11px', color: 'rgba(232,232,232,0.2)', marginTop: '6px' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button className={bebas.className} style={{
              padding: '12px 36px', background: '#C41E3A', color: '#FFF', border: 'none',
              fontSize: '18px', letterSpacing: '0.15em', cursor: 'pointer',
            }}>OPEN CASE →</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '720px', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(232,232,232,0.3)' }}>{concepts[selected].classification}</span>
              <span style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
                color: concepts[selected].status === 'OPEN' ? '#C41E3A' : concepts[selected].status === 'ACTIVE' ? '#FFA500' : 'rgba(232,232,232,0.35)',
              }}>● {concepts[selected].status}</span>
            </div>
            <h2 className={bebas.className} style={{ fontSize: '56px', letterSpacing: '0.08em', lineHeight: 1, marginBottom: '6px' }}>{concepts[selected].title}</h2>
            <div style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, #C41E3A, transparent)', marginBottom: '32px' }} />

            {/* Story */}
            <div style={{ marginBottom: '36px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#C41E3A', display: 'block', marginBottom: '12px' }}>CASE NARRATIVE</span>
              <div style={{
                borderLeft: '3px solid #C41E3A', paddingLeft: '24px',
              }}>
                <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(232,232,232,0.7)', fontWeight: 300 }}>{concepts[selected].story}</p>
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#C41E3A', display: 'block', marginBottom: '14px' }}>KEY EVIDENCE</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                {concepts[selected].hooks.map((m, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '180px 1fr',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                    animation: `fadeIn 0.3s ease-out ${0.15 + i * 0.05}s both`,
                  }}>
                    <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em', color: '#E8E8E8' }}>{m.hook}</span>
                    </div>
                    <div style={{ padding: '14px 16px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(232,232,232,0.5)', fontWeight: 300 }}>{m.target}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginTop: '1px' }} />
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C41E3A' }} />
              <span style={{ fontSize: '10px', color: 'rgba(232,232,232,0.25)', letterSpacing: '0.1em' }}>END OF FILE</span>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={13} bgColor="rgba(15,15,15,0.95)" textColor="#E8E8E8" accentColor="#C41E3A" hoverBg="rgba(196,30,58,0.1)" borderColor="rgba(255,255,255,0.08)" />
    </div>
  );
}
