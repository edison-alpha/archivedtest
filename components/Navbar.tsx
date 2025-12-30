import React, { useState } from 'react';
import { ViewState, UserData } from '../App';
import { GlobalingoLogo } from './Branding';
import defaultAvatar from '../src/founder.png';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  isAuthenticated?: boolean;
  user?: UserData | null;
  onLogout?: () => void;
}

interface DropdownItem {
  title: string;
  description: string;
  view: ViewState;
}

interface DropdownSection {
  label: string;
  view: ViewState;
}

const programsDropdown: { sections: DropdownSection[]; courses: DropdownItem[] } = {
  sections: [
    { label: 'Courses', view: 'detail' },
    { label: 'Free Practice Tests', view: 'all-tests' },
  ],
  courses: [
    { title: 'IELTS Academic Prep', description: 'Comprehensive preparation for IELTS Academic with expert strategies and practice.', view: 'detail' },
    { title: 'IELTS General Training', description: 'Master the General Training module for immigration and work purposes.', view: 'detail' },
    { title: 'Speaking Masterclass', description: 'Intensive speaking practice with AI feedback and expert tips for Band 7+.', view: 'detail' },
    { title: 'Writing Task 1 & 2', description: 'Learn proven templates and techniques to excel in both writing tasks.', view: 'detail' },
    { title: 'Listening Intensive', description: 'Sharpen your listening skills with real exam simulations and strategies.', view: 'all-tests' },
    { title: 'Reading Speed Course', description: 'Improve reading speed and comprehension for better time management.', view: 'all-tests' },
  ],
};

const resourcesDropdown: DropdownItem[] = [
  { title: 'Study Materials', description: 'Free downloadable PDFs, vocabulary lists, and practice worksheets.', view: 'home' },
  { title: 'Band Score Calculator', description: 'Estimate your IELTS band score based on practice test results.', view: 'all-tests' },
  { title: 'Tips & Strategies', description: 'Expert advice and proven techniques from high scorers.', view: 'home' },
  { title: 'Sample Answers', description: 'Band 9 sample answers for Writing and Speaking sections.', view: 'home' },
];

const communityDropdown: DropdownItem[] = [
  { title: 'Expert Tutors', description: 'Connect with certified IELTS instructors for personalized guidance.', view: 'tutors' },
  { title: 'Study Groups', description: 'Join study groups and practice with fellow test-takers worldwide.', view: 'home' },
  { title: 'Discussion Forum', description: 'Ask questions, share tips, and learn from the community.', view: 'home' },
  { title: 'Success Stories', description: 'Read inspiring stories from students who achieved their target scores.', view: 'home' },
];

const pricingDropdown: DropdownItem[] = [
  { title: 'Free Plan', description: 'Access basic practice tests and limited study materials at no cost.', view: 'pricing' },
  { title: 'Premium Plan', description: 'Unlock all courses, AI feedback, and unlimited practice tests.', view: 'pricing' },
  { title: 'Enterprise', description: 'Custom solutions for schools, universities, and organizations.', view: 'pricing' },
  { title: 'Compare Plans', description: 'See detailed feature comparison across all subscription tiers.', view: 'pricing' },
];

const aboutDropdown: DropdownItem[] = [
  { title: 'Our Story', description: 'Learn about our mission to make IELTS preparation accessible to everyone.', view: 'home' },
  { title: 'Our Team', description: 'Meet the experts and educators behind Globalingo.', view: 'home' },
  { title: 'Careers', description: 'Join our team and help students achieve their dreams.', view: 'home' },
  { title: 'Contact Us', description: 'Get in touch with our support team for any questions.', view: 'home' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isAuthenticated, user, onLogout }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="sticky top-0 z-50 bg-[#FEFCE8] px-6 md:px-12">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
            <GlobalingoLogo variant="default" className="h-8" showText={true} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold uppercase tracking-wider text-black">
          <div className="relative" onMouseEnter={() => handleMouseEnter('programs')} onMouseLeave={handleMouseLeave}>
            <button className={`hover:opacity-60 transition-opacity ${activeDropdown === 'programs' ? 'opacity-60' : ''}`}>
              PROGRAMS & COURSES
            </button>
          </div>
          <div className="relative" onMouseEnter={() => handleMouseEnter('community')} onMouseLeave={handleMouseLeave}>
            <button className={`hover:opacity-60 transition-opacity ${activeDropdown === 'community' ? 'opacity-60' : ''}`}>
              COMMUNITY
            </button>
          </div>
          <div className="relative" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
            <button className={`hover:opacity-60 transition-opacity ${activeDropdown === 'resources' ? 'opacity-60' : ''}`}>
              RESOURCES
            </button>
          </div>
          <div className="relative" onMouseEnter={() => handleMouseEnter('pricing')} onMouseLeave={handleMouseLeave}>
            <button className={`hover:opacity-60 transition-opacity ${activeDropdown === 'pricing' ? 'opacity-60' : ''}`}>
              PRICING
            </button>
          </div>
          <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
            <button className={`hover:opacity-60 transition-opacity ${activeDropdown === 'about' ? 'opacity-60' : ''}`}>
              ABOUT
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <button
              onClick={() => onNavigate('signin')}
              className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              <span>→</span>
              <span>Sign In</span>
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-3 bg-white border-2 border-black px-3 py-1 rounded-full hover:shadow-[4px_4px_0px_#000] transition-all"
              >
                <div className="text-right hidden md:block">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Student</div>
                  <div className="text-xs font-bold truncate max-w-[100px]">{user?.name}</div>
                </div>
                <img
                  src={defaultAvatar}
                  className="w-10 h-10 rounded-full border-2 border-black"
                  alt="Profile"
                />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white border-2 border-black shadow-[4px_4px_0px_#000] rounded-xl overflow-hidden py-2 z-50">
                  <button onClick={() => { onNavigate('profile'); setShowUserDropdown(false); }} className="w-full text-left px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#FEFCE8]">My Profile</button>
                  <button onClick={() => { onNavigate('dashboard'); setShowUserDropdown(false); }} className="w-full text-left px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#FEFCE8]">Dashboard</button>
                  <button onClick={() => { onNavigate('all-tests'); setShowUserDropdown(false); }} className="w-full text-left px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#FEFCE8]">All Tests</button>
                  <div className="h-px bg-black/10 mx-4 my-2"></div>
                  <button onClick={() => { onLogout?.(); setShowUserDropdown(false); }} className="w-full text-left px-6 py-3 font-bold text-xs uppercase tracking-wider text-[#E11D48] hover:bg-red-50">Sign Out</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mega Dropdown - Programs & Courses */}
      <div
        className={`absolute left-0 w-full bg-[#FEFCE8] border-t border-b border-black transition-all duration-200 ${activeDropdown === 'programs' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onMouseEnter={() => handleMouseEnter('programs')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-12 py-8 flex">
          {/* Left Sidebar with green background */}
          <div className="w-56 flex flex-col gap-4 bg-[#C1E1C1] -ml-12 pl-12 pr-8 py-4 -my-8">
            {programsDropdown.sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => { onNavigate(section.view); setActiveDropdown(null); }}
                className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-black hover:opacity-60 transition-opacity text-left"
              >
                <span>→</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
            {programsDropdown.courses.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { onNavigate(item.view); setActiveDropdown(null); }}
                className="text-left group"
              >
                <div className="text-[14px] font-bold uppercase tracking-wide text-black group-hover:opacity-60 transition-opacity">
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                  {item.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Dropdown - Resources */}
      <div
        className={`absolute left-0 w-full bg-[#FEFCE8] border-t border-b border-black transition-all duration-200 ${activeDropdown === 'resources' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onMouseEnter={() => handleMouseEnter('resources')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-12 py-8 flex">
          <div className="w-56 bg-[#C1E1C1] -ml-12 -my-8"></div>
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
            {resourcesDropdown.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { onNavigate(item.view); setActiveDropdown(null); }}
                className="text-left group"
              >
                <div className="text-[14px] font-bold uppercase tracking-wide text-black group-hover:opacity-60 transition-opacity">
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                  {item.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Dropdown - Community */}
      <div
        className={`absolute left-0 w-full bg-[#FEFCE8] border-t border-b border-black transition-all duration-200 ${activeDropdown === 'community' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onMouseEnter={() => handleMouseEnter('community')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-12 py-8 flex">
          <div className="w-56 bg-[#C1E1C1] -ml-12 -my-8"></div>
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
            {communityDropdown.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { onNavigate(item.view); setActiveDropdown(null); }}
                className="text-left group"
              >
                <div className="text-[14px] font-bold uppercase tracking-wide text-black group-hover:opacity-60 transition-opacity">
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                  {item.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Dropdown - Pricing */}
      <div
        className={`absolute left-0 w-full bg-[#FEFCE8] border-t border-b border-black transition-all duration-200 ${activeDropdown === 'pricing' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onMouseEnter={() => handleMouseEnter('pricing')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-12 py-8 flex">
          <div className="w-56 bg-[#C1E1C1] -ml-12 -my-8"></div>
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
            {pricingDropdown.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { onNavigate(item.view); setActiveDropdown(null); }}
                className="text-left group"
              >
                <div className="text-[14px] font-bold uppercase tracking-wide text-black group-hover:opacity-60 transition-opacity">
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                  {item.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Dropdown - About */}
      <div
        className={`absolute left-0 w-full bg-[#FEFCE8] border-t border-b border-black transition-all duration-200 ${activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-12 py-8 flex">
          <div className="w-56 bg-[#C1E1C1] -ml-12 -my-8"></div>
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
            {aboutDropdown.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { onNavigate(item.view); setActiveDropdown(null); }}
                className="text-left group"
              >
                <div className="text-[14px] font-bold uppercase tracking-wide text-black group-hover:opacity-60 transition-opacity">
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                  {item.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
