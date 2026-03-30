"use client";

import dynamic from "next/dynamic";
import SilentRevolution from "@/components/shared/SilentRevolution";
import { Landmark, BarChart3 } from "lucide-react";

const LSVoteShareChart   = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.LSVoteShareChart })), { ssr: false });
const AssemblyVoteShareChart = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.AssemblyVoteShareChart })), { ssr: false });
const TVMWardChart       = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.TVMWardChart })), { ssr: false });
const KeyNumbers         = dynamic(() => import("@/components/charts/GrowthCharts").then(m => ({ default: m.KeyNumbers })), { ssr: false });

export default function GrowthSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.2em]">
            <BarChart3 className="w-3.5 h-3.5 text-bjp-saffron" />
            Electoral Performance
          </div>
          <h2 className="statement-header">
            Growth by the <span className="saffron-header">Numbers.</span>
          </h2>
          <p className="max-w-2xl text-xl text-ink-700 font-sans font-medium">
            From negligible to dominant — every data point verified from the Election Commission of India.
          </p>
        </div>

        {/* 4 key stat cards */}
        <KeyNumbers />

        {/* 2025 TVM Banner */}
        <div className="mt-12 glass-card overflow-hidden border-bjp-saffron/20 shadow-2xl">
          <div className="p-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-24 h-24 rounded-3xl bg-bjp-saffron text-white flex items-center justify-center shrink-0 shadow-lg shadow-bjp-saffron/20">
              <Landmark className="w-12 h-12 text-white" />
            </div>
            
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="font-mono font-black text-lg text-bjp-saffron tracking-tighter">DECEMBER 2025</span>
                <span className="px-3 py-1 rounded-lg bg-ink-950 text-white text-[10px] font-black uppercase tracking-widest">
                  Tier: Municipal Corporation
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-ink-950 tracking-tight leading-tight">
                Thiruvananthapuram Corporation Falls to BJP — First Mayor in History
              </h3>
              <p className="text-ink-700 font-sans font-medium text-lg leading-relaxed max-w-4xl">
                NDA wins <span className="text-ink-950 font-black">50 of 101 wards</span>, ending 45 years of unbroken LDF rule. 
                V.V. Rajesh becomes Keralam&apos;s first BJP Municipal Corporation Mayor.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 shrink-0 w-full lg:w-auto">
                {[
                  { v: "50", l: "NDA", c: "text-bjp-saffron" },
                  { v: "29", l: "LDF", c: "text-ink-400" },
                  { v: "19", l: "UDF", c: "text-ink-400" },
                ].map((s) => (
                  <div key={s.l} className="bg-bjp-saffronsoft/30 p-6 text-center border border-bjp-saffron/10 rounded-2xl shadow-md">
                    <div className={`text-4xl font-mono font-black ${s.c} tracking-tighter`}>{s.v}</div>
                    <div className="text-[10px] mt-2 font-black uppercase tracking-widest text-ink-500">{s.l}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* 2020 Silent Revolution banner */}
        <SilentRevolution />

        {/* Charts Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-card p-10 border-bjp-saffron/10 shadow-xl">
            <LSVoteShareChart />
          </div>
          <div className="glass-card p-10 border-bjp-saffron/10 shadow-xl">
            <AssemblyVoteShareChart />
          </div>
          <div className="glass-card p-10 border-bjp-saffron/10 shadow-xl">
            <TVMWardChart />
          </div>

          {/* 2024 Breakthrough Card */}
          <div className="glass-card overflow-hidden border-bjp-saffron/20 shadow-2xl group relative">
            <div className="p-10 h-full flex flex-col relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-bjp-saffron mb-8">The Breakthrough</div>
              
              <div className="font-mono font-black text-[120px] text-ink-950/5 absolute top-4 right-8 leading-none tracking-tighter pointer-events-none">
                2024
              </div>
              
              <h3 className="text-3xl font-heading font-black text-ink-950 mb-6 tracking-tight leading-tight">
                First Keralam MP in <br /><span className="text-bjp-saffron">BJP History.</span>
              </h3>
              
              <p className="text-ink-700 font-sans font-medium text-lg leading-relaxed mb-12 flex-1">
                Suresh Gopi wins Thrissur with a 74,686-vote margin. NDA vote share rises to 19.21% statewide. 
                The fortress has been breached.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-auto">
                {[
                  { v: "1", l: "MP Elected", c: "text-bjp-saffron" },
                  { v: "74K+", l: "Win Margin", c: "text-ink-950" },
                  { v: "19.21%", l: "NDA Share", c: "text-bjp-green" },
                ].map((s) => (
                    <div key={s.l} className="bg-bjp-saffronsoft/30 p-5 text-center border border-bjp-saffron/10 rounded-xl">
                      <div className={`text-2xl font-mono font-black ${s.c}`}>{s.v}</div>
                      <div className="text-[10px] font-black mt-2 uppercase tracking-widest text-ink-400">{s.l}</div>
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
