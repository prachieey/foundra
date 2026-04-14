import React, { useEffect, useState } from 'react';
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
    style: { background: '#0A0A0F', border: '1px solid rgba(227, 112, 131, 0.2)', color: '#fff' }
  });
};

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [view, setView] = useState('landing'); // 'landing' or 'app'
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Advanced Parallax & Scroll Transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // global keyboard listener for Cmd+K
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

  const handleCommand = (cmd) => {
    setIsCommandOpen(false);
    if (cmd.includes('/match') || cmd.includes('/verify')) {
      handleAction(`Command: ${cmd}`);
    } else {
      toast(`Executing: ${cmd}`, {
        description: "Foundra Command Engine processing order.",
        style: { background: '#0A0A0F', border: '1px solid rgba(137, 183, 194, 0.2)', color: '#fff' }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-tulips/30 overflow-x-hidden">
      <Toaster position="bottom-right" theme="dark" />
      
      <AnimatePresence>
        {isCommandOpen && (
          <CommandPalette 
            isOpen={isCommandOpen} 
            onClose={() => setIsCommandOpen(false)} 
            onAction={handleCommand}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, rotateX: 20, z: -500, filter: "blur(20px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
          >
            {/* Parallax Background Grid */}
            <motion.div 
              style={{ y: bgY }}
              className="noise absolute inset-0 z-0 pointer-events-none" 
            />
            
            {/* Custom Glow Cursor */}
            <motion.div 
              className="fixed top-0 left-0 w-8 h-8 rounded-full bg-tulips/20 blur-xl pointer-events-none z-[100] hidden md:block"
              animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
            />
            <motion.div 
              className="fixed top-0 left-0 w-2 h-2 rounded-full bg-tulips pointer-events-none z-[100] hidden md:block shadow-[0_0_10px_rgba(227,112,131,0.8)]"
              animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            />

            {/* Progress Bar */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tulips via-daffodils to-clear-sky z-[60] origin-left"
              style={{ scaleX }}
            />

            <Navbar onAction={() => setView('app')} />
            
            <main>
              {/* 3D Scroll Powered Sections */}
              <Section3D>
                 <Hero onAction={(label) => handleAction(label)} />
              </Section3D>

              <div className="space-y-48 pb-32">
                <Section3D>
                  <Features onAction={(label) => handleAction(label)} />
                </Section3D>
                
                <Section3D>
                  <ProblemSolution onAction={(label) => handleAction(label)} />
                </Section3D>

                <Section3D>
                  <BuilderModes onAction={(label) => handleAction(label)} />
                </Section3D>

                <Section3D>
                  <SocialProof onAction={(label) => handleAction(label)} />
                </Section3D>

                <Section3D>
                  <CTA onAction={() => setView('app')} />
                </Section3D>
              </div>
            </main>

            <footer className="py-24 px-8 md:px-16 border-t border-white/5 bg-black/40 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tulips/5 pointer-events-none" />
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                 <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-tulips rounded rotate-12 flex items-center justify-center">
                      <span className="text-white font-bold text-xs uppercase tracking-tighter">F</span>
                  </div>
                  <span className="text-lg font-bold tracking-tight">Foundra</span>
                </div>
                <p className="text-white/20 text-sm">© 2026 Foundra Ecosystem. Built for the builders.</p>
                <div className="flex gap-8 text-sm text-white/40 font-medium font-mono uppercase tracking-widest">
                   <a href="#" className="hover:text-white transition-colors">Privacy</a>
                   <a href="#" className="hover:text-white transition-colors">Terms</a>
                   <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, rotateX: -20, z: -500, filter: "blur(20px)" }}
            animate={{ opacity: 1, rotateX: 0, z: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Dashboard onBack={() => setView('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quick Command Hint - Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-10 left-10 z-[100] hidden md:flex items-center gap-3 text-[10px] text-white/20 font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-all group"
        onClick={() => setIsCommandOpen(true)}
      >
        <div className="px-2 py-1 border border-white/10 rounded-md bg-white/5 group-hover:border-tulips/50 transition-all">⌘ K</div>
        <span className="group-hover:tracking-[0.2em] transition-all">Quick Command Engine</span>
      </motion.div>
    </div>
  );
}

export default App;
