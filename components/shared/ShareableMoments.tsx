"use client";

const MOMENTS = [
  {
    title: "Manjeshwar 2016",
    stat: "89",
    label: "votes",
    quote: "A handful of voters could have rewritten Keralam's timeline.",
  },
  {
    title: "Thrissur 2024",
    stat: "74686",
    label: "margin",
    quote: "The first MP arrived with the largest BJP win margin in Keralam history.",
  },
  {
    title: "TVM Corporation 2025",
    stat: "50/101",
    label: "wards",
    quote: "The capital flipped. The ground game became governance.",
  },
];

export default function ShareableMoments() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.35)", background: "rgba(255,153,51,0.08)" }}>
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">Shareable Moments</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl mb-3 text-white">
            Built for One Screenshot
          </h2>
          <p className="max-w-2xl mx-auto text-sm" style={{ color: "rgba(255,200,120,0.5)" }}>
            Three moments that capture the arc — designed to be shared as a single frame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOMENTS.map((m) => (
            <div key={m.title} className="rounded-2xl p-6 bg-saffron-glass border border-bjp-saffron/25 shadow-xl">
              <div className="text-xs uppercase tracking-widest text-bjp-saffron font-black mb-2">{m.title}</div>
              <div className="flex items-baseline gap-2 mb-3">
                <div className="font-mono font-black text-4xl text-gold">{m.stat}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">{m.label}</div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.65)" }}>
                {m.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
