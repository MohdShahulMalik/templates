'use client';

import { Orbitron, Exo_2 } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const exo2 = Exo_2({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const concepts = [
  { id: 1, title: 'PHOTOSYNTHESIS', sig: 'BIO-001', status: 'DECODED', story: `NARRATIVE FEED // BEGIN TRANSMISSION —— Inside the bio-dome designated CHLOROPLAST, operatives codenamed CHLOROPHYLL intercept incoming photon streams from SOL-PRIME. Each captured photon triggers Protocol PHOTOLYSIS: water molecules are fractured, releasing O₂ exhaust through STOMATA vents and freeing electron carriers. These carriers ride the ELECTRON TRANSPORT CHAIN — a high-voltage conduit — generating ATP power cells. Downstream, the CALVIN CYCLE subroutine activates: CO₂ inputs are processed through RUBISCO enzymes, assembling hexose sugars (C₆H₁₂O₆). Output: chemical energy stored, oxygen broadcast. —— END TRANSMISSION`, hooks: [{ hook: 'CHLOROPHYLL OPS', target: 'Light-absorbing pigment molecules' }, { hook: 'PHOTOLYSIS PROTOCOL', target: '2H₂O → 4H⁺ + O₂ + 4e⁻' }, { hook: 'HIGH-VOLTAGE CONDUIT', target: 'ETC generates ATP via chemiosmosis' }, { hook: 'RUBISCO ENGINE', target: 'Key enzyme in Calvin Cycle CO₂ fixation' }, { hook: 'STOMATA VENTS', target: 'Pores releasing O₂, absorbing CO₂' }] },
  { id: 2, title: 'QUANTUM ENTANGLEMENT', sig: 'PHY-007', status: 'DECODED', story: `NARRATIVE FEED // BEGIN TRANSMISSION —— Subject: QUANTUM ENTANGLEMENT. Two particles, once interacting, become forever correlated regardless of spatial separation. When Particle A's spin is measured as UP, Particle B's spin instantaneously becomes DOWN. This "spooky action" violates classical locality but quantum mechanics confirms it. Applications include QUANTUM TELEPORTATION, super-secure encryption via QKD protocols, and next-gen computing with entangled qubit arrays. Einstein's EPR paradox disproven by Bell test experiments. Reality is non-local. —— END TRANSMISSION`, hooks: [{ hook: 'QUANTUM TWINS', target: 'Entangled particles share correlated states' }, { hook: 'SPOOKY ACTION', target: "Einstein's famous objection - proven wrong" }, { hook: 'NON-LOCAL REALITY', target: 'Information travels faster than light (sort of)' }, { hook: 'QKD PROTOCOL', target: 'Quantum Key Distribution for secure encryption' }] },
  { id: 3, title: 'MITOCHONDRIA', sig: 'BIO-003', status: 'DECODED', story: `NARRATIVE FEED // BEGIN TRANSMISSION —— Organelle designated MITOCHONDRIA: ancient bacterial endosymbiont, now essential for cellular respiration. Triple-membrane structure contains ELECTRON TRANSPORT CHAIN and ATP SYNTHASE turbines. Primary function: oxidize glucose derivatives to generate 36-38 ATP per glucose molecule. Contains independent circular DNA genome (mtDNA), maternally inherited. Dysfunction linked to metabolic diseases, aging, neurodegeneration. Code: PASS THE ENERGY. —— END TRANSMISSION`, hooks: [{ hook: 'ANCIENT BACTERIA', target: 'Once independent, now part of our cells' }, { hook: '⚡ TURBINES', target: 'ATP synthase generates 36-38 ATP per glucose' }, { hook: '👩 MATERNAL DNA', target: 'mtDNA inherited only from mother' }, { hook: '🔋 POWERHOUSE', target: 'Generates cellular energy currency' }] },
  { id: 4, title: 'NEURAL NETWORKS', sig: 'CS-042', status: 'DECODED', story: `NARRATIVE FEED // BEGIN TRANSMISSION —— Architecture: LAYERS of interconnected NEURONS (nodes). Each connection has adjustable WEIGHT. Forward propagation: input → hidden layers → output. Backpropagation: error gradients flow backward, updating weights via gradient descent. Deep learning: 152+ layers (ResNet). Applications: image recognition, NLP, game playing, protein folding. Emergent behaviors: GPT models show reasoning without explicit programming. —— END TRANSMISSION`, hooks: [{ hook: '🧠 NEURAL LAYERS', target: 'Input → Hidden → Output layers' }, { hook: '⚖️ WEIGHTS', target: 'Connection strengths learned from data' }, { hook: '🔄 BACKPROP', target: 'Error gradients update weights' }, { hook: '📈 DEEP LEARNING', target: '152+ layers can learn anything' }] },
  { id: 5, title: 'DNA REPLICATION', sig: 'BIO-012', status: 'DECODED', story: `NARRATIVE FEED // BEGIN TRANSMISSION —— Biological copying protocol: HELICASE unzips double helix at origin of replication. Single-strand binding proteins stabilize exposed strands. PRIMASE lays down RNA primers. DNA POLYMERASE III synthesizes new strands 5'→3'. Leading strand: continuous synthesis. Lagging strand: Okazaki fragments. LIGASE seals gaps. Final product: two identical double helices, each SEMI-CONSERVATIVE (one old strand, one new). Error rate: 1 in 10^9 bases. —— END TRANSMISSION`, hooks: [{ hook: '🔓 HELICASE', target: 'Unzips the double helix' }, { hook: '📝 POLYMERASE', target: 'Synthesizes new DNA strand' }, { hook: '🔗 OKAZAKI FRAGMENTS', target: 'Discontinuous synthesis on lagging strand' }, { hook: '📋 SEMI-CONSERVATIVE', target: 'One old strand, one new strand per DNA' }] },
];

export default function Design3() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={exo2.className} style={{ minHeight: '100vh', background: '#08080F', color: '#C8CDE0', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      {/* Grid BG */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
        <svg width="100%" height="100%"><defs><pattern id="cybergrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00F0FF" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#cybergrid)"/></svg>
      </div>
      {/* Glow */}
      <div style={{ position: 'fixed', top: '5%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(30px)' }} />
      <div style={{ position: 'fixed', bottom: '10%', right: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,45,123,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(30px)' }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '260px', minHeight: '100vh', borderRight: '1px solid rgba(0,240,255,0.1)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 2,
        background: 'rgba(8,8,15,0.8)', backdropFilter: 'blur(10px)',
      }}>
        <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(0,240,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', border: '1.5px solid #00F0FF', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0,240,255,0.2)' }}>
            <span className={orbitron.className} style={{ fontSize: '12px', fontWeight: 900, color: '#00F0FF' }}>L</span>
          </div>
          <span className={orbitron.className} style={{ fontSize: '14px', fontWeight: 700, color: '#00F0FF', letterSpacing: '0.1em' }}>LEARNLORE</span>
        </div>
        <div style={{ padding: '12px 16px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '10px', background: 'rgba(0,240,255,0.08)',
              border: '1px solid rgba(0,240,255,0.3)', borderRadius: '8px', color: '#00F0FF',
              fontFamily: 'inherit', fontWeight: 600, fontSize: '12px', cursor: 'pointer',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              boxShadow: '0 0 12px rgba(0,240,255,0.1)',
            }}
          >+ NEW SCAN</button>
        </div>
        <div style={{ padding: '8px 16px' }}>
          <span className={orbitron.className} style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(200,205,224,0.3)' }}>▸ DECODED CONCEPTS</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '14px 16px', cursor: 'pointer', borderLeft: selected === i && !showNew ? '2px solid #00F0FF' : '2px solid transparent',
                background: selected === i && !showNew ? 'rgba(0,240,255,0.05)' : 'transparent',
                transition: 'all 0.2s', animation: `fadeIn 0.3s ease-out ${i * 0.05}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                <span className={orbitron.className} style={{ fontSize: '10px', fontWeight: 600, color: selected === i && !showNew ? '#00F0FF' : '#C8CDE0' }}>{c.title}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '9px', color: 'rgba(200,205,224,0.3)' }}>{c.sig}</span>
                <span style={{ fontSize: '8px', color: '#00F0FF', opacity: 0.5 }}>{c.status}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 2 }}>
        {showNew ? (
          <div style={{ padding: '60px 40px', maxWidth: '640px', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={orbitron.className} style={{ fontSize: '28px', fontWeight: 900, color: '#00F0FF', letterSpacing: '0.06em', marginBottom: '8px', textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>NEW SCAN_</h2>
            <p style={{ fontSize: '12px', color: 'rgba(200,205,224,0.4)', marginBottom: '32px', letterSpacing: '0.05em' }}>INPUT CONCEPT OR UPLOAD DATA FILES FOR ANALYSIS</p>
            <input
              type="text" placeholder="ENTER CONCEPT IDENTIFIER..."
              style={{
                width: '100%', padding: '14px 16px', border: '1px solid rgba(0,240,255,0.3)',
                borderRadius: '8px', background: 'rgba(0,240,255,0.03)', fontFamily: 'inherit',
                fontSize: '14px', color: '#C8CDE0', outline: 'none', marginBottom: '20px',
              }}
            />
            <div style={{
              border: '1px dashed rgba(0,240,255,0.2)', borderRadius: '10px', padding: '48px',
              textAlign: 'center', cursor: 'pointer', marginBottom: '24px', background: 'rgba(0,240,255,0.02)',
            }}>
              <p className={orbitron.className} style={{ fontSize: '11px', color: '#00F0FF', letterSpacing: '0.1em', marginBottom: '6px' }}>▸ DROP DATA FILES</p>
              <p style={{ fontSize: '10px', color: 'rgba(200,205,224,0.3)' }}>PDF • TXT • PNG • JPG</p>
            </div>
            <button style={{
              padding: '12px 28px', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.4)',
              borderRadius: '8px', color: '#00F0FF', fontFamily: 'inherit', fontWeight: 600, fontSize: '12px',
              cursor: 'pointer', letterSpacing: '0.1em', boxShadow: '0 0 16px rgba(0,240,255,0.15)',
            }}>INITIATE DECODE ▸</button>
          </div>
        ) : (
          <div style={{ padding: '40px', maxWidth: '720px', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ marginBottom: '8px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span className={orbitron.className} style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#FF2D7B' }}>● REC</span>
              <span style={{ fontSize: '9px', color: 'rgba(200,205,224,0.3)' }}>{concepts[selected].sig}</span>
            </div>
            <h2 className={orbitron.className} style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: '#FFF', letterSpacing: '0.05em', marginBottom: '32px', textShadow: '0 0 30px rgba(0,240,255,0.25)' }}>{concepts[selected].title}</h2>

            {/* Story */}
            <div style={{ marginBottom: '32px' }}>
              <span className={orbitron.className} style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(200,205,224,0.35)', display: 'block', marginBottom: '12px' }}>▸ NARRATIVE TRANSMISSION</span>
              <div style={{
                border: '1px solid rgba(0,240,255,0.12)', borderRadius: '12px', padding: '24px',
                background: 'rgba(0,240,255,0.02)', position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '16px', height: '16px', borderTop: '2px solid #00F0FF', borderLeft: '2px solid #00F0FF' }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '16px', height: '16px', borderBottom: '2px solid #FF2D7B', borderRight: '2px solid #FF2D7B' }} />
                <p style={{ fontSize: '13px', lineHeight: 1.9, color: 'rgba(200,205,224,0.8)' }}>{concepts[selected].story}</p>
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <span className={orbitron.className} style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(200,205,224,0.35)', display: 'block', marginBottom: '12px' }}>▸ MEMORY PROTOCOLS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                  <div key={i} style={{
                    display: 'flex', gap: '16px', padding: '14px 16px',
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: '8px', animation: `fadeIn 0.3s ease-out ${0.2 + i * 0.05}s both`,
                  }}>
                    <span className={orbitron.className} style={{ fontSize: '10px', fontWeight: 700, color: '#00F0FF', whiteSpace: 'nowrap', minWidth: '150px' }}>{m.hook}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(200,205,224,0.5)' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={3} bgColor="rgba(8,8,15,0.95)" textColor="#C8CDE0" accentColor="#00F0FF" hoverBg="rgba(0,240,255,0.1)" borderColor="rgba(0,240,255,0.15)" />
    </div>
  );
}
