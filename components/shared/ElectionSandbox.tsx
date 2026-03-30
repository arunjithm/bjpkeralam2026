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
};

export default function ElectionSandbox() {
  const [swing, setSwing] = useState(0);

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
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.2em]">
            <TrendingUp className="w-3.5 h-3.5 text-bjp-saffron" />
            Projection Engine
          </div>
          <h2 className="statement-header">
            2026 Assembly <br />
            <span className="saffron-header">Sandbox.</span>
          </h2>
          <p className="max-w-2xl text-xl text-ink-700 font-sans font-medium">
            What happens if the 2024 momentum increases by just a few points? 
            Simulate the future using our historical conversion model.
          </p>
        </div>

        {/* The Sandbox Card */}
        <div className="glass-card border-bjp-saffron/10 shadow-2xl overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Projection Result & Slider Area (5 cols - Moved up for mobile) */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-8">
                <div className="animated-border-dark shadow-2xl relative overflow-hidden group p-8 text-center">
                  <div className="absolute inset-0 bg-bjp-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-bjp-saffron/20 rounded-full blur-[80px] scale-150 animate-pulse" />
                    <div className="relative font-mono font-black text-[120px] md:text-[150px] text-white leading-none tracking-tighter">
                      {projectedSeats}
                    </div>
                  </div>
                  <div className="text-bjp-saffron font-black text-xs uppercase tracking-[0.5em] mt-6">
                    Projected Seats
                  </div>
                  
                  {/* Slider integrated here for mobile accessibility */}
                  <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                    <div className="flex justify-between items-end mb-4">
                        <label className="text-ink-400 font-black text-[10px] uppercase tracking-widest">Simulated Swing</label>
                        <span className="font-mono font-black text-2xl text-bjp-saffron">+{swing}%</span>
                    </div>
                    <input 
                      type="range" min="0" max="10" step="0.5" value={swing}
                      onChange={(e) => setSwing(parseFloat(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-bjp-saffron"
                    />
                    <div className="flex justify-between mt-3 font-mono text-[8px] font-black text-ink-500 uppercase tracking-widest">
                        <span>Baseline</span>
                        <span>10% Wave</span>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 text-center">
                  <p className="text-sm font-quote italic text-ink-900 leading-relaxed">
                    &ldquo;When the gap is this thin, even a 0.5% shift writes a new history.&rdquo;
                  </p>
                </div>
              </div>

              {/* Technical Context (7 cols) */}
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 flex gap-4">
                    <TrendingUp className="w-6 h-6 text-bjp-saffron shrink-0" />
                    <div>
                      <div className="text-ink-950 font-black text-sm uppercase tracking-tight">Momentum Multiplier</div>
                      <p className="text-xs text-ink-500 font-sans font-medium mt-1 leading-relaxed">Based on historical conversion where a 1% swing in 3-way races flips segments at 3.4x rate.</p>
                    </div>
                  </div>
                  <div className="glass-card p-6 flex gap-4">
                    <Search className="w-6 h-6 text-ink-950 shrink-0" />
                    <div>
                      <div className="text-ink-950 font-black text-sm uppercase tracking-tight">Concentration Effect</div>
                      <p className="text-xs text-ink-500 font-sans font-medium mt-1 leading-relaxed">Estimating growth in high-strength clusters like TVM, Palakkad, and Kasaragod.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="text-[10px] font-black uppercase tracking-widest text-ink-400 mb-6 flex items-center gap-2">
                    <Info className="w-4 h-4 text-bjp-saffron" />
                    2024 Baseline: NDA-Led Assembly Segments
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {CALC_DATA.segments.map((seg) => (
                      <span key={seg.name} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-colors shadow-sm ${
                        seg.status === 'led' 
                        ? 'bg-bjp-saffron text-white border-bjp-saffron' 
                        : 'bg-bjp-saffronsoft/30 border-bjp-saffron/10 text-ink-400'
                      }`}>
                        {seg.name} {seg.status === 'udf' ? '(UDF)' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
