"use client";

import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import MilestoneCard from "@/components/shared/MilestoneCard";
import KeralaStateMap from "@/components/maps/KeralaStateMap";

export default function ActIII_GrowingRoots() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);

  const onStepEnter = ({ data }: { data: number }) => {
    setCurrentStepIndex(data);
  };

  return (
    <section className="relative min-h-screen bg-white pt-16">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Panel: Sticky Graphic (Map/Chart) */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 md:h-[calc(100vh-6rem)] mb-12 md:mb-0">
          <div className="relative w-full h-[60vh] md:h-full glass-card overflow-hidden flex items-center justify-center">
            
            {/* Map is ALWAYS mounted to prevent 6MB re-parsing lag */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${currentStepIndex !== 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <KeralaStateMap highlight={currentStepIndex === 0 ? "Thiruvananthapuram" : undefined} />
            </div>

            {/* Overlays that appear on top of the map or replace it */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              {currentStepIndex === 1 && (
                <div className="p-8 text-center animate-fade-in w-full h-full flex items-center justify-center bg-white pointer-events-auto">
                  <div className="w-full max-w-md">
                    <h3 className="font-black text-xl text-ink-950 mb-6">TVM Corporation Wards</h3>
                    <div className="flex items-end justify-center space-x-12 h-64 border-b border-bjp-saffron/10 pb-2">
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-mono text-ink-700 mb-2">6</span>
                        <div className="w-16 bg-bjp-saffron/20 h-8 rounded-t-md transition-all duration-1000"></div>
                        <span className="mt-4 text-sm text-ink-700 font-bold uppercase tracking-widest">2010</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-mono text-bjp-saffron font-black mb-2 animate-pulse">34</span>
                        <div className="w-16 bg-bjp-saffron h-48 rounded-t-md transition-all duration-1000 shadow-lg shadow-bjp-saffron/20"></div>
                        <span className="mt-4 text-sm text-bjp-saffron font-black uppercase tracking-widest">2015</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStepIndex === null && (
                <div className="text-ink-700 text-sm italic glass-card px-4 py-2 rounded-full backdrop-blur-md">
                  Scroll to begin Act III...
                </div>
              )}
            </div>
            
          </div>
        </div>

        {/* Right Panel: Scrolling Text steps */}
        <div className="w-full md:w-1/2 md:pl-16 pb-32">
          <div className="sticky top-24 mb-16 md:mb-32 z-10 bg-white/90 backdrop-blur-sm py-4 border-b border-bjp-saffron/20">
            <h2 className="text-bjp-saffron uppercase tracking-widest text-sm font-bold">Act III</h2>
            <h1 className="statement-header text-3xl md:text-5xl mt-2">Growing <span className="saffron-header">Roots</span></h1>
            <p className="text-ink-700 text-sm mt-2 font-medium">2014 Lok Sabha + 2015 Local Body</p>
          </div>

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            
            <Step data={0}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 0}>
                <div className="glass-card p-8">
                  <div className="inline-block px-3 py-1 bg-bjp-saffronsoft/30 rounded-full text-xs font-bold tracking-wider text-ink-950 mb-4 uppercase">2014 Lok Sabha</div>
                  <h3 className="font-black text-2xl text-ink-950 mb-4">The Bridge Year</h3>
                  <p className="text-ink-700 leading-relaxed text-lg">
                    Riding the national wave, BJP Keralam saw its vote share tick upwards state-wide. While zero seats were won, the constituency-level heatmap revealed sharp gains in specific pockets, setting the stage for the crucial local elections ahead.
                  </p>
                </div>
              </div>
            </Step>

            <Step data={1}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 1}>
                <div className="glass-card p-8">
                  <div className="inline-block px-3 py-1 bg-bjp-saffronsoft/30 rounded-full text-xs font-bold tracking-wider text-ink-950 mb-4 uppercase">2015 Local Bodies</div>
                  <h3 className="font-black text-2xl text-ink-950 mb-4">The Grassroots Explosion</h3>
                  <p className="text-ink-700 leading-relaxed text-lg mb-4">
                    In just five years, the BJP exploded its presence in the Thiruvananthapuram Corporation, surging from 6 wards to 34 wards — a massive 467% increase that stunned political observers.
                  </p>
                </div>
              </div>
            </Step>

            <Step data={2}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 2}>
                <div className="glass-card p-8 border-bjp-saffron/30">
                  <MilestoneCard 
                    quote="While the state watched Assembly elections, BJP was quietly winning street by street."
                  />
                </div>
              </div>
            </Step>

          </Scrollama>
        </div>
      </div>
    </section>
  );
}
