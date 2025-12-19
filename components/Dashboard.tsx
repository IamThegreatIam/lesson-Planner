
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { User as UserIcon, School, Mail, Save, Check, Phone, MapPin, ShieldCheck } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
           <h2 className="text-3xl font-black text-caf-crimson uppercase tracking-tighter">My Profile</h2>
           <p className="text-slate-500 font-medium">Manage your teacher identity and contact details.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-caf-emerald/10 text-caf-emerald rounded-full border border-caf-emerald/20">
           <ShieldCheck className="w-4 h-4" />
           <span className="text-xs font-bold uppercase tracking-widest">Verified Teacher</span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-2xl border-t-4 border-caf-crimson overflow-hidden">
        {/* Banner Section */}
        <div className="bg-caf-dark p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="h-24 w-24 rounded-sm bg-white p-1 shadow-xl">
               <div className="w-full h-full bg-caf-crimson flex items-center justify-center text-white font-black text-4xl">
                 {user.name.charAt(0).toUpperCase()}
               </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">{user.name}</h3>
              <p className="text-caf-gold font-bold text-sm flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest mt-1">
                <Mail className="w-4 h-4" /> {user.email}
              </p>
            </div>
          </div>
          {/* Decorative Mask */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-white/5 organic-mask"></div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
          {/* Section: Professional Identity */}
          <div className="space-y-6">
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] border-b pb-4">Professional Identity</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-caf-crimson absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required 
                      className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-slate-200 focus:border-caf-crimson focus:ring-0 outline-none transition-all text-slate-900 font-bold"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">School / Institution</label>
                  <div className="relative">
                    <School className="w-4 h-4 text-caf-crimson absolute left-3 top-3" />
                    <input 
                      type="text" 
                      placeholder="e.g. Nairobi Junior Secondary"
                      className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-slate-200 focus:border-caf-crimson focus:ring-0 outline-none transition-all text-slate-900 font-bold"
                      value={formData.schoolName || ''}
                      onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                    />
                  </div>
                </div>
             </div>
          </div>

          {/* Section: Contact Information */}
          <div className="space-y-6">
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] border-b pb-4">Contact Details</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-caf-crimson absolute left-3 top-3" />
                    <input 
                      type="tel" 
                      placeholder="+254 7XX XXX XXX"
                      className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-slate-200 focus:border-caf-crimson focus:ring-0 outline-none transition-all text-slate-900 font-bold"
                      value={formData.phone || ''}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Work Location / Address</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-caf-crimson absolute left-3 top-3" />
                    <input 
                      type="text" 
                      placeholder="e.g. Westlands, Nairobi"
                      className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-slate-200 focus:border-caf-crimson focus:ring-0 outline-none transition-all text-slate-900 font-bold"
                      value={formData.location || ''}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>
             </div>
          </div>

          <div className="pt-8 flex items-center justify-end border-t border-slate-100">
            <button 
              type="submit"
              className={`flex items-center gap-3 px-10 py-4 font-black text-xs tracking-[0.2em] text-white uppercase transition-all shadow-xl hover:scale-105 active:scale-95 ${
                isSaved 
                  ? 'bg-caf-emerald' 
                  : 'bg-caf-crimson hover:bg-caf-dark'
              }`}
            >
              {isSaved ? (
                <>
                  <Check className="w-5 h-5" /> Saved Successfully
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" /> Update Profile
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
