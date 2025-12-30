
import React from 'react';

interface CourseDetailPageProps {
  onBack: () => void;
  onStartTest: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onBack, onStartTest }) => {
  return (
    <div className="bg-[#FEFCE8] min-h-screen">
      {/* Hero */}
      <section className="bg-[#2563EB] text-white pt-20 pb-32 px-6 md:px-12 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBack} className="mb-8 font-black flex items-center gap-2 hover:translate-x-1 transition-transform">
            ← BACK TO HOME
          </button>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#FACC15] text-black px-4 py-1 rounded-full font-black text-sm mb-6 border-2 border-black">
                MOST POPULAR
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                7.5+ Score <br/>Masterclass.
              </h1>
              <p className="text-2xl font-bold opacity-90 max-w-xl mb-10">
                A 12-week intensive program designed by former British Council examiners to guarantee your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={onStartTest} className="brutalist-btn bg-black text-white px-10 py-4 rounded-full font-black text-xl">
                  ENROLL NOW — $499
                </button>
                <button className="brutalist-btn bg-white text-black px-10 py-4 rounded-full font-black text-xl">
                  DOWNLOAD SYLLABUS
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="brutalist-card bg-[#FDF8F1] rotate-3 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  className="rounded-xl border-2 border-black shadow-[4px_4px_0px_#000]"
                  alt="Students learning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Writing Mastery", desc: "Master Task 1 and 2 with daily examiner feedback.", color: "#E11D48" },
            { title: "Speaking Fluency", desc: "Live 1-on-1 mock interviews every week.", color: "#FACC15" },
            { title: "Logic & Strategy", desc: "Learn to hack the Reading and Listening traps.", color: "#059669" }
          ].map((item, i) => (
            <div key={i} className="brutalist-card p-10 rounded-3xl" style={{ backgroundColor: item.color === "#FACC15" ? "#FACC15" : "white" }}>
              <div className="text-4xl mb-4">0{i+1}</div>
              <h3 className="text-3xl font-black mb-4 uppercase">{item.title}</h3>
              <p className="text-lg font-bold opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Instructor */}
        <div className="mt-32 brutalist-card bg-white p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            <img 
              src="https://i.pravatar.cc/400?u=examiner" 
              className="w-full aspect-square object-cover rounded-3xl border-4 border-black shadow-[12px_12px_0px_#2563EB]"
              alt="Instructor"
            />
          </div>
          <div className="flex-1">
            <span className="text-[#E11D48] font-black tracking-widest text-sm uppercase">HEAD OF CURRICULUM</span>
            <h2 className="text-5xl font-black mt-2 mb-6 tracking-tighter">Meet Dr. Julian Sterling</h2>
            <p className="text-xl font-bold text-gray-700 leading-relaxed mb-8">
              "After 15 years as a Senior IELTS Examiner for the British Council, I've seen exactly why students fail. I built this course to bridge that gap with logic, not just language."
            </p>
            <div className="flex gap-4">
              <div className="bg-black text-white px-4 py-2 rounded-full text-xs font-black">15+ YRS EXPERIENCE</div>
              <div className="bg-[#2563EB] text-white px-4 py-2 rounded-full text-xs font-black">FORMER SENIOR EXAMINER</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
