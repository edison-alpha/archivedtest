
import React, { useState } from 'react';
import { ViewState, UserData } from '../App';
import { GlobalingoLogo } from './Branding';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  isAuthenticated?: boolean;
  user?: UserData | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isAuthenticated, user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FEFCE8]/90 backdrop-blur-md border-b-4 border-black py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <button 
          onClick={() => onNavigate('home')}
          className="hover:scale-105 transition-transform"
        >
          <GlobalingoLogo variant="default" className="h-12" showText={true} />
        </button>
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-gray-700">
          <button onClick={() => onNavigate('detail')} className="hover:text-[#E11D48] transition-colors">Masterclasses</button>
          <button onClick={() => onNavigate('all-tests')} className="hover:text-[#E11D48] transition-colors">Tests</button>
          <button onClick={() => onNavigate('pricing')} className="hover:text-[#E11D48] transition-colors">Pricing</button>
          <button onClick={() => onNavigate('tutors')} className="hover:text-[#E11D48] transition-colors">Expert Tutors</button>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <button 
              onClick={() => onNavigate('signin')}
              className="font-black text-xs uppercase tracking-widest hover:text-[#E11D48] mr-4"
            >
              Sign In
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="brutalist-btn bg-[#2563EB] text-white px-6 py-2 rounded-full text-xs font-black hover:bg-blue-700"
            >
              GET STARTED
            </button>
          </>
        ) : (
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 brutalist-btn bg-white px-3 py-1 rounded-full group hover:shadow-[6px_6px_0px_#000] transition-all"
            >
              <div className="text-right hidden md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Student</div>
                <div className="text-xs font-black truncate max-w-[100px]">{user?.name}</div>
              </div>
              <img 
                src={`https://i.pravatar.cc/100?u=${user?.email}`} 
                className="w-10 h-10 rounded-full border-2 border-black group-hover:rotate-6 transition-transform" 
                alt="Profile"
              />
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-4 w-56 bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-2xl overflow-hidden py-2 z-50">
                <button 
                  onClick={() => { onNavigate('profile'); setShowDropdown(false); }}
                  className="w-full text-left px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#FEFCE8] transition-colors"
                >
                  My Profile
                </button>
                <button 
                  onClick={() => { onNavigate('dashboard'); setShowDropdown(false); }}
                  className="w-full text-left px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#FEFCE8] transition-colors"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => { onNavigate('all-tests'); setShowDropdown(false); }}
                  className="w-full text-left px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#FEFCE8] transition-colors"
                >
                  All Tests
                </button>
                <div className="h-px bg-black/10 mx-4 my-2"></div>
                <button 
                  onClick={() => { onLogout?.(); setShowDropdown(false); }}
                  className="w-full text-left px-6 py-3 font-black text-xs uppercase tracking-widest text-[#E11D48] hover:bg-red-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
