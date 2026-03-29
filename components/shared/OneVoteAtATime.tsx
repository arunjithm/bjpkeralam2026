"use client";

const PORTRAITS = [
  {
    title: "The Temple Volunteer",
    place: "Pathanamthitta",
    quote: "I didn't switch overnight. I switched when I felt ignored.",
    body:
      "A decade of local work, plus the Sabarimala moment, shifted the balance. BJP vote share in Pathanamthitta rose from 17.4% in 2014 to 28.95% in 2019 — the sharpest constituency jump that year.",
    tag: "Pathanamthitta · 2014→2019",
  },
  {
    title: "The First-Time Professional",
    place: "Ernakulam",
    quote: "I want delivery, not slogans.",
    body:
      "In the city, the shift is less ideological and more managerial. Small-business owners and young professionals say the traditional fronts no longer feel inevitable — and the contest now feels open.",
    tag: "Ernakulam · Urban swing",
  },
  {
    title: "The Ward Worker",
    place: "Thiruvananthapuram",
    quote: "We built booth by booth, year after year.",
    body:
      "Local body wins taught cadre how to convert presence into votes. By 2025, the capital corporation flipped — proving that patient organisation can outlast skepticism.",
    tag: "Thiruvananthapuram · Ground game",
  },
];

export default function OneVoteAtATime() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ borderColor: "rgba(255,153,51,0.35)", background: "rgba(255,153,51,0.08)" }}>
            <span className="text-bjp-saffron text-xs font-black uppercase tracking-[0.2em]">One Vote at a Time</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl mb-3 text-white">
            The Voter Is the Hero
          </h2>
          <p className="max-w-2xl mx-auto text-sm" style={{ color: "rgba(255,200,120,0.5)" }}>
            These are composite portraits — not literal interviews — built from common stories repeated across Keralam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTRAITS.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 bg-saffron-glass border border-bjp-saffron/20 shadow-xl">
              <div className="text-xs uppercase tracking-widest text-bjp-saffron font-black mb-2">{p.place}</div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">{p.title}</h3>
              <div className="text-sm italic mb-4" style={{ color: "rgba(255,220,180,0.8)" }}>
                &ldquo;{p.quote}&rdquo;
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,120,0.65)" }}>
                {p.body}
              </p>
              <div className="mt-5 text-[10px] uppercase tracking-widest text-white/40">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
