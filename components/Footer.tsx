
import React from 'react';
import { GlobalingoLogo } from './Branding';

export const Footer: React.FC = () => {
  const links = [
    {
      title: "GLOBALINGO",
      items: ["ABOUT US", "EXPERT TEAM", "CAREERS", "AFFILIATES", "PRIVACY"]
    },
    {
      title: "STUDY PROGRAMS",
      items: ["8.0+ MASTERCLASS", "SPEAKING BOOTCAMP", "WRITING INTENSIVE", "LISTENING WORKSHOP", "READING STRATEGIES", "GRAMMAR FOR IELTS", "VOCABULARY BUILDER", "MOCK TEST CENTER"]
    },
    {
      title: "RESOURCES",
      items: ["FREE PRACTICE TESTS", "SCORE CALCULATOR", "BLOG", "STUDY GUIDES"]
    },
    {
      title: "SUPPORT",
      items: ["HELP CENTER", "CONTACT US", "FAQ"]
    }
  ];

  return (
    <footer className="bg-[#1F1F1F] text-white py-20 px-6 md:px-12 border-t-8 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-8 group">
            <GlobalingoLogo variant="white" className="h-10" showText={true} />
          </div>
          <p className="text-gray-500 text-[10px] mb-8 leading-relaxed">
            © 2025 Globalingo Education. Empowering students globally to master high-stakes English exams. Not affiliated with IDP or British Council.
          </p>
          <div className="flex gap-4">
             {/* Simple Social Icons */}
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer">IG</div>
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer">YT</div>
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer">TT</div>
          </div>
        </div>

        {links.map((group, idx) => (
          <div key={idx} className={group.title === "STUDY PROGRAMS" ? "lg:col-span-1" : ""}>
            <h4 className="font-extrabold text-[11px] tracking-widest text-gray-500 mb-6 uppercase">{group.title}</h4>
            <ul className="space-y-4">
              {group.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[11px] font-bold hover:text-white transition-colors text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
