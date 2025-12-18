import React, { useState, useEffect } from 'react';
import { UserActivity, GradeCurriculum } from '../types';
import { getCurricula, addNewSubject, addNewGrade, deleteSubject, deleteGrade } from '../services/curriculumStore';
import { Users, Activity, Clock, ShieldCheck, Search, Filter, BookOpen, Plus, Trash2, ChevronRight, Layers } from 'lucide-react';

const MOCK_USERS: UserActivity[] = [
  { id: '1', name: 'Mary K.', email: 'mary.k@school.co.ke', school: 'Nairobi Primary', lastLogin: '2 mins ago', status: 'active' },
  { id: '2', name: 'John Doe', email: 'john@doe.com', school: 'Mombasa Academy', lastLogin: '1 hour ago', status: 'active' },
  { id: '3', name: 'Sarah Smith', email: 'sarah@test.com', school: 'Kisumu Day', lastLogin: '1 day ago', status: 'inactive' },
  { id: '4', name: 'Admin User', email: 'admin@lessonplanner.js', school: 'System', lastLogin: 'Just now', status: 'active' },
  { id: '5', name: 'Peter Pan', email: 'peter@fly.com', school: 'Neverland High', lastLogin: '3 days ago', status: 'inactive' },
  { id: '6', name: 'Grace O.', email: 'grace@school.co.ke', school: 'Nakuru High', lastLogin: '5 hours ago', status: 'active' },
  { id: '7', name: 'Tom W.', email: 'tom.w@gmail.com', school: 'Eldoret Primary', lastLogin: '2 weeks ago', status: 'inactive' },
];

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'curriculum'>('users');
  const [curricula, setCurricula] = useState<Record<string, GradeCurriculum[]>>({});
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newGradeData, setNewGradeData] = useState<{subject: string, grade: string} | null>(null);

  useEffect(() => {
    if (activeTab === 'curriculum') {
      loadCurricula();
    }
  }, [activeTab]);

  const loadCurricula = () => {
    setCurricula(getCurricula());
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjectName.trim()) return;
    
    const success = addNewSubject(newSubjectName.trim());
    if (success) {
      setNewSubjectName('');
      loadCurricula();
    } else {
      alert('Subject already exists or invalid name.');
    }
  };

  const handleAddGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGradeData || !newGradeData.grade.trim()) return;

    const success = addNewGrade(newGradeData.subject, newGradeData.grade.trim());
    if (success) {
      setNewGradeData(null);
      loadCurricula();
    } else {
      alert('Grade already exists for this subject.');
    }
  };

  const handleDeleteSubject = (subject: string) => {
    if (window.confirm(`Are you sure you want to delete ${subject} and all its grades?`)) {
        deleteSubject(subject);
        loadCurricula();
    }
  };

  const handleDeleteGrade = (subject: string, gradeId: string) => {
      if(window.confirm(`Delete this grade?`)) {
          deleteGrade(subject, gradeId);
          loadCurricula();
      }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header Stats - Only show on Users tab for simplicity, or keep generally */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Users</p>
            <h3 className="text-2xl font-bold text-slate-900">1,248</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Active Today</p>
            <h3 className="text-2xl font-bold text-slate-900">142</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Subjects</p>
            <h3 className="text-2xl font-bold text-slate-900">{Object.keys(curricula).length || 10}</h3>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'users' 
              ? 'border-blue-600 text-blue-600' 
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          User Activity
        </button>
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'curriculum' 
              ? 'border-blue-600 text-blue-600' 
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Curriculum Management
        </button>
      </div>

      {/* USERS TAB */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-500" />
              User Login Activity
            </h2>
            
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
                />
              </div>
              <button className="p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">School</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Last Login</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_USERS.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{user.name}</div>
                          <div className="text-xs text-slate-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {user.school}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.email.includes('admin') ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.email.includes('admin') ? 'Admin' : 'Teacher'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                        {user.status === 'active' ? 'Active' : 'Offline'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-xs">View Log</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CURRICULUM TAB */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6 animate-fade-in">
          {/* Add Subject Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Subject</h3>
             <form onSubmit={handleAddSubject} className="flex gap-4">
               <div className="flex-1">
                 <input 
                    type="text" 
                    placeholder="Enter subject name (e.g., Computer Science)"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                    value={newSubjectName}
                    onChange={(e) => setNewSubjectName(e.target.value)}
                 />
               </div>
               <button 
                  type="submit" 
                  disabled={!newSubjectName.trim()}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
               >
                 <Plus className="w-4 h-4" /> Add Subject
               </button>
             </form>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(curricula).map(([subject, grades]: [string, GradeCurriculum[]]) => (
              <div key={subject} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brand-600" />
                    {subject}
                  </h3>
                  <button 
                    onClick={() => handleDeleteSubject(subject)}
                    className="text-slate-400 hover:text-red-500 p-1 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Grades / Classes</h4>
                    <div className="space-y-2">
                      {grades.length === 0 ? (
                        <p className="text-sm text-slate-400 italic">No grades added yet.</p>
                      ) : (
                        grades.map((grade) => (
                          <div key={grade.id} className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 group">
                            <span className="text-sm font-medium text-slate-700">{grade.name}</span>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-400">{grade.strands.length} strands</span>
                                <button 
                                    onClick={() => handleDeleteGrade(subject, grade.id)}
                                    className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <XIcon className="w-3.5 h-3.5" />
                                </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Add Grade Form */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    {newGradeData?.subject === subject ? (
                      <form onSubmit={handleAddGrade} className="flex gap-2">
                         <input 
                            type="text" 
                            autoFocus
                            placeholder="Grade Name (e.g. Grade 10)"
                            className="flex-1 px-3 py-1.5 text-sm rounded border border-slate-300 focus:border-brand-500 outline-none"
                            value={newGradeData.grade}
                            onChange={(e) => setNewGradeData({...newGradeData, grade: e.target.value})}
                         />
                         <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-1.5 rounded">
                            <Plus className="w-4 h-4" />
                         </button>
                         <button 
                            type="button" 
                            onClick={() => setNewGradeData(null)}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-600 p-1.5 rounded"
                         >
                            <XIcon className="w-4 h-4" />
                         </button>
                      </form>
                    ) : (
                      <button 
                        onClick={() => setNewGradeData({ subject, grade: '' })}
                        className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-sm text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Add Grade
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Simple X icon for close buttons
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default AdminPanel;