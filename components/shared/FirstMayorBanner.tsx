import { Crown, MapPin, Calendar, Users, TrendingUp } from "lucide-react";

const WARD_DATA = [
  { label: "NDA Wards Won", value: "50", sub: "of 101 total" },
  { label: "LDF Wards", value: "29", sub: "Routed from power" },
  { label: "UDF Wards", value: "19", sub: "Three-way contest" },
  { label: "Years Ended", value: "45", sub: "Of LDF rule" },
];

export default function FirstMayorBanner() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-ink-950">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] opacity-[0.08] rounded-full"
          style={{
            background: "radial-gradient(circle, #FF9933 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-[0.05] rounded-full"
          style={{
            background: "radial-gradient(circle, #138808 0%, transparent 70%)",
            transform: "translateY(-50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bjp-saffron/15 border border-bjp-saffron/30 mb-8">
          <Crown className="w-3.5 h-3.5 text-bjp-saffron" />
          <span className="text-bjp-saffron text-[10px] font-black uppercase tracking-[0.25em]">
            Milestone · December 2025
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Narrative */}
          <div className="space-y-6">
            <h2 className="font-heading font-black text-white leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              Thiruvananthapuram&apos;s{" "}
              <span className="text-bjp-saffron">First BJP Mayor.</span>
            </h2>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
              December 2025. The NDA won 50 of 101 wards in the Thiruvananthapuram Corporation election — ending 45 unbroken years of LDF rule and installing <strong className="text-white">V.V. Rajesh</strong> as Kerala&apos;s first BJP Municipal Corporation Mayor.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Calendar className="w-4 h-4 text-bjp-saffron shrink-0" />
                <span>December 2025 · Local Body Elections, Tier 1</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-bjp-saffron shrink-0" />
                <span>Thiruvananthapuram Municipal Corporation</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Users className="w-4 h-4 text-bjp-saffron shrink-0" />
                <span>Mayor: V.V. Rajesh — Kerala&apos;s first BJP Corporation Mayor</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <TrendingUp className="w-4 h-4 text-bjp-saffron shrink-0" />
                <span>From 6 wards in 2010 → 50 wards in 2025 (+733%)</span>
              </div>
            </div>

            <blockquote className="border-l-2 border-bjp-saffron/50 pl-4 italic text-white/50 text-sm font-quote leading-relaxed">
              &ldquo;What began in 6 wards in 2010 became a majority in 50.
              Ward by ward. Year by year. The Saffron Dawn was patient.&rdquo;
            </blockquote>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-3">
            {WARD_DATA.map((d) => (
              <div
                key={d.label}
                className="animated-border-dark p-5 md:p-6 flex flex-col items-center text-center group"
              >
                <div className="text-3xl md:text-4xl font-mono font-black text-bjp-saffron mb-1 group-hover:scale-110 transition-transform">
                  {d.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white mb-1">
                  {d.label}
                </div>
                <div className="text-[10px] text-white/30 font-medium">{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
