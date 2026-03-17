'use client';

import { Cormorant_Garamond, Manrope } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

const concepts = [
  { id: 1, title: 'Photosynthesis', subtitle: 'The quiet engine of the natural world', issue: '01', story: `Think of a leaf as a small, quiet factory on a hillside. Inside, thousands of green workshops called chloroplasts run on nothing but sunlight, water, and air. Each morning, the green pigments — the chlorophyll workers — open their shutters to the sun. They catch light the way a sail catches wind: effortlessly, inevitably. That light energy fractures water molecules, releasing oxygen as a gentle byproduct — the very air you breathe. Meanwhile, the freed electrons cascade through an intricate series of handoffs, each one banking energy into tiny molecular batteries called ATP. Downstream, in the quietest corner of the factory, the Calvin Cycle operates: pulling carbon dioxide from the atmosphere and, with patient chemistry, stitching it into glucose. Sugar from sunlight. Energy from emptiness. The oldest miracle, happening in every leaf, right now.`, hooks: [{ hook: 'The Quiet Factory', target: 'Chloroplasts — self-contained organelles in plant cells' }, { hook: 'Catching Wind', target: 'Chlorophyll absorbs photons from sunlight' }, { hook: 'Fracturing Water', target: 'Photolysis: 2H₂O → 4H⁺ + O₂ + 4e⁻' }, { hook: 'Molecular Batteries', target: 'ATP — adenosine triphosphate, the energy currency' }, { hook: 'Stitching Sugar', target: 'Calvin Cycle fixes CO₂ into glucose (C₆H₁₂O₆)' }] },
  { id: 2, title: 'Quantum Entanglement', subtitle: 'Where physics meets philosophy', issue: '02', story: `Two particles, once dancing together, can never fully part. Their fates intertwine across any distance, a cosmic marriage that defies intuition. When you measure one, the other responds instantly — not because anything travels between them, but because they were never truly separate to begin with. Einstein called it "spooky," and he was right to be unsettled. In the quantum world, knowing one thing means the other is instantly known, no matter if one particle is in your hand and the other on the edge of the observable universe.`, hooks: [{ hook: 'Cosmic Marriage', target: 'Entangled particles share one quantum state' }, { hook: 'Spooky Action', target: "Einstein's famous objection to entanglement" }, { hook: 'Instant Response', target: 'Measurement of one determines the other' }, { hook: 'Non-Local', target: 'Works across any distance in space' }] },
  { id: 3, title: 'Mitochondria', subtitle: 'A memoir of the cell\'s furnace', issue: '03', story: `Long ago, a free-living bacterium found shelter inside a larger cell. Instead of being consumed, it became essential. Now it lives in nearly every cell of your body — the mitochondria, generator of life's energy. It has its own tiny genome, a circular relic of its bacterial past, passed down exclusively from your mother. Every second, in trillions of cells, these ancient guests convert glucose and oxygen into ATP, the energy that powers every thought, every heartbeat, every step you take. Without them, you would not exist.`, hooks: [{ hook: 'Ancient Guest', target: 'Mitochondria was once an independent bacterium' }, { hook: 'Energy Generator', target: 'Produces ATP from glucose and oxygen' }, { hook: 'Maternal Gift', target: 'Mitochondrial DNA passed only from mother' }, { hook: 'Cellular Powerhouse', target: 'Powers every cell in your body' }] },
  { id: 4, title: 'Neural Networks', subtitle: 'How silicon learned to think', issue: '04', story: `In the architecture of machine learning, layers of artificial neurons process information like a digital brain. Each connection between neurons has a "weight" that determines how strongly one neuron influences another. Train the network on enough examples — pictures of cats, sentences in English, moves in chess — and these weights adjust to capture patterns. Show it enough images of a cat, and the network learns what features define a cat. Feed it enough text, and it learns grammar, context, even wit. The machine doesn't think like you do, but it learns like you do: from experience.`, hooks: [{ hook: 'Digital Neurons', target: 'Layers of nodes process information' }, { hook: 'Synaptic Weights', target: 'Connection strengths learned from data' }, { hook: 'Pattern Learning', target: 'Learns from millions of examples' }, { hook: 'Deep Learning', target: 'More layers = more complex patterns' }] },
  { id: 5, title: 'DNA Replication', subtitle: 'The faithful copying of life\'s manuscript', issue: '05', story: `Before a cell can divide, it must first duplicate its genetic instructions. The enzyme helicase acts as a zipper, pulling apart the double helix at the replication fork. Once exposed, DNA polymerase reads each strand and builds its complement: A pairs with T, C with G, always. The result is two identical DNA molecules, each containing one old strand and one new strand. This semi-conservative copying ensures that every daughter cell inherits a perfect copy of the genetic code. Error rate: about one in a billion bases.`, hooks: [{ hook: 'Master Copier', target: 'DNA polymerase copies with extreme accuracy' }, { hook: 'Unzipping', target: 'Helicase separates the double helix' }, { hook: 'Perfect Pairs', target: 'A-T and C-G always pair together' }, { hook: 'Semi-Conservative', target: 'Each new DNA has one old, one new strand' }] },
];

export default function Design5() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={manrope.className} style={{ minHeight: '100vh', background: '#FDFAF6', color: '#2A2119', display: 'flex', position: 'relative' }}>
      {/* Grain */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '300px', minHeight: '100vh', borderRight: '2px solid #2A2119',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: '#FDFAF6',
      }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(42,33,25,0.15)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', color: '#9E8E7E' }}>EST. 2024</span>
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', color: '#9E8E7E' }}>JOURNAL</span>
          </div>
          <h1 className={cormorant.className} style={{ fontSize: '32px', fontWeight: 300, letterSpacing: '0.12em', textAlign: 'center' }}>LEARNLORE</h1>
        </div>
        <div style={{ padding: '16px 20px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '12px', background: '#C41E3A', color: '#FDFAF6',
              border: 'none', borderRadius: '2px', fontFamily: 'inherit', fontWeight: 700,
              fontSize: '11px', cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase',
            }}
          >New Entry</button>
        </div>
        <div style={{ padding: '8px 24px' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#9E8E7E' }}>PAST ISSUES</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '18px 24px', cursor: 'pointer',
                borderBottom: '1px solid rgba(42,33,25,0.08)',
                background: selected === i && !showNew ? 'rgba(196,30,58,0.04)' : 'transparent',
                transition: 'all 0.2s', animation: `fadeIn 0.4s ease-out ${i * 0.06}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                <span className={cormorant.className} style={{ fontSize: '18px', fontWeight: 600 }}>{c.title}</span>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#C41E3A', letterSpacing: '0.1em' }}>N°{c.issue}</span>
              </div>
              <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: '#9E8E7E' }}>{c.subtitle}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '64px 48px', maxWidth: '640px', margin: '0 auto', animation: 'fadeInUp 0.5s ease-out' }}>
            <h2 className={cormorant.className} style={{ fontSize: '40px', fontWeight: 300, marginBottom: '12px' }}>A New Entry</h2>
            <p className={cormorant.className} style={{ fontSize: '16px', fontStyle: 'italic', color: '#9E8E7E', marginBottom: '40px' }}>Type a concept, or submit your notes, documents, and images for analysis.</p>
            <input
              type="text" placeholder="What shall we learn about?"
              className={cormorant.className}
              style={{
                width: '100%', padding: '16px 0', border: 'none', borderBottom: '2px solid #2A2119',
                background: 'transparent', fontSize: '22px', fontWeight: 400, color: '#2A2119',
                outline: 'none', marginBottom: '32px',
              }}
            />
            <div style={{
              border: '1.5px dashed rgba(42,33,25,0.2)', padding: '48px', textAlign: 'center',
              cursor: 'pointer', marginBottom: '32px',
            }}>
              <p className={cormorant.className} style={{ fontSize: '18px', color: '#6B5D4F', marginBottom: '4px' }}>Upload Materials</p>
              <p style={{ fontSize: '11px', color: '#9E8E7E' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button style={{
              padding: '14px 36px', background: '#C41E3A', color: '#FDFAF6', border: 'none',
              borderRadius: '2px', fontFamily: 'inherit', fontWeight: 700, fontSize: '12px',
              cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Generate →</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '700px', margin: '0 auto', animation: 'fadeInUp 0.5s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#C41E3A' }}>ISSUE N°{concepts[selected].issue}</span>
            </div>
            <h2 className={cormorant.className} style={{ fontSize: '48px', fontWeight: 600, lineHeight: 1.1, marginBottom: '4px' }}>{concepts[selected].title}</h2>
            <p className={cormorant.className} style={{ fontSize: '18px', fontStyle: 'italic', color: '#9E8E7E', marginBottom: '40px' }}>{concepts[selected].subtitle}</p>
            <div style={{ borderTop: '2px solid #2A2119', marginBottom: '40px' }} />

            {/* Story */}
            <div style={{ marginBottom: '48px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#C41E3A', display: 'block', marginBottom: '16px' }}>THE NARRATIVE</span>
              <p className={cormorant.className} style={{ fontSize: '19px', lineHeight: 1.9, color: '#3D3425' }}>
                <span style={{ fontSize: '48px', fontWeight: 700, float: 'left', lineHeight: '0.8', marginRight: '8px', marginTop: '6px', color: '#2A2119' }}>{concepts[selected].story[0]}</span>
                {concepts[selected].story.slice(1)}
              </p>
            </div>

            {/* Memory Hooks */}
            <div>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#C41E3A', display: 'block', marginBottom: '16px' }}>MEMORY HOOKS</span>
              <div style={{ borderTop: '2px solid #2A2119' }}>
                {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '180px 1fr', padding: '16px 0',
                    borderBottom: '1px solid rgba(42,33,25,0.1)',
                    animation: `fadeIn 0.4s ease-out ${0.2 + i * 0.06}s both`,
                  }}>
                    <span className={cormorant.className} style={{ fontSize: '17px', fontWeight: 600, fontStyle: 'italic' }}>{m.hook}</span>
                    <span style={{ fontSize: '13px', color: '#6B5D4F', alignSelf: 'center' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={5} bgColor="rgba(42,33,25,0.92)" textColor="#FDFAF6" accentColor="#C41E3A" hoverBg="rgba(196,30,58,0.1)" borderColor="rgba(253,250,246,0.15)" />
    </div>
  );
}
