"use client";

const WALL = [
  { year: "1957", tag: "Jana Sangh", note: "Contested — negligible vote share" },
  { year: "1962", tag: "Jana Sangh", note: "Minimal presence" },
  { year: "1967", tag: "Jana Sangh", note: "Minimal presence" },
  { year: "1971", tag: "Jana Sangh", note: "Minimal presence" },
  { year: "1977", tag: "Janata", note: "Jan Sangh merged into Janata Party" },
  { year: "1980", tag: "BJP", note: "BJP founded · First Keralam LS contest — minimal share" },
  { year: "1984", tag: "BJP", note: "Weakest national year · Keralam near-zero" },
  { year: "1989", tag: "BJP", note: "Early stirrings nationally; Keralam still near-zero" },
  { year: "1991", tag: "BJP", note: "First noticeable uptick; still single digits" },
  { year: "1996", tag: "NDA", note: "Modest share · zero seats" },
  { year: "1998", tag: "NDA", note: "Modest share · zero seats" },
  { year: "1999", tag: "NDA", note: "Modest share · zero seats" },
  { year: "2004", tag: "NDA", note: "Still zero seats" },
  { year: "2009", tag: "NDA", note: "Decline · still zero" },
  { year: "2014", tag: "NDA", note: "10.82% statewide · 0 seats", highlight: true },
  { year: "2019", tag: "NDA", note: "15.64% statewide · 0 seats", highlight: true },
  { year: "2024", tag: "NDA", note: "19.21% statewide · 1 seat (Thrissur)", highlight: true },
];

const TAG_COLORS: Record<string, string> = {
  "Jana Sangh": "rgba(255,255,255,0.35)",
  Janata: "rgba(255,255,255,0.45)",
  BJP: "#FF9933",
  NDA: "#FFD166",
};

export default function FortyFourYearWall() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,80,0,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.35)", background: "rgba(255,153,51,0.08)" }}
          >
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">The Wall</span>
          </div>
          <h2
            className="font-heading font-black text-3xl md:text-5xl mb-4"
            style={{ color: "rgba(255,230,180,0.95)" }}
          >
            The Forty-Four Year Wall
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "rgba(255,200,120,0.55)" }}>
            From 1980 to 2024, Keralam sent zero BJP MPs to Parliament. This is the long arc that 2024 finally cracked.
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-saffron-glass border border-bjp-saffron/20">
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-4 min-w-max">
              {WALL.map((w) => (
                <div
                  key={w.year}
                  className="rounded-2xl p-4 min-w-[220px] bg-black/40 border"
                  style={{
                    borderColor: w.highlight ? "rgba(255,200,80,0.6)" : "rgba(255,153,51,0.15)",
                    boxShadow: w.highlight ? "0 0 24px rgba(255,153,51,0.2)" : "none",
                  }}
                >
                  <div className={`font-mono font-black text-2xl ${w.highlight ? "text-gold" : "text-white/70"}`}>
                    {w.year}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{
                        color: TAG_COLORS[w.tag] ?? "rgba(255,255,255,0.5)",
                        border: `1px solid ${TAG_COLORS[w.tag] ?? "rgba(255,255,255,0.2)"}`,
                        background: "rgba(0,0,0,0.35)",
                      }}
                    >
                      {w.tag}
                    </span>
                    {w.highlight && (
                      <span className="text-[10px] uppercase tracking-widest text-bjp-saffron">Verified</span>
                    )}
                  </div>
                  <p className="text-xs mt-3" style={{ color: "rgba(255,210,150,0.75)" }}>
                    {w.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs" style={{ color: "rgba(255,200,120,0.35)" }}>
            Percentages shown only where Election Commission figures are confirmed (2014, 2019, 2024).
          </p>
        </div>

        <div className="mt-8 rounded-2xl p-6 bg-saffron-glass border border-bjp-saffron/30 shadow-xl">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-bjp-saffron mb-4">The Insight</div>
          <h3 className="font-heading font-bold text-xl text-white mb-3">The Wall Was Mathematical</h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.65)" }}>
            In 2014, the NDA crossed 10% for the first time with a confirmed 10.82% share. They received votes
            across all 20 constituencies — and still won zero seats. The wall wasn&apos;t just political. It was
            geometric. Keralam&apos;s first‑past‑the‑post arithmetic made a three‑way breakthrough brutal. What changed
            in 2024 wasn&apos;t just support. It was the depth of that support.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { v: "10.82%", l: "2014 NDA" },
              { v: "15.64%", l: "2019 NDA" },
              { v: "19.21%", l: "2024 NDA" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl px-3 py-2 text-center"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,153,51,0.2)" }}
              >
                <div className="font-mono font-black text-lg leading-none text-gold">{s.v}</div>
                <div className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: "rgba(255,200,120,0.45)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
