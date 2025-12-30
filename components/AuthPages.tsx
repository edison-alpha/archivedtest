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

    setTimeout(() => {
      if (formData.password.length < 4) {
        setError("Password must be at least 4 characters.");
        setIsLoading(false);
        return;
      }

      let finalName = formData.name;
      
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
      <div className="w-full md:w-1/2 bg-[#2563EB] p-10 flex flex-col justify-between border-r-4 border-black relative overflow-hidden">
        <button 
          onClick={onBack}
          className="text-white font-bold text-base flex items-center gap-2 hover:translate-x-[-4px] transition-transform z-10 group"
        >
          <span className="group-hover:rotate-12 transition-transform">←</span> EXIT TO HOME
        </button>
        
        <div className="relative z-10">
          <div className="bg-[#FACC15] text-black px-4 py-1 rounded-full font-bold text-xs inline-block mb-5 border-2 border-black rotate-[-2deg]">
            {type === 'signup' ? 'NEW SESSION STARTING' : 'WELCOME BACK'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 italic">
            {type === 'signup' ? 'Start your' : 'Back to the'} <br/> <span className="text-[#FACC15] underline decoration-4 underline-offset-4">Grind.</span>
          </h1>
          <p className="text-white text-xl font-medium opacity-90 max-w-md leading-relaxed">
            {type === 'signup' 
              ? 'Join 50,000+ students mastering the English language with former examiner-led strategies.' 
              : 'Continue your journey towards Band 8.0+. Your tutors and modules are waiting.'}
          </p>
        </div>

        <div className="bg-black/20 p-6 rounded-2xl border-2 border-white/10 z-10 backdrop-blur-sm">
          <p className="text-white text-base font-medium italic mb-4 leading-snug">
            "Before Achieved.test, I was stuck at 6.0 for two years. One month of their writing intensive and I hit a 7.5."
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?u=success_story" className="w-11 h-11 rounded-full border-2 border-white" alt="Student" />
            <div>
              <span className="text-white font-bold text-sm uppercase block">Hassan Al-Fayed</span>
              <span className="text-[#FACC15] font-bold text-[10px] uppercase">BAND 8.0 OVERALL</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-16 -left-16 text-[280px] font-black text-white opacity-5 select-none pointer-events-none italic">
          {type === 'signup' ? 'GO' : 'HI'}
        </div>
      </div>

      {/* Right side: Interactive Form */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black mb-3 tracking-tighter uppercase italic">
              {type === 'signup' ? 'Create Account' : 'Sign In'}
            </h2>
            <p className="text-gray-400 font-medium">
              {type === 'signup' ? 'Fill in your details to unlock the dashboard.' : 'Enter your credentials to access your modules.'}
            </p>
          </div>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-3 border-red-500 p-4 rounded-xl text-red-600 font-bold text-xs uppercase">
                ⚠️ {error}
              </div>
            )}

            {type === 'signup' && (
              <div className="space-y-2">
                <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-3 border-black p-4 text-base font-medium focus:shadow-[6px_6px_0px_#2563EB] outline-none transition-all rounded-xl" 
                  placeholder="Your Name"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border-3 border-black p-4 text-base font-medium focus:shadow-[6px_6px_0px_#2563EB] outline-none transition-all rounded-xl" 
                placeholder="you@email.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400">Password</label>
                {type === 'signin' && (
                  <button type="button" className="text-[10px] font-bold text-[#E11D48] uppercase tracking-wider hover:underline">Forgot?</button>
                )}
              </div>
              <input 
                required
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full border-3 border-black p-4 text-base font-medium focus:shadow-[6px_6px_0px_#2563EB] outline-none transition-all rounded-xl" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full bg-[#E11D48] text-white py-4 rounded-full font-bold text-lg mt-6 border-3 border-black shadow-[6px_6px_0px_#000] hover:shadow-[3px_3px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all ${isLoading ? 'opacity-80' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  AUTHENTICATING...
                </div>
              ) : (
                type === 'signup' ? 'START LEARNING →' : 'ENTER PORTAL →'
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-5">Or continue with</p>
            <div className="flex gap-4">
              <button onClick={handleSubmit} className="flex-1 bg-white border-3 border-black py-3 font-bold text-sm flex items-center justify-center gap-2 rounded-xl hover:bg-gray-50 shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" /> GOOGLE
              </button>
              <button onClick={handleSubmit} className="flex-1 bg-white border-3 border-black py-3 font-bold text-sm flex items-center justify-center gap-2 rounded-xl hover:bg-gray-50 shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <img src="https://www.apple.com/favicon.ico" className="w-5 h-5" alt="Apple" /> APPLE
              </button>
            </div>
          </div>

          <div className="mt-10 text-center border-t border-black/10 pt-8">
            <button 
              onClick={onToggle} 
              className="font-bold text-sm uppercase tracking-wider text-[#2563EB] hover:text-[#E11D48] transition-colors"
            >
              {type === 'signup' ? 'Already a member? ' : "Don't have an account? "}
              <span className="underline">
                {type === 'signup' ? 'Sign In' : 'Create Account'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
