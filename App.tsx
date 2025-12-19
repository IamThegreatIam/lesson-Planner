
import React, { useState, useEffect, useCallback } from 'react';
import Landing from './components/Landing';
import LessonForm from './components/LessonForm';
import LessonPlanDisplay from './components/LessonPlanDisplay';
import Auth from './components/Auth';
import History from './components/History';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import { generateLessonPlan } from './services/gemini';
import { LessonPlanInput, GeneratedLessonPlan, User, SavedItem } from './types';
import { BrainCircuit, LogOut, User as UserIcon, Shield } from 'lucide-react';

function App() {
  const [view, setView] = useState<'landing' | 'auth' | 'form' | 'display' | 'history' | 'dashboard' | 'admin'>('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<GeneratedLessonPlan | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [history, setHistory] = useState<SavedItem[]>([]);
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>(null);
  const [savedViewState, setSavedViewState] = useState<{notes: string | null, questions: string | null} | undefined>(undefined);

  // Load persistence
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

  const handleUpdateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('lessonPlannerUser', JSON.stringify(updatedUser));
  }, []);

  const handleSaveToHistory = useCallback((plan: GeneratedLessonPlan, notes: string | null = null, questions: string | null = null, existingId: string | null = null) => {
    const id = existingId || Date.now().toString();
    
    const newItem: SavedItem = {
      id: id,
      timestamp: Date.now(),
      title: plan.structured.lesson || plan.structured.subStrand,
      subject: plan.structured.subject,
      grade: plan.structured.grade,
      data: plan,
      notes: notes,
      questions: questions
    };

    setHistory(prev => {
      const filtered = prev.filter(item => item.id !== id);
      const updated = [newItem, ...filtered];
      localStorage.setItem('lessonPlannerHistory', JSON.stringify(updated));
      return updated;
    });

    return id;
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('lessonPlannerUser', JSON.stringify(userData));
    setView(userData.role === 'admin' ? 'admin' : 'form');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('lessonPlannerUser');
    setView('landing');
  };

  const handleGenerate = async (input: LessonPlanInput) => {
    setIsLoading(true);
    try {
      const content = await generateLessonPlan(input);
      const newPlan = {
        structured: input,
        content: content
      };
      
      // Auto-update user profile defaults if changed in form
      if (user && (input.teacherName !== user.name || input.schoolName !== user.schoolName)) {
        handleUpdateUser({ ...user, name: input.teacherName, schoolName: input.schoolName });
      }

      setCurrentPlan(newPlan);
      setSavedViewState(undefined);
      
      // Auto-save to history immediately
      const savedId = handleSaveToHistory(newPlan);
      setActiveHistoryId(savedId);
      
      setView('display');
    } catch (error) {
      alert("Failed to generate lesson plan. Please check your internet connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateHistoryContent = (notes: string | null, questions: string | null) => {
    if (activeHistoryId && currentPlan) {
      handleSaveToHistory(currentPlan, notes, questions, activeHistoryId);
    }
  };

  const handleDeleteHistory = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('lessonPlannerHistory', JSON.stringify(updatedHistory));
  };

  const handleViewHistoryItem = (item: SavedItem) => {
    setCurrentPlan(item.data);
    setActiveHistoryId(item.id);
    setSavedViewState({ notes: item.notes, questions: item.questions });
    setView('display');
  };

  const handleStart = () => {
    if (user) {
      setView(user.role === 'admin' ? 'admin' : 'form');
    } else {
      setView('auth');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
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
                {user?.role === 'admin' ? (
                  <button onClick={() => setView('admin')} className={`text-sm font-medium ${view === 'admin' ? 'text-blue-600' : 'text-slate-600'}`}>Admin Panel</button>
                ) : (
                  <>
                    <button onClick={() => setView('history')} className={`text-sm font-medium ${view === 'history' ? 'text-blue-600' : 'text-slate-600'}`}>History</button>
                    <button onClick={() => setView('form')} className={`text-sm font-medium ${view === 'form' ? 'text-blue-600' : 'text-slate-600'}`}>New Lesson</button>
                  </>
                )}
                <button onClick={() => setView('dashboard')} className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                  <div className="h-6 w-6 rounded-full bg-brand-200 text-brand-700 flex items-center justify-center text-xs font-bold">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-slate-600">{user?.name}</span>
                </button>
                <button onClick={handleLogout} className="text-slate-500 hover:text-red-600"><LogOut className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </nav>
      )}

      <main className={view === 'landing' || view === 'auth' ? '' : 'max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-4'}>
        {view === 'landing' && <Landing onStart={handleStart} user={user} onLogout={handleLogout} onViewHistory={() => setView('history')} onViewDashboard={() => setView('dashboard')} onViewAdmin={() => setView('admin')} />}
        {view === 'auth' && <Auth onLogin={handleLogin} />}
        {view === 'dashboard' && user && <Dashboard user={user} onUpdateUser={handleUpdateUser} />}
        {view === 'admin' && user?.role === 'admin' && <AdminPanel />}
        {view === 'form' && <LessonForm onSubmit={handleGenerate} isLoading={isLoading} user={user} />}
        {view === 'history' && <History items={history} onView={handleViewHistoryItem} onDelete={handleDeleteHistory} />}
        {view === 'display' && currentPlan && <LessonPlanDisplay data={currentPlan} onBack={() => setView('form')} onSave={handleUpdateHistoryContent} savedState={savedViewState} />}
      </main>
    </div>
  );
}

export default App;
