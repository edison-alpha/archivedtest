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
      <aside className="w-full lg:w-64 bg-white border-r-4 border-black p-6 flex flex-col justify-between">
        <div>
          <div className="mb-10">
            <GlobalingoLogo variant="default" showText={true} />
          </div>
          <nav className="space-y-3">
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
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all border-2 border-black ${
                  item.label === 'Overview' 
                    ? 'bg-[#FACC15] shadow-[4px_4px_0px_#000] -translate-y-0.5' 
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
          className="mt-10 w-full bg-black text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider border-2 border-black"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
              Hello, <span className="text-[#2563EB]">{user.name.split(' ')[0]}!</span>
            </h1>
            <p className="text-lg font-medium text-gray-500">You're making solid progress toward <span className="text-black border-b-3 border-[#FACC15]">Band {user.targetBand}</span>.</p>
          </div>
          <div className="bg-white border-3 border-black p-5 rounded-2xl shadow-[5px_5px_0px_#000] flex items-center gap-5">
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase opacity-50">Current Goal</div>
              <div className="text-2xl font-black">Band {user.targetBand}</div>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center text-white text-2xl font-black border-3 border-black">
              {user.targetBand}
            </div>
          </div>
        </header>

        {/* Skill Performance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all">
              <div className="flex justify-between items-start mb-5">
                <div className="w-11 h-11 rounded-xl border-2 border-black flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform" style={{ backgroundColor: `${skill.color}20` }}>
                  {skill.icon}
                </div>
                <div className="text-3xl font-black" style={{ color: skill.color }}>{skill.score}</div>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-2">{skill.name}</h3>
                <div className="w-full h-2.5 bg-gray-100 rounded-full border-2 border-black overflow-hidden mb-1">
                  <div className="h-full transition-all duration-1000" style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}></div>
                </div>
                <div className="text-[10px] font-bold uppercase text-gray-500">{skill.progress}% Accuracy</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#2563EB] text-white p-8 rounded-3xl border-3 border-black shadow-[7px_7px_0px_#000] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="inline-block bg-[#FACC15] text-black px-3 py-1 rounded-full font-bold text-xs mb-5 border-2 border-black rotate-[-2deg]">
                  NEXT STEP
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tighter italic">Ready for a Full Simulation?</h2>
                <p className="text-base font-medium opacity-90 mb-8 max-w-lg leading-relaxed">
                  The best way to hit your target is to practice in a high-pressure environment. Our Mock Exam engine is 1:1 with the real test.
                </p>
                <button 
                  onClick={() => onNavigate('all-tests')}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-base border-3 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  START FULL MOCK TEST →
                </button>
              </div>
              <div className="absolute top-[-10px] right-[-20px] text-[150px] font-black opacity-10 italic select-none pointer-events-none group-hover:rotate-6 transition-transform">
                8.0
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] hover:bg-[#FEFCE8] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all cursor-pointer group" onClick={() => onNavigate('ai-simulation')}>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-xl font-black uppercase mb-2">AI Essay Grading</h3>
                <p className="font-medium text-gray-500 text-sm leading-relaxed mb-5">Write any task 2 topic and get instant examiner-level feedback.</p>
                <span className="font-bold text-[#E11D48] text-xs uppercase tracking-wider">Open Simulation →</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] hover:bg-[#FEFCE8] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all cursor-pointer group" onClick={() => onNavigate('tutors')}>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                <h3 className="text-xl font-black uppercase mb-2">Book a Session</h3>
                <p className="font-medium text-gray-500 text-sm leading-relaxed mb-5">Need personalized feedback? Talk to our former British Council examiners.</p>
                <span className="font-bold text-[#2563EB] text-xs uppercase tracking-wider">Schedule Now →</span>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white p-7 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] h-full">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6 border-b-3 border-black inline-block">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { title: 'Reading Practice #R1', date: '2 hours ago', result: '7.5', color: '#2563EB' },
                  { title: 'Writing Simulation', date: 'Yesterday', result: '6.5', color: '#E11D48' },
                  { title: 'Listening Drill #L1', date: 'Nov 20', result: '8.5', color: '#059669' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-white text-sm shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: activity.color }}>
                      {activity.result}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-tight">{activity.title}</h4>
                      <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t-2 border-black/10">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">Enrolled Programs</h4>
                <div className="space-y-3">
                  {user.enrolledClasses.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
                      <span className="font-medium text-sm">{c}</span>
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
