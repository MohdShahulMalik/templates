'use client';

import { Space_Mono, JetBrains_Mono } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const concepts = [
  { id: 1, title: 'Photosynthesis', summary: 'Light to energy conversion', date: '2h ago', story: `In a village called Chloroplast, green workers named Chlorophyll wake each morning when sunlight floods through the membrane walls. They catch photons like fishermen cast nets into a golden river. Each captured photon powers a tiny water-splitting machine — cracking H₂O into hydrogen, oxygen, and raw energy. The oxygen drifts away as exhaust, floating up through stomata chimneys. Meanwhile, the hydrogen riders carry their energy tokens down an electron transport chain — a microscopic roller coaster — generating ATP coins. These coins fund the Calvin Cycle bakery next door, where CO₂ molecules are kneaded into glucose bread. The whole village hums: light in, sugar out, oxygen as a gift to the world above.`, hooks: [{ hook: 'GREEN WORKERS', target: 'Chlorophyll molecules absorb light' }, { hook: 'WATER SPLITTER', target: 'Photolysis: 2H₂O → 4H⁺ + O₂ + 4e⁻' }, { hook: 'ROLLER COASTER', target: 'Electron transport chain → ATP synthesis' }, { hook: 'BAKERY', target: 'Calvin Cycle fixes CO₂ into glucose' }, { hook: 'CHIMNEY', target: 'Stomata release O₂ into atmosphere' }] },
  { id: 2, title: 'Quantum Entanglement', summary: 'Spooky action at distance', date: '1d ago', story: `Imagine two twins separated at birth, living on opposite ends of the universe. When one twin laughs, the other automatically laughs too — instantly, with no message traveling between them. That's quantum entanglement. Two particles become "entangled" so that measuring one instantly determines the state of the other, no matter how far apart they are. Einstein called it "spooky action at a distance" and refused to believe it. But in the strange world of quantum physics, particles don't have fixed properties until measured. They're in a fuzzy cloud of probabilities until observed. When you entangle them, you create a shared destiny — measure one, and the other's fate is sealed in that same moment, across any distance.`, hooks: [{ hook: 'QUANTUM TWINS', target: 'Entangled particles share states instantly' }, { hook: 'SPOOKY ACTION', target: "Einstein's famous objection to entanglement" }, { hook: 'FUZZY CLOUD', target: 'Particles exist as probabilities until measured' }, { hook: 'SHARED DESTINY', target: 'Measuring one instantly determines the other' }] },
  { id: 3, title: 'Mitochondria', summary: 'Powerhouse of the cell', date: '3d ago', story: `Deep inside your cells sits an ancient bacterium that never left. Billions of years ago, it was swallowed by a larger cell but instead of being digested, it became essential. Now it's the mitochondria — the powerhouse. This tiny organelle runs a continuous power plant, burning glucose and oxygen to generate ATP, the energy currency of life. It has its own DNA, circular like a bacterium's, passed down only from your mother. Every breath you take fuels these microscopic generators. Without them, your cells would have no energy — you'd be dead in seconds.`, hooks: [{ hook: 'ANCIENT GUEST', target: 'Mitochondria was once a free-living bacterium' }, { hook: 'POWERHOUSE', target: 'Generates ATP from glucose and oxygen' }, { hook: 'MATERNAL INHERITANCE', target: 'Passed down only from your mother' }, { hook: 'ENERGY CURRENCY', target: 'ATP fuels all cellular processes' }] },
  { id: 4, title: 'Neural Networks', summary: 'Machine pattern learning', date: '1w ago', story: `Your brain learns by strengthening connections between neurons. When you practice a skill, the neural pathways involved fire together repeatedly, and the connections between them grow stronger — neurons that fire together, wire together. A neural network in AI mimics this with layers of "nodes" connected by "weights." During training, the network adjusts these weights to minimize error, much like your brain strengthens synaptic connections through repetition. Feed it enough pictures of cats, and it learns what makes a cat a cat — not through rules, but through pattern recognition built from countless examples.`, hooks: [{ hook: 'WIRE TOGETHER', target: 'Neurons that fire together, wire together' }, { hook: 'NODES & WEIGHTS', target: 'AI neurons connected by adjustable weights' }, { hook: 'PATTERN RECOGNITION', target: 'Learns from examples, not explicit rules' }, { hook: 'TRAINING', target: 'Adjusting weights to minimize error' }] },
  { id: 5, title: 'DNA Replication', summary: 'Copying life\'s blueprint', date: '2w ago', story: `Before a cell divides, it must make an exact copy of its DNA — a molecular photocopying job. The enzyme Helicase acts like a zipper, unzipping the double helix at a replication fork. Once exposed, DNA Polymerase reads the template strand and builds a new complementary strand. A pairs with T, C pairs with G — a perfect pairing. Another enzyme, Ligase, stitches the fragments together. The result: two identical DNA molecules, each with one old strand and one new strand. This "semi-conservative" copying ensures genetic information passes faithfully from cell to cell, generation to generation.`, hooks: [{ hook: 'HELICASE', target: 'Unzips the double helix' }, { hook: 'POLYMERASE', target: 'Builds new complementary strand' }, { hook: 'A-T, C-G', target: 'Base pairing rules' }, { hook: 'SEMI-CONSERVATIVE', target: 'Each new DNA has one old, one new strand' }] },
];

export default function Design1() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={spaceMono.className} style={{ minHeight: '100vh', background: '#FAFAFA', color: '#111', display: 'flex' }}>
      {/* SIDEBAR */}
      <aside style={{
        width: '300px', minHeight: '100vh', borderRight: '3px solid #111',
        display: 'flex', flexDirection: 'column', flexShrink: 0,
        animation: 'fadeIn 0.3s ease-out',
      }}>
        <div style={{ padding: '20px', borderBottom: '3px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.5px', textTransform: 'uppercase' }}>LEARN/LORE</h1>
          <button
            onClick={() => setShowNew(!showNew)}
            style={{
              padding: '8px 16px', background: '#E53E3E', color: '#FFF', border: 'none',
              fontFamily: 'inherit', fontWeight: 700, fontSize: '12px', cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}
          >+ NEW</button>
        </div>
        <div style={{ padding: '12px 20px', borderBottom: '1px solid #DDD', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>HISTORY — {concepts.length} CONCEPTS</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '16px 20px', borderBottom: '1px solid #DDD', cursor: 'pointer',
                background: selected === i && !showNew ? '#111' : 'transparent',
                color: selected === i && !showNew ? '#FFF' : '#111',
                transition: 'all 0.15s',
                animation: `slideInLeft 0.3s ease-out ${i * 0.05}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700 }}>{c.title}</span>
                <span style={{ fontSize: '10px', opacity: 0.5 }}>{c.date}</span>
              </div>
              <span style={{ fontSize: '11px', opacity: 0.6 }}>{c.summary}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
        {showNew ? (
          <div style={{ padding: '60px 40px', maxWidth: '700px', animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '-1px' }}>NEW CONCEPT_</h2>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '32px' }}>TYPE A CONCEPT OR UPLOAD STUDY MATERIAL (PDF, TXT, IMAGES)</p>
            <div style={{ marginBottom: '24px' }}>
              <input
                type="text"
                placeholder="e.g. Mitosis, Gravity, Baroque Art..."
                style={{
                  width: '100%', padding: '16px', border: '3px solid #111', background: 'transparent',
                  fontFamily: 'inherit', fontSize: '16px', fontWeight: 700, outline: 'none',
                }}
              />
            </div>
            <div style={{
              border: '3px dashed #CCC', padding: '48px', textAlign: 'center', cursor: 'pointer',
              marginBottom: '24px', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#E53E3E'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#CCC'; }}
            >
              <p style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>DROP FILES HERE</p>
              <p style={{ fontSize: '11px', color: '#999' }}>PDF • TXT • PNG • JPG</p>
            </div>
            <button style={{
              padding: '14px 32px', background: '#E53E3E', color: '#FFF', border: 'none',
              fontFamily: 'inherit', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>GENERATE →</button>
          </div>
        ) : (
          <div style={{ padding: '40px', maxWidth: '760px', animation: 'fadeInUp 0.4s ease-out' }}>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#E53E3E', textTransform: 'uppercase' }}>CONCEPT #{concepts[selected].id}</span>
              <span style={{ fontSize: '10px', color: '#999' }}>{concepts[selected].date}</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-1px', marginBottom: '32px', lineHeight: 1.1 }}>{concepts[selected].title}_</h2>

            {/* Story */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '24px', height: '3px', background: '#E53E3E' }} />
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>GENERATED STORY</span>
              </div>
              <div style={{ borderLeft: '3px solid #111', paddingLeft: '20px' }}>
                <p className={jetbrains.className} style={{ fontSize: '14px', lineHeight: 1.8, color: '#333' }}>{concepts[selected].story}</p>
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '24px', height: '3px', background: '#E53E3E' }} />
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>MEMORY HOOKS</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {concepts[selected].hooks.map((m, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '160px 1fr', borderTop: i === 0 ? '3px solid #111' : '1px solid #DDD',
                    borderBottom: i === concepts[selected].hooks.length - 1 ? '3px solid #111' : 'none',
                    animation: `fadeIn 0.3s ease-out ${0.2 + i * 0.06}s both`,
                  }}>
                    <div style={{ padding: '14px 16px', borderRight: '1px solid #DDD', fontWeight: 700, fontSize: '11px', letterSpacing: '0.05em', background: '#F0F0F0' }}>{m.hook}</div>
                    <div className={jetbrains.className} style={{ padding: '14px 16px', fontSize: '12px', color: '#444' }}>{m.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <FloatingNav currentRoute={1} bgColor="rgba(17,17,17,0.95)" textColor="#FAFAFA" accentColor="#E53E3E" hoverBg="rgba(229,62,62,0.12)" borderColor="rgba(255,255,255,0.15)" />
    </div>
  );
}
