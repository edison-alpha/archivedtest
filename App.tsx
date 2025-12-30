
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { Features } from './components/Features';
import { AudienceSection } from './components/AudienceSection';
import { UXAcademySection } from './components/UXAcademySection';
import { TrustSignals } from './components/TrustSignals';
import { CoursesSection } from './components/CoursesSection';
import { AIReportSection } from './components/AIReportSection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { OpenHouseCTA } from './components/OpenHouseCTA';
import { Footer } from './components/Footer';
import { CourseDetailPage } from './components/CourseDetailPage';
import { TestPage } from './components/TestPage';
import { AllTestsPage, TestItem } from './components/AllTestsPage';
import { PricingPage } from './components/PricingPage';
import { AuthPages } from './components/AuthPages';
import { TutorsPage } from './components/TutorsPage';
import { ProfilePage } from './components/ProfilePage';
import { TestSummaryPage } from './components/TestSummaryPage';
import { AISimulationPage } from './components/AISimulationPage';
import { DashboardPage } from './components/DashboardPage';

export type ViewState = 'home' | 'detail' | 'test' | 'all-tests' | 'pricing' | 'signup' | 'signin' | 'tutors' | 'profile' | 'test-summary' | 'ai-simulation' | 'dashboard';

export interface UserData {
  name: string;
  email: string;
  targetBand: string;
  enrolledClasses: string[];
  testScores: {
    reading: number;
    writing: number;
    listening: number;
    speaking: number;
  };
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  timeSpent: string;
  correctAnswers: number;
  category: string;
  testTitle?: string;
  subScores?: {
    vocabulary: number;
    grammar: number;
    cohesion: number;
    speed: number;
  };
}

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [lastTestResult, setLastTestResult] = useState<TestResult | null>(null);
  const [activeTest, setActiveTest] = useState<TestItem | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleAuthSuccess = (name: string, email: string) => {
    setIsAuthenticated(true);
    setUser({
      name: name || 'Ahmad Globalingo',
      email: email || 'ahmad@example.com',
      targetBand: '8.0',
      enrolledClasses: ['7.5+ Masterclass', 'Speaking Bootcamp'],
      testScores: {
        reading: 7.5,
        writing: 6.5,
        listening: 8.0,
        speaking: 7.0
      }
    });
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setView('home');
  };

  const handleStartTest = (test: TestItem) => {
    setActiveTest(test);
    setView('test');
  };

  const handleFinishTest = (result: TestResult) => {
    setLastTestResult(result);
    setView('test-summary');
  };

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return user ? (
          <DashboardPage 
            user={user} 
            onNavigate={setView} 
            onLogout={handleLogout} 
          />
        ) : <Hero onNavigate={setView} />;
      case 'profile':
        return user ? <ProfilePage user={user} onBack={() => setView('dashboard')} /> : <Hero onNavigate={setView} />;
      case 'detail':
        return <CourseDetailPage onBack={() => setView('home')} onStartTest={() => setView('test')} />;
      case 'test':
        return <TestPage test={activeTest} onExit={() => setView('all-tests')} onFinish={handleFinishTest} />;
      case 'ai-simulation':
        return <AISimulationPage onBack={() => setView('all-tests')} onFinish={handleFinishTest} />;
      case 'test-summary':
        return lastTestResult ? <TestSummaryPage result={lastTestResult} onDashboard={() => setView('dashboard')} onRetake={() => setView('test')} onNavigate={setView} /> : <Hero onNavigate={setView} />;
      case 'all-tests':
        return <AllTestsPage onStartTest={handleStartTest} onStartAI={() => setView('ai-simulation')} onBack={() => setView('dashboard')} />;
      case 'pricing':
        return <PricingPage onBack={() => setView('home')} onEnroll={() => setView('signup')} />;
      case 'signup':
        return <AuthPages type="signup" onBack={() => setView('home')} onToggle={() => setView('signin')} onAuthSuccess={handleAuthSuccess} />;
      case 'signin':
        return <AuthPages type="signin" onBack={() => setView('home')} onToggle={() => setView('signup')} onAuthSuccess={handleAuthSuccess} />;
      case 'tutors':
        return <TutorsPage onBack={() => setView('home')} onBook={() => setView('signup')} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setView} />
            <IntroSection />
            <Features />
            <AudienceSection />
            <UXAcademySection onNavigate={setView} />
            <TrustSignals />
            <CoursesSection onNavigate={setView} />
            <AIReportSection />
            <PartnersSection />
            <TestimonialsSection />
            <BlogSection />
            <OpenHouseCTA />
            <Footer />
          </>
        );
    }
  };

  const showNavbar = !['test', 'signin', 'signup', 'test-summary', 'ai-simulation', 'dashboard'].includes(view);

  return (
    <div className="min-h-screen">
      {showNavbar && (
        <Navbar 
          onNavigate={setView} 
          isAuthenticated={isAuthenticated} 
          user={user}
          onLogout={handleLogout}
        />
      )}
      <main>
        {renderView()}
      </main>
    </div>
  );
};

export default App;
