'use client';

import { VT323, IBM_Plex_Mono } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const vt323 = VT323({ subsets: ['latin'], weight: ['400'] });
const ibmPlex = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const concepts = [
  { id: 1, title: 'photosynthesis.dat', size: '2.4K', story: `> LOADING NARRATIVE MODULE...
> STATUS: OK

Inside every leaf-unit exists a sub-processor called CHLOROPLAST.EXE. This module runs daemon threads known as CHLOROPHYLL, which intercept incoming PHOTON packets from the SOL interface. Upon packet capture, subroutine PHOTOLYSIS executes: H2O molecules are decomposed into O2 (flushed to stdout via STOMATA port), H+ ions, and free electrons.

The electrons enter the ELECTRON_TRANSPORT_CHAIN pipeline -- a sequential process that generates ATP tokens at each relay node. Downstream, the CALVIN_CYCLE daemon consumes CO2 input and ATP tokens, outputting C6H12O6 (glucose) to the cell's energy buffer.

Result: solar energy -> chemical energy. Process runs continuously during daylight cycles.

> END OF TRANSMISSION`, hooks: [{ hook: 'CHLOROPLAST.EXE', target: 'Organelle that runs photosynthesis' }, { hook: 'PHOTON packets', target: 'Light energy absorbed by chlorophyll' }, { hook: 'PHOTOLYSIS()', target: 'Function: split H2O -> O2 + H+ + e-' }, { hook: 'ETC pipeline', target: 'Electron Transport Chain -> ATP output' }, { hook: 'CALVIN_CYCLE', target: 'Daemon: CO2 + ATP -> glucose' }] },
  { id: 2, title: 'quantum_entangle.dat', size: '3.1K', story: `> LOADING NARRATIVE MODULE...
> STATUS: OK

Entanglement protocol initiated: two particle objects (PARTICLE_A, PARTICLE_B) now share correlated quantum_state. Measurement of PARTICLE_A instantly updates PARTICLE_B.state -- regardless of spatial_distance.

Einstein_Protocol (1935) attempted to disprove this, but Bell_Tests (1964+) confirmed: LOCAL_REALISM = FALSE. Spooky action confirmed.

Applications: QUANTUM_KEY_DISTRIBUTION for secure comms, QUANTUM_TELEPORTATION for state transfer, QUANTUM_COMPUTING for parallel processing.

> END OF TRANSMISSION`, hooks: [{ hook: 'QUANTUM_STATE', target: 'Particles share correlated properties' }, { hook: 'SPOOKY ACTION', target: "Einstein's famous objection" }, { hook: 'BELL_TESTS', target: 'Experiments proved entanglement real' }, { hook: 'QUANTUM TECH', target: 'Enables secure cryptography' }] },
  { id: 3, title: 'mitochondria.dat', size: '1.8K', story: `> LOADING NARRATIVE MODULE...
> STATUS: OK

MITOCHONDRIA.OBJ loaded: ancient_prokaryote endosymbiont. Contains circular_DNA (mtDNA), inherited_matrilineally.

Function: cellular_respiration. Input: glucose + O2. Output: ATP (36-38 units per glucose).

Processes: GLYCOLYSIS (cytoplasm), KREBS_CYCLE (matrix), ELECTRON_TRANSPORT_CHAIN (membrane). Each stage extracts energy, storing as ATP.

Note: Without MITOCHONDRIA.OBJ, complex_life.exe would not initialize.

> END OF TRANSMISSION`, hooks: [{ hook: 'ENDOSYMBIONT', target: 'Ancient bacterium now in our cells' }, { hook: 'ATP FACTORY', target: 'Produces 36-38 ATP per glucose' }, { hook: 'MATERNAL DNA', target: 'mtDNA passed only from mother' }, { hook: 'POWERHOUSE', target: 'Powers all cellular functions' }] },
  { id: 4, title: 'neural_nets.dat', size: '4.2K', story: `> LOADING NARRATIVE MODULE...
> STATUS: OK

NEURAL_NETWORK.OBJ initialized: layers[] = INPUT -> HIDDEN -> OUTPUT.

Training cycle initiated: FORWARD_PROPAGATION calculates output, BACKPROPAGATION adjusts weights via gradient descent.

Data input: images/text/audio. After sufficient epochs, network recognizes patterns without explicit rules.

Architecture: CONV2D for images, TRANSFORMER for text, RNN/LSTM for sequences. Deep networks (ResNet152, GPT) achieve superhuman performance on specific tasks.

> END OF TRANSMISSION`, hooks: [{ hook: 'NEURAL LAYERS', target: 'Input -> Hidden -> Output nodes' }, { hook: 'BACKPROP', target: 'Error gradients train the network' }, { hook: 'PATTERNS', target: 'Learns from data without rules' }, { hook: 'DEEP LEARNING', target: 'More layers = more power' }] },
  { id: 5, title: 'dna_replication.dat', size: '2.9K', story: `> LOADING NARRATIVE MODULE...
> STATUS: OK

Replication sequence initiated: HELICASE.OBJ unzips double_helix at origin_of_replication.

Template strands exposed. DNA_POLYMERASE.III binds nucleotides: A->T, C->G pairing enforced.

Leading_strand: continuous synthesis. Lagging_strand: Okazaki fragments (discontinuous). LIGASE.OBJ seals gaps.

Result: two identical DNA molecules, each SEMI_CONSERVATIVE (one original strand + one new strand). Error_rate: 1 in 10^9 bases.

> END OF TRANSMISSION`, hooks: [{ hook: 'HELICASE', target: 'Unzips the DNA double helix' }, { hook: 'POLYMERASE', target: 'Adds nucleotides to build new strand' }, { hook: 'OKAZAKI', target: 'Fragments on lagging strand' }, { hook: 'SEMI-CONSERVATIVE', target: 'Each DNA has one old, one new strand' }] },
];

export default function Design7() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={ibmPlex.className} style={{
      minHeight: '100vh', background: '#0A0A0A', color: '#33FF33', display: 'flex',
      position: 'relative', overflow: 'hidden', animation: 'crtFlicker 0.15s ease-in-out infinite',
    }}>
      {/* Scanlines */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
      }} />
      {/* CRT vignette */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10,
        background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh', borderRight: '1px solid #1A3A1A',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 2,
        background: '#0A0A0A',
      }}>
        <div style={{ padding: '16px', borderBottom: '1px solid #1A3A1A' }}>
          <pre className={vt323.className} style={{ fontSize: '18px', color: '#33FF33', margin: 0, letterSpacing: '0.05em' }}>
{`┌─────────────────┐
│   LEARNLORE     │
│   v2.0.24       │
└─────────────────┘`}
          </pre>
        </div>
        <div style={{ padding: '12px 16px' }}>
          <button
            onClick={() => setShowNew(true)}
            className={vt323.className}
            style={{
              width: '100%', padding: '10px', background: '#1A3A1A', border: '1px solid #33FF33',
              color: '#33FF33', fontSize: '18px', cursor: 'pointer', textAlign: 'left',
            }}
          >[+] NEW FILE</button>
        </div>
        <div style={{ padding: '8px 16px' }}>
          <span className={vt323.className} style={{ fontSize: '16px', color: '#1A6A1A' }}>// SAVED FILES:</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              className={vt323.className}
              style={{
                padding: '10px 16px', cursor: 'pointer', fontSize: '16px',
                background: selected === i && !showNew ? '#1A3A1A' : 'transparent',
                color: selected === i && !showNew ? '#66FF66' : '#33FF33',
                borderLeft: selected === i && !showNew ? '2px solid #33FF33' : '2px solid transparent',
                transition: 'all 0.1s', animation: `fadeIn 0.2s ease-out ${i * 0.05}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{selected === i && !showNew ? '> ' : '  '}{c.title}</span>
                <span style={{ color: '#1A6A1A' }}>{c.size}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '12px 16px', borderTop: '1px solid #1A3A1A' }}>
          <span className={vt323.className} style={{ fontSize: '14px', color: '#1A6A1A' }}>MEM: 64K FREE | DISK: OK</span>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 2 }}>
        {showNew ? (
          <div style={{ padding: '40px 32px', maxWidth: '640px', animation: 'fadeIn 0.3s ease-out' }}>
            <pre className={vt323.className} style={{ fontSize: '22px', color: '#33FF33', margin: '0 0 24px 0' }}>
{`> CREATE NEW CONCEPT FILE
> ENTER DATA OR UPLOAD SOURCE`}
            </pre>
            <div style={{ marginBottom: '20px' }}>
              <span className={vt323.className} style={{ fontSize: '16px', color: '#1A6A1A', display: 'block', marginBottom: '6px' }}>CONCEPT NAME:</span>
              <input
                type="text" placeholder="type concept here..."
                className={vt323.className}
                style={{
                  width: '100%', padding: '10px', border: '1px solid #33FF33',
                  background: '#0A0A0A', color: '#33FF33', fontSize: '18px', outline: 'none',
                }}
              />
            </div>
            <div style={{
              border: '1px dashed #1A6A1A', padding: '32px', textAlign: 'center', marginBottom: '20px',
            }}>
              <pre className={vt323.className} style={{ fontSize: '16px', color: '#1A6A1A', margin: 0 }}>
{`[  DROP FILES HERE  ]
[  .PDF .TXT .PNG   ]
[  .JPG ACCEPTED    ]`}
              </pre>
            </div>
            <button
              className={vt323.className}
              style={{
                padding: '10px 24px', background: '#33FF33', border: 'none', color: '#0A0A0A',
                fontSize: '18px', cursor: 'pointer', fontWeight: 700,
              }}
            >[GENERATE]</button>
          </div>
        ) : (
          <div style={{ padding: '32px', maxWidth: '720px', animation: 'fadeIn 0.3s ease-out' }}>
            <pre className={vt323.className} style={{ fontSize: '16px', color: '#1A6A1A', margin: '0 0 8px 0' }}>
{`> cat ${concepts[selected].title}
> FILE SIZE: ${concepts[selected].size}`}
            </pre>
            <h2 className={vt323.className} style={{ fontSize: '32px', color: '#66FF66', margin: '0 0 24px 0', textTransform: 'uppercase' }}>{concepts[selected].title.replace('.dat', '')}</h2>

            {/* Story */}
            <div style={{ marginBottom: '28px' }}>
              <span className={vt323.className} style={{ fontSize: '16px', color: '#1A6A1A', display: 'block', marginBottom: '8px' }}>{'// ─── NARRATIVE OUTPUT ───'}</span>
              <div style={{ border: '1px solid #1A3A1A', padding: '20px', background: 'rgba(26,58,26,0.1)' }}>
                <pre className={vt323.className} style={{ fontSize: '16px', color: '#33FF33', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0, lineHeight: 1.6, fontFamily: 'inherit' }}>{concepts[selected].story}</pre>
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <span className={vt323.className} style={{ fontSize: '16px', color: '#1A6A1A', display: 'block', marginBottom: '8px' }}>{'// ─── MEMORY HOOKS ───'}</span>
              <div style={{ border: '1px solid #1A3A1A' }}>
                {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                  <div key={i} className={vt323.className} style={{
                    display: 'flex', gap: '16px', padding: '10px 16px', fontSize: '16px',
                    borderBottom: i < concepts[selected].hooks.length - 1 ? '1px solid #1A3A1A' : 'none',
                    animation: `fadeIn 0.2s ease-out ${0.15 + i * 0.05}s both`,
                  }}>
                    <span style={{ color: '#66FF66', minWidth: '180px' }}>[{m.hook}]</span>
                    <span style={{ color: '#1A8A1A' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>

            <pre className={vt323.className} style={{ fontSize: '14px', color: '#1A6A1A', margin: '20px 0 0 0' }}>
{`> _`}<span style={{ animation: 'blink 1s step-end infinite' }}>█</span>
            </pre>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={7} bgColor="rgba(10,10,10,0.95)" textColor="#33FF33" accentColor="#66FF66" hoverBg="rgba(51,255,51,0.1)" borderColor="rgba(51,255,51,0.2)" fontFamily="'VT323', monospace" />
    </div>
  );
}
