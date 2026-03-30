"use client";

import { Users, Quote } from "lucide-react";

const PORTRAITS = [
  {
    title: "The Temple Volunteer",
    place: "Pathanamthitta",
    quote: "I didn't switch overnight. I switched when I felt ignored.",
    body: "BJP vote share surged from 17.4% (2014) to 28.95% (2019).",
    tag: "2014→2019 Surge",
  },
  {
    title: "The Professional",
    place: "Ernakulam",
    quote: "I want delivery, not slogans.",
    body: "Steady upward professional-class swing in urban centers.",
    tag: "Urban Shift",
  },
  {
    title: "The Ward Worker",
    place: "TVM",
    quote: "We built booth by booth.",
    body: "Organization flipped the capital council in 2025.",
    tag: "Ground Game",
  },
];

export default function OneVoteAtATime() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bjp-saffronsoft/30 border border-bjp-saffron/10 text-ink-950 text-[10px] font-black uppercase tracking-[0.2em]">
            <Users className="w-3 h-3 text-bjp-saffron" />
            Voter Voices
          </div>
          <h2 className="statement-header text-3xl md:text-5xl">
            One Vote <span className="saffron-header">at a Time.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTRAITS.map((p) => (
            <div key={p.title} className="glass-card p-6 lg:p-8 flex flex-col group hover:border-bjp-saffron/40 transition-all shadow-lg text-left">
              <div className="text-[9px] uppercase tracking-[0.3em] text-bjp-saffron font-black mb-6">{p.place}</div>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-10 h-10 text-bjp-saffron/5" />
                <h3 className="font-quote italic text-xl text-ink-950 leading-relaxed">
                  &ldquo;{p.quote}&rdquo;
                </h3>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="font-heading font-black text-sm text-ink-950 uppercase tracking-wider">{p.title}</div>
                <p className="text-ink-700 leading-relaxed font-sans font-medium text-sm">
                  {p.body}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-bjp-saffron/10 text-[9px] font-black uppercase tracking-[0.3em] text-ink-400">
                {p.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
