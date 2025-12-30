
import React from 'react';
import { UserData } from '../App';

interface ProfilePageProps {
  user: UserData;
  onBack: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack }) => {
  return (
    <div className="bg-[#FEFCE8] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="mb-12 font-black text-xl flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          ← BACK TO DASHBOARD
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main User Card */}
          <div className="lg:col-span-1">
            <div className="brutalist-card bg-white p-10 rounded-[40px] text-center">
              <div className="relative inline-block mb-8">
                <img 
                  src={`https://i.pravatar.cc/300?u=${user.email}`} 
                  className="w-40 h-40 rounded-full border-4 border-black shadow-[8px_8px_0px_#2563EB]"
                  alt={user.name}
                />
                <div className="absolute -bottom-2 -right-2 bg-[#FACC15] border-2 border-black w-12 h-12 rounded-full flex items-center justify-center font-black shadow-[2px_2px_0px_#000]">
                  {user.targetBand}
                </div>
              </div>
              <h1 className="text-3xl font-black mb-2 uppercase tracking-tight">{user.name}</h1>
              <p className="font-bold text-gray-400 mb-8">{user.email}</p>
              
              <div className="space-y-4 pt-8 border-t-4 border-black/5">
                <div className="bg-[#2563EB] text-white p-4 rounded-2xl border-2 border-black">
                  <div className="text-xs font-black uppercase tracking-widest opacity-70">Target Band</div>
                  <div className="text-3xl font-black">{user.targetBand}</div>
                </div>
                <button className="w-full border-2 border-black py-3 rounded-full font-black text-xs hover:bg-black hover:text-white transition-colors">
                  EDIT PROFILE
                </button>
              </div>
            </div>
          </div>

          {/* Stats & Classes */}
          <div className="lg:col-span-2 space-y-12">
            {/* Score Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Reading', score: user.testScores.reading, color: '#2563EB' },
                { label: 'Writing', score: user.testScores.writing, color: '#E11D48' },
                { label: 'Listening', score: user.testScores.listening, color: '#059669' },
                { label: 'Speaking', score: user.testScores.speaking, color: '#FACC15' }
              ].map((s, i) => (
                <div key={i} className="brutalist-card bg-white p-6 rounded-3xl text-center flex flex-col items-center justify-center gap-2">
                  <span className="font-black text-[10px] uppercase tracking-widest text-gray-400">{s.label}</span>
                  <div className="text-4xl font-black" style={{ color: s.color }}>{s.score}</div>
                </div>
              ))}
            </div>

            {/* Enrolled Classes */}
            <div className="brutalist-card bg-white p-10 rounded-[40px]">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                Enrolled Programs <div className="h-1 flex-1 bg-black/5"></div>
              </h2>
              <div className="space-y-6">
                {user.enrolledClasses.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border-2 border-black group hover:bg-[#FEFCE8] transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="text-3xl">📚</div>
                      <div>
                        <h3 className="font-black text-xl uppercase tracking-tight">{c}</h3>
                        <p className="font-bold text-xs text-gray-400">Progress: 65% Completed</p>
                      </div>
                    </div>
                    <button className="brutalist-btn bg-black text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                      Continue
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="brutalist-card bg-[#1F1F1F] text-white p-10 rounded-[40px]">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Recent Test History</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-white/10 text-xs font-black uppercase tracking-widest text-white/40">
                      <th className="pb-4">Test Date</th>
                      <th className="pb-4">Type</th>
                      <th className="pb-4">Overall Band</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-6">Nov 20, 2025</td>
                      <td className="py-6 uppercase">Full Mock Test #04</td>
                      <td className="py-6"><span className="text-[#FACC15]">7.5</span></td>
                      <td className="py-6"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px]">SCORING DONE</span></td>
                    </tr>
                    <tr>
                      <td className="py-6">Nov 15, 2025</td>
                      <td className="py-6 uppercase">Writing Intensive #02</td>
                      <td className="py-6"><span className="text-[#FACC15]">6.5</span></td>
                      <td className="py-6"><span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-[10px]">FEEDBACK PENDING</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
