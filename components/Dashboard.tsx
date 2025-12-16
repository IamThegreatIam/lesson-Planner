import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { User as UserIcon, School, Mail, Save, Check } from 'lucide-react';

interface DashboardProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onUpdateUser }) => {
  const [formData, setFormData] = useState<User>(user);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Teacher Dashboard</h2>
        <p className="text-slate-600">Manage your profile and default lesson settings.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-2xl border-4 border-white shadow-sm">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
              <p className="text-slate-500 text-sm flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {user.email}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Display Name</label>
              <div className="relative">
                <UserIcon className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
                <input 
                  type="text" 
                  required 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <p className="text-xs text-slate-500">This name will appear on your generated lesson plans.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">School Name (Default)</label>
              <div className="relative">
                <School className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
                <input 
                  type="text" 
                  placeholder="e.g. Nairobi Junior Secondary"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
                  value={formData.schoolName || ''}
                  onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                />
              </div>
              <p className="text-xs text-slate-500">We'll auto-fill this school name in every new lesson plan form.</p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end">
            <button 
              type="submit"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white shadow-lg transition-all ${
                isSaved 
                  ? 'bg-green-600 hover:bg-green-700 shadow-green-500/20' 
                  : 'bg-brand-600 hover:bg-brand-700 shadow-brand-500/20'
              }`}
            >
              {isSaved ? (
                <>
                  <Check className="w-5 h-5" /> Saved Successfully
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" /> Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;