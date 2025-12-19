
import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Menu,
  X,
  BrainCircuit,
  LogOut,
  User as UserIcon,
  Shield,
  Search,
  Globe,
  Bell
} from 'lucide-react';
import { User } from '../types';

interface LandingProps {
  onStart: () => void;
  user: User | null;
  onLogout: () => void;
  onViewHistory?: () => void;
  onViewDashboard?: () => void;
  onViewAdmin?: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart, user, onLogout, onViewHistory, onViewDashboard, onViewAdmin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Top Header Bar (Like Inside CAF) */}
      <div className="bg-caf-dark text-[10px] font-bold text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">INSIDE KICD</span>
            <span className="hover:text-white cursor-pointer transition-colors">CURRICULUM</span>
            <span className="hover:text-white cursor-pointer transition-colors">NEWS</span>
            <span className="hover:text-white cursor-pointer transition-colors">PRESS RELEASE</span>
            <span className="hover:text-white cursor-pointer transition-colors">DOCUMENTS</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-white">English</span>
            <span className="hover:text-white cursor-pointer">Kiswahili</span>
            <Search className="w-3 h-3 hover:text-white cursor-pointer" />
            <span className="bg-slate-700 text-white px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer hover:bg-slate-600">
              All sections <Menu className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-caf-crimson sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-white p-1 rounded-sm mr-2">
                  <BrainCircuit className="w-8 h-8 text-caf-crimson" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-white leading-none tracking-tight">LessonPlanner</span>
                  <span className="text-[10px] font-bold text-white/80 tracking-[0.2em] uppercase">Kenya Education</span>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-6">
                <NavButton label="HOME" active />
                <NavButton label="NEWS" />
                <NavButton label="VIDEO" />
                <NavButton label="RESOURCES" />
                <NavButton label="ARCHIVE" />
              </div>
            </div>

            <div className="flex items-center gap-4">
               {user ? (
                <div className="hidden md:flex items-center gap-4">
                   <button onClick={onViewDashboard} className="text-white text-xs font-bold hover:text-white/80 uppercase">Dashboard</button>
                   <button onClick={onLogout} className="text-white text-xs font-bold hover:text-white/80 uppercase flex items-center gap-1">
                     <LogOut className="w-3 h-3" /> Sign Out
                   </button>
                </div>
              ) : (
                <button onClick={onStart} className="text-white text-xs font-bold hover:text-white/80 uppercase">Sign In</button>
              )}
              
              <button 
                onClick={onStart}
                className="bg-white text-caf-crimson px-5 py-2.5 rounded-sm text-xs font-black tracking-widest hover:bg-slate-100 transition-colors shadow-lg"
              >
                {user ? 'OPEN PLANNER' : 'GET STARTED'}
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Like AFCON 2025 Banner) */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2500&auto=format&fit=crop" 
          alt="Modern Classroom" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 caf-hero-gradient"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
               <BrainCircuit className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 animate-fade-in-up">
            JSS PLANNER 2025
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 tracking-wide mb-8 animate-fade-in-up animation-delay-200">
            Everything you need for the Competency-Based Curriculum (CBC) in Junior Secondary
          </p>
          <button onClick={onStart} className="bg-white text-caf-dark px-10 py-4 font-black text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-2xl uppercase">
            Start Generating Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Tickets Section (Like the CTA block) */}
      <section className="bg-caf-crimson py-20 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="z-10 text-white space-y-6">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Lesson Plans <br/>On Demand</h2>
               <p className="text-white/80 text-lg leading-relaxed max-w-md">
                 Book your teaching hours back! Generate comprehensive JSS lesson plans for Term 1, 2, and 3 instantly. Experience the precision and power of AI-guided pedagogy.
               </p>
               <button onClick={onStart} className="bg-white text-caf-crimson px-8 py-3 font-black text-xs tracking-widest uppercase hover:bg-slate-100 transition-colors">
                  Create Now
               </button>
            </div>
            <div className="relative group">
               <div className="rounded-[4rem] overflow-hidden organic-mask border-8 border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" 
                    className="w-full h-80 object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    alt="Students Learning"
                  />
               </div>
               <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-caf-emerald rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>
         </div>
      </section>

      {/* Host Cities -> Grade Selection Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-caf-crimson uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-12 h-1 bg-caf-crimson"></span> COVERED GRADES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GradeCard 
              name="Grade 7" 
              desc="Building foundations with Numbers and Algebra." 
              img="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=800&auto=format&fit=crop"
            />
            <GradeCard 
              name="Grade 8" 
              desc="Mastering Measurement and Financial Literacy." 
              img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            />
            <GradeCard 
              name="Grade 9" 
              desc="Advanced Geometry and Data Handling skills." 
              img="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Hospitality Banner */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
         <div className="bg-gradient-to-r from-[#8b2529] to-[#c5a059] p-1 rounded-sm">
            <div className="bg-[#1a1a1a] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
               <div className="z-10 space-y-2">
                  <div className="flex items-center gap-2 mb-4">
                     <Star className="w-6 h-6 text-caf-gold fill-caf-gold" />
                     <span className="text-caf-gold font-bold text-sm tracking-[0.3em] uppercase">Premium Access</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">SCHOOL LICENSES ARE <br/><span className="text-caf-gold">NOW OPEN</span></h3>
               </div>
               <div className="z-10">
                  <button className="bg-caf-gold text-caf-dark px-10 py-4 font-black text-xs tracking-widest uppercase hover:bg-white transition-colors">
                     Contact sales.kicd.com
                  </button>
               </div>
               {/* Decorative Element */}
               <div className="absolute right-0 top-0 h-full w-1/3 bg-caf-gold opacity-5 rotate-12 translate-x-12"></div>
               <BrainCircuit className="absolute -right-12 bottom-0 w-64 h-64 text-white opacity-5" />
            </div>
         </div>
      </section>

      {/* Latest News */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-2xl font-black text-caf-crimson uppercase tracking-widest flex items-center gap-3">
                 <span className="w-12 h-1 bg-caf-crimson"></span> LATEST NEWS
               </h2>
            </div>
            <button className="bg-caf-crimson text-white px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase">
              See all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-white">
                <div className="h-[400px] overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-caf-crimson via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8 text-white">
                   <h3 className="text-2xl md:text-4xl font-black uppercase mb-2">The 24 teachers shaping the 2025 JSS Curriculum</h3>
                   <p className="text-white/70 text-sm">Friday, 19 December 2025</p>
                </div>
             </div>

             <div className="space-y-8">
                <NewsItem title="Maths Olympiad 2025: JSS champions announced" date="Thursday, 18 December 2025" />
                <NewsItem title="New digital learning tools added to Planner.JS library" date="Wednesday, 17 December 2025" />
                <NewsItem title="Curriculum update: Integrating coding into Pre-Technical Studies" date="Tuesday, 16 December 2025" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer (CAF Style) */}
      <footer className="bg-caf-dark text-slate-400 py-20 px-4 border-t-4 border-caf-crimson">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-1 rounded-sm">
                <BrainCircuit className="w-8 h-8 text-caf-crimson" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter">LessonPlanner.JS</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed">
              Kenya's premier AI-powered lesson plan generation platform. Built specifically for JSS teachers, aligned with the KICD Competency-Based Curriculum.
            </p>
          </div>
          <div>
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-white transition-colors">Grade 7 Curricula</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 8 Curricula</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 9 Curricula</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teacher Community</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-black text-xs tracking-widest uppercase mb-6">Official Partners</h4>
             <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <div className="w-12 h-12 bg-white rounded-full"></div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Internal Subcomponents
const NavButton = ({ label, active = false }: { label: string, active?: boolean }) => (
  <button className={`text-xs font-black tracking-widest transition-colors ${active ? 'text-white border-b-2 border-white pb-1' : 'text-white/60 hover:text-white'}`}>
    {label}
  </button>
);

const GradeCard = ({ name, desc, img }: { name: string, desc: string, img: string }) => (
  <div className="bg-caf-crimson rounded-t-[2.5rem] overflow-hidden group cursor-pointer shadow-xl transition-transform hover:-translate-y-2">
    <div className="h-64 overflow-hidden relative">
      <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={name} />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-8 text-white">
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{name}</h3>
      <p className="text-white/70 text-sm mb-8 font-medium leading-relaxed">{desc}</p>
      <button className="bg-white text-caf-crimson px-6 py-2 text-[10px] font-black tracking-widest uppercase hover:bg-slate-100 transition-colors">
        View More
      </button>
    </div>
  </div>
);

const NewsItem = ({ title, date }: { title: string, date: string }) => (
  <div className="group cursor-pointer">
     <h4 className="text-sm md:text-md font-bold text-slate-900 group-hover:text-caf-crimson transition-colors uppercase leading-snug mb-2">
       {title}
     </h4>
     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{date}</p>
     <div className="h-px bg-slate-200 mt-6 group-hover:bg-caf-crimson transition-colors"></div>
  </div>
);

export default Landing;
