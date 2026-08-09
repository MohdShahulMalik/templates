'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATUSES = ['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Declined'];

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote worldwide', visa: 'Visa: Global EOR', type: 'Remote', date: 'Aug 3', status: 'Applied', salary: '$150k - $200k', experience: '5+ years' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', visa: 'Visa: Sponsored', type: 'Hybrid', date: 'Aug 2', status: 'Saved', salary: '$180k - $220k', experience: '7+ years' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', visa: 'Visa: Required', type: 'Onsite', date: 'Aug 1', status: 'Saved', salary: '£80k - £100k', experience: '3-7 years' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote worldwide', visa: 'Visa: Global EOR', type: 'Remote', date: 'Jul 30', status: 'Interview', salary: '$160k - $190k', experience: '5+ years' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote worldwide', visa: 'Visa: US Only', type: 'Remote', date: 'Jul 28', status: 'Applied', salary: '$140k - $180k', experience: '3-5 years' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', visa: 'Visa: Sponsored', type: 'Hybrid', date: 'Jul 25', status: 'Offer', salary: 'CAD$140k+', experience: '6+ years' },
];

const NavigationBubbles = ({ current }: { current: number }) => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-slate-800 rounded-full shadow-lg p-3 border border-slate-600">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === current
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

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Saved: 'bg-gray-600/30 text-gray-300',
      Applied: 'bg-blue-600/30 text-blue-300',
      Interview: 'bg-purple-600/30 text-purple-300',
      Offer: 'bg-green-600/30 text-green-300',
      Rejected: 'bg-red-600/30 text-red-300',
      Declined: 'bg-orange-600/30 text-orange-300',
    };
    return colors[status] || 'bg-gray-600/30 text-gray-300';
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-white">Job Board</h1>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              + New Job
            </button>
          </div>
          
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-4 py-3 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800 text-white placeholder-slate-400"
          />
        </div>
      </div>

      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 flex-wrap">
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedStatuses.includes(status)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-900 rounded-lg p-5 border border-slate-800 hover:border-slate-700 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {job.company}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-blue-400 mb-2">
                    {job.title}
                  </h4>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>💰</span>
                  <span className="font-medium text-slate-300">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>⏱️</span>
                  <span>{job.experience}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {job.status === 'Saved' ? (
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Apply Now
                  </button>
                ) : (
                  <button className="flex-1 px-4 py-2 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-800 transition-colors text-sm font-medium">
                    View Details
                  </button>
                )}
                <button className="px-4 py-2 border border-slate-700 text-slate-400 rounded-md hover:bg-slate-800 hover:text-slate-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NavigationBubbles current={2} />
    </div>
  );
}