"use client";

// Dynamically import chart components to prevent SSR dimension errors
// (recharts needs real browser DOM to measure container sizes)
import dynamic from "next/dynamic";
import SilentRevolution from "@/components/shared/SilentRevolution";

const LSVoteShareChart   = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.LSVoteShareChart })), { ssr: false });
const AssemblyVoteShareChart = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.AssemblyVoteShareChart })), { ssr: false });
const TVMWardChart       = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.TVMWardChart })), { ssr: false });
const KeyNumbers         = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.KeyNumbers })), { ssr: false });

export default function GrowthSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,153,51,0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.35)", background: "rgba(255,153,51,0.08)" }}>
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">Five Decades of Data</span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl mb-4" style={{
            background: "linear-gradient(135deg, #FFE566 0%, #FF9933 60%, #FF5500 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px rgba(255,153,51,0.6))"
          }}>
            Growth by the Numbers
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(255,200,120,0.55)" }}>
            From negligible to dominant — every data point verified from the Election Commission of India.
          </p>
        </div>

        {/* 4 key stat cards */}
        <KeyNumbers />

        {/* 2025 TVM Banner */}
        <div className="mt-10 relative rounded-2xl overflow-hidden bg-saffron-glass"
          style={{ border: "1px solid rgba(255,224,102,0.35)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <div className="absolute left-0 top-0 bottom-0 w-1.5"
            style={{ background: "linear-gradient(to bottom, #FFE066, #FF9933, #138808)" }} />
        <div className="p-6 pl-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="text-4xl shrink-0">🏛️</div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-mono font-black text-sm" style={{ color: "#FFE066" }}>December 2025</span>
                <span className="text-xs font-black px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,224,102,0.15)", color: "#FFE066", border: "1px solid rgba(255,224,102,0.3)" }}>
                  TIER: MUNICIPAL CORPORATION
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Thiruvananthapuram Corporation Falls to BJP — First Mayor in History
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.6)" }}>
                NDA wins <strong className="text-white">50 of 101 wards</strong>, ending <strong className="text-gold">45 years</strong> of unbroken LDF rule.
                V.V. Rajesh becomes Keralam&apos;s first BJP Municipal Corporation Mayor. LDF collapses to 29 seats, UDF to 19.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0 w-full lg:w-auto">
                {[
                  { v: "50", l: "NDA", c: "#FFD166" },
                  { v: "29", l: "LDF", c: "rgba(255,255,255,0.4)" },
                  { v: "19", l: "UDF", c: "rgba(255,255,255,0.4)" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl p-4 text-center bg-black/40 border border-white/5 shadow-[0_0_20px_rgba(255,153,51,0.1)]">
                    <div className="text-2xl font-mono font-black" style={{ color: s.c, textShadow: s.c === "#FFD166" ? "0 0 15px rgba(255,209,102,0.5)" : "none" }}>{s.v}</div>
                    <div className="text-[10px] mt-0.5 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l} wards</div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* 2020 Silent Revolution banner */}
        <SilentRevolution />

        {/* Charts 2x2 grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 bg-saffron-glass border border-bjp-saffron/20 shadow-xl">
            <LSVoteShareChart />
          </div>
          <div className="rounded-2xl p-7 bg-saffron-glass border border-bjp-saffron/20 shadow-xl">
            <AssemblyVoteShareChart />
          </div>
          <div className="rounded-2xl p-7 bg-saffron-glass border border-bjp-gold/20 shadow-xl">
            <TVMWardChart />
          </div>

          {/* 2024 Thrissur breakthrough */}
          <div className="relative rounded-2xl overflow-hidden bg-saffron-glass"
            style={{ border: "1px solid rgba(255,153,51,0.35)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: "linear-gradient(to bottom, #FF9933, #138808)" }} />
            <div className="p-7 pl-9 flex flex-col">
              <div className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "rgba(255,153,51,0.7)" }}>
                The Breakthrough
              </div>
              <div className="font-black leading-none mb-4"
                style={{ fontSize: "5rem", WebkitTextStroke: "2px #FF9933", color: "transparent", fontFamily: "monospace" }}>
                2024
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                First Keralam MP in BJP History
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,200,120,0.55)" }}>
                Suresh Gopi wins Thrissur with a 74686-vote margin. NDA vote share rises to 19.21% statewide (BJP: 16.68%).
                The wall is broken.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-auto">
                {[
                  { v: "1", l: "MP elected", c: "#FF9933" },
                  { v: "74K+", l: "Win margin", c: "#FFD166" },
                  { v: "19.21%", l: "NDA vote share", c: "#138808" },
                ].map((s) => (
                    <div key={s.l} className="rounded-xl p-4 text-center bg-black/40 border border-white/5 shadow-[0_0_20px_rgba(255,153,51,0.15)]">
                      <div className="text-xl font-mono font-black text-gold">{s.v}</div>
                      <div className="text-[10px] font-bold mt-1 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
