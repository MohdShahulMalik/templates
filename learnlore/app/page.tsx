import Link from "next/link";

const designs = [
  { route: 1, name: "Brutalist / Industrial", desc: "Space Mono, stark borders, red accents" },
  { route: 2, name: "Soft Garden / Organic", desc: "DM Serif, sage greens, warm cream" },
  { route: 3, name: "Cyberpunk HUD", desc: "Orbitron, neon cyan/magenta, hologrid" },
  { route: 4, name: "Art Deco Luxury", desc: "Cinzel, gold on black, geometric elegance" },
  { route: 5, name: "Editorial / Magazine", desc: "Cormorant Garamond, newspaper layout" },
  { route: 6, name: "Aurora Glassmorphism", desc: "Outfit, purple-cyan gradients, glass panels" },
  { route: 7, name: "Retro Terminal", desc: "VT323, green phosphor, ASCII borders" },
  { route: 8, name: "Japanese Zen", desc: "Noto Serif JP, earth tones, extreme whitespace" },
  { route: 9, name: "Sepia Typewriter", desc: "Playfair Display, warm sepia, paper texture" },
  { route: 10, name: "Neon Synthwave", desc: "Bebas Neue, dark background, 80s retro grid" },
  { route: 11, name: "Soft Neumorphism", desc: "Plus Jakarta Sans, warm gray clay-like UI" },
  { route: 12, name: "High Contrast Ink", desc: "Crimson Pro, stark black & white, bold blocks" },
  { route: 13, name: "Tropical Maximalism", desc: "Righteous, coral/teal, playful rounded shapes" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            LearnLore AI Workspace
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Explore 13 distinct aesthetic directions for a persistent, chat-style AI learning workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {designs.map((design) => (
            <Link
              key={design.route}
              href={`/${design.route}`}
              className="group relative flex flex-col justify-between p-6 h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 group-hover:from-blue-500 group-hover:to-purple-500 transition-colors" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-bold text-zinc-500 dark:text-zinc-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {design.route}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {design.name}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {design.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
