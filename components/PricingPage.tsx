
import React from 'react';

interface PricingPageProps {
  onBack: () => void;
  onEnroll: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBack, onEnroll }) => {
  return (
    <div className="bg-[#FEFCE8] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#E11D48] text-white px-6 py-2 rounded-full border-2 border-black font-black text-sm shadow-[4px_4px_0px_#000] mb-8 animate-float">
            NEW YEAR SPECIAL OFFERS 🔥
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            Invest in Your <br/><span className="text-[#2563EB]">Global Future.</span>
          </h1>
          <p className="text-2xl font-bold text-gray-700 max-w-2xl mx-auto">
            Boost your Brain, Boost your Scores! Pilih paket yang sesuai dengan targetmu.
          </p>
        </div>

        {/* Top Tier Classes: Regular & Private */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Regular Class */}
          <div className="brutalist-card bg-white p-12 rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-10 right-[-40px] bg-[#FACC15] text-black font-black py-2 px-12 rotate-45 border-y-2 border-black shadow-[0px_4px_0px_rgba(0,0,0,0.1)]">
              50% OFF
            </div>
            <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">IELTS Regular Class</h2>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-lg font-bold text-gray-400 line-through decoration-[#E11D48] decoration-4">Rp 600.000</span>
              <span className="text-5xl font-black text-[#E11D48]">Rp 299.000</span>
            </div>
            
            <div className="space-y-4 mb-12">
              <div className="font-black text-sm uppercase text-[#2563EB] mb-4 tracking-widest">PROGRAM DETAILS:</div>
              {[
                "Online Class Intensive",
                "Intensive Class Per Skill",
                "60 Minutes / Meeting",
                "24 Total Meetings For All Skills",
                "Free Module & Recording Class",
                "Free Prediction Test"
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-gray-700">
                  <span className="text-[#059669]">✓</span> {f}
                </div>
              ))}
            </div>
            <button onClick={onEnroll} className="w-full brutalist-btn bg-[#E11D48] text-white py-5 rounded-full font-black text-xl hover:scale-105 transition-transform">
              DAFTAR REGULAR
            </button>
          </div>

          {/* Private Class */}
          <div className="brutalist-card bg-[#2563EB] text-white p-12 rounded-[40px] relative">
            <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">IELTS Private Class</h2>
            <div className="space-y-1 mb-8">
              <div className="text-2xl font-black text-[#FACC15]">IDR 900K <span className="text-sm text-white/70">/ Perskill</span></div>
              <div className="text-4xl font-black">IDR 2.8Jt <span className="text-sm text-white/70">/ All Skills</span></div>
            </div>

            <div className="space-y-4 mb-12">
              <div className="font-black text-sm uppercase text-white/50 mb-4 tracking-widest">VIP BENEFITS:</div>
              {[
                "1 on 1 With Expert Tutor",
                "Belajar Kapan Aja & Dimana Aja",
                "40 Total Meetings For All Skills",
                "60 Minutes / Meeting",
                "Free Pretest & Prediction Test",
                "Personalized Study Plan"
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-blue-50">
                  <span className="text-[#FACC15]">★</span> {f}
                </div>
              ))}
            </div>
            <button onClick={onEnroll} className="w-full brutalist-btn bg-white text-black py-5 rounded-full font-black text-xl hover:scale-105 transition-transform">
              GABUNG PRIVATE
            </button>
          </div>
        </div>

        {/* Scoring Service Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tighter mb-4">ONLINE IELTS SCORING</h2>
            <p className="text-xl font-bold text-gray-500">Ukur kemampuanmu disini sebelum official test.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Per Skill 1X", price: "IDR 70K", desc: "Fokus ke 1 skill yang pengen kamu tingkatin", icon: "🚀", color: "white" },
              { title: "All Skills 1X", price: "IDR 200K", desc: "Cocok kalo pengen tahu kemampuan secara utuh", icon: "📊", color: "#FACC15" },
              { title: "All Skills 5X", price: "IDR 700K", desc: "Buat kamu yang lagi belajar intensif & akan official test", icon: "🏆", color: "white" }
            ].map((p, i) => (
              <div key={i} className="brutalist-card p-10 rounded-3xl text-center" style={{ backgroundColor: p.color }}>
                <div className="text-5xl mb-6">{p.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-2">{p.title}</h3>
                <p className="font-bold text-gray-600 mb-8 h-12">{p.desc}</p>
                <div className="text-4xl font-black text-[#E11D48] mb-8">{p.price}</div>
                <button onClick={onEnroll} className="w-full border-4 border-black font-black py-3 rounded-full hover:bg-black hover:text-white transition-colors">
                  AMBIL TES
                </button>
              </div>
            ))}
          </div>

          {/* Highlight Program & Benefit */}
          <div className="brutalist-card bg-white p-12 rounded-[40px] border-[#2563EB]">
            <h3 className="text-3xl font-black mb-12 text-center flex items-center justify-center gap-4">
              📝 <span className="border-b-8 border-[#2563EB]">Highlight Program & Benefit</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Program", desc: "Live Feedbacks untuk skill aktif (Speaking & Writing)", icon: "📅" },
                { title: "Band-Focused", desc: "Feedback diarahkan sesuai target (6.0, 6.5, 7.0+)", icon: "🎓" },
                { title: "Jadwal Fleksibel", desc: "Bisa pilih waktu sesuai ketersediaan tutor", icon: "⏰" },
                { title: "Progress Tracker", desc: "Grafik perkembangan skor tiap minggu", icon: "📈" }
              ].map((b, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-3xl">{b.icon}</div>
                  <h4 className="font-black text-lg uppercase">{b.title}</h4>
                  <p className="font-bold text-gray-500 leading-snug">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button onClick={onBack} className="font-black text-xl hover:underline underline-offset-8 decoration-4 decoration-[#E11D48] mb-12">
            ← KEMBALI KE BERANDA
          </button>
          <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-black">PAYMENT PARTNERS:</span>
            <span className="font-bold italic underline">BCA</span>
            <span className="font-bold italic underline">GOPAY</span>
            <span className="font-bold italic underline">OVO</span>
            <span className="font-bold italic underline">MANDIRI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
