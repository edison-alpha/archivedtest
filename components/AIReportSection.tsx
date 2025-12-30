import React from 'react';

export const AIReportSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="bg-white p-10 md:p-16 rounded-[32px] border-3 border-black shadow-[8px_8px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <div className="inline-block bg-[#FACC15] text-black px-4 py-1 rounded-full font-bold text-sm mb-5 border-2 border-black">
            NEW FOR 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-5 leading-none tracking-tighter">The IELTS <br/>Blueprint.</h2>
          <p className="text-lg text-gray-700 font-medium mb-8 max-w-md">
            Download our 60-page definitive guide to the latest test changes, examiner expectations, and Band 9 vocabulary.
          </p>
          <button className="bg-[#1E40AF] text-white px-10 py-4 rounded-full font-bold text-base border-2 border-black shadow-[5px_5px_0px_#000] hover:shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            → DOWNLOAD FREE GUIDE
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#E11D48] rounded-2xl rotate-3 border-3 border-black transition-transform group-hover:rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" 
              className="relative z-10 w-full h-64 object-cover rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000]"
              alt="The IELTS Blueprint Resource"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
