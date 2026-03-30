import { Radio, MapPin, TrendingUp, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const SEATS_TO_WATCH = [
  {
    constituency: "Nemom",
    district: "Thiruvananthapuram",
    context: "BJP's only Assembly seat (2016). Lost in 2021 by 3,949. Redemption target.",
    margin2021: "–3,949",
    outlook: "High priority",
    outlookColor: "text-bjp-saffron",
  },
  {
    constituency: "Thrissur",
    district: "Thrissur",
    context: "NDA won Lok Sabha 2024 here by 74,686. Assembly segments must convert.",
    margin2021: "–6,200 est.",
    outlook: "Strong potential",
    outlookColor: "text-bjp-green",
  },
  {
    constituency: "Palakkad",
    district: "Palakkad",
    context: "Sreedharan near-miss 2021 (–3,859). NDA's strongest central Kerala push.",
    margin2021: "–3,859",
    outlook: "High priority",
    outlookColor: "text-bjp-saffron",
  },
  {
    constituency: "Kasaragod",
    district: "Kasaragod",
    context: "Northern stronghold. 25% vote share in 2024 LS. First north Kerala seat possible.",
    margin2021: "–4,100 est.",
    outlook: "Watching closely",
    outlookColor: "text-blue-500",
  },
  {
    constituency: "Manjeshwar",
    district: "Kasaragod",
    context: "89-vote near-miss in 2016. Consistent strong finish.",
    margin2021: "–5,200 est.",
    outlook: "Watching closely",
    outlookColor: "text-blue-500",
  },
  {
    constituency: "Attingal",
    district: "Thiruvananthapuram",
    context: "TVM district expansion post-2025 corporation win. Ripple effect target.",
    margin2021: "–7,800 est.",
    outlook: "Rising seat",
    outlookColor: "text-purple-500",
  },
];

const KEY_METRICS = [
  { label: "Projected Seats", value: "11+", sub: "Baseline estimate (2025 momentum)" },
  { label: "Constituencies Led", value: "11", sub: "NDA led in 2024 Lok Sabha segments" },
  { label: "Swing Needed", value: "2–3%", sub: "To flip the 6 near-miss seats" },
  { label: "Seats to Watch", value: "15", sub: "Constituencies with <5% gap in 2021" },
];

export default function Live2026() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="pt-8 pb-12 border-b border-bjp-saffron/15 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-950 border border-white/10 mb-6">
            <Radio className="w-3.5 h-3.5 text-bjp-saffron" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">
              2026 Assembly Election Watch
            </span>
          </div>

          <h1
            className="font-heading font-black text-ink-950 leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            The Final Frontier:{" "}
            <span className="text-bjp-saffron">Kerala Assembly 2026.</span>
          </h1>

          <p className="text-base md:text-lg text-ink-700 max-w-2xl leading-relaxed font-medium">
            In 2024, the NDA led in 11 of Kerala&apos;s 140 assembly segments within Lok Sabha constituencies. In 2025, they won the capital city&apos;s corporation. The 2026 Kerala Assembly election is the next frontier — and the data says it will be the closest NDA performance yet.
          </p>
        </div>

        {/* Live status notice */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-bjp-saffron/8 border border-bjp-saffron/20 mb-10">
          <div className="p-2 rounded-xl bg-bjp-saffron text-white shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="font-black text-ink-950 text-sm mb-1">
              Results go live here after April 9, 2026
            </p>
            <p className="text-ink-600 text-sm leading-relaxed">
              This page will update in real-time with constituency-wise results as they are declared. Until then, explore our pre-election analysis, seats to watch, and the projection engine.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {KEY_METRICS.map((m) => (
            <div key={m.label} className="glass-card p-5 text-center">
              <div className="text-2xl md:text-3xl font-mono font-black text-bjp-saffron mb-1">{m.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-ink-950 mb-1">{m.label}</div>
              <div className="text-[10px] text-ink-400 font-medium leading-tight">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Seats to Watch */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-5 h-5 text-bjp-saffron" />
            <h2 className="text-xl md:text-2xl font-heading font-black text-ink-950">
              Seats to Watch
            </h2>
            <span className="px-2.5 py-1 rounded-full bg-bjp-saffron/10 text-bjp-saffron text-xs font-black">
              {SEATS_TO_WATCH.length} seats
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEATS_TO_WATCH.map((seat) => (
              <div
                key={seat.constituency}
                className="bg-white border border-neutral-100 hover:border-bjp-saffron/30 rounded-2xl p-5 transition-all hover:shadow-md group"
              >
                {/* Constituency name */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-heading font-black text-ink-950 text-base leading-tight">
                    {seat.constituency}
                  </h3>
                  <span className={`text-[10px] font-black shrink-0 ${seat.outlookColor}`}>
                    {seat.outlook}
                  </span>
                </div>

                {/* District */}
                <div className="flex items-center gap-1.5 text-xs text-ink-500 mb-3">
                  <MapPin className="w-3 h-3 text-bjp-saffron shrink-0" />
                  {seat.district} District
                </div>

                {/* Context */}
                <p className="text-xs text-ink-600 leading-relaxed mb-4">{seat.context}</p>

                {/* 2021 margin */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-ink-400">
                    2021 Margin
                  </span>
                  <span className="font-mono font-black text-sm text-red-500">
                    {seat.margin2021}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projection engine link */}
        <div className="rounded-2xl bg-ink-950 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-bjp-saffron mb-2">
              Interactive Tool
            </p>
            <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-2">
              Run the 2026 Election Sandbox
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Adjust turnout assumptions and swing estimates to project the NDA seat count. Based on 2025 local body data and 2024 Lok Sabha segment leads.
            </p>
          </div>
          <Link
            href="/#election-sandbox"
            className="flex items-center gap-3 px-6 py-4 bg-bjp-saffron text-white rounded-2xl font-black text-sm hover:bg-bjp-saffrondark transition-colors shrink-0 shadow-lg shadow-bjp-saffron/20"
          >
            Open Sandbox
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
