"use client";

import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
  ReferenceLine, CartesianGrid, Label, LabelList
} from "recharts";

const LS_VOTE_SHARE = [
  { year: "2014", share: 10.82 },
  { year: "2019", share: 15.64 },
  { year: "2024", share: 19.21, milestone: true },
];

const ASSEMBLY_VOTE_SHARE = [
  { year: "2001", share: 5 }, { year: "2006", share: 4.7 },
  { year: "2011", share: 6.1 }, { year: "2016", share: 10.5, milestone: true },
  { year: "2021", share: 11.3 },
];

const WARD_WINS_TVM = [
  { year: "2010", wards: 6 }, { year: "2015", wards: 34 },
  { year: "2020", wards: 28 }, { year: "2025", wards: 50, milestone: true },
];

function Tip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div className="animated-border-saffron-green p-3 shadow-2xl">
      <div className="text-ink-950 font-black text-[10px] uppercase tracking-widest mb-1">{label}</div>
      <div className="text-bjp-saffron font-mono font-black text-lg leading-none">
        {p.value}{p.name === "share" ? "%" : " Wards"}
      </div>
    </div>
  );
}

export function LSVoteShareChart() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b border-bjp-saffron/10 pb-4">
        <div>
          <h3 className="text-ink-950 font-heading text-2xl font-black tracking-tight">Lok Sabha Vote Share</h3>
          <p className="text-ink-500 text-sm font-medium">State-wide percentage (2014–2024)</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-black text-bjp-saffron">19.21%</div>
          <div className="text-[10px] font-black text-ink-400 uppercase tracking-widest">2024 Peak</div>
        </div>
      </div>
      <div style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={LS_VOTE_SHARE} margin={{ top: 20, right: 30, bottom: 30, left: 10 }}>
            <defs>
              <linearGradient id="lsG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FF9933" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "#171717", fontSize: 12, fontWeight: 800 }} axisLine={{ stroke: '#e5e5e5' }} tickLine={false} dy={10}>
               <Label value="Election Year" offset={-20} position="insideBottom" fill="#a3a3a3" fontSize={10} fontWeight={900} />
            </XAxis>
            <YAxis tick={{ fill: "#171717", fontSize: 12, fontWeight: 800 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 25]}>
               <Label value="Vote Share %" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#a3a3a3" fontSize={10} fontWeight={900} />
            </YAxis>
            <Tooltip content={<Tip />} />
            <ReferenceLine y={10} stroke="#FF9933" strokeDasharray="5 5" label={{ value: "10% Barrier", fill: "#FF9933", fontSize: 10, fontWeight: 900, position: 'insideTopRight' }} />
            <Area type="monotone" dataKey="share" name="share" stroke="#FF9933" strokeWidth={4} fill="url(#lsG)" animationDuration={2000}>
               <LabelList dataKey="share" position="top" offset={15} fill="#171717" fontSize={12} fontWeight={900} formatter={(v: any) => `${v}%`} />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AssemblyVoteShareChart() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b border-bjp-saffron/10 pb-4">
        <div>
          <h3 className="text-ink-950 font-heading text-2xl font-black tracking-tight">Assembly Performance</h3>
          <p className="text-ink-500 text-sm font-medium">Growth in state-wide share</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-black text-ink-950">11.3%</div>
          <div className="text-[10px] font-black text-ink-400 uppercase tracking-widest">Current Base</div>
        </div>
      </div>
      <div style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ASSEMBLY_VOTE_SHARE} margin={{ top: 20, right: 30, bottom: 30, left: 10 }}>
            <CartesianGrid stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "#171717", fontSize: 12, fontWeight: 800 }} axisLine={{ stroke: '#e5e5e5' }} tickLine={false} dy={10}>
               <Label value="Election Year" offset={-20} position="insideBottom" fill="#a3a3a3" fontSize={10} fontWeight={900} />
            </XAxis>
            <YAxis tick={{ fill: "#171717", fontSize: 12, fontWeight: 800 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 15]}>
               <Label value="Vote Share %" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#a3a3a3" fontSize={10} fontWeight={900} />
            </YAxis>
            <Tooltip content={<Tip />} cursor={{ fill: '#fafafa' }} />
            <Bar dataKey="share" name="share" fill="#FF9933" radius={[6, 6, 0, 0]} animationDuration={2000}>
               <LabelList dataKey="share" position="top" offset={10} fill="#171717" fontSize={12} fontWeight={900} formatter={(v: any) => `${v}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function TVMWardChart() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b border-bjp-saffron/10 pb-4">
        <div>
          <h3 className="text-ink-950 font-heading text-2xl font-black tracking-tight">TVM Corporation</h3>
          <p className="text-ink-500 text-sm font-medium">Ward victories (2010–2025)</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-black text-bjp-green">50/101</div>
          <div className="text-[10px] font-black text-ink-400 uppercase tracking-widest">Majority Reached</div>
        </div>
      </div>
      <div style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={WARD_WINS_TVM} margin={{ top: 20, right: 30, bottom: 30, left: 10 }}>
            <CartesianGrid stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "#171717", fontSize: 12, fontWeight: 800 }} axisLine={{ stroke: '#e5e5e5' }} tickLine={false} dy={10}>
               <Label value="Election Year" offset={-20} position="insideBottom" fill="#a3a3a3" fontSize={10} fontWeight={900} />
            </XAxis>
            <YAxis tick={{ fill: "#171717", fontSize: 12, fontWeight: 800 }} axisLine={false} tickLine={false} domain={[0, 60]}>
               <Label value="Wards Won" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#a3a3a3" fontSize={10} fontWeight={900} />
            </YAxis>
            <ReferenceLine y={51} stroke="#138808" strokeDasharray="5 5" label={{ value: "Majority 51", fill: "#138808", fontSize: 10, fontWeight: 900, position: 'insideTopRight' }} />
            <Tooltip content={<Tip />} cursor={{ fill: '#fafafa' }} />
            <Bar dataKey="wards" name="wards" fill="#FF9933" radius={[6, 6, 0, 0]} animationDuration={2000}>
               <LabelList dataKey="wards" position="top" offset={10} fill="#171717" fontSize={12} fontWeight={900} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function KeyNumbers() {
  const cards = [
    { emoji: "📈", value: "19.21%", label: "Vote Share", sub: "2024 State Peak" },
    { emoji: "🏆", value: "74,686", label: "Thrissur", sub: "Historic Margin" },
    { emoji: "🏛️", value: "50/101", label: "TVM Corp", sub: "BJP Majority '25" },
    { emoji: "🪷", value: "2016", label: "Nemom", sub: "First Breakthrough" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="animated-border-saffron-green px-5 py-4 group hover:shadow-xl transition-all duration-500 rounded-2xl flex items-center gap-4">
          <div className="text-3xl grayscale group-hover:grayscale-0 transition-all shrink-0">{c.emoji}</div>
          <div className="min-w-0">
            <div className="text-2xl font-mono font-black text-ink-950 tracking-tighter leading-none mb-1">
              {c.value}
            </div>
            <div className="flex flex-col">
              <span className="text-ink-950 font-heading font-black text-[10px] uppercase tracking-wider leading-none">{c.label}</span>
              <span className="text-ink-500 text-[9px] font-medium leading-tight mt-1">{c.sub}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

