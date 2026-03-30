import Link from "next/link";
import { Flame, Database, BookOpen, Radio, ExternalLink, Shield } from "lucide-react";

const STORY_SECTIONS = [
  { id: "credibility-banner", label: "Before the Dawn" },
  { id: "forty-four-wall", label: "The 44-Year Wall" },
  { id: "near-miss-gallery", label: "Near Misses" },
  { id: "thrissur-deep-dive", label: "Thrissur Breakthrough" },
  { id: "growth-section", label: "Growth by Numbers" },
  { id: "grassroots-growth", label: "Grassroots Revolution" },
  { id: "district-strength", label: "District Strength" },
  { id: "election-sandbox", label: "2026 Sandbox" },
  { id: "event-timeline", label: "The Timeline" },
];

const DATA_LINKS = [
  { href: "/2026", label: "2026 Watch", external: false },
  { href: "https://eci.gov.in", label: "Election Commission of India", external: true },
  { href: "https://sec.kerala.gov.in/home", label: "State Election Commission", external: true },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-white border-t border-white/10">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Column 1: Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-bjp-saffron shadow-lg">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-black text-base text-white leading-none">
                  Keralam&apos;s
                </p>
                <p className="font-heading font-black text-base text-bjp-saffron leading-none">
                  Saffron Dawn
                </p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A data-driven history of the BJP/NDA&apos;s rise in Keralam across every election tier from 2010 to 2025.
            </p>

            <div className="flex items-start gap-2.5 px-3.5 py-3 rounded-xl bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-white/40 leading-relaxed">
                All data sourced from the Election Commission of India and the Kerala State Election Commission. Independent data journalism project.
              </p>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">
              Accuracy · Transparency · History
            </p>
          </div>

          {/* Column 2: Story chapters */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-4 h-4 text-bjp-saffron" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                The Story
              </p>
            </div>
            <ul className="space-y-2">
              {STORY_SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`/#${s.id}`}
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors group py-0.5"
                  >
                    <span className="text-[9px] font-black text-bjp-saffron/40 group-hover:text-bjp-saffron/70 transition-colors w-4 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore & Data */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Database className="w-4 h-4 text-bjp-saffron" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                Explore
              </p>
            </div>
            <ul className="space-y-2 mb-8">
              {DATA_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors py-0.5"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors py-0.5"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Quick nav pills */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25 mb-3">
                Quick Access
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-bjp-saffron hover:border-bjp-saffron hover:text-white transition-all text-xs font-bold"
                >
                  <BookOpen className="w-3 h-3" />
                  Story
                </Link>
                <Link
                  href="/2026"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-bjp-saffron hover:border-bjp-saffron hover:text-white transition-all text-xs font-bold"
                >
                  <Radio className="w-3 h-3" />
                  2026 Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/20 font-medium">
            © {new Date().getFullYear()} Keralam&apos;s Saffron Dawn · Independent data journalism
          </p>
          <p className="text-[10px] text-white/20 font-medium">
            Data last updated: 2025 Local Body Elections
          </p>
        </div>
      </div>
    </footer>
  );
}
