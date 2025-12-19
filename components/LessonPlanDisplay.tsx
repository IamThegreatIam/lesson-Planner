
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { GeneratedLessonPlan } from '../types';
import { Download, Share2, Printer, ArrowLeft, FileText, BookOpen, HelpCircle, Loader2, Sparkles, Check } from 'lucide-react';
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

  useEffect(() => {
    if (savedState) {
      setNotes(savedState.notes);
      setQuestions(savedState.questions);
    }
  }, [savedState]);

  // Sync back to App history whenever local state changes
  useEffect(() => {
    if (onSave && (notes !== savedState?.notes || questions !== savedState?.questions)) {
      onSave(notes, questions);
    }
  }, [notes, questions, onSave, savedState]);

  const handlePrint = () => window.print();

  const handleGenerateNotes = async () => {
    setGenerating(true);
    try {
      const content = await generateLessonNotes(data.content);
      setNotes(content);
      setActiveTab('notes');
    } catch (error) {
      alert("Failed to generate notes.");
    } finally {
      setGenerating(false);
    }
  };

  const handleGenerateQuestions = async () => {
    setGenerating(true);
    try {
      const content = await generatePracticeQuestions(data.content);
      setQuestions(content);
      setActiveTab('questions');
    } catch (error) {
      alert("Failed to generate questions.");
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

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200 no-print gap-4">
        <button onClick={onBack} className="flex items-center text-slate-600 hover:text-slate-900"><ArrowLeft className="w-5 h-5 mr-2" />Back</button>

        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-50 text-green-700 border border-green-200 font-medium text-sm">
            <Check className="w-4 h-4" /> Report Auto-Saved
          </div>
          <div className="w-px h-8 bg-slate-200 mx-1 hidden md:block"></div>
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm"><Printer className="w-4 h-4" />Print</button>
          <button onClick={() => exportToWord(data.structured, getActiveContent())} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm"><Download className="w-4 h-4" />Word</button>
          <button onClick={() => exportToWhatsapp(getActiveContent())} className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-md text-sm"><Share2 className="w-4 h-4" />WhatsApp</button>
        </div>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 no-print">
        {['plan', 'notes', 'questions'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab as Tab)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-md transition-all ${
              activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab === 'plan' ? <BookOpen className="w-4 h-4" /> : tab === 'notes' ? <FileText className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-lg p-8 md:p-12 min-h-[600px] print:shadow-none print:p-0 rounded-xl">
        <div className="mb-8 border border-slate-400 text-sm">
          <div className="grid grid-cols-4 md:grid-cols-8 border-b border-slate-400">
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Teacher</div>
            <div className="p-2 border-r border-slate-400">{data.structured.teacherName}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">School</div>
            <div className="p-2 border-r border-slate-400">{data.structured.schoolName}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Date</div>
            <div className="p-2 border-slate-400 col-span-3">{data.structured.date}</div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-10">
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Subject</div>
            <div className="p-2 border-r border-slate-400">{data.structured.subject}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Grade</div>
            <div className="p-2 border-r border-slate-400">{data.structured.grade}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Term</div>
            <div className="p-2 border-r border-slate-400">{data.structured.term}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Roll</div>
            <div className="p-2 border-r border-slate-400">{data.structured.roll}</div>
            <div className="bg-slate-100 font-bold p-2 border-r border-slate-400">Time</div>
            <div className="p-2">40 min</div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          {activeTab === 'plan' ? (
            <ReactMarkdown>{data.content}</ReactMarkdown>
          ) : activeTab === 'notes' ? (
            notes ? <ReactMarkdown>{notes}</ReactMarkdown> : (
              <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-700 mb-4">No notes generated for this report.</h3>
                <button onClick={handleGenerateNotes} disabled={generating} className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto">
                  {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  Generate Notes
                </button>
              </div>
            )
          ) : (
            questions ? <ReactMarkdown>{questions}</ReactMarkdown> : (
              <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-700 mb-4">No questions generated for this report.</h3>
                <button onClick={handleGenerateQuestions} disabled={generating} className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto">
                  {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  Generate Questions
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPlanDisplay;
