"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// --- MOCK DATA ---
const jobs = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote', type: 'Remote', date: 'Aug 3', status: 'Applied', category: '🌐 Remote Worldwide – React' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC', type: 'Hybrid', date: 'Aug 2', status: 'Saved', category: '🏠 Local Hybrid' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London', type: 'Onsite', date: 'Aug 1', status: 'Saved', category: '🏢 Local Onsite' },
];

const statuses = ['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Declined'];
const categories = ['📋 All', '🌐 Remote Worldwide – React', '🏠 Local Hybrid', '🏢 Local Onsite'];

const statusColors: Record<string, string> = {
  Saved: 'bg-gray-200 text-gray-800',
  Applied: 'bg-blue-100 text-blue-800',
  Interview: 'bg-purple-100 text-purple-800',
  Offer: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  Declined: 'bg-orange-100 text-orange-800',
};

// --- DESIGN 1: Classic List (Clean & Minimal) ---
const Design1 = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen font-sans">
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Job</button>
    </header>
    
    <div className="mb-6 space-y-4">
      <input type="text" placeholder="🔍 Search by title, company, or location..." className="w-full p-3 border rounded-lg" />
      <div className="flex flex-wrap gap-2">
        <span className="font-semibold text-gray-700 mr-2 py-1">Status:</span>
        {statuses.map(s => (
          <button key={s} className={`px-3 py-1 rounded-full text-sm ${s === 'All' ? 'bg-blue-100 text-blue-800 font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{s}</button>
        ))}
      </div>
    </div>

    <div className="flex gap-2 mb-6 border-b pb-2 overflow-x-auto">
      {categories.map((c, i) => (
        <button key={c} className={`whitespace-nowrap px-4 py-2 rounded-t-lg ${i === 0 ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>{c}</button>
      ))}
    </div>

    <div className="space-y-4">
      {jobs.map(job => (
        <div key={job.id} className="p-5 border rounded-lg hover:shadow-md transition-shadow bg-white flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 cursor-pointer hover:underline">{job.title}</h3>
            <p className="text-gray-600 mt-1">{job.company} · {job.location} · {job.type} · {job.date}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}>● {job.status}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- DESIGN 2: Grid Layout ---
const Design2 = () => (
  <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-extrabold text-gray-800">Job Listings</h1>
      <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-md shadow hover:bg-indigo-700">+ Add Job</button>
    </header>
    
    <div className="bg-white p-4 rounded-xl shadow-sm mb-8 space-y-4">
      <input type="text" placeholder="🔍 Search jobs..." className="w-full p-3 border border-gray-200 rounded-md bg-gray-50" />
      <div className="flex gap-2 overflow-x-auto pb-2">
        {statuses.map(s => (
          <button key={s} className={`px-4 py-1.5 rounded-md text-sm border ${s === 'All' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-gray-200 text-gray-600'}`}>{s}</button>
        ))}
      </div>
    </div>

    <div className="flex gap-3 mb-6 overflow-x-auto">
      {categories.map((c, i) => (
        <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium ${i === 0 ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 border shadow-sm'}`}>{c}</button>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map(job => (
        <div key={job.id} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all">
          <div className="flex justify-between items-start mb-4">
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${statusColors[job.status]}`}>{job.status}</span>
            <span className="text-xs text-gray-400">{job.date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{job.company}</p>
          <div className="flex gap-2 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">{job.location}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{job.type}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- DESIGN 3: Dark Mode Tech ---
const Design3 = () => (
  <div className="max-w-5xl mx-auto p-6 bg-gray-900 min-h-screen text-gray-100">
    <header className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
      <h1 className="text-2xl font-mono text-cyan-400">~/jobs/listings</h1>
      <button className="bg-cyan-500 text-gray-900 px-4 py-2 font-mono font-bold hover:bg-cyan-400">+ ADD_JOB</button>
    </header>
    
    <div className="mb-6 space-y-4">
      <input type="text" placeholder="$ grep -i 'search...'" className="w-full p-3 bg-gray-800 border border-gray-700 text-cyan-300 font-mono focus:outline-none focus:border-cyan-500" />
      <div className="flex flex-wrap gap-2">
        {statuses.map(s => (
          <button key={s} className={`px-3 py-1 text-xs font-mono border ${s === 'All' ? 'border-cyan-500 text-cyan-400 bg-cyan-900/30' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}>[{s}]</button>
        ))}
      </div>
    </div>

    <div className="flex gap-2 mb-8 overflow-x-auto">
      {categories.map((c, i) => (
        <button key={c} className={`whitespace-nowrap px-4 py-2 font-mono text-sm ${i === 0 ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}>{c}</button>
      ))}
    </div>

    <div className="space-y-3">
      {jobs.map(job => (
        <div key={job.id} className="p-4 bg-gray-800 border border-gray-700 hover:border-cyan-500/50 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h3 className="text-lg font-mono text-gray-100">{job.title} <span className="text-cyan-500">@ {job.company}</span></h3>
            <p className="text-gray-500 text-sm font-mono mt-1">{job.location} // {job.type} // {job.date}</p>
          </div>
          <span className={`px-3 py-1 text-xs font-mono border ${job.status === 'Applied' ? 'border-blue-500 text-blue-400' : 'border-gray-500 text-gray-400'}`}>{job.status.toUpperCase()}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- DESIGN 4: Compact Table ---
const Design4 = () => (
  <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
    <div className="flex justify-between items-end mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Listings</h1>
        <div className="flex gap-4">
          <input type="text" placeholder="Search..." className="p-2 border rounded text-sm w-64" />
          <select className="p-2 border rounded text-sm">
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded text-sm">+ Add Job</button>
    </div>

    <div className="flex gap-1 mb-4 border-b">
      {categories.map((c, i) => (
        <button key={c} className={`px-4 py-2 text-sm ${i === 0 ? 'border-b-2 border-black font-bold' : 'text-gray-500'}`}>{c}</button>
      ))}
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200 text-sm text-gray-600">
            <th className="py-3 px-4 font-semibold">Title</th>
            <th className="py-3 px-4 font-semibold">Company</th>
            <th className="py-3 px-4 font-semibold">Location</th>
            <th className="py-3 px-4 font-semibold">Date</th>
            <th className="py-3 px-4 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id} className="border-b hover:bg-gray-50 text-sm">
              <td className="py-3 px-4 font-medium text-gray-900">{job.title}</td>
              <td className="py-3 px-4">{job.company}</td>
              <td className="py-3 px-4 text-gray-500">{job.location} ({job.type})</td>
              <td className="py-3 px-4 text-gray-500">{job.date}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-xs ${statusColors[job.status]}`}>{job.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- DESIGN 5: Sidebar Layout ---
const Design5 = () => (
  <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen flex flex-col md:flex-row gap-8">
    <aside className="w-full md:w-64 shrink-0 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Jobs</h1>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">+ Add New Job</button>
      </div>
      
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Filters</h3>
        <input type="text" placeholder="Search..." className="w-full p-2 border rounded-lg mb-4 text-sm" />
        <div className="space-y-2">
          {statuses.map((s, i) => (
            <label key={s} className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" defaultChecked={i === 0} className="rounded text-blue-600" />
              {s}
            </label>
          ))}
        </div>
      </div>
    </aside>

    <main className="flex-1">
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {categories.map((c, i) => (
          <button key={c} className={`px-4 py-2 rounded-lg text-sm font-medium ${i === 0 ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:bg-gray-200'}`}>{c}</button>
        ))}
      </div>

      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-xl text-gray-400">
                {job.company.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
              </div>
            </div>
            <div className="text-right">
               <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${statusColors[job.status]}`}>{job.status}</span>
               <p className="text-xs text-gray-400">Added {job.date}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- DESIGN 6: Brutalist ---
const Design6 = () => (
  <div className="max-w-4xl mx-auto p-6 bg-yellow-50 min-h-screen font-mono">
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-4xl font-black uppercase tracking-tighter border-4 border-black p-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">JOB_LISTINGS</h1>
      <button className="bg-pink-400 text-black border-4 border-black px-6 py-2 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">+ Add Job</button>
    </header>
    
    <div className="mb-8 border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <input type="text" placeholder="SEARCH..." className="w-full p-2 border-2 border-black mb-4 uppercase focus:outline-none focus:bg-yellow-100" />
      <div className="flex flex-wrap gap-2">
        {statuses.map(s => (
          <button key={s} className={`px-3 py-1 border-2 border-black uppercase text-sm font-bold ${s === 'All' ? 'bg-black text-white' : 'bg-white hover:bg-gray-200'}`}>{s}</button>
        ))}
      </div>
    </div>

    <div className="flex gap-2 mb-6 overflow-x-auto">
      {categories.map((c, i) => (
        <button key={c} className={`px-4 py-2 border-4 border-black uppercase font-bold text-sm ${i === 0 ? 'bg-blue-400' : 'bg-white'}`}>{c}</button>
      ))}
    </div>

    <div className="space-y-6">
      {jobs.map(job => (
        <div key={job.id} className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-black uppercase">{job.title}</h3>
            <span className="border-2 border-black px-2 py-1 text-xs font-bold uppercase bg-green-300">{job.status}</span>
          </div>
          <p className="text-lg font-bold">{job.company}</p>
          <p className="text-sm border-t-2 border-black pt-2 mt-4 uppercase">{job.location} | {job.type} | {job.date}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- DESIGN 7: Glassmorphism / Soft ---
const Design7 = () => (
  <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 min-h-screen font-sans">
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Job Listings</h1>
      <button className="bg-white/60 backdrop-blur-md border border-white/40 text-blue-600 font-semibold px-6 py-2.5 rounded-2xl shadow-sm hover:bg-white/80 transition-all">+ Add Job</button>
    </header>
    
    <div className="bg-white/40 backdrop-blur-lg border border-white/50 p-6 rounded-3xl shadow-sm mb-8">
      <input type="text" placeholder="Search jobs..." className="w-full p-4 bg-white/50 border border-white/60 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" />
      <div className="flex gap-3 overflow-x-auto">
        {statuses.map(s => (
          <button key={s} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${s === 'All' ? 'bg-blue-500 text-white shadow-md' : 'bg-white/50 text-gray-600 hover:bg-white/80'}`}>{s}</button>
        ))}
      </div>
    </div>

    <div className="flex gap-3 mb-8 overflow-x-auto">
      {categories.map((c, i) => (
        <button key={c} className={`px-5 py-2.5 rounded-2xl text-sm font-medium backdrop-blur-md border border-white/40 ${i === 0 ? 'bg-white/80 text-blue-700 shadow-sm' : 'bg-white/30 text-gray-600 hover:bg-white/50'}`}>{c}</button>
      ))}
    </div>

    <div className="space-y-5">
      {jobs.map(job => (
        <div key={job.id} className="p-6 bg-white/60 backdrop-blur-lg border border-white/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-gray-500 font-medium">{job.company} <span className="opacity-50">•</span> {job.location}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider ${statusColors[job.status]}`}>{job.status}</span>
            <span className="text-xs text-gray-400 font-medium">{job.date}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function JobListingDesigns({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  let CurrentDesign = Design1;
  switch (id) {
    case '1': CurrentDesign = Design1; break;
    case '2': CurrentDesign = Design2; break;
    case '3': CurrentDesign = Design3; break;
    case '4': CurrentDesign = Design4; break;
    case '5': CurrentDesign = Design5; break;
    case '6': CurrentDesign = Design6; break;
    case '7': CurrentDesign = Design7; break;
    default: notFound();
  }

  return (
    <>
      <CurrentDesign />
      
      {/* Navigation Bubbles */}
      <div className="fixed bottom-8 right-8 flex gap-2 z-50">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <Link 
            key={num} 
            href={`/${num}`} 
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg transition-transform hover:scale-110 ${
              id === String(num) ? 'bg-blue-600 text-white ring-4 ring-blue-300' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            }`}
          >
            {num}
          </Link>
        ))}
      </div>
    </>
  );
}
