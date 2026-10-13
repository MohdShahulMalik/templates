"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design4() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-zinc-900 text-zinc-100 flex flex-col">
      <Navigation />
      
      {/* Top Nav */}
      <nav className="border-b border-zinc-800 px-8 py-4 bg-zinc-950">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">JobResearch.</h1>
          <div className="flex gap-4 text-sm">
            <button className="text-zinc-400 hover:text-zinc-100">Dashboard</button>
            <button className="text-zinc-100">Research</button>
            <button className="text-zinc-400 hover:text-zinc-100">Saved</button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-80 p-6 border-r border-zinc-800 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Recent</h2>
              <button className="text-xs text-blue-400 hover:text-blue-300">Clear</button>
            </div>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 cursor-pointer transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-zinc-100">Completed</span>
                  </div>
                  <p className="text-xs text-zinc-400 truncate">React Developer roles</p>
                  <p className="text-xs text-zinc-600 mt-1">15 jobs • 2 min ago</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-zinc-800/30 border border-zinc-700/50">
            <p className="text-xs text-zinc-400 mb-2">💡 Pro Tip</p>
            <p className="text-xs text-zinc-500">Upload your resume for better matching accuracy</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto flex items-center justify-center">
          {!isStreaming ? (
            <div className="w-full max-w-2xl space-y-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">Start New Research</h1>
                <p className="text-sm text-zinc-400">Configure your search parameters</p>
              </div>

              <div className="space-y-3">
                {/* Model */}
                <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">AI Model</label>
                  <select className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option>Claude Sonnet 4 (Anthropic)</option>
                    <option>GPT-4o (OpenAI)</option>
                    <option>Gemini 2.5 Pro (Google)</option>
                  </select>
                </div>

                {/* Job Types */}
                <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Work Arrangement</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2.5 px-3 bg-blue-500 text-white rounded-lg text-sm font-medium">Remote</button>
                    <button className="py-2.5 px-3 bg-zinc-900 border border-zinc-700 rounded-lg text-sm hover:border-zinc-600">Hybrid</button>
                    <button className="py-2.5 px-3 bg-zinc-900 border border-zinc-700 rounded-lg text-sm hover:border-zinc-600">Onsite</button>
                  </div>
                </div>

                {/* Countries */}
                <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Target Countries</label>
                  <input 
                    type="text" 
                    placeholder="e.g. USA, UK, Canada" 
                    className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Skills */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/50 to-zinc-800/30 border border-zinc-700/50">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Skills or Resume</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="React, Node.js, TypeScript..." 
                      className="flex-1 bg-zinc-900 border border-zinc-700 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <button className="px-5 py-2.5 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-sm font-medium transition-colors">
                      Upload
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Additional Requirements</label>
                  <textarea 
                    placeholder="Specify any additional preferences or requirements..." 
                    rows={3}
                    className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button 
                  onClick={() => setIsStreaming(true)}
                  className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Begin Research
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-medium text-blue-400">Research in Progress</span>
                </div>
                <span className="text-xs text-blue-400">15 jobs found</span>
              </div>

              <div className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 font-mono text-xs space-y-2 max-h-80 overflow-y-auto">
                <p className="text-zinc-400"><span className="text-blue-400">[12:34:56]</span> Initializing search...</p>
                <p className="text-zinc-400"><span className="text-blue-400">[12:34:57]</span> Analyzing requirements...</p>
                <p className="text-zinc-400"><span className="text-green-400">[12:34:58]</span> Found 15 matching positions</p>
                <p className="text-zinc-400"><span className="text-blue-400">[12:34:59]</span> Scoring relevance...</p>
              </div>

              <button 
                onClick={() => setIsStreaming(false)}
                className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-sm transition-colors"
              >
                Cancel
              </button>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold">Senior Full Stack Developer</h3>
                        <p className="text-sm text-zinc-400 mt-1">Acme Technologies Inc.</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">95% Match</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-lg">Remote</span>
                      <span className="px-3 py-1 bg-zinc-700 text-zinc-300 text-xs rounded-lg">USA</span>
                      <span className="px-3 py-1 bg-zinc-700 text-zinc-300 text-xs rounded-lg">$140k-$190k</span>
                    </div>
                    <div className="flex gap-3 mt-5">
                      <button className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors">Save Job</button>
                      <button className="flex-1 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-sm font-medium transition-colors">View Details</button>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => setIsStreaming(false)} className="text-blue-400 hover:text-blue-300 text-sm font-medium">← New Research</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
