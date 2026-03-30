"use client";

import { Target, History } from "lucide-react";

const MISSES = [
  {
    year: "2016",
    election: "Assembly · Manjeshwar",
    candidate: "K. Surendran",
    margin: "89",
    tier: "Assembly 2016",
    headline: "89 votes. The smallest margin.",
    sub: "89 votes across 208,165 electors. Just 0.04% of the constituency.",
    votes: "56,781",
    opponentVotes: "56,870",
    opponent: "P.B. Abdul Razak (IUML)",
  },
  {
    year: "2014",
    election: "Lok Sabha · TVM",
    candidate: "O. Rajagopal",
    margin: "15,470",
    tier: "Lok Sabha 2014",
    headline: "The capital near-miss.",
    sub: "Rajagopal led after every round of counting, flipping only in the final rounds.",
    votes: "282,336",
    opponentVotes: "297,806",
    opponent: "Shashi Tharoor (INC)",
  },
  {
    year: "2021",
    election: "Assembly · Palakkad",
    candidate: "E. Sreedharan",
    margin: "3,859",
    tier: "Assembly 2021",
    headline: "Metro Man. 3,859 short.",
    sub: "The legendary engineer nearly flipped a safe Congress seat at age 88.",
    votes: "50,220",
    opponentVotes: "54,079",
    opponent: "Shafi Parambil (INC)",
  },
  {
    year: "2024",
    election: "Lok Sabha · TVM",
    candidate: "Rajeev Chandrasekhar",
    margin: "16,077",
    tier: "Lok Sabha 2024",
    headline: "The capital repeat.",
    sub: "In a repeat of 2014, the BJP led the capital for hours, falling thin at the end.",
    votes: "342,078",
    opponentVotes: "358,155",
    opponent: "Shashi Tharoor (INC)",
  },
];

export default function NearMissGallery() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink-950 shadow-lg text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <Target className="w-3 h-3 text-bjp-saffron" />
            Near Misses
          </div>
          <h2 className="statement-header text-3xl md:text-5xl lg:text-6xl">
            History Held by <span className="saffron-header">a Thread.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MISSES.map((m) => (
            <div key={`${m.year}-${m.election}`} className="glass-card group hover:border-bjp-saffron/40 transition-all shadow-lg overflow-hidden">
              <div className="p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-2 py-0.5 rounded bg-ink-950 text-white text-[9px] font-black uppercase tracking-widest">
                    {m.tier}
                  </div>
                  <div className="flex items-center gap-2 text-ink-400 font-mono text-[9px] font-bold">
                    <History className="w-3 h-3 text-bjp-saffron" />
                    {m.election}
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-mono font-black text-4xl lg:text-5xl text-ink-950 group-hover:text-bjp-saffron transition-colors tracking-tighter leading-none">
                    {m.margin}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-ink-400">Margin</span>
                </div>

                <h3 className="text-base font-heading font-black text-ink-950 mb-1.5 leading-tight">{m.headline}</h3>
                <p className="text-ink-700 font-sans font-medium leading-relaxed text-xs mb-6">{m.sub}</p>

                <div className="bg-bjp-saffronsoft/20 rounded-xl p-4 border border-bjp-saffron/10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-left">
                      <div className="text-[8px] font-black uppercase tracking-widest text-bjp-saffron mb-0.5">NDA</div>
                      <div className="font-mono font-black text-base text-ink-950 leading-none">{m.votes}</div>
                    </div>
                    <div className="h-6 w-px bg-bjp-saffron/10" />
                    <div className="text-right">
                      <div className="text-[8px] font-black uppercase tracking-widest text-ink-500 mb-0.5">Winner</div>
                      <div className="font-mono font-black text-base text-ink-950 leading-none">{m.opponentVotes}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
