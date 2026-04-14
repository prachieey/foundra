import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = ({ onAction }) => {
  return (
    <section className="section-gap px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 mb-8">Validated by elite builders</p>
          <div className="flex flex-wrap justify-center gap-16 lg:gap-32 opacity-20 filter contrast-125">
             {['Stripe', 'Linear', 'Vercel', 'Apple'].map(brand => (
               <span 
                 key={brand} 
                 onClick={() => onAction(brand)}
                 className="text-3xl font-bold tracking-tighter hover:opacity-100 transition-opacity cursor-pointer"
               >
                 {brand}
               </span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[3rem] overflow-hidden">
           {[
             { name: "Sarah Chen", role: "Founding Engineer @ Vector", text: "Foundra is the primary engine we use for strategic collaboration. The signal is unmatched." },
             { name: "Marcus Thorne", role: "Product Lead", text: "Finally, a platform built for the way serious teams actually form." }
           ].map((t, i) => (
             <div 
               key={i} 
               onClick={() => onAction(`Testimonial: ${t.name}`)}
               className="bg-background p-16 group hover:bg-white/[0.01] transition-all duration-700 cursor-pointer"
             >
                <p className="text-2xl text-white/60 mb-12 font-light tracking-tight leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  <div>
                    <h5 className="text-sm font-medium">{t.name}</h5>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onAction }) => {
  return (
    <section id="cta" className="section-gap px-6 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-t from-tulips/5 to-transparent pointer-events-none" />
       
       <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
          >
            <h2 className="text-7xl md:text-[8rem] font-medium mb-16 tracking-[-0.05em] text-gradient">
              Build your <br className="hidden md:block" />
              legacy.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <button 
                onClick={onAction}
                className="btn-primary text-xl px-16 py-6"
              >
                 Apply for Access
              </button>
              <button 
                onClick={() => onAction("Graph Exploration")}
                className="text-[13px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all duration-500"
              >
                 Explore the Graph
              </button>
            </div>
          </motion.div>
       </div>
    </section>
  );
};

export { SocialProof, CTA };
