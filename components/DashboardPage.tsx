
import React from 'react';
import { UserData, ViewState } from '../App';
import { GlobalingoLogo } from './Branding';

interface DashboardPageProps {
  user: UserData;
  onNavigate: (view: ViewState) => void;
  onLogout: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ user, onNavigate, onLogout }) => {
  const skills = [
    { name: 'Reading', score: user.testScores.reading, color: '#2563EB', icon: '📖', progress: 85 },
    { name: 'Writing', score: user.testScores.writing, color: '#E11D48', icon: '✍️', progress: 65 },
    { name: 'Listening', score: user.testScores.listening, color: '#059669', icon: '🎧', progress: 90 },
    { name: 'Speaking', score: user.testScores.speaking, color: '#FACC15', icon: '🗣️', progress: 70 },
  ];

  return (
    <div className="min-h-screen bg-[#FEFCE8] flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-72 bg-white border-r-8 border-black p-8 flex flex-col justify-between">
        <div>
          <div className="mb-12">
            <GlobalingoLogo variant="default" showText={true} />
          </div>
          <nav className="space-y-4">
            {[
              { label: 'Overview', icon: '🏠', view: 'dashboard' as ViewState },
              { label: 'Practice Tests', icon: '📝', view: 'all-tests' as ViewState },
              { label: 'AI Simulation', icon: '🤖', view: 'ai-simulation' as ViewState },
              { label: 'Tutors', icon: '🎓', view: 'tutors' as ViewState },
              { label: 'Profile', icon: '👤', view: 'profile' as ViewState },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all border-4 border-black ${
                  item.label === 'Overview' 
                    ? 'bg-[#FACC15] shadow-[4px_4px_0px_#000] -translate-y-1' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{item.icon}</span> {item.label}
              </button>
            ))}
          </nav>
        </div>
        <button 
          onClick={onLogout}
          className="mt-12 w-full brutalist-btn bg-black text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              Hello, <span className="text-[#2563EB]">{user.name.split(' ')[0]}!</span>
            </h1>
            <p className="text-xl font-bold text-gray-500">You're making solid progress toward <span className="text-black border-b-4 border-[#FACC15]">Band {user.targetBand}</span>.</p>
          </div>
          <div className="bg-white border-4 border-black p-6 rounded-[32px] shadow-[8px_8px_0px_#000] flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] font-black uppercase opacity-50">Current Goal</div>
              <div className="text-2xl font-black">Band {user.targetBand}</div>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#059669] flex items-center justify-center text-white text-3xl font-black border-4 border-black">
              {user.targetBand}
            </div>
          </div>
        </header>

        {/* Skill Performance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="brutalist-card bg-white p-8 rounded-[32px] border-black flex flex-col justify-between group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform" style={{ backgroundColor: `${skill.color}20` }}>
                  {skill.icon}
                </div>
                <div className="text-3xl font-black" style={{ color: skill.color }}>{skill.score}</div>
              </div>
              <div>
                <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-2">{skill.name}</h3>
                <div className="w-full h-3 bg-gray-100 rounded-full border-2 border-black overflow-hidden mb-2">
                  <div className="h-full transition-all duration-1000" style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}></div>
                </div>
                <div className="text-[10px] font-black uppercase text-gray-500">{skill.progress}% Accuracy</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="brutalist-card bg-[#2563EB] text-white p-10 rounded-[40px] border-black shadow-[12px_12px_0px_#000] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="inline-block bg-[#FACC15] text-black px-4 py-1 rounded-full font-black text-xs mb-6 border-2 border-black rotate-[-2deg]">
                  NEXT STEP
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Ready for a Full Simulation?</h2>
                <p className="text-xl font-bold opacity-90 mb-10 max-w-lg leading-snug">
                  The best way to hit your target is to practice in a high-pressure environment. Our Mock Exam engine is 1:1 with the real test.
                </p>
                <button 
                  onClick={() => onNavigate('all-tests')}
                  className="bg-white text-black px-10 py-5 rounded-full font-black text-xl brutalist-btn hover:scale-105 transition-transform"
                >
                  START FULL MOCK TEST →
                </button>
              </div>
              <div className="absolute top-[-20px] right-[-40px] text-[200px] font-black opacity-10 italic select-none pointer-events-none group-hover:rotate-6 transition-transform">
                8.0
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="brutalist-card bg-white p-8 rounded-[32px] border-black hover:bg-[#FEFCE8] transition-colors cursor-pointer group" onClick={() => onNavigate('ai-simulation')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-2xl font-black uppercase mb-2">AI Essay Grading</h3>
                <p className="font-bold text-gray-500 text-sm leading-relaxed mb-6">Write any task 2 topic and get instant examiner-level feedback.</p>
                <span className="font-black text-[#E11D48] text-xs uppercase tracking-widest">Open Simulation →</span>
              </div>
              <div className="brutalist-card bg-white p-8 rounded-[32px] border-black hover:bg-[#FEFCE8] transition-colors cursor-pointer group" onClick={() => onNavigate('tutors')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                <h3 className="text-2xl font-black uppercase mb-2">Book a Session</h3>
                <p className="font-bold text-gray-500 text-sm leading-relaxed mb-6">Need personalized feedback? Talk to our former British Council examiners.</p>
                <span className="font-black text-[#2563EB] text-xs uppercase tracking-widest">Schedule Now →</span>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="brutalist-card bg-white p-10 rounded-[40px] border-black h-full">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">Recent Activity</h3>
              <div className="space-y-8">
                {[
                  { title: 'Reading Practice #R1', date: '2 hours ago', result: '7.5', color: '#2563EB' },
                  { title: 'Writing Simulation', date: 'Yesterday', result: '6.5', color: '#E11D48' },
                  { title: 'Listening Drill #L1', date: 'Nov 20', result: '8.5', color: '#059669' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-black text-white shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: activity.color }}>
                      {activity.result}
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight">{activity.title}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t-4 border-black/5">
                <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-6">Enrolled Programs</h4>
                <div className="space-y-4">
                  {user.enrolledClasses.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
                      <span className="font-bold text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
