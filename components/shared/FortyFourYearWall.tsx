"use client";

import { History, Landmark, CheckCircle2, Flag, Zap, TrendingUp, Award, BarChart2 } from "lucide-react";

const WALL = [
  { year: "1980", tag: "BJP", note: "BJP founded. First Keralam LS contest.", icon: <Flag className="w-4 h-4" /> },
  { year: "1984", tag: "BJP", note: "Zero seats. Minimal presence in the state.", icon: <Zap className="w-4 h-4" /> },
  { year: "1991", tag: "BJP", note: "First noticeable uptick in urban pockets.", icon: <TrendingUp className="w-4 h-4" /> },
  { year: "1999", tag: "NDA", note: "NDA share remains in single digits.", icon: <Award className="w-4 h-4" /> },
  { year: "2014", tag: "NDA", note: "NDA crosses 10% for the first time.", highlight: true, icon: <CheckCircle2 className="w-4 h-4" /> },
  { year: "2019", tag: "NDA", note: "Statewide share surges to 15.64%.", highlight: true, icon: <BarChart2 className="w-4 h-4" /> },
  { year: "2024", tag: "NDA", note: "The breakthrough. First MP from Thrissur.", highlight: true, icon: <Landmark className="w-4 h-4" /> },
];

const TAG_COLORS: Record<string, string> = {
  BJP: "bg-bjp-saffron/10 text-bjp-saffron",
  NDA: "bg-bjp-saffron text-white",
};

export default function FortyFourYearWall() {
  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <History className="w-3 h-3 text-bjp-saffron" />
            The Long Arc
          </div>
          <h2 className="statement-header text-3xl md:text-5xl lg:text-6xl leading-tight">
            Cracking the <span className="saffron-header">Wall.</span>
          </h2>
          <p className="max-w-2xl text-xl text-ink-700 font-medium leading-relaxed">
            The forty-four year journey from a political footnote to a decisive third pole.
          </p>
        </div>

        {/* Vertical Stack Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line connector */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-neutral-100 z-0" />
          
          {WALL.map((w, i) => (
            <div
              key={w.year}
              className={`relative flex items-center transition-all duration-500 group ${
                w.highlight ? "z-10" : "opacity-90"
              }`}
            >
              {/* Milestone Icon Circle */}
              <div className="relative z-10 shrink-0">
                <div className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 shadow-xl border-4 border-white ${
                  w.highlight 
                  ? "bg-bjp-saffron text-white scale-110" 
                  : "bg-white text-neutral-400 border-neutral-100 group-hover:border-bjp-saffron/30"
                }`}>
                  <div className="mb-0.5">{w.icon}</div>
                  <span className="font-mono font-black text-[10px] tracking-tighter">{w.year}</span>
                </div>
              </div>

              {/* Flattened Horizontal Card - Minimal Height */}
              <div className={`ml-8 glass-card flex-1 p-4 md:p-6 border-neutral-200 transition-all duration-500 flex flex-row items-center gap-6 ${
                w.highlight 
                ? "border-bjp-saffron/40 shadow-2xl bg-white ring-1 ring-bjp-saffron/10 scale-[1.02]" 
                : "bg-neutral-50/50 group-hover:bg-white"
              }`}>
                {/* Fixed-width year & tag column */}
                <div className="flex flex-col gap-1 shrink-0 w-20 md:w-24">
                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md w-max ${TAG_COLORS[w.tag]}`}>
                    {w.tag}
                  </span>
                  <span className="font-mono font-black text-2xl text-neutral-900 group-hover:text-bjp-saffron transition-colors leading-none">
                    {w.year}
                  </span>
                </div>
                
                {/* Note - Flexible text */}
                <div className="flex-1 border-l border-neutral-200 pl-6">
                  <p className="text-neutral-800 font-bold leading-tight text-sm md:text-lg">
                    {w.note}
                  </p>
                </div>
                
                {/* Status Indicator */}
                {w.highlight && (
                  <div className="hidden sm:flex shrink-0 items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" />
                    Historic
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Insight Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl md:text-4xl font-heading font-black text-neutral-900 tracking-tight leading-tight">
              The Wall Was Not Just Political — <br />
              <span className="text-bjp-saffron">It Was Mathematical.</span>
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed font-sans font-medium">
              In 2014, the NDA crossed 10% for the first time. In a multi-polar electorate, 10% is noise. 
              But <span className="font-black text-neutral-900 underline decoration-bjp-saffron decoration-4 underline-offset-8">19.21% is a breakthrough</span>. 
              2024 proved the depth of support is now irreversible.
            </p>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {[
              { v: "10.82%", l: "2014 NDA Share", h: "h-6" },
              { v: "15.64%", l: "2019 NDA Share", h: "h-10" },
              { v: "19.21%", l: "2024 NDA Share", h: "h-14", active: true },
            ].map((s) => (
              <div key={s.l} className={`glass-card p-6 flex items-center justify-between group hover:border-bjp-saffron transition-all ${s.active ? 'border-bjp-saffron shadow-lg' : 'border-neutral-100'}`}>
                <div>
                  <div className={`font-mono font-black text-3xl ${s.active ? "text-bjp-saffron" : "text-neutral-900"}`}>{s.v}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mt-1">{s.l}</div>
                </div>
                <div className={`w-3 rounded-full ${s.active ? "bg-bjp-saffron animate-pulse" : "bg-neutral-100"} ${s.h}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
