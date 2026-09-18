import React, { Suspense } from "react";

// Task 4: Performance Optimization with Code Splitting (React.lazy)
const MovieWatchlist = React.lazy(() => import("./MovieWatchlist"));

export default function Session20App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans">
      <header className="max-w-xl mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800">🎬 Movie Watchlist</h1>
        <p className="text-xs text-slate-500 mt-1">
          React + Firebase &bull; Code Splitting (`React.lazy`) &bull; Netlify Ready
        </p>
      </header>

      <Suspense fallback={<p className="text-center text-slate-500 text-sm py-8">Loading Watchlist...</p>}>
        <MovieWatchlist />
      </Suspense>
    </div>
  );
}
