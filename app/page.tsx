import ActIBeforeDawn from "@/components/acts/ActI_BeforeDawn";
import Manifesto from "@/components/shared/Manifesto";
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
import SiteFooter from "@/components/shared/SiteFooter";
import FirstMayorBanner from "@/components/shared/FirstMayorBanner";
import SabarimaIaEffect from "@/components/shared/SabarimalaEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden selection:bg-bjp-saffron/30">

      {/* 1 — Hero: dramatic hook, counters, journey strip */}
      <ActIBeforeDawn />

      {/* 2 — Credibility banner */}
      <div id="credibility-banner">
        <CredibilityBanner />
      </div>

      {/* 3 — The 44-year wall */}
      <div id="forty-four-wall">
        <FortyFourYearWall />
      </div>

      {/* 4 — Near-Miss Gallery: razor-thin contests */}
      <div id="near-miss-gallery">
        <NearMissGallery />
      </div>

      {/* 5 — Thrissur Deep Dive */}
      <div id="thrissur-deep-dive">
        <ThrissurDeepDive />
      </div>

      {/* 6 — The Sabarimala Effect: 2018 → 2019 swing analysis */}
      <SabarimaIaEffect />

      {/* 7 — One Vote at a Time: Human section */}
      <OneVoteAtATime />

      {/* 8 — Shareable Moments */}
      <ShareableMoments />

      {/* 9 — Growth charts + 2025 TVM banner + 2024 Thrissur card */}
      <div id="growth-section">
        <GrowthSection />
      </div>

      {/* 10 — First Mayor story: V.V. Rajesh & TVM 2025 */}
      <FirstMayorBanner />

      {/* 11 — Grassroots Growth: The 1919 ward silent revolution (2010–2025) */}
      <div id="grassroots-growth">
        <GrassrootsGrowth />
      </div>

      {/* 12 — Vote Shift Flow: The erosion of the duopoly */}
      <VoteShiftFlow />

      {/* 13 — District-wise strength tiles */}
      <div id="district-strength">
        <DistrictStrength />
      </div>

      {/* 14 — Election Sandbox: Predict 2026 results */}
      <div id="election-sandbox">
        <ElectionSandbox />
      </div>

      {/* 15 — "They Said It Would Never Happen" opposition claims */}
      <OppositionClaims />

      {/* 16 — Vertical timeline: Zero to One */}
      <div id="event-timeline">
        <EventTimeline />
      </div>

      {/* The Manifesto — Closing Sequence */}
      <Manifesto />

      {/* Rich Footer */}
      <SiteFooter />
    </main>
  );
}
