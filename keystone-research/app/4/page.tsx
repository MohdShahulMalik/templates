"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const models = [
  { name: "Claude Sonnet 4", provider: "Anthropic" },
  { name: "GPT-4o", provider: "OpenAI" },
  { name: "Gemini 2.5 Pro", provider: "Google" },
];

const resumes = ["Resume_Frontend.pdf", "Resume_Fullstack.pdf"];

const recentSessions = [
  { id: 1, status: "completed" as const, summary: "React senior remote USA UK", count: "15 jobs found", time: "2m ago" },
  { id: 2, status: "failed" as const, summary: "Python backend hybrid Germany", count: "Error", time: "1h ago" },
  { id: 3, status: "running" as const, summary: "Fullstack Node.js remote global", count: "In progress", time: "Now" },
];

const jobResults = [
  { title: "Senior React Engineer", company: "Vercel", location: "Remote", type: "Remote", salary: "$180k-$220k", link: "#" },
  { title: "Full Stack Developer", company: "Stripe", location: "USA", type: "Hybrid", salary: "$160k-$200k", link: "#" },
  { title: "Frontend Lead", company: "GitHub", location: "Remote", type: "Remote", salary: "$170k-$210k", link: "#" },
];

function NavBubbles({ current }: { current: number }) {
  return (
    <div className="fixed bottom-6 right-6 flex gap-2 z-50">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <Link
          key={n}
          href={`/${n}`}
          className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-all ${
            n === current
              ? "border-accent bg-accent/10 text-accent"
              : "border-stroke bg-surface-800 text-foreground-600 hover:text-foreground-900 hover:border-foreground-600"
          }`}
        >
          {n}
        </Link>
      ))}
    </div>
  );
}

function StatusIcon({ status }: { status: "completed" | "failed" | "running" }) {
  if (status === "completed") return <span className="text-success text-lg leading-none">&#10003;</span>;
  if (status === "failed") return <span className="text-danger text-lg leading-none">&#10007;</span>;
  return <span className="inline-block h-3 w-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />;
}

export default function Design4() {
  const [phase, setPhase] = useState<'idle' | 'connecting' | 'researching' | 'completed'>("idle");
  const [streamText, setStreamText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [model, setModel] = useState("Claude Sonnet 4");
  const [remote, setRemote] = useState(true);
  const [hybrid, setHybrid] = useState(false);
  const [onsite, setOnsite] = useState(false);
  const [countries, setCountries] = useState("");
  const [skills, setSkills] = useState("");
  const [skillsMode, setSkillsMode] = useState<'text' | 'resume'>("text");
  const [notes, setNotes] = useState("");
  const [resume, setResume] = useState("");
  const abortRef = useRef(() => {});

  const startResearch = () => {
    setPhase("connecting");
    setStreamText("");
    setShowResults(false);
    abortRef.current = () => {};

    setTimeout(() => {
      setPhase("researching");
      const messages = [
        "Initializing research agent...\n",
        "Loading model configuration...\n",
        "Scanning remote job boards for React, Node.js...\n",
        "Found 43 potential matches in USA, UK, Canada...\n",
        "Filtering by salary range and company size...\n",
        "Verifying job posting freshness...\n",
        "Cross-referencing with company career pages...\n",
        "Compiling final results...\n",
        "Done. 15 jobs matched your criteria.\n",
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i >= messages.length) {
          clearInterval(interval);
          setPhase("completed");
          setShowResults(true);
          return;
        }
        setStreamText((prev) => prev + messages[i]);
        i++;
      }, 700);
      abortRef.current = () => clearInterval(interval);
    }, 800);
  };

  const abort = () => {
    abortRef.current();
    setPhase("idle");
  };

  const reset = () => {
    setPhase("idle");
    setStreamText("");
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-surface-900 text-foreground-900 font-sans">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {phase === "idle" ? (
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">Research Agent</h1>
                <p className="text-sm text-foreground-600 mt-1">AI-powered job search across the web</p>
              </div>
              <Link href="/" className="text-sm text-accent hover:underline">Home</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 flex flex-col gap-6 rounded-xl border border-stroke bg-surface-800 p-6">
                <div>
                  <label className="block text-xs font-medium text-foreground-600 mb-2 uppercase tracking-wider">Model</label>
                  <div className="flex flex-wrap gap-2">
                    {models.map((m) => (
                      <button
                        key={m.name}
                        onClick={() => setModel(m.name)}
                        className={`rounded-lg border px-4 py-2.5 text-sm transition-colors text-left ${
                          model === m.name
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-stroke bg-surface-700 hover:border-foreground-600"
                        }`}
                      >
                        <div className="font-medium">{m.name}</div>
                        <div className="text-xs text-foreground-600">{m.provider}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-foreground-600 mb-2 uppercase tracking-wider">Countries</label>
                    <input
                      type="text"
                      value={countries}
                      onChange={(e) => setCountries(e.target.value)}
                      placeholder="USA, UK, Canada"
                      className="w-full rounded-lg bg-surface-700 border border-stroke px-3 py-2.5 text-sm placeholder:text-foreground-600-muted focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-medium text-foreground-600 uppercase tracking-wider">Skills</label>
                      <div className="flex gap-1 bg-surface-700 rounded-lg p-0.5 border border-stroke">
                        <button
                          onClick={() => setSkillsMode("text")}
                          className={`text-[10px] px-2 py-1 rounded-md transition-colors ${skillsMode === "text" ? "bg-accent text-surface-900 font-medium" : "text-foreground-600 hover:text-foreground-900"}`}
                        >
                          Type
                        </button>
                        <button
                          onClick={() => setSkillsMode("resume")}
                          className={`text-[10px] px-2 py-1 rounded-md transition-colors ${skillsMode === "resume" ? "bg-accent text-surface-900 font-medium" : "text-foreground-600 hover:text-foreground-900"}`}
                        >
                          Resume
                        </button>
                      </div>
                    </div>
                    {skillsMode === "text" ? (
                      <input
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="React, Node.js, Python"
                        className="w-full rounded-lg bg-surface-700 border border-stroke px-3 py-2.5 text-sm placeholder:text-foreground-600-muted focus:border-accent focus:outline-none"
                      />
                    ) : (
                      <select
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        className="w-full rounded-lg bg-surface-700 border border-stroke px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                      >
                        <option value="" className="bg-surface-800">None</option>
                        {resumes.map((r) => (
                          <option key={r} value={r} className="bg-surface-800">{r}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground-600 mb-3 uppercase tracking-wider">Job Types</label>
                  <div className="flex gap-3">
                    {[
                      { label: "Remote", val: remote, set: setRemote },
                      { label: "Hybrid", val: hybrid, set: setHybrid },
                      { label: "Onsite", val: onsite, set: setOnsite },
                    ].map((t) => (
                      <label key={t.label} className="flex items-center gap-2 cursor-pointer">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${t.val ? "border-accent bg-accent/20" : "border-stroke"}`}
                          onClick={() => t.set(!t.val)}
                        >
                          {t.val && <span className="text-accent text-xs">&#10003;</span>}
                        </div>
                        <span className="text-sm">{t.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground-600 mb-2 uppercase tracking-wider">Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Additional instructions for the AI..."
                    rows={3}
                    className="w-full rounded-lg bg-surface-700 border border-stroke px-3 py-2.5 text-sm placeholder:text-foreground-600-muted focus:border-accent focus:outline-none resize-none"
                  />
                </div>

                <button
                  onClick={startResearch}
                  className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-surface-900 hover:brightness-110 transition-all"
                >
                  Start Research
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-medium text-foreground-600 uppercase tracking-wider">Recent Sessions</h3>
                <div className="flex flex-col gap-3">
                  {recentSessions.map((s) => (
                    <div key={s.id} className="rounded-xl border border-stroke bg-surface-800 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <StatusIcon status={s.status} />
                        <span className="text-xs text-foreground-600">{s.time}</span>
                      </div>
                      <p className="text-sm text-foreground-900 mb-1">{s.summary}</p>
                      <p className="text-xs text-foreground-600">{s.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${phase === "completed" ? "bg-success" : "bg-accent animate-pulse"}`} />
                <span className="font-medium">
                  {phase === "connecting" && "Connecting to AI..."}
                  {phase === "researching" && "Researching..."}
                  {phase === "completed" && "Completed"}
                </span>
              </div>
              {phase !== "completed" ? (
                <button onClick={abort} className="text-sm text-danger hover:underline">Abort</button>
              ) : (
                <button onClick={reset} className="text-sm text-accent hover:underline">New Research</button>
              )}
            </div>

            <div className="rounded-xl border border-stroke bg-surface-800 p-5 font-mono text-sm text-foreground-600 leading-relaxed whitespace-pre-wrap min-h-[300px]">
              {streamText}
              {phase !== "completed" && <span className="inline-block h-4 w-2 bg-accent animate-pulse ml-0.5 align-middle" />}
            </div>

            {showResults && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobResults.map((job, i) => (
                  <div key={i} className="rounded-xl border border-stroke bg-surface-800 p-5 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium">{job.type}</span>
                    </div>
                    <div className="font-semibold mb-1">{job.title}</div>
                    <div className="text-sm text-foreground-600 mb-3">{job.company}</div>
                    <div className="text-sm text-foreground-600 mb-4">{job.location} &middot; {job.salary}</div>
                    <div className="flex items-center gap-3 mt-auto">
                      <button className="rounded-md bg-surface-700 border border-stroke px-3 py-1.5 text-sm hover:border-accent transition-colors">Save</button>
                      <a href={job.link} className="text-sm text-accent hover:underline">View</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <NavBubbles current={4} />
    </div>
  );
}
