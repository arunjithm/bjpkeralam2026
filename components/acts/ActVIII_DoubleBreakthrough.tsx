"use client";

import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import MilestoneCard from "@/components/shared/MilestoneCard";

export default function ActVIII_DoubleBreakthrough() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);
  const onStepEnter = ({ data }: { data: number }) => setCurrentStepIndex(data);

  return (
    <section className="relative min-h-screen bg-dark-900 pt-16 border-t border-white/5">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Panel: Sticky Graphic (Map/Chart) */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 md:h-[calc(100vh-6rem)] mb-12 md:mb-0">
          <div className="relative w-full h-[60vh] md:h-full bg-dark-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
            
            <div className={`absolute inset-0 transition-opacity duration-500 ${currentStepIndex !== 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <KeralaStateMap highlight={currentStepIndex === 1 ? "Thrissur" : undefined} />
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              {currentStepIndex === 2 && (
                <div className="p-8 text-center animate-fade-in w-full h-full flex items-center justify-center bg-dark-900 pointer-events-auto">
                    <MilestoneCard quote="Thrissur is taken. The unbreakable fortress has fallen." />
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
            <h1 className="text-3xl md:text-5xl font-heading text-white mt-2">The Double Breakthrough</h1>
            <p className="text-white/50 text-sm mt-2">2024 Lok Sabha & Looking to 2025</p>
          </div>

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            
            <Step data={0}>
              <div className="step-card my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 0}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl">
                  <h3 className="text-2xl font-heading text-white mb-4">The Context</h3>
                  <p className="text-white/70 leading-relaxed text-lg">History was made in 2024. Suresh Gopi won the Thrissur Lok Sabha constituency by over 74000 votes, giving the BJP its first-ever Member of Parliament from Keralam.</p>
                </div>
              </div>
            </Step>

            <Step data={1}>
              <div className="step-card my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 1}>
                <div className="border-l-4 border-bjp-saffron bg-gradient-to-r from-bjp-saffron/10 to-transparent p-8 rounded-r-2xl shadow-xl">
                  <div className="inline-block px-3 py-1 bg-bjp-saffron/20 rounded-full text-xs font-bold tracking-wider text-bjp-saffron mb-4">2024 Historic Win</div>
                  <h3 className="text-2xl font-heading text-white mb-4">Shifting Ground</h3>
                  <p className="text-white/70 leading-relaxed text-lg mb-4">Simultaneously, Rajeev Chandrasekhar engaged in a photo-finish battle in Thiruvananthapuram. The state-wide vote share rocketed to an unprecedented 16.68%, capturing over 19% in Hindu-majority belts. The stage is perfectly set for the 2025 local body elections.</p>
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
