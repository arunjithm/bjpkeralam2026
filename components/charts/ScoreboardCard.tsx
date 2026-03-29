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
    <div className="w-full max-w-lg mx-auto bg-dark-800/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="bg-white/5 px-6 py-4 border-b border-white/10">
        <h3 className="text-bjp-saffron font-bold text-sm tracking-widest uppercase font-mono">
          {title}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
            <span className="text-white/70 font-sans">{item.label}</span>
            <span className="text-white font-mono text-xl font-bold bg-white/5 px-3 py-1 rounded ml-4 text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
