"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";

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
    sub: "LS 2024: Both fronts lose massive ground. NDA hits 19.21% statewide."
  }
];

export default function VoteShiftFlow() {
  const [activeIdx, setActiveIdx] = useState(3);
  const current = DATA[activeIdx];

  const maxHeight = 300;
  const getH = (v: number) => (v / 50) * maxHeight;

  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.2em]">
            <MoveRight className="w-3.5 h-3.5 text-bjp-saffron" />
            The Great Shift
          </div>
          <h2 className="statement-header">
            Where do the <span className="saffron-header">votes</span> <br />come from?
          </h2>
          <p className="max-w-2xl text-xl text-ink-700 font-sans font-medium">
            A visualization of the erosion of the LDF and UDF bipolar monopoly. 
            The saffron path is drawing from the heart of both fronts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Controls (3 cols) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4">
            {DATA.map((d, i) => (
              <button
                key={d.year}
                onClick={() => setActiveIdx(i)}
                className={`flex-1 px-8 py-6 rounded-2xl transition-all duration-300 text-left border shadow-sm ${
                  activeIdx === i 
                    ? "bg-white border-bjp-saffron shadow-xl" 
                    : "bg-bjp-saffronsoft/30 border-bjp-saffron/10 text-ink-400 hover:border-bjp-saffron/10"
                }`}
              >
                <div className={`font-mono font-black text-3xl ${activeIdx === i ? 'text-bjp-saffron' : 'text-ink-400'}`}>{d.year}</div>
                <div className="text-[10px] font-black uppercase tracking-widest mt-2">{d.label}</div>
              </button>
            ))}
          </div>

          {/* Visualization (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative h-[450px] w-full flex items-end justify-around gap-4 md:gap-12 p-8 glass-card border-bjp-saffron/10">
              
              {/* LDF */}
              <div className="flex flex-col items-center w-24">
                <div className="mb-4 font-mono font-black text-3xl text-red-600 tracking-tighter">{current.ldf}%</div>
                <div className="w-full rounded-t-2xl transition-all duration-700 bg-red-600/10 border-x border-t border-red-600/20" 
                     style={{ height: getH(current.ldf) }}>
                </div>
                <div className="mt-6 font-heading font-black text-xs uppercase tracking-widest text-red-600 opacity-60">LDF</div>
              </div>

              {/* UDF */}
              <div className="flex flex-col items-center w-24">
                <div className="mb-4 font-mono font-black text-3xl text-blue-600 tracking-tighter">{current.udf}%</div>
                <div className="w-full rounded-t-2xl transition-all duration-700 bg-blue-600/10 border-x border-t border-blue-600/20" 
                     style={{ height: getH(current.udf) }}>
                </div>
                <div className="mt-6 font-heading font-black text-xs uppercase tracking-widest text-blue-600 opacity-60">UDF</div>
              </div>

              {/* NDA */}
              <div className="flex flex-col items-center w-28">
                <div className="mb-4 font-mono font-black text-3xl md:text-5xl text-bjp-saffron tracking-tighter">{current.nda}%</div>
                <div className="w-full rounded-t-2xl transition-all duration-700 bg-bjp-saffron shadow-2xl shadow-bjp-saffron/30 relative" 
                     style={{ height: getH(current.nda) }}>
                   <div className="absolute inset-x-0 top-0 h-1.5 bg-white/40" />
                </div>
                <div className="mt-6 font-heading font-black text-xs uppercase tracking-widest text-bjp-saffron">NDA</div>
              </div>

            </div>
          </div>

          {/* Insights (3 cols) */}
          <div className="lg:col-span-3">
             <div className="glass-card p-10 border-bjp-saffron/20 shadow-2xl">
                <div className="text-bjp-saffron font-black text-[10px] uppercase tracking-[0.3em] mb-6">The Analysis</div>
                <h3 className="font-heading font-black text-2xl text-ink-950 mb-4 tracking-tight leading-tight">{current.label}</h3>
                <p className="text-lg text-ink-700 leading-relaxed font-sans font-medium mb-8">
                   {current.sub}
                </p>
                <div className="pt-8 border-t border-bjp-saffron/10">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-ink-400">Frontal Share</span>
                      <span className="font-mono text-lg font-black text-ink-950">{(current.ldf + current.udf).toFixed(1)}%</span>
                   </div>
                   <div className="w-full h-3 bg-bjp-saffronsoft/30 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-ink-400 transition-all duration-700" style={{ width: `${current.ldf + current.udf}%` }} />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
