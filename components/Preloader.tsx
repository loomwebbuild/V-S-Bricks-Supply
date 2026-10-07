'use client';

import {useState, useEffect} from 'react';

export default function Preloader() {
  const [completed, setCompleted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        setHidden(true);
      }, 0);
      return () => clearTimeout(quickTimer);
    }

    // Row build interval
    const totalRows = 5;
    const interval = setInterval(() => {
      setActiveRow((prev) => {
        if (prev < totalRows) {
          return prev + 1;
        }
        return prev;
      });
    }, 280);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const next = prev + Math.floor(Math.random() * 8) + 4;
          return next > 100 ? 100 : next;
        }
        return 100;
      });
    }, 45);

    const completeTimer = setTimeout(() => {
      setCompleted(true);
    }, 1800);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
      clearTimeout(hideTimer);
    };
  }, []);


  if (hidden) return null;

  const rows = [
    {id: 1, cols: [1, 2, 3, 4, 5]},
    {id: 2, cols: [1, 2, 3, 4, 5, 6], offset: true},
    {id: 3, cols: [1, 2, 3, 4, 5]},
    {id: 4, cols: [1, 2, 3, 4, 5, 6], offset: true},
    {id: 5, cols: [1, 2, 3, 4, 5]},
  ];

  const handleSkip = () => {
    setCompleted(true);
    setTimeout(() => setHidden(true), 600);
  };

  return (
    <div
      role="status"
      aria-label="Loading Karimnagar Red Bricks"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#181614] text-[#FAF8F5] p-6 sm:p-10 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        completed ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between border-b border-neutral-800/80 pb-4">
        <span className="font-display text-sm font-bold tracking-widest text-neutral-300 uppercase">
          VS Bricks Supply
        </span>
        <button
          onClick={handleSkip}
          className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer px-3 py-1 rounded border border-neutral-800 hover:border-neutral-600 tracking-wider font-mono uppercase"
        >
          Skip Intro
        </button>
      </div>

      {/* Center Brick Wall Building Animation */}
      <div className="w-full max-w-md flex flex-col items-center my-auto">
        <div className="w-full bg-[#12100E] p-4 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden relative">
          {/* Subtle mortar grid backdrop */}
          <div className="flex flex-col gap-1.5 w-full">
            {rows.map((row, rowIndex) => {
              const isBuilt = rowIndex < activeRow;
              return (
                <div
                  key={row.id}
                  className={`flex gap-1.5 w-full transition-all duration-500 ${
                    row.offset ? '-ml-4' : ''
                  }`}
                >
                  {row.cols.map((col) => (
                    <div
                      key={col}
                      className={`h-7 flex-1 rounded-[2px] transition-all duration-400 ${
                        isBuilt
                          ? 'bg-[#B83824] opacity-100 scale-100 shadow-sm border border-[#982B1B]'
                          : 'bg-[#2A2622] opacity-25 scale-95'
                      }`}
                      style={{
                        transitionDelay: isBuilt ? `${col * 40}ms` : '0ms',
                      }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Display */}
        <div className="w-full mt-6 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B83824] animate-pulse" />
            <span className="tracking-wider uppercase font-medium">
              Laying foundation · Just ₹9 Only
            </span>
          </div>
          <span className="font-mono text-sm tabular-nums text-neutral-200">
            {progress}%
          </span>
        </div>
      </div>

      {/* Footer hint */}
      <div className="w-full max-w-5xl flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-800/80 pt-4">
        <span>Supply in All Over Telangana</span>
        <span className="font-mono">9606948371</span>
      </div>
    </div>
  );
}
