"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Menu, X, Database, BookOpen, Radio } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "The Story", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/2026", label: "2026 Watch", icon: <Radio className="w-4 h-4" /> },
];

const STORY_ACTS = [
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-bjp-saffron/10 shadow-sm">
        {/* Reading Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-bjp-saffron via-bjp-gold to-bjp-green transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="p-1.5 rounded-lg bg-bjp-saffron shadow-lg group-hover:scale-110 transition-transform">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-black text-lg tracking-tight text-ink-950 hidden sm:block">
                Keralam&apos;s <span className="text-bjp-saffron">Saffron Dawn</span>
              </span>
              <span className="font-heading font-black text-base tracking-tight text-ink-950 sm:hidden">
                <span className="text-bjp-saffron">Saffron Dawn</span>
              </span>
            </Link>

            {/* Desktop Nav Links — pill tabs */}
            <div className="hidden md:flex items-center gap-1 bg-neutral-50 rounded-xl p-1 border border-neutral-100">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                      isActive
                        ? "bg-bjp-saffron text-white shadow-md shadow-bjp-saffron/20"
                        : "text-ink-700 hover:bg-white hover:text-bjp-saffron hover:shadow-sm"
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 text-ink-700 hover:bg-bjp-saffronsoft hover:text-bjp-saffron transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-ink-950 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-bjp-saffron shadow-lg">
              <Flame className="h-4 w-4 text-white" />
            </div>
            <span className="font-heading font-black text-sm text-white">
              Saffron <span className="text-bjp-saffron">Dawn</span>
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">

          {/* Main Pages */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-3">Pages</p>
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-bjp-saffron text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className={isActive ? "text-white" : "text-bjp-saffron"}>{link.icon}</span>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Jump to Story Section */}
          {pathname === "/" && (
            <div>
              <div className="h-px bg-white/10 mb-6" />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-3">
                Jump to Section
              </p>
              <div className="space-y-1">
                {STORY_ACTS.map((act, i) => (
                  <button
                    key={act.id}
                    onClick={() => scrollToSection(act.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-all text-left"
                  >
                    <span className="text-[10px] font-black text-bjp-saffron/60 w-4 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {act.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-5 border-t border-white/10">
          <p className="text-[10px] text-white/25 font-medium leading-relaxed">
            All data from Election Commission of India · Independent data journalism
          </p>
        </div>
      </aside>
    </>
  );
}
