"use client";

import { History, TrendingUp, ArrowRightCircle } from "lucide-react";

const MILESTONES = [
  { y: "1980", t: "BJP founded. Zero seats in Keralam." },
  { y: "1984", t: "The worst year nationally. Still zero." },
  { y: "2004", t: "10.82% of Keralam's vote. Zero seats." },
  { y: "2016", t: "One MLA. Nemom breakthrough." },
  { y: "2019", t: "15.64%. Still zero seats." },
  { y: "2024", t: "74,686 vote margin. The first MP." },
  { y: "2025", t: "The first Mayor. 50 seats in TVM Corporation." },
];

export default function Manifesto() {
  return (
    <section className="relative py-14 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.03] pointer-events-none watermark-lotus" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
            <TrendingUp className="w-3 h-3 text-bjp-saffron" />
            The Manifesto
          </div>
          <h2 className="statement-header">
            Beyond the <span className="saffron-header">Timeline.</span>
          </h2>
        </div>

        {/* Part 1: The Compression */}
        <div className="space-y-4 mb-32 max-w-3xl mx-auto">
          {MILESTONES.map((m, i) => (
            <div key={m.y} className="flex items-center gap-6 group">
              <div className="font-mono font-black text-2xl text-bjp-saffron shrink-0 w-20 group-hover:scale-110 transition-transform">
                {m.y}
              </div>
              <div className="h-px flex-1 bg-neutral-100" />
              <div className="font-heading font-black text-neutral-900 text-right group-hover:text-bjp-saffron transition-colors">
                {m.t}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: The Reframe */}
        <div className="glass-card p-12 md:p-20 text-center mb-32 border-bjp-saffron/20 shadow-[0_30px_100px_rgba(255,153,51,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-bjp-saffron/5 to-transparent" />
          <div className="relative z-10 space-y-10">
            <div className="w-16 h-1 bg-bjp-saffron mx-auto" />
            <p className="text-2xl md:text-4xl font-quote text-neutral-900 italic leading-relaxed font-medium">
              &ldquo;This is not the story of a political party. This is the story of votes cast — steadily, incrementally, across 44 years — by Keralam voters who believed something the establishment said was impossible. <br/><br/>
              <span className="text-bjp-saffron not-italic font-heading font-black uppercase tracking-tight">They were not wrong. They were early.</span>&rdquo;
            </p>
            <div className="w-16 h-1 bg-bjp-saffron mx-auto" />
          </div>
        </div>

        {/* Part 3: The Forward Line */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="text-3xl md:text-5xl font-heading font-black text-neutral-950 tracking-tight leading-tight">
            In 2026, Keralam holds its <span className="saffron-header">Assembly election.</span>
          </h3>
          <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed">
            In 11 assembly segments across this state, more voters chose NDA than any other party in 2024. 
            The wall is not just cracked. Parts of it are already gone.
          </p>
          
          <div className="pt-12">
            <div className="text-3xl md:text-6xl font-heading font-black text-neutral-950 tracking-tighter animate-pulse">
              What happens next is <br />
              <span className="saffron-header">not written yet.</span>
            </div>
          </div>

          <div className="pt-16">
            <div className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-neutral-400">
              <div className="h-px w-12 bg-neutral-200" />
              Saffron Dawn · 2026
              <div className="h-px w-12 bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
