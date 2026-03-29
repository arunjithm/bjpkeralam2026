"use client";

const EVENTS = [
  {
    year: "2010",
    eyebrow: "The First Spark",
    title: "Six Wards. The Ember Is Lit.",
    body: "In the Thiruvananthapuram Corporation local body elections, BJP wins 6 wards — its first meaningful urban foothold. Most of Keralam laughs. The BJP cadre begins the quiet work of building ward-level networks for the first time in the state's history.",
    stats: [{ v: "6", l: "TVM Corp wards" }, { v: "1st", l: "Urban presence" }],
    tag: "Local Body",
    accent: "rgba(255,153,51,0.4)",
    tagCol: "#FF9933",
    glow: "rgba(255,120,0,0.06)",
  },
  {
    year: "2014",
    eyebrow: "Lok Sabha",
    title: "Double digits for the first time.",
    body: "Riding the national Modi wave, NDA crosses 10% statewide for the first time (10.82%). K. Surendran polls 17.9% in Kasaragod — unthinkable a decade earlier. The north begins converting organisation into votes.",
    stats: [{ v: "10.82%", l: "State-wide vote share" }, { v: "17.9%", l: "Kasaragod peak" }],
    tag: "Lok Sabha",
    accent: "rgba(255,153,51,0.5)",
    tagCol: "#FF9933",
    glow: "rgba(255,130,0,0.07)",
  },
  {
    year: "2015",
    eyebrow: "Local Bodies",
    title: "34 Wards. A 467% Explosion.",
    body: "From 6 to 34 wards in TVM Corporation in just one election cycle. BJP wins Palakkad Municipality outright — its first municipal administration anywhere in Keralam. The grassroots machinery is no longer theoretical.",
    stats: [{ v: "34", l: "TVM Corp wards (+467%)" }, { v: "1st", l: "Municipality won" }],
    tag: "Local Body",
    accent: "rgba(255,180,51,0.55)",
    tagCol: "#FFD166",
    glow: "rgba(255,160,0,0.08)",
    highlight: true,
  },
  {
    year: "2016",
    eyebrow: "Assembly Election",
    title: "The Wall Cracks. O. Rajagopal Wins Nemom.",
    body: "After 59 years of zero Assembly seats, BJP breaks the curse. O. Rajagopal wins Nemom by 1604 votes. NDA's state-wide assembly vote share hits 10.5% — a number the national media cannot ignore. Keralam's political duopoly cracks for the first time.",
    stats: [{ v: "1", l: "Assembly seat won" }, { v: "10.5%", l: "State-wide share" }, { v: "1604", l: "Winning margin" }],
    tag: "Assembly",
    accent: "rgba(255,153,51,0.6)",
    tagCol: "#FF9933",
    glow: "rgba(255,100,0,0.1)",
    highlight: true,
  },
  {
    year: "2019",
    eyebrow: "Lok Sabha — Sabarimala Wave",
    title: "15.64%. The Sabarimala Surge.",
    body: "The temple entry agitation becomes a mobilisation storm. NDA's vote share jumps to 15.64% statewide. In Pathanamthitta, BJP's vote share surges from 17.4% in 2014 to 28.95% in 2019 — one of the sharpest constituency jumps that year.",
    stats: [{ v: "15.64%", l: "State-wide share" }, { v: "28.95%", l: "Pathanamthitta" }, { v: "17.4→28.95", l: "2014→2019 jump" }],
    tag: "Lok Sabha",
    accent: "rgba(255,153,51,0.5)",
    tagCol: "#FF9933",
    glow: "rgba(255,120,0,0.07)",
  },
  {
    year: "2021",
    eyebrow: "Assembly — The Dip That Wasn't",
    title: "Zero Seats. But 11.3%. The Base Holds.",
    body: "NDA loses Nemom in a close fight, returns to zero seats. The media writes another obituary. But the vote share holds at 11.3%. In Palakkad, metro legend E. Sreedharan loses by only 3859 votes — the narrowest near-miss in BJP Keralam history.",
    stats: [{ v: "11.3%", l: "Vote share (held)" }, { v: "3859", l: "Sreedharan's near-miss" }],
    tag: "Assembly",
    accent: "rgba(255,200,80,0.35)",
    tagCol: "rgba(255,200,80,0.8)",
    glow: "rgba(255,150,0,0.05)",
  },
  {
    year: "2024",
    eyebrow: "Lok Sabha — The Breakthrough",
    title: "THRISSUR IS TAKEN. HISTORY IS MADE.",
    body: "Suresh Gopi wins Thrissur by 74686 votes — the largest BJP victory margin in Keralam history. NDA vote share rises to 19.21% statewide (BJP: 16.68%). NDA led 6 of 7 Thrissur segments. The fortress is broken.",
    stats: [{ v: "19.21%", l: "NDA share" }, { v: "74686", l: "Thrissur margin" }, { v: "6/7", l: "Segments led" }],
    tag: "Lok Sabha",
    accent: "rgba(255,220,60,0.7)",
    tagCol: "#FFD166",
    glow: "rgba(255,200,0,0.1)",
    highlight: true,
    mega: true,
  },
  {
    year: "2025",
    eyebrow: "Local Body — The Coronation",
    title: "Thiruvananthapuram Bows to the Lotus.",
    body: "December 2025: In the 101-ward Thiruvananthapuram Corporation election, NDA wins 50 seats, seizing the city council majority. Forty-five years of unbroken LDF rule ends in a single night. V.V. Rajesh becomes the first-ever BJP Mayor of one of India's oldest cities. The LDF collapses to 29. The UDF to 19.",
    stats: [{ v: "50/101", l: "Wards won" }, { v: "45 yrs", l: "LDF rule ended" }, { v: "1st", l: "BJP Mayor" }],
    tag: "Local Body — LATEST",
    accent: "rgba(255,224,102,0.7)",
    tagCol: "#FFE066",
    glow: "rgba(255,210,0,0.12)",
    highlight: true,
    mega: true,
  },
  {
    year: "2026",
    eyebrow: "Assembly — The Final Frontier",
    title: "The Saffron Dawn. The Story Continues.",
    body: "In 2026, Keralam holds its Assembly election. In 11 assembly segments across this state, more voters chose NDA than any other party in 2024. The wall is not just cracked. Parts of it are already gone.",
    stats: [{ v: "11", l: "Segments led in 2024" }, { v: "140", l: "Assembly seats" }],
    tag: "Upcoming",
    accent: "rgba(19,136,8,0.6)",
    tagCol: "#138808",
    glow: "rgba(19,136,8,0.08)",
  },
];

export default function EventTimeline() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,120,0,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.35)", background: "rgba(255,153,51,0.08)" }}>
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">The Journey</span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, #FFD166, #FF9933, #FF5500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 16px rgba(255,120,0,0.4))",
              display: "inline-block",
            }}>
            From Zero to One.
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(255,200,120,0.55)" }}>
            This is not a story of luck. Every ward, every vote, every seat was earned through decades of patient, relentless work.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central spine */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px]"
            style={{ background: "linear-gradient(to bottom, rgba(255,153,51,0.1), rgba(255,153,51,0.6) 30%, #FF9933 60%, #FFD166 80%, #138808 100%)" }} />

          <div className="space-y-6">
            {EVENTS.map((ev) => (
              <div key={ev.year} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[9px] md:left-[23px] top-5 w-5 h-5 rounded-full border-2 border-dark-900 z-10 flex items-center justify-center"
                  style={{ background: ev.accent, boxShadow: `0 0 12px ${ev.accent}` }}>
                  {ev.mega && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>

                {/* Event card — 3D glass */}
                <div className="rounded-2xl overflow-hidden transition-all duration-500 cursor-default group"
                  style={{
                    background: `linear-gradient(135deg, ${ev.glow} 0%, rgba(14,4,0,0.9) 100%)`,
                    border: `1px solid ${ev.accent}`,
                    boxShadow: ev.highlight
                      ? `0 8px 32px ${ev.glow}, 0 0 0 1px ${ev.accent}`
                      : "0 4px 16px rgba(0,0,0,0.3)",
                    transform: "perspective(800px) rotateX(0.5deg)",
                  }}>
                  {/* Glowing top edge on milestone events */}
                  {ev.highlight && (
                    <div className="h-[2px] w-full"
                      style={{ background: `linear-gradient(90deg, transparent, ${ev.tagCol}, transparent)` }} />
                  )}

                  <div className="p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                      <span className="font-mono font-black text-4xl md:text-5xl tracking-tighter" style={{ color: ev.accent }}>{ev.year}</span>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF9933]/50">Election Category: {ev.tag}</span>
                        <span className="text-xs font-black uppercase tracking-widest" style={{ color: ev.tagCol }}>{ev.eyebrow}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-black mb-3"
                      style={{
                        fontSize: ev.mega ? "clamp(1.3rem, 3vw, 2rem)" : "clamp(1.1rem, 2.5vw, 1.5rem)",
                        color: ev.mega ? ev.tagCol : "rgba(255,230,180,0.95)",
                        textShadow: ev.mega ? `0 0 30px ${ev.accent}` : undefined,
                      }}>
                      {ev.title}
                    </h3>

                    {/* Body */}
                    <p className="text-sm md:text-base leading-relaxed mb-5"
                      style={{ color: "rgba(255,190,120,0.65)" }}>
                      {ev.body}
                    </p>

                    {/* Stat pills */}
                    <div className="flex flex-wrap gap-3">
                      {ev.stats.map((s) => (
                        <div key={s.l} className="rounded-xl px-4 py-2.5 flex flex-col items-center text-center min-w-[80px]"
                          style={{
                            background: "rgba(0,0,0,0.45)",
                            border: `1px solid ${ev.accent}`,
                            boxShadow: "inset 0 1px 0 rgba(255,200,100,0.06)",
                          }}>
                          <span className="font-mono font-black text-xl md:text-2xl leading-none" style={{ color: ev.tagCol }}>{s.v}</span>
                          <span className="text-xs mt-1" style={{ color: "rgba(255,200,120,0.45)" }}>{s.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manifesto Close */}
        <div
          className="mt-16 rounded-3xl p-8 md:p-10"
          style={{ background: "rgba(255,120,0,0.08)", border: "1px solid rgba(255,153,51,0.25)" }}
        >
          <div className="text-[10px] uppercase tracking-[0.35em] text-bjp-saffron font-black mb-6">The Manifesto</div>
          <div className="space-y-2 text-sm md:text-base font-mono" style={{ color: "rgba(255,220,170,0.85)" }}>
            <div>1980. BJP founded. Zero seats in Keralam.</div>
            <div>1984. The worst year nationally. Still zero.</div>
            <div>2014. Ten-point-eight percent of Keralam&apos;s vote. Zero seats.</div>
            <div>2016. One MLA. Nemom.</div>
            <div>2019. Fifteen-point-six percent. Still zero seats.</div>
            <div>2024. Seventy-four thousand six hundred and eighty-six votes.</div>
            <div>2025. The first Mayor. Fifty seats in Thiruvananthapuram Corporation.</div>
          </div>
          <div className="h-px w-24 bg-bjp-saffron/40 my-8" />
          <p className="text-sm md:text-base" style={{ color: "rgba(255,200,120,0.65)" }}>
            This is not the story of a political party. This is the story of votes cast — steadily, incrementally,
            across 44 years — by Keralam voters who believed something the establishment said was impossible. They were
            not wrong. They were early.
          </p>
          <p className="text-sm md:text-base mt-4" style={{ color: "rgba(255,200,120,0.65)" }}>
            In 2026, Keralam holds its Assembly election. In 11 assembly segments across this state, more voters chose
            NDA than any other party in 2024. The wall is not just cracked. Parts of it are already gone.
          </p>
          <p className="text-sm md:text-base mt-4" style={{ color: "rgba(255,210,140,0.8)" }}>
            What happens next is not written yet.
          </p>
        </div>
      </div>
    </section>
  );
}
