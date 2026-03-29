"use client";

import { useState, useEffect } from "react";

const GROWTH_DATA = [
  { year: "2010", wards: 450, x: 100, y: 420 },
  { year: "2015", wards: 1100, x: 350, y: 320 },
  { year: "2020", wards: 1597, x: 600, y: 220 },
  { year: "2025", wards: 1919, x: 850, y: 80 },
];

export default function GrassrootsGrowth() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      
      {/* Deep Saffron Flare */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-bjp-saffron/10 rounded-full blur-[160px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="text-[10px] font-black text-bjp-saffron uppercase tracking-[0.5em] mb-2 opacity-60">Visualizing Strength</div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-heading leading-none">
              Gram Panchayat <span className="text-bjp-saffron">Wards</span>
            </h2>
          </div>
          
          {/* Majestic 326% Stat Badge */}
          <div className="p-6 md:p-8 rounded-[2.5rem] bg-saffron-glass border border-gold/20 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 v-transparent opacity-50" />
            <div className="relative z-10 text-center md:text-left">
              <div className="text-gold font-mono font-black text-5xl md:text-6xl mb-1 leading-none drop-shadow-[0_0_20px_rgba(255,209,102,0.6)]">
                326%
              </div>
              <div className="text-[11px] text-white/50 uppercase tracking-[0.25em] leading-tight font-black">
                Surge in elected local<br/>body representatives
              </div>
            </div>
          </div>
        </div>

        {/* The "Saffron Staircase" SVG Visualization */}
        <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] rounded-[3rem] bg-[#050200] border border-white/5 overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
          
          <svg viewBox="0 0 1000 500" className="w-full h-full pointer-events-none select-none overflow-visible">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF9933" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
              </linearGradient>
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Area Fill */}
            <path 
              d={`M ${GROWTH_DATA[0].x} 500 L ${GROWTH_DATA[0].x} ${GROWTH_DATA[0].y} 
                  C ${GROWTH_DATA[0].x + 100} ${GROWTH_DATA[0].y}, ${GROWTH_DATA[1].x - 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[1].x} ${GROWTH_DATA[1].y}
                  C ${GROWTH_DATA[1].x + 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[2].x - 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[2].x} ${GROWTH_DATA[2].y}
                  C ${GROWTH_DATA[2].x + 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[3].x - 100} ${GROWTH_DATA[3].y}, ${GROWTH_DATA[3].x} ${GROWTH_DATA[3].y}
                  L ${GROWTH_DATA[3].x} 500 Z`}
              fill="url(#areaGrad)"
              className={`transition-opacity duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />

            {/* Glowing Connection Line */}
            <path 
              d={`M ${GROWTH_DATA[0].x} ${GROWTH_DATA[0].y} 
                  C ${GROWTH_DATA[0].x + 100} ${GROWTH_DATA[0].y}, ${GROWTH_DATA[1].x - 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[1].x} ${GROWTH_DATA[1].y}
                  C ${GROWTH_DATA[1].x + 100} ${GROWTH_DATA[1].y}, ${GROWTH_DATA[2].x - 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[2].x} ${GROWTH_DATA[2].y}
                  C ${GROWTH_DATA[2].x + 100} ${GROWTH_DATA[2].y}, ${GROWTH_DATA[3].x - 100} ${GROWTH_DATA[3].y}, ${GROWTH_DATA[3].x} ${GROWTH_DATA[3].y}`}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#neonGlow)"
              style={{ 
                strokeDasharray: 2000, 
                strokeDashoffset: isLoaded ? 0 : 2000,
                transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            />

            {/* Architectural Data Nodes */}
            {GROWTH_DATA.map((d, index) => (
              <g key={d.year} className={`transition-all duration-700`} style={{ transitionDelay: `${index * 300}ms`, opacity: isLoaded ? 1 : 0, transform: isLoaded ? "translateY(0)" : "translateY(20px)" }}>
                {/* Node Glow */}
                <circle cx={d.x} cy={d.y} r="22" fill="rgba(255,153,51,0.25)" />
                <circle cx={d.x} cy={d.y} r="10" fill="#FFD166" stroke="#FF9933" strokeWidth="5" />
                
                {/* Ward Count Label Pill */}
                <foreignObject x={d.x - 50} y={d.y - 65} width="100" height="50">
                  <div className="flex flex-col items-center">
                    <div className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-xl backdrop-blur-xl shadow-2xl">
                      <div className="text-gold font-mono font-black text-xl leading-none tracking-tight">{d.wards}</div>
                    </div>
                  </div>
                </foreignObject>

                {/* YEAR LABEL (Move to bottom for clear chronology) */}
                <text 
                  x={d.x} 
                  y={480} 
                  fill="rgba(255,255,255,0.8)" 
                  fontSize="24" 
                  fontWeight="900" 
                  textAnchor="middle" 
                  className="font-mono tracking-tighter"
                >
                  {d.year}
                </text>
              </g>
            ))}
          </svg>

          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex justify-between px-[100px] pointer-events-none opacity-[0.05]">
            {GROWTH_DATA.map(d => (
              <div key={d.year} className="w-px h-full bg-white/20" />
            ))}
          </div>

        </div>

        <p className="mt-12 text-center text-[10px] text-white/30 uppercase tracking-[0.4em] font-black">
          State-Wide Organizational Presence · Verified ECI Local Body Data 2010－2025
        </p>

      </div>
    </section>
  );
}
