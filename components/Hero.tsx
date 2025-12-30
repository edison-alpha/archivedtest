
import React from 'react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="px-6 md:px-12 py-8 md:py-16 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
      <div className="relative">
        <div className="relative z-10 space-y-4">
          <div className="animate-float inline-block" style={{ animationDelay: '0s' }}>
            <div className="bg-white border-[3px] border-black px-6 py-4 transform -rotate-2 text-5xl md:text-8xl font-black tracking-tighter shadow-[8px_8px_0px_#000]">
              Master
            </div>
          </div>
          <br />
          <div className="animate-float inline-block ml-8 md:ml-20" style={{ animationDelay: '0.5s' }}>
             <div className="bg-[#E11D48] text-white border-[3px] border-black px-6 py-4 transform rotate-1 text-5xl md:text-8xl font-black tracking-tighter shadow-[8px_8px_0px_#000]">
                Your
              </div>
          </div>
          <br />
          <div className="animate-float inline-block ml-4 md:ml-12" style={{ animationDelay: '1s' }}>
            <div className="bg-[#2563EB] text-white border-[3px] border-black px-6 py-4 transform -rotate-1 text-5xl md:text-8xl font-black tracking-tighter shadow-[8px_8px_0px_#000]">
              IELTS
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 text-xl font-extrabold">
          <button 
            onClick={() => onNavigate('detail')}
            className="brutalist-btn bg-[#FACC15] text-black px-8 py-4 rounded-full flex items-center gap-3 w-fit hover:scale-105 transition-transform"
          >
            <span>→</span> JOIN THE 8.0+ BOOTCAMP
            <span className="text-3xl">🎓</span>
          </button>
          <button 
            onClick={() => onNavigate('test')}
            className="flex items-center gap-2 hover:translate-x-2 transition-transform text-black/70 hover:text-black"
          >
            <span className="text-2xl font-black">→</span> TAKE A FREE DIAGNOSTIC TEST
          </button>
        </div>
      </div>

      <div className="space-y-8 animate-fade-up -mt-4 md:-mt-12">
        <p className="text-2xl md:text-3xl text-black font-bold leading-tight border-l-8 border-[#E11D48] pl-8">
          The world's most effective preparation platform. Guaranteed high scores via former examiner feedback.
        </p>
        <div className="bg-white border-[3px] border-black p-8 shadow-[12px_12px_0px_#2563EB] rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-2 border-black" />
               ))}
             </div>
             <span className="font-bold text-sm">Join 50,000+ students already abroad</span>
          </div>
          <p className="text-gray-600 font-medium">
            Enroll today and get our "Speaking Mastery" module for free (Value $199).
          </p>
        </div>
      </div>
    </section>
  );
};
