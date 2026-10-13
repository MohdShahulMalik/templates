"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design5() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-white dark:bg-zinc-950 flex overflow-hidden">
      <Navigation />
      
      {/* Sidebar */}
      <aside className="w-80 border-r border-zinc-200 dark:border-zinc-800 p-6 space-y-6 overflow-y-auto">
        <div>
          <h1 className="text-2xl font-black tracking-tight">JobAI</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Research Engine</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">History</h2>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Complete</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">Frontend roles in Europe</p>
                  <p className="text-xs text-zinc-400 mt-1">18 results • 5m ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <button className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-medium text-sm transition-colors">
            + New Search
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex items-center justify-center">
        {!isStreaming ? (
          <div className="w-full max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-3">Find Your Next Role</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">AI-powered job search tailored to your skills</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Model Card */}
              <div className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-100 dark:border-blue-900/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold text-sm">AI</div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">AI Model</h3>
                  </div>
                </div>
                <select className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border-2 border-blue-200 dark:border-blue-900 rounded-2xl font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900">
                  <option>Claude Sonnet 4 — Anthropic</option>
                  <option>GPT-4o — OpenAI</option>
                  <option>Gemini 2.5 Pro — Google</option>
                </select>
              </div>

              {/* Job Types Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-100 dark:border-purple-900/30">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 text-sm">
                  <span className="text-xl">🏢</span>
                  Work Type
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border-2 border-purple-500 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="font-medium text-sm">Remote</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-900 cursor-pointer transition-all">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-medium text-sm">Hybrid</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-900 cursor-pointer transition-all">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-medium text-sm">Onsite</span>
                  </label>
                </div>
              </div>

              {/* Countries Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-100 dark:border-emerald-900/30">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 text-sm">
                  <span className="text-xl">🌍</span>
                  Locations
                </h3>
                <input 
                  type="text" 
                  placeholder="USA, UK, Canada..." 
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border-2 border-emerald-200 dark:border-emerald-900 rounded-2xl font-medium focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900"
                />
              </div>

              {/* Skills Card */}
              <div className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-100 dark:border-orange-900/30">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 text-sm">
                  <span className="text-xl">💼</span>
                  Skills or Resume
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="React, TypeScript, Node.js... or drag your resume here" 
                    className="w-full px-4 py-3 pr-28 bg-white dark:bg-zinc-900 border-2 border-dashed border-orange-300 dark:border-orange-800 rounded-2xl font-medium focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium text-sm transition-colors">
                    Upload
                  </button>
                </div>
              </div>

              {/* Notes Card */}
              <div className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-900/30 border-2 border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 text-sm">
                  <span className="text-xl">📝</span>
                  Notes
                </h3>
                <textarea 
                  placeholder="Any specific requirements, preferences, or additional context..." 
                  rows={2}
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button 
                  onClick={() => setIsStreaming(true)}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-3xl font-bold text-base shadow-xl shadow-blue-500/20 transition-all transform hover:scale-[1.02]"
                >
                  🚀 Start Research
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-8">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                <div>
                  <p className="font-bold text-lg">AI is researching...</p>
                  <p className="text-sm text-blue-100">Analyzing job boards and matching requirements</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border-2 border-zinc-200 dark:border-zinc-800">
              <div className="font-mono text-sm space-y-3">
                <p className="text-zinc-600 dark:text-zinc-400">🔍 Searching job platforms...</p>
                <p className="text-zinc-600 dark:text-zinc-400">🎯 Matching with your skills...</p>
                <p className="text-zinc-600 dark:text-zinc-400">✨ Found 15 perfect matches</p>
              </div>
            </div>

            <button 
              onClick={() => setIsStreaming(false)}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-medium transition-colors"
            >
              Stop Research
            </button>

            <div className="grid gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Senior Product Designer</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-1">Design Studio Co.</p>
                    </div>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-bold">92% Match</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">Remote</span>
                    <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">UK</span>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">£80k-£120k</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold transition-colors">Save Job</button>
                    <button className="flex-1 py-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-2xl font-bold transition-colors">View Details</button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setIsStreaming(false)} className="text-blue-500 hover:text-blue-600 font-bold">← Start New Search</button>
          </div>
        )}
      </main>
    </div>
  );
}
