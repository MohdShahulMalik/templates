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
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Google',
    location: 'Remote',
    date: 'Aug 3',
    status: 'Applied',
    description: 'Looking for an experienced React developer to join our platform team. You will work on building scalable web applications.',
    salary: '$150k - $200k',
    requirements: ['5+ years React', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    title: 'Frontend Lead',
    company: 'Meta',
    location: 'NYC · Hybrid',
    date: 'Aug 2',
    status: 'Saved',
    description: 'Lead a team of frontend engineers building the next generation of social experiences.',
    salary: '$180k - $220k',
    requirements: ['Leadership', 'React', 'GraphQL'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    location: 'London · Onsite',
    date: 'Aug 1',
    status: 'Saved',
    description: 'Join our small team to build innovative fintech products from the ground up.',
    salary: '£80k - £100k',
    requirements: ['Full Stack', 'AWS', 'Python'],
  },
];

const NavigationBubbles = () => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-white rounded-full shadow-lg p-3 border border-gray-200 z-50">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === 7
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage7() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedJob, setSelectedJob] = useState(MOCK_JOBS[0]);

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
    <div className="min-h-screen bg-gray-100">
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

          {/* Status & Categories */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex gap-2">
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
          </div>

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

      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6 h-[calc(100vh-280px)]">
        {/* Left Panel - Job List */}
        <div className="w-2/5 bg-white rounded-lg shadow-sm border border-gray-200 overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {MOCK_JOBS.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`p-5 cursor-pointer transition-colors ${
                  selectedJob.id === job.id
                    ? 'bg-blue-50 border-l-4 border-l-blue-600'
                    : 'hover:bg-gray-50'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {job.company} · {job.location}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                  <span className="text-xs text-gray-500">{job.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Job Details */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-y-auto p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedJob.title}</h2>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <span className="font-semibold text-lg">{selectedJob.company}</span>
              <span>·</span>
              <span>📍 {selectedJob.location}</span>
              <span>·</span>
              <span>{selectedJob.date}</span>
            </div>
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedJob.status)}`}>
              ● {selectedJob.status}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Salary</h3>
            <p className="text-2xl font-bold text-green-600">{selectedJob.salary}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {selectedJob.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Apply Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Save for Later
            </button>
          </div>
        </div>
      </div>

      <NavigationBubbles />
    </div>
  );
}
