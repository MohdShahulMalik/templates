'use client';

import { Azeret_Mono, Archivo } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const azeretMono = Azeret_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const archivo = Archivo({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

const concepts = [
  {
    id: 1, title: 'Photosynthesis', ref: 'DWG-BIO-001', rev: 'R3',
    story: `SPECIFICATION: The chloroplast module operates as a self-contained photovoltaic-to-chemical energy converter. INPUT: Photon flux (λ 400–700nm), H₂O, CO₂. PRIMARY PROCESS: Chlorophyll antenna complexes capture photons and funnel excitation energy to reaction centers P680/P700. Water oxidation complex (Mn₄CaO₅) performs photolysis: 2H₂O → O₂ + 4H⁺ + 4e⁻. Electrons traverse the thylakoid membrane via Plastoquinone → Cytochrome b6f → Plastocyanin → PSI → Ferredoxin → NADP⁺ reductase. Proton motive force drives ATP synthase. SECONDARY PROCESS: Calvin-Benson Cycle — RuBisCO fixes CO₂ onto RuBP (C5), producing 2x G3P (C3). Three turns yield one net G3P; six turns yield one glucose (C₆H₁₂O₆). OUTPUT: Glucose + O₂. EFFICIENCY: ~3–6% of total solar energy.`,
    hooks: [
      { hook: 'ANTENNA ARRAY', target: 'Chlorophyll complexes funnel light → reaction centers' },
      { hook: 'Mn₄CaO₅ CLUSTER', target: 'Water oxidation complex performs photolysis' },
      { hook: 'PROTON PUMP', target: 'H⁺ gradient drives ATP synthase rotation' },
      { hook: 'RUBISCO ENGINE', target: 'Fixes CO₂ onto RuBP in Calvin Cycle' },
      { hook: 'G3P OUTPUT', target: '3-carbon product; 2 G3P = 1 glucose' },
    ],
  },
  {
    id: 2, title: 'Quantum Entanglement', ref: 'DWG-PHY-007', rev: 'R2',
    story: `SPECIFICATION: Quantum entanglement occurs when two or more particles interact such that the quantum state of each cannot be described independently. MECHANISM: Pair creation via parametric down-conversion or atomic cascade produces correlated photon pairs. Measurement of particle A collapses the shared wavefunction, instantaneously determining particle B's state regardless of spatial separation. NOTE: No faster-than-light information transfer — requires classical channel for verification (Bell's theorem). APPLICATION: QKD (BB84 protocol), quantum teleportation, entanglement-assisted computation.`,
    hooks: [
      { hook: 'WAVEFUNCTION COLLAPSE', target: 'Measurement of A instantly determines B' },
      { hook: 'BELL\'S THEOREM', target: 'No local hidden variable theory is sufficient' },
      { hook: 'CLASSICAL CHANNEL', target: 'FTL communication still impossible' },
      { hook: 'BB84 PROTOCOL', target: 'Quantum key distribution using entangled photons' },
    ],
  },
  {
    id: 3, title: 'Mitochondria', ref: 'DWG-BIO-003', rev: 'R4',
    story: `SPECIFICATION: Mitochondria are double-membraned organelles of endosymbiotic origin (α-proteobacterium ancestor). PRIMARY FUNCTION: Oxidative phosphorylation. Glucose is broken down via glycolysis (cytoplasm) → pyruvate → Krebs Cycle (matrix) → NADH/FADH₂ → ETC (inner membrane). Complexes I-IV transfer electrons; Complex V (ATP synthase) produces ~34 ATP per glucose. GENOME: Circular mtDNA (16,569 bp in humans), encodes 37 genes. INHERITANCE: Strictly maternal (no paternal mtDNA contribution). NOTE: Contains own ribosomes (70S, bacterial-type).`,
    hooks: [
      { hook: 'DOUBLE MEMBRANE', target: 'Inner membrane houses ETC complexes I-V' },
      { hook: 'KREBS CYCLE', target: 'Matrix reactions produce NADH + FADH₂' },
      { hook: '34 ATP / GLUCOSE', target: 'Total oxidative phosphorylation yield' },
      { hook: '16,569 bp', target: 'Human mtDNA length — circular genome' },
    ],
  },
  {
    id: 4, title: 'Neural Networks', ref: 'DWG-CS-042', rev: 'R6',
    story: `SPECIFICATION: Artificial neural networks (ANNs) are directed weighted graphs organized in layers. ARCHITECTURE: Input layer → Hidden layer(s) → Output layer. Each connection has weight wᵢⱼ. Node activation: a = σ(Σ wᵢⱼxᵢ + b) where σ is activation function (ReLU, sigmoid, tanh). TRAINING: Forward pass → compute loss L → backward pass (backpropagation) → gradient descent updates: w' = w - η·∂L/∂w. VARIANTS: CNN (convolutional), RNN (recurrent), Transformer (self-attention). CONVERGENCE: Dependent on learning rate η, batch size, architecture depth.`,
    hooks: [
      { hook: 'WEIGHTED GRAPH', target: 'Nodes connected by adjustable weights wᵢⱼ' },
      { hook: 'ACTIVATION σ', target: 'Non-linear function enables complex mappings' },
      { hook: 'BACKPROPAGATION', target: 'Chain rule computes ∂L/∂w for all weights' },
      { hook: 'TRANSFORMER', target: 'Self-attention mechanism — key architecture in LLMs' },
    ],
  },
  {
    id: 5, title: 'DNA Replication', ref: 'DWG-BIO-012', rev: 'R3',
    story: `SPECIFICATION: Semi-conservative DNA replication occurs during S-phase. INITIATION: Origin Recognition Complex (ORC) binds replication origins. Helicase (MCM2-7) unwinds dsDNA at ~1000 bp/s. Single-strand binding proteins (SSB) stabilize ssDNA. ELONGATION: DNA Polymerase III (prokaryotes) / Pol ε/δ (eukaryotes) synthesize 5'→3'. Leading strand: continuous. Lagging strand: Okazaki fragments (~100-200 bp eukaryotes). Primase synthesizes RNA primers. TERMINATION: Ligase seals nicks. ERROR RATE: ~10⁻⁹ after proofreading + mismatch repair.`,
    hooks: [
      { hook: 'ORC BINDING', target: 'Origin Recognition Complex initiates replication' },
      { hook: 'MCM HELICASE', target: 'Unwinds DNA at ~1000 base pairs/second' },
      { hook: 'OKAZAKI FRAGMENTS', target: 'Lagging strand synthesized in short pieces' },
      { hook: '10⁻⁹ ERROR RATE', target: 'After proofreading + mismatch repair' },
    ],
  },
];

export default function Design11() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={archivo.className} style={{ minHeight: '100vh', background: '#0A1628', color: '#C8D8F0', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      {/* Graph paper */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="bpgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4A90D9" strokeWidth="0.5" />
            </pattern>
            <pattern id="bpgridlg" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#4A90D9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bpgrid)" />
          <rect width="100%" height="100%" fill="url(#bpgridlg)" />
        </svg>
      </div>

      {/* SIDEBAR */}
      <aside style={{
        width: '280px', minHeight: '100vh',
        borderRight: '1px solid rgba(74,144,217,0.15)',
        display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative', zIndex: 1,
        background: 'rgba(10,22,40,0.9)', backdropFilter: 'blur(12px)',
      }}>
        <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(74,144,217,0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '4px', border: '1.5px solid #4A90D9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className={azeretMono.className} style={{ fontSize: '12px', fontWeight: 700, color: '#4A90D9' }}>LL</span>
          </div>
          <span className={azeretMono.className} style={{ fontSize: '13px', fontWeight: 600, color: '#4A90D9', letterSpacing: '0.1em' }}>LEARNLORE CAD</span>
        </div>
        <div style={{ padding: '12px 14px' }}>
          <button
            onClick={() => setShowNew(true)}
            className={azeretMono.className}
            style={{
              width: '100%', padding: '10px', background: 'rgba(74,144,217,0.1)',
              border: '1px solid rgba(74,144,217,0.3)', borderRadius: '6px',
              color: '#4A90D9', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
          >+ NEW DRAWING</button>
        </div>
        <div style={{ padding: '8px 16px' }}>
          <span className={azeretMono.className} style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(200,216,240,0.25)' }}>DRAWING INDEX</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              className={azeretMono.className}
              style={{
                padding: '12px 16px', cursor: 'pointer', fontSize: '12px',
                borderLeft: selected === i && !showNew ? '2px solid #4A90D9' : '2px solid transparent',
                background: selected === i && !showNew ? 'rgba(74,144,217,0.06)' : 'transparent',
                borderBottom: '1px solid rgba(74,144,217,0.06)', transition: 'all 0.2s',
                animation: `fadeIn 0.3s ease-out ${i * 0.05}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ fontWeight: 600, color: selected === i && !showNew ? '#4A90D9' : '#C8D8F0' }}>{c.title}</span>
                <span style={{ fontSize: '10px', color: 'rgba(200,216,240,0.3)' }}>{c.rev}</span>
              </div>
              <span style={{ fontSize: '10px', color: 'rgba(200,216,240,0.3)' }}>{c.ref}</span>
            </div>
          ))}
        </div>
        <div className={azeretMono.className} style={{ padding: '12px 16px', borderTop: '1px solid rgba(74,144,217,0.1)', fontSize: '9px', color: 'rgba(200,216,240,0.2)' }}>
          SCALE: MICRO | UNITS: nm/kDa
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 1 }}>
        {showNew ? (
          <div style={{ padding: '48px 40px', maxWidth: '640px', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 className={azeretMono.className} style={{ fontSize: '24px', fontWeight: 700, color: '#4A90D9', marginBottom: '6px', letterSpacing: '0.05em' }}>NEW DRAWING</h2>
            <p className={azeretMono.className} style={{ fontSize: '12px', color: 'rgba(200,216,240,0.35)', marginBottom: '32px' }}>ENTER CONCEPT OR UPLOAD REFERENCE DOCUMENTS</p>
            <div style={{ marginBottom: '20px' }}>
              <span className={azeretMono.className} style={{ fontSize: '10px', color: 'rgba(200,216,240,0.4)', display: 'block', marginBottom: '6px' }}>CONCEPT IDENTIFIER:</span>
              <input
                type="text" placeholder="e.g. Krebs Cycle, Relativity..."
                className={azeretMono.className}
                style={{
                  width: '100%', padding: '12px 14px', border: '1px solid rgba(74,144,217,0.3)',
                  borderRadius: '6px', background: 'rgba(74,144,217,0.04)', fontSize: '13px',
                  color: '#C8D8F0', outline: 'none',
                }}
              />
            </div>
            <div style={{
              border: '1px dashed rgba(74,144,217,0.25)', borderRadius: '8px', padding: '40px',
              textAlign: 'center', marginBottom: '20px', background: 'rgba(74,144,217,0.02)',
            }}>
              <p className={azeretMono.className} style={{ fontSize: '11px', color: '#4A90D9', marginBottom: '4px' }}>UPLOAD REFERENCE FILES</p>
              <p className={azeretMono.className} style={{ fontSize: '10px', color: 'rgba(200,216,240,0.25)' }}>.PDF .TXT .PNG .JPG</p>
            </div>
            <button className={azeretMono.className} style={{
              padding: '10px 28px', background: 'rgba(74,144,217,0.15)', border: '1px solid rgba(74,144,217,0.4)',
              borderRadius: '6px', color: '#4A90D9', fontSize: '12px', fontWeight: 600,
              cursor: 'pointer', letterSpacing: '0.08em',
            }}>GENERATE DRAWING ▶</button>
          </div>
        ) : (
          <div style={{ padding: '40px', maxWidth: '740px', animation: 'fadeInUp 0.4s ease-out' }}>
            <div className={azeretMono.className} style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '10px', color: 'rgba(200,216,240,0.3)' }}>{concepts[selected].ref}</span>
              <span style={{ fontSize: '10px', color: '#4A90D9' }}>{concepts[selected].rev}</span>
            </div>
            <h2 className={azeretMono.className} style={{ fontSize: '28px', fontWeight: 700, color: '#FFF', letterSpacing: '0.04em', marginBottom: '6px' }}>{concepts[selected].title}</h2>
            <div style={{ height: '2px', background: 'linear-gradient(to right, #4A90D9, transparent)', marginBottom: '28px', maxWidth: '200px' }} />

            {/* Story / Spec */}
            <div style={{ marginBottom: '28px' }}>
              <span className={azeretMono.className} style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(200,216,240,0.3)', display: 'block', marginBottom: '10px' }}>◈ TECHNICAL SPECIFICATION</span>
              <div style={{
                border: '1px solid rgba(74,144,217,0.12)', borderRadius: '8px', padding: '22px',
                background: 'rgba(74,144,217,0.03)',
              }}>
                <p className={azeretMono.className} style={{ fontSize: '12px', lineHeight: 1.85, color: 'rgba(200,216,240,0.7)' }}>{concepts[selected].story}</p>
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <span className={azeretMono.className} style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(200,216,240,0.3)', display: 'block', marginBottom: '10px' }}>◈ KEY ANNOTATIONS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {concepts[selected].hooks.map((m, i) => (
                  <div key={i} className={azeretMono.className} style={{
                    display: 'flex', gap: '16px', padding: '11px 14px',
                    background: 'rgba(74,144,217,0.04)', borderRadius: '6px',
                    border: '1px solid rgba(74,144,217,0.08)',
                    animation: `fadeIn 0.3s ease-out ${0.15 + i * 0.05}s both`,
                  }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#4A90D9', whiteSpace: 'nowrap', minWidth: '170px' }}>{m.hook}</span>
                    <span style={{ fontSize: '11px', color: 'rgba(200,216,240,0.5)' }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={11} bgColor="rgba(10,22,40,0.95)" textColor="#C8D8F0" accentColor="#4A90D9" hoverBg="rgba(74,144,217,0.12)" borderColor="rgba(74,144,217,0.15)" />
    </div>
  );
}
