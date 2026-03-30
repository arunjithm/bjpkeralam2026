"use client";

import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import MilestoneCard from "@/components/shared/MilestoneCard";
import KeralaStateMap from "@/components/maps/KeralaStateMap";

export default function ActVII_TheDip() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);
  const onStepEnter = ({ data }: { data: number }) => setCurrentStepIndex(data);

  return (
    <section className="relative min-h-screen bg-white pt-16">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Panel: Sticky Graphic (Map/Chart) */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 md:h-[calc(100vh-6rem)] mb-12 md:mb-0">
          <div className="relative w-full h-[60vh] md:h-full glass-card overflow-hidden flex items-center justify-center">
            
            <div className={`absolute inset-0 transition-opacity duration-500 ${currentStepIndex !== 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <KeralaStateMap highlight={currentStepIndex === 1 ? "Kasaragod" : undefined} />
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              {currentStepIndex === 2 && (
                <div className="p-8 text-center animate-fade-in w-full h-full flex items-center justify-center bg-white pointer-events-auto">
                    <MilestoneCard quote="A loss of representation, but not a loss of base. The foundation remained intact." />
                </div>
              )}
              {currentStepIndex === null && (
                <div className="text-ink-700 text-sm italic glass-card px-4 py-2 rounded-full backdrop-blur-md">
                  Scroll to continue...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Scrolling Text steps */}
        <div className="w-full md:w-1/2 md:pl-16 pb-32">
          <div className="sticky top-24 mb-16 md:mb-32 z-10 bg-white/90 backdrop-blur-sm py-4 border-b border-bjp-saffron/20">
            <h2 className="text-bjp-saffron uppercase tracking-widest text-sm font-bold">Act VII</h2>
            <h1 className="statement-header text-3xl md:text-5xl mt-2">The Dip That <span className="saffron-header">Wasn&apos;t</span></h1>
            <p className="text-ink-700 text-sm mt-2 font-medium">2021 Assembly Election</p>
          </div>

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            
            <Step data={0}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 0}>
                <div className="glass-card p-8">
                  <h3 className="font-black text-2xl text-ink-950 mb-4">The Context</h3>
                  <p className="text-ink-700 leading-relaxed text-lg">The 2021 Assembly election appeared to be a setback on paper: the NDA lost Nemom and returned to zero seats in the assembly. Critics rushed to write obituaries.</p>
                </div>
              </div>
            </Step>

            <Step data={1}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 1}>
                <div className="glass-card p-8 border-l-4 border-bjp-saffron">
                  <div className="inline-block px-3 py-1 bg-bjp-saffronsoft/30 rounded-full text-xs font-bold tracking-wider text-ink-950 mb-4 uppercase">2021 Assembly Margins</div>
                  <h3 className="font-black text-2xl text-ink-950 mb-4">Shifting Ground</h3>
                  <p className="text-ink-700 leading-relaxed text-lg mb-4">However beneath the surface, the vote share held steady at roughly 11.3%. In crucial A-class constituencies like Manjeshwar, Kasaragod, and Palakkad (where Metro Man E. Sreedharan fought), the margins of defeat were razor-thin.</p>
                </div>
              </div>
            </Step>

            <Step data={2}>
              <div className="step-card my-32 md:my-64 opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100" data-active={currentStepIndex === 2}>
                <div className="glass-card p-8 border-bjp-saffron/30">
                  <h3 className="font-black text-xl text-ink-950 mb-2">The Legacy</h3>
                  <p className="text-ink-700 font-medium">Moving towards the next election phase.</p>
                </div>
              </div>
            </Step>

          </Scrollama>
        </div>
      </div>
    </section>
  );
}
