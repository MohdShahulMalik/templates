'use client';

import { useState } from 'react';
import Link from 'next/link';

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote worldwide', visa: 'Visa: Global EOR', salary: '$150k - $200k', experience: '5+ years', status: 'Applied', description: 'Build and maintain large-scale web applications using React, TypeScript, and modern frontend technologies. Work with cross-functional teams to deliver high-quality user experiences.' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', visa: 'Visa: Sponsored', salary: '$180k - $220k', experience: '7+ years', status: 'Saved', description: 'Lead a team of frontend engineers building the next generation of social experiences. Define technical direction and mentor junior developers.' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', visa: 'Visa: Required', salary: '£80k - £100k', experience: '3-7 years', status: 'Saved', description: 'Join our small team to build innovative fintech products from the ground up. Work across the entire stack with modern technologies.' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote worldwide', visa: 'Visa: Global EOR', salary: '$160k - $190k', experience: '5+ years', status: 'Interview', description: 'Create beautiful, accessible user interfaces for millions of customers. Focus on performance, accessibility, and design systems.' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote worldwide', visa: 'Visa: US Only', salary: '$140k - $180k', experience: '3-5 years', status: 'Applied', description: 'Work on streaming platform features used by millions globally. Collaborate with product and design teams to build engaging video experiences.' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', visa: 'Visa: Sponsored', salary: 'CAD$140k+', experience: '6+ years', status: 'Offer', description: "Build merchant-facing tools and features for one of the world's largest e-commerce platforms. Solve complex problems at scale." },
];

const NavigationBubbles = ({ current }: { current: number }) => (
  <div className="fixed bottom-8 right-8 flex gap-2 bg-slate-800 rounded-full shadow-lg p-3 border border-slate-600 z-50">
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

export default function ListingsPage6() {
  const [selectedJob, setSelectedJob] = useState(MOCK_JOBS[0]);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Saved: 'bg-slate-700 text-slate-300',
      Applied: 'bg-blue-600 text-white',
      Interview: 'bg-purple-600 text-white',
      Offer: 'bg-green-600 text-white',
      Rejected: 'bg-red-600 text-white',
    };
    return colors[status] || 'bg-slate-700 text-slate-300';
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Job Explorer</h1>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Job List */}
        <div className="w-96 border-r border-slate-800 bg-slate-900/30 overflow-y-auto">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800 text-white placeholder-slate-400 text-sm mb-4"
            />

            <div className="space-y-2">
              {MOCK_JOBS.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedJob.id === job.id
                      ? 'bg-slate-800 border-blue-600'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white text-sm">{job.company}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </div>
                  <h4 className="text-blue-400 font-medium text-sm mb-2">{job.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>📍 {job.location}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Job Details */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto p-8">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.company}</h2>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{selectedJob.title}</h3>
                  <span className={`inline-flex px-4 py-2 rounded-lg text-sm font-semibold ${getStatusColor(selectedJob.status)}`}>
                    {selectedJob.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Location</div>
                  <div className="text-slate-300 font-medium">{selectedJob.location}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Salary Range</div>
                  <div className="text-slate-300 font-medium">{selectedJob.salary}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Experience</div>
                  <div className="text-slate-300 font-medium">{selectedJob.experience}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Visa</div>
                  <div className="text-slate-300 font-medium">{selectedJob.visa}</div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Job Description</h4>
                <p className="text-slate-400 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="flex gap-3">
                {selectedJob.status === 'Saved' ? (
                  <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Apply Now
                  </button>
                ) : (
                  <button className="flex-1 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
                    View Application
                  </button>
                )}
                <button className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
                  Visit Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigationBubbles current={6} />
    </div>
  );
}