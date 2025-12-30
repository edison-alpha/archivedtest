import React from 'react';
import { UserData } from '../App';
import defaultAvatar from '../src/founder.png';

interface ProfilePageProps {
  user: UserData;
  onBack: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack }) => {
  return (
    <div className="bg-[#FEFCE8] min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <button onClick={onBack} className="mb-10 font-bold text-base flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          ← BACK TO DASHBOARD
        </button>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main User Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border-3 border-black shadow-[5px_5px_0px_#000] text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src={defaultAvatar} 
                  className="w-32 h-32 rounded-full border-3 border-black shadow-[5px_5px_0px_#2563EB]"
                  alt={user.name}
                />
                <div className="absolute -bottom-1 -right-1 bg-[#FACC15] border-2 border-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow-[2px_2px_0px_#000]">
                  {user.targetBand}
                </div>
              </div>
              <h1 className="text-2xl font-black mb-1 uppercase tracking-tight">{user.name}</h1>
              <p className="font-medium text-gray-400 text-sm mb-6">{user.email}</p>
              
              <div className="space-y-4 pt-6 border-t-2 border-black/5">
                <div className="bg-[#2563EB] text-white p-4 rounded-xl border-2 border-black">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">Target Band</div>
                  <div className="text-3xl font-black">{user.targetBand}</div>
                </div>
                <button className="w-full border-2 border-black py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors">
                  EDIT PROFILE
                </button>
              </div>
            </div>
          </div>

          {/* Stats & Classes */}
          <div className="lg:col-span-2 space-y-8">
            {/* Score Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { label: 'Reading', score: user.testScores.reading, color: '#2563EB' },
                { label: 'Writing', score: user.testScores.writing, color: '#E11D48' },
                { label: 'Listening', score: user.testScores.listening, color: '#059669' },
                { label: 'Speaking', score: user.testScores.speaking, color: '#FACC15' }
              ].map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] text-center flex flex-col items-center justify-center gap-1">
                  <span className="font-bold text-xs uppercase tracking-wider text-gray-400">{s.label}</span>
                  <div className="text-3xl font-black" style={{ color: s.color }}>{s.score}</div>
                </div>
              ))}
            </div>

            {/* Enrolled Classes */}
            <div className="bg-white p-8 rounded-3xl border-3 border-black shadow-[5px_5px_0px_#000]">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter flex items-center gap-4">
                Enrolled Programs <div className="h-0.5 flex-1 bg-black/5"></div>
              </h2>
              <div className="space-y-5">
                {user.enrolledClasses.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border-2 border-black group hover:bg-[#FEFCE8] transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="text-2xl">📚</div>
                      <div>
                        <h3 className="font-bold text-base uppercase tracking-tight">{c}</h3>
                        <p className="font-medium text-xs text-gray-400">Progress: 65% Completed</p>
                      </div>
                    </div>
                    <button className="bg-black text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                      Continue
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#1F1F1F] text-white p-8 rounded-3xl border-3 border-black shadow-[5px_5px_0px_#000]">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">Recent Test History</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-white/10 text-xs font-bold uppercase tracking-wider text-white/40">
                      <th className="pb-4">Test Date</th>
                      <th className="pb-4">Type</th>
                      <th className="pb-4">Overall Band</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="font-medium text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-5">Nov 20, 2025</td>
                      <td className="py-5 uppercase">Full Mock Test #04</td>
                      <td className="py-5"><span className="text-[#FACC15]">7.5</span></td>
                      <td className="py-5"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px]">SCORING DONE</span></td>
                    </tr>
                    <tr>
                      <td className="py-5">Nov 15, 2025</td>
                      <td className="py-5 uppercase">Writing Intensive #02</td>
                      <td className="py-5"><span className="text-[#FACC15]">6.5</span></td>
                      <td className="py-5"><span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-[10px]">FEEDBACK PENDING</span></td>
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
