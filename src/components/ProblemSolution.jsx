import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = ({ onAction }) => {
  return (
    <section id="engine" className="section-gap px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-px bg-white/[0.05] rounded-[4rem] overflow-hidden border border-white/[0.05]">
          {/* Status Quo */}
          <div className="flex-1 p-16 lg:p-24 bg-background/50 backdrop-blur-3xl">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20 mb-12 block">Terminal State</span>
            <h3 className="text-4xl lg:text-5xl font-medium mb-12 tracking-[-0.03em] text-white/30 italic">Legacy networking is a game of noise.</h3>
            
            <div className="space-y-6">
              {[
                "Static profiles that decay in real-time",
                "Cold outreach with diminishing returns",
                "Algorithmic noise in professional feeds"
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center opacity-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <p className="text-lg font-light tracking-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation */}
          <div className="flex-1 p-16 lg:p-24 bg-white/[0.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-tulips/10 via-transparent to-transparent pointer-events-none" />
            
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-tulips mb-12 block">Optimal Path</span>
            <h3 className="text-4xl lg:text-5xl font-medium mb-12 tracking-[-0.03em]">Foundra is a network of intent.</h3>
            
            <div className="space-y-6">
              {[
                "Predictive matching based on project DNA",
                "Identity verification via technical proof",
                "High-signal connectivity by default"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex gap-6 items-center cursor-pointer group"
                  onClick={() => onAction(item)}
                >
                  <div className="w-2 h-2 rounded-full bg-tulips shadow-[0_0_10px_rgba(227,112,131,0.5)] group-hover:scale-150 transition-transform" />
                  <p className="text-lg md:text-xl font-light tracking-tight group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>

            <div 
              className="mt-24 p-8 glass-card border-white/5 bg-white/[0.03] flex items-center justify-between cursor-pointer hover:bg-white/[0.05] transition-all"
              onClick={() => onAction("Metric Analysis")}
            >
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full bg-white/5 border-2 border-background" />)}
               </div>
               <div className="text-right">
                  <p className="text-2xl font-bold tracking-tighter">0.05ms</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/20">Matching Latency</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
