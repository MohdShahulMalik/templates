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
          num === 4
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage4() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

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
      Saved: 'text-gray-700',
      Applied: 'text-blue-700',
      Interview: 'text-purple-700',
      Offer: 'text-green-700',
      Rejected: 'text-red-700',
      Declined: 'text-orange-700',
    };
    return colors[status] || 'text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
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
              className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedStatuses.includes(status)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table View */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_JOBS.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-900 hover:text-blue-600">
                      {job.title}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                    {job.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-medium ${getStatusColor(job.status)}`}>
                      ● {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <NavigationBubbles />
    </div>
  );
}
