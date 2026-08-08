'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATUSES = ['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Declined'];
const CATEGORIES = [
  { id: 'all', label: '📋 All' },
  { id: 'remote-worldwide', label: '🌐 Remote Worldwide' },
  { id: 'local-hybrid', label: '🏠 Local Hybrid' },
  { id: 'local-onsite', label: '🏢 Local Onsite' },
];

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote', date: 'Aug 3', status: 'Applied', salary: '$150k - $200k' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', date: 'Aug 2', status: 'Saved', salary: '$180k - $220k' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', date: 'Aug 1', status: 'Saved', salary: '£80k - £100k' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote', date: 'Jul 30', status: 'Interview', salary: '$160k - $190k' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote', date: 'Jul 28', status: 'Applied', salary: '$140k - $180k' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto', date: 'Jul 25', status: 'Offer', salary: 'CAD$140k+' },
];

const NavigationBubbles = () => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-white rounded-full shadow-lg p-3 border border-gray-200 z-50">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === 6
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage6() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('all');

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
      Saved: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800',
      Applied: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900',
      Interview: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-900',
      Offer: 'bg-gradient-to-br from-green-100 to-green-200 text-green-900',
      Rejected: 'bg-gradient-to-br from-red-100 to-red-200 text-red-900',
      Declined: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-900',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
            <button className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-md font-medium text-sm">
              + Add Job
            </button>
          </div>

          <div className="flex gap-3 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Pills */}
          <div className="flex gap-2 mt-3">
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedStatuses.includes(status)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {MOCK_JOBS.map((job, index) => {
            // Varying card heights for masonry effect
            const heights = ['auto', 'auto', 'auto'];
            return (
              <div
                key={job.id}
                className="break-inside-avoid"
                style={{ height: heights[index % 3] }}
              >
                <div className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-300 ${getStatusColor(job.status)}`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                      {job.company}
                    </span>
                    <span className="text-xs px-2 py-1 bg-white/50 rounded-full font-medium">
                      {job.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {job.title}
                  </h3>
                  
                  <p className="text-sm opacity-80 mb-3">
                    📍 {job.location}
                  </p>
                  
                  {job.salary && (
                    <p className="text-lg font-semibold mb-3">
                      💰 {job.salary}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t border-black/10">
                    <span className="text-sm font-semibold">
                      ● {job.status}
                    </span>
                    <button className="text-sm font-medium underline hover:no-underline">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <NavigationBubbles />
    </div>
  );
}
