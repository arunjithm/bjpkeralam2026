"use client";

import { Search, MapPin } from "lucide-react";

const DATA = [
  {
     id: 1,
     title: "The Margin",
     value: "74,686",
     type: "Lok Sabha 2024",
     sub: "Votes Ahead",
     desc: "Suresh Gopi secured a mandate that transcended traditional party lines, defeating the nearest rival by over 74k votes."
  },
  {
     id: 2,
     title: "Segment Split",
     value: "6/7",
     type: "Assembly Segments",
     sub: "Thrissur LS",
     desc: "NDA led in six of seven assembly segments. Guruvayur stayed with the UDF — the only segment that did."
  },
  {
     id: 3,
     title: "Statewide Lift",
     value: "11",
     type: "Assembly Segments",
     sub: "Led Statewide",
     desc: "In 2024, NDA led in 11 of Keralam's 140 assembly segments — up from just one in 2019. The infrastructure predated the candidate."
  }
];

const SEGMENTS = [
  { name: "Thrissur Town", led: true },
  { name: "Ollur", led: true },
  { name: "Manalur", led: true },
  { name: "Nattika", led: true },
  { name: "Irinjalakkuda", led: true },
  { name: "Puthukkad", led: true },
  { name: "Guruvayur", led: false },
];

export default function ThrissurDeepDive() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bjp-saffron/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
             <div className="space-y-8">
               {DATA.map((item) => (
                  <div key={item.id} className="glass-card p-10 group hover:border-bjp-saffron/40 transition-all duration-500 shadow-2xl">
                    <div className="flex flex-col sm:flex-row items-start gap-10">
                      <div className="text-4xl md:text-6xl lg:text-7xl font-mono font-black text-ink-950 group-hover:text-bjp-saffron transition-colors shrink-0 tracking-tighter">
                        {item.value}
                      </div>
                      <div className="flex-1">
                        <div className="text-ink-950 font-heading font-black text-2xl mb-2 uppercase tracking-tight">{item.title}</div>
                        <div className="flex items-center gap-2 mb-6">
                           <span className="text-bjp-saffron font-black text-[10px] uppercase tracking-widest">{item.type}</span>
                           <span className="text-ink-400 text-[10px]">•</span>
                           <span className="text-ink-500 font-bold text-[10px] uppercase tracking-widest">{item.sub}</span>
                        </div>
                        <p className="text-ink-700 leading-relaxed font-sans font-medium text-lg">
                          {item.desc}
                        </p>
                      </div>
                   </div>
                  </div>
               ))}
             </div>
          </div>

          {/* Context Column (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-10">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.4em]">
                <Search className="w-3.5 h-3.5 text-bjp-saffron" />
                Case Study: Thrissur
             </div>
             
             <h2 className="statement-header leading-[1.05]">
                Anatomy of a <br />
                <span className="saffron-header">Breakthrough.</span>
             </h2>

             <div className="space-y-8 text-xl text-ink-700 font-sans font-medium leading-relaxed">
                <p>
                  April 26, 2024. Thrissur votes. Since 1957, the constituency had never returned a BJP MP. The establishment expected that to hold. 
                </p>
                <blockquote className="font-quote italic text-3xl text-ink-950 border-l-8 border-bjp-saffron pl-8">
                  &ldquo;The 74,686-vote margin wasn&apos;t just celebrity votes. It was trust votes.&rdquo;
                </blockquote>
                <p>
                  Suresh Gopi&apos;s victory was anchored by years of grassroots networks built long before the campaign. 
                  The booth infrastructure existed before the candidate arrived.
                </p>
             </div>

             <div className="pt-8">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-ink-400 mb-6">
                 <MapPin className="w-4 h-4 text-bjp-saffron" />
                 Segment-wise Performance
               </div>
               <div className="flex flex-wrap gap-3">
                  {SEGMENTS.map((seg) => (
                    <span
                      key={seg.name}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-colors shadow-sm ${
                        seg.led 
                        ? "bg-bjp-saffron text-white border-bjp-saffron shadow-lg shadow-bjp-saffron/20" 
                        : "bg-bjp-saffronsoft/30 border-bjp-saffron/10 text-ink-400"
                      }`}
                    >
                      {seg.name} {seg.led ? "LED" : "(UDF)"}
                    </span>
                  ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
