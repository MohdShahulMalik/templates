"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design2() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950 dark:via-blue-950 dark:to-cyan-950 flex overflow-hidden">
      <Navigation />
      
      {/* Sidebar with Glass Effect */}
      <aside className="w-80 p-6 backdrop-blur-xl bg-white/40 dark:bg-black/40 border-r border-white/20 dark:border-white/10 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">JobAI</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Research Engine</p>
        </div>
        
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">History</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/80 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-1.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 truncate font-medium">React + TypeScript roles</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">15 results • 2m ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto flex items-center justify-center">
        {!isStreaming ? (
          <div className="w-full max-w-3xl space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Find Your Dream Job</h1>
              <p className="text-base text-zinc-600 dark:text-zinc-400">AI-powered job research, tailored for you</p>
            </div>

            <div className="space-y-4">
              {/* Model */}
              <div className="p-5 rounded-3xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10">
                <label className="block text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">AI Model</label>
                <select className="w-full px-4 py-2.5 bg-white/80 dark:bg-black/80 border border-purple-200 dark:border-purple-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Claude Sonnet 4 • Anthropic</option>
                  <option>GPT-4o • OpenAI</option>
                  <option>Gemini 2.5 Pro • Google</option>
                </select>
              </div>

              {/* Job Types */}
              <div className="p-5 rounded-3xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10">
                <label className="block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Work Mode</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-medium shadow-lg text-sm">Remote</button>
                  <button className="flex-1 py-2.5 px-4 bg-white/80 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-sm">Hybrid</button>
                  <button className="flex-1 py-2.5 px-4 bg-white/80 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-sm">Onsite</button>
                </div>
              </div>

              {/* Countries */}
              <div className="p-5 rounded-3xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10">
                <label className="block text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Locations</label>
                <input 
                  type="text" 
                  placeholder="USA, UK, Canada..." 
                  className="w-full px-4 py-2.5 bg-white/80 dark:bg-black/80 border border-cyan-200 dark:border-cyan-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Skills */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-white/60 to-purple-50/60 dark:from-black/60 dark:to-purple-950/60 backdrop-blur-xl border border-white/20 dark:border-white/10">
                <label className="block text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Skills or Resume</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Type skills or drop your resume here" 
                    className="w-full px-4 py-3 pr-28 bg-white/80 dark:bg-black/80 border-2 border-dashed border-purple-300 dark:border-purple-700 rounded-2xl focus:outline-none focus:border-purple-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl text-sm font-medium">
                    📎 Upload
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="p-5 rounded-3xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Additional Context</label>
                <textarea 
                  placeholder="Tell the AI about your preferences..." 
                  rows={3}
                  className="w-full px-4 py-2.5 bg-white/80 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>

              <button 
                onClick={() => setIsStreaming(true)}
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-3xl font-bold text-base shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all"
              >
                ✨ Start Research
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-6">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-300/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse shadow-lg shadow-blue-500/50" />
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AI is searching...</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 font-mono text-sm space-y-3">
              <p className="text-zinc-600 dark:text-zinc-400">🎯 Analyzing your preferences</p>
              <p className="text-zinc-600 dark:text-zinc-400">🔍 Searching across platforms</p>
              <p className="text-zinc-600 dark:text-zinc-400">✨ Finding 15 perfect matches</p>
            </div>

            <button 
              onClick={() => setIsStreaming(false)}
              className="px-6 py-3 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-all"
            >
              Stop Research
            </button>

            <div className="grid gap-4 mt-8">
              {[1, 2].map((i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Lead Frontend Engineer</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">InnovateTech</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full font-medium">Remote</span>
                    <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-xs rounded-full">🇺🇸 USA</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs rounded-full font-medium">$150k-$200k</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-medium">Save</button>
                    <button className="px-6 py-2 bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-zinc-300 dark:border-zinc-700 rounded-2xl">Details</button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setIsStreaming(false)} className="text-blue-500 hover:underline font-medium">← Start New Search</button>
          </div>
        )}
      </main>
    </div>
  );
}
