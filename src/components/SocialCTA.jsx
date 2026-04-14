import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const SocialProof = ({ onAction }) => {
  return (
    <section className="section-gap px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 mb-8">Validating Build Signal</p>
          <div className="flex flex-wrap justify-center gap-16 lg:gap-32 opacity-20 filter contrast-125">
             {['Stripe', 'Linear', 'Vercel', 'Apple'].map(brand => (
               <span 
                 key={brand} 
                 onClick={() => {
                   toast(`Querying ${brand} Network Cluster`, {
                     description: `Fetching verified builder DNA from ${brand} nodes...`,
                     style: { background: '#0A0A0F', border: '1px solid rgba(137, 183, 194, 0.4)', color: '#fff' }
                   });
                 }}
                 className="text-3xl font-bold tracking-tighter hover:opacity-100 hover:text-tulips transition-all cursor-pointer"
               >
                 {brand}
               </span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[4rem] overflow-hidden">
           {[
             { name: "Sarah Chen", role: "Founding Engineer @ Vector", text: "Foundra is the primary engine we use for strategic collaboration. The signal is unmatched." },
             { name: "Marcus Thorne", role: "Product Lead", text: "Finally, a platform built for the way serious teams actually form." }
           ].map((t, i) => (
             <div 
               key={i} 
               onClick={() => {
                 toast.success(`Identity Verified: ${t.name}`, {
                   description: "Verified via PoW protocol 4.2. Authenticity: 99.9%.",
                   style: { background: '#0A0A0F', border: '1px solid rgba(168, 191, 138, 0.4)', color: '#fff' }
                 });
               }}
               className="bg-background p-16 group hover:bg-white/[0.02] transition-all duration-700 cursor-pointer relative"
             >
                <div className="absolute top-8 right-12 opacity-10 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 rounded-full bg-meadow animate-pulse" />
                </div>
                <p className="text-2xl text-white/60 mb-12 font-light tracking-tight leading-relaxed group-hover:text-white transition-colors">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">👤</div>
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
       {/* Background Glows */}
       <div className="absolute inset-0 bg-gradient-to-t from-tulips/10 via-transparent to-transparent pointer-events-none" />
       <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tulips/20 blur-[120px] rounded-full pointer-events-none" />
       
       <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
          >
            <span className="text-tulips text-xs font-bold uppercase tracking-[0.5em] mb-12 block">Genesis Protocol Active</span>
            <h2 className="text-7xl md:text-[9rem] font-medium mb-16 leading-[0.8] tracking-[-0.06em] text-gradient">
              Build your <br className="hidden md:block" />
              legacy.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-20">
              <button 
                onClick={() => onAction('app')}
                className="btn-primary text-2xl px-20 py-8 shadow-[0_0_80px_rgba(227,112,131,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                 Apply for Access
              </button>
              <button 
                onClick={() => {
                  toast("Initializing Neural Graph Visualization...", {
                    description: "Handshaking with global node clusters.",
                    style: { background: '#0A0A0F', border: '1px solid #fff', color: '#fff' }
                  });
                }}
                className="text-[13px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all duration-500 hover:tracking-[0.6em]"
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
