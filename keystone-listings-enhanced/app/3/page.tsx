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

export default function ListingsPage3() {
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

  const getStatusBadge = (status: string) => {
    const badges: Record<string, string> = {
      Saved: 'bg-slate-700 text-slate-300',
      Applied: 'bg-blue-600 text-white',
      Interview: 'bg-purple-600 text-white',
      Offer: 'bg-green-600 text-white',
      Rejected: 'bg-red-600 text-white',
      Declined: 'bg-orange-600 text-white',
    };
    return badges[status] || 'bg-slate-700 text-slate-300';
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Job Applications</h1>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Quick search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800 text-white placeholder-slate-400 text-sm w-64"
              />
              <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2">
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  selectedStatuses.includes(status)
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800/50 border-b border-slate-700">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Company</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Position</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Salary</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{job.company}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-blue-400 font-medium">{job.title}</div>
                    <div className="text-xs text-slate-500">{job.experience}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-300">{job.location}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-300">{job.salary}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-400">{job.date}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <NavigationBubbles current={3} />
    </div>
  );
}