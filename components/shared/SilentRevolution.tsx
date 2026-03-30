"use client";

const STATS_2020 = [
  { v: "1597", l: "Gram Panchayat wards won", accent: "#FF9933" },
  { v: "19", l: "Gram Panchayats — NDA majority", accent: "#FFD166" },
  { v: "2", l: "Municipalities won", accent: "#138808" },
];

export default function SilentRevolution() {
  return (
    <div className="my-12 relative rounded-[2rem] overflow-hidden glass-card shadow-2xl border-bjp-saffron/30">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-bjp-green via-bjp-saffron to-bjp-gold" />

      <div className="p-8 pl-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="text-5xl shrink-0 grayscale hover:grayscale-0 transition-all">🌾</div>
        <div className="flex-1 min-w-0 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <span className="font-mono font-black text-xs uppercase tracking-[0.2em] text-bjp-green">
              Local Body 2020 · The Quiet Surge
            </span>
          </div>
          <h3 className="font-heading font-black text-2xl text-ink-950 mb-3 tracking-tight">
            While National Media Looked Away.
          </h3>
          <p className="text-lg leading-relaxed text-ink-700 font-sans font-medium">
            In December 2020, the BJP quietly built the grassroots foundation
            that would power 2024&apos;s historic Lok Sabha breakthrough — 1,597 panchayat wards, town by town.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 shrink-0 w-full lg:w-auto">
          {STATS_2020.map((s) => (
            <div key={s.l} className="glass-card-soft p-6 text-center border-ink-950/5 shadow-md">
              <div className="text-3xl font-mono font-black text-bjp-saffron tracking-tighter">{s.v}</div>
              <div className="text-[10px] mt-2 uppercase tracking-widest font-black text-ink-400 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
