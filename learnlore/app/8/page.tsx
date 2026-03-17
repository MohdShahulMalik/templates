'use client';

import { Noto_Serif_JP, Work_Sans } from 'next/font/google';
import FloatingNav from '../components/FloatingNav';
import { useState } from 'react';

const notoSerif = Noto_Serif_JP({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const concepts = [
  { id: 1, title: 'Photosynthesis', kanji: '光合成', season: 'Spring', story: `There is a stillness inside every leaf. Not emptiness — fullness waiting to unfold.

Within each cell rest small green rooms called chloroplasts. They do not rush. They receive. When light arrives — as it always does — the chlorophyll within accepts it the way a pond accepts rain: without resistance.

The light's energy gently parts water molecules. Oxygen rises and leaves, like breath after meditation. What remains — hydrogen and electrons — move with quiet purpose through a chain of proteins, each handoff releasing just enough energy to form ATP, the cell's humble currency.

In the innermost chamber, carbon dioxide meets this energy. Slowly, deliberately, the Calvin Cycle folds carbon into sugar. One molecule at a time. No waste. No excess.

This is photosynthesis: the art of turning nothing visible into everything essential. It has been happening for three billion years, in perfect patience.`, hooks: [{ hook: 'Green Rooms', target: 'Chloroplasts — where photosynthesis occurs' }, { hook: 'Pond & Rain', target: 'Chlorophyll absorbs light passively' }, { hook: 'Parting Water', target: 'Photolysis: water → O₂ + H⁺ + e⁻' }, { hook: 'Humble Currency', target: 'ATP — energy for cellular work' }, { hook: 'Folding Carbon', target: 'Calvin Cycle: CO₂ → glucose' }] },
  { id: 2, title: 'Quantum Entanglement', kanji: '量子', season: 'Winter', story: `In the quantum realm, distance is an illusion.

Two particles, once entangled, remain connected across any separation. Measure one's spin, and the other's spin is instantly determined — not because information travels between them, but because they were never truly separate to begin with.

This troubled Einstein greatly. He called it "spooky action at a distance," hoping to prove it impossible. But experiment after experiment confirmed what quantum mechanics predicted: the universe is fundamentally non-local.

Today, entanglement enables technologies we once thought impossible: unbreakable codes, quantum computers, and teleportation protocols. At the deepest level, everything is connected.`, hooks: [{ hook: 'Quantum Connection', target: 'Entangled particles share correlated states' }, { hook: 'Spooky Action', target: "Einstein's famous objection" }, { hook: 'Non-Local', target: 'Distance is an illusion at quantum scale' }, { hook: 'Quantum Tech', target: 'Enables unbreakable cryptography' }] },
  { id: 3, title: 'Mitochondria', kanji: '細胞', season: 'Summer', story: `We carry ancient guests within us.

Long ago, a bacterium entered a larger cell and was not destroyed. Instead, it became essential. Now billions of years later, its descendants live in nearly every cell of your body: the mitochondria.

They have their own DNA, a small circular genome inherited only from your mother. They generate the energy that powers every thought, every heartbeat, every breath. Without them, complex life would not exist.

Every time you exhale, you breathe out the oxygen they produced. Every step you take is powered by their ancient fire. We are, in a very real sense, them.`, hooks: [{ hook: 'Ancient Guests', target: 'Mitochondria were once independent bacteria' }, { hook: 'Energy Factory', target: 'Produces ATP for all cellular functions' }, { hook: 'Maternal Gift', target: 'Mitochondrial DNA passed from mother' }, { hook: 'Inner Fire', target: 'Powers every cell in your body' }] },
  { id: 4, title: 'Neural Networks', kanji: '神経', season: 'Autumn', pattern: 'The Thinking Machine', story: `Silicon learns to see.

In data centers around the world, artificial neurons fire in layered arrangements. Each connection has a weight, adjusted through countless examples. Show a network enough cats, and it learns what makes a cat. Train it on enough conversations, and it learns language.

The architecture mirrors our own minds: layers of processing, patterns emerging from complexity. Unlike us, they can be copied exactly, trained in hours what took us years.

They do not think as we do — not yet, perhaps not ever. But they learn as we learn: from experience, from data, from patterns in the world.`, hooks: [{ hook: 'Digital Neurons', target: 'Artificial neurons process information' }, { hook: 'Synaptic Weights', target: 'Connection strengths learned from data' }, { hook: 'Pattern Recognition', target: 'Learns from millions of examples' }, { hook: 'Deep Learning', target: 'More layers = more complex understanding' }] },
  { id: 5, title: 'DNA Replication', kanji: '遺伝', season: 'Spring', story: `Before life can continue, it must first copy itself.

Within every cell, a molecular machine reads the genetic instructions and duplicates them with remarkable precision. The enzyme helicase unzips the double helix, exposing the template strands. DNA polymerase reads each and builds its complement: A always with T, C always with G.

The result: two identical DNA molecules, each containing one old strand and one new strand. This semi-conservative method has been refined over billions of years, achieving an error rate of just one in a billion bases.

Every time a cell divides, this process repeats flawlessly. The message of life, passed unchanged from generation to generation.`, hooks: [{ hook: 'Molecular Copier', target: 'DNA polymerase replicates with extreme accuracy' }, { hook: 'Unzipping', target: 'Helicase opens the double helix' }, { hook: 'Perfect Pairs', target: 'A-T, C-G — always matched correctly' }, { hook: 'Semi-Conservative', target: 'Each new DNA has one old, one new strand' }] },
];

export default function Design8() {
  const [selected, setSelected] = useState(0);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className={workSans.className} style={{ minHeight: '100vh', background: '#FAF8F5', color: '#2D2A26', display: 'flex', position: 'relative' }}>

      {/* SIDEBAR */}
      <aside style={{
        width: '260px', minHeight: '100vh',
        borderRight: '1px solid rgba(45,42,38,0.08)',
        display: 'flex', flexDirection: 'column', flexShrink: 0,
        background: '#FAF8F5',
      }}>
        <div style={{ padding: '40px 24px 24px', animation: 'fadeIn 0.5s ease-out' }}>
          <span className={notoSerif.className} style={{ fontSize: '14px', fontWeight: 200, color: 'rgba(45,42,38,0.3)', display: 'block', marginBottom: '4px', letterSpacing: '0.3em' }}>学</span>
          <h1 className={notoSerif.className} style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '0.08em', color: '#2D2A26' }}>LearnLore</h1>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <button
            onClick={() => setShowNew(true)}
            style={{
              width: '100%', padding: '14px', background: 'transparent',
              border: '1px solid rgba(45,42,38,0.12)', borderRadius: '8px',
              color: '#8B7E6A', fontFamily: 'inherit', fontWeight: 500, fontSize: '13px',
              cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(45,42,38,0.25)'; e.currentTarget.style.color = '#2D2A26'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(45,42,38,0.12)'; e.currentTarget.style.color = '#8B7E6A'; }}
          >+ Begin anew</button>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {concepts.map((c, i) => (
            <div
              key={c.id}
              onClick={() => { setSelected(i); setShowNew(false); }}
              style={{
                padding: '20px 24px', cursor: 'pointer',
                borderTop: i === 0 ? '1px solid rgba(45,42,38,0.06)' : 'none',
                borderBottom: '1px solid rgba(45,42,38,0.06)',
                background: selected === i && !showNew ? 'rgba(139,126,106,0.04)' : 'transparent',
                transition: 'all 0.3s', animation: `fadeIn 0.5s ease-out ${0.1 + i * 0.08}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <span className={notoSerif.className} style={{ fontSize: '20px', fontWeight: 200, color: 'rgba(45,42,38,0.15)' }}>{c.kanji}</span>
                <span style={{ fontSize: '10px', color: 'rgba(45,42,38,0.25)', letterSpacing: '0.1em' }}>{c.season}</span>
              </div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: selected === i && !showNew ? '#2D2A26' : '#8B7E6A' }}>{c.title}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        {showNew ? (
          <div style={{ padding: '80px 60px', maxWidth: '580px', margin: '0 auto', animation: 'fadeInUp 0.6s ease-out' }}>
            <span className={notoSerif.className} style={{ fontSize: '36px', fontWeight: 200, color: 'rgba(45,42,38,0.1)', display: 'block', marginBottom: '16px' }}>新</span>
            <h2 className={notoSerif.className} style={{ fontSize: '28px', fontWeight: 400, marginBottom: '8px', letterSpacing: '0.04em' }}>A new beginning</h2>
            <p style={{ fontSize: '14px', color: '#8B7E6A', marginBottom: '48px', lineHeight: 1.6 }}>Share a concept, or offer your notes and materials.</p>
            <input
              type="text" placeholder="What interests you?"
              className={notoSerif.className}
              style={{
                width: '100%', padding: '16px 0', border: 'none',
                borderBottom: '1px solid rgba(45,42,38,0.15)', background: 'transparent',
                fontSize: '20px', fontWeight: 300, color: '#2D2A26', outline: 'none', marginBottom: '40px',
              }}
            />
            <div style={{
              border: '1px solid rgba(45,42,38,0.08)', borderRadius: '12px', padding: '48px',
              textAlign: 'center', cursor: 'pointer', marginBottom: '36px',
            }}>
              <p className={notoSerif.className} style={{ fontSize: '16px', color: '#8B7E6A', marginBottom: '4px' }}>Upload materials</p>
              <p style={{ fontSize: '12px', color: 'rgba(45,42,38,0.25)' }}>PDF · TXT · PNG · JPG</p>
            </div>
            <button style={{
              padding: '14px 36px', background: '#2D2A26', color: '#FAF8F5', border: 'none',
              borderRadius: '8px', fontFamily: 'inherit', fontWeight: 500, fontSize: '14px',
              cursor: 'pointer', letterSpacing: '0.04em', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >Generate</button>
          </div>
        ) : (
          <div style={{ padding: '64px 60px', maxWidth: '620px', margin: '0 auto', animation: 'fadeInUp 0.6s ease-out' }}>
            <span className={notoSerif.className} style={{ fontSize: '48px', fontWeight: 200, color: 'rgba(45,42,38,0.07)', display: 'block', marginBottom: '8px' }}>{concepts[selected].kanji}</span>
            <h2 className={notoSerif.className} style={{ fontSize: '36px', fontWeight: 400, letterSpacing: '0.04em', marginBottom: '8px', lineHeight: 1.2 }}>{concepts[selected].title}</h2>
            <span style={{ fontSize: '11px', color: 'rgba(45,42,38,0.25)', letterSpacing: '0.1em', display: 'block', marginBottom: '48px' }}>{concepts[selected].season}</span>

            {/* Story */}
            <div style={{ marginBottom: '56px' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', color: '#8B7E6A', display: 'block', marginBottom: '20px', textTransform: 'uppercase' }}>Narrative</span>
              <div style={{
                borderLeft: '2px solid rgba(45,42,38,0.08)', paddingLeft: '28px',
              }}>
                {concepts[selected].story.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className={notoSerif.className} style={{
                    fontSize: '17px', lineHeight: 2, color: '#4A453D', marginBottom: '20px', fontWeight: 300,
                    animation: `fadeIn 0.5s ease-out ${0.2 + i * 0.1}s both`,
                  }}>{para}</p>
                ))}
              </div>
            </div>

            {/* Memory Hooks */}
            <div>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', color: '#8B7E6A', display: 'block', marginBottom: '20px', textTransform: 'uppercase' }}>Memory Hooks</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {concepts[selected].hooks.map((m: { hook: string; target: string }, i: number) => (
                  <div key={i} style={{
                    display: 'flex', gap: '24px', alignItems: 'baseline',
                    animation: `fadeIn 0.5s ease-out ${0.3 + i * 0.08}s both`,
                  }}>
                    <span className={notoSerif.className} style={{ fontSize: '15px', fontWeight: 500, color: '#2D2A26', whiteSpace: 'nowrap', minWidth: '140px' }}>{m.hook}</span>
                    <span style={{ fontSize: '13px', color: '#8B7E6A', lineHeight: 1.5 }}>{m.target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '56px', width: '40px', height: '1px', background: 'rgba(45,42,38,0.1)' }} />
          </div>
        )}
      </main>

      <FloatingNav currentRoute={8} bgColor="rgba(45,42,38,0.92)" textColor="#FAF8F5" accentColor="#C4B99A" hoverBg="rgba(196,185,154,0.12)" borderColor="rgba(250,248,245,0.12)" />
    </div>
  );
}
