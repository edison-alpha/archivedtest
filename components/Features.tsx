
import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="brutalist-card bg-[#2563EB] text-white p-10 rounded-3xl">
        <div className="inline-block bg-white text-black px-4 py-2 rounded-md font-black tracking-wider border-2 border-black mb-6">
          FORMER EXAMINERS
        </div>
        <h3 className="text-3xl font-black mb-6 leading-tight">Insider Knowledge from the Scoring Room</h3>
        <p className="text-xl text-blue-100 leading-relaxed mb-8">
          Tutors aren't just teachers; they've been on the other side of the desk. They know the exact common traps students fall into.
        </p>
        <a href="#" className="font-black flex items-center gap-2 hover:gap-4 transition-all bg-white text-black w-fit px-6 py-2 rounded-full brutalist-btn">
          Meet Your Mentor →
        </a>
      </div>

      <div className="brutalist-card bg-[#059669] text-white p-10 rounded-3xl shadow-[8px_8px_0px_0px_#000]">
        <div className="inline-block bg-[#FACC15] text-black px-4 py-2 rounded-md font-black tracking-wider border-2 border-black mb-6">
          MOCK EXAM ENGINE
        </div>
        <h3 className="text-3xl font-black mb-6 leading-tight">Zero Surprises on Exam Day</h3>
        <p className="text-xl text-emerald-100 leading-relaxed mb-8">
          Our platform mimics the official IELTS computer interface 1:1. Practice until the navigation feels like second nature.
        </p>
        <a href="#" className="font-black flex items-center gap-2 hover:gap-4 transition-all bg-black text-white w-fit px-6 py-2 rounded-full brutalist-btn">
          Try Mock Test →
        </a>
      </div>
    </section>
  );
};
