
import React from 'react';
import { GlobalingoLogo } from './Branding';

export const Footer: React.FC = () => {
  const links = [
    {
      title: "ARCHIVED.TEST",
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
            © 2025 Archived.test. Empowering students globally to master high-stakes English exams. Not affiliated with IDP or British Council.
          </p>
          <div className="flex gap-3">
             {/* Social Icons */}
             <a href="https://www.instagram.com/achieved.id/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-colors cursor-pointer" title="Instagram">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-colors cursor-pointer" title="YouTube">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors cursor-pointer" title="WhatsApp">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#000000] transition-colors cursor-pointer" title="Threads">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.396-1.17 1.016-.018 1.972.134 2.727.369l.007-.013c-.003-.4-.043-.79-.119-1.166-.205-1.014-.706-1.787-1.451-2.236-.8-.482-1.894-.716-3.156-.675l-.075-2.117c1.595-.05 3.024.27 4.139.93 1.107.654 1.9 1.65 2.293 2.88.26.81.39 1.7.39 2.648v.406c1.063.588 1.871 1.399 2.381 2.416.741 1.477.871 3.36-.249 5.456-1.168 2.184-3.263 3.503-6.227 3.92-.438.062-.89.094-1.351.094zm-.12-8.149c-.413.008-.812.065-1.182.17-.622.175-1.122.47-1.446.853-.324.383-.474.834-.447 1.342.027.51.238.95.628 1.31.39.36.948.567 1.573.534.995-.053 1.756-.434 2.33-1.166.347-.443.594-.99.737-1.63-.55-.21-1.21-.38-1.94-.4l-.253-.013z"/></svg>
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors cursor-pointer" title="LinkedIn">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
             </a>
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
