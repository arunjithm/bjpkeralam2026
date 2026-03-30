interface ScoreData {
  label: string;
  value: string | number;
}

interface ScoreboardCardProps {
  title: string;
  data: ScoreData[];
}

export default function ScoreboardCard({ title, data }: ScoreboardCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto glass-card/80 backdrop-blur-md rounded-2xl border border-bjp-saffron/20 overflow-hidden shadow-2xl">
      <div className="bg-bjp-saffronsoft/30 px-6 py-4 border-b border-bjp-saffron/20">
        <h3 className="text-ink-950 font-black font-heading text-bjp-saffron font-bold text-sm tracking-widest uppercase font-mono">
          {title}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
            <span className="text-ink-800 font-sans">{item.label}</span>
            <span className="text-ink-950 font-mono text-xl font-bold bg-bjp-saffronsoft/30 px-3 py-1 rounded ml-4 text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
