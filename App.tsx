import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import LessonForm from './components/LessonForm';
import LessonPlanDisplay from './components/LessonPlanDisplay';
import Auth from './components/Auth';
import History from './components/History';
import Dashboard from './components/Dashboard';
import { generateLessonPlan } from './services/gemini';
import { LessonPlanInput, GeneratedLessonPlan, User, SavedItem } from './types';
import { BrainCircuit, LogOut, User as UserIcon } from 'lucide-react';

function App() {
  const [view, setView] = useState<'landing' | 'auth' | 'form' | 'display' | 'history' | 'dashboard'>('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<GeneratedLessonPlan | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [history, setHistory] = useState<SavedItem[]>([]);
  // To handle viewing a saved item
  const [savedViewState, setSavedViewState] = useState<{notes: string | null, questions: string | null} | undefined>(undefined);

  // Check for persisted user session
  useEffect(() => {
    const savedUser = localStorage.getItem('lessonPlannerUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    const savedHistory = localStorage.getItem('lessonPlannerHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('lessonPlannerUser', JSON.stringify(userData));
    setView('form');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('lessonPlannerUser');
    setView('landing');
  };

  const handleStart = () => {
    if (user) {
      setView('form');
    } else {
      setView('auth');
    }
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('lessonPlannerUser', JSON.stringify(updatedUser));
  };

  const handleGenerate = async (input: LessonPlanInput) => {
    setIsLoading(true);
    try {
      const content = await generateLessonPlan(input);
      const newPlan = {
        structured: input,
        content: content
      };
      setCurrentPlan(newPlan);
      setSavedViewState(undefined); // Reset view state for new generation
      setView('display');
    } catch (error) {
      alert("Failed to generate lesson plan. Please check your API key, internet connection, or try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveToHistory = (notes: string | null, questions: string | null) => {
    if (!currentPlan) return;

    const newItem: SavedItem = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      title: currentPlan.structured.lesson,
      subject: currentPlan.structured.subject,
      grade: currentPlan.structured.grade,
      data: currentPlan,
      notes: notes,
      questions: questions
    };

    const updatedHistory = [newItem, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('lessonPlannerHistory', JSON.stringify(updatedHistory));
  };

  const handleDeleteHistory = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('lessonPlannerHistory', JSON.stringify(updatedHistory));
  };

  const handleViewHistoryItem = (item: SavedItem) => {
    setCurrentPlan(item.data);
    setSavedViewState({ notes: item.notes, questions: item.questions });
    setView('display');
  };

  const handleBackToForm = () => {
    setCurrentPlan(null);
    setSavedViewState(undefined);
    setView('form');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar - Only show on App pages */}
      {(view !== 'landing' && view !== 'auth') && (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center cursor-pointer" onClick={() => setView('landing')}>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 p-1 rounded">
                    <BrainCircuit className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold flex items-center">
                    <span className="text-slate-900">LessonPlanner</span>
                    <span className="text-blue-600">.JS</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                {view !== 'history' && (
                  <button 
                    onClick={() => setView('history')}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    History
                  </button>
                )}
                {view !== 'form' && (
                  <button 
                    onClick={() => setView('form')}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    New Lesson
                  </button>
                )}
                
                <button 
                  onClick={() => setView('dashboard')}
                  className="hidden md:flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-200 transition-colors"
                >
                  <div className="h-6 w-6 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold text-xs">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-slate-600">{user?.name}</span>
                </button>

                <button 
                  onClick={handleLogout}
                  className="text-slate-500 hover:text-red-600 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={view === 'landing' || view === 'auth' ? '' : 'max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-4'}>
        {view === 'landing' && (
          <Landing 
            onStart={handleStart} 
            user={user} 
            onLogout={handleLogout}
            onViewHistory={() => setView('history')}
            onViewDashboard={() => setView('dashboard')}
          />
        )}

        {view === 'auth' && (
          <Auth onLogin={handleLogin} />
        )}

        {view === 'dashboard' && user && (
          <div className="animate-fade-in">
            <Dashboard user={user} onUpdateUser={handleUpdateUser} />
          </div>
        )}

        {view === 'form' && (
          <div className="animate-fade-in">
            <LessonForm onSubmit={handleGenerate} isLoading={isLoading} user={user} />
          </div>
        )}

        {view === 'history' && (
          <div className="animate-fade-in">
            <History 
              items={history} 
              onView={handleViewHistoryItem} 
              onDelete={handleDeleteHistory} 
            />
          </div>
        )}

        {view === 'display' && currentPlan && (
          <div className="animate-fade-in">
            <LessonPlanDisplay 
              data={currentPlan} 
              onBack={handleBackToForm} 
              onSave={handleSaveToHistory}
              savedState={savedViewState}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;