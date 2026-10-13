"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Design1() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="h-screen bg-white dark:bg-black flex">
      <Navigation />
      
      {/* Sidebar */}
      <aside className="w-64 h-screen border-r border-zinc-200 dark:border-zinc-800 p-4 overflow-y-auto">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Recent Sessions</h2>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 cursor-pointer transition-colors">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">Remote React Developer jobs in USA, UK...</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1">15 jobs • 2m ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen flex items-center justify-center p-6 overflow-y-auto">
        {!isStreaming ? (
          <div className="w-full max-w-2xl space-y-4">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Job Research</h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Let AI find the perfect opportunities for you</p>
            </div>

            <div className="space-y-4">
              {/* Model Picker */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Model</label>
                <select className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Claude Sonnet 4</option>
                  <option>GPT-4o</option>
                  <option>Gemini 2.5 Pro</option>
                </select>
              </div>

              {/* Job Types */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Job Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">Remote</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">Hybrid</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">Onsite</span>
                  </label>
                </div>
              </div>

              {/* Countries */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Countries</label>
                <input 
                  type="text" 
                  placeholder="USA, UK, Canada" 
                  className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Skills with Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Skills or Resume</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="React, Node.js, Python or drag & drop resume" 
                    className="w-full px-4 py-2.5 pr-24 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Upload
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Additional Notes</label>
                <textarea 
                  placeholder="Any specific requirements or preferences..." 
                  rows={3}
                  className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button 
                onClick={() => setIsStreaming(true)}
                className="w-full py-3.5 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Start Research
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-6">
            {/* Status Bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-950 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Researching...</span>
            </div>

            {/* Streaming Output */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl font-mono text-sm space-y-2">
              <p className="text-zinc-600 dark:text-zinc-400">🔍 Analyzing requirements...</p>
              <p className="text-zinc-600 dark:text-zinc-400">🌐 Searching job boards...</p>
              <p className="text-zinc-600 dark:text-zinc-400">✓ Found 15 matching positions</p>
            </div>

            {/* Abort Button */}
            <button 
              onClick={() => setIsStreaming(false)}
              className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Abort Research
            </button>

            {/* Job Cards */}
            <div className="space-y-4 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Senior React Developer</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">TechCorp Inc.</p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-lg">Remote</span>
                    <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-lg">USA</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-lg">$120k-$180k</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">Save</button>
                    <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">View</button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsStreaming(false)}
              className="text-blue-500 hover:underline text-sm"
            >
              ← New Research
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
