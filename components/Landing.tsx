import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight, 
  Star, 
  Send,
  Menu,
  X,
  BrainCircuit,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  LogOut,
  User as UserIcon,
  History,
  LayoutDashboard,
  Shield
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav border-b border-slate-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-brand-600 p-1.5 rounded-lg mr-2">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                LessonPlanner.JS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Features</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Contact</button>
              
              {user && user.role !== 'admin' && onViewHistory && (
                <button 
                  onClick={onViewHistory}
                  className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
                >
                  History
                </button>
              )}

              {user && user.role === 'admin' && onViewAdmin && (
                <button 
                  onClick={onViewAdmin}
                  className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1"
                >
                  <Shield className="w-4 h-4" /> Admin
                </button>
              )}
            </div>

            {/* CTA & Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <button 
                    onClick={onViewDashboard}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200 hover:bg-slate-200 transition-colors"
                  >
                    <UserIcon className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">{user.name}</span>
                  </button>
                  <button 
                    onClick={onLogout}
                    className="text-sm font-medium text-slate-500 hover:text-red-600 px-3 py-2 flex items-center gap-1"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </>
              ) : (
                <button 
                  onClick={onStart}
                  className="text-sm font-medium text-slate-600 hover:text-brand-600 px-3 py-2"
                >
                  Sign In
                </button>
              )}
              
              <button 
                onClick={onStart}
                className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                {user ? (user.role === 'admin' ? 'Admin Panel' : 'Go to Planner') : 'Get Started'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full px-4 pt-2 pb-6 shadow-xl">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('about')} className="text-left font-medium text-slate-600">About</button>
              <button onClick={() => scrollToSection('features')} className="text-left font-medium text-slate-600">Features</button>
              <button onClick={() => scrollToSection('contact')} className="text-left font-medium text-slate-600">Contact</button>
              {user && user.role !== 'admin' && onViewHistory && (
                <button onClick={onViewHistory} className="text-left font-medium text-slate-600">History</button>
              )}
              {user && onViewDashboard && (
                <button onClick={onViewDashboard} className="text-left font-medium text-slate-600">Dashboard</button>
              )}
              {user && user.role === 'admin' && onViewAdmin && (
                <button onClick={onViewAdmin} className="text-left font-medium text-purple-600">Admin Panel</button>
              )}
              <hr className="border-slate-100" />
              {user ? (
                <>
                  <div className="flex items-center gap-2 py-2">
                    <UserIcon className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-700">{user.name}</span>
                  </div>
                  <button onClick={onLogout} className="text-left font-medium text-red-600">Sign Out</button>
                </>
              ) : (
                <button onClick={onStart} className="text-left font-medium text-slate-600">Sign In</button>
              )}
              <button onClick={onStart} className="bg-brand-600 text-white font-semibold py-3 rounded-lg text-center">
                {user ? (user.role === 'admin' ? 'Admin Panel' : 'Go to Planner') : 'Get Started'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 01. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-pink-200 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in-up">
            <Sparkles className="w-3 h-3" />
            AI Lesson Planner Assistant
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight animate-fade-in-up delay-100">
            Smart Lesson <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Planning</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in-up delay-200">
            AI-powered lesson plan generator for Kenyan CBC curriculum. Create professional, detailed lesson plans for Mathematics, Pre-Technical Studies, and Integrated Science in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1"
            >
              {user ? (user.role === 'admin' ? 'Admin Panel' : 'Go to Planner') : 'Get Started'}
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-6 px-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> CBC Aligned</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> AI-Powered</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Save Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. FEATURES SECTION */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-600 tracking-wide uppercase mb-3">02 Features</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About LessonPlanner.JS</h3>
            <p className="text-lg text-slate-600">
              Empowering Kenyan teachers with AI-powered lesson planning tools that save time and enhance teaching quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-brand-600" />}
              title="CBC Aligned"
              description="All lesson plans follow the Kenyan Competency-Based Curriculum standards."
            />
            <FeatureCard 
              icon={<BrainCircuit className="w-8 h-8 text-purple-600" />}
              title="AI-Powered"
              description="Advanced AI generates detailed, context-specific lesson content."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-pink-600" />}
              title="Save Time"
              description="Generate professional lesson plans in minutes, not hours."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-orange-600" />}
              title="Teacher-Focused"
              description="Designed by educators, for educators across Kenya."
            />
          </div>
        </div>
      </section>

      {/* 03. TESTIMONIALS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 tracking-wide uppercase mb-3">03 Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Teachers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="This tool has transformed how I prepare for my classes. The lesson plans are detailed, aligned with CBC, and save me hours every week. Highly recommended for all teachers!"
              author="Mary K."
              role="JSS Mathematics Teacher, Nairobi"
            />
            <TestimonialCard 
              quote="As a head of department, I've introduced this to my entire team. The consistency and quality of lesson plans have improved dramatically. It's a game-changer for education."
              author="John M."
              role="HOD Pre-Technical Studies, Kisumu"
            />
            <TestimonialCard 
              quote="I was skeptical about AI-generated content, but the lesson plans are incredibly relevant and practical. The Kenyan context and real-world examples make teaching so much easier."
              author="Grace O."
              role="Integrated Science Teacher, Mombasa"
            />
            <TestimonialCard 
              quote="The time I save on lesson planning now goes into actually helping my students. The plans are comprehensive and I can easily customize them to fit my class needs."
              author="Peter K."
              role="JSS Teacher, Nakuru"
            />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates, teaching tips, and new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your.email@school.co.ke" 
              className="flex-1 px-5 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-brand-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              Subscribe <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-600 mb-8">
                Have questions or feedback? We'd love to hear from you!
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" placeholder="your.email@school.co.ke" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8 lg:pt-16">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-600" /> Email Us
                </h4>
                <p className="text-slate-600 mb-2">For support and inquiries, reach out at:</p>
                <a href="mailto:macdonaldmuhiga@gmail.com" className="text-brand-600 font-medium hover:underline">macdonaldmuhiga@gmail.com</a>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" /> Feedback
                </h4>
                <p className="text-slate-600">
                  We're constantly improving! Share your suggestions to help us make LessonPlanner.JS even better for Kenyan teachers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-600 p-1 rounded-md">
                  <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">LessonPlanner.JS</span>
              </div>
              <p className="max-w-sm mb-6">
                Professional AI-powered lesson plan generation for Kenyan schools, aligned with the Competency-Based Curriculum (CBC). Supporting Mathematics, Pre-Technical Studies, and Integrated Science.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Developer</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>Macdonald Muhiga</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-500" />
                  <span>+254 725 738 254</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-500" />
                  <span>+254 710 151 009</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-500" />
                  <span>macdonaldmuhiga@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2025 LessonPlanner.JS. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components for better organization
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
    <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">"{quote}"</p>
    <div>
      <p className="font-bold text-slate-900">{author}</p>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </div>
);

export default Landing;