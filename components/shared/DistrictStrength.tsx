"use client";

const DISTRICTS = [
  { name: "Thiruvananthapuram", region: "South", share2024: 32, share2019: 31, share2014: 22, trend: "up", note: "BJP's southern fortress. Two near-misses in 2014 and 2024 bookend the rise." },
  { name: "Kasaragod", region: "North", share2024: 25, share2019: 22, share2014: 18, trend: "up", note: "Northern stronghold. K. Surendran polled 17.9% in 2014. RSS network strong." },
  { name: "Thrissur", region: "Central", share2024: 37, share2019: 28, share2014: 20, trend: "won", note: "Flipped in 2024. Suresh Gopi won by 74686 — highest-ever BJP majority in Keralam." },
  { name: "Pathanamthitta", region: "South", share2024: 25.5, share2019: 28.95, share2014: 17.4, trend: "up", note: "BJP vote share surged from 17.4% (2014) to 28.95% (2019) — the sharpest constituency jump that year." },
  { name: "Ernakulam", region: "Central", share2024: null, share2019: null, share2014: null, trend: "up", note: "Urban growth visible, but constituency-level NDA shares here need ECI verification before quoting numbers." },
  { name: "Kozhikode", region: "North", share2024: 14, share2019: 11, share2014: 8, trend: "up", note: "Growing but still contested with both UDF and LDF frontals dominant." },
  { name: "Palakkad", region: "Central", share2024: 22, share2019: 18, share2014: 14, trend: "up", note: "Sreedharan lost here by 3859 votes in 2021. BJP now the second force in the district." },
  { name: "Malappuram", region: "North", share2024: 3, share2019: 3, share2014: 2, trend: "flat", note: "Muslim-majority district. BJP consistently below 4% — the honest weak pocket." },
];

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "won") return <span style={{ color: "#FFD166" }} className="font-black text-sm">★ WON</span>;
  if (trend === "up") return <span style={{ color: "#138808" }} className="font-mono text-xs font-bold">↑ Growing</span>;
  return <span style={{ color: "rgba(255,255,255,0.3)" }} className="font-mono text-xs">— Flat</span>;
}

function BarFill({ pct, max = 40 }: { pct: number | null; max?: number }) {
  if (pct == null) {
    return (
      <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
        <div className="h-full rounded-full" style={{ width: "0%" }} />
      </div>
    );
  }
  const width = Math.min(100, (pct / max) * 100);
  const color = pct > 30 ? "#FFD166" : pct > 20 ? "#FF9933" : pct > 10 ? "#E68A2E" : "rgba(255,153,51,0.3)";
  return (
    <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${width}%`, background: color }} />
    </div>
  );
}

export default function DistrictStrength() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.3)", background: "rgba(255,153,51,0.07)" }}>
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.18em]">District by District</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl mb-3" style={{ color: "rgba(255,230,180,0.95)" }}>
            Where BJP Is Strong — And Where It Isn&apos;t
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "rgba(255,200,120,0.45)" }}>
            Vote share by key district · 2014 → 2024. Honest tracking — strong pockets and weak ones.
          </p>
        </div>

        {/* District tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DISTRICTS.map((d) => {
            const isWon = d.trend === "won";
            const share2024Value = d.share2024 ?? 0;
            const accent = isWon ? "rgba(255,220,80,0.2)" : share2024Value > 20
              ? "rgba(255,153,51,0.12)" : "rgba(255,153,51,0.06)";
            const borderCol = isWon
              ? "rgba(255,220,80,0.4)"
              : share2024Value > 20
                ? "rgba(255,153,51,0.25)"
                : "rgba(255,153,51,0.1)";
            return (
              <div key={d.name}
                className="rounded-2xl p-5 group transition-all duration-500 bg-saffron-glass"
                style={{
                  border: `1px solid ${borderCol}`,
                  boxShadow: isWon ? "0 0 40px rgba(255,200,0,0.3)" : "none",
                }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-heading font-bold text-white text-sm">{d.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,200,120,0.4)" }}>{d.region} Keralam</div>
                  </div>
                  <TrendIcon trend={d.trend} />
                </div>

                {/* Big 2024 number */}
                <div className="mb-3">
                  <span className="inline-block font-mono font-black leading-none text-gold"
                    style={{
                      fontSize: "2.8rem",
                      filter: d.share2024 > 25 ? "drop-shadow(0 0 15px rgba(255,153,51,0.5))" : "none",
                    }}>
                    {d.share2024 == null ? "—" : d.share2024}
                    {d.share2024 == null ? null : <span style={{ fontSize: "55%", opacity: 0.8 }}>%</span>}
                  </span>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,200,120,0.4)" }}>2024 LS vote share</div>
                </div>

                <BarFill pct={d.share2024} />

                {/* 3-year comparison */}
                <div className="flex justify-between mt-3 text-xs font-mono">
                  {[{ y: "2014", v: d.share2014 }, { y: "2019", v: d.share2019 }, { y: "2024", v: d.share2024 }].map((pt) => (
                    <div key={pt.y} className="text-center">
                      <div className="font-bold" style={{ color: "rgba(255,153,51,0.8)" }}>{pt.v == null ? "—" : `${pt.v}%`}</div>
                      <div style={{ color: "rgba(255,200,120,0.3)" }}>{pt.y}</div>
                    </div>
                  ))}
                </div>

                <p className="text-xs leading-snug mt-3" style={{ color: "rgba(255,190,120,0.45)" }}>
                  {d.note}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "rgba(255,200,120,0.25)" }}>
          Vote share figures are constituency-level estimates from ECI data · Some district figures omitted pending verification
        </p>
      </div>
    </section>
  );
}
