'use client';

import { Cinzel, Raleway } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const concepts = [
  { id: 1, title: 'Photosynthesis', sub: 'The Alchemy of Light', story: `In an era when the world was young, the great Architect planted emerald temples called Chloroplasts within every leaf. Inside these temples, priests of Chlorophyll performed the sacred rite: they raised golden chalices toward the sun, gathering its radiance. With this captured light, they performed the Ritual of Splitting — cleaving water into the breath of life (oxygen) and precious electron gems. These gems processed through the Grand Chain, a magnificent series of golden arches, each transfer releasing energy that was minted into ATP — the currency of all living things. In the temple's inner sanctum, the Calvin Artisans took common air (CO₂) and, using ATP's power, wove it into glucose — the bread of existence. Thus, from sunlight and air, life's sustenance was born.`, hooks: [{ hook: 'Emerald Temples', target: 'Chloroplasts — organelles in plant cells' }, { hook: 'Golden Chalices', target: 'Chlorophyll captures photons of light' }, { hook: 'Ritual of Splitting', target: 'Photolysis: H₂O → O₂ + H⁺ + e⁻' }, { hook: 'Grand Chain', target: 'Electron Transport Chain → ATP synthesis' }, { hook: 'Calvin Artisans', target: 'Calvin Cycle fixes CO₂ into glucose' }] },
  { id: 2, title: 'Quantum Entanglement', sub: 'The Invisible Thread', story: `Long before the age of reason, wise ones spoke of threads that bind all things together. Modern seekers discovered this to be literally true: when particles touch in the quantum realm, they become forever bound. Measure one, and its partner dances in response — across galaxies, across the void. The ancient masters called this "spooky action at a distance," and some still refuse to believe. Yet the thread endures, unbreakable, a reminder that at the deepest level, all separation is illusion.`, hooks: [{ hook: 'Quantum Thread', target: 'Entangled particles share correlated states' }, { hook: 'Spooky Action', target: "Einstein's famous objection" }, { hook: 'Instant Response', target: 'Changes propagate faster than light' }, { hook: 'No Separation', target: 'At quantum level, all is connected' }] },
  { id: 3, title: 'Mitochondria', sub: 'The Inner Furnace', story: `In the beginning, there was only one cell, and it was cold and hungry. Then came the wandering bacterium, a ancient flame-bearer, and the cell welcomed it in. The guest never left — it became the furnace within, the spark of life. Now every breath you take feeds this ancient fire, which turns air and food into the energy of existence. Without it, no thought, no heartbeat, no life. We are hosts to bacterial gods.`, hooks: [{ hook: 'Ancient Furnace', target: 'Mitochondria originated from bacteria' }, { hook: 'Spark of Life', target: 'Generates ATP from glucose and oxygen' }, { hook: 'Maternal Gift', target: 'mtDNA passed only from mother' }, { hook: 'Inner Fire', target: 'Powers every cell in your body' }] },
  { id: 4, title: 'Neural Networks', sub: 'The Thinking Loom', story: `In the great looms of creation, threads of thought are woven into understanding. The mind's loom has neurons for threads, synapses for connections. Each time we learn, new patterns emerge — threads that fire together, wire together. In silicon, seekers built their own looms: layers upon layers of artificial threads, learning from countless examples. Show a machine enough cats, and it learns to see. Show it enough words, and it learns to speak. The loom weaves thought from data.`, hooks: [{ hook: 'Mental Loom', target: 'Neurons connected by synapses' }, { hook: 'Wire Together', target: 'Neurons that fire together, wire together' }, { hook: 'Data Threads', target: 'Artificial neurons learn from examples' }, { hook: 'Pattern Weaving', target: 'Deep networks see complex patterns' }] },
  { id: 5, title: 'DNA Replication', sub: 'The Scribe\'s Art', story: `Before life can multiply, it must first copy its sacred texts. The great Scribe within each cell performs this holy work: unzipping the double helix, reading each letter, and writing its complement. A always pairs with T, C always with G — an unbreakable law. The result: two perfect copies, each half old, half new. Thus the message of life passes unchanged from generation to generation.`, hooks: [{ hook: 'Master Scribe', target: 'DNA polymerase copies with 99.9% accuracy' }, { hook: 'Unzipping', target: 'Helicase opens the double helix' }, { hook: 'Perfect Pairs', target: 'A-T, C-G — always matched' }, { hook: 'Half & Half', target: 'Semi-conservative: each new DNA has one old strand' }] },
];

export default function Design4() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={raleway.className} style={{ minHeight: '100vh', background: '#0B0B0D', color: '#E8DFD0', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      {/* Art Deco pattern */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.02, pointerEvents: 'none' }}>
        <svg width="100%" height="100%"><defs><pattern id="deco" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="#C9A44C" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#deco)"/></svg>
      </div>
      <div style={{ position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '200px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(201,164,76,0.05) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh', borderRight: '1px solid rgba(201,164,76,0.12)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: 'rgba(11,11,13,0.9)',
      }}>
        <div style={{ padding: '32px 24px', textAlign: 'center', borderBottom: '1px solid rgba(201,164,76,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <div style={{ width: '28px', height: '1px', background: 'linear-gradient(to right, transparent, #C9A44C)' }} />
            <span className={cinzel.className} style={{ fontSize: '8px', letterSpacing: '0.4em', color: '#C9A44C' }}>EST. 2024</span>
            <div style={{ width: '28px', height: '1px', background: 'linear-gradient(to left, transparent, #C9A44C)' }} />
          </div>
          <h1 className={cinzel.className} style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.15em', color: '#C9A44C' }}>LEARNLORE</h1>
        </div>
        <div style={{ padding: '16px 20px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '12px', background: 'transparent', border: '1px solid rgba(201,164,76,0.3)',
              borderRadius: '4px', color: '#C9A44C', fontFamily: 'inherit', fontWeight: 600, fontSize: '12px',
              cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,164,76,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >◆ New Concept</button>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '18px 24px', cursor: 'pointer',
                borderBottom: '1px solid rgba(201,164,76,0.06)',
                background: selected === i && !showNew ? 'rgba(201,164,76,0.06)' : 'transparent',
                borderLeft: selected === i && !showNew ? '2px solid #C9A44C' : '2px solid transparent',
                transition: 'all 0.2s', animation: `fadeIn 0.4s ease-out ${i * 0.06}s both`,
              }}
            >
              <p className={cinzel.className} style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px', letterSpacing: '0.02em' }}>{c.title}</p>
              <span style={{ fontSize: '11px', fontStyle: 'italic', color: 'rgba(232,223,208,0.35)' }}>{c.sub}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '72px 48px', maxWidth: '640px', margin: '0 auto', textAlign: 'center', animation: 'fadeInUp 0.5s ease-out' }}>
            <h2 className={cinzel.className} style={{ fontSize: '32px', fontWeight: 700, color: '#C9A44C', letterSpacing: '0.08em', marginBottom: '8px' }}>New Concept</h2>
            <p style={{ fontSize: '13px', color: 'rgba(232,223,208,0.4)', marginBottom: '40px', fontStyle: 'italic' }}>Enter a concept or upload your study material</p>
            <input
              type="text" placeholder="e.g. The Silk Road, Thermodynamics..."
              style={{
                width: '100%', padding: '18px', border: '1px solid rgba(201,164,76,0.25)',
                borderRadius: '4px', background: 'transparent', fontFamily: 'inherit',
                fontSize: '16px', color: '#E8DFD0', outline: 'none', marginBottom: '24px', textAlign: 'center',
              }}
            />
            <div style={{
              border: '1px dashed rgba(201,164,76,0.2)', borderRadius: '4px', padding: '48px',
              marginBottom: '28px', cursor: 'pointer',
            }}>
              <p className={cinzel.className} style={{ fontSize: '13px', color: '#C9A44C', letterSpacing: '0.1em', marginBottom: '6px' }}>Drop Files Here</p>
              <p style={{ fontSize: '11px', color: 'rgba(232,223,208,0.3)' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button style={{
              padding: '14px 40px', background: 'transparent', border: '1px solid rgba(201,164,76,0.4)',
              borderRadius: '4px', color: '#C9A44C', fontFamily: 'inherit', fontWeight: 600, fontSize: '13px',
              cursor: 'pointer', letterSpacing: '0.1em',
            }}>Generate ◆</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '720px', margin: '0 auto', animation: 'fadeInUp 0.5s ease-out' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A44C', marginBottom: '12px', textAlign: 'center' }}>CONCEPT {concepts[selected].id}</p>
            <h2 className={cinzel.className} style={{ fontSize: '40px', fontWeight: 800, textAlign: 'center', letterSpacing: '0.06em', marginBottom: '4px' }}>{concepts[selected].title}</h2>
            <p className={cinzel.className} style={{ fontSize: '16px', fontStyle: 'italic', textAlign: 'center', color: 'rgba(232,223,208,0.5)', marginBottom: '48px' }}>{concepts[selected].sub}</p>

            {/* Story */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,164,76,0.2))' }} />
                <span className={cinzel.className} style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#C9A44C' }}>THE STORY</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,164,76,0.2))' }} />
              </div>
              <div style={{ border: '1px solid rgba(201,164,76,0.1)', borderRadius: '4px', padding: '32px', position: 'relative' }}>
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => (
                  <div key={pos} style={{
                    position: 'absolute',
                    [pos.includes('top') ? 'top' : 'bottom']: '-1px',
                    [pos.includes('left') ? 'left' : 'right']: '-1px',
                    width: '12px', height: '12px',
                    borderTop: pos.includes('top') ? '2px solid #C9A44C' : 'none',
                    borderBottom: pos.includes('bottom') ? '2px solid #C9A44C' : 'none',
                    borderLeft: pos.includes('left') ? '2px solid #C9A44C' : 'none',
                    borderRight: pos.includes('right') ? '2px solid #C9A44C' : 'none',
                  }} />
                ))}
                <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(232,223,208,0.8)', fontStyle: 'italic' }}>{concepts[selected].story}</p>
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,164,76,0.2))' }} />
                <span className={cinzel.className} style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#C9A44C' }}>MEMORY HOOKS</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,164,76,0.2))' }} />
              </div>
              {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '16px 0', borderBottom: '1px solid rgba(232,223,208,0.06)',
                  animation: `fadeIn 0.4s ease-out ${0.2 + i * 0.06}s both`,
                }}>
                  <span className={cinzel.className} style={{ fontSize: '14px', fontWeight: 600, color: '#C9A44C' }}>{m.hook}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(232,223,208,0.5)', textAlign: 'right' }}>{m.target}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={4} bgColor="rgba(11,11,13,0.95)" textColor="#E8DFD0" accentColor="#C9A44C" hoverBg="rgba(201,164,76,0.1)" borderColor="rgba(201,164,76,0.15)" />
    </div>
  );
}
