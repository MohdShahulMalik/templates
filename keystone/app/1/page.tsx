'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATUSES = ['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Declined'];
const CATEGORIES = [
  { id: 'all', label: '📋 All', emoji: '📋' },
  { id: 'remote-worldwide', label: '🌐 Remote Worldwide – React', emoji: '🌐' },
  { id: 'local-hybrid', label: '🏠 Local Hybrid', emoji: '🏠' },
  { id: 'local-onsite', label: '🏢 Local Onsite', emoji: '🏢' },
];

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote', type: 'Remote', date: 'Aug 3', status: 'Applied' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', type: 'Hybrid', date: 'Aug 2', status: 'Saved' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', type: 'Onsite', date: 'Aug 1', status: 'Saved' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote', type: 'Remote', date: 'Jul 30', status: 'Interview' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote', type: 'Remote', date: 'Jul 28', status: 'Applied' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', type: 'Hybrid', date: 'Jul 25', status: 'Offer' },
];

const NavigationBubbles = () => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-white rounded-full shadow-lg p-3 border border-gray-200">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === 1
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage1() {
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
      Saved: 'bg-gray-100 text-gray-700',
      Applied: 'bg-blue-100 text-blue-700',
      Interview: 'bg-purple-100 text-purple-700',
      Offer: 'bg-green-100 text-green-700',
      Rejected: 'bg-red-100 text-red-700',
      Declined: 'bg-orange-100 text-orange-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              + Add Job
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Title, company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>
              </div>

              {/* Status Filters */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">Status</label>
                <div className="space-y-2">
                  {STATUSES.map((status) => (
                    <label key={status} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedStatuses.includes(status)}
                        onChange={() => toggleStatus(status)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Category Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_JOBS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {job.company} · {job.location} · {job.date}
                  </p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}>
                    ● {job.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavigationBubbles />
    </div>
  );
}
