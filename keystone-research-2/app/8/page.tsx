"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design8() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-white dark:bg-zinc-950 flex flex-col overflow-hidden">
      <Navigation />
      
      {/* Magazine-style Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tighter">JOB RESEARCH</h1>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">AI-Powered Platform</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Today</p>
            <p className="text-sm font-medium">December 2024</p>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-zinc-200 dark:border-zinc-800 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Recent Stories</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs uppercase tracking-wide text-green-600 dark:text-green-400 font-semibold">Published</span>
                  </div>
                  <h3 className="text-sm font-bold leading-tight text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Remote React Developer Opportunities
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2">15 findings • 2 minutes ago</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">Fresh Edition</p>
            <button className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-sm uppercase tracking-wide hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              New Research
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-6 overflow-y-auto flex items-center justify-center">
          {!isStreaming ? (
            <div className="w-full max-w-4xl">
              <article>
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold uppercase tracking-widest mb-3">Feature</span>
                  <h1 className="text-5xl font-black leading-none tracking-tighter mb-3">Find Your Next Chapter</h1>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">An AI-driven exploration of career opportunities tailored to your unique profile.</p>
                </div>

                <div className="space-y-5">
                  {/* Model */}
                  <div className="border-l-4 border-blue-500 pl-5">
                    <h2 className="text-xl font-black mb-3 uppercase tracking-tight">Intelligence Source</h2>
                    <select className="w-full px-4 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-base font-medium focus:outline-none focus:border-blue-500">
                      <option>Claude Sonnet 4 — Anthropic</option>
                      <option>GPT-4o — OpenAI</option>
                      <option>Gemini 2.5 Pro — Google</option>
                    </select>
                  </div>

                  {/* Job Types */}
                  <div className="border-l-4 border-purple-500 pl-5">
                    <h2 className="text-xl font-black mb-3 uppercase tracking-tight">Work Model</h2>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="py-3 px-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold uppercase tracking-wide text-sm">Remote</button>
                      <button className="py-3 px-4 border-2 border-zinc-900 dark:border-zinc-100 font-bold uppercase tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors text-sm">Hybrid</button>
                      <button className="py-3 px-4 border-2 border-zinc-900 dark:border-zinc-100 font-bold uppercase tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors text-sm">Onsite</button>
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="border-l-4 border-green-500 pl-5">
                    <h2 className="text-xl font-black mb-3 uppercase tracking-tight">Geographic Focus</h2>
                    <input 
                      type="text" 
                      placeholder="USA, UK, Canada..." 
                      className="w-full px-4 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-base focus:outline-none focus:border-green-500"
                    />
                  </div>

                  {/* Skills */}
                  <div className="border-l-4 border-orange-500 pl-5">
                    <h2 className="text-xl font-black mb-3 uppercase tracking-tight">Competency Profile</h2>
                    <div className="flex gap-3">
                      <input 
                        type="text" 
                        placeholder="React, TypeScript, Node.js..." 
                        className="flex-1 px-4 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-base focus:outline-none focus:border-orange-500"
                      />
                      <button className="px-6 py-3 bg-orange-500 text-white font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors text-sm">
                        Upload CV
                      </button>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="border-l-4 border-zinc-400 pl-5">
                    <h2 className="text-xl font-black mb-3 uppercase tracking-tight">Additional Context</h2>
                    <textarea 
                      placeholder="Share your story, preferences, requirements..." 
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-base focus:outline-none focus:border-zinc-500 resize-none"
                    />
                  </div>

                  <div className="pt-6">
                    <button 
                      onClick={() => setIsStreaming(true)}
                      className="w-full py-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-lg font-black uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      Begin Investigation →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="w-full max-w-5xl">
              <article>
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest mb-4">Live</span>
                  <h1 className="text-6xl font-black leading-none tracking-tighter mb-4">Research in Progress</h1>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400">Our AI is currently analyzing the market</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-lg font-bold uppercase tracking-wide">Active Search</span>
                  </div>
                </div>

                <div className="mb-8 p-8 border-2 border-zinc-900 dark:border-zinc-100">
                  <div className="font-mono text-sm space-y-3">
                    <p className="text-zinc-600 dark:text-zinc-400">[12:34:01] Initializing search parameters...</p>
                    <p className="text-zinc-600 dark:text-zinc-400">[12:34:02] Connecting to job platforms...</p>
                    <p className="text-zinc-600 dark:text-zinc-400">[12:34:03] Analyzing 1,247 postings...</p>
                    <p className="text-green-600 dark:text-green-400">[12:34:04] ✓ Identified 15 strong matches</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsStreaming(false)}
                  className="px-8 py-3 border-2 border-red-500 text-red-500 font-bold uppercase tracking-wide hover:bg-red-500 hover:text-white transition-colors mb-12"
                >
                  Terminate Search
                </button>

                <div className="space-y-6">
                  <h2 className="text-3xl font-black uppercase tracking-tight border-b-2 border-zinc-900 dark:border-zinc-100 pb-3">Discoveries</h2>
                  {[1, 2].map((i) => (
                    <div key={i} className="border-2 border-zinc-900 dark:border-zinc-100 p-8 hover:shadow-2xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-black tracking-tight">Principal Engineer</h3>
                          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">Innovate Labs</p>
                        </div>
                        <span className="px-4 py-2 bg-green-500 text-white font-bold uppercase text-xs tracking-wider">96% Fit</span>
                      </div>
                      <div className="flex gap-3 mb-6">
                        <span className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold uppercase text-xs tracking-wider">Remote</span>
                        <span className="px-4 py-2 border-2 border-zinc-900 dark:border-zinc-100 font-bold uppercase text-xs tracking-wider">USA</span>
                        <span className="px-4 py-2 border-2 border-zinc-900 dark:border-zinc-100 font-bold uppercase text-xs tracking-wider">$180k–$250k</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <button className="py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold uppercase tracking-wide hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">Save Position</button>
                        <button className="py-4 border-2 border-zinc-900 dark:border-zinc-100 font-bold uppercase tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors">Read More</button>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => setIsStreaming(false)} className="mt-12 text-blue-500 font-bold uppercase tracking-wide hover:underline">← New Edition</button>
              </article>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
