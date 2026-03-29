"use client";

const DATA = [
  {
     id: 1,
     title: "The Margin",
     value: "74686",
     type: "Lok Sabha 2024",
     sub: "Votes Ahead",
     desc: "Beyond just winning, Suresh Gopi secured a mandate that transcended traditional party lines, defeating the nearest rival by over 74k votes."
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

  // Simple intersection observer or scroll tracking could go here for "scrollytelling"
  // For now, focusing on the high-end visuals

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-saffron-glass shadow-[0_0_80px_rgba(255,153,51,0.25)] border-y border-bjp-saffron/30 my-16">
      
      {/* Background Cinematic Shadow */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#1a0800] to-transparent z-10" />

      <div className="relative max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Storytelling Column */}
          <div className="flex-1 w-full order-2 lg:order-1">
             <div className="space-y-6">
               {DATA.map((item) => (
                  <div 
                    key={item.id}
                    className="p-8 rounded-3xl border border-bjp-saffron/40 bg-saffron-glass hover:shadow-[0_0_60px_rgba(255,153,51,0.5)] transition-all duration-500 group shadow-2xl overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="text-4xl md:text-5xl font-mono font-black text-gold transition-transform group-hover:scale-110 duration-500 shrink-0">
                        {item.value}
                      </div>
                      <div className="flex-1 min-w-0">
                      <div className="text-white font-black text-xl mb-1 uppercase tracking-tight">{item.title}</div>
                      <div className="flex items-center gap-2 mb-3">
                         <span className="text-bjp-saffron font-bold text-[10px] uppercase tracking-widest opacity-90">{item.type}</span>
                         <span className="text-white/20 text-[10px]">•</span>
                         <span className="text-white/40 font-bold text-[10px] uppercase tracking-widest">{item.sub}</span>
                      </div>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.5)" }}>
                          {item.desc}
                        </p>
                      </div>
                   </div>
                  </div>
               ))}
             </div>
          </div>

          {/* Context Column */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
             <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full bg-bjp-saffron/10 border border-bjp-saffron/20">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-bjp-saffron">Extreme Deep Dive</span>
             </div>
             <h2 className="font-heading font-black text-5xl md:text-7xl text-white mb-8 leading-[1.1]">
                Anatomy of a <span className="text-gold" style={{ textShadow: "0 0 30px rgba(255,153,51,0.4)" }}>Breakthrough.</span>
             </h2>
             <div className="space-y-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: "rgba(255,220,160,0.7)" }}>
                <p>
                  April 26, 2024. Thrissur votes. Since 1957, the constituency had never returned a BJP MP. The establishment
                  expected that to hold.
                </p>
                <div className="h-px w-24 bg-bjp-saffron/40 mx-auto lg:mx-0 my-8" />
                <p className="text-base">
                  Suresh Gopi, 65, a Rajya Sabha MP and actor, entered as a celebrity gamble. What many missed: years of
                  temple festivals, Pooram nights, and grassroots networks built long before the campaign. The
                  74686-vote margin wasn&apos;t celebrity votes. It was trust votes.
                </p>
                <p className="text-base">
                  The win wasn&apos;t just one candidate. The NDA led 11 assembly segments statewide in 2024 versus one in 2019.
                  The booth infrastructure existed before the candidate arrived.
                </p>
             </div>

             <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
                {SEGMENTS.map((seg) => (
                  <span
                    key={seg.name}
                    className="px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      borderColor: seg.led ? "rgba(255,153,51,0.35)" : "rgba(255,255,255,0.15)",
                      color: seg.led ? "rgba(255,200,120,0.7)" : "rgba(255,255,255,0.35)",
                      background: seg.led ? "rgba(255,153,51,0.08)" : "transparent",
                    }}
                  >
                    {seg.name} {seg.led ? "LED" : "(UDF LED)"}
                  </span>
                ))}
             </div>
          </div>

        </div>

      </div>

    </section>
  );
}
