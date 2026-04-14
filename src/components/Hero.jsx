import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const placeholders = [
  "AI SaaS for students",
  "Looking for frontend dev",
  "Build a Web3 gaming platform",
  "Need a marketing co-founder",
  "Next-gen logistics automation"
];

const Hero = ({ onAction }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (inputValue.trim()) {
        onAction(`Inquiry: ${inputValue}`);
        setInputValue("");
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden grid-pattern">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-tulips/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

      <div className="text-center max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[11px] font-bold tracking-[0.3em] uppercase text-tulips/80 mb-12 shadow-2xl cursor-default">
            Protocol 2.0 is live
          </span>
          <h1 className="text-7xl md:text-[7rem] font-medium mb-10 leading-[0.95] tracking-[-0.04em] text-gradient">
            Build the <br className="hidden md:block" />
            impossible.
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/40 mb-20 max-w-xl mx-auto font-light leading-relaxed"
        >
          AI-orchestrated matching for the next generation <br className="hidden md:block" /> of architects, engineers, and founders.
        </motion.p>

        {/* AI Input Box — Refined */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <div className="premium-input-container group">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleSubmit}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="bg-transparent border-none outline-none w-full text-xl font-light placeholder-white/10 relative z-10"
              placeholder=""
            />
            
            {!isFocused && !inputValue && (
              <div className="absolute left-10 pointer-events-none overflow-hidden h-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={placeholderIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white/20 text-xl font-light italic"
                  >
                    {placeholders[placeholderIndex]}...
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
            
            <motion.div 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               onClick={handleSubmit}
               className="relative ml-4 w-12 h-12 rounded-full bg-white text-background flex items-center justify-center cursor-pointer shadow-2xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </motion.div>
          </div>
          
          <div className="mt-8 flex justify-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
             <span className="cursor-pointer hover:text-white transition-colors" onClick={() => onAction("Intent Matching")}>Intent Matching</span>
             <span className="text-white/5">•</span>
             <span className="cursor-pointer hover:text-white transition-colors" onClick={() => onAction("Identity Verification")}>Identity Verification</span>
             <span className="text-white/5">•</span>
             <span className="cursor-pointer hover:text-white transition-colors" onClick={() => onAction("Network Graph")}>Network Graph</span>
          </div>
        </motion.div>

        {/* Primary Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-24"
        >
           <div 
             className="w-px h-24 bg-gradient-to-b from-tulips/50 to-transparent mx-auto relative cursor-pointer group"
             onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-tulips rounded-full blur-[2px] animate-bounce group-hover:blur-[8px] transition-all" />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
