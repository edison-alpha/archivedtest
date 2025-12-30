
import React from 'react';

export const OpenHouseCTA: React.FC = () => {
  return (
    <section className="bg-[#BE123C] py-24 px-6 md:px-12 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase tracking-tighter">JOIN A FREE MASTERCLASS</h2>
        <p className="text-xl text-white/80 font-medium mb-12">
          Watch our top examiner break down a Band 9.0 speaking interview and learn the 3 secrets to a high score.
        </p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-extrabold text-lg flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
          → RESERVE YOUR FREE SEAT
        </button>
      </div>
    </section>
  );
};
