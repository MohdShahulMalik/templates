"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design7() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-zinc-100 dark:bg-zinc-950 flex overflow-hidden">
      <Navigation />
      
      {/* Thin Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 p-4 border-r border-zinc-200 dark:border-zinc-800 space-y-3 overflow-y-auto">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">History</h2>
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer transition-all">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Complete</span>
            </div>
            <p className="text-xs text-zinc-900 dark:text-zinc-100 truncate">Remote jobs search</p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">15 • 2m</p>
          </div>
        ))}
      </aside>

      {/* Main Bento Grid */}
      <main className="flex-1 p-4 overflow-y-auto flex items-center justify-center">
        {!isStreaming ? (
          <div className="w-full max-w-7xl">
            <div className="mb-6">
              <h1 className="text-4xl font-black text-zinc-900 dark:text-zinc-50 mb-2">Research</h1>
              <p className="text-zinc-600 dark:text-zinc-400">Configure and start your AI job search</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-3">
              {/* Model - spans 8 columns */}
              <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-6 text-white">
                <h3 className="text-xl font-black mb-3">Select AI Model</h3>
                <select className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl text-base font-medium focus:outline-none focus:border-white/60">
                  <option className="text-zinc-900">Claude Sonnet 4</option>
                  <option className="text-zinc-900">GPT-4o</option>
                  <option className="text-zinc-900">Gemini 2.5 Pro</option>
                </select>
              </div>

              {/* Job Types - spans 4 columns */}
              <div className="col-span-12 md:col-span-4 bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 text-sm">Work Type</h3>
                <div className="space-y-2">
                  <button className="w-full py-2.5 bg-blue-500 text-white rounded-xl font-medium text-sm">Remote</button>
                  <button className="w-full py-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-medium text-sm">Hybrid</button>
                  <button className="w-full py-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-medium text-sm">Onsite</button>
                </div>
              </div>

              {/* Countries - spans 6 columns */}
              <div className="col-span-12 md:col-span-6 bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 text-sm">
                  <span className="text-xl">🌍</span>
                  Countries
                </h3>
                <input 
                  type="text" 
                  placeholder="USA, UK, Canada..." 
                  className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Skills - spans 6 columns */}
              <div className="col-span-12 md:col-span-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-5 text-white">
                <h3 className="font-bold text-lg mb-3">💼 Skills</h3>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="React, Node..." 
                    className="flex-1 px-4 py-2.5 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/70 rounded-xl focus:outline-none focus:border-white/60"
                  />
                  <button className="px-4 py-2.5 bg-white/30 backdrop-blur-sm border-2 border-white/30 rounded-xl font-medium hover:bg-white/40 transition-colors text-sm">
                    Upload
                  </button>
                </div>
              </div>

              {/* Notes - spans 12 columns */}
              <div className="col-span-12 bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 text-sm">📝 Additional Notes</h3>
                <textarea 
                  placeholder="Tell us more about what you're looking for..." 
                  rows={2}
                  className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* CTA Button - spans 12 columns */}
              <div className="col-span-12">
                <button 
                  onClick={() => setIsStreaming(true)}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-black rounded-3xl shadow-xl transition-all transform hover:scale-[1.01]"
                >
                  🚀 Start Research
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-6xl space-y-6">
            {/* Status */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                <div>
                  <p className="font-bold text-xl">Researching...</p>
                  <p className="text-sm text-blue-100">AI is analyzing job boards</p>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="font-mono text-sm space-y-2">
                <p className="text-zinc-600 dark:text-zinc-400">🔍 Searching platforms...</p>
                <p className="text-zinc-600 dark:text-zinc-400">🎯 Matching requirements...</p>
                <p className="text-green-600 dark:text-green-400">✓ 15 jobs found</p>
              </div>
            </div>

            <button 
              onClick={() => setIsStreaming(false)}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-medium transition-colors"
            >
              Stop
            </button>

            {/* Results Bento Grid */}
            <div className="grid grid-cols-12 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Senior Developer</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Tech Inc.</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-lg">Remote</span>
                    <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded-lg">USA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="py-2 bg-blue-500 text-white text-sm rounded-xl font-medium">Save</button>
                    <button className="py-2 bg-zinc-100 dark:bg-zinc-800 text-sm rounded-xl font-medium">View</button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setIsStreaming(false)} className="text-blue-500 hover:text-blue-600 font-medium">← New</button>
          </div>
        )}
      </main>
    </div>
  );
}
