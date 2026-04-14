import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const SocialProof = () => {
  return (
    <section className="py-64 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-48">
          <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/10 mb-12">Authorized Node Clusters</p>
          <div className="flex flex-wrap justify-center gap-24 lg:gap-48 opacity-10 filter contrast-200 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
             {['Stripe', 'Linear', 'Vercel', 'Apple', 'Meta'].map(brand => (
               <span 
                 key={brand} 
                 className="text-5xl font-black tracking-tighter text-white"
               >
                 {brand}
               </span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {[
             { name: "Sarah Chen", role: "AI Infrastructure @ Anthropic", text: "Happenstance is the primary engine we use for strategic collaboration. The precision of the signal is unparalleled in the industry." },
             { name: "Marcus Thorne", role: "Product Partner", text: "Finally, a discovery platform built for the speed and complexity of high-fidelity team formation." }
           ].map((t, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.2 }}
               className="glass-card p-20 group relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-3xl text-white/40 mb-16 font-medium tracking-tight leading-loose group-hover:text-white transition-colors duration-700">"{t.text}"</p>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center text-3xl font-black">
                     {t.name[0]}
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white">{t.name}</h5>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold mt-2">{t.role}</p>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onAction }) => {
  return (
    <section id="cta" className="py-80 px-10 relative overflow-hidden text-center">
       {/* Cinematic Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/0 pointer-events-none" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-tulips/10 blur-[250px] rounded-full pointer-events-none animate-pulse-slow" />
       
       <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5 }}
          >
            <span className="text-tulips text-xs font-bold uppercase tracking-[0.8em] mb-16 block">Mission Genesis Initiated</span>
            <h2 className="text-[12vw] leading-none font-bold tracking-tight text-gradient mb-24">
              Expand your <br /> 
              capability.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-32">
              <button 
                onClick={onAction}
                className="btn-primary text-2xl px-24 py-10 shadow-[0_0_100px_rgba(255,255,255,0.2)]"
              >
                 Join the Waitlist
              </button>
              <button 
                onClick={() => toast("Initializing Node Handshake...")}
                className="text-white/20 hover:text-white font-bold uppercase tracking-[0.5em] text-[13px] transition-all duration-700 hover:tracking-[0.8em]"
              >
                 Request Demo
              </button>
            </div>
          </motion.div>
       </div>
    </section>
  );
};

export { SocialProof, CTA };
