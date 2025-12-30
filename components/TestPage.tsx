
import React, { useState, useEffect, useRef } from 'react';
import { GlobalingoLogo } from './Branding';
import { TestResult } from '../App';
import { TestItem } from './AllTestsPage';

interface TestPageProps {
  test: TestItem | null;
  onExit: () => void;
  onFinish: (result: TestResult) => void;
}

const STORAGE_KEY = 'globalingo_active_test_v4';

export const TestPage: React.FC<TestPageProps> = ({ test, onExit, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [isInitialized, setIsInitialized] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  
  const navRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  const totalQuestions = test?.questions || 40;
  const isWriting = test?.category === 'WRITING';
  const isSpeaking = test?.category === 'SPEAKING';
  const isListening = test?.category === 'LISTENING';
  const isReading = test?.category === 'READING';

  // Audio simulation logic
  useEffect(() => {
    let interval: any;
    if (isListening && isAudioPlaying) {
      interval = setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setIsAudioPlaying(false);
            return 100;
          }
          return prev + 0.2; 
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isListening, isAudioPlaying]);

  // Load Progress
  useEffect(() => {
    if (!test) return;
    const saved = localStorage.getItem(`${STORAGE_KEY}_${test.id}`);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setAnswers(data.answers || {});
        setFlagged(data.flagged || {});
        setActiveQuestion(data.activeQuestion || 1);
        setTimeLeft(data.timeLeft || 3600);
      } catch (e) {
        console.error("Failed to parse saved test", e);
      }
    }
    setIsInitialized(true);
  }, [test]);

  // Save Progress
  useEffect(() => {
    if (!isInitialized || !test) return;
    const data = { answers, flagged, activeQuestion, timeLeft };
    localStorage.setItem(`${STORAGE_KEY}_${test.id}`, JSON.stringify(data));
  }, [answers, flagged, activeQuestion, timeLeft, isInitialized, test]);

  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeQuestion]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (option: string) => {
    setAnswers({ ...answers, [activeQuestion]: option });
  };

  const toggleFlag = () => {
    setFlagged({ ...flagged, [activeQuestion]: !flagged[activeQuestion] });
  };

  const handleFinalSubmit = () => {
    if (test) localStorage.removeItem(`${STORAGE_KEY}_${test.id}`);
    const answeredCount = Object.keys(answers).length;
    const randomCorrect = Math.min(answeredCount, Math.floor(Math.random() * 10) + 25); 
    const bandScore = randomCorrect >= 35 ? 8.5 : randomCorrect >= 30 ? 7.5 : randomCorrect >= 23 ? 6.5 : 5.5;

    onFinish({
      score: bandScore,
      totalQuestions: totalQuestions,
      correctAnswers: randomCorrect,
      timeSpent: `${Math.floor((3600 - timeLeft) / 60)}m ${60 - (timeLeft % 60)}s`,
      category: test?.category || 'GENERAL',
      testTitle: test?.title,
      subScores: {
        vocabulary: 75 + Math.floor(Math.random() * 20),
        grammar: 70 + Math.floor(Math.random() * 20),
        cohesion: 80 + Math.floor(Math.random() * 15),
        speed: 85 + Math.floor(Math.random() * 10)
      }
    });
  };

  const getMockPassage = () => {
    if (test?.title.includes('Cities')) return "The concept of the '15-minute city'—where all essential services are within a short walk—has gained significant traction in recent years. Urban planners suggest that reducing commute times leads to higher life satisfaction and lower carbon footprints. This model emphasizes high-density living combined with mixed-use development, ensuring that residents can access healthcare, education, and leisure within their own neighborhood.";
    if (test?.title.includes('Marine')) return "Oceanic ecosystems are facing unprecedented shifts due to rising temperatures, impacting biodiversity across the Pacific ridges. Coral bleaching has become a primary indicator of ecological stress, reflecting broader issues in marine health. Scientists are now deploying satellite technology to monitor sea-surface temperatures in real-time.";
    if (test?.title.includes('Safety')) return "Workplace safety regulations have evolved from simple physical barriers to complex AI-monitored ergonomic environments. Modern factories utilize sensors to predict potential accidents before they occur, drastically reducing insurance premiums and employee downtime.";
    return "The IELTS academic modules are designed to test your ability to synthesize information from various academic contexts. Critical thinking and synthesis are key to achieving a high band score.";
  };

  const questions = [
    {
      q: `Based on the ${test?.category.toLowerCase()} content, which of the following best summarizes the author's primary stance?`,
      options: ["The solution is largely experimental", "Implementation requires significant regulatory shift", "Historical data contradicts current findings", "The economic benefits outweigh cultural risks"]
    },
    {
      q: "What is cited as the most immediate consequence of the changes mentioned?",
      options: ["A decline in traditional industry participation", "A localized increase in operational costs", "Accelerated adoption of automated monitoring", "Higher public demand for transparency"]
    },
    {
      q: "The text/audio suggests that the majority of stakeholders currently...",
      options: ["Maintain a skeptical outlook", "Are actively lobbying for funding", "Remain unaware of long-term impacts", "Favor a gradual integration process"]
    }
  ];

  const currentQuestionData = questions[(activeQuestion - 1) % questions.length];

  if (!test) return null;

  return (
    <div className="h-screen flex flex-col bg-[#F9FAFB] font-sans overflow-hidden text-[#111827]">
      {/* Test Header */}
      <header className="bg-white text-black h-14 px-6 flex justify-between items-center border-b-2 border-black z-50">
        <div className="flex items-center gap-4">
          <GlobalingoLogo variant="default" className="h-6" />
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase text-gray-400 tracking-wider leading-none">Live Session</span>
            <span className="text-[11px] font-bold uppercase truncate max-w-[200px] leading-tight">{test.title}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border border-black shadow-[2px_2px_0px_#000]">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
             <span className={`text-lg font-black font-mono leading-none ${timeLeft < 300 ? 'text-red-500' : 'text-black'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <button 
            onClick={() => setShowSubmitModal(true)}
            className="bg-[#059669] text-white px-5 py-1.5 rounded-md font-black text-[11px] border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all uppercase tracking-widest"
          >
            Finish & Submit
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Dynamic Content Area */}
        <div className={`w-[45%] p-8 overflow-y-auto border-r-2 border-gray-200 ${isListening || isSpeaking ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-xl mx-auto h-full">
            {isReading && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded border border-black uppercase">Part 1</span>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>
                <h2 className="text-3xl font-black mb-6 leading-tight tracking-tight uppercase">{test.title.split(':').pop()}</h2>
                <div className="text-gray-700 space-y-5 font-medium leading-relaxed text-sm">
                  <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-blue-600">{getMockPassage()}</p>
                  <p>In the academic context, these shifts represent more than just physical changes; they signal a transformation in how populations interact with their environments. Previous studies often ignored the psychological dimension of this interaction, a gap that contemporary researchers are now eager to fill.</p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-black shadow-[4px_4px_0px_#000] my-6">
                    <h4 className="font-black text-[10px] uppercase mb-3 text-gray-400">Reference Table 1.1</h4>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                      <div className="p-1.5 bg-gray-200 border border-black">DEMOGRAPHIC</div>
                      <div className="p-1.5 bg-gray-200 border border-black">ADOPTION RATE</div>
                      <div className="p-1.5 border border-black">Urban Youth</div>
                      <div className="p-1.5 border border-black">78.4%</div>
                      <div className="p-1.5 border border-black">Rural Elders</div>
                      <div className="p-1.5 border border-black">12.1%</div>
                    </div>
                  </div>
                  <p>Experts conclude that for long-term sustainability, these frameworks must be flexible enough to adapt to unforeseen technological disruptions while remaining anchored in human-centric design principles.</p>
                </div>
              </div>
            )}

            {isListening && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-up">
                <div className="relative">
                  <div className={`w-44 h-44 rounded-full border-4 border-black flex flex-col items-center justify-center bg-[#1E293B] relative overflow-hidden transition-all duration-500 shadow-[8px_8px_0px_#059669] ${isAudioPlaying ? 'scale-105' : ''}`}>
                    <div className="flex items-center gap-1 mb-3 h-6">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 bg-[#059669] rounded-full transition-all duration-300 ${isAudioPlaying ? 'animate-bounce' : 'h-1 opacity-20'}`}
                          style={{ 
                            height: isAudioPlaying ? `${Math.random() * 20 + 5}px` : '2px',
                            animationDelay: `${i * 0.1}s` 
                          }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-5xl">🎧</span>
                  </div>
                </div>
                
                <div className="space-y-4 w-full max-w-sm">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Audio Control Room</h2>
                  <div className="bg-black/40 p-5 rounded-2xl border border-white/10">
                    <div className="flex justify-between text-[8px] font-black text-emerald-400 uppercase tracking-widest mb-1.5">
                      <span>Live Recording</span>
                      <span>{Math.floor(audioProgress)}% played</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${audioProgress}%` }}></div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                    className={`w-full py-3 rounded-lg font-black text-sm border-2 border-black transition-all ${isAudioPlaying ? 'bg-white text-black shadow-none' : 'bg-[#059669] text-white shadow-[4px_4px_0px_#000]'}`}
                  >
                    {isAudioPlaying ? 'PAUSE RECORDING' : '▶ PLAY AUDIO'}
                  </button>
                  <p className="text-emerald-500/40 font-black text-[9px] uppercase tracking-widest italic">Note: Real exams play audio once only.</p>
                </div>
              </div>
            )}

            {isSpeaking && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-up">
                <div className="bg-white border-4 border-black p-3 rounded-3xl shadow-[6px_6px_0px_#000]">
                  <img src="https://i.pravatar.cc/200?u=examiner_sarah" className="w-28 h-28 rounded-2xl border-2 border-black grayscale" alt="Examiner" />
                </div>
                <div className="space-y-5 w-full max-w-sm">
                  <div className="bg-[#FEFCE8] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FACC15]">
                    <h3 className="text-red-600 font-black text-[9px] uppercase tracking-widest mb-2">Speaking Prompt</h3>
                    <p className="text-sm font-bold text-black leading-snug italic">"Describe a tradition in your culture that you particularly enjoy. Why is it significant?"</p>
                  </div>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-black text-sm border-2 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div> START RECORDING
                  </button>
                </div>
              </div>
            )}

            {isWriting && (
              <div className="space-y-6 animate-fade-up">
                <div className="bg-[#FEFCE8] p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#E11D48] relative">
                  <div className="absolute -top-2 -left-2 bg-red-600 text-white px-3 py-1 rounded text-[9px] font-black border-2 border-black shadow-[2px_2px_0px_#000]">TASK 2</div>
                  <h3 className="font-black text-[10px] uppercase text-red-600 mb-3 tracking-wider">Prompt Topic:</h3>
                  <p className="text-lg font-black italic leading-tight text-gray-900">"{test.title.split(':').pop()}"</p>
                  <p className="mt-6 text-gray-500 font-bold text-xs leading-relaxed italic">
                    Discuss both sides and give your opinion. Provide examples from your own experience. (Min. 250 words)
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-black shadow-[2px_2px_0px_#000]">
                    <h4 className="font-black text-[9px] uppercase mb-1">Cohesion Tip</h4>
                    <p className="text-[10px] font-bold text-gray-500">Use transitional phrases like "In contrast" or "Consequently".</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-black shadow-[2px_2px_0px_#000]">
                    <h4 className="font-black text-[9px] uppercase mb-1">Vocabulary</h4>
                    <p className="text-[10px] font-bold text-gray-500">Incorporate high-level academic adjectives.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Area */}
        <div className="w-[55%] p-8 overflow-y-auto bg-[#F3F4F6]">
          <div className="max-w-md mx-auto h-full">
            {!isWriting ? (
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border-2 border-black shadow-[10px_10px_0px_#000] relative">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="font-black text-blue-600 text-[9px] uppercase tracking-widest">Question {activeQuestion}</span>
                      <h3 className="font-black text-xl uppercase tracking-tighter italic">Evaluation</h3>
                    </div>
                    <button 
                      onClick={toggleFlag}
                      className={`flex items-center gap-2 px-3 py-1 rounded-md border-2 border-black text-[9px] font-black transition-all ${
                        flagged[activeQuestion] ? 'bg-yellow-400' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      {flagged[activeQuestion] ? '🚩 FLAGGED' : '🏳️ FLAG FOR REVIEW'}
                    </button>
                  </div>
                  
                  <p className="text-base font-black mb-8 text-black leading-tight">
                    {currentQuestionData.q}
                  </p>
                  
                  <div className="space-y-3">
                    {currentQuestionData.options.map((ans, i) => {
                      const isSelected = answers[activeQuestion] === ans;
                      return (
                        <button 
                          key={i} 
                          onClick={() => handleAnswerSelect(ans)}
                          className={`w-full flex items-center gap-4 p-4 border-2 rounded-xl transition-all text-left group ${
                            isSelected 
                            ? 'border-blue-600 bg-blue-50 shadow-[4px_4px_0px_#2563EB]' 
                            : 'border-black bg-white hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-8 h-8 shrink-0 rounded-lg border-2 border-black flex items-center justify-center font-black text-xs transition-all ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-white group-hover:rotate-6'
                          }`}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span className={`font-bold text-sm ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>{ans}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full space-y-4">
                <div className="flex-1 relative group">
                  <textarea 
                    className="w-full h-full p-8 rounded-3xl text-sm font-bold outline-none border-2 border-black bg-white focus:shadow-[10px_10px_0px_#2563EB] transition-all resize-none leading-relaxed"
                    placeholder="Type your response here..."
                    value={answers[activeQuestion] || ""}
                    onChange={(e) => setAnswers({ ...answers, [activeQuestion]: e.target.value })}
                  ></textarea>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] flex justify-between items-center">
                   <div className="flex gap-4">
                      <div className="font-black text-[10px] uppercase">Words: <span className="text-red-600">{(answers[activeQuestion] || "").split(/\s+/).filter(x => x.length > 0).length}</span></div>
                      <div className="font-black text-[10px] uppercase">Goal: 250+</div>
                   </div>
                   <button 
                    onClick={() => setShowSubmitModal(true)} 
                    className="bg-emerald-600 text-white px-6 py-2 rounded-md font-black uppercase text-[10px] border border-black shadow-[2px_2px_0px_#000]"
                   >
                    Finish Writing
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <footer className="bg-white border-t-2 border-black h-16 px-6 flex items-center justify-between z-50 gap-6">
        <div className="flex items-center gap-4 flex-1 min-w-0 h-full">
          <div className="hidden lg:block shrink-0">
            <div className="text-[8px] font-black uppercase opacity-40 leading-none mb-1">Navigation</div>
            <div className="text-[10px] font-black uppercase italic">Map</div>
          </div>
          <div 
            ref={navRef} 
            className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar flex-1 min-w-0 self-center"
          >
            {[...Array(totalQuestions)].map((_, i) => {
              const qNum = i + 1;
              const isAnswered = answers[qNum] !== undefined && answers[qNum] !== "";
              const isFlagged = flagged[qNum];
              const isActive = activeQuestion === qNum;
              return (
                <button 
                  key={i} 
                  ref={isActive ? activeBtnRef : null}
                  onClick={() => setActiveQuestion(qNum)}
                  className={`w-7 h-7 flex-shrink-0 flex items-center justify-center font-black border border-black transition-all relative rounded ${
                    isActive 
                    ? 'bg-blue-600 text-white -translate-y-0.5 shadow-[2px_2px_0px_#000]' 
                    : isAnswered ? 'bg-gray-800 text-white shadow-none' : 'bg-white text-black hover:bg-gray-50'
                  } text-[10px]`}
                >
                  {qNum}
                  {isFlagged && <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-yellow-400 border border-black rounded-full flex items-center justify-center text-[5px]">🚩</div>}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="flex gap-2 shrink-0">
          <button 
            disabled={activeQuestion === 1}
            onClick={() => setActiveQuestion(prev => prev - 1)}
            className="px-4 py-1.5 border-2 border-black rounded font-black text-[10px] disabled:opacity-30 hover:bg-gray-50 transition-colors"
          >
            ← PREV
          </button>
          <button 
            disabled={activeQuestion === totalQuestions}
            onClick={() => setActiveQuestion(prev => prev + 1)}
            className="px-4 py-1.5 bg-black text-white border-2 border-black rounded font-black text-[10px] disabled:opacity-30 hover:bg-gray-800 transition-colors"
          >
            NEXT →
          </button>
        </div>
      </footer>

      {/* Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white border-4 border-black p-10 rounded-[40px] shadow-[16px_16px_0px_#000] max-w-lg w-full text-center animate-fade-up">
            <div className="text-6xl mb-6">🏁</div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight mb-2">Section Complete</h2>
            <p className="text-sm font-bold text-gray-500 mb-8 leading-relaxed">
              You've answered all questions in this set. Ready to submit?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleFinalSubmit}
                className="bg-emerald-600 text-white py-3.5 rounded-lg font-black text-sm border-2 border-black shadow-[4px_4px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
              >
                SUBMIT FINAL ATTEMPT
              </button>
              <button 
                onClick={() => setShowSubmitModal(false)}
                className="bg-white text-black py-3.5 rounded-lg font-black text-sm border-2 border-black hover:bg-gray-50 transition-colors"
              >
                KEEP REVIEWING
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
