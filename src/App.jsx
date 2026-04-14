import React, { useEffect, useState, Suspense } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProblemSolution from './components/ProblemSolution';
import BuilderModes from './components/BuilderModes';
import { SocialProof, CTA } from './components/SocialCTA';
import Dashboard from './components/Dashboard';
import CommandPalette from './components/CommandPalette';
import Section3D from './components/Section3D';

// Global action handler
export const handleAction = (label) => {
  toast.success(`Access Request Sent`, {
    description: `Request for ${label} has been queued for verification.`,
    style: { background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }
  });
};

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [view, setView] = useState('landing'); 
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsCommandOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] relative selection:bg-tulips/40 overflow-x-hidden text-white font-sans">
      <Toaster position="bottom-right" theme="dark" expand={true} richColors />
      
      <AnimatePresence>
        {isCommandOpen && (
          <CommandPalette 
            isOpen={isCommandOpen} 
            onClose={() => setIsCommandOpen(false)} 
            onAction={(cmd) => {
              setIsCommandOpen(false);
              toast(`Executing: ${cmd}`, { description: "Mission Control processing..." });
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* CINEMATIC NEBULA BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
               <motion.div 
                 style={{ y: bgY }}
                 className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-tulips/10 blur-[200px] rounded-full mix-blend-screen opacity-40 animate-pulse-slow" 
               />
               <motion.div 
                 style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                 className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-clear-sky/10 blur-[200px] rounded-full mix-blend-screen opacity-40" 
               />
               <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-daffodils/5 blur-[150px] rounded-full mix-blend-screen opacity-40" />
               <div className="noise absolute inset-0 z-0" />
               <div className="grid-pattern absolute inset-0 z-0 opacity-20" />
            </div>
            
            {/* HAPTIC CURSOR LIGHT */}
            <motion.div 
              className="fixed top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none z-[100] hidden md:block"
              animate={{ x: mousePos.x - 200, y: mousePos.y - 200 }}
              transition={{ type: "spring", damping: 50, stiffness: 400, mass: 1 }}
            />

            <Navbar onAction={() => setView('app')} />
            
            <main className="relative z-10">
              <Section3D>
                 <Hero onAction={(label) => handleAction(label)} />
              </Section3D>

              <div className="space-y-48">
                <Features onAction={(label) => handleAction(label)} />
                <ProblemSolution onAction={(label) => handleAction(label)} />
                <BuilderModes onAction={(label) => handleAction(label)} />
                <SocialProof onAction={(label) => handleAction(label)} />
                <CTA onAction={() => setView('app')} />
              </div>
            </main>

            <footer className="py-32 px-12 border-t border-white/5 bg-black/80 backdrop-blur-3xl text-center relative z-10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 text-left">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                          <span className="text-black font-black text-lg italic">H</span>
                        </div>
                        <span className="text-2xl font-black tracking-tighter">happenstance</span>
                    </div>
                    <p className="text-white/40 max-w-sm font-medium leading-relaxed">
                      Expanding human capability through programmatic serendipity and AI-indexed social graphs.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
                     <FooterColumn title="Platform" links={['Discovery', 'Graph API', 'Workflow', 'Enterprise']} />
                     <FooterColumn title="Company" links={['About', 'Careers', 'Journal', 'Privacy']} />
                     <FooterColumn title="Social" links={['Twitter', 'LinkedIn', 'Discord']} />
                  </div>
              </div>
              <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/20">
                 <span>© 2026 Happenstance Global nodes</span>
                 <span>V4.2.2-STABLE</span>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Dashboard onBack={() => setView('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* MISSION CONTROL HINT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="fixed bottom-12 right-12 z-[150] hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 cursor-pointer hover:text-white transition-all group"
        onClick={() => setIsCommandOpen(true)}
      >
        <div className="p-3 border border-white/10 rounded-xl bg-white/5 group-hover:border-tulips/50 transition-all">⌘ K</div>
        <span className="group-hover:tracking-[0.6em] transition-all">MISSION CONTROL</span>
      </motion.div>
    </div>
  );
}

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">{title}</h5>
    <div className="flex flex-col gap-3">
      {links.map(link => (
        <a key={link} href="#" className="text-sm font-medium hover:text-tulips transition-colors">{link}</a>
      ))}
    </div>
  </div>
);

export default App;
