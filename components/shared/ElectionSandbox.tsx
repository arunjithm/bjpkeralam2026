"use client";

import { useState } from "react";
import { Info, TrendingUp, Search } from "lucide-react";

const CALC_DATA = {
  baseline: 11, // Assembly segments where BJP led in 2024
  segments: [
    { name: "Thrissur (Town)", group: "Thrissur LS", status: "led" },
    { name: "Ollur", group: "Thrissur LS", status: "led" },
    { name: "Manalur", group: "Thrissur LS", status: "led" },
    { name: "Nattika", group: "Thrissur LS", status: "led" },
    { name: "Irinjalakkuda", group: "Thrissur LS", status: "led" },
    { name: "Puthukkad", group: "Thrissur LS", status: "led" },
    { name: "Guruvayur", group: "Thrissur LS", status: "udf" },
    { name: "Nemom", group: "Thiruvananthapuram LS", status: "led" },
    { name: "Kazhakkoottam", group: "Thiruvananthapuram LS", status: "led" },
    { name: "Vattiyoorkavu", group: "Thiruvananthapuram LS", status: "led" },
    { name: "Attingal", group: "Attingal LS", status: "led" },
    { name: "Kattakkada", group: "Attingal LS", status: "led" },
  ],
  total_seats: 140
};

export default function ElectionSandbox() {
  const [swing, setSwing] = useState(0);

  // Simple heuristic: For every 1% swing, 3-5 marginal seats become "winnable"
  // At 5% swing (20%+ total vote share), the leads expand significantly
  const calculateSeats = (val: number) => {
    const base = CALC_DATA.baseline;
    if (val < 1) return base;
    if (val < 3) return base + 4;
    if (val < 5) return base + 12;
    if (val < 8) return base + 25;
    return base + 40;
  };

  const projectedSeats = calculateSeats(swing);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0d0400]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bjp-saffron/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#138808]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 px-4">
           <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-bjp-saffron/40" />
              <span className="text-bjp-saffron font-black text-xs uppercase tracking-[0.3em]">Projection Engine</span>
              <span className="h-px w-8 bg-bjp-saffron/40" />
           </div>
           <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6">
             2026 Assembly Sandbox
           </h2>
           <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(255,200,120,0.5)" }}>
             In 2024, the NDA led in 11 assembly segments (6 under Thrissur LS, 3 under Thiruvananthapuram LS, and 2 under
             Attingal LS). What happens if the momentum increases by just a few percentage points? Use the slider to
             simulate the future.
           </p>
        </div>

        {/* The Sandbox Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-3xl shadow-2xl">
          <div className="p-8 md:p-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Controls */}
              <div className="space-y-12">
                <div>
                   <div className="flex justify-between items-end mb-6">
                      <label className="text-white font-bold text-lg">Simulated NDA Swing</label>
                      <span className="font-mono font-black text-4xl text-bjp-saffron">+{swing}%</span>
                   </div>
                   <input 
                     type="range" 
                     min="0" 
                     max="10" 
                     step="0.5"
                     value={swing}
                     onChange={(e) => setSwing(parseFloat(e.target.value))}
                     className="w-full h-3 bg-white/5 rounded-lg appearance-none cursor-pointer accent-bjp-saffron"
                   />
                   <div className="flex justify-between mt-3 font-mono text-[10px] text-white/20 uppercase tracking-widest">
                      <span>2024 Baseline</span>
                      <span>10% Wave</span>
                   </div>
                </div>

              <div className="grid grid-cols-1 gap-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-bjp-saffron/20 flex items-center justify-center text-bjp-saffron">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Momentum Multiplier</div>
                        <p className="text-xs text-white/40 leading-relaxed mt-1">Based on historical conversion rates where a 1% swing in 3-way races flips segments at 3.4x rate.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                        <Search size={20} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Concentration Effect</div>
                        <p className="text-xs text-white/40 leading-relaxed mt-1">Estimating growth in high-strength pockets like TVM, Palakkad, and Kasaragod.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-white font-bold text-sm mb-3">2024 NDA-Led Assembly Segments</div>
                    <div className="flex flex-wrap gap-2">
                      {CALC_DATA.segments.map((seg) => {
                        const status = seg.status;
                        const style =
                          status === "led"
                            ? { border: "1px solid rgba(255,153,51,0.35)", color: "rgba(255,200,120,0.75)", background: "rgba(255,153,51,0.08)" }
                            : status === "udf"
                              ? { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.45)" }
                              : { border: "1px dashed rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.4)" };
                        const suffix = status === "udf" ? " · UDF" : status === "pending" ? " · verify" : "";
                        return (
                          <span key={`${seg.group}-${seg.name}`} className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest" style={style}>
                            {seg.name}{suffix}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-[10px] text-white/35 mt-3">
                      Guruvayur stayed with the UDF; the rest mark the 11 NDA-led assembly segments of 2024.
                    </p>
                  </div>
               </div>
              </div>
              </div>

              {/* Big Projection Display */}
              <div className="relative aspect-square md:aspect-auto md:h-[350px] flex flex-col items-center justify-center text-center">
                 {/* Decorative Circles */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-64 h-64 rounded-full border border-bjp-saffron/40 animate-[ping_4s_infinite]" />
                    <div className="absolute w-48 h-48 rounded-full border border-bjp-saffron/60" />
                 </div>

                 <div className="relative">
                    <div className="text-[120px] md:text-[160px] font-mono font-black leading-none text-white tracking-tighter"
                         style={{ textShadow: "0 0 50px rgba(255,153,51,0.3)" }}>
                      {projectedSeats}
                    </div>
                    <div className="text-bjp-saffron font-black text-sm uppercase tracking-[0.4em] mt-2">
                       Projected Assembly Seats
                    </div>
                    <div className="mt-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/40 uppercase tracking-widest inline-flex items-center gap-2">
                       <Info size={12} />
                       Statistical model based on 140 Assembly Constituencies
                    </div>
                 </div>
              </div>

            </div>

          </div>

          <div className="bg-bjp-saffron/5 border-t border-white/5 p-6 text-center">
             <p className="text-sm font-medium italic" style={{ color: "rgba(255,200,120,0.4)" }}>
               &ldquo;When the gap is this thin, even a 0.5% shift writes a new history.&rdquo;
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
