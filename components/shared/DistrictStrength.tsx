"use client";

import { MapPin } from "lucide-react";

const DISTRICTS = [
  { name: "Thiruvananthapuram", region: "South", share2024: 32, share2019: 31, share2014: 22, trend: "up", note: "BJP's southern fortress. Two near-misses in 2014 and 2024 bookend the rise." },
  { name: "Kasaragod", region: "North", share2024: 25, share2019: 22, share2014: 18, trend: "up", note: "Northern stronghold. K. Surendran polled 17.9% in 2014. RSS network strong." },
  { name: "Thrissur", region: "Central", share2024: 37, share2019: 28, share2014: 20, trend: "won", note: "Flipped in 2024. Suresh Gopi won by 74,686 — highest-ever BJP majority in Keralam." },
  { name: "Pathanamthitta", region: "South", share2024: 25.5, share2019: 28.95, share2014: 17.4, trend: "up", note: "BJP vote share surged from 17.4% (2014) to 28.95% (2019) — the sharpest jump." },
  { name: "Palakkad", region: "Central", share2024: 22, share2019: 18, share2014: 14, trend: "up", note: "Sreedharan lost here by 3,859 votes in 2021. BJP now the second force in the district." },
  { name: "Ernakulam", region: "Central", share2024: 16, share2019: 14, share2014: 11, trend: "up", note: "Urban growth visible. NDA shares here show a steady upward professional-class swing." },
  { name: "Kozhikode", region: "North", share2024: 14, share2019: 11, share2014: 8, trend: "up", note: "Growing but still contested with both UDF and LDF frontals dominant." },
  { name: "Malappuram", region: "North", share2024: 3, share2019: 3, share2014: 2, trend: "flat", note: "Muslim-majority district. BJP consistently below 4% — the honest weak pocket." },
];

function TrendBadge({ trend }: { trend: string }) {
  if (trend === "won") return <span className="px-3 py-1 rounded-lg bg-bjp-saffron text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-bjp-saffron/20">Won</span>;
  if (trend === "up") return <span className="px-3 py-1 rounded-lg bg-bjp-green text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-bjp-green/20">Growing</span>;
  return <span className="px-3 py-1 rounded-lg bg-bjp-saffronsoft/30 text-ink-700 text-[10px] font-black uppercase tracking-widest border border-bjp-saffron/10">Flat</span>;
}

function BarFill({ pct, max = 40 }: { pct: number | null; max?: number }) {
  const width = pct == null ? 0 : Math.min(100, (pct / max) * 100);
  const color = pct == null ? "bg-bjp-saffronsoft/30" : pct > 30 ? "bg-bjp-saffron" : pct > 20 ? "bg-bjp-saffron/60" : "bg-bjp-saffron/30";
  return (
    <div className="w-full h-2 rounded-full bg-ink-950/5 overflow-hidden shadow-inner">
      <div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${width}%` }} />
    </div>
  );
}

export default function DistrictStrength() {
  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.2em]">
            <MapPin className="w-3.5 h-3.5 text-bjp-saffron" />
            District by District
          </div>
          <h2 className="statement-header">
            Where <span className="saffron-header">Strength</span> <br />is Concentrated.
          </h2>
          <p className="max-w-2xl text-xl text-ink-700 font-sans font-medium leading-relaxed">
            Vote share by key district · 2014 → 2024. Honest tracking across strong pockets and weak ones.
          </p>
        </div>

        {/* District tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DISTRICTS.map((d) => (
            <div key={d.name} className="glass-card bg-bjp-saffronsoft/10 p-8 group hover:border-bjp-saffron/40 transition-all duration-500 shadow-xl flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="font-heading font-black text-ink-950 text-xl leading-tight tracking-tight">{d.name}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-ink-400 mt-2">{d.region} Keralam</div>
                </div>
                <TrendBadge trend={d.trend} />
              </div>

              <div className="mb-10 flex-1">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-mono font-black text-4xl md:text-6xl text-ink-950 group-hover:text-bjp-saffron transition-colors tracking-tighter">
                    {d.share2024 ?? "—"}
                  </span>
                  <span className="text-[10px] font-black text-ink-400 uppercase tracking-widest">2024 Share %</span>
                </div>
                <BarFill pct={d.share2024} />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-ink-400 pt-6 border-t border-bjp-saffron/10">
                  <div className="flex flex-col items-center">
                    <span className="text-ink-950 text-base font-black">{d.share2014}%</span>
                    <span>2014</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-ink-950 text-base font-black">{d.share2019}%</span>
                    <span>2019</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-bjp-saffron text-base font-black">{d.share2024}%</span>
                    <span>2024</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-ink-700 font-sans font-medium italic">
                  {d.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-ink-400 mt-16">
          Vote share figures are constituency-level estimates based on ECI data
        </p>
      </div>
    </section>
  );
}
