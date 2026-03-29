interface MilestoneCardProps {
  quote: string;
}

export default function MilestoneCard({ quote }: MilestoneCardProps) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 text-6xl text-bjp-saffron/20 font-heading select-none">
        &ldquo;
      </div>
      <blockquote className="text-xl md:text-2xl font-heading text-white italic leading-relaxed relative z-10 pl-6">
        {quote}
      </blockquote>
      <div className="absolute -bottom-8 -right-4 text-6xl text-bjp-saffron/20 font-heading select-none rotate-180">
        &ldquo;
      </div>
    </div>
  );
}
