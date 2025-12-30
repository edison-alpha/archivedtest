
import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#FEFCE8] py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/10">
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Real Stories, <br/><span className="text-[#059669]">Real 8.0s.</span></h2>
        <div className="text-xl font-bold text-gray-700">
          <p className="mb-4">We've helped thousands of students clear their exam on the first attempt after failing elsewhere.</p>
          <a href="#" className="underline font-black decoration-[#E11D48] decoration-4 underline-offset-4">Read more inspiring journeys →</a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="brutalist-card bg-[#2563EB] text-white p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://i.pravatar.cc/150?u=12" alt="Ananya" className="w-16 h-16 rounded-full border-[3px] border-white shadow-[4px_4px_0px_#000]" />
              <div>
                <div className="font-black text-lg">ANANYA R.</div>
                <div className="text-[10px] font-black bg-white/20 px-2 py-1 rounded uppercase">SCORE: 8.5 OVERALL</div>
              </div>
            </div>
            <p className="text-xl italic font-medium leading-relaxed opacity-95">
              "The examiner feedback was the game changer. I went from a 6.0 to a 7.5 in writing in just three weeks. Unbelievable results!"
            </p>
          </div>
        </div>

        <div className="brutalist-card bg-white text-black p-10 rounded-3xl flex flex-col justify-between shadow-[12px_12px_0px_#000]">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://i.pravatar.cc/150?u=15" alt="Zhang" className="w-16 h-16 rounded-full border-[3px] border-black shadow-[4px_4px_0px_#000]" />
              <div>
                <div className="font-black text-lg">ZHANG W.</div>
                <div className="text-[10px] font-black bg-[#FACC15] px-2 py-1 rounded border border-black uppercase">SCORE: 7.5 OVERALL</div>
              </div>
            </div>
            <p className="text-xl italic font-bold leading-relaxed text-gray-800">
              "I was terrified of the Speaking test. The live mock sessions here felt so real that the actual test felt like just another practice day."
            </p>
          </div>
        </div>

        <div className="brutalist-card bg-[#1F1F1F] text-white p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://i.pravatar.cc/150?u=22" alt="Ahmed" className="w-16 h-16 rounded-full border-[3px] border-white shadow-[4px_4px_0px_#000]" />
              <div>
                <div className="font-black text-lg">AHMED M.</div>
                <div className="text-[10px] font-black bg-white/20 px-2 py-1 rounded uppercase">SCORE: 8.0 OVERALL</div>
              </div>
            </div>
            <p className="text-xl italic font-medium leading-relaxed opacity-95">
              "The logic behind the score is what they teach here. I finally understood what the examiners actually want to hear."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
