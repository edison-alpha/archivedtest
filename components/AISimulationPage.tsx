
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { TestResult } from '../App';

interface AISimulationPageProps {
  onBack: () => void;
  onFinish: (result: TestResult) => void;
}

export const AISimulationPage: React.FC<AISimulationPageProps> = ({ onBack, onFinish }) => {
  const [step, setStep] = useState<'topic' | 'writing' | 'loading'>('topic');
  const [topic, setTopic] = useState<string>('');
  const [essay, setEssay] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const generateTopic = async () => {
    setIsLoading(true);
    try {
      const themes = ["Technology", "Environment", "Global Culture", "Health", "Education", "Economics", "Space Exploration", "Urbanization"];
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a high-quality, realistic IELTS Writing Task 2 topic (Agree/Disagree, Discussion, or Problem/Solution) about the theme: ${randomTheme}. Provide only the topic paragraph. Do not include any greeting or introduction.`,
      });
      setTopic(response.text?.trim() || "Some people think that it is important to spend money on space exploration, while others believe that the money should be spent on solving problems on Earth. Discuss both views and give your opinion.");
      setStep('writing');
    } catch (e) {
      console.error(e);
      setTopic("Discuss the impact of social media on modern communication.");
      setStep('writing');
    } finally {
      setIsLoading(false);
    }
  };

  const submitSimulation = async () => {
    setIsLoading(true);
    setStep('loading');
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a certified IELTS Examiner. Evaluate the following essay based on the topic: "${topic}".
        Essay: "${essay}". 
        
        Provide a JSON response using these criteria (0-100 scale for sub-scores):
        1. "score": Overall Band Score (0-9).
        2. "vocabulary": Lexical Resource (0-100).
        3. "grammar": Grammatical Range and Accuracy (0-100).
        4. "cohesion": Coherence and Cohesion (0-100).
        5. "taskResponse": Task Response (0-100).
        6. "feedback": A detailed 3-paragraph critique in English.
        
        Ensure "score" is a number between 1 and 9 (can be increments of 0.5).`,
        config: {
          responseMimeType: "application/json",
        }
      });
      
      const resData = JSON.parse(response.text || '{}');
      
      onFinish({
        score: resData.score || 6.5,
        totalQuestions: 1,
        correctAnswers: 1,
        timeSpent: "40:00",
        category: 'AI WRITING',
        subScores: {
          vocabulary: resData.vocabulary || 70,
          grammar: resData.grammar || 65,
          cohesion: resData.cohesion || 80,
          speed: resData.taskResponse || 75 // Mapping Task Response to 'speed' slot temporarily or just keeping it descriptive
        }
      });
    } catch (e) {
      console.error(e);
      onFinish({
        score: 6.0,
        totalQuestions: 1,
        correctAnswers: 1,
        timeSpent: "40:00",
        category: 'AI WRITING'
      });
    }
  };

  if (step === 'loading') {
    return (
      <div className="h-screen bg-[#FEFCE8] flex flex-col items-center justify-center p-12 text-center">
        <div className="w-24 h-24 border-8 border-black border-t-[#2563EB] rounded-full animate-spin mb-8"></div>
        <h2 className="text-4xl font-black uppercase italic mb-4">AI Examiner is Scoring...</h2>
        <p className="font-bold text-gray-500 max-w-sm italic">Analyzing Lexical Resource, Coherence, and Task Response against official standards.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFCE8] p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className="mb-12 font-black text-xl flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          ← EXIT SIMULATION
        </button>

        {step === 'topic' ? (
          <div className="brutalist-card bg-white p-12 rounded-[50px] text-center border-4 border-black shadow-[12px_12px_0px_#2563EB]">
            <div className="text-6xl mb-8 animate-float">🤖</div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">AI Simulation</h1>
            <p className="text-xl font-bold text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the future of IELTS prep. Our AI generates a specific Task 2 prompt and grades your essay using official scoring rubrics.
            </p>
            <button 
              onClick={generateTopic}
              disabled={isLoading}
              className="brutalist-btn bg-[#2563EB] text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform disabled:opacity-50 shadow-[8px_8px_0px_#000]"
            >
              {isLoading ? "CALIBRATING TOPICS..." : "GENERATE TOPIC"}
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="brutalist-card bg-[#FACC15] p-10 rounded-[40px] border-4 border-black shadow-[8px_8px_0px_#000]">
                <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">IELTS Writing Task 2</h2>
                <p className="text-2xl font-black italic leading-tight">"{topic}"</p>
              </div>
              <div className="bg-white p-8 rounded-[40px] border-4 border-black border-dashed">
                <h3 className="font-black text-lg mb-4 uppercase">AI Scoring Checklist:</h3>
                <ul className="space-y-4 font-bold text-gray-600">
                  <li className="flex gap-2"><span>✅</span> <span>Task Response: Address all parts.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Cohesion: Use linking words.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Lexical: Use academic vocabulary.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>Grammar: Mix simple & complex.</span></li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <textarea 
                  className="w-full h-[500px] brutalist-card p-10 rounded-[40px] text-lg font-bold outline-none focus:shadow-[12px_12px_0px_#2563EB] transition-all border-4 border-black"
                  placeholder="Type your essay here (min. 250 words recommended)..."
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                ></textarea>
                <div className="absolute top-4 right-8 bg-black text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Draft Mode</div>
              </div>
              <div className="flex justify-between items-center px-4">
                <div className="flex flex-col">
                  <span className="font-black text-xs uppercase text-gray-400">Word Count</span>
                  <span className={`text-2xl font-black ${essay.split(/\s+/).filter(x => x.length > 0).length < 250 ? 'text-red-500' : 'text-emerald-600'}`}>
                    {essay.split(/\s+/).filter(x => x.length > 0).length}
                  </span>
                </div>
                <button 
                  onClick={submitSimulation}
                  disabled={essay.length < 50 || isLoading}
                  className="brutalist-btn bg-black text-white px-10 py-5 rounded-full font-black text-xl disabled:opacity-30 shadow-[4px_4px_0px_#2563EB]"
                >
                  SUBMIT FOR GRADING
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
