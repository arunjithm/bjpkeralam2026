"use client";

const SOURCES = [
  { label: "Election Commission of India", sub: "Lok Sabha + Assembly results" },
  { label: "Keralam State Election Commission", sub: "Local body data" },
  { label: "Verified national reporting", sub: "Result-day coverage" },
];

export default function CredibilityBanner() {
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-2xl p-6 bg-saffron-glass border border-bjp-saffron/25 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-bjp-saffron font-black mb-2">
                Credibility Banner
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">Every number is source‑checked</h3>
              <p className="text-sm" style={{ color: "rgba(255,200,120,0.65)" }}>
                This project is built from public election data and independently verified reporting. Where figures
                are unverified, they are withheld or marked as pending.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
              {SOURCES.map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center bg-black/40 border border-white/10">
                  <div className="text-xs font-black uppercase tracking-widest text-white/70">{s.label}</div>
                  <div className="text-[10px] mt-2 text-white/40">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
