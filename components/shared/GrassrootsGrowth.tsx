"use client";

import { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";

const GROWTH_DATA = [
  { year: "2010", wards: 450, x: 100, y: 420 },
  { year: "2015", wards: 1100, x: 350, y: 300 },
  { year: "2020", wards: 1597, x: 600, y: 180 },
  { year: "2025", wards: 1919, x: 850, y: 100 },
];

export default function GrassrootsGrowth() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950 text-xs font-black uppercase tracking-[0.2em]">
              <MoveUpRight className="w-3.5 h-3.5 text-bjp-saffron" />
              Organizational Scale
            </div>
            <h2 className="statement-header">
              The <span className="saffron-header">Silent</span> <br />Revolution.
            </h2>
            <p className="text-xl text-ink-700 font-sans font-medium leading-relaxed">
              Beyond the big elections, the NDA built its foundation in the wards. 
              Between 2010 and 2025, the number of elected local body representatives grew from 450 to 1,919.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 border-bjp-saffron/20 shadow-2xl text-center lg:text-left">
            <div className="text-bjp-saffron font-mono font-black text-4xl md:text-6xl lg:text-7xl mb-2 leading-none tracking-tighter">
              326%
            </div>
            <div className="text-[10px] text-ink-500 uppercase tracking-widest font-black leading-tight">
              Surge in elected local <br />body representatives
            </div>
          </div>
        </div>

        {/* The "Saffron Staircase" */}
        <div className="relative w-full aspect-[2/1] glass-card overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-ink-950/[0.01]" />
          
          <svg viewBox="0 0 1000 500" className="w-full h-full pointer-events-none select-none overflow-visible">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF9933" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path 
              d={`M ${GROWTH_DATA[0].x} 500 L ${GROWTH_DATA[0].x} ${GROWTH_DATA[0].y} 
                  C ${GROWTH_DATA[0].x + 100} ${GROWTH_DATA[0].y}, ${GROWTH_DATA[1].x - 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[1].x} ${GROWTH_DATA[1].y}
                  C ${GROWTH_DATA[1].x + 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[2].x - 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[2].x} ${GROWTH_DATA[2].y}
                  C ${GROWTH_DATA[2].x + 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[3].x - 100} ${GROWTH_DATA[3].y}, ${GROWTH_DATA[3].x} ${GROWTH_DATA[3].y}
                  L ${GROWTH_DATA[3].x} 500 Z`}
              fill="url(#areaGrad)"
              className={`transition-opacity duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />

            <path 
              d={`M ${GROWTH_DATA[0].x} ${GROWTH_DATA[0].y} 
                  C ${GROWTH_DATA[0].x + 100} ${GROWTH_DATA[0].y}, ${GROWTH_DATA[1].x - 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[1].x} ${GROWTH_DATA[1].y}
                  C ${GROWTH_DATA[1].x + 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[2].x - 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[2].x} ${GROWTH_DATA[2].y}
                  C ${GROWTH_DATA[2].x + 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[3].x - 100} ${GROWTH_DATA[3].y}, ${GROWTH_DATA[3].x} ${GROWTH_DATA[3].y}`}
              fill="none" stroke="url(#lineGrad)" strokeWidth="10" strokeLinecap="round"
              style={{ 
                strokeDasharray: 2000, 
                strokeDashoffset: isLoaded ? 0 : 2000,
                transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            />

            {GROWTH_DATA.map((d, index) => (
              <g key={d.year} className="transition-all duration-700" style={{ transitionDelay: `${index * 300}ms`, opacity: isLoaded ? 1 : 0 }}>
                <circle cx={d.x} cy={d.y} r="20" fill="white" stroke="#FF9933" strokeWidth="5" className="shadow-lg" />
                <circle cx={d.x} cy={d.y} r="8" fill="#FF9933" />
                
                <foreignObject x={d.x - 60} y={d.y - 80} width="120" height="60">
                  <div className="flex flex-col items-center">
                    <div className="animated-border-dark px-4 py-1.5 shadow-xl">
                      <div className="text-white font-mono font-black text-lg leading-none">{d.wards}</div>
                    </div>
                  </div>
                </foreignObject>

                <text x={d.x} y={480} fill="#1a1a1a" fontSize="28" fontWeight="900" textAnchor="middle" className="font-heading tracking-tighter">
                  {d.year}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <p className="mt-16 text-center text-[10px] text-ink-400 uppercase tracking-[0.5em] font-black">
          State-Wide Organizational Presence · Verified ECI Local Body Data 2010－2025
        </p>
      </div>
    </section>
  );
}
