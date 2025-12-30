
import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Test Preparation With <span className="text-[#E11D48]">Real Human</span> Expert Feedback
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-2">
          Automated grading can't catch the nuance of Band 8.0 English. That's why we've put real human examiners, detailed writing feedback, and live speaking practice at the core of everything we do.
        </p>
      </div>

      <div className="w-full">
        <div className="brutalist-card overflow-hidden rounded-3xl h-[400px] md:h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80" 
            alt="Person focused on exam preparation" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};
