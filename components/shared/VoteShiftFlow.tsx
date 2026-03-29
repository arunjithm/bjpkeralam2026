"use client";

import { useState } from "react";

const DATA = [
  {
    year: "2011",
    ldf: 44.9,
    udf: 45.8,
    nda: 6.06,
    label: "Bipolar Dominance",
    sub: "LDF and UDF strictly control 90%+ of the electorate. BJP is a footnote."
  },
  {
    year: "2016",
    ldf: 43.5,
    udf: 38.8,
    nda: 10.5,
    label: "The First Breach",
    sub: "First Assembly seat won. NDA crosses 10% for the first time. The 'third force' emerges."
  },
  {
    year: "2021",
    ldf: 45.4,
    udf: 39.5,
    nda: 11.3,
    label: "Consolidation",
    sub: "The base holds at 11.3% despite seat losses. The duopoly starts planning specifically for BJP."
  },
  {
    year: "2024",
    ldf: 33.4,
    udf: 35.1,
    nda: 19.21,
    label: "The 2024 Collapse",
    sub: "LS 2024: Both fronts lose massive ground. NDA hits 19.21% statewide (BJP 16.68%)."
  }
];

export default function VoteShiftFlow() {
  const [activeIdx, setActiveIdx] = useState(3);
  const current = DATA[activeIdx];

  // Simple percentage based height for visual bars
  const maxHeight = 300;
  const getH = (v: number) => (v / 50) * maxHeight;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-transparent to-[#0a0300]/50">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.3)", background: "rgba(255,153,51,0.08)" }}>
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">The Great Shift</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl mb-4 text-white" style={{ textShadow: "0 0 30px rgba(255,153,51,0.4)" }}>
            Where do the votes come from?
          </h2>
          <p className="max-w-2xl mx-auto text-base text-white/50">
            A visualization of the erosion of the LDF and UDF bipolar monopoly. 
            The <span className="text-gold">saffron path</span> is not just growing—it is drawing from the heart of both fronts.
          </p>
        </div>

        {/* Interactive Visualization Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls - Year selector */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-row lg:flex-col gap-3 justify-center lg:justify-start">
            {DATA.map((d, i) => (
              <button
                key={d.year}
                onClick={() => setActiveIdx(i)}
                className={`px-6 py-4 rounded-xl transition-all duration-300 text-left border ${
                  activeIdx === i 
                    ? "bg-bjp-saffron/10 border-bjp-saffron/40 text-white" 
                    : "bg-surface-800/20 border-white/5 text-white/40 hover:border-white/20"
                }`}
              >
                <div className="font-mono font-black text-xl">{d.year}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-70 hidden md:block">{d.label}</div>
              </button>
            ))}
          </div>

          {/* Centerpiece: The Flow / Bar Visual */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-[450px] w-full flex items-end justify-around gap-4 md:gap-8 pb-12 pt-8">
              
              {/* LDF Bar */}
              <div className="flex flex-col items-center group w-24">
                <div className="mb-4 font-mono font-black text-2xl text-red-500 transition-all group-hover:scale-110">
                  {current.ldf}%
                </div>
                <div 
                  className="w-full rounded-t-xl transition-all duration-700 relative overflow-hidden" 
                  style={{ 
                    height: getH(current.ldf),
                    background: "linear-gradient(to top, #b91c1c, #ef4444)",
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.2)" 
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
                </div>
                <div className="mt-4 font-heading font-black text-sm uppercase tracking-widest text-red-700/80">LDF</div>
              </div>

              {/* UDF Bar */}
              <div className="flex flex-col items-center group w-24">
                <div className="mb-4 font-mono font-black text-2xl text-blue-500 transition-all group-hover:scale-110">
                  {current.udf}%
                </div>
                <div 
                  className="w-full rounded-t-xl transition-all duration-700 relative overflow-hidden" 
                  style={{ 
                    height: getH(current.udf),
                    background: "linear-gradient(to top, #1d4ed8, #3b82f6)",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" 
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
                </div>
                <div className="mt-4 font-heading font-black text-sm uppercase tracking-widest text-blue-800/80">UDF</div>
              </div>

              {/* NDA Bar - The Saffron Rise */}
              <div className="flex flex-col items-center group w-24">
                <div className="mb-4 font-mono font-black text-3xl text-bjp-saffron animate-pulse" 
                   style={{ textShadow: "0 0 20px rgba(255,153,51,0.5)" }}>
                  {current.nda}%
                </div>
                <div 
                  className="w-full rounded-t-xl transition-all duration-700 relative" 
                  style={{ 
                    height: getH(current.nda),
                    background: "linear-gradient(to top, #ea580c, #FF9933, #FFD166)",
                    boxShadow: "0 0 60px rgba(255, 153, 51, 0.6), 0 0 20px rgba(255, 209, 102, 0.4)",
                    border: "1px solid rgba(255, 209, 102, 0.5)",
                    borderBottom: "none"
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.2),transparent)]" />
                </div>
                <div className="mt-4 font-heading font-black text-sm uppercase tracking-widest text-bjp-saffron">NDA</div>
              </div>

              {/* Flow Arrows (Conceptual) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" overflow="visible">
                 <defs>
                   <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                     <stop offset="100%" stopColor="#FF9933" stopOpacity="0.2" />
                   </linearGradient>
                   <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                     <stop offset="100%" stopColor="#FF9933" stopOpacity="0.2" />
                   </linearGradient>
                 </defs>
              </svg>
            </div>
          </div>

          {/* Right side: Insights */}
          <div className="lg:col-span-3 order-3">
             <div className="p-6 rounded-2xl bg-saffron-glass border border-bjp-saffron/30 shadow-2xl">
                <div className="text-gold font-black text-xs uppercase tracking-[0.2em] mb-4">The Commentary</div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{current.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.7)" }}>
                   {current.sub}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-xs text-white/40">Duopoly Share</span>
                      <span className="font-mono text-sm text-white/80">{(current.ldf + current.udf).toFixed(1)}%</span>
                   </div>
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-white/20" style={{ width: `${current.ldf + current.udf}%` }} />
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* District-level bleeding */}
        <div className="mt-14 rounded-2xl p-6 bg-saffron-glass border border-bjp-saffron/25 shadow-xl">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-bjp-saffron mb-4">District Bleeding</div>
          <h3 className="font-heading font-bold text-xl text-white mb-3">The Erosion Isn&apos;t Just Urban</h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,200,120,0.7)" }}>
            The duopoly leaks across the map: north (Kasaragod), central belts (Thrissur, Palakkad), and the south
            (Thiruvananthapuram, Pathanamthitta). The shift is geographic, not just demographic.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Kasaragod",
              "Palakkad",
              "Thrissur",
              "Thiruvananthapuram",
              "Pathanamthitta",
              "Kozhikode",
            ].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest"
                style={{ border: "1px solid rgba(255,153,51,0.25)", color: "rgba(255,200,120,0.7)", background: "rgba(255,153,51,0.08)" }}>
                {d}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-white/35 mt-4">
            District-level shares shown in the tiles below; some figures are withheld where ECI verification is pending.
          </p>
        </div>

      </div>
    </section>
  );
}
