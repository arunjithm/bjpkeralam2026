"use client";

import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import MilestoneCard from "@/components/shared/MilestoneCard";
import ScoreboardCard from "@/components/charts/ScoreboardCard";
import KeralaStateMap from "@/components/maps/KeralaStateMap";

export default function ActII_FirstSeeds() {
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
            <div className={`absolute inset-0 transition-opacity duration-500 ${currentStepIndex !== 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <KeralaStateMap 
                highlight={currentStepIndex === 0 ? "Thiruvananthapuram" : undefined} 
                dots={currentStepIndex === 1 ? [
                  { lat: 8.5241, lng: 76.9366, count: 6, label: "Trivandrum Corp" },
                  { lat: 10.7766, lng: 76.6548, count: 12, label: "Palakkad GPs" },
                  { lat: 12.4996, lng: 74.9869, count: 15, label: "Kasaragod GPs" },
                  { lat: 9.5916, lng: 76.5222, count: 4, label: "Kottayam GPs" }
                ] : []}
              />
            </div>

            {/* Overlays that appear on top of the map or replace it */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              
              {currentStepIndex === 2 && (
                <div className="p-8 text-center animate-fade-in w-full h-full flex items-center justify-center bg-white pointer-events-auto">
                  <ScoreboardCard 
                    title="2010 LOCAL BODIES — NDA BASELINE"
                    data={[
                      { label: "TVM Corporation Wards", value: "6" },
                      { label: "Municipality presence", value: "Minimal" },
                      { label: "Overall state vote share", value: "~6%" }
                    ]}
                  />
                </div>
              )}

              {currentStepIndex === null && (
                <div className="text-ink-700 text-sm italic glass-card px-4 py-2 rounded-full backdrop-blur-md">
                  Scroll to begin Act II...
                </div>
              )}
              
            </div>
            
          </div>
        </div>

        {/* Right Panel: Scrolling Text steps */}
        <div className="w-full md:w-1/2 md:pl-16 pb-32">
          <div className="sticky top-24 mb-16 md:mb-32 z-10 bg-white/90 backdrop-blur-sm py-4 border-b border-bjp-saffron/20">
            <h2 className="text-bjp-saffron uppercase tracking-widest text-sm font-bold">Act II</h2>
            <h1 className="statement-header text-3xl md:text-5xl mt-2">The First <span className="saffron-header">Seeds</span></h1>
            <p className="text-ink-700 text-sm mt-2 font-medium">2010 Local Body + 2011 Assembly</p>
          </div>

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            
            <Step data={0}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 0}>
                <div className="glass-card p-8">
                  <h3 className="font-black text-2xl text-ink-950 mb-4">The True Starting Line</h3>
                  <p className="text-ink-700 leading-relaxed text-lg">
                    While national media focused on the LDF-UDF pendulum in the assembly, a quiet shift began beneath the surface. In the 2010 local body elections, the BJP secured six ward seats in the Thiruvananthapuram Corporation.
                  </p>
                </div>
              </div>
            </Step>

            <Step data={1}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 1}>
                <div className="glass-card p-8">
                  <h3 className="font-black text-2xl text-ink-950 mb-4">Grassroots Sparks</h3>
                  <p className="text-ink-700 leading-relaxed text-lg mb-4">
                    Beyond the capital, scattered saffron dots began to appear across gram panchayats. The numbers were small, but they represented the first cracks in the bipartisan duopoly at the hyper-local level.
                  </p>
                  <p className="text-ink-700 italic text-sm border-l-2 border-bjp-saffron pl-4">
                    Panchayat data points mapped.
                  </p>
                </div>
              </div>
            </Step>

            <Step data={2}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 2}>
                <div className="glass-card p-8 border-bjp-saffron/30">
                  <MilestoneCard 
                    quote="2010. Six wards in Thiruvananthapuram Corporation. Most of Keralam didn&apos;t notice."
                  />
                </div>
              </div>
            </Step>

            <Step data={3}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 3}>
                <div className="glass-card p-8">
                  <div className="inline-block px-3 py-1 bg-bjp-saffronsoft/30 rounded-full text-xs font-bold tracking-wider text-ink-950 mb-4 uppercase">2011 Assembly</div>
                  <h3 className="font-black text-2xl text-ink-950 mb-4">The 6% Benchmark</h3>
                  <p className="text-ink-700 leading-relaxed text-lg">
                    In the 2011 Assembly election, the NDA polled about 6.06% of the state&apos;s total votes. While resulting in zero seats, the geographic spread revealed growing clusters of influence where BJP candidates crossed the 10% threshold.
                  </p>
                </div>
              </div>
            </Step>

          </Scrollama>
        </div>
      </div>
    </section>
  );
}
