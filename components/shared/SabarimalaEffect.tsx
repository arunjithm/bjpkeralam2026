import { Flame, TrendingUp, BarChart2, AlertTriangle } from "lucide-react";

const SWING_DATA = [
  { year: "2014", share: 10.3, label: "Lok Sabha 2014" },
  { year: "2019", share: 15.64, label: "Lok Sabha 2019" },
  { year: "2024", share: 19.21, label: "Lok Sabha 2024" },
];

const KEY_DISTRICTS = [
  { name: "Pathanamthitta", swing: "+8.1%", note: "Sabarimala district. Largest surge nationally." },
  { name: "Thiruvananthapuram", swing: "+6.2%", note: "South Kerala consolidation." },
  { name: "Thrissur", swing: "+7.4%", note: "Led to 2024 MP breakthrough." },
  { name: "Ernakulam", swing: "+4.1%", note: "Urban Hindu consolidation." },
];

const maxShare = Math.max(...SWING_DATA.map((d) => d.share));

export default function SabarimalaEffect() {
  return (
    <section className="relative py-12 md:py-20 bg-bjp-saffronsoft/40 border-y border-bjp-saffron/10 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.07] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, #FF9933 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-950 border border-white/10 mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-bjp-saffron" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">
              The Sabarimala Effect
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end">
            <div>
              <h2
                className="font-heading font-black text-ink-950 leading-tight mb-4"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)" }}
              >
                How 2018 Rewrote{" "}
                <span className="text-bjp-saffron">2019&apos;s Electoral Map.</span>
              </h2>
              <p className="text-ink-700 text-base leading-relaxed font-medium">
                The Supreme Court&apos;s Sabarimala entry verdict in September 2018 triggered a Hindu consolidation across Kerala that translated directly into a{" "}
                <strong className="text-ink-950">+5.34 percentage point jump</strong> in NDA vote share at the 2019 Lok Sabha election — the single largest inter-election swing in the party&apos;s Kerala history.
              </p>
            </div>
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-bjp-saffron/15 shadow-sm">
              <TrendingUp className="w-8 h-8 text-bjp-saffron shrink-0" />
              <div>
                <div className="text-3xl font-mono font-black text-bjp-saffron">+5.34%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-ink-500 mt-1">
                  Single-election swing · 2014 → 2019
                </div>
                <div className="text-xs text-ink-600 mt-1">
                  The largest inter-election jump in Kerala BJP history
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Vote Share Bars */}
          <div className="bg-white rounded-2xl p-6 border border-bjp-saffron/15 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <BarChart2 className="w-4 h-4 text-bjp-saffron" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-500">
                Statewide Vote Share · Lok Sabha
              </p>
            </div>
            <div className="space-y-5">
              {SWING_DATA.map((d, i) => (
                <div key={d.year}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-black text-ink-700">{d.label}</span>
                    <span className="font-mono font-black text-bjp-saffron text-base">{d.share}%</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(d.share / maxShare) * 100}%`,
                        background: i === 1
                          ? "linear-gradient(to right, #FF9933, #E68A2E)"
                          : i === 2
                          ? "linear-gradient(to right, #FF9933, #138808)"
                          : "#FFD166",
                      }}
                    />
                  </div>
                  {i === 1 && (
                    <p className="text-[10px] text-bjp-saffron font-bold mt-1">
                      ↑ Sabarimala verdict impact year
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* District breakdown */}
          <div className="bg-white rounded-2xl p-6 border border-bjp-saffron/15 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-4 h-4 text-bjp-saffron" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-500">
                Key District Swings · 2014 → 2019
              </p>
            </div>
            <div className="space-y-4">
              {KEY_DISTRICTS.map((d) => (
                <div key={d.name} className="flex items-start gap-4 p-3 rounded-xl hover:bg-bjp-saffronsoft/60 transition-colors">
                  <div className="shrink-0 px-2.5 py-1.5 rounded-lg bg-bjp-saffron text-white font-mono font-black text-sm">
                    {d.swing}
                  </div>
                  <div>
                    <p className="text-sm font-black text-ink-950">{d.name}</p>
                    <p className="text-xs text-ink-500 leading-snug mt-0.5">{d.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <p className="text-[11px] text-ink-400 font-medium leading-relaxed">
                The Sabarimala wave wasn&apos;t just symbolic — it built the booth-level infrastructure that delivered Thrissur in 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
