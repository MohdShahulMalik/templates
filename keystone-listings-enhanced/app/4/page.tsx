'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATUSES = ['Saved', 'Applied', 'Interview', 'Offer', 'Rejected'];

const MOCK_JOBS = [
  { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Remote worldwide', salary: '$150k - $200k', status: 'Applied' },
  { id: 2, title: 'Frontend Lead', company: 'Meta', location: 'NYC · Hybrid', salary: '$180k - $220k', status: 'Saved' },
  { id: 3, title: 'Full Stack Developer', company: 'Startup Inc', location: 'London · Onsite', salary: '£80k - £100k', status: 'Saved' },
  { id: 4, title: 'UI Engineer', company: 'Amazon', location: 'Remote worldwide', salary: '$160k - $190k', status: 'Interview' },
  { id: 5, title: 'React Developer', company: 'Netflix', location: 'Remote worldwide', salary: '$140k - $180k', status: 'Applied' },
  { id: 6, title: 'Senior Frontend Dev', company: 'Shopify', location: 'Toronto · Hybrid', salary: 'CAD$140k+', status: 'Offer' },
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

export default function ListingsPage4() {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [draggedJob, setDraggedJob] = useState<number | null>(null);

  const handleDragStart = (jobId: number) => {
    setDraggedJob(jobId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (status: string) => {
    if (draggedJob) {
      setJobs(jobs.map(job => 
        job.id === draggedJob ? { ...job, status } : job
      ));
      setDraggedJob(null);
    }
  };

  const getColumnColor = (status: string) => {
    const colors: Record<string, string> = {
      Saved: 'border-slate-700 bg-slate-900/30',
      Applied: 'border-blue-700 bg-blue-950/30',
      Interview: 'border-purple-700 bg-purple-950/30',
      Offer: 'border-green-700 bg-green-950/30',
      Rejected: 'border-red-700 bg-red-950/30',
    };
    return colors[status] || 'border-slate-700 bg-slate-900/30';
  };

  const getColumnHeader = (status: string) => {
    const headers: Record<string, string> = {
      Saved: '🔖 Saved',
      Applied: '📤 Applied',
      Interview: '🎯 Interview',
      Offer: '✅ Offer',
      Rejected: '❌ Rejected',
    };
    return headers[status] || status;
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Kanban Board</h1>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
              + Add Job
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {STATUSES.map((status) => (
            <div
              key={status}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(status)}
              className={`flex-shrink-0 w-80 rounded-lg border-2 ${getColumnColor(status)} p-4`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">{getColumnHeader(status)}</h2>
                <span className="px-2 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  {jobs.filter(job => job.status === status).length}
                </span>
              </div>

              <div className="space-y-3">
                {jobs
                  .filter(job => job.status === status)
                  .map((job) => (
                    <div
                      key={job.id}
                      draggable
                      onDragStart={() => handleDragStart(job.id)}
                      className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 cursor-move transition-all shadow-sm hover:shadow-md"
                    >
                      <h3 className="font-bold text-white mb-1 text-sm">
                        {job.company}
                      </h3>
                      <h4 className="text-blue-400 font-medium mb-3 text-sm">
                        {job.title}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>📍</span>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>💰</span>
                          <span className="font-medium text-slate-300">{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <NavigationBubbles current={4} />
    </div>
  );
}