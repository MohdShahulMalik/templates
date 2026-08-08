'use client';

import { useState } from 'react';
import Link from 'next/link';

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote', date: 'Aug 3', status: 'Applied' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', date: 'Aug 2', status: 'Saved' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', date: 'Aug 1', status: 'Saved' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote', date: 'Jul 30', status: 'Interview' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote', date: 'Jul 28', status: 'Applied' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', date: 'Jul 25', status: 'Offer' },
];

const COLUMNS = [
  { id: 'Saved', label: 'Saved', color: 'bg-gray-100' },
  { id: 'Applied', label: 'Applied', color: 'bg-blue-100' },
  { id: 'Interview', label: 'Interview', color: 'bg-purple-100' },
  { id: 'Offer', label: 'Offer', color: 'bg-green-100' },
  { id: 'Rejected', label: 'Rejected', color: 'bg-red-100' },
];

const NavigationBubbles = () => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-white rounded-full shadow-lg p-3 border border-gray-200">
    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Link
        key={num}
        href={`/${num}`}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
          num === 3
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {num}
      </Link>
    ))}
  </div>
);

export default function ListingsPage3() {
  const [searchQuery, setSearchQuery] = useState('');

  const getJobsByStatus = (status: string) => {
    return MOCK_JOBS.filter((job) => job.status === status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-md">
              + Add Job
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search by title, company, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {COLUMNS.map((column) => {
            const jobs = getJobsByStatus(column.id);
            return (
              <div key={column.id} className="flex-shrink-0 w-80">
                <div className={`${column.color} rounded-t-lg px-4 py-3 border-b-2 border-gray-300`}>
                  <h2 className="font-semibold text-gray-900 flex items-center justify-between">
                    <span>{column.label}</span>
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-bold text-gray-700">
                      {jobs.length}
                    </span>
                  </h2>
                </div>
                <div className="bg-gray-50 rounded-b-lg p-3 min-h-[600px] space-y-3">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-move"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        {job.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3">
                        {job.company}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{job.location}</span>
                        <span>{job.date}</span>
                      </div>
                    </div>
                  ))}
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
