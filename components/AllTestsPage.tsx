
import React, { useState } from 'react';

export type TestCategory = 'ALL' | 'READING' | 'WRITING' | 'LISTENING' | 'SPEAKING';

export interface TestItem {
  id: string;
  title: string;
  category: TestCategory;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  duration: string;
  questions: number;
  status: 'NEW' | 'IN PROGRESS' | 'COMPLETED';
}

interface AllTestsPageProps {
  onStartTest: (test: TestItem) => void;
  onStartAI: () => void;
  onBack: () => void;
}

export const AllTestsPage: React.FC<AllTestsPageProps> = ({ onStartTest, onStartAI, onBack }) => {
  const [activeCategory, setActiveCategory] = useState<TestCategory>('ALL');

  const allTests: TestItem[] = [
    // Reading
    { id: 'R1', title: 'Academic Reading: Future Cities', category: 'READING', difficulty: 'MEDIUM', duration: '60m', questions: 40, status: 'NEW' },
    { id: 'R2', title: 'Academic Reading: Marine Biology', category: 'READING', difficulty: 'HARD', duration: '60m', questions: 40, status: 'COMPLETED' },
    { id: 'R3', title: 'General Reading: Workplace Safety', category: 'READING', difficulty: 'EASY', duration: '60m', questions: 40, status: 'NEW' },
    // Writing
    { id: 'W1', title: 'Writing Task 2: AI in Education', category: 'WRITING', difficulty: 'HARD', duration: '40m', questions: 1, status: 'IN PROGRESS' },
    { id: 'W2', title: 'Writing Task 1: Data Bar Charts', category: 'WRITING', difficulty: 'MEDIUM', duration: '20m', questions: 1, status: 'NEW' },
    // Listening
    { id: 'L1', title: 'Listening: Campus Orientation', category: 'LISTENING', difficulty: 'EASY', duration: '30m', questions: 40, status: 'COMPLETED' },
    { id: 'L2', title: 'Listening: Technical Lecture', category: 'LISTENING', difficulty: 'HARD', duration: '35m', questions: 40, status: 'NEW' },
    // Speaking
    { id: 'S1', title: 'Speaking Mock: Part 1 & 2', category: 'SPEAKING', difficulty: 'MEDIUM', duration: '15m', questions: 15, status: 'NEW' },
    { id: 'S2', title: 'Speaking: Discussion Topics', category: 'SPEAKING', difficulty: 'HARD', duration: '15m', questions: 5, status: 'NEW' },
  ];

  const filteredTests = activeCategory === 'ALL' 
    ? allTests 
    : allTests.filter(t => t.category === activeCategory);

  const categories: { label: string; value: TestCategory }[] = [
    { label: 'ALL TESTS', value: 'ALL' },
    { label: 'READING', value: 'READING' },
    { label: 'WRITING', value: 'WRITING' },
    { label: 'LISTENING', value: 'LISTENING' },
    { label: 'SPEAKING', value: 'SPEAKING' },
  ];

  return (
    <div className="bg-[#FEFCE8] min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase italic">
              Practice <br/><span className="text-[#2563EB]">Modules.</span>
            </h1>
            <p className="text-xl font-bold text-gray-500">Pick a specific skill to master or take a full simulation.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={onStartAI}
              className="brutalist-btn bg-[#2563EB] text-white px-8 py-3 rounded-full font-black text-sm flex items-center gap-2"
            >
              <span className="text-xl">🤖</span> LAUNCH AI EXAMINER
            </button>
            <button onClick={onBack} className="brutalist-btn bg-white px-8 py-3 rounded-full font-black text-sm">
              ← BACK
            </button>
          </div>
        </div>

        {/* Hero: Full Simulation */}
        <div className="bg-white brutalist-card p-12 mb-20 rounded-[40px] flex flex-col lg:flex-row items-center gap-12 border-[#E11D48] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#E11D48] text-white px-12 py-2 font-black rotate-45 translate-x-[40px] translate-y-[20px] shadow-lg">
            RECOMMENDED
          </div>
          <div className="flex-1 relative z-10">
            <div className="inline-block bg-[#E11D48] text-white px-4 py-1 rounded-full font-black text-xs mb-4 uppercase tracking-widest">REALISTIC SIMULATION</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Full IELTS Mock Exam</h2>
            <p className="text-xl font-bold text-gray-600 mb-8 max-w-2xl">
              Experience the complete stress of the test day. Includes Listening, Reading, and Writing sections back-to-back with a live Speaking interview schedule.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-100 px-4 py-2 rounded-xl font-black text-xs border-2 border-black">⏱️ 2 HOURS 45 MINS</div>
              <div className="bg-gray-100 px-4 py-2 rounded-xl font-black text-xs border-2 border-black">📝 80+ QUESTIONS</div>
              <div className="bg-gray-100 px-4 py-2 rounded-xl font-black text-xs border-2 border-black">🎯 TARGET: BAND 7.5+</div>
            </div>
            <button 
              onClick={() => onStartTest(allTests[0])}
              className="brutalist-btn bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform"
            >
              START FULL SIMULATION
            </button>
          </div>
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute inset-0 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" className="relative z-10 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_#000] rotate-2" alt="Simulation" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-8 py-3 rounded-full font-black text-xs tracking-widest transition-all border-4 border-black ${
                activeCategory === cat.value 
                ? 'bg-[#2563EB] text-white shadow-[4px_4px_0px_#000] -translate-y-1' 
                : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTests.map((test) => (
            <div key={test.id} className="brutalist-card bg-white p-8 rounded-[32px] group hover:shadow-[12px_12px_0px_#2563EB] transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`text-[10px] font-black px-3 py-1 rounded-full border-2 border-black uppercase ${
                    test.category === 'READING' ? 'bg-blue-100 text-blue-700' :
                    test.category === 'WRITING' ? 'bg-red-100 text-red-700' :
                    test.category === 'LISTENING' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {test.category}
                  </div>
                  <div className={`text-[10px] font-black ${
                    test.status === 'COMPLETED' ? 'text-green-500' :
                    test.status === 'IN PROGRESS' ? 'text-blue-500' :
                    'text-gray-400'
                  }`}>
                    {test.status} {test.status === 'COMPLETED' && '✓'}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-[#2563EB] transition-colors uppercase italic tracking-tighter">
                  {test.title}
                </h3>
                
                <div className="flex gap-6 mb-8 text-[11px] font-bold text-gray-500 uppercase">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">⏱️</span> {test.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">📋</span> {test.questions} Qs
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${
                      test.difficulty === 'EASY' ? 'bg-green-400' :
                      test.difficulty === 'MEDIUM' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></span> {test.difficulty}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onStartTest(test)}
                className={`w-full py-4 rounded-2xl font-black text-sm border-4 border-black transition-all ${
                  test.status === 'COMPLETED'
                  ? 'bg-gray-100 text-black hover:bg-black hover:text-white'
                  : 'bg-white text-black hover:bg-[#FACC15] shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                }`}
              >
                {test.status === 'COMPLETED' ? 'RETAKE TEST' : 'START PRACTICE'}
              </button>
            </div>
          ))}

          {/* Locked/Premium Preview */}
          <div className="brutalist-card bg-gray-100/50 p-8 rounded-[32px] border-dashed border-gray-400 flex flex-col items-center justify-center text-center opacity-70">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-black mb-2 grayscale text-gray-400">Advanced Masterclass Sets</h3>
            <p className="font-bold text-xs text-gray-300 mb-6 uppercase tracking-widest">Available for Premium Members</p>
            <button className="text-xs font-black underline hover:text-[#2563EB] text-gray-400">UPGRADE TO UNLOCK</button>
          </div>
        </div>
      </div>
    </div>
  );
};
