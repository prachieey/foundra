import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onAction }) => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 md:px-24 py-10 pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-tulips/20 blur-md group-hover:bg-tulips/40 transition-all rounded-full" />
            <span className="relative text-white font-bold text-2xl tracking-tighter">F</span>
        </div>
        <span className="text-xl font-medium tracking-tight">Foundra</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-16 text-[13px] font-medium tracking-wider uppercase text-white/30 pointer-events-auto">
        {['Product', 'Engine', 'Ecosystem'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-all duration-500 hover:tracking-[0.2em]"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="pointer-events-auto">
        <button 
          onClick={onAction}
          className="text-[13px] font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 px-8 py-3 rounded-full border border-white/5 transition-all duration-500 hover:border-white/20"
        >
          Enter App
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
