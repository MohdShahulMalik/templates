'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATUSES = ['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Declined'];
const CATEGORIES = [
  { id: 'all', label: '📋 All' },
  { id: 'remote-worldwide', label: '🌐 Remote Worldwide – React' },
  { id: 'local-hybrid', label: '🏠 Local Hybrid' },
  { id: 'local-onsite', label: '🏢 Local Onsite' },
];

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote worldwide', visa: 'Visa: Global EOR', type: 'Remote', date: 'Aug 3', status: 'Applied', salary: '$150k - $200k', experience: '5+ years', description: 'Build and maintain large-scale web applications using React, TypeScript, and modern frontend technologies. Work with cross-functional teams to deliver high-quality user experiences.' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', visa: 'Visa: Sponsored', type: 'Hybrid', date: 'Aug 2', status: 'Saved', salary: '$180k - $220k', experience: '7+ years', description: 'Lead a team of frontend engineers building the next generation of social experiences. Define technical direction and mentor junior developers.' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', visa: 'Visa: Required', type: 'Onsite', date: 'Aug 1', status: 'Saved', salary: '£80k - £100k', experience: '3-7 years', description: 'Join our small team to build innovative fintech products from the ground up. Work across the entire stack with modern technologies.' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote worldwide', visa: 'Visa: Global EOR', type: 'Remote', date: 'Jul 30', status: 'Interview', salary: '$160k - $190k', experience: '5+ years', description: 'Create beautiful, accessible user interfaces for millions of customers. Focus on performance, accessibility, and design systems.' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote worldwide', visa: 'Visa: US Only', type: 'Remote', date: 'Jul 28', status: 'Applied', salary: '$140k - $180k', experience: '3-5 years', description: 'Work on streaming platform features used by millions globally. Collaborate with product and design teams to build engaging video experiences.' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', visa: 'Visa: Sponsored', type: 'Hybrid', date: 'Jul 25', status: 'Offer', salary: 'CAD$140k+', experience: '6+ years', description: "Build merchant-facing tools and features for one of the world's largest e-commerce platforms. Solve complex problems at scale." },
];

const NavigationBubbles = () => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-slate-800 rounded-full shadow-lg p-3 border border-slate-600">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === 2
            ? 'bg-blue-600 text-white'
            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage2() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [jobs, setJobs] = useState(MOCK_JOBS);

  const toggleStatus = (status: string) => {
    if (status === 'All') {
      setSelectedStatuses(['All']);
    } else {
      const newStatuses = selectedStatuses.includes(status)
        ? selectedStatuses.filter((s) => s !== status && s !== 'All')
        : [...selectedStatuses.filter((s) => s !== 'All'), status];
      setSelectedStatuses(newStatuses.length === 0 ? ['All'] : newStatuses);
    }
  };

  const changeJobStatus = (jobId: number, newStatus: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: newStatus } : job
    ));
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Saved: 'bg-gray-600/20 text-gray-300 border border-gray-600/30',
      Applied: 'bg-blue-600/20 text-blue-300 border border-blue-600/30',
      Interview: 'bg-purple-600/20 text-purple-300 border border-purple-600/30',
      Offer: 'bg-green-600/20 text-green-300 border border-green-600/30',
      Rejected: 'bg-red-600/20 text-red-300 border border-red-600/30',
      Declined: 'bg-orange-600/20 text-orange-300 border border-orange-600/30',
    };
    return colors[status] || 'bg-gray-600/20 text-gray-300 border border-gray-600/30';
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Compact Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Job Listings</h1>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
            + Add Job
          </button>
        </div>
      </div>

      {/* Inline Filters */}
      <div className="border-b border-slate-700 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6 py-4">
          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="🔍 Search by title, company, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800 text-white placeholder-slate-400"
            />
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-sm font-medium text-slate-300 mr-2">Status:</span>
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedStatuses.includes(status)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-800 text-white shadow-sm border-b-2 border-blue-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Single Column Card View - Matching Image Design */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 transition-all border border-slate-700 hover:border-slate-600 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Company Name */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {job.company}
                  </h3>

                  {/* Job Title */}
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    {job.title}
                  </h4>

                  {/* Salary & Experience Row */}
                  <div className="flex items-center gap-3 mb-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span>💰</span>
                      <span className="font-medium">{job.salary}</span>
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1.5">
                      <span>📊</span>
                      <span className="font-medium">{job.experience}</span>
                    </span>
                  </div>

                  {/* Badges Row */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {/* Location Badge */}
                    <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-700/50 text-slate-300 flex items-center gap-1">
                      <span>📍</span>
                      {job.location}
                    </span>

                    {/* Visa Badge */}
                    <span className="px-3 py-1 rounded-md text-xs font-medium bg-emerald-600/20 text-emerald-400 border border-emerald-600/30">
                      {job.visa}
                    </span>

                    {/* Status Badge */}
                    <span className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 ${getStatusColor(job.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${job.status === 'Saved' ? 'bg-gray-400' : job.status === 'Applied' ? 'bg-blue-400' : job.status === 'Interview' ? 'bg-purple-400' : job.status === 'Offer' ? 'bg-green-400' : job.status === 'Rejected' ? 'bg-red-400' : 'bg-orange-400'}`}></span>
                      {job.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Right Side: Conditional rendering based on status */}
                <div className="ml-6 flex flex-col gap-3 items-end shrink-0">
                  {/* For NON-Saved listings: Show status dropdown AND Visit button */}
                  {job.status !== 'Saved' ? (
                    <>
                      {/* Status Dropdown */}
                      <div className="relative group">
                        <button className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-md hover:bg-slate-700 transition-colors text-sm font-medium flex items-center gap-2 min-w-[140px] justify-between">
                          <span>{job.status}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-40 bg-slate-800 rounded-lg shadow-xl border border-slate-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                          {STATUSES.filter(s => s !== 'All' && s !== job.status).map((status) => (
                            <button
                              key={status}
                              onClick={() => changeJobStatus(job.id, status)}
                              className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Visit Button */}
                      <button className="px-6 py-2.5 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 hover:border-slate-500 transition-all text-sm font-semibold flex items-center gap-2">
                        Visit
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    /* For Saved listings: Only show Apply button */
                    <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 transition-all text-sm font-semibold shadow-lg hover:shadow-xl flex items-center gap-2">
                      Apply
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NavigationBubbles />
    </div>
  );
}