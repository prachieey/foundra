import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NetworkNode = ({ x, y, delay }) => (
  <motion.div 
    className="absolute w-1 h-1 rounded-full bg-white z-10"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ 
      scale: [1, 2, 1],
      opacity: [0.1, 0.4, 0.1],
      boxShadow: ["0 0 0px #fff", "0 0 10px #fff", "0 0 0px #fff"]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
);

const Hero = ({ onAction }) => {
  const [query, setQuery] = useState('');
  
  const nodes = [
    { x: 15, y: 20 }, { x: 30, y: 10 }, { x: 45, y: 30 },
    { x: 60, y: 15 }, { x: 80, y: 25 }, { x: 10, y: 50 },
    { x: 35, y: 45 }, { x: 55, y: 60 }, { x: 85, y: 40 }
  ];

  return (
    <section className="min-h-screen pt-64 pb-32 px-10 relative flex flex-col items-center text-center overflow-hidden">
      {/* Cinematic Star Field / Network */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, i) => (
          <NetworkNode key={i} x={node.x} y={node.y} delay={i * 0.4} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-16">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="px-8 py-3 bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-full"
             >
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em]">Neural Social Discovery 4.2</span>
             </motion.div>
          </div>
          
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-[-0.07em] mb-16 leading-[0.8] text-gradient">
            Search your <br /> 
            entire network.
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/40 font-medium max-w-3xl mx-auto leading-relaxed mb-24 tracking-tight">
             Access thousands of verified connections across your social clusters instantly with natural language.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="premium-input-container group spotlight-card hover:bg-white/[0.05] transition-all duration-1000">
              <div className="flex-shrink-0 mr-8 text-white/20 group-focus-within:text-tulips transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-1.9"/><path d="M20.2 2.8C19.1 1.7 17.4 1.7 16.3 2.8L2.8 16.3C1.7 17.4 1.7 19.1 2.8 20.2 3.9 21.3 5.6 21.3 6.7 20.2L20.2 6.7C21.3 5.6 21.3 3.9 20.2 2.8Z"/><path d="m15.5 4.5 4 4"/><path d="m9 11 4 4"/></svg>
              </div>
              <input 
                type="text" 
                placeholder="Find a Series A founder in my network who loves Rust..." 
                className="bg-transparent border-none outline-none w-full text-2xl md:text-3xl text-white placeholder-white/5 font-medium"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onAction(`Query: ${query}`)}
              />
              <button 
                onClick={() => onAction(`Query: ${query}`)}
                className="btn-primary px-12 py-5 text-lg"
              >
                Discover
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
               {['Cloud Architect', 'Founding Engineer', 'Product Partner'].map(tag => (
                 <span key={tag} className="hover:text-white cursor-pointer transition-colors" onClick={() => setQuery(tag)}>{tag}</span>
               ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-64 w-full max-w-7xl mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
        <div className="flex flex-wrap justify-center items-center gap-24 opacity-20 hover:opacity-100 transition-opacity duration-1000 grayscale">
          <IntegrationLogo name="Gmail" icon="✉️" />
          <IntegrationLogo name="LinkedIn" icon="💼" />
          <IntegrationLogo name="Slack" icon="💬" />
          <IntegrationLogo name="Twitter" icon="🐦" />
        </div>
      </div>
    </section>
  );
};

const IntegrationLogo = ({ name, icon }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">{icon}</div>
    <span className="font-bold text-[11px] tracking-[0.3em] uppercase">{name}</span>
  </div>
);

export default Hero;
