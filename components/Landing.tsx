
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Menu,
  X,
  BrainCircuit,
  LogOut,
  Search,
  ExternalLink,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { User } from '../types';
import { fetchKenyaEducationNews, NewsItem as NewsType } from '../services/news';

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
  const [news, setNews] = useState<NewsType[]>([]);
  const [isNewsLoading, setIsNewsLoading] = useState(true);

  const loadNews = async () => {
    setIsNewsLoading(true);
    const data = await fetchKenyaEducationNews();
    setNews(data);
    setIsNewsLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Top Header Bar */}
      <div className="bg-caf-dark text-[10px] font-bold text-slate-400 py-1.5 px-4 hidden md:block border-b border-white/5">
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
      <nav className="bg-caf-crimson sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="bg-white p-1 rounded-sm mr-2">
                  <BrainCircuit className="w-8 h-8 text-caf-crimson" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-white leading-none tracking-tight">LessonPlanner</span>
                  <span className="text-[10px] font-bold text-white/80 tracking-[0.2em] uppercase">Kenya Education</span>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-6">
                <NavButton label="HOME" sub="Start Here" active />
                <NavButton label="NEWS" sub="Latest Updates" />
                <NavButton label="VIDEO" sub="Watch Demos" />
                <NavButton label="RESOURCES" sub="Curriculum Docs" />
                <NavButton label="ARCHIVE" sub="Saved Plans" />
              </div>
            </div>

            <div className="flex items-center gap-4">
               {user ? (
                <div className="hidden md:flex items-center gap-4">
                   <div className="flex flex-col items-end">
                      <button onClick={onViewDashboard} className="text-white text-xs font-bold hover:text-white/80 uppercase">Dashboard</button>
                      <span className="text-[8px] text-white/50 uppercase font-black tracking-widest">My Account</span>
                   </div>
                   <div className="flex flex-col items-end">
                      <button onClick={onLogout} className="text-white text-xs font-bold hover:text-white/80 uppercase flex items-center gap-1">
                        <LogOut className="w-3 h-3" /> Sign Out
                      </button>
                      <span className="text-[8px] text-white/50 uppercase font-black tracking-widest">Exit Session</span>
                   </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <button onClick={onStart} className="text-white text-xs font-bold hover:text-white/80 uppercase">Sign In</button>
                  <span className="text-[8px] text-white/50 uppercase font-black tracking-widest">Teacher Login</span>
                </div>
              )}
              
              <div className="flex flex-col items-center">
                <button 
                  onClick={onStart}
                  className="bg-white text-caf-crimson px-5 py-2.5 rounded-sm text-xs font-black tracking-widest hover:bg-slate-100 transition-colors shadow-lg"
                >
                  {user ? 'OPEN PLANNER' : 'GET STARTED'}
                </button>
                <span className="text-[8px] text-white mt-1 uppercase font-black tracking-widest">Free for Teachers</span>
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[75vh] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 animate-fade-in-up uppercase">
            JSS PLANNER 2025
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 tracking-wide mb-8 animate-fade-in-up animation-delay-200">
            Professional Pedagogical Excellence for the CBC Framework
          </p>
          <div className="flex flex-col items-center">
            <button onClick={onStart} className="bg-white text-caf-dark px-10 py-4 font-black text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-2xl uppercase">
              Start Generating Now <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-white/60 text-[10px] mt-4 font-bold uppercase tracking-[0.3em]">Trusted by 5,000+ Kenyan Educators</span>
          </div>
        </div>
      </header>

      {/* Tickets/CTA Section */}
      <section className="bg-caf-crimson py-20 overflow-hidden relative border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="z-10 text-white space-y-6">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Lesson Plans <br/>On Demand</h2>
               <p className="text-white/80 text-lg leading-relaxed max-w-md">
                 Transform your preparation time. Generate comprehensive JSS lesson plans for Term 1, 2, and 3 instantly. Aligned with the latest KICD circulars.
               </p>
               <div className="flex flex-col items-start">
                 <button onClick={onStart} className="bg-white text-caf-crimson px-8 py-3 font-black text-xs tracking-widest uppercase hover:bg-slate-100 transition-colors">
                    Create Now
                 </button>
                 <span className="text-[9px] text-white/60 mt-2 font-black uppercase tracking-widest">PDF, Word & WhatsApp Export</span>
               </div>
            </div>
            <div className="relative group">
               <div className="rounded-[4rem] overflow-hidden organic-mask border-8 border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" 
                    className="w-full h-80 object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    alt="Students Learning"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Covered Grades */}
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
              btnSub="Year 1 Foundations"
            />
            <GradeCard 
              name="Grade 8" 
              desc="Mastering Measurement and Financial Literacy." 
              img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              btnSub="Advanced CBC Content"
            />
            <GradeCard 
              name="Grade 9" 
              desc="Advanced Geometry and Data Handling skills." 
              img="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
              btnSub="Pathway Preparation"
            />
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
         <div className="bg-gradient-to-r from-caf-crimson to-caf-gold p-1 rounded-sm shadow-2xl">
            <div className="bg-[#1a1a1a] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
               <div className="z-10 space-y-2">
                  <div className="flex items-center gap-2 mb-4">
                     <Star className="w-6 h-6 text-caf-gold fill-caf-gold" />
                     <span className="text-caf-gold font-bold text-sm tracking-[0.3em] uppercase">Premium Access</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">SCHOOL LICENSES ARE <br/><span className="text-caf-gold">NOW OPEN</span></h3>
               </div>
               <div className="z-10 flex flex-col items-center">
                  <button className="bg-caf-gold text-caf-dark px-10 py-4 font-black text-xs tracking-widest uppercase hover:bg-white transition-colors">
                     Contact sales
                  </button>
                  <span className="text-caf-gold/50 text-[9px] mt-2 font-black uppercase tracking-widest">Bulk Discounts for Schools</span>
               </div>
               <div className="absolute right-0 top-0 h-full w-1/3 bg-caf-gold opacity-5 rotate-12 translate-x-12"></div>
               <BrainCircuit className="absolute -right-12 bottom-0 w-64 h-64 text-white opacity-5" />
            </div>
         </div>
      </section>

      {/* Dynamic News Feed */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-2xl font-black text-caf-crimson uppercase tracking-widest flex items-center gap-3">
                 <span className="w-12 h-1 bg-caf-crimson"></span> LATEST EDUCATION NEWS
               </h2>
               <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Scouted in real-time from Kenya</p>
            </div>
            <div className="flex flex-col items-end">
              <button 
                onClick={loadNews} 
                disabled={isNewsLoading}
                className="bg-caf-crimson text-white px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase flex items-center gap-2 hover:bg-caf-dark transition-colors"
              >
                {isNewsLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                Refresh News
              </button>
              <span className="text-[7px] text-slate-400 mt-1 uppercase font-bold tracking-widest">Powered by Google Search</span>
            </div>
          </div>

          {isNewsLoading ? (
            <div className="h-64 flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-slate-200">
               <Loader2 className="w-12 h-12 text-caf-crimson animate-spin mb-4" />
               <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Scouting Kenya Education News...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {news.length > 0 && (
                 <div className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-white border border-slate-200 rounded-sm">
                    <div className="h-[450px] overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="News Banner" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-caf-dark via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 p-8 text-white w-full">
                       <span className="bg-caf-emerald text-[8px] font-black tracking-widest px-2 py-1 uppercase rounded-sm mb-4 inline-block">Top Story</span>
                       <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">{news[0].title}</h3>
                       <p className="text-white/70 text-sm mb-6 max-w-xl">{news[0].snippet}</p>
                       <div className="flex justify-between items-center">
                         <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{news[0].date}</span>
                         <a href={news[0].url} target="_blank" rel="noopener" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-xs font-bold transition-colors">
                            Official Source <ExternalLink className="w-3 h-3" />
                         </a>
                       </div>
                    </div>
                 </div>
               )}

               <div className="space-y-6">
                  {news.slice(1).map((item, idx) => (
                    // Fix: Use NewsCard instead of NewsItem component to avoid collision with NewsItem interface name
                    <NewsCard key={idx} item={item} />
                  ))}
               </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-caf-dark text-slate-400 py-20 px-4 border-t-4 border-caf-crimson">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-1 rounded-sm">
                <BrainCircuit className="w-8 h-8 text-caf-crimson" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter">LessonPlanner.JS</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-8">
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
             <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[8px] text-slate-900 font-black">KICD</div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[8px] text-slate-900 font-black">TSC</div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[8px] text-slate-900 font-black">KNEC</div>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 text-center">
           <p className="text-[8px] uppercase tracking-widest font-black text-white/20">© 2025 LessonPlanner.JS • Designed for African Pedagogical Excellence</p>
        </div>
      </footer>
    </div>
  );
};

// Internal Subcomponents
const NavButton = ({ label, sub, active = false }: { label: string, sub: string, active?: boolean }) => (
  <div className="flex flex-col items-center">
    <button className={`text-xs font-black tracking-widest transition-colors ${active ? 'text-white border-b-2 border-white pb-1' : 'text-white/60 hover:text-white'}`}>
      {label}
    </button>
    <span className="text-[7px] text-white/30 uppercase font-black tracking-widest mt-1 group-hover:text-white/60">{sub}</span>
  </div>
);

const GradeCard = ({ name, desc, img, btnSub }: { name: string, desc: string, img: string, btnSub: string }) => (
  <div className="bg-caf-crimson rounded-t-[2.5rem] overflow-hidden group cursor-pointer shadow-xl transition-transform hover:-translate-y-2">
    <div className="h-64 overflow-hidden relative">
      <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={name} />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-8 text-white">
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{name}</h3>
      <p className="text-white/70 text-sm mb-8 font-medium leading-relaxed">{desc}</p>
      <div className="flex flex-col items-start">
        <button className="bg-white text-caf-crimson px-6 py-2 text-[10px] font-black tracking-widest uppercase hover:bg-slate-100 transition-colors">
          View More
        </button>
        <span className="text-[7px] text-white/50 mt-2 font-black uppercase tracking-widest">{btnSub}</span>
      </div>
    </div>
  </div>
);

// Fix: Renamed NewsItem to NewsCard and explicitly type as React.FC to fix TypeScript error on usage line 292
const NewsCard: React.FC<{ item: NewsType }> = ({ item }) => (
  <div className="group cursor-pointer bg-white p-6 border border-slate-200 hover:border-caf-crimson transition-all rounded-sm">
     <h4 className="text-sm font-bold text-slate-900 group-hover:text-caf-crimson transition-colors uppercase leading-snug mb-3">
       {item.title}
     </h4>
     <p className="text-slate-500 text-xs mb-4 line-clamp-2">{item.snippet}</p>
     <div className="flex justify-between items-center">
       <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{item.date}</p>
       <a href={item.url} target="_blank" rel="noopener" className="text-caf-crimson text-[9px] font-black uppercase tracking-widest flex items-center gap-1 hover:underline">
         Source <ExternalLink className="w-2 h-2" />
       </a>
     </div>
  </div>
);

export default Landing;
