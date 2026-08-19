import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-900 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-semibold text-foreground-900 mb-4 tracking-tight">
        Research Agent Designs
      </h1>
      <p className="text-foreground-600 mb-12 text-lg">
        Select a design to preview
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full">
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <Link
            key={n}
            href={`/${n}`}
            className="flex items-center justify-center h-24 rounded-xl border border-stroke bg-surface-800 hover:bg-surface-700 hover:border-accent transition-all text-foreground-900 font-medium text-lg"
          >
            Design {n}
          </Link>
        ))}
      </div>
    </div>
  );
}
