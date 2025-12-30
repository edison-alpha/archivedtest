
import React from 'react';

interface TutorsPageProps {
  onBack: () => void;
  onBook: () => void;
}

export const TutorsPage: React.FC<TutorsPageProps> = ({ onBack, onBook }) => {
  const tutors = [
    {
      name: "Dr. Julian Sterling",
      title: "Former Senior Examiner",
      experience: "15+ Years",
      specialty: "Writing & Logic",
      img: "https://i.pravatar.cc/400?u=julian",
      accent: "#2563EB",
      bio: "Julian spent a decade at the British Council training examiners. He knows the mark scheme better than anyone. He is currently our most requested mentor for Band 8.0+ candidates.",
      isFeatured: true
    },
    {
      name: "Sarah Jenkins",
      title: "Speaking Specialist",
      experience: "12+ Years",
      specialty: "Pronunciation & Flow",
      img: "https://i.pravatar.cc/400?u=sarah",
      accent: "#E11D48",
      bio: "Sarah focuses on the psychology of the Speaking test. She helps students reach natural fluency through examiner-led drills."
    },
    {
      name: "David Chen",
      title: "Reading Strategy Expert",
      experience: "10+ Years",
      specialty: "Time Management",
      img: "https://i.pravatar.cc/400?u=david",
      accent: "#059669",
      bio: "A former test writer, David teaches the architectural structure of IELTS reading passages, making scanning instant."
    },
    {
      name: "Maria Garcia",
      title: "Grammar & Linguistics",
      experience: "14+ Years",
      specialty: "Band 9 Vocabulary",
      img: "https://i.pravatar.cc/400?u=maria",
      accent: "#FACC15",
      bio: "Maria's method bridges the gap between Band 6.0 basic grammar and the complex structures required for Band 8.5+."
    }
  ];

  const featuredTutor = tutors.find(t => t.isFeatured);
  const otherTutors = tutors.filter(t => !t.isFeatured);

  return (
    <div className="bg-[#FEFCE8] min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-24 px-6 md:px-12 border-b-8 border-[#2563EB]">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBack} className="mb-12 font-black text-xl flex items-center gap-2 hover:translate-x-[-4px] transition-transform text-[#FACC15]">
            ← BACK TO HOME
          </button>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter uppercase italic">
            The <span className="text-[#2563EB]">Source</span> <br/> Of Truth.
          </h1>
          <p className="text-2xl font-bold max-w-2xl opacity-80 mb-12">
            Standard tutors teach English. Our former examiners teach how the test is graded. That is the 1.5 Band score difference.
          </p>
          <div className="flex gap-4">
            <div className="bg-[#2563EB] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest border-2 border-white">
              ONLY 1% OF APPLICANTS QUALIFY AS TUTORS
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Featured Tutor Highlight */}
        {featuredTutor && (
          <div className="mb-20">
            <div className="inline-block bg-[#FACC15] text-black px-6 py-2 rounded-full font-black text-sm border-4 border-black mb-[-24px] ml-12 relative z-20 shadow-[4px_4px_0px_#000] animate-bounce">
               ⭐ FEATURED TUTOR OF THE MONTH
            </div>
            <div className="brutalist-card bg-white p-12 rounded-[50px] flex flex-col lg:flex-row gap-12 items-center border-[#2563EB] border-[6px] shadow-[16px_16px_0px_#2563EB]">
              <div className="w-full lg:w-72 shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 border-4 border-black rounded-[40px] translate-x-4 translate-y-4 bg-[#2563EB]"></div>
                  <img src={featuredTutor.img} className="relative z-10 w-full aspect-square object-cover rounded-[40px] border-4 border-black" alt={featuredTutor.name} />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-black text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-tighter">
                    {featuredTutor.title}
                  </span>
                  <span className="text-xs font-black border-2 border-black px-4 py-2 rounded-full uppercase bg-[#FACC15]">
                    {featuredTutor.experience} EXPERIENCE
                  </span>
                  <span className="text-xs font-black border-2 border-black px-4 py-2 rounded-full uppercase text-[#2563EB]">
                    TOP RATED 5.0 ★
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">{featuredTutor.name}</h2>
                <div className="font-black text-2xl text-[#2563EB] uppercase tracking-widest">MASTER OF: {featuredTutor.specialty}</div>
                <p className="text-xl font-bold text-gray-700 leading-relaxed max-w-3xl italic">
                  "{featuredTutor.bio}"
                </p>
                <div className="pt-6">
                  <button 
                    onClick={onBook}
                    className="brutalist-btn bg-[#2563EB] text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform flex items-center gap-4"
                  >
                    BOOK VIP SESSION <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Tutors Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {otherTutors.map((t, i) => (
            <div key={i} className="brutalist-card bg-white p-10 rounded-[40px] flex flex-col lg:flex-row gap-8 group">
              <div className="w-full lg:w-48 shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 border-4 border-black rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" style={{ backgroundColor: t.accent }}></div>
                  <img src={t.img} className="relative z-10 w-full aspect-square object-cover rounded-3xl border-4 border-black" alt={t.name} />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      {t.title}
                    </span>
                    <span className="text-[10px] font-black border-2 border-black px-3 py-1 rounded-full uppercase">
                      {t.experience}
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-2 tracking-tighter group-hover:text-[#E11D48] transition-colors">{t.name}</h2>
                  <div className="font-bold text-[#2563EB] uppercase text-sm mb-6 tracking-widest">EXPERT IN: {t.specialty}</div>
                  <p className="text-gray-600 font-bold leading-relaxed mb-8">
                    "{t.bio}"
                  </p>
                </div>
                <button 
                  onClick={onBook}
                  className="w-full brutalist-btn bg-black text-white py-4 rounded-full font-black text-sm hover:scale-105 transition-transform"
                >
                  BOOK 1-ON-1 SESSION
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Difference Section */}
      <section className="bg-[#FACC15] py-24 px-6 md:px-12 border-y-8 border-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">Why Ex-Examiners?</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-black text-[#FACC15] w-12 h-12 shrink-0 flex items-center justify-center font-black text-2xl rounded-full border-4 border-white shadow-[4px_4px_0px_#000]">1</div>
                <div>
                  <h3 className="text-2xl font-black uppercase mb-2">Inner Logic</h3>
                  <p className="font-bold text-lg opacity-80">They know what triggers a Band 8.0 score in the examiner's mind beyond just "good grammar".</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-black text-[#FACC15] w-12 h-12 shrink-0 flex items-center justify-center font-black text-2xl rounded-full border-4 border-white shadow-[4px_4px_0px_#000]">2</div>
                <div>
                  <h3 className="text-2xl font-black uppercase mb-2">Error Precision</h3>
                  <p className="font-bold text-lg opacity-80">Instead of vague feedback, you get specific corrections that align with the official assessment criteria.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-black text-[#FACC15] w-12 h-12 shrink-0 flex items-center justify-center font-black text-2xl rounded-full border-4 border-white shadow-[4px_4px_0px_#000]">3</div>
                <div>
                  <h3 className="text-2xl font-black uppercase mb-2">Confidence Hack</h3>
                  <p className="font-bold text-lg opacity-80">When you practice with an actual former examiner, the real test feels significantly less intimidating.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="brutalist-card bg-white p-12 rounded-[60px] transform rotate-3 shadow-[20px_20px_0px_#2563EB]">
            <img src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=800&q=80" className="rounded-[40px] border-4 border-black" alt="Tutoring session" />
            <div className="mt-8 text-center">
              <div className="text-4xl font-black mb-2">98.4%</div>
              <div className="font-bold uppercase tracking-widest text-sm text-gray-400">Student Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
