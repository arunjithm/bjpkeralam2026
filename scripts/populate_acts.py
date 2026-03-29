import os

acts_data = {
    "ActIV_FirstLight": {
        "title": "First Light",
        "subtitle": "2016 Assembly Election",
        "text1": "What started as scattered local body wins culminated in a historic moment at the state level. In 2016, veteran leader O. Rajagopal won the Nemom assembly seat.",
        "text2": "The 'Gujarat of Kerala' was born. It wasn't just about one seat—the NDA vote share surged to a record 10.5% across the state, fundamentally breaking the bipolar nature of Kerala politics.",
        "quote": "The lotus has finally bloomed in the Kerala Assembly.",
        "map_title": "2016 Heatmap",
        "map_highlight": "Thiruvananthapuram"
    },
    "ActV_TheSurge": {
        "title": "The Surge",
        "subtitle": "2019 Lok Sabha Election",
        "text1": "Set against the backdrop of the Sabarimala temple agitation, the 2019 Lok Sabha elections saw intense ideological polarization.",
        "text2": "While the UDF swept the state, the NDA's underlying vote share jumped again. In Thiruvananthapuram, Kummanam Rajasekharan secured over 31% of the vote, and Pathanamthitta witnessed a massive surge, proving the NDA was a serious contender in triangular fights.",
        "quote": "The margins of defeat were shrinking; the saffron base was consolidating.",
        "map_title": "2019 Lok Sabha",
        "map_highlight": "Pathanamthitta"
    },
    "ActVI_RootsDeepen": {
        "title": "Roots Deepen",
        "subtitle": "2020 Local Body Elections",
        "text1": "The true test of a party's permanence in Kerala is its local machinery. In 2020, the BJP proved that it was no longer a party of just 'influential candidates' but possessed deep grassroots cadre strength.",
        "text2": "The party retained Palakkad Municipality and captured the Pandalam Municipality outright, while finishing as a formidable opposition in Thiruvananthapuram Corporation with 34 seats.",
        "quote": "From six wards to entire municipalities: the ground-game matures.",
        "map_title": "2020 Local Bodies",
        "map_highlight": "Palakkad"
    },
    "ActVII_TheDip": {
        "title": "The Dip That Wasn't",
        "subtitle": "2021 Assembly Election",
        "text1": "The 2021 Assembly election appeared to be a setback on paper: the NDA lost Nemom and returned to zero seats in the assembly. Critics rushed to write obituaries.",
        "text2": "However beneath the surface, the vote share held steady at roughly 11.3%. In crucial A-class constituencies like Manjeshwar, Kasaragod, and Palakkad (where Metro Man E. Sreedharan fought), the margins of defeat were razor-thin.",
        "quote": "A loss of representation, but not a loss of base. The foundation remained intact.",
        "map_title": "2021 Assembly Margins",
        "map_highlight": "Kasaragod"
    },
    "ActVIII_DoubleBreakthrough": {
        "title": "The Double Breakthrough",
        "subtitle": "2024 Lok Sabha & Looking to 2025",
        "text1": "History was made in 2024. Suresh Gopi won the Thrissur Lok Sabha constituency by over 74,000 votes, giving the BJP its first-ever Member of Parliament from Kerala.",
        "text2": "Simultaneously, Rajeev Chandrasekhar engaged in a photo-finish battle in Thiruvananthapuram. The state-wide vote share rocketed to an unprecedented 16.68%, capturing over 19% in Hindu-majority belts. The stage is perfectly set for the 2025 local body elections.",
        "quote": "Thrissur is taken. The unbreakable fortress has fallen.",
        "map_title": "2024 Historic Win",
        "map_highlight": "Thrissur"
    },
    "ActIX_DawnIsHere": {
        "title": "The Dawn is Here",
        "subtitle": "2026 Assembly - The Live Dashboard",
        "text1": "The political monopoly of the last half-century has ended. As Kerala prepares for the 2026 Assembly elections, the NDA is no longer an 'also-ran' but a central pole of the electoral arithmetic.",
        "text2": "This dashboard will update live as the 2026 results stream in, tracking exactly where the three-way fight fractures the oldest political duopoly in India.",
        "quote": "The sun rises in the east, but the Orange Dawn breaks across Kerala.",
        "map_title": "2026 Live Battleground",
        "map_highlight": ""
    }
}

template = """"use client";

import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import KeralaStateMap from "@/components/maps/KeralaStateMap";
import MilestoneCard from "@/components/shared/MilestoneCard";

export default function [COMPONENT_NAME]() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);
  const onStepEnter = ({ data }: { data: number }) => setCurrentStepIndex(data);

  return (
    <section className="relative min-h-screen bg-dark-900 pt-16 border-t border-white/5">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Panel: Sticky Graphic (Map/Chart) */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 md:h-[calc(100vh-6rem)] mb-12 md:mb-0">
          <div className="relative w-full h-[60vh] md:h-full bg-dark-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
            
            <div className={`absolute inset-0 transition-opacity duration-500 ${currentStepIndex !== 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <KeralaStateMap highlight={currentStepIndex === 1 ? "[HIGHLIGHT]" : undefined} />
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              {currentStepIndex === 2 && (
                <div className="p-8 text-center animate-fade-in w-full h-full flex items-center justify-center bg-dark-900 pointer-events-auto">
                    <MilestoneCard quote="[QUOTE]" />
                </div>
              )}
              {currentStepIndex === null && (
                <div className="text-white/30 text-sm italic bg-dark-800/80 px-4 py-2 rounded-full backdrop-blur-md">
                  Scroll to continue...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Scrolling Text steps */}
        <div className="w-full md:w-1/2 md:pl-16 pb-32">
          <div className="sticky top-24 mb-32 z-10 bg-dark-900/90 backdrop-blur-sm py-4 border-b border-bjp-saffron/30">
            <h2 className="text-bjp-saffron uppercase tracking-widest text-sm font-bold">Act</h2>
            <h1 className="text-3xl md:text-5xl font-heading text-white mt-2">[TITLE]</h1>
            <p className="text-white/50 text-sm mt-2">[SUBTITLE]</p>
          </div>

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            
            <Step data={0}>
              <div className="step-card my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 0}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl">
                  <h3 className="text-2xl font-heading text-white mb-4">The Context</h3>
                  <p className="text-white/70 leading-relaxed text-lg">[TEXT1]</p>
                </div>
              </div>
            </Step>

            <Step data={1}>
              <div className="step-card my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 1}>
                <div className="border-l-4 border-bjp-saffron bg-gradient-to-r from-bjp-saffron/10 to-transparent p-8 rounded-r-2xl shadow-xl">
                  <div className="inline-block px-3 py-1 bg-bjp-saffron/20 rounded-full text-xs font-bold tracking-wider text-bjp-saffron mb-4">[MAP_TITLE]</div>
                  <h3 className="text-2xl font-heading text-white mb-4">Shifting Ground</h3>
                  <p className="text-white/70 leading-relaxed text-lg mb-4">[TEXT2]</p>
                </div>
              </div>
            </Step>

            <Step data={2}>
              <div className="step-card my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 2}>
                <div className="bg-bjp-saffron/10 border border-bjp-saffron/30 p-8 rounded-2xl backdrop-blur-md shadow-xl">
                  <h3 className="text-xl font-heading text-white mb-2">The Legacy</h3>
                  <p className="text-white/50">Moving towards the next election phase.</p>
                </div>
              </div>
            </Step>

          </Scrollama>
        </div>
      </div>
    </section>
  );
}
"""

for comp, data in acts_data.items():
    code = template.replace("[COMPONENT_NAME]", comp)
    code = code.replace("[TITLE]", data["title"])
    code = code.replace("[SUBTITLE]", data["subtitle"])
    code = code.replace("[TEXT1]", data["text1"])
    code = code.replace("[TEXT2]", data["text2"])
    code = code.replace("[QUOTE]", data["quote"].replace("'", "&apos;"))
    code = code.replace("[MAP_TITLE]", data["map_title"])
    code = code.replace("[HIGHLIGHT]", data["map_highlight"])
    
    with open(f"components/acts/{comp}.tsx", "w") as f:
        f.write(code)

print("Generated all Act components successfully!")
