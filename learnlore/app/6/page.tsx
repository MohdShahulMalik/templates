'use client';

import { Outfit, Sora } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });
const sora = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const concepts = [
  { id: 1, title: 'Photosynthesis', gradient: 'linear-gradient(135deg, #7C3AED, #06B6D4)', story: `Picture a leaf as a translucent dome — a greenhouse of microscopic proportions. Inside float thousands of chloroplasts, each one a self-contained solar farm. Within these farms, chlorophyll molecules act as antenna arrays, tuned perfectly to harvest photons streaming from the sun. When a photon strikes, it triggers a cascade: water molecules are split apart in a flash of controlled violence, releasing oxygen bubbles that drift upward and out through tiny pores. The liberated electrons flow along a chain of proteins — an electron waterfall — generating ATP energy tokens at each step. These tokens power the Calvin Cycle, a molecular assembly line that pulls carbon dioxide out of thin air and constructs glucose molecules, one carbon at a time. The whole process is silent, constant, and breathtakingly efficient — running in every sunlit leaf on Earth, right now.`, hooks: [{ hook: '🌐 Solar Farm', target: 'Chloroplasts — mini solar energy converters' }, { hook: '📡 Antenna Array', target: 'Chlorophyll absorbs specific light wavelengths' }, { hook: '💥 Flash of Violence', target: 'Photolysis splits water molecules' }, { hook: '🌊 Electron Waterfall', target: 'ETC — cascading electrons make ATP' }, { hook: '🏭 Assembly Line', target: 'Calvin Cycle builds glucose from CO₂' }] },
  { id: 2, title: 'Quantum Entanglement', gradient: 'linear-gradient(135deg, #EC4899, #7C3AED)', story: `Two particles, once brought together, share a bond that transcends space. Measure one, and the other responds instantly — not because anything travels between them, but because their fates are forever intertwined. Einstein famously called this "spooky action at a distance," and spent years trying to disprove it. But experiment after experiment has confirmed: quantum entanglement is real. Today, it enables technologies like quantum cryptography and quantum computing. The universe, at its deepest level, is not made of separate things — everything is connected.`, hooks: [{ hook: '🔗 Quantum Bond', target: 'Entangled particles share correlated states' }, { hook: '👻 Spooky Action', target: "Einstein's famous objection to entanglement" }, { hook: '⚡ Instant Response', target: 'Changes propagate faster than light' }, { hook: '🔐 Quantum Tech', target: 'Enables unbreakable cryptography' }] },
  { id: 3, title: 'Mitochondria', gradient: 'linear-gradient(135deg, #06B6D4, #10B981)', story: `Deep inside your cells, ancient guests still do the work that kept them alive billions of years ago. The mitochondria — once free-living bacteria — now serve as the power plants of the cell. They convert glucose and oxygen into ATP, the universal energy currency of life. Each one has its own tiny genome, a circular piece of DNA inherited exclusively from your mother. When you breathe, you feed these ancient symbionts. When you move, think, or dream, it's mitochondria at work.`, hooks: [{ hook: '🦠 Ancient Guest', target: 'Mitochondria was once an independent bacterium' }, { hook: '⚡ Power Plant', target: 'Generates ATP — the energy currency of life' }, { hook: '👩 Maternal DNA', target: 'mtDNA passed only from mother to child' }, { hook: '🔋 Cellular Battery', target: 'Powers every function in every cell' }] },
  { id: 4, title: 'Neural Networks', gradient: 'linear-gradient(135deg, #F59E0B, #EC4899)', story: `The brain learns by forming connections between neurons — synapses that strengthen with use. Artificial neural networks mimic this: layers of "nodes" connected by adjustable "weights." Feed the network data — images, text, sounds — and it adjusts these weights to minimize error. Train it on enough pictures of cats, and it learns to recognize cats. Train it on enough conversations, and it learns to respond. The deeper the network, the more complex the patterns it can perceive. Deep learning powers everything from voice assistants to self-driving cars.`, hooks: [{ hook: '🧠 Digital Brain', target: 'Layers of artificial neurons process data' }, { hook: '⚖️ Synaptic Weights', target: 'Connection strengths learned from examples' }, { hook: '📚 Pattern Learning', target: 'Learns from millions of training examples' }, { hook: '📈 Deep Networks', target: 'More layers = more complex patterns' }] },
  { id: 5, title: 'DNA Replication', gradient: 'linear-gradient(135deg, #10B981, #7C3AED)', story: `Before a cell can divide, it must copy its genetic instructions. The enzyme helicase unzips the double helix at the replication fork. Once separated, DNA polymerase reads each strand and builds a new complementary strand: A pairs with T, C with G, always and perfectly. The result is two identical DNA molecules, each consisting of one old strand and one new strand. This semi-conservative method has been refined over billions of years, achieving an error rate of just one in a billion bases. Every time a cell divides, this molecular Xerox performs flawlessly.`, hooks: [{ hook: '🧬 Master Copier', target: 'DNA polymerase copies with extreme accuracy' }, { hook: '🔓 Unzipping', target: 'Helicase opens the double helix' }, { hook: 'A-T, C-G', target: 'Always paired: Adenine-Thymine, Cytosine-Guanine' }, { hook: '📋 Semi-Conservative', target: 'Each new DNA has one old, one new strand' }] },
];

export default function Design6() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={sora.className} style={{ minHeight: '100vh', background: '#0C0419', color: '#E8E4F0', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      {/* Aurora */}
      <div style={{ position: 'fixed', top: '-30%', left: '-20%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 60%)', pointerEvents: 'none', filter: 'blur(60px)', animation: 'float 8s ease-in-out infinite' }} />
      <div style={{ position: 'fixed', bottom: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 60%)', pointerEvents: 'none', filter: 'blur(50px)', animation: 'float 10s ease-in-out infinite 2s' }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: 'rgba(12,4,25,0.7)', backdropFilter: 'blur(20px)',
      }}>
        <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #7C3AED, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(124,58,237,0.3)' }}>
            <span className={outfit.className} style={{ fontSize: '14px', fontWeight: 800, color: '#FFF' }}>L</span>
          </div>
          <span className={outfit.className} style={{ fontSize: '18px', fontWeight: 700, background: 'linear-gradient(135deg, #E8E4F0, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LearnLore</span>
        </div>
        <div style={{ padding: '0 16px 16px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '12px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #7C3AED, #EC4899)', color: '#FFF',
              border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '13px',
              cursor: 'pointer', boxShadow: '0 4px 16px rgba(124,58,237,0.3)',
            }}
          >✦ New Concept</button>
        </div>
        <div style={{ padding: '8px 20px' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(232,228,240,0.3)', textTransform: 'uppercase' }}>Library</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 8px' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '14px 14px', borderRadius: '12px', cursor: 'pointer', marginBottom: '4px',
                background: selected === i && !showNew ? 'rgba(124,58,237,0.12)' : 'transparent',
                border: selected === i && !showNew ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent',
                display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s',
                animation: `slideInLeft 0.3s ease-out ${i * 0.06}s both`,
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.gradient, flexShrink: 0 }} />
              <span style={{ fontSize: '13px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '60px 48px', maxWidth: '640px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={outfit.className} style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px', background: 'linear-gradient(135deg, #E8E4F0, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>New Concept</h2>
            <p style={{ fontSize: '14px', color: 'rgba(232,228,240,0.4)', marginBottom: '36px' }}>Type a concept or upload your study material.</p>
            <input
              type="text" placeholder="What do you want to learn?"
              style={{
                width: '100%', padding: '16px 20px', border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: '14px', background: 'rgba(124,58,237,0.05)', fontFamily: 'inherit',
                fontSize: '15px', color: '#E8E4F0', outline: 'none', marginBottom: '20px',
              }}
            />
            <div style={{
              border: '1px dashed rgba(124,58,237,0.25)', borderRadius: '16px', padding: '48px',
              textAlign: 'center', cursor: 'pointer', marginBottom: '24px', background: 'rgba(124,58,237,0.03)',
            }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#7C3AED', marginBottom: '4px' }}>Drop files here</p>
              <p style={{ fontSize: '12px', color: 'rgba(232,228,240,0.3)' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button style={{
              padding: '14px 32px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #7C3AED, #EC4899)', color: '#FFF',
              border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(124,58,237,0.3)',
            }}>Generate ✦</button>
          </div>
        ) : (
          <div style={{ padding: '48px', maxWidth: '700px', margin: '0 auto', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: concepts[selected].gradient }} />
              <span style={{ fontSize: '11px', color: 'rgba(232,228,240,0.35)', fontWeight: 500 }}>Concept {concepts[selected].id}</span>
            </div>
            <h2 className={outfit.className} style={{ fontSize: '42px', fontWeight: 800, marginBottom: '36px', background: 'linear-gradient(135deg, #E8E4F0, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{concepts[selected].title}</h2>

            {/* Story */}
            <div style={{
              borderRadius: '20px', padding: '28px', marginBottom: '24px',
              background: 'linear-gradient(145deg, rgba(124,58,237,0.08), rgba(6,182,212,0.04))',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#7C3AED', marginBottom: '14px', textTransform: 'uppercase' }}>✦ Story</p>
              <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(232,228,240,0.8)' }}>{concepts[selected].story}</p>
            </div>

            {/* Memory Hooks */}
            <div style={{
              borderRadius: '20px', padding: '28px',
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#06B6D4', marginBottom: '16px', textTransform: 'uppercase' }}>✦ Memory Hooks</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                  <div key={i} style={{
                    display: 'flex', gap: '14px', padding: '12px 14px',
                    background: 'rgba(124,58,237,0.05)', borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.04)',
                    animation: `fadeIn 0.3s ease-out ${0.15 + i * 0.06}s both`,
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#E8E4F0', whiteSpace: 'nowrap' }}>{m.hook}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(232,228,240,0.5)' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={6} bgColor="rgba(12,4,25,0.95)" textColor="#E8E4F0" accentColor="#7C3AED" hoverBg="rgba(124,58,237,0.12)" borderColor="rgba(124,58,237,0.2)" />
    </div>
  );
}
