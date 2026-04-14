import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = ({ onAction }) => {
  const points = [
    {
      before: "Fragmented signal in noisy social platforms.",
      after: "Neural matching based on contextual social proximity.",
      icon: "🧠"
    },
    {
      before: "Waiting for 'happenstance' to strike.",
      after: "Programmatic serendipity through graph orchestration.",
      icon: "⚡"
    },
    {
      before: "Opaque professional networks and references.",
      after: "Transparent, AI-indexed affinity mapping.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-64 px-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-clear-sky/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-tulips text-[11px] font-bold tracking-[0.5em] uppercase mb-12 block">The Serendipity Engine</span>
            <h2 className="text-7xl lg:text-[10rem] font-bold tracking-[-0.07em] mb-16 leading-[0.8] text-gradient">
              The end of <br /> luck.
            </h2>
            <p className="text-2xl text-white/40 font-medium leading-relaxed mb-16 max-w-xl">
              Luck is just a data set we haven't indexed yet. Happenstance turns chance into a repeatable orchestration.
            </p>
            <button 
              onClick={() => onAction('Strategy')}
              className="btn-secondary px-12 py-5"
            >
              The Science of Proximity
            </button>
          </div>

          <div className="space-y-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="glass-card spotlight-card p-12 group cursor-pointer"
              >
                <div className="flex gap-12">
                  <div className="text-5xl opacity-40 group-hover:opacity-100 transition-opacity duration-700">{point.icon}</div>
                  <div className="flex-1">
                      <div className="flex items-center gap-6 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/10 line-through">Legacy</span>
                        <div className="h-px flex-1 bg-white/[0.05]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-tulips">Next-Gen</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <p className="text-lg text-white/20 font-medium leading-relaxed">{point.before}</p>
                         <p className="text-lg text-white font-bold leading-relaxed">{point.after}</p>
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
