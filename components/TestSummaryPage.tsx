
import React from 'react';
import { TestResult, ViewState } from '../App';

interface TestSummaryPageProps {
  result: TestResult;
  onDashboard: () => void;
  onRetake: () => void;
  onNavigate: (view: ViewState) => void;
}

export const TestSummaryPage: React.FC<TestSummaryPageProps> = ({ result, onDashboard, onRetake, onNavigate }) => {
  const isAI = result.category === 'AI WRITING';

  const getPerformanceLevel = (val: number) => {
    if (val >= 85) return { label: 'EXPERT', icon: '🏆', color: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (val >= 70) return { label: 'PROFICIENT', icon: '✅', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (val >= 50) return { label: 'DEVELOPING', icon: '⚠️', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'BEGINNER', icon: '🛑', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const getFeedback = (score: number) => {
    if (score >= 8) return "Incredible! You are at an expert level. Focus on maintaining this precision.";
    if (score >= 7) return "Great job! You've mastered most concepts. A bit more focus on Task Response will get you an 8.0.";
    if (score >= 6) return "Good performance. Review the questions you missed to identify structural patterns.";
    return "Keep practicing. You have the basics down, but need more intensive reading drills.";
  };

  const recommendations = [
    { 
      title: "Writing Intensive", 
      desc: "Perfect for Band 6.0-7.0 students who need to refine cohesion.", 
      tag: "Writing", 
      color: "#E11D48",
      visible: (result.subScores?.grammar || 0) < 75 || result.category.includes('WRITING')
    },
    { 
      title: "Speaking Bootcamp", 
      desc: "Live mock tests for students struggling with fluency.", 
      tag: "Speaking", 
      color: "#FACC15",
      visible: true 
    },
    { 
      title: "Logic & Strategy", 
      desc: "Unpack the examiner mark scheme step by step.", 
      tag: "Strategy", 
      color: "#059669",
      visible: (result.score || 0) < 8 
    }
  ].filter(r => r.visible);

  return (
    <div className="min-h-screen bg-[#FEFCE8] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#059669] text-white px-6 py-2 rounded-full font-black text-sm border-4 border-black mb-6 shadow-[4px_4px_0px_#000] uppercase tracking-widest">
            {isAI ? 'AI SIMULATION DONE' : 'TEST COMPLETED'}
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase">Your <br/><span className="text-[#2563EB]">Results.</span></h1>
        </div>

        {/* AI FEEDBACK HERO */}
        {isAI && (
          <div className="brutalist-card bg-white p-12 rounded-[50px] border-4 border-black shadow-[16px_16px_0px_#2563EB] mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="text-9xl font-black italic">AI</span>
            </div>
            <h3 className="text-4xl font-black uppercase italic mb-8 border-b-4 border-black inline-block relative z-10">AI Deep Dive Analysis</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Lexical Resource", val: result.subScores?.vocabulary || 0, color: "#2563EB" },
                { label: "Grammar Range", val: result.subScores?.grammar || 0, color: "#E11D48" },
                { label: "Cohesion", val: result.subScores?.cohesion || 0, color: "#059669" },
                { label: "Task Response", val: result.subScores?.speed || 0, color: "#FACC15" }
              ].map((s, i) => {
                const level = getPerformanceLevel(s.val);
                return (
                  <div key={i} className="text-center space-y-3 group">
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-4xl font-black flex items-center gap-2" style={{ color: s.color }}>
                        {s.val}%
                        <span className="text-2xl group-hover:scale-125 transition-transform">{level.icon}</span>
                      </div>
                      <div className={`text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-black ${level.bg} ${level.color}`}>
                        {level.label}
                      </div>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{s.label}</div>
                    <div className="w-full h-3 bg-gray-100 rounded-full border-2 border-black overflow-hidden shadow-[2px_2px_0px_#000]">
                      <div className="h-full transition-all duration-1000 ease-out" style={{ width: `${s.val}%`, backgroundColor: s.color }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Score Card */}
          <div className="lg:col-span-1">
            <div className="brutalist-card bg-white p-12 rounded-[40px] text-center h-full flex flex-col justify-center items-center border-[6px]">
              <span className="font-black text-gray-400 uppercase tracking-widest text-xs mb-4">Estimated Band</span>
              <div className="text-9xl font-black text-[#2563EB] mb-6 leading-none tracking-tighter italic">
                {result.score}
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border-2 border-black mb-4">
                <div 
                  className="h-full bg-[#2563EB]" 
                  style={{ width: `${(result.score / 9) * 100}%` }}
                ></div>
              </div>
              <span className="font-bold text-gray-500 text-sm">Target was 8.0</span>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="brutalist-card bg-[#FACC15] p-10 rounded-[40px] border-4">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Performance Stats</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b-2 border-black/10 pb-4">
                  <span className="font-black text-xs uppercase opacity-60">Accuracy</span>
                  <span className="text-3xl font-black">{Math.round((result.correctAnswers / result.totalQuestions) * 100)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-black text-xs uppercase opacity-60">Time Elapsed</span>
                  <span className="text-3xl font-black">{result.timeSpent}</span>
                </div>
              </div>
            </div>

            <div className="brutalist-card bg-white p-10 rounded-[40px] border-4 flex flex-col">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Expert Critique</h3>
              <p className="text-xl font-bold italic leading-relaxed text-gray-700 flex-1">
                "{getFeedback(result.score)}"
              </p>
              <div className="mt-8 flex items-center gap-4 text-[#2563EB]">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-black">
                  {isAI ? '🤖' : 'JS'}
                </div>
                <div>
                  <div className="font-black text-xs uppercase">{isAI ? 'AI Evaluator v3.0' : 'Dr. Julian Sterling'}</div>
                  <div className="font-bold text-[10px] uppercase opacity-50">Globalingo Examiner Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown & Next Steps */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="brutalist-card bg-[#1F1F1F] text-white p-12 rounded-[50px]">
            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter border-b border-white/10 pb-4">Skill Benchmark</h3>
            <div className="space-y-8 mt-4">
              {[
                { label: 'Academic Tone', val: 85, color: '#FACC15', icon: '📖' },
                { label: 'Sentence Variety', val: 70, color: '#2563EB', icon: '🔀' },
                { label: 'Logical Flow', val: 90, color: '#059669', icon: '🌊' },
                { label: 'Response Depth', val: 60, color: '#E11D48', icon: '🕳️' }
              ].map((s, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center font-black text-[10px] uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ color: s.color }}>{s.val}%</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded text-[8px]">{getPerformanceLevel(s.val).label}</span>
                    </div>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full border-2 border-white/20 overflow-hidden group">
                    <div className="h-full transition-all duration-700 delay-300" style={{ width: `${s.val}%`, backgroundColor: s.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-5xl font-black tracking-tighter leading-none italic uppercase">Next <br/><span className="text-[#E11D48]">Level Up.</span></h2>
            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="brutalist-card bg-white p-6 rounded-2xl flex items-center justify-between group hover:bg-gray-50 transition-all border-2 border-black">
                  <div>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black mb-2 inline-block" style={{ color: rec.color }}>{rec.tag}</span>
                    <h4 className="text-xl font-black uppercase tracking-tight">{rec.title}</h4>
                    <p className="text-sm font-bold text-gray-400">{rec.desc}</p>
                  </div>
                  <button onClick={() => onNavigate('detail')} className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-black group-hover:bg-black group-hover:text-white transition-colors">
                    →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onRetake}
            className="brutalist-btn bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform"
          >
            RETAKE TEST
          </button>
          <button 
            onClick={onDashboard}
            className="brutalist-btn bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform"
          >
            BACK TO DASHBOARD
          </button>
        </div>
      </div>
    </div>
  );
};
