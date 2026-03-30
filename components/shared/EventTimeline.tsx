"use client";

import { Calendar, Award, Rocket, Landmark, TrendingUp, Zap, History, MapPin } from "lucide-react";

const EVENTS = [
  {
    year: "2010",
    eyebrow: "The Urban Foothold",
    title: "The Six Wards of TVM.",
    body: "While national media focused on the LDF-UDF pendulum, a quiet shift began. BJP secured six ward seats in the Thiruvananthapuram Corporation — the first meaningful urban anchor.",
    stats: [{ v: "6", l: "TVM Wards" }, { v: "1st", l: "Urban Anchor" }],
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    year: "2011",
    eyebrow: "Assembly Baseline",
    title: "The 6% Benchmark.",
    body: "NDA polled 6.06% statewide. While zero seats were won, the results revealed growing clusters of influence where candidates crossed the 10% threshold for the first time.",
    stats: [{ v: "6.06%", l: "State Share" }, { v: "10%+", l: "In Pockets" }],
    icon: <History className="w-5 h-5" />,
  },
  {
    year: "2014",
    eyebrow: "Lok Sabha Wave",
    title: "The 10% Barrier Shattered.",
    body: "Riding the national wave, NDA's statewide vote share jumped to 10.82%. The constituency-level heatmap revealed sharp gains across all 20 seats.",
    stats: [{ v: "10.82%", l: "State Share" }, { v: "20/20", l: "Seats Grown" }],
    icon: <TrendingUp className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2015",
    eyebrow: "Local Body Surge",
    title: "The Grassroots Explosion.",
    body: "In five years, BJP surged from 6 to 34 wards in TVM Corporation — a 467% increase. Captured Palakkad Municipality, the first-ever municipal win in Keralam.",
    stats: [{ v: "34", l: "TVM Wards" }, { v: "1st", l: "Municipality" }],
    icon: <Zap className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2016",
    eyebrow: "Historic Breakthrough",
    title: "The Account Opens.",
    body: "O. Rajagopal wins Nemom, becoming BJP's first-ever MLA in the Keralam Assembly. The 'zero-seat' narrative was permanently buried.",
    stats: [{ v: "1", l: "Assembly Seat" }, { v: "15%", l: "Capital Share" }],
    icon: <Award className="w-5 h-5" />,
    highlight: true,
    mega: true,
  },
  {
    year: "2019",
    eyebrow: "Ideological Surge",
    title: "Sabarimala & The 15% Mark.",
    body: "Amid intense polarization, NDA vote share rocketed to 15.64%. Pathanamthitta and TVM saw massive surges, proving NDA as a formidable third pole.",
    stats: [{ v: "15.64%", l: "State Share" }, { v: "31%", l: "TVM Share" }],
    icon: <TrendingUp className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2020",
    eyebrow: "Local Body Maturity",
    title: "Roots Deepen Nationwide.",
    body: "BJP proved it possessed deep grassroots cadre strength, capturing Pandalam Municipality and finishing as the formidable opposition in the Capital.",
    stats: [{ v: "1,597", l: "Ward Wins" }, { v: "2", l: "Municipalities" }],
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    year: "2024",
    eyebrow: "Lok Sabha Coronation",
    title: "THRISSUR: THE WALL FALLS.",
    body: "Suresh Gopi wins Thrissur by 74,686 votes. NDA statewide share hits 19.21%. For the first time, Keralam sends a BJP MP to the Lok Sabha.",
    stats: [{ v: "1", l: "MP Elected" }, { v: "74K+", l: "Win Margin" }],
    icon: <Landmark className="w-5 h-5" />,
    highlight: true,
    mega: true,
  },
  {
    year: "2025",
    eyebrow: "Municipal Mastery",
    title: "Trivandrum Bows to the Lotus.",
    body: "NDA wins 50 seats in the Capital Corporation, securing the city council. V.V. Rajesh becomes the first-ever BJP Mayor of a major Keralam city.",
    stats: [{ v: "50/101", l: "Wards Won" }, { v: "1st", l: "BJP Mayor" }],
    icon: <Landmark className="w-5 h-5" />,
    highlight: true,
    mega: true,
  },
  {
    year: "2026",
    eyebrow: "The Next Battle",
    title: "Assembly Live Battleground.",
    body: "The stage is set. With a lead in 11 assembly segments from the 2024 results, the NDA moves into 2026 as a central pole of Keralam politics.",
    stats: [{ v: "11", l: "Led Segments" }, { v: "2026", l: "Target Year" }],
    icon: <Zap className="w-5 h-5" />,
    highlight: true,
  },
];

export default function EventTimeline() {
  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
              <Calendar className="w-3.5 h-3.5 text-bjp-saffron" />
              The Journey Arc
            </div>
            <h2 className="statement-header leading-[1.05]">
              From Zero <br />
              <span className="saffron-header">to One.</span>
            </h2>
            <p className="text-xl text-ink-700 font-sans font-medium leading-relaxed">
              The complete data-driven history of Keralam&apos;s political transformation. 
              Decades of relentless grassroots work distilled into ten decisive milestones.
            </p>
            
            <div className="glass-card p-8 border-bjp-saffron/20 shadow-xl bg-neutral-50/30">
              <div className="text-[10px] font-black uppercase tracking-widest text-bjp-saffron mb-6">Milestone Summary</div>
              <div className="space-y-4">
                {[
                  { l: "First Municipal Win", y: "2015" },
                  { l: "First Assembly Seat", y: "2016" },
                  { l: "First Lok Sabha Seat", y: "2024" },
                  { l: "First Capital Mayor", y: "2025" },
                ].map(m => (
                  <div key={m.l} className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <span className="text-sm font-black text-neutral-900 tracking-tight">{m.l}</span>
                    <span className="font-mono font-black text-lg text-bjp-saffron">{m.y}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Timeline */}
          <div className="lg:col-span-7 space-y-8 relative">
            {/* Vertical line connector */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-bjp-saffron via-neutral-200 to-transparent ml-[-2rem] hidden lg:block" />
            
            {EVENTS.map((ev, i) => (
              <div key={ev.year} className="relative group">
                <div className={`glass-card p-6 md:p-8 group-hover:border-bjp-saffron/40 transition-all duration-500 shadow-xl ${ev.mega ? 'border-bjp-saffron/30 bg-white' : 'border-neutral-100 bg-neutral-50/30'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${ev.mega ? 'bg-bjp-saffron text-white shadow-lg' : 'bg-white text-bjp-saffron border border-neutral-200 shadow-sm'}`}>
                        {ev.icon}
                      </div>
                      <div>
                        <div className="font-mono font-black text-2xl md:text-4xl text-neutral-950 tracking-tighter">{ev.year}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-bjp-saffron mt-0.5">{ev.eyebrow}</div>
                      </div>
                    </div>
                  </div>

                  <h3 className={`font-heading font-black mb-4 leading-tight tracking-tight ${ev.mega ? 'text-2xl md:text-3xl text-neutral-900' : 'text-xl text-neutral-800'}`}>
                    {ev.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed font-sans font-medium text-base mb-8">
                    {ev.body}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {ev.stats.map(s => (
                      <div key={s.l} className="px-4 py-2 rounded-xl bg-white border border-neutral-100 shadow-sm">
                        <div className="font-mono font-black text-xl text-neutral-950 leading-none">{s.v}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
