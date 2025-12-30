
import React from 'react';

export const AIReportSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="brutalist-card bg-white p-12 md:p-20 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <div className="inline-block bg-[#FACC15] text-black px-4 py-1 rounded-full font-black text-sm mb-6 border-2 border-black">
            NEW FOR 2025
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter">The IELTS <br/>Blueprint.</h2>
          <p className="text-xl text-gray-700 font-medium mb-10 max-w-md">
            Download our 60-page definitive guide to the latest test changes, examiner expectations, and Band 9 vocabulary.
          </p>
          <button className="bg-[#1E40AF] text-white px-10 py-4 rounded-full font-black text-lg brutalist-btn">
            → DOWNLOAD FREE GUIDE
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#E11D48] rounded-3xl rotate-3 border-[3px] border-black transition-transform group-hover:rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" 
              className="relative z-10 w-full h-80 object-cover rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_#000]"
              alt="The IELTS Blueprint Resource"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
