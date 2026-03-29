"use client";

import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
  ReferenceLine, CartesianGrid,
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

type TooltipPayloadItem = {
  value?: number | string;
  name?: string;
  payload?: { milestone?: boolean };
};

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div style={{
      background: "#1a0a00", border: "1px solid #FF9933",
      borderRadius: 8, padding: "8px 14px", boxShadow: "0 0 24px rgba(255,153,51,0.3)",
    }}>
      <div style={{ color: "#FF9933", fontWeight: 700, marginBottom: 2, fontSize: 12 }}>{label}</div>
      <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
        {p.value}{p.name === "share" ? "%" : " wards"}
      </div>
      {p.payload?.milestone && (
        <div style={{ color: "#FFE066", fontSize: 11, marginTop: 2 }}>★ Landmark</div>
      )}
    </div>
  );
}

function AreaDot({ cx, cy, payload }: { cx?: number; cy?: number; payload?: { milestone?: boolean } }) {
  if (!cx || !cy) return null;
  if (payload?.milestone) {
    return (
      <g key={`m-${cx}`}>
        <circle cx={cx} cy={cy} r={14} fill="#FF9933" fillOpacity={0.15} />
        <circle cx={cx} cy={cy} r={7} fill="#FF9933" stroke="#fff" strokeWidth={2} />
      </g>
    );
  }
  return <circle key={`d-${cx}`} cx={cx} cy={cy} r={3} fill="#FF9933" />;
}

// ★ FIX: Give charts a concrete pixel height so ResponsiveContainer has something to measure
export function LSVoteShareChart() {
  return (
    <div>
      <div className="mb-4">
        <div className="text-xs font-bold uppercase tracking-widest text-bjp-saffron mb-1">Lok Sabha · 2014–2024</div>
        <h3 className="text-white font-heading text-xl font-bold">State-Wide Vote Share</h3>
        <p className="text-white/40 text-xs mt-0.5">NDA % across all 20 Keralam constituencies (ECI confirmed)</p>
      </div>
      <div style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={LS_VOTE_SHARE} margin={{ top: 10, right: 10, bottom: 0, left: -16 }}>
            <defs>
              <linearGradient id="lsG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#FF9933" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <XAxis dataKey="year" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `${v}%`} domain={[0, 20]} />
            <Tooltip content={<Tip />} cursor={{ stroke: "rgba(255,153,51,0.2)" }} />
            <ReferenceLine y={10} stroke="#FF9933" strokeDasharray="5 5" strokeOpacity={0.3}
              label={{ value: "10%", fill: "rgba(255,153,51,0.5)", fontSize: 9, position: "right" }} />
            <Area type="monotone" dataKey="share" name="share" stroke="#FF9933" strokeWidth={2.5}
              fill="url(#lsG)" dot={<AreaDot />}
              activeDot={{ r: 6, fill: "#FF9933", stroke: "#fff", strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AssemblyVoteShareChart() {
  return (
    <div>
      <div className="mb-4">
        <div className="text-xs font-bold uppercase tracking-widest text-bjp-saffron mb-1">Assembly · 2001–2021</div>
        <h3 className="text-white font-heading text-xl font-bold">Assembly Vote Share</h3>
        <p className="text-white/40 text-xs mt-0.5">NDA state-wide % by election year</p>
      </div>
      <div style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ASSEMBLY_VOTE_SHARE} margin={{ top: 10, right: 10, bottom: 0, left: -16 }}>
            <defs>
              <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity={1} />
                <stop offset="100%" stopColor="#E68A2E" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <XAxis dataKey="year" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `${v}%`} domain={[0, 14]} />
            <Tooltip content={<Tip />} cursor={{ fill: "rgba(255,153,51,0.06)" }} />
            <Bar dataKey="share" name="share" fill="url(#barG)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function TVMWardChart() {
  return (
    <div>
      <div className="mb-4">
        <div className="text-xs font-bold uppercase tracking-widest text-bjp-saffron mb-1">Local Body · 2010–2025</div>
        <h3 className="text-white font-heading text-xl font-bold">TVM Corporation Ward Wins</h3>
        <p className="text-white/40 text-xs mt-0.5">BJP/NDA seats won in each election</p>
      </div>
      <div style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={WARD_WINS_TVM} margin={{ top: 10, right: 10, bottom: 0, left: -16 }}>
            <defs>
              <linearGradient id="wardG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFE066" stopOpacity={1} />
                <stop offset="100%" stopColor="#FF9933" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <XAxis dataKey="year" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <ReferenceLine y={51} stroke="#FFE066" strokeDasharray="5 5" strokeOpacity={0.5}
              label={{ value: "Majority 51", fill: "rgba(255,224,102,0.6)", fontSize: 9, position: "insideTopRight" }} />
            <Tooltip content={<Tip />} cursor={{ fill: "rgba(255,153,51,0.06)" }} />
            <Bar dataKey="wards" name="wards" fill="url(#wardG)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-center text-xs font-mono text-bjp-saffron font-bold">
        6 → 34 → 28 → 50 wards &nbsp;·&nbsp; First BJP Mayor in 2025
      </div>
    </div>
  );
}

export function KeyNumbers() {
  const cards = [
    { emoji: "📈", value: "19.21%", type: "Lok Sabha", label: "2024 NDA Vote Share", sub: "All-time high state-wide", accent: "rgba(255,153,51,0.25)", border: "rgba(255,153,51,0.35)" },
    { emoji: "🏆", value: "74686", type: "Lok Sabha", label: "Thrissur Margin", sub: "First Keralam BJP MP", accent: "rgba(255,224,102,0.2)", border: "rgba(255,224,102,0.35)" },
    { emoji: "🏛️", value: "50/101", type: "Corporation", label: "TVM Corp 2025", sub: "Ended 45 yrs of LDF rule", accent: "rgba(255,153,51,0.2)", border: "rgba(255,153,51,0.3)" },
    { emoji: "🪷", value: "2016", type: "Assembly", label: "First Victory", sub: "Nemom — O. Rajagopal", accent: "rgba(19,136,8,0.2)", border: "rgba(19,136,8,0.35)" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c) => (
        <div key={c.label}
          className="rounded-2xl p-6 transition-all duration-500 cursor-default bg-saffron-glass hover:shadow-[0_0_50px_rgba(255,153,51,0.4)] hover:-translate-y-2 group"
          style={{ border: `1px solid rgba(255,153,51,0.4)` }}>
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{c.emoji}</div>
          <div className="text-bjp-saffron font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-80">{c.type}</div>
          <div className="text-3xl font-mono font-black text-white mb-2 text-gold">
            {c.value}
          </div>
          <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">{c.label}</div>
          <div className="text-white/50 text-xs leading-relaxed">{c.sub}</div>
        </div>
      ))}
    </div>
  );
}
