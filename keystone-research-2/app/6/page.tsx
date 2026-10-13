"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design6() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-zinc-50 dark:bg-zinc-950 flex overflow-hidden">
      <Navigation />
      
      {/* Timeline Sidebar */}
      <aside className="w-20 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col items-center py-6 gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">1</div>
        <div className="w-0.5 h-12 bg-zinc-300 dark:bg-zinc-700" />
        <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 font-bold text-sm">2</div>
        <div className="w-0.5 h-12 bg-zinc-300 dark:bg-zinc-700" />
        <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 font-bold text-sm">3</div>
        <div className="w-0.5 h-12 bg-zinc-300 dark:bg-zinc-700" />
        <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 font-bold text-sm">4</div>
      </aside>

      {/* History Sidebar */}
      <aside className="w-72 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-5 overflow-y-auto">
        <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4">Recent Searches</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-all">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Success</span>
              </div>
              <p className="text-xs text-zinc-900 dark:text-zinc-100 font-medium truncate">Senior roles in tech</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">12 matches • 1h ago</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex items-center justify-center">
        {!isStreaming ? (
          <div className="w-full max-w-3xl space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full mb-3">STEP 1: Configure</span>
              <h1 className="text-3xl font-black text-zinc-900 dark:text-zinc-50 mb-2">Job Research Setup</h1>
              <p className="text-base text-zinc-600 dark:text-zinc-400">Configure your AI-powered search</p>
            </div>

            <div className="space-y-4">
              {/* Model */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">AI Model Selection</h3>
                </div>
                <select className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Claude Sonnet 4 (Anthropic)</option>
                  <option>GPT-4o (OpenAI)</option>
                  <option>Gemini 2.5 Pro (Google)</option>
                </select>
              </div>

              {/* Job Types */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-base">💼</span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Work Arrangement</h3>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 bg-blue-500 text-white font-medium rounded-xl text-sm">Remote</button>
                  <button className="flex-1 py-2.5 bg-zinc-100 dark:bg-zinc-800 font-medium rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm">Hybrid</button>
                  <button className="flex-1 py-2.5 bg-zinc-100 dark:bg-zinc-800 font-medium rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm">Onsite</button>
                </div>
              </div>

              {/* Countries */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
                    <span className="text-white text-base">🌎</span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Target Countries</h3>
                </div>
                <input 
                  type="text" 
                  placeholder="USA, UK, Canada" 
                  className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Skills */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                    <span className="text-white text-base">🎯</span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Skills or Resume</h3>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="React, TypeScript, Node.js..." 
                    className="flex-1 px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors text-sm">
                    Upload
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-zinc-500 flex items-center justify-center">
                    <span className="text-white text-base">📝</span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Additional Notes</h3>
                </div>
                <textarea 
                  placeholder="Any specific requirements..." 
                  rows={2}
                  className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
                />
              </div>

              <button 
                onClick={() => setIsStreaming(true)}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base rounded-2xl shadow-lg transition-all"
              >
                Continue to Research →
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full mb-4">STEP 2: Research</span>
              <h1 className="text-4xl font-black text-zinc-900 dark:text-zinc-50 mb-3">AI Research in Progress</h1>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-medium text-blue-700 dark:text-blue-300">Analyzing and searching...</span>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <div className="font-mono text-sm space-y-2">
                <p className="text-zinc-600 dark:text-zinc-400">→ Connecting to job boards...</p>
                <p className="text-zinc-600 dark:text-zinc-400">→ Analyzing requirements...</p>
                <p className="text-green-600 dark:text-green-400">✓ Found 15 matching jobs</p>
              </div>
            </div>

            <button 
              onClick={() => setIsStreaming(false)}
              className="px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-red-500 text-red-500 font-medium rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
            >
              Abort
            </button>

            <div className="space-y-4 mt-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Staff Software Engineer</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">TechCorp Systems</p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">Remote</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded-full">Canada</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">$160k-$220k</span>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors">Save</button>
                    <button className="flex-1 py-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-medium rounded-xl transition-colors">View</button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setIsStreaming(false)} className="text-blue-500 hover:text-blue-600 font-medium">← New Research</button>
          </div>
        )}
      </main>
    </div>
  );
}
