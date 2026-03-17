'use client';

import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const concepts = [
  {
    id: 1, title: 'Photosynthesis', subtitle: 'Nature\'s Solar Engine', date: 'Vol. I, No. 1',
    story: `In a village called Chloroplast, green workers named Chlorophyll wake each morning when sunlight floods through the membrane walls. They catch photons like fishermen cast nets into a golden river. Each captured photon powers a tiny water-splitting machine — cracking H₂O into hydrogen, oxygen, and raw energy. The oxygen drifts away as exhaust, floating up through stomata chimneys. Meanwhile, the hydrogen riders carry their energy tokens down an electron transport chain — a microscopic roller coaster — generating ATP coins. These coins fund the Calvin Cycle bakery next door, where CO₂ molecules are kneaded into glucose bread. The whole village hums: light in, sugar out, oxygen as a gift to the world above.`,
    hooks: [
      { hook: 'Green Workers', target: 'Chlorophyll molecules absorb light' },
      { hook: 'Water Splitter', target: 'Photolysis: 2H₂O → 4H⁺ + O₂ + 4e⁻' },
      { hook: 'Roller Coaster', target: 'Electron transport chain → ATP synthesis' },
      { hook: 'Bakery', target: 'Calvin Cycle fixes CO₂ into glucose' },
      { hook: 'Chimney', target: 'Stomata release O₂ into atmosphere' },
    ],
  },
  {
    id: 2, title: 'Quantum Entanglement', subtitle: 'The Invisible Thread', date: 'Vol. I, No. 2',
    story: `Deep in the subatomic world, two particles meet and become forever linked. Separate them by inches or by galaxies — it makes no difference. Measure one particle's spin, and you instantly know the spin of its partner. No signal passes between them; no light-speed messenger carries the news. They simply know. Einstein called this "spooky action at a distance" and refused to believe it. Yet every experiment since has confirmed the phenomenon. Entangled particles share a quantum state that cannot be described independently. They are, in a very real sense, one thing wearing two masks.`,
    hooks: [
      { hook: 'Twin Particles', target: 'Entangled pairs share correlated quantum states' },
      { hook: 'Spooky Action', target: 'Einstein\'s famous objection to non-locality' },
      { hook: 'No Messenger', target: 'Correlation without signal propagation' },
      { hook: 'Two Masks', target: 'One quantum state, two physical manifestations' },
    ],
  },
  {
    id: 3, title: 'Mitochondria', subtitle: 'The Ancient Furnace Within', date: 'Vol. I, No. 3',
    story: `Billions of years ago, a wandering bacterium was engulfed by a larger cell — but instead of being digested, it struck a deal. "I will make energy for you," it offered, "if you give me shelter." The deal held for eons. That bacterium became the mitochondrion, and every cell in your body still honors the ancient bargain. These tiny organelles burn glucose with oxygen, churning out ATP — the universal fuel of life. They carry their own circular DNA, a relic of independence, passed down exclusively through mothers. You are, in the most literal sense, powered by ancient captive bacteria.`,
    hooks: [
      { hook: 'Ancient Bargain', target: 'Endosymbiotic origin of mitochondria' },
      { hook: 'Energy Furnace', target: 'Oxidative phosphorylation produces ATP' },
      { hook: 'Circular DNA', target: 'mtDNA — relic of bacterial independence' },
      { hook: 'Maternal Line', target: 'Mitochondrial DNA inherited only from mother' },
    ],
  },
  {
    id: 4, title: 'Neural Networks', subtitle: 'Silicon Minds in Training', date: 'Vol. I, No. 4',
    story: `In the architecture of artificial intelligence, neurons are simple mathematical functions stacked in layers. Each connection between neurons carries a weight — a number that determines how strongly one neuron influences the next. During training, the network sees millions of examples and adjusts these weights to reduce errors. Show it enough cats, and it learns "cat." Show it enough language, and it learns to write. The magic is not in any single neuron but in the collective pattern of weights — a distributed intelligence that no single part understands.`,
    hooks: [
      { hook: 'Stacked Layers', target: 'Neural networks are layers of mathematical functions' },
      { hook: 'Weight Numbers', target: 'Connection strengths adjusted during training' },
      { hook: 'Error Reduction', target: 'Backpropagation minimizes prediction errors' },
      { hook: 'Distributed Mind', target: 'Intelligence emerges from collective weights' },
    ],
  },
  {
    id: 5, title: 'DNA Replication', subtitle: 'Copying the Book of Life', date: 'Vol. I, No. 5',
    story: `Before any cell divides, it must first photocopy its entire genome — three billion letters of genetic code. The enzyme helicase unzips the double helix like opening a zipper. DNA polymerase then reads each exposed strand and builds its complement: A always pairs with T, C always pairs with G. The result is two identical copies, each carrying one original strand and one freshly made strand. This "semi-conservative" method is so accurate that errors occur less than once per billion letters copied. It is the most faithful copying machine in the known universe.`,
    hooks: [
      { hook: 'Zipper Enzyme', target: 'Helicase unwinds the double helix' },
      { hook: 'Faithful Copier', target: 'DNA polymerase: <1 error per billion bases' },
      { hook: 'A-T, C-G', target: 'Complementary base pairing rules' },
      { hook: 'Half & Half', target: 'Semi-conservative: one old + one new strand' },
    ],
  },
];

export default function Design9() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={sourceSans.className} style={{ minHeight: '100vh', background: '#F5F0E8', color: '#2C2416', display: 'flex', position: 'relative' }}>
      {/* Subtle texture */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.04, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '300px', minHeight: '100vh', borderRight: '2px solid #2C2416',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: '#F5F0E8',
      }}>
        <div style={{ padding: '28px 24px 20px', borderBottom: '2px solid #2C2416' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
            <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', color: '#8B7D6B' }}>SINCE 2024</span>
            <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', color: '#8B7D6B' }}>DAILY</span>
          </div>
          <div style={{ borderBottom: '1px solid #2C2416', marginBottom: '6px' }} />
          <h1 className={playfair.className} style={{ fontSize: '34px', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.5px', lineHeight: 1 }}>The LearnLore</h1>
          <div style={{ borderTop: '1px solid #2C2416', marginTop: '6px' }} />
          <p style={{ fontSize: '9px', textAlign: 'center', letterSpacing: '0.3em', color: '#8B7D6B', marginTop: '4px', textTransform: 'uppercase' }}>"All the knowledge that's fit to remember"</p>
        </div>
        <div style={{ padding: '14px 20px' }}>
          <button
            onClick={() => setShowNew(true)}
            className={playfair.className}
            style={{
              width: '100%', padding: '11px', background: '#2C2416', color: '#F5F0E8',
              border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >+ New Edition</button>
        </div>
        <div style={{ padding: '4px 24px 8px' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', color: '#8B7D6B', textTransform: 'uppercase', borderBottom: '1px solid #8B7D6B', paddingBottom: '2px' }}>ARCHIVE</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '16px 24px', cursor: 'pointer',
                borderBottom: '1px solid rgba(44,36,22,0.12)',
                background: selected === i && !showNew ? 'rgba(44,36,22,0.05)' : 'transparent',
                transition: 'all 0.2s', animation: `fadeIn 0.4s ease-out ${i * 0.06}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                <span className={playfair.className} style={{ fontSize: '16px', fontWeight: 700 }}>{c.title}</span>
                <span style={{ fontSize: '9px', color: '#8B7D6B', fontStyle: 'italic' }}>{c.date}</span>
              </div>
              <p className={playfair.className} style={{ fontSize: '12px', fontStyle: 'italic', color: '#8B7D6B', margin: 0 }}>{c.subtitle}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '64px 48px', maxWidth: '640px', margin: '0 auto', animation: 'fadeInUp 0.5s ease-out' }}>
            <h2 className={playfair.className} style={{ fontSize: '40px', fontWeight: 900, marginBottom: '4px', textAlign: 'center' }}>New Edition</h2>
            <p className={playfair.className} style={{ fontSize: '15px', fontStyle: 'italic', color: '#8B7D6B', marginBottom: '40px', textAlign: 'center' }}>Submit a concept or upload your study materials for analysis.</p>
            <div style={{ borderTop: '2px solid #2C2416', borderBottom: '1px solid #2C2416', padding: '4px 0', marginBottom: '32px' }}>
              <div style={{ borderBottom: '2px solid #2C2416', paddingBottom: '4px' }} />
            </div>
            <input
              type="text" placeholder="Enter a concept to explore..."
              className={playfair.className}
              style={{
                width: '100%', padding: '14px 0', border: 'none', borderBottom: '1px solid rgba(44,36,22,0.3)',
                background: 'transparent', fontSize: '20px', fontWeight: 500, color: '#2C2416',
                outline: 'none', marginBottom: '28px', fontStyle: 'italic',
              }}
            />
            <div style={{
              border: '1px dashed rgba(44,36,22,0.25)', padding: '40px', textAlign: 'center',
              cursor: 'pointer', marginBottom: '28px',
            }}>
              <p className={playfair.className} style={{ fontSize: '16px', fontStyle: 'italic', color: '#6B5D4F', marginBottom: '4px' }}>Upload Source Material</p>
              <p style={{ fontSize: '11px', color: '#8B7D6B' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button className={playfair.className} style={{
                padding: '13px 40px', background: '#2C2416', color: '#F5F0E8', border: 'none',
                fontSize: '14px', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.05em',
              }}>Publish →</button>
            </div>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '700px', margin: '0 auto', animation: 'fadeInUp 0.5s ease-out' }}>
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: '#8B7D6B', textTransform: 'uppercase' }}>{concepts[selected].date}</span>
            </div>
            <h2 className={playfair.className} style={{ fontSize: '48px', fontWeight: 900, textAlign: 'center', lineHeight: 1.1, marginBottom: '6px', letterSpacing: '-0.5px' }}>{concepts[selected].title}</h2>
            <p className={playfair.className} style={{ fontSize: '18px', fontStyle: 'italic', textAlign: 'center', color: '#8B7D6B', marginBottom: '24px' }}>{concepts[selected].subtitle}</p>
            <div style={{ borderTop: '2px solid #2C2416', borderBottom: '1px solid #2C2416', padding: '3px 0', marginBottom: '32px' }}>
              <div style={{ borderBottom: '2px solid #2C2416' }} />
            </div>

            {/* Story */}
            <div style={{ marginBottom: '40px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', color: '#8B7D6B', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>THE NARRATIVE</span>
              <p className={playfair.className} style={{ fontSize: '17px', lineHeight: 1.95, color: '#3D3425' }}>
                <span style={{ fontSize: '52px', fontWeight: 900, float: 'left', lineHeight: '0.82', marginRight: '6px', marginTop: '5px', color: '#2C2416' }}>{concepts[selected].story[0]}</span>
                {concepts[selected].story.slice(1)}
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(44,36,22,0.15)', marginBottom: '28px' }} />

            {/* Memory Hooks */}
            <div>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', color: '#8B7D6B', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>MEMORY HOOKS</span>
              <div style={{ borderTop: '2px solid #2C2416' }}>
                {concepts[selected].hooks.map((m, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '170px 1fr',
                    borderBottom: '1px solid rgba(44,36,22,0.12)',
                    animation: `fadeIn 0.4s ease-out ${0.2 + i * 0.06}s both`,
                  }}>
                    <div style={{ padding: '14px 12px 14px 0', borderRight: '1px solid rgba(44,36,22,0.12)' }}>
                      <span className={playfair.className} style={{ fontSize: '15px', fontWeight: 700, fontStyle: 'italic' }}>{m.hook}</span>
                    </div>
                    <div style={{ padding: '14px 0 14px 12px' }}>
                      <span style={{ fontSize: '13px', color: '#6B5D4F' }}>{m.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <span style={{ fontSize: '18px', color: '#8B7D6B' }}>❧</span>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={9} bgColor="rgba(44,36,22,0.92)" textColor="#F5F0E8" accentColor="#C4A265" hoverBg="rgba(196,162,101,0.12)" borderColor="rgba(245,240,232,0.15)" />
    </div>
  );
}
