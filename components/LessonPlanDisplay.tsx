import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { GeneratedLessonPlan } from '../types';
import { Download, Share2, Printer, ArrowLeft, FileText, BookOpen, HelpCircle, Loader2, Sparkles, Save, Check } from 'lucide-react';
import { exportToWord, exportToWhatsapp } from '../utils/export';
import { generateLessonNotes, generatePracticeQuestions } from '../services/gemini';

interface LessonPlanDisplayProps {
  data: GeneratedLessonPlan;
  onBack: () => void;
  onSave?: (notes: string | null, questions: string | null) => void;
  savedState?: { notes: string | null; questions: string | null };
}

type Tab = 'plan' | 'notes' | 'questions';

const LessonPlanDisplay: React.FC<LessonPlanDisplayProps> = ({ data, onBack, onSave, savedState }) => {
  const [activeTab, setActiveTab] = useState<Tab>('plan');
  const [notes, setNotes] = useState<string | null>(savedState?.notes || null);
  const [questions, setQuestions] = useState<string | null>(savedState?.questions || null);
  const [generating, setGenerating] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState(false);

  // Sync state if props change (e.g., viewing from history)
  useEffect(() => {
    if (savedState) {
      setNotes(savedState.notes);
      setQuestions(savedState.questions);
    }
  }, [savedState]);

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    if (onSave) {
      onSave(notes, questions);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  const handleGenerateNotes = async () => {
    setGenerating(true);
    try {
      const content = await generateLessonNotes(data.content);
      setNotes(content);
    } catch (error) {
      alert("Failed to generate notes. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  const handleGenerateQuestions = async () => {
    setGenerating(true);
    try {
      const content = await generatePracticeQuestions(data.content);
      setQuestions(content);
    } catch (error) {
      alert("Failed to generate questions. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  const getActiveContent = () => {
    switch (activeTab) {
      case 'notes': return notes || '';
      case 'questions': return questions || '';
      default: return data.content;
    }
  };

  const getActiveTitle = () => {
    switch (activeTab) {
      case 'notes': return 'Lesson Notes';
      case 'questions': return 'Practice Questions';
      default: return 'Lesson Plan';
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Bar with Back and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200 no-print gap-4">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="flex flex-wrap justify-center gap-2">
          {onSave && (
            <button 
              onClick={handleSave}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all font-medium text-sm border ${
                isSaved 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {isSaved ? 'Saved to History' : 'Save to History'}
            </button>
          )}
          <div className="w-px h-8 bg-slate-200 mx-1 hidden md:block"></div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors font-medium text-sm"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button 
            onClick={() => exportToWord(data.structured, getActiveContent(), getActiveTitle())}
            disabled={activeTab !== 'plan' && !getActiveContent()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Word
          </button>
          <button 
            onClick={() => exportToWhatsapp(getActiveContent())}
            disabled={activeTab !== 'plan' && !getActiveContent()}
            className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Share2 className="w-4 h-4" />
            WhatsApp
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 no-print">
        <button 
          onClick={() => setActiveTab('plan')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'plan' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Lesson Plan
        </button>
        <button 
          onClick={() => setActiveTab('notes')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'notes' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <FileText className="w-4 h-4" />
          Lesson Notes
        </button>
        <button 
          onClick={() => setActiveTab('questions')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'questions' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          Practice Questions
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white shadow-lg p-8 md:p-12 min-h-[600px] print:shadow-none print:p-0 rounded-xl">
        
        {/* Header Table - Transposed */}
        <div className="mb-8 border border-slate-400 text-sm">
          <div className="grid grid-cols-4 md:grid-cols-8 border-b border-slate-400">
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Teacher</div>
            <div className="p-2 border-r border-slate-400 col-span-1">{data.structured.teacherName}</div>
            
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">School</div>
            <div className="p-2 border-r border-slate-400 col-span-1">{data.structured.schoolName}</div>
            
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Date</div>
            <div className="p-2 border-slate-400 col-span-3">{data.structured.date}</div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-10 border-b-0">
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Subject</div>
            <div className="p-2 border-r border-slate-400 col-span-1">{data.structured.subject}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Grade</div>
            <div className="p-2 border-r border-slate-400 col-span-1">{data.structured.grade}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Term</div>
            <div className="p-2 border-r border-slate-400 col-span-1">{data.structured.term}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Roll</div>
            <div className="p-2 border-r border-slate-400 col-span-1">{data.structured.roll}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400 col-span-1">Time</div>
            <div className="p-2 col-span-1">40 min</div>
          </div>
        </div>

        {/* Dynamic Content */}
        {activeTab === 'plan' && (
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-700 prose-a:text-blue-600 hover:prose-a:text-blue-500 animate-fade-in">
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="animate-fade-in h-full">
            {!notes ? (
              <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Generate Lesson Notes</h3>
                <p className="text-slate-500 text-center max-w-md mb-6">
                  Create detailed, blackboard-ready notes (headings, definitions, points) for students to copy.
                </p>
                <button 
                  onClick={handleGenerateNotes}
                  disabled={generating}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                >
                  {generating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  {generating ? 'Generating Notes...' : 'Generate Notes'}
                </button>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-700 prose-li:marker:text-slate-500">
                <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between no-print">
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Board Notes</h2>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">AI Generated</span>
                </div>
                <ReactMarkdown>{notes}</ReactMarkdown>
              </div>
            )}
          </div>
        )}

        {activeTab === 'questions' && (
          <div className="animate-fade-in h-full">
            {!questions ? (
              <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <HelpCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Generate Practice Questions</h3>
                <p className="text-slate-500 text-center max-w-md mb-6">
                  Create 10 practice questions with answers to test student understanding of this lesson.
                </p>
                <button 
                  onClick={handleGenerateQuestions}
                  disabled={generating}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                >
                  {generating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  {generating ? 'Generating Questions...' : 'Generate Questions'}
                </button>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-700">
                <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between no-print">
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Practice Questions</h2>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">AI Generated</span>
                </div>
                <ReactMarkdown>{questions}</ReactMarkdown>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between text-sm text-slate-400 no-print">
          <span>Generated by LessonPlanner.JS AI</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanDisplay;