"use client";

const CLAIMS = [
  {
    id: 1,
    who: "Pinarayi Vijayan",
    role: "Chief Minister · LDF",
    party: "CPI(M)",
    partyColor: "#E63946",
    when: "April 2024",
    quote: "We will close BJP's account in Keralam.",
    reality: "One seat. A 74686-vote margin. NDA led 6 of 7 Thrissur segments. The account opened — and stayed open.",
    realityStats: [{ v: "1", l: "LS seat" }, { v: "74686", l: "Thrissur margin" }, { v: "6/7", l: "Segments led" }],
    source: "Campaign statement · April 2024",
    emoji: "🏛️",
  },
  {
    id: 2,
    who: "Shashi Tharoor",
    role: "Member of Parliament · UDF",
    party: "INC",
    partyColor: "#1A6FC4",
    when: "Post-2019",
    quote: "The BJP is a zero-seat party in Keralam. The real contest is between UDF and LDF. BJP doesn't have the capacity.",
    reality: "BJP won Thiruvananthapuram Corporation in 2025, securing 50 out of 101 wards. This was the first time BJP took control of a major Municipal Corporation in Keralam.",
    realityStats: [{ v: "50", l: "Corp Wards" }, { v: "1st", l: "Mayor for BJP" }, { v: "2025", l: "Election Year" }],
    source: "National media quotes · 2019–2025",
    emoji: "📚",
  },
  {
    id: 3,
    who: "CPI(M) State Committee",
    role: "State Secretariat · LDF",
    party: "CPI(M)",
    partyColor: "#E63946",
    when: "Post-2021 Assembly",
    quote: "BJP's Sabarimala gambit has backfired. After losing their only seat, they are irrelevant to Keralam's political future.",
    reality: "The base held at 11.3% in the 2021 Assembly election. In 2024, NDA surged to 19.21% statewide (BJP: 16.68%).",
    realityStats: [{ v: "11.3%", l: "Assembly 2021" }, { v: "19.21%", l: "LS 2024 NDA" }, { v: "16.68%", l: "LS 2024 BJP" }],
    source: "Post-election statements · 2021–2024",
    emoji: "📉",
  },
  {
    id: 4,
    who: "Most Exit Polls",
    role: "Keralam Lok Sabha · 2024",
    party: "Exit Polls",
    partyColor: "#6C757D",
    when: "June 2024",
    quote: "0 seats for NDA in Keralam.",
    reality: "One seat won by 74686 votes. Manorama-VMR even placed Suresh Gopi third — and he finished first.",
    realityStats: [{ v: "1", l: "Seat won" }, { v: "74686", l: "Win margin" }, { v: "Gopi 1st", l: "Actual finish" }],
    source: "Exit poll trackers · 2024",
    emoji: "🧾",
  },
];

const VERDICT_ROWS = [
  {
    who: "Pinarayi Vijayan",
    predicted: "We will close BJP's account in Keralam.",
    happened: "1 seat. 74686-vote margin. Led 6 of 7 Thrissur segments.",
  },
  {
    who: "Shashi Tharoor (post-2019)",
    predicted: "BJP is a zero-seat party in Keralam.",
    happened: "BJP wins TVM Corporation. First Mayor. 50 of 101 wards.",
  },
  {
    who: "CPI(M) State Committee",
    predicted: "Sabarimala gambit won't last.",
    happened: "NDA: 11.3% (2021 Assembly) → 19.21% (2024 LS).",
  },
  {
    who: "Most Exit Polls 2024",
    predicted: "0 seats for NDA in Keralam.",
    happened: "1 seat won by 74686 votes. Gopi finished first.",
  },
];

export default function OppositionClaims() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,153,51,0.25), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,80,0,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,100,0,0.4)", background: "rgba(255,100,0,0.08)" }}>
            <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#FF6B00" }}>
              Predictions vs Reality
            </span>
          </div>
          <h2 className="font-heading font-black mb-4" style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            display: "inline-block",
            background: "linear-gradient(135deg, #FFD166 0%, #FF9933 50%, #FF5500 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 16px rgba(255,120,0,0.4))",
          }}>
            They Said It Would Never Happen.
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "rgba(255,200,120,0.5)" }}>
            For decades, Keralam's biggest political names declared the BJP irrelevant—wrong, and wrong again.
            Here is what they said, and what the voters replied.
          </p>
        </div>

        {/* Verdict Board */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-bjp-saffron/20 bg-black/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-xs uppercase tracking-widest font-black"
            style={{ background: "rgba(255,153,51,0.08)", color: "rgba(255,210,140,0.7)" }}>
            <div className="p-4 border-b md:border-b-0 md:border-r border-white/5">Who</div>
            <div className="p-4 border-b md:border-b-0 md:border-r border-white/5">What They Predicted</div>
            <div className="p-4">What Happened</div>
          </div>
          {VERDICT_ROWS.map((row) => (
            <div key={row.who} className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5 text-sm">
              <div className="p-4 text-white/80 md:border-r border-white/5">{row.who}</div>
              <div className="p-4 text-white/60 md:border-r border-white/5">{row.predicted}</div>
              <div className="p-4 text-white/80">{row.happened}</div>
            </div>
          ))}
        </div>

        {/* Claims */}
        <div className="space-y-6">
          {CLAIMS.map((c) => (
            <div key={c.id}
              className="relative rounded-2xl overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(255,80,0,0.06) 0%, rgba(14,4,0,0.97) 100%)",
                border: "1px solid rgba(255,153,51,0.12)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}>
              {/* Red left accent — the claim side */}
              <div className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: `linear-gradient(to bottom, ${c.partyColor}80, ${c.partyColor}30)` }} />

              <div className="p-7 pl-9 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT: The claim */}
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-2xl shrink-0">{c.emoji}</div>
                    <div>
                      <div className="font-heading font-bold text-white text-base">{c.who}</div>
                      <div className="text-xs" style={{ color: "rgba(255,200,120,0.4)" }}>{c.role}</div>
                      <div className="mt-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: `${c.partyColor}20`, color: c.partyColor, border: `1px solid ${c.partyColor}40` }}>
                          {c.party}
                        </span>
                        <span className="ml-2 text-xs" style={{ color: "rgba(255,200,120,0.35)" }}>{c.when}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-4 py-1" style={{ borderLeft: `2px solid ${c.partyColor}50` }}>
                    <div className="text-4xl leading-none mb-1" style={{ color: `${c.partyColor}40`, fontFamily: "serif" }}>&ldquo;</div>
                    <p className="text-base italic leading-relaxed" style={{ color: "rgba(255,220,180,0.75)" }}>
                      {c.quote}
                    </p>
                  </div>
                  <div className="mt-3 text-xs" style={{ color: "rgba(255,200,120,0.3)" }}>
                    Source: {c.source}
                  </div>
                </div>

                {/* RIGHT: The reality — saffron accent */}
                <div className="relative rounded-xl p-5 overflow-hidden"
                  style={{ background: "rgba(255,120,0,0.07)", border: "1px solid rgba(255,153,51,0.2)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(90deg, #FF9933, #FFD166, transparent)" }} />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-bjp-saffron font-black text-xs uppercase tracking-widest">What Actually Happened</span>
                    <span className="text-lg">⚡</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,210,140,0.75)" }}>
                    {c.reality}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {c.realityStats.map((s) => (
                      <div key={s.l} className="rounded-lg px-3 py-2 text-center"
                        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,153,51,0.2)" }}>
                        <div className="font-mono font-black text-lg leading-none" style={{ color: "#FF9933" }}>{s.v}</div>
                        <div className="text-xs mt-1" style={{ color: "rgba(255,200,120,0.4)" }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-14 text-center">
          <div className="relative inline-block max-w-2xl mx-auto px-8 py-6 rounded-2xl"
            style={{ background: "rgba(255,120,0,0.08)", border: "1px solid rgba(255,153,51,0.25)" }}>
            <p className="font-heading font-bold text-xl md:text-2xl" style={{ color: "rgba(255,230,180,0.95)" }}>
              &ldquo;The only response to a prediction is a result.&rdquo;
            </p>
            <p className="text-sm mt-2" style={{ color: "rgba(255,180,80,0.45)" }}>
              — BJP Keralam, June 4, 2024 · December 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
