"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

/* ── micro Counter ───────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const step = Math.max(1, Math.ceil(to / 60));
    const t = setInterval(() => setN(c => { if (c + step >= to) { clearInterval(t); return to; } return c + step; }), 18);
    return () => clearInterval(t);
  }, [to]);
  return <>{n}{suffix}</>;
}

function AnimatedValue({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const duration = 1200;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(to * eased);
      if (progress < 1) raf = window.requestAnimationFrame(step);
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [to]);
  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return <>{formatted}{suffix}</>;
}

/* ── Animated canvas particles ───────────────────────────── */
function ParticleBg() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);

    // particles: mix of saffron, gold, green-tinted
    const colors = ["rgba(255,153,51,", "rgba(255,209,51,", "rgba(255,120,0,", "rgba(200,90,0,"];
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.4,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.y -= p.speed; p.x += p.drift;
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function IntroLine({ text, delay }: { text: string; delay: number }) {
  const words = text.split(" ");
  return (
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block opacity-0"
          style={{
            animation: "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: `${delay + i * 0.12}s`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

const INTRO_LINES = [
  { text: "For 44 years, Keralam sent zero BJP MPs to Parliament.", delay: 0 },
  {
    text: "Political scientists called it structural. Journalists called it permanent. Keralam's own voters called it common sense.",
    delay: 2.2,
  },
  { text: "They were counting on you to agree.", delay: 4.8 },
];

const BEAT_COUNTERS = [
  {
    from: "10.82%",
    to: 19.21,
    decimals: 2,
    suffix: "%",
    label: "NDA vote share (2014 → 2024)",
  },
  {
    from: "0",
    to: 1,
    label: "Lok Sabha seats",
  },
  {
    from: "0",
    to: 50,
    label: "TVM Corporation wards",
  },
  {
    from: "0 MLAs",
    to: 1,
    suffix: " MLA",
    label: "First MLA (Nemom 2016)",
  },
];

const STATS = [
  { year: "2010", value: 6,     suffix: "",     type: "Corporation",  label: "TVM wards won", emoji: "🏙️" },
  { year: "2016", value: 1,     suffix: " MLA",  type: "Assembly",     label: "First breakthrough",  emoji: "🪷" },
  { year: "2024", value: 74686, suffix: "",     type: "Lok Sabha",    label: "Thrissur margin", emoji: "🏆" },
  { year: "2025", value: 50,    suffix: "/101", type: "Corporation",  label: "TVM — First Mayor", emoji: "🏛️" },
];

const JOURNEY = [
  { year: "2010", event: "6 TVM Corp wards" },
  { year: "2016", event: "First MLA — Nemom" },
  { year: "2024", event: "First MP — Thrissur" },
  { year: "2025", event: "First Mayor — TVM" },
  { year: "2026", event: "Assembly awaits" },
];

export default function ActI_BeforeDawn() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-20 overflow-hidden">

      {/* ── Animated particles ── */}
      <ParticleBg />

      {/* ── Layered warm glow behind everything ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sunrise radial from top */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none opacity-60"
          style={{ background: "radial-gradient(ellipse at top, rgba(255,153,51,0.4) 0%, rgba(255,80,0,0.1) 40%, transparent 70%)" }} />
        
        {/* LARGE LOTUS WATERMARK — Subtle & Atmospheric */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-bjp-saffron">
            <path d="M30 5c-2 0-4 2-4 5s2 5 4 5 4-2 4-5-2-5-4-5zm-8 4c-3 0-5 3-5 7s3 7 5 7 5-3 5-7-2-7-5-7zm16 0c3 0 5 3 5 7s-3 7-5 7-5-3-5-7 2-7 5-7zM14 20c-4 0-7 4-7 9s4 9 7 9 7-4 7-9-3-9-7-9zm32 0c4 0 7 4 7 9s-4 9-7 9-7-4-7-9 3-9 7-9zM30 45c-2 0-4-2-4-5s2-5 4-5 4 2 4 5-2 5-4 5z" fillRule="evenodd"/>
          </svg>
        </div>

        {/* Subtle green glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(19,136,8,0.12) 0%, transparent 70%)" }} />
        {/* Top amber line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, #FF9933 30%, #FFD166 50%, #FF9933 70%, transparent 100%)" }} />
        {/* Vignette overlay — Smooth transition to black */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.9) 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pt-28">

        {/* Beat 1 — The Weight of Impossibility */}
        <div
          className="max-w-3xl mx-auto mb-14 space-y-4 text-lg md:text-2xl font-light"
          style={{ color: "rgba(255,220,170,0.85)", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          {INTRO_LINES.map((line) => (
            <IntroLine key={line.text} text={line.text} delay={line.delay} />
          ))}
        </div>

        {/* Beat 2 — The Counter */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "5.6s" }}
        >
          {BEAT_COUNTERS.map((b) => (
            <div
              key={b.label}
              className="rounded-2xl p-4 bg-saffron-glass border border-bjp-saffron/30"
              style={{ boxShadow: "0 0 30px rgba(255,153,51,0.15)" }}
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-bjp-saffron font-black mb-2">
                {b.label}
              </div>
              <div className="flex items-baseline gap-2 justify-center">
                <span className="font-mono font-bold text-white/70 text-lg">{b.from}</span>
                <span className="text-bjp-saffron font-black">→</span>
                <span className="font-mono font-black text-gold text-2xl" style={{ textShadow: "0 0 20px rgba(255,153,51,0.5)" }}>
                  <AnimatedValue to={b.to} decimals={b.decimals} suffix={b.suffix} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Beat 3 — Payoff */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "8s" }}>
          <h1 className="font-heading font-black mb-3 leading-tight">
            <span
              className="block text-white text-3xl md:text-5xl tracking-tight"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8), 0 1px 0 rgba(255,153,51,0.4)" }}
            >
              They Said It Was Impossible.
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(3rem, 10vw, 7.5rem)",
                background: "linear-gradient(135deg, #FFE566 0%, #FF9933 45%, #FF5500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 50px rgba(255,130,0,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
              }}
            >
              THEY WERE WRONG.
            </span>
          </h1>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full opacity-0 animate-fade-in"
          style={{
            animationDelay: "8.3s",
            background: "rgba(255,153,51,0.12)",
            border: "1px solid rgba(255,153,51,0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-bjp-saffron animate-pulse" />
          <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.22em]">
            The story of BJP&apos;s rise in Keralam through numbers
          </span>
        </div>

        {/* Subhead */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light opacity-0 animate-fade-in"
          style={{
            animationDelay: "8.6s",
            color: "rgba(255,210,140,0.8)",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          For five decades, every election analyst, every exit poll, every political &ldquo;expert&rdquo; drew the same
          conclusion: Keralam is different. Keralam will never. And then Keralam did.
        </p>

        {/* Witness Counter */}
        <div
          className="max-w-3xl mx-auto rounded-2xl p-5 mb-16 opacity-0 animate-fade-in"
          style={{
            animationDelay: "8.9s",
            background: "rgba(255,120,0,0.08)",
            border: "1px solid rgba(255,153,51,0.25)",
          }}
        >
          <div className="text-[10px] uppercase tracking-[0.35em] text-bjp-saffron font-black mb-3">Witness Counter</div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono font-black text-3xl text-gold">10.82%</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,200,120,0.5)" }}>2014 NDA</span>
            </div>
            <span className="text-bjp-saffron font-black text-xl">→</span>
            <div className="flex items-baseline gap-2">
              <span className="font-mono font-black text-3xl text-gold">19.21%</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,200,120,0.5)" }}>2024 NDA</span>
            </div>
          </div>
          <p className="text-sm mt-3" style={{ color: "rgba(255,200,120,0.55)" }}>
            Across all elections since 2010, Keralam voters have cast crores of votes for NDA — rising from 10.82% in
            2014 to 19.21% in 2024.
          </p>
        </div>

        {/* ── 3D stat cards ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "9.2s" }}
        >
          {STATS.map((s) => (
            <div key={s.year}
              className="group relative rounded-2xl p-5 text-left overflow-hidden cursor-default transition-all duration-400 bg-saffron-glass"
              style={{
                border: "1px solid rgba(255,153,51,0.35)",
                transform: "perspective(600px) rotateX(2deg)",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) translateY(-4px) scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "perspective(600px) rotateX(2deg)")}
            >
              {/* Top glow edge on hover */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #FF9933, transparent)" }} />
              <div className="text-xl mb-2">{s.emoji}</div>
              <div className="text-bjp-saffron font-mono text-[10px] font-black mb-1 tracking-widest uppercase opacity-70">
                {s.type} · {s.year}
              </div>
              <div className="text-3xl md:text-4xl font-mono font-black text-gold leading-none mb-3">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,200,120,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Journey timeline strip ── */}
        <div className="mb-16 overflow-x-auto opacity-0 animate-fade-in" style={{ animationDelay: "9.4s" }}>
          <div className="inline-flex items-start min-w-max mx-auto gap-0">
            {JOURNEY.map((j, i) => {
              const isLast = i === JOURNEY.length - 1;
              const isCurrent = i === JOURNEY.length - 2;
              const dotColor = isLast ? "#138808" : isCurrent ? "#FFD166" : "#FF9933";
              const lineOpacity = isLast ? 0 : (0.15 + i * 0.2);
              return (
                <div key={j.year} className="flex items-start">
                  <div className="w-36 flex flex-col items-start">
                    <div className="w-full pt-3" style={{ borderTop: `2px solid rgba(255,153,51,${lineOpacity})` }}>
                      <div className="font-mono font-black text-sm mb-1" style={{ color: dotColor }}>{j.year}</div>
                      <div className="text-xs leading-snug" style={{ color: "rgba(255,200,120,0.55)" }}>{j.event}</div>
                    </div>
                  </div>
                  {!isLast && <div className="mt-3 w-4 border-t border-white/10 shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 19.21% highlight card — 3D ── */}
        <div
          className="relative rounded-3xl overflow-hidden mb-16 mx-auto max-w-3xl opacity-0 animate-fade-in"
          style={{
            animationDelay: "9.6s",
            background: "linear-gradient(135deg, rgba(255,120,0,0.22) 0%, rgba(20,6,0,0.96) 55%)",
            border: "1px solid rgba(255,153,51,0.35)",
            boxShadow: "0 20px 60px rgba(255,80,0,0.25), 0 0 0 1px rgba(255,200,100,0.08)",
            transform: "perspective(1200px) rotateX(1.5deg)",
          }}>
          <div className="absolute left-0 top-0 bottom-0 w-1.5"
            style={{ background: "linear-gradient(180deg, #FFD166 0%, #FF9933 50%, #138808 100%)" }} />
          <div className="p-8 md:p-10 pl-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="shrink-0 text-center">
              {/* 3D gradient number */}
              <span className="inline-block font-mono font-black leading-none text-gold"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 6rem)",
                  filter: "drop-shadow(0 0 30px rgba(255,153,51,0.6))",
                }}>
                19.21<span style={{ fontSize: "55%", opacity: 0.85 }}>%</span>
              </span>
              <div className="text-xs uppercase tracking-widest mt-2" style={{ color: "rgba(255,180,80,0.5)" }}>
                Lok Sabha 2024 · NDA Vote Share
              </div>
            </div>
            <div className="text-left">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-white mb-3"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                From 10.82% in 2014 to 19.21% in 2024.
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: "rgba(255,200,120,0.65)" }}>
                When Keralam&apos;s voters gave BJP its first-ever Lok Sabha seat in 2024, they buried six decades of political certainty.
                Today, the NDA is not just competing —{" "}
                <strong className="text-gold">it is winning</strong>.
              </p>
              <div className="flex flex-wrap gap-2">
                {["🏛️ First TVM Mayor '25", "🏆 First MP '24", "🪷 First MLA '16"].map((t) => (
                  <span key={t} className="text-xs font-semibold rounded-full px-3 py-1"
                    style={{ border: "1px solid rgba(255,153,51,0.4)", color: "#FF9933", background: "rgba(255,100,0,0.12)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ color: "rgba(255,180,80,0.35)", animationDelay: "9.8s" }}>
          <ChevronDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm">Scroll for the full data story</span>
        </div>
      </div>
    </section>
  );
}
