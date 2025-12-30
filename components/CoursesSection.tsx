
import React from 'react';
import { ViewState } from '../App';

interface CoursesSectionProps {
  onNavigate: (view: ViewState) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          Skill <br/><span className="text-[#E11D48]">Intensives.</span>
        </h2>
        <p className="text-2xl font-bold text-gray-700 leading-snug">
          Fix your specific weaknesses in <span className="bg-[#FACC15] px-2 border-2 border-black">14 days or less</span> with our laser-focused modules.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="brutalist-card bg-[#E11D48] text-white p-12 rounded-3xl overflow-hidden relative group">
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-4 uppercase">Writing Task 2</h3>
            <div className="bg-black text-white inline-block px-4 py-1 rounded-full text-sm font-bold mb-8">
               LEVEL UP YOUR COHESION
            </div>
            <p className="text-xl mb-10 opacity-90 font-medium">
              Daily feedback on your essays. We don't just point out mistakes; we rewrite sentences with you to reach Band 8.0 standards.
            </p>
            <button 
              onClick={() => onNavigate('detail')}
              className="bg-white text-black px-10 py-4 rounded-full font-black text-lg brutalist-btn hover:bg-[#FDF8F1]"
            >
              → VIEW MODULE
            </button>
          </div>
          <div className="absolute top-10 right-[-30px] text-9xl font-black opacity-10 select-none rotate-12 group-hover:rotate-45 transition-transform duration-500">
            W2
          </div>
        </div>

        <div className="brutalist-card bg-[#FACC15] text-black p-12 rounded-3xl overflow-hidden relative group shadow-[12px_12px_0px_#000]">
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-4 uppercase">Speaking Bootcamp</h3>
            <div className="bg-white text-black border-2 border-black inline-block px-4 py-1 rounded-full text-sm font-bold mb-8">
               LIVE EVALUATIONS
            </div>
            <p className="text-xl mb-10 opacity-80 font-medium">
              Overcome test-day anxiety. Practice with former examiners in timed sessions until fluency becomes your second nature.
            </p>
            <button 
              onClick={() => onNavigate('detail')}
              className="bg-black text-white px-10 py-4 rounded-full font-black text-lg brutalist-btn hover:bg-gray-900"
            >
              → VIEW MODULE
            </button>
          </div>
          <div className="absolute top-10 right-[-30px] text-9xl font-black opacity-10 select-none -rotate-12 group-hover:-rotate-45 transition-transform duration-500">
            🎤
          </div>
        </div>
      </div>
    </section>
  );
};
