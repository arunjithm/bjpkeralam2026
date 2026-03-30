"use client";

import { Quote, MessageSquareWarning, ArrowRightCircle } from "lucide-react";

const CLAIMS = [
  {
    id: 1,
    who: "Pinarayi Vijayan",
    role: "Chief Minister · LDF",
    party: "CPI(M)",
    partyColor: "#E63946",
    when: "April 2024",
    quote: "We will close BJP's account in Keralam.",
    reality: "One seat. A 74,686-vote margin. NDA led 6 of 7 Thrissur segments. The account opened — and stayed open.",
    realityStats: [{ v: "1", l: "LS Seat" }, { v: "74K+", l: "Margin" }, { v: "6/7", l: "Segments" }],
    emoji: "🏛️",
  },
  {
    id: 2,
    who: "Shashi Tharoor",
    role: "Member of Parliament · UDF",
    party: "INC",
    partyColor: "#1A6FC4",
    when: "Post-2019",
    quote: "The BJP is a zero-seat party in Keralam. The real contest is between UDF and LDF.",
    reality: "BJP won TVM Corporation in 2025, securing 50 out of 101 wards. First time BJP took control of a major capital city council.",
    realityStats: [{ v: "50", l: "Wards" }, { v: "1st", l: "Mayor" }, { v: "2025", l: "Year" }],
    emoji: "📚",
  },
  {
    id: 3,
    who: "CPI(M) State Committee",
    role: "State Secretariat · LDF",
    party: "CPI(M)",
    partyColor: "#E63946",
    when: "Post-2021 Assembly",
    quote: "BJP's Sabarimala gambit has backfired. They are irrelevant to Keralam's political future.",
    reality: "The base held at 11.3% in 2021. In 2024, NDA surged to 19.21% statewide, proving long-term grassroots depth.",
    realityStats: [{ v: "11.3%", l: "Base" }, { v: "19.21%", l: "Surge" }, { v: "2024", l: "Year" }],
    emoji: "📉",
  },
];

export default function OppositionClaims() {
  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.2em]">
            <MessageSquareWarning className="w-3.5 h-3.5 text-bjp-saffron" />
            Predictions vs Reality
          </div>
          <h2 className="statement-header">
            &ldquo;They Said It Would <br />
            <span className="saffron-header">Never Happen.</span>&rdquo;
          </h2>
          <p className="max-w-2xl text-xl text-ink-700 font-sans font-medium">
            For decades, the political establishment declared the BJP a &ldquo;zero-seat party.&rdquo; 
            The voters had a different answer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {CLAIMS.map((c) => (
            <div key={c.id} className="glass-card overflow-hidden border-bjp-saffron/10 group hover:border-bjp-saffron/30 transition-all duration-500 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left: The Prediction */}
                <div className="lg:col-span-5 p-8 bg-bjp-saffronsoft/30 border-r border-bjp-saffron/10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-xl border border-bjp-saffron/10 transition-transform group-hover:scale-110">
                      {c.emoji}
                    </div>
                    <div>
                      <div className="font-heading font-black text-ink-950 text-base">{c.who}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-ink-400 mt-0.5">{c.role}</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-6 w-10 h-10 text-ink-200 opacity-20" />
                    <p className="text-xl md:text-2xl font-quote italic text-ink-900 leading-relaxed mb-6">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-ink-500">
                    <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: c.partyColor }} />
                    {c.party} · {c.when}
                  </div>
                </div>

                {/* Right: The Reality */}
                <div className="lg:col-span-7 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-3 py-1 rounded bg-bjp-saffron text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-bjp-saffron/20">
                      The Reality Check
                    </div>
                    <ArrowRightCircle className="w-5 h-5 text-bjp-saffron animate-pulse" />
                  </div>
                  
                  <p className="text-xl font-heading font-black text-ink-950 mb-8 leading-snug">
                    {c.reality}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {c.realityStats.map((s) => (
                      <div key={s.l} className="bg-bjp-saffronsoft/30 p-4 text-center border border-bjp-saffron/10 rounded-xl hover:border-bjp-saffron/30 transition-all">
                        <div className="font-mono font-black text-2xl text-bjp-saffron">{s.v}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-ink-400 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-end">
          <div className="max-w-3xl text-right space-y-6">
            <blockquote className="text-2xl md:text-4xl font-quote italic text-ink-400 leading-relaxed">
              &ldquo;The only response to a prediction is a result.&rdquo;
            </blockquote>
            <div className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-bjp-saffron">
              <div className="h-px w-12 bg-bjp-saffron/30" />
              BJP Keralam Victory Statement · 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
