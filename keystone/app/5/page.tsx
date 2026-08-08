'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATUSES = ['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Declined'];

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote', date: 'Aug 3', status: 'Applied' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', date: 'Aug 2', status: 'Saved' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', date: 'Aug 1', status: 'Saved' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote', date: 'Jul 30', status: 'Interview' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote', date: 'Jul 28', status: 'Applied' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', date: 'Jul 25', status: 'Offer' },
];

const NavigationBubbles = () => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-white rounded-full shadow-lg p-3 border border-gray-200">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === 5
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage5() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['All']);

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
      Saved: 'border-gray-400',
      Applied: 'border-blue-500',
      Interview: 'border-purple-500',
      Offer: 'border-green-500',
      Rejected: 'border-red-500',
      Declined: 'border-orange-500',
    };
    return colors[status] || 'border-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Job Timeline</h1>
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium">
              + Add Job
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="🔍 Search by title, company, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400"
            />
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  selectedStatuses.includes(status)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline View */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {MOCK_JOBS.map((job, index) => (
              <div key={job.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 ${getStatusColor(
                    job.status
                  )} bg-slate-800`}
                />

                {/* Date Badge */}
                <div className="absolute left-0 top-0 text-xs text-slate-400 font-medium">
                  {job.date}
                </div>

                {/* Job Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-5 hover:border-slate-600 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded bg-slate-700 text-slate-300`}>
                      {job.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {job.company} · {job.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NavigationBubbles />
    </div>
  );
}
