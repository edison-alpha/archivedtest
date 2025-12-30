
import React, { useState } from 'react';

interface AuthPagesProps {
  type: 'signin' | 'signup';
  onBack: () => void;
  onToggle: () => void;
  onAuthSuccess: (name: string, email: string) => void;
}

export const AuthPages: React.FC<AuthPagesProps> = ({ type, onBack, onToggle, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulated Authentication Logic
    setTimeout(() => {
      if (formData.password.length < 4) {
        setError("Password must be at least 4 characters.");
        setIsLoading(false);
        return;
      }

      let finalName = formData.name;
      
      // If signing in, and name is empty, we derive a name from the email for the profile
      if (type === 'signin' && !finalName) {
        const emailPrefix = formData.email.split('@')[0];
        finalName = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);
      } else if (!finalName) {
        finalName = "Student";
      }

      onAuthSuccess(finalName, formData.email);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FEFCE8] flex flex-col md:flex-row font-sans">
      {/* Left side: Branding & Inspiration */}
      <div className="w-full md:w-1/2 bg-[#2563EB] p-12 flex flex-col justify-between border-r-8 border-black relative overflow-hidden">
        <button 
          onClick={onBack}
          className="text-white font-black text-xl flex items-center gap-2 hover:translate-x-[-4px] transition-transform z-10 group"
        >
          <span className="group-hover:rotate-12 transition-transform">←</span> EXIT TO HOME
        </button>
        
        <div className="relative z-10">
          <div className="bg-[#FACC15] text-black px-4 py-1 rounded-full font-black text-xs inline-block mb-6 border-2 border-black rotate-[-2deg]">
            {type === 'signup' ? 'NEW SESSION STARTING' : 'WELCOME BACK'}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8 italic">
            {type === 'signup' ? 'Start your' : 'Back to the'} <br/> <span className="text-[#FACC15] underline decoration-8 underline-offset-8">Grind.</span>
          </h1>
          <p className="text-white text-2xl font-bold opacity-90 max-w-md leading-relaxed">
            {type === 'signup' 
              ? 'Join 50,000+ students mastering the English language with former examiner-led strategies.' 
              : 'Continue your journey towards Band 8.0+. Your tutors and modules are waiting.'}
          </p>
        </div>

        <div className="bg-black/20 p-8 rounded-[32px] border-4 border-white/10 z-10 backdrop-blur-sm">
          <p className="text-white text-lg font-bold italic mb-4 leading-snug">
            "Before Globalingo, I was stuck at 6.0 for two years. One month of their writing intensive and I hit a 7.5. It's about the logic, not just the words."
          </p>
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/100?u=success_story" className="w-12 h-12 rounded-full border-2 border-white" alt="Student" />
            <div>
              <span className="text-white font-black text-sm uppercase block">Hassan Al-Fayed</span>
              <span className="text-[#FACC15] font-black text-[10px] uppercase">BAND 8.0 OVERALL</span>
            </div>
          </div>
        </div>

        {/* Massive background text for aesthetics */}
        <div className="absolute -bottom-20 -left-20 text-[350px] font-black text-white opacity-5 select-none pointer-events-none italic">
          {type === 'signup' ? 'GO' : 'HI'}
        </div>
      </div>

      {/* Right side: Interactive Form */}
      <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase italic">
              {type === 'signup' ? 'Create Account' : 'Sign In'}
            </h2>
            <p className="text-gray-400 font-bold">
              {type === 'signup' ? 'Fill in your details to unlock the dashboard.' : 'Enter your credentials to access your modules.'}
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-4 border-red-500 p-4 rounded-2xl text-red-600 font-black text-xs uppercase animate-fade-up">
                ⚠️ {error}
              </div>
            )}

            {type === 'signup' && (
              <div className="space-y-2">
                <label className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-4 border-black p-5 text-xl font-bold focus:shadow-[8px_8px_0px_#2563EB] outline-none transition-all rounded-2xl" 
                  placeholder="Your Name"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border-4 border-black p-5 text-xl font-bold focus:shadow-[8px_8px_0px_#2563EB] outline-none transition-all rounded-2xl" 
                placeholder="you@email.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400">Security Password</label>
                {type === 'signin' && (
                  <button type="button" className="text-[10px] font-black text-[#E11D48] uppercase tracking-widest hover:underline">Forgot?</button>
                )}
              </div>
              <input 
                required
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full border-4 border-black p-5 text-xl font-bold focus:shadow-[8px_8px_0px_#2563EB] outline-none transition-all rounded-2xl" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full brutalist-btn bg-[#E11D48] text-white py-6 rounded-full font-black text-2xl mt-10 shadow-[8px_8px_0px_#000] relative overflow-hidden ${isLoading ? 'opacity-80' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  AUTHENTICATING...
                </div>
              ) : (
                type === 'signup' ? 'START LEARNING →' : 'ENTER PORTAL →'
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="font-black text-xs text-gray-400 uppercase tracking-widest mb-6">Social Quick Connect</p>
            <div className="flex gap-4">
              <button onClick={handleSubmit} className="flex-1 brutalist-btn bg-white border-4 border-black py-4 font-black flex items-center justify-center gap-3 rounded-2xl hover:bg-gray-50">
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" /> GOOGLE
              </button>
              <button onClick={handleSubmit} className="flex-1 brutalist-btn bg-white border-4 border-black py-4 font-black flex items-center justify-center gap-3 rounded-2xl hover:bg-gray-50">
                <img src="https://www.apple.com/favicon.ico" className="w-5 h-5" alt="Apple" /> APPLE
              </button>
            </div>
          </div>

          <div className="mt-16 text-center border-t-2 border-black/5 pt-10">
            <button 
              onClick={onToggle} 
              className="font-black text-sm uppercase tracking-[0.1em] text-[#2563EB] hover:text-[#E11D48] transition-colors flex flex-col items-center gap-1 mx-auto group"
            >
              {type === 'signup' ? 'Already a member?' : "Don't have an account yet?"}
              <span className="text-xl group-hover:translate-x-2 transition-transform">
                {type === 'signup' ? 'SIGN IN HERE →' : 'CREATE ACCOUNT NOW →'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
