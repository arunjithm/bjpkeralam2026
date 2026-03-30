"use client";

import { Share2 } from "lucide-react";

const MOMENTS = [
  {
    title: "Manjeshwar 2016",
    stat: "89",
    label: "Votes",
    quote: "A handful of voters could have rewritten history.",
  },
  {
    title: "Thrissur 2024",
    stat: "74,686",
    label: "Margin",
    quote: "First MP with the largest BJP win margin.",
  },
  {
    title: "TVM Corp 2025",
    stat: "50/101",
    label: "Wards",
    quote: "The capital flipped. Ground game became governance.",
  },
];

export default function ShareableMoments() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink-950 shadow-xl text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <Share2 className="w-3 h-3 text-bjp-saffron" />
            Branded Moments
          </div>
          <h2 className="statement-header text-3xl md:text-5xl">
            Built for <span className="saffron-header">Sharing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MOMENTS.map((m) => (
            <div key={m.title} className="glass-card p-6 lg:p-10 group hover:border-bjp-saffron/40 transition-all duration-500 shadow-lg flex flex-col h-full text-left">
              <div className="text-[9px] uppercase tracking-[0.3em] text-bjp-saffron font-black mb-6">{m.title}</div>
              <div className="flex items-baseline gap-2 mb-6">
                <div className="font-mono font-black text-4xl lg:text-5xl text-ink-950 group-hover:text-bjp-saffron transition-colors tracking-tighter">{m.stat}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-ink-400">{m.label}</div>
              </div>
              <p className="text-lg leading-relaxed text-ink-800 font-quote italic flex-1">
                &ldquo;{m.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-bjp-saffron/10 flex items-center justify-between">
                <button className="text-[9px] font-black uppercase tracking-widest text-bjp-saffron hover:text-bjp-saffrondark transition-colors flex items-center gap-2">
                  <Share2 className="w-3 h-3" />
                  Save Image
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
