import ActIBeforeDawn from "@/components/acts/ActI_BeforeDawn";
import CredibilityBanner from "@/components/shared/CredibilityBanner";
import FortyFourYearWall from "@/components/shared/FortyFourYearWall";
import NearMissGallery from "@/components/shared/NearMissGallery";
import ThrissurDeepDive from "@/components/shared/ThrissurDeepDive";
import OneVoteAtATime from "@/components/shared/OneVoteAtATime";
import ShareableMoments from "@/components/shared/ShareableMoments";
import GrowthSection from "@/components/shared/GrowthSection";
import GrassrootsGrowth from "@/components/shared/GrassrootsGrowth";
import VoteShiftFlow from "@/components/shared/VoteShiftFlow";
import DistrictStrength from "@/components/shared/DistrictStrength";
import ElectionSandbox from "@/components/shared/ElectionSandbox";
import OppositionClaims from "@/components/shared/OppositionClaims";
import EventTimeline from "@/components/shared/EventTimeline";

export default function Home() {
  return (
    <main className="min-h-screen text-white font-sans overflow-x-hidden">

      {/* 1 — Hero: dramatic hook, counters, journey strip */}
      <ActIBeforeDawn />

      {/* 2 — Credibility banner */}
      <CredibilityBanner />

      {/* 3 — The 44-year wall */}
      <FortyFourYearWall />

      {/* 4 — Near-Miss Gallery: razor-thin contests */}
      <NearMissGallery />

      {/* 5 — Thrissur Deep Dive: "Digital Scrollytelling" of the first MP win */}
      <ThrissurDeepDive />

      {/* 6 — One Vote at a Time: Human section */}
      <OneVoteAtATime />

      {/* 7 — Shareable Moments */}
      <ShareableMoments />

      {/* 8 — Growth charts + 2025 TVM banner + 2024 Thrissur card */}
      <GrowthSection />

      {/* 9 — Grassroots Growth: The 1919 ward silent revolution (2010-2025) */}
      <GrassrootsGrowth />

      {/* 10 — Vote Shift Flow: The erosion of the duopoly */}
      <VoteShiftFlow />

      {/* 11 — District-wise strength tiles */}
      <DistrictStrength />

      {/* 12 — Election Sandbox: Predict 2026 results */}
      <ElectionSandbox />

      {/* 13 — "They Said It Would Never Happen" opposition claims */}
      <OppositionClaims />

      {/* 14 — Vertical timeline: Zero to One */}
      <EventTimeline />

      <footer className="py-20 border-t text-center text-sm"
        style={{ borderColor: "rgba(255,153,51,0.05)", color: "rgba(255,200,120,0.2)" }}>
        <p className="font-heading font-black tracking-widest text-[10px] uppercase mb-4 opacity-50">Keralam&apos;s Saffron Dawn</p>
        <p className="max-w-md mx-auto opacity-40">All electoral data sourced from the Election Commission of India and verified national news reports.</p>
        <p className="mt-4 opacity-30 italic">Developed for accuracy, transparency, and data-driven journalism.</p>
      </footer>
    </main>
  );
}
