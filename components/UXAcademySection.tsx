
import React from 'react';
import { ViewState } from '../App';

interface UXAcademySectionProps {
  onNavigate: (view: ViewState) => void;
}

export const UXAcademySection: React.FC<UXAcademySectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#FEFCE8] py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter">Score <br/><span className="text-[#2563EB]">Guarantee.</span></h2>
          <div className="brutalist-card overflow-hidden rounded-3xl">
             <img 
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" 
              alt="Intensive study session" 
              className="w-full h-[300px] object-cover" 
             />
          </div>
        </div>

        <div className="bg-[#BE123C] text-white p-12 rounded-[40px] border-[4px] border-black shadow-[16px_16px_0px_#000] order-1 lg:order-2">
          <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">7.5+ Masterclass</h3>
          <div className="bg-black/20 inline-block px-4 py-1 rounded-full text-xs font-black mb-8 border border-white/20">
            ENROLLMENT CLOSES IN <span className="text-yellow-300">2 DAYS</span>
          </div>
          <p className="text-xl leading-relaxed mb-10 font-medium text-rose-50">
            The most comprehensive IELTS preparation ever built. We don't just teach English; we teach the logic of the exam. Get a 7.5 or higher—guaranteed, or we work with you for free until you do.
          </p>
          <button 
            onClick={() => onNavigate('detail')}
            className="bg-white text-black px-10 py-5 rounded-full font-black text-xl flex items-center gap-3 brutalist-btn w-full justify-center"
          >
            → START YOUR JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
};
