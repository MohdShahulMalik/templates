"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design3() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-zinc-950 text-green-400 font-mono flex flex-col">
      <Navigation />
      
      {/* Terminal Header */}
      <div className="border-b border-green-900/30 px-6 py-3 bg-zinc-900">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-green-500">job-research@terminal:~</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 border-r border-green-900/30 p-4 overflow-y-auto bg-zinc-900/50">
          <div className="mb-6">
            <p className="text-xs text-green-500 mb-1">$ ls -la ~/sessions</p>
            <p className="text-xs text-green-700 uppercase tracking-wider">RECENT_SESSIONS:</p>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 border border-green-900/30 hover:border-green-500/50 hover:bg-green-950/20 transition-all cursor-pointer">
                <p className="text-xs text-green-400 flex items-center gap-2">
                  <span className="text-green-500">[✓]</span>
                  session_{i}.log
                </p>
                <p className="text-xs text-green-700 mt-1 truncate">Remote dev jobs in USA...</p>
                <p className="text-xs text-green-800 mt-1">15 matches • 2m ago</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto flex items-center justify-center">
          {!isStreaming ? (
            <div className="w-full max-w-3xl space-y-4">
              <div className="mb-4">
                <p className="text-xs text-green-700 mb-2">$ ./job_research --interactive</p>
                <h1 className="text-xl font-bold text-green-400 mb-1">&gt; JOB RESEARCH TERMINAL</h1>
                <p className="text-sm text-green-600">Initialize search parameters:</p>
              </div>

              <div className="space-y-3">
                {/* Model */}
                <div className="border border-green-900/30 p-3 bg-zinc-900/30">
                  <label className="block text-xs text-green-500 mb-2">&gt; MODEL_SELECT:</label>
                  <select className="w-full bg-zinc-950 border border-green-900/50 px-3 py-2 text-sm text-green-400 focus:outline-none focus:border-green-500">
                    <option>claude_sonnet_4 [anthropic]</option>
                    <option>gpt_4o [openai]</option>
                    <option>gemini_2_5_pro [google]</option>
                  </select>
                </div>

                {/* Job Types */}
                <div className="border border-green-900/30 p-3 bg-zinc-900/30">
                  <label className="block text-xs text-green-500 mb-2">&gt; JOB_TYPE_FLAGS:</label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span>[X] --remote</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>[ ] --hybrid</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>[ ] --onsite</span>
                    </label>
                  </div>
                </div>

                {/* Countries */}
                <div className="border border-green-900/30 p-3 bg-zinc-900/30">
                  <label className="block text-xs text-green-500 mb-2">&gt; LOCATION_ARGS:</label>
                  <input 
                    type="text" 
                    placeholder="USA,UK,Canada" 
                    className="w-full bg-zinc-950 border border-green-900/50 px-3 py-2 text-sm text-green-400 placeholder-green-800 focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Skills */}
                <div className="border border-green-900/30 p-3 bg-zinc-900/30">
                  <label className="block text-xs text-green-500 mb-2">&gt; SKILLS_INPUT || RESUME_FILE:</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="React,Node.js,Python" 
                      className="flex-1 bg-zinc-950 border border-green-900/50 px-3 py-2 text-sm text-green-400 placeholder-green-800 focus:outline-none focus:border-green-500"
                    />
                    <button className="px-3 py-2 border border-green-500 text-green-500 text-xs hover:bg-green-950 transition-all">
                      [UPLOAD]
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div className="border border-green-900/30 p-3 bg-zinc-900/30">
                  <label className="block text-xs text-green-500 mb-2">&gt; ADDITIONAL_PARAMS:</label>
                  <textarea 
                    placeholder="# Enter additional search parameters..." 
                    rows={2}
                    className="w-full bg-zinc-950 border border-green-900/50 px-3 py-2 text-sm text-green-400 placeholder-green-800 focus:outline-none focus:border-green-500 resize-none"
                  />
                </div>

                <button 
                  onClick={() => setIsStreaming(true)}
                  className="w-full py-3 border-2 border-green-500 text-green-400 font-bold hover:bg-green-950 transition-all"
                >
                  $ ./execute_search.sh
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl space-y-6">
              <div className="border border-green-500/50 p-4 bg-green-950/20">
                <p className="text-xs text-green-400 flex items-center gap-2">
                  <span className="animate-pulse">▶</span>
                  PROCESS_STATUS: RUNNING
                </p>
              </div>

              <div className="border border-green-900/30 p-6 bg-zinc-900/30 text-xs space-y-2 max-h-96 overflow-y-auto">
                <p className="text-green-600">[INFO] Initializing search engine...</p>
                <p className="text-green-600">[INFO] Connecting to job boards...</p>
                <p className="text-green-500">[SUCCESS] Found 15 matching positions</p>
                <p className="text-green-600">[INFO] Analyzing requirements...</p>
                <p className="text-green-600">[INFO] Scoring matches...</p>
              </div>

              <button 
                onClick={() => setIsStreaming(false)}
                className="px-6 py-2 border border-red-500 text-red-500 text-xs hover:bg-red-950 transition-all"
              >
                [ABORT]
              </button>

              <div className="space-y-4 mt-8">
                <p className="text-xs text-green-700 uppercase">SEARCH_RESULTS:</p>
                {[1, 2].map((i) => (
                  <div key={i} className="border border-green-900/30 p-5 bg-zinc-900/30 hover:border-green-500/50 transition-all">
                    <h3 className="text-lg font-bold text-green-400">POSITION #{i}: Senior React Developer</h3>
                    <p className="text-sm text-green-600 mt-1">COMPANY: TechCorp Inc.</p>
                    <div className="flex gap-2 mt-3 text-xs">
                      <span className="px-2 py-1 border border-green-500 text-green-400">REMOTE</span>
                      <span className="px-2 py-1 border border-green-800 text-green-600">USA</span>
                      <span className="px-2 py-1 border border-green-500 text-green-400">$120k-$180k</span>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button className="px-4 py-2 border border-green-500 text-green-400 text-xs hover:bg-green-950 transition-all">[SAVE]</button>
                      <button className="px-4 py-2 border border-green-800 text-green-600 text-xs hover:bg-green-950 transition-all">[VIEW]</button>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => setIsStreaming(false)} className="text-green-500 hover:text-green-400 text-xs">$ ./new_search.sh</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
