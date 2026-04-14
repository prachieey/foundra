import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const featureCategories = [
  {
    category: "Neural Intelligence",
    features: [
      { name: "Neural Matching Engine", desc: "Predictive architectural alignment." },
      { name: "Predictive Churn Analysis", desc: "Preemptive team stability alerts." },
      { name: "Autonomous Team Formation", desc: "Dynamic cluster orchestration." },
      { name: "Context-Aware Outreach AI", desc: "Hyper-personalized signal delivery." },
      { name: "Project Trajectory Simulator", desc: "Success probability modeling." }
    ]
  },
  {
    category: "Verified Identity",
    features: [
      { name: "Proof-of-Work Profiles", desc: "Real-time commit & velocity metrics." },
      { name: "Architectural Fingerprinting", desc: "Style-based builder verification." },
      { name: "Biometric Builder Keys", desc: "Hardware-level access protocols." },
      { name: "Vetted ReputationClusters", desc: "Gated elite talent tiers." },
      { name: "Builder's Trace (Archives)", desc: "Persistent impact history." }
    ]
  },
  {
    category: "Precision Execution",
    features: [
      { name: "Smart Equity Escrow", desc: "Programmatic milestone-based vesting." },
      { name: "On-Demand Sprint Infra", desc: "One-click provisioned environments." },
      { name: "The Stealth Mode Veil", desc: "IP-shielded collaboration layers." },
      { name: "Legal Founding Stack", desc: "Automated co-founder contracts." },
      { name: "Internal Equity Exchange", desc: "Private milestone liquidity." }
    ]
  },
  {
    category: "Global Ecosystem",
    features: [
      { name: "High-Signal Feed", desc: "AI-filtered technical signal stream." },
      { name: "Intent-Based Search API", desc: "Natural language mission search." },
      { name: "Global Builder Heatmap", desc: "Real-time talent migration tracking." },
      { name: "Founder Referral Network", desc: "Vouched high-trust connections." },
      { name: "Automated Resource Sourcing", desc: "Predictive stack recommendations." }
    ]
  }
];

const Features = ({ onAction }) => {
  return (
    <section id="product" className="section-gap px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
               <span className="text-tulips text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Ecosystem Capabilities</span>
               <h2 className="text-5xl lg:text-7xl font-medium tracking-[-0.04em]">The Architecture <br /> of <span className="text-white/20 italic">Success.</span></h2>
            </div>
            <p className="text-white/40 text-lg font-light max-w-sm mb-4">
              20 autonomous modules designed to orchestrate high-stakes building at global scale.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[3rem] overflow-hidden">
          {featureCategories.map((group, idx) => (
            <div key={idx} className="bg-background flex flex-col">
              <div id={group.category.toLowerCase().split(' ')[0]} className="p-10 border-b border-white/[0.05] bg-white/[0.02]">
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-tulips/80">{group.category}</h3>
              </div>
              <div className="flex-1 flex flex-col">
                {group.features.map((feature, fIdx) => (
                  <motion.div
                    key={fIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ delay: fIdx * 0.05 }}
                    onClick={() => toast.success(`Technical Spec: ${feature.name}`, {
                      description: `Module initialized with Alpha-tier protocol. Accessing ${feature.desc.toLowerCase()}...`,
                      style: { background: '#0A0A0F', border: '1px solid rgba(227, 112, 131, 0.4)', color: '#fff' }
                    })}
                    className="p-10 border-b border-white/[0.05] last:border-none group cursor-pointer hover:bg-white/[0.03] transition-all duration-500 relative"
                  >
                    <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-20 text-[10px] font-mono text-white">MOD-{idx}{fIdx}</div>
                    <h4 className="text-lg font-medium mb-2 group-hover:text-white transition-colors">{feature.name}</h4>
                    <p className="text-[12px] text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors">
                      {feature.desc}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                       <div className="w-1.5 h-1.5 rounded-full bg-tulips" />
                       <span className="text-[9px] uppercase tracking-widest text-tulips font-bold underline decoration-tulips/30">Activate Module</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* System Status Indicator */}
        <div className="mt-16 flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/10">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-meadow animate-pulse" />
              <span>Core Operational</span>
           </div>
           <div className="w-px h-4 bg-white/5" />
           <span>20 / 20 Modules Loaded</span>
           <div className="w-px h-4 bg-white/5" />
           <span>v4.2.2-stable</span>
        </div>
      </div>
    </section>
  );
};

export default Features;
