
import React from 'react';

export const TrustSignals: React.FC = () => {
  const stats = [
    { val: "50,000+", label: "Successful Test Takers", color: "#E11D48" },
    { val: "8.2 / 9.0", label: "Avg. Masterclass Score", color: "#2563EB" },
    { val: "120+", label: "Former Examiners On Staff", color: "#059669" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {stats.map((s, i) => (
          <div key={i} className="brutalist-card p-8 rounded-2xl bg-white text-center">
            <div className="text-6xl font-black mb-4 tracking-tighter" style={{ color: s.color }}>{s.val}</div>
            <div className="bg-black text-white text-xs font-black px-4 py-2 inline-block rounded-full uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="border-y-4 border-black py-12 bg-white rotate-1 w-[110%] -ml-[5%] overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee gap-16 items-center">
          {['OXFORD', 'CAMBRIDGE', 'BRITISH COUNCIL', 'IDP', 'HARVARD', 'UCL', 'MIT'].map((univ) => (
            <span key={univ} className="text-4xl md:text-5xl font-black opacity-30 hover:opacity-100 transition-opacity cursor-default px-8">
              {univ}
            </span>
          ))}
          {/* Duplicate for seamless marquee if needed, or just standard flex */}
        </div>
      </div>
    </section>
  );
};
