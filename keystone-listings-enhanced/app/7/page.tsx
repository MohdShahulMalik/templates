'use client';

import { useState } from 'react';
import Link from 'next/link';

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote worldwide', salary: '$150k - $200k', experience: '5+ years', status: 'Applied', description: 'Build and maintain large-scale web applications using React, TypeScript, and modern frontend technologies.' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', salary: '$180k - $220k', experience: '7+ years', status: 'Saved', description: 'Lead a team of frontend engineers building the next generation of social experiences.' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', salary: '£80k - £100k', experience: '3-7 years', status: 'Saved', description: 'Join our small team to build innovative fintech products from the ground up.' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote worldwide', salary: '$160k - $190k', experience: '5+ years', status: 'Interview', description: 'Create beautiful, accessible user interfaces for millions of customers.' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote worldwide', salary: '$140k - $180k', experience: '3-5 years', status: 'Applied', description: 'Work on streaming platform features used by millions globally.' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', salary: 'CAD$140k+', experience: '6+ years', status: 'Offer', description: "Build merchant-facing tools and features for one of the world's largest e-commerce platforms." },
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

export default function ListingsPage7() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Saved: 'text-slate-400',
      Applied: 'text-blue-400',
      Interview: 'text-purple-400',
      Offer: 'text-green-400',
      Rejected: 'text-red-400',
    };
    return colors[status] || 'text-slate-400';
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">My Applications</h1>
              <p className="text-sm text-slate-400 mt-1">{MOCK_JOBS.length} total applications</p>
            </div>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              + New Application
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="space-y-2">
          {MOCK_JOBS.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div
                key={job.id}
                className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : job.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-white">{job.company}</h3>
                        <span className="text-xs text-slate-500">•</span>
                        <span className={`text-sm font-medium ${getStatusColor(job.status)}`}>
                          {job.status}
                        </span>
                      </div>
                      <h4 className="text-sm text-blue-400 font-medium">{job.title}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="border-t border-slate-800 px-6 py-4 bg-slate-800/30">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Experience Required</div>
                        <div className="text-sm text-slate-300">{job.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Status</div>
                        <div className={`text-sm font-medium ${getStatusColor(job.status)}`}>{job.status}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Description</div>
                      <p className="text-sm text-slate-400 leading-relaxed">{job.description}</p>
                    </div>

                    <div className="flex gap-2">
                      {job.status === 'Saved' ? (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                          Apply Now
                        </button>
                      ) : (
                        <button className="px-4 py-2 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-700 transition-colors text-sm font-medium">
                          View Details
                        </button>
                      )}
                      <button className="px-4 py-2 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-700 transition-colors text-sm font-medium">
                        Visit Site
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <NavigationBubbles current={7} />
    </div>
  );
}