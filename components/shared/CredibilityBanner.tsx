"use client";

import { ShieldCheck, Database, FileCheck } from "lucide-react";

const SOURCES = [
  { label: "Election Commission", sub: "LS + Assembly results", icon: <ShieldCheck className="w-6 h-6" /> },
  { label: "State Election Comm.", sub: "Local body data", icon: <Database className="w-6 h-6" /> },
  { label: "Verified Reporting", sub: "National coverage", icon: <FileCheck className="w-6 h-6" /> },
];

export default function CredibilityBanner() {
  return (
    <section id="credibility-banner" className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-bjp-saffronsoft/30 overflow-hidden border-y border-bjp-saffron/10">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3" />
              Data Integrity Verified
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-ink-950 mb-6 tracking-tight leading-tight">
              Every percentage point is <br /><span className="text-bjp-saffron">source‑checked.</span>
            </h3>
            <p className="text-ink-700 text-lg leading-relaxed font-sans font-medium">
              This project is built from audited public election data and independently verified reporting. 
              Transparency is our baseline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {SOURCES.map((s) => (
              <div key={s.label} className="glass-card p-4 text-left transition-all shadow-sm group">
                <div className="text-bjp-saffron mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-ink-950 mb-0.5">{s.label}</div>
                <div className="text-[9px] text-ink-400 font-bold leading-none">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
