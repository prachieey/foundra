import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = ({ isOpen, onClose, onAction }) => {
  const [query, setQuery] = useState('');
  
  const suggestions = [
    { label: "Find Rust Architects", cmd: "/match rust" },
    { label: "View Global Heatmap", cmd: "/heatmap" },
    { label: "Verify Identity", cmd: "/verify" },
    { label: "Cluster Analysis", cmd: "/cluster" },
    { label: "System Health", cmd: "/status" }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isOpen ? onClose() : onClose(false); // Toggle
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-start justify-center pt-[15vh] px-6 bg-background/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full bg-[#111116] border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <div className="flex items-center px-8 py-6 border-b border-white/5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-tulips mr-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input 
              autoFocus
              className="bg-transparent border-none outline-none w-full text-xl font-light placeholder-white/20"
              placeholder="Type a command or search the graph..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onAction(query)}
            />
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/20 px-3 py-1 bg-white/5 rounded-md border border-white/5">ESC</div>
          </div>
          
          <div className="p-4">
             <div className="p-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/15">Suggestions</div>
             <div className="space-y-1">
                {suggestions.filter(s => s.label.toLowerCase().includes(query.toLowerCase())).map((s, i) => (
                  <div 
                    key={i} 
                    className="flex justify-between items-center px-6 py-4 rounded-2xl hover:bg-white/5 cursor-pointer group transition-all"
                    onClick={() => onAction(s.cmd)}
                  >
                    <span className="text-white/60 group-hover:text-white transition-colors">{s.label}</span>
                    <span className="text-[10px] font-mono text-tulips/50 group-hover:text-tulips">{s.cmd}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white/[0.02] px-8 py-4 flex justify-between items-center border-t border-white/5">
             <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Foundra OS Command Engine v1.0</p>
             <div className="flex gap-4 items-center">
                <span className="text-[10px] text-white/10 italic">Press Enter to Execute</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommandPalette;
