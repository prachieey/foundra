import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onAction }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[150] px-10 py-10 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
              <span className="text-black font-black text-lg italic">H</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">happenstance</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-white transition-all hover:tracking-[0.4em]">Product</a>
            <a href="#" className="hover:text-white transition-all hover:tracking-[0.4em]">Intelligence</a>
            <a href="#" className="hover:text-white transition-all hover:tracking-[0.4em]">Resources</a>
          </div>
        </div>

        <div className="flex items-center gap-8">
           <button className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">Sign In</button>
           <button 
             onClick={onAction}
             className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
           >
             Launch App
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
