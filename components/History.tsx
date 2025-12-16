import React from 'react';
import { SavedItem } from '../types';
import { Trash2, ArrowRight, Calendar, BookOpen, FileText } from 'lucide-react';

interface HistoryProps {
  items: SavedItem[];
  onView: (item: SavedItem) => void;
  onDelete: (id: string) => void;
}

const History: React.FC<HistoryProps> = ({ items, onView, onDelete }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <div className="bg-slate-100 p-6 rounded-full mb-4">
          <BookOpen className="w-10 h-10 text-slate-300" />
        </div>
        <h3 className="text-xl font-bold text-slate-600 mb-2">No Saved Lessons Yet</h3>
        <p className="max-w-md text-center">
          Generate a lesson plan and click "Save to History" to access it here later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-brand-600" />
          Saved Lessons
        </h2>
        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {items.length} Items
        </span>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                    {item.subject}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded">
                    {item.grade}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-slate-500 gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                  {item.notes && (
                    <span className="flex items-center gap-1 text-green-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Notes
                    </span>
                  )}
                  {item.questions && (
                    <span className="flex items-center gap-1 text-purple-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Questions
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button 
                  onClick={() => onView(item)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-medium px-4 py-2.5 rounded-lg border border-slate-200 hover:border-brand-200 transition-all text-sm"
                >
                  View
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}
                  className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;