'use client';

import { useState } from 'react';
import Link from 'next/link';

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote worldwide', salary: '$150k - $200k', date: 'Aug 3', status: 'Applied', time: '10:30 AM' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', salary: '$180k - $220k', date: 'Aug 2', status: 'Saved', time: '2:15 PM' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', salary: '£80k - £100k', date: 'Aug 1', status: 'Saved', time: '11:45 AM' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote worldwide', salary: '$160k - $190k', date: 'Jul 30', status: 'Interview', time: '4:00 PM' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote worldwide', salary: '$140k - $180k', date: 'Jul 28', status: 'Applied', time: '9:20 AM' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', salary: 'CAD$140k+', date: 'Jul 25', status: 'Offer', time: '3:30 PM' },
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

export default function ListingsPage5() {
  const [jobs] = useState(MOCK_JOBS);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Saved: 'bg-slate-700',
      Applied: 'bg-blue-600',
      Interview: 'bg-purple-600',
      Offer: 'bg-green-600',
      Rejected: 'bg-red-600',
    };
    return colors[status] || 'bg-slate-700';
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-white mb-2">Application Timeline</h1>
          <p className="text-slate-400 text-sm">Track your job applications chronologically</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={job.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-6 top-6 w-5 h-5 rounded-full ${getStatusColor(job.status)} ring-4 ring-slate-950`}></div>

                {/* Date label */}
                <div className="absolute left-0 top-6 text-right w-14">
                  <div className="text-xs font-semibold text-slate-500">{job.date}</div>
                  <div className="text-xs text-slate-600">{job.time}</div>
                </div>

                {/* Content card */}
                <div className="bg-slate-900 rounded-lg border border-slate-800 p-5 hover:border-slate-700 transition-all shadow-md">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-white">{job.company}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${getStatusColor(job.status)}`}>
                          {job.status}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-blue-400 mb-2">
                        {job.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span>📍</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>💰</span>
                      <span className="font-medium text-slate-300">{job.salary}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-md hover:bg-slate-700 transition-colors text-sm font-medium">
                      View Details
                    </button>
                    {job.status === 'Saved' && (
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NavigationBubbles current={5} />
    </div>
  );
}