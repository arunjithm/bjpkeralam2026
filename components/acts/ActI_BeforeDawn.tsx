"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown, Trophy, Landmark, TrendingUp, Info, ArrowRight } from "lucide-react";
import Image from "next/image";

function useCountUp(to: number, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(to * eased);
      if (progress < 1) rafRef.current = window.requestAnimationFrame(step);
    };
    rafRef.current = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, [to, duration]);
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}

function CounterCard({
  label,
  to,
  suffix,
  decimals,
  icon,
  sub,
}: {
  label: string;
  to: number;
  suffix?: string;
  decimals?: number;
  icon: React.ReactNode;
  sub: string;
}) {
  const display = useCountUp(to, 2000, decimals ?? 0);
  return (
    <div className="shrink-0 w-44 sm:w-auto snap-start glass-card px-5 py-5 sm:p-6 bg-white/90 backdrop-blur-md flex flex-col items-center text-center group counter-card-hover">
      <div className="flex items-center gap-2 text-bjp-saffron mb-3">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest leading-tight">{label}</span>
      </div>
      <div className="text-3xl sm:text-4xl font-mono font-black text-ink-950 group-hover:text-bjp-saffron transition-colors tabular-nums">
        {display}{suffix ?? ""}
      </div>
      <div className="text-[9px] text-ink-400 font-bold uppercase tracking-widest mt-1.5">{sub}</div>
    </div>
  );
}

const COUNTERS = [
  {
    label: "NDA Vote Share",
    to: 19.21,
    decimals: 2,
    suffix: "%",
    icon: <TrendingUp className="w-3.5 h-3.5" />,
    sub: "Lok Sabha 2024",
  },
  {
    label: "Lok Sabha Seats",
    to: 1,
    decimals: 0,
    suffix: "",
    icon: <Trophy className="w-3.5 h-3.5" />,
    sub: "Historic Breakthrough",
  },
  {
    label: "Corporation Wards",
    to: 50,
    decimals: 0,
    suffix: "",
    icon: <Landmark className="w-3.5 h-3.5" />,
    sub: "TVM 2025 · First Mayor",
  },
];

const JOURNEY = [
  { year: "2010", label: "6 TVM Wards" },
  { year: "2016", label: "First MLA" },
  { year: "2024", label: "First MP" },
  { year: "2025", label: "First Mayor" },
  { year: "2026", label: "Assembly →" },
];

export default function ActIBeforeDawn() {
  const scrollToNext = () => {
    const next = document.getElementById("credibility-banner");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">

      {/* ── Ambient background glow ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/2 w-[800px] h-[800px] rounded-full hero-glow"
          style={{
            background: "radial-gradient(circle, #FF9933 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.04] rounded-full"
          style={{ background: "radial-gradient(circle, #138808 0%, transparent 70%)" }}
        />
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT (hidden on md+)
      ═══════════════════════════════════════════ */}
      <div className="md:hidden relative z-10 flex flex-col min-h-screen">

        {/* Portrait as a subtle background wash */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="relative w-full h-full">
            <Image
              src="/hero/leadership.png"
              alt="Leadership"
              fill
              className="object-contain object-bottom opacity-[0.07]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/70" />
          </div>
        </div>

        {/* Mobile text + content */}
        <div className="relative z-10 flex flex-col flex-1 pt-24 px-5 pb-10">

          {/* Badge */}
          <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-950 border border-white/10 mb-5">
            <div className="p-0.5 rounded bg-bjp-saffron">
              <Info className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-white text-[9px] font-black uppercase tracking-[0.2em]">
              Audited Election Data
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-heading font-black tracking-tighter text-ink-950 leading-[1.05] mb-4"
            style={{ fontSize: "clamp(1.9rem, 7.5vw, 2.6rem)" }}
          >
            Keralam&apos;s <br />
            <span className="text-bjp-saffron">Saffron Dawn.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-[0.95rem] text-ink-700 font-medium leading-relaxed mb-6 max-w-sm">
            For 44 years, they said Keralam would never.{" "}
            <span className="font-black text-ink-950">In 2024, Keralam proved them wrong.</span>
          </p>

          {/* Counter strip — horizontal scroll snap */}
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 no-scrollbar mb-6">
            {COUNTERS.map((c) => (
              <CounterCard key={c.label} {...c} />
            ))}
          </div>

          {/* Journey pills */}
          <div className="flex gap-1.5 flex-wrap mb-7">
            {JOURNEY.map((j, i) => (
              <div key={j.year} className="flex items-center gap-1.5">
                <div
                  className={`px-2.5 py-1 rounded-full text-[10px] font-black border ${
                    i === JOURNEY.length - 1
                      ? "bg-bjp-saffron/10 border-bjp-saffron/30 text-bjp-saffron"
                      : "bg-neutral-50 border-neutral-200 text-ink-600"
                  }`}
                >
                  <span className="text-ink-400 mr-1">{j.year}</span>
                  {j.label}
                </div>
                {i < JOURNEY.length - 1 && (
                  <ArrowRight className="w-2.5 h-2.5 text-ink-300 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Chapter hint */}
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-400 mb-4">
            Chapter 1 of 9 · Scroll to begin
          </p>

          {/* CTA */}
          <button
            onClick={scrollToNext}
            className="btn-saffron self-start px-7 py-4 gap-3 text-[0.95rem] font-black rounded-2xl shadow-[0_12px_30px_rgba(255,153,51,0.25)]"
          >
            Begin Exploration
            <ChevronDown className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT (hidden below md)
      ═══════════════════════════════════════════ */}
      <div className="hidden md:flex relative z-10 min-h-screen">

        {/* Left: Text + data (58%) */}
        <div className="w-[58%] flex flex-col justify-center pt-28 pb-20 pl-8 lg:pl-16 xl:pl-24 pr-8">

          {/* Badge */}
          <div className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-lg bg-ink-950 shadow-2xl border border-white/10 mb-8">
            <div className="p-1 rounded bg-bjp-saffron">
              <Info className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
              Audited Election Data Analysis
            </span>
          </div>

          {/* H1 */}
          <h1 className="statement-header mb-6">
            Keralam&apos;s <br />
            <span className="saffron-header">Saffron Dawn.</span>
          </h1>

          {/* Quote */}
          <blockquote className="text-xl lg:text-2xl font-quote text-ink-900 max-w-xl italic font-medium mb-6 leading-relaxed">
            &ldquo;For 44 years, they said Keralam would never. <br />
            In 2024, Keralam proved them wrong.&rdquo;
          </blockquote>

          <p className="text-lg text-ink-700 max-w-lg leading-relaxed font-sans font-medium mb-10">
            Explore the data-driven evolution of a political movement that became a decisive force in the South.
          </p>

          {/* Counters */}
          <div className="flex gap-4 mb-10 flex-wrap">
            {COUNTERS.map((c) => (
              <CounterCard key={c.label} {...c} />
            ))}
          </div>

          {/* Journey pills */}
          <div className="flex gap-2 flex-wrap mb-10">
            {JOURNEY.map((j, i) => (
              <div key={j.year} className="flex items-center gap-2">
                <div
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black border ${
                    i === JOURNEY.length - 1
                      ? "bg-bjp-saffron/10 border-bjp-saffron/30 text-bjp-saffron"
                      : "bg-neutral-50 border-neutral-200 text-ink-600"
                  }`}
                >
                  <span className="text-ink-400 mr-1">{j.year}</span>
                  {j.label}
                </div>
                {i < JOURNEY.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-ink-300 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* CTA + chapter indicator */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToNext}
              className="btn-saffron px-10 py-5 gap-4 text-lg font-black rounded-2xl shadow-[0_20px_50px_rgba(255,153,51,0.3)]"
            >
              Begin Exploration
              <ChevronDown className="w-6 h-6 text-white" />
            </button>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-400">
              Chapter 1 of 9
            </span>
          </div>
        </div>

        {/* Right: Portrait (42%) */}
        <div className="w-[42%] relative flex items-end justify-center pt-20">
          <div className="relative w-full h-full max-w-[520px]">
            <Image
              src="/hero/leadership.png"
              alt="Leadership Portrait"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-glow {
          opacity: 0.08;
          animation: hero-pulse 10s ease-in-out infinite;
        }
        @keyframes hero-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.13; }
        }
        @media (hover: hover) {
          .counter-card-hover:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
