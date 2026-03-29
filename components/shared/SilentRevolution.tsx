"use client";

const STATS_2020 = [
  { v: "1597", l: "Gram Panchayat wards won", accent: "#FF9933" },
  { v: "19", l: "Gram Panchayats — NDA majority", accent: "#FFD166" },
  { v: "2", l: "Municipalities won (Palakkad + Pandalam)", accent: "#138808" },
];

export default function SilentRevolution() {
  return (
    <div className="my-10 relative rounded-2xl overflow-hidden bg-saffron-glass shadow-[0_0_60px_rgba(255,153,51,0.35)]"
      style={{
        border: "1px solid rgba(255,153,51,0.5)",
      }}>
      {/* Top accent */}
      <div className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent, #138808, #FF9933, transparent)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: "linear-gradient(to bottom, #138808, #FF9933, #FFD166)" }} />

      <div className="p-6 pl-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="text-4xl shrink-0">🌾</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono font-black text-xs uppercase tracking-widest" style={{ color: "#138808" }}>
              Local Body 2020 · The Quiet Surge
            </span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            While National Media Looked Away
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.6)" }}>
            In December 2020, while COVID dominated headlines, the BJP quietly built the grassroots foundation
            that would power 2024&apos;s historic Lok Sabha breakthrough — 1597 panchayat wards, town by town.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0 w-full md:w-auto">
          {STATS_2020.map((s) => (
            <div key={s.l} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="text-2xl font-mono font-black text-gold" style={{ textShadow: "0 0 20px rgba(255,153,51,0.5)" }}>{s.v}</div>
              <div className="text-[10px] mt-1 uppercase tracking-wider leading-tight" style={{ color: "rgba(255,200,120,0.5)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
