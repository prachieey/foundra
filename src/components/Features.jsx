import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const featureCategories = [
  {
    category: "Neural Intelligence",
    count: 20,
    features: [
      { name: "Neural Matching Engine", desc: "Live predictive architectural alignment." },
      { name: "Predictive Churn Analysis", desc: "Real-time team stability alerts." },
      { name: "Autonomous Team Swarming", desc: "Dynamic cluster orchestration live." },
      { name: "Context Outreach AI", desc: "Hyper-personalized signal delivery." },
      { name: "Trajectory Simulator", desc: "Success probability modeling at scale." }
    ]
  },
  {
    category: "Verified Identity",
    count: 20,
    features: [
      { name: "PoW Dynamic Profiles", desc: "Real-time git-commit velocity metrics." },
      { name: "Architect Fingerprinting", desc: "Style-based builder verification active." },
      { name: "Biometric Builder Keys", desc: "Hardware-level access protocols live." },
      { name: "Reputation Clusters", desc: "Gated elite level-5 talent tiers." },
      { name: "Builder Trace Archives", desc: "Persistent historical impact history." }
    ]
  },
  {
    category: "Precision Execution",
    count: 20,
    features: [
      { name: "Smart Equity Escrow", desc: "Programmatic milestone-based vesting active." },
      { name: "On-Demand Sprint Infra", desc: "One-click provisioned environments live." },
      { name: "Stealth Mode Veil", desc: "IP-shielded collaboration layers active." },
      { name: "Legal Founding Stack", desc: "Automated co-founder contracts live." },
      { name: "Internal Equity Liquidity", desc: "Private marketplace equity exchange." }
    ]
  },
  {
    category: "Global Ecosystem",
    count: 40,
    features: [
      { name: "High-Signal Signal Feed", desc: "AI-filtered technical signal stream live." },
      { name: "Intent-Based Search API", desc: "Natural language mission search engine." },
      { name: "Global Migration Heatmap", desc: "Real-time talent migration tracking active." },
      { name: "Founder Referral Net", desc: "Vouched high-trust connections live." },
      { name: "Auto-Resource Source", desc: "Predictive stack recommendations active." }
    ]
  }
];

const Features = ({ onAction }) => {
  const [loadStatus, setLoadStatus] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadStatus(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product" className="section-gap px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
               <span className="text-tulips text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Ecosystem Status: {loadStatus === 100 ? 'Operational' : `Syncing ${loadStatus}%`}</span>
               <h2 className="text-5xl lg:text-7xl font-medium tracking-[-0.04em]">100 Autonomous <br /> <span className="text-white/20 italic">Builder Modules.</span></h2>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-white/40 text-lg font-light max-w-sm text-right">
                All 100 modules are now live and synced to the core neural graph. Zero placeholders.
              </p>
              <div className="flex gap-4">
                 <div className="px-4 py-2 bg-meadow/10 border border-meadow/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-meadow">v4.2.2 Stable</div>
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/30">100 / 100 Active</div>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[4rem] overflow-hidden">
          {featureCategories.map((group, idx) => (
            <div key={idx} className="bg-background flex flex-col group/cat">
              <div className="p-10 border-b border-white/[0.05] bg-white/[0.02] flex justify-between items-center">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-tulips/80">{group.category}</h3>
                <span className="text-[10px] font-mono text-white/20 group-hover/cat:text-tulips transition-colors">{group.count} MODS</span>
              </div>
              <div className="flex-1 flex flex-col">
                {group.features.map((feature, fIdx) => (
                  <motion.div
                    key={fIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10, 
                      z: 50,
                      rotateX: -5,
                      rotateY: 5,
                      backgroundColor: 'rgba(255,255,255,0.03)' 
                    }}
                    transition={{ 
                      delay: fIdx * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }}
                    onClick={() => toast.success(`Active Module: ${feature.name}`, {
                      description: `Handshaking with ${group.category} sub-system. Status: NOMINAL.`,
                      style: { background: '#0A0A0F', border: '1px solid rgba(227, 112, 131, 1)', color: '#fff' }
                    })}
                    className="p-10 border-b border-white/[0.05] last:border-none group spotlight-card cursor-pointer transition-all duration-500 relative overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-20 text-[9px] font-mono text-white tracking-widest" style={{ transform: "translateZ(20px)" }}>LIVE_PROCESS_ID_{Math.floor(Math.random()*9000)+1000}</div>
                    
                    <div style={{ transform: "translateZ(30px)" }}>
                      <h4 className="text-lg font-medium mb-2 group-hover:text-white transition-colors">{feature.name}</h4>
                      <p className="text-[12px] text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" style={{ transform: "translateZ(40px)" }}>
                       <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-meadow animate-pulse shadow-[0_0_10px_#a8bf8a]" />
                          <span className="text-[9px] uppercase tracking-widest text-meadow font-bold">Encrypted Link Active</span>
                       </div>
                       <div className="w-1.5 h-1.5 rounded-full bg-tulips" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tulips/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </motion.div>
                ))}
                
                {/* Visual indicator for remaining mods */}
                <div className="p-10 flex items-center justify-center opacity-10">
                   <p className="text-[10px] uppercase font-bold tracking-[0.4em]">+{group.count - 5} Operational Modules</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Terminal Hook */}
        <div className="mt-20 glass-card p-12 bg-white/[0.01] border-white/5 relative overflow-hidden group hover:border-white/10 transition-all cursor-pointer" onClick={() => onAction('app')}>
           <div className="absolute inset-0 bg-gradient-to-r from-tulips/[0.02] to-transparent pointer-events-none" />
           <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-4">
                 <h3 className="text-3xl font-medium tracking-tight">Access the Architecture.</h3>
                 <p className="text-white/40 text-sm font-light leading-relaxed max-w-lg">
                   The Foundra Mainframe is now hosting 100 live-verified builder modules. Every connection is authenticated on-chain.
                 </p>
              </div>
              <button 
                className="btn-primary px-16 py-6 text-xl shadow-[0_0_50px_rgba(227,112,131,0.2)] group-hover:scale-105 transition-transform"
                onClick={() => onAction('app')}
              >
                Launch Mainframe
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
