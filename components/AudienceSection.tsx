
import React from 'react';

export const AudienceSection: React.FC = () => {
  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
    "https://i.pravatar.cc/150?u=5",
    "https://i.pravatar.cc/150?u=6",
    "https://i.pravatar.cc/150?u=7",
    "https://i.pravatar.cc/150?u=8",
    "https://i.pravatar.cc/150?u=9",
  ];

  return (
    <section className="bg-[#1E3A8A] text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8 tracking-tighter">
            For Students, Professionals, & Dreamers
          </h2>
          <p className="text-xl opacity-90 leading-relaxed mb-10 max-w-lg font-medium">
            Whether you need a Band 6.0 for an Australian work visa or an 8.5 for an Ivy League PhD, IELTS Pro delivers strategies tailored to your specific destination.
          </p>
          <button className="brutalist-btn bg-[#FACC15] text-black px-10 py-4 rounded-full font-black text-lg flex items-center gap-2 hover:scale-105 transition-transform">
            → EXPLORE STUDY PATHS
          </button>
        </div>
        
        <div className="relative">
          <div className="bg-[#FACC15] p-8 rounded-3xl transform rotate-2 border-[4px] border-black shadow-[16px_16px_0px_#000]">
            <div className="grid grid-cols-3 gap-6">
              {avatars.map((url, i) => (
                <div key={i} className="aspect-square rounded-xl border-[3px] border-black overflow-hidden shadow-[4px_4px_0px_#000]">
                  <img 
                    src={url} 
                    alt="Success story" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-5deg] font-black">
              JOIN 50K+ SUCCESSFUL ALUMNI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
