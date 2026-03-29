"use client";

const MISSES = [
  {
    year: "2016",
    election: "Assembly · Manjeshwar",
    candidate: "K. Surendran",
    votes: "56781",
    opponentVotes: "56870",
    opponent: "P.B. Abdul Razak (IUML)",
    margin: "89",
    tier: "Assembly 2016",
    label: "votes",
    headline: "89 votes. The smallest margin in Keralam's modern history.",
    sub: "89 votes across 208165 electors — just 0.04% of the constituency. Forty-five voters per ward could have rewritten 2016.",
    accent: "rgba(255,153,51,0.6)",
    glow: "rgba(255,100,0,0.15)",
    border: "rgba(255,153,51,0.3)",
    tag: "ASSEMBLY 2016",
    tagColor: "#FF9933",
  },
  {
    year: "2014",
    election: "Lok Sabha · Thiruvananthapuram",
    candidate: "O. Rajagopal",
    votes: "282336",
    opponentVotes: "297806",
    opponent: "Shashi Tharoor (INC)",
    margin: "15470",
    tier: "Lok Sabha 2014",
    label: "votes",
    headline: "The near-miss the city still remembers.",
    sub: "After every round of counting, Rajagopal had led. Tharoor pulled ahead only in the final rounds.",
    accent: "rgba(255,180,51,0.6)",
    glow: "rgba(255,150,0,0.15)",
    border: "rgba(255,180,51,0.3)",
    tag: "LOK SABHA 2014",
    tagColor: "#FFD166",
  },
  {
    year: "2021",
    election: "Assembly · Nemom",
    candidate: "Kummanam Rajasekharan",
    votes: "51888",
    opponentVotes: "55837",
    opponent: "V. Sivankutty (CPI-M)",
    margin: "3949",
    tier: "Assembly 2021",
    label: "votes",
    headline: "Defending the only seat. Lost by 3949.",
    sub: "BJP's only Assembly seat, held since 2016, slipped back by a thin margin. The line between permanence and erasure was just 3949 votes.",
    accent: "rgba(255,153,51,0.5)",
    glow: "rgba(255,80,0,0.12)",
    border: "rgba(255,153,51,0.25)",
    tag: "ASSEMBLY 2021",
    tagColor: "#FF9933",
  },
  {
    year: "2021",
    election: "Assembly · Palakkad",
    candidate: "E. Sreedharan",
    votes: "50220",
    opponentVotes: "54079",
    opponent: "Shafi Parambil (INC)",
    margin: "3859",
    tier: "Assembly 2021",
    label: "votes",
    headline: "Metro Man. 88 years old. 3859 votes short.",
    sub: "Led in most counting rounds. Lost only in the last. The 88-year-old engineer nearly flipped a safe Congress seat.",
    accent: "rgba(255,200,80,0.55)",
    glow: "rgba(255,180,0,0.12)",
    border: "rgba(255,200,80,0.3)",
    tag: "ASSEMBLY 2021",
    tagColor: "#FFD166",
  },
  {
    year: "2024",
    election: "Lok Sabha · Thiruvananthapuram",
    candidate: "Rajeev Chandrasekhar",
    votes: "342078",
    opponentVotes: "358155",
    opponent: "Shashi Tharoor (INC)",
    margin: "16077",
    tier: "Lok Sabha 2024",
    label: "votes",
    headline: "The city almost fell twice.",
    sub: "BJP led for several hours of counting. The result flipped only in the final rounds.",
    accent: "rgba(255,224,102,0.6)",
    glow: "rgba(255,180,80,0.15)",
    border: "rgba(255,224,102,0.35)",
    tag: "LOK SABHA 2024",
    tagColor: "#FFE066",
  },
];

export default function NearMissGallery() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section label */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,153,51,0.2), transparent)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.35)", background: "rgba(255,153,51,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-bjp-saffron" />
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">The Near Misses</span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4" style={{ color: "rgba(255,235,180,0.95)" }}>
            History Held by a Thread
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "rgba(255,200,120,0.5)" }}>
            Before the breakthrough of 2024, the BJP came razor-close — multiple times. These are the margins that delayed the Saffron Dawn.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MISSES.map((m) => (
            <div key={`${m.year}-${m.election}`}
              className="relative rounded-2xl overflow-hidden group transition-all duration-500 bg-saffron-glass"
              style={{
                border: `1px solid ${m.border}`,
                boxShadow: `0 0 40px ${m.glow}, 0 10px 30px rgba(0,0,0,0.5)`,
                transform: "perspective(800px) rotateX(1deg)",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) translateY(-5px) scale(1.02)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "perspective(800px) rotateX(1deg)")}>

              {/* Glowing top accent line */}
              <div className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${m.accent}, transparent)` }} />

              <div className="p-7">
                {/* Tag + year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full"
                    style={{ background: `${m.glow}`, color: m.tagColor, border: `1px solid ${m.border}` }}>
                    {m.tag}
                  </span>
                  <div className="bg-white/5 rounded-xl px-3 py-1 border border-white/5">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mr-2">Tier</span>
                    <span className="text-xs font-mono font-black text-white/80">{m.tier}</span>
                  </div>
                </div>

                {/* Giant margin number — the emotional hook */}
                <div className="flex items-end gap-3 mb-3">
                  <span className="font-mono font-black leading-none text-gold"
                    style={{
                      fontSize: "clamp(4rem, 10vw, 6rem)",
                      filter: `drop-shadow(0 0 25px ${m.accent})`,
                      display: "inline-block",
                    }}>
                    {m.margin}
                  </span>
                  <span className="text-lg font-bold mb-2" style={{ color: "rgba(255,200,120,0.5)" }}>{m.label}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">{m.headline}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,190,120,0.6)" }}>{m.sub}</p>

                {/* Vote comparison bar */}
                <div className="rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,153,51,0.6)" }}>BJP/NDA</div>
                      <div className="font-mono font-bold text-lg" style={{ color: m.tagColor }}>{m.votes}</div>
                      <div className="text-[10px]" style={{ color: "rgba(255,200,120,0.4)" }}>{m.candidate}</div>
                    </div>
                    <div className="text-center group-hover:scale-125 transition-transform duration-300">
                      <div className="font-black text-xl" style={{ color: "rgba(255,255,255,0.15)" }}>vs</div>
                    </div>
                    <div className="text-center sm:text-right">
                      <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Winner</div>
                      <div className="font-mono font-bold text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>{m.opponentVotes}</div>
                      <div className="text-[10px]" style={{ color: "rgba(255,200,120,0.3)" }}>{m.opponent}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connective tissue */}
        <div className="mt-10 text-center">
          <p className="text-base font-heading italic" style={{ color: "rgba(255,200,120,0.55)" }}>
            Across these five contests, a combined swing of fewer than 40000 votes would have rewritten Keralam&apos;s
            BJP story before 2024.
          </p>
          <p className="text-base font-heading italic mt-2" style={{ color: "rgba(255,200,120,0.4)" }}>
            And then came 2024. And the waiting ended.
          </p>
          <div className="mt-3 w-px h-12 bg-gradient-to-b from-bjp-saffron to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
