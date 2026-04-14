import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Dashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('intelligence');
  const [activeNode, setActiveNode] = useState(null);
  const [terminalLines, setTerminalLines] = useState([
    "-- FOUNDRA OS V4.2 INITIALIZED --",
    "> AUTHENTICATING BUILDER SIGNATURE...",
    "> SYNCING 100 GLOBAL MODULES...",
    "> ALL SYSTEMS OPERATIONAL."
  ]);
  const [inputValue, setInputValue] = useState("");

  const tabs = [
    { id: 'intelligence', label: 'Neural Graph', icon: '🧠' },
    { id: 'identity', label: 'Identity/PoW', icon: '🛡️' },
    { id: 'execution', label: 'Mainframe', icon: '🚀' },
    { id: 'network', label: 'Network', icon: '🌐' },
    { id: 'terminal', label: 'Terminal', icon: '⌨️' }
  ];

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const cmd = inputValue.toLowerCase();
      setTerminalLines(prev => [...prev, `> ${cmd.toUpperCase()}`]);
      
      setTimeout(() => {
        let response = "> EXECUTING SECURE QUERY...";
        if (cmd.includes('status')) response = "> SYSTEM STATUS: 100/100 MODULES ONLINE. LATENCY: 4MS.";
        if (cmd.includes('match')) response = "> MATCHING ENGINE INITIATED... AGGREGATING DNA NODES.";
        if (cmd.includes('clear')) { setTerminalLines([]); setInputValue(""); return; }
        setTerminalLines(prev => [...prev, response]);
      }, 4000);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col font-sans selection:bg-tulips/30">
      
      {/* Top System Bar */}
      <header className="h-20 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex items-center justify-between px-10 relative z-50">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-tulips rounded-xl rotate-12 flex items-center justify-center shadow-[0_0_20px_rgba(227,112,131,0.3)] cursor-pointer" onClick={onBack}>
              <span className="text-white font-bold text-xl uppercase tracking-tighter">F</span>
          </div>
          <div className="h-8 w-px bg-white/5" />
          <nav className="flex gap-4">
             {tabs.map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-white/10 text-white border border-white/10' : 'text-white/20 hover:text-white/40'}`}
               >
                 <span className="mr-2">{tab.icon}</span>
                 {tab.label}
               </button>
             ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-meadow animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 underline decoration-meadow/30">100 Modules Live</span>
           </div>
           <button onClick={onBack} className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terminate Session</button>
        </div>
      </header>

      {/* Main OS Content */}
      <main className="flex-1 relative overflow-hidden flex">
        <AnimatePresence mode="wait">
          
          {/* CATEGORY: INTELLIGENCE (Neural Graph) */}
          {activeTab === 'intelligence' && (
            <motion.div 
              key="intelligence"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="flex-1 p-10 grid grid-cols-12 gap-8"
            >
              <div className="col-span-12 lg:col-span-8 glass-card relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
                <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute top-10 left-10 text-[10px] font-bold uppercase tracking-widest text-white/20">Neural Map / v4.2</div>
                
                {/* Advanced Neural Core */}
                <div className="relative">
                   <motion.div 
                      animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[500px] h-[500px] border border-white/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" 
                   />
                   <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 bg-tulips rounded-full blur-[80px] opacity-20" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                         <span className="text-black font-bold text-2xl tracking-tighter">F</span>
                      </div>
                   </div>
                </div>

                <div className="absolute bottom-10 right-10 flex flex-col gap-4 text-right">
                   <p className="text-4xl font-medium tracking-tight">12,482 Nodes</p>
                   <p className="text-[10px] uppercase tracking-widest font-bold text-meadow">Active Verification Phase</p>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                 <div className="glass-card spotlight-card p-8 flex-1">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-tulips mb-8">Intent Intelligence</h3>
                    <div className="space-y-6">
                       {["Predictive Stack Alignment", "Churn-Risk Monitor", "Sprint Orchestrator", "Market Pulse AI"].map((f, i) => (
                         <div key={i} className="flex flex-col gap-2 hover:translate-x-2 transition-transform cursor-pointer group">
                            <div className="flex justify-between items-center">
                               <p className="text-sm font-medium group-hover:text-tulips transition-colors">{f}</p>
                               <span className="text-[9px] text-meadow border border-meadow/30 px-2 rounded-full">Live</span>
                            </div>
                            <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ delay: i * 0.1 }} className="h-full bg-white/20" />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="glass-card p-8 bg-white/[0.02]">
                    <p className="text-xs text-white/30 italic">"Autonomous Team Formation is currently aggregating 14 projects in the Rust-Fintech cluster."</p>
                 </div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY: IDENTITY */}
          {activeTab === 'identity' && (
            <motion.div 
              key="identity"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 p-10 grid grid-cols-12 gap-8"
            >
               <div className="col-span-12 lg:col-span-4 glass-card p-10">
                  <div className="w-24 h-24 rounded-full border-2 border-tulips/50 p-1 mb-8 mx-auto">
                     <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center text-4xl">👤</div>
                  </div>
                  <h3 className="text-center text-2xl font-medium mb-1">Architect_0x1</h3>
                  <p className="text-center text-[10px] uppercase tracking-widest text-meadow font-bold mb-10">Elite Builder / Top 0.1%</p>
                  
                  <div className="space-y-4">
                     {["PoW Profiler", "Architect Fingerprint", "Biometric Key", "Reputation Cluster"].map((v, i) => (
                       <div key={i} className="flex justify-between items-center text-xs p-4 bg-white/5 rounded-2xl border border-white/5">
                          <span className="text-white/40">{v}</span>
                          <span className="text-meadow">Verified</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                  <div className="glass-card p-10 flex-1">
                     <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Project Contributions (Trace)</h3>
                     <div className="grid grid-cols-7 gap-1">
                        {[...Array(98)].map((_, i) => (
                          <div key={i} className={`aspect-square rounded-sm ${i % 7 === 0 ? 'bg-tulips/60' : i % 5 === 0 ? 'bg-meadow/40' : 'bg-white/5'}`} />
                        ))}
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="glass-card p-8 bg-clear-sky/[0.05]">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Domain Authority</h4>
                        <p className="text-2xl font-bold tracking-tighter text-clear-sky">Vector_DB.v2</p>
                     </div>
                     <div className="glass-card p-8 bg-daffodils/[0.05]">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Ecosystem Karma</h4>
                        <p className="text-2xl font-bold tracking-tighter text-daffodils">2,482</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}

          {/* CATEGORY: EXECUTION (Mainframe) */}
          {activeTab === 'execution' && (
            <motion.div 
              key="execution"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="flex-1 p-10 grid grid-cols-12 gap-8"
            >
               <div className="col-span-12 lg:col-span-9 glass-card p-0 flex flex-col overflow-hidden">
                  <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                     <h3 className="text-sm font-bold uppercase tracking-[0.3em]">Sprint Mainframe</h3>
                     <div className="flex gap-4">
                        <button className="px-4 py-2 bg-tulips text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-[0_0_20px_rgba(227,112,131,0.4)]">New Deployment</button>
                        <button className="px-4 py-2 bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest rounded-md border border-white/5 hover:border-white/20 transition-all">Provision Infra</button>
                     </div>
                  </div>
                  <div className="flex-1 p-10 space-y-8">
                     {[
                       { name: "VectorDB Layer-2 Optimization", progress: 88, status: "Active" },
                       { name: "Neural-Interface Middleware", progress: 42, status: "Pending Fix" },
                       { name: "High-Frequency Matching Engine", progress: 100, status: "Stable" }
                     ].map((p, i) => (
                       <div key={i} className="flex flex-col gap-4">
                          <div className="flex justify-between items-end">
                             <div>
                                <h4 className="text-lg font-medium">{p.name}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold mt-1">Status: {p.status}</p>
                             </div>
                             <span className="text-2xl font-bold tracking-tighter text-white/40">{p.progress}%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${p.progress}%` }} className={`h-full ${p.progress === 100 ? 'bg-meadow shadow-[0_0_10px_rgba(168,191,138,0.5)]' : 'bg-tulips shadow-[0_0_10px_rgba(227,112,131,0.5)]'}`} />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-3 flex flex-col gap-8">
                  <div className="glass-card p-8">
                     <h4 className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-6">Infra Providers</h4>
                     <div className="space-y-4">
                        {['AWS-L5', 'Vercel-Node-Sync', 'Foundra-Cloud'].map(s => (
                          <div key={s} className="flex items-center gap-3 text-xs text-white/60">
                             <div className="w-1.5 h-1.5 rounded-full bg-meadow" />
                             <span>{s}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="glass-card p-8 bg-tulips/[0.02] border-tulips/10">
                     <h4 className="text-[10px] uppercase tracking-widest text-tulips font-bold mb-4 italic">Action Required</h4>
                     <p className="text-xs font-light text-white/40 leading-relaxed">System identified a technical debt spike in 'Neural-Interface'. Suggesting a Refactor Sprint.</p>
                  </div>
               </div>
            </motion.div>
          )}

          {/* CATEGORY: NETWORK */}
          {activeTab === 'network' && (
            <motion.div 
              key="network"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex-1 p-10 grid grid-cols-12 gap-8"
            >
               <div className="col-span-12 glass-card relative min-h-[600px] overflow-hidden">
                  <div className="absolute inset-0 bg-background pointer-events-none" />
                  <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                  
                  {/* Global Heatmap Simulation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative w-3/4 h-3/4 opacity-20 filter grayscale blur-[1px]">
                        <svg viewBox="0 0 1000 500" className="w-full h-full"><path d="M150,200 Q300,100 500,200 T850,200" stroke="white" fill="none" /></svg>
                     </div>
                     
                     {/* Hotspots */}
                     {[
                       { x: '20%', y: '30%', label: 'SF', count: '1,248' },
                       { x: '45%', y: '25%', label: 'NYC', count: '842' },
                       { x: '55%', y: '40%', label: 'LDN', count: '932' },
                       { x: '75%', y: '35%', label: 'TKO', count: '432' }
                     ].map(point => (
                       <motion.div 
                         key={point.label}
                         animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                         transition={{ duration: 3, repeat: Infinity, delay: Math.random() }}
                         style={{ left: point.x, top: point.y }}
                         className="absolute flex flex-col items-center gap-2"
                       >
                          <div className="w-4 h-4 rounded-full bg-tulips shadow-[0_0_20px_#e37083]" />
                          <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 bg-black/40 px-2 py-1 rounded backdrop-blur-md">{point.label} <span className="text-white ml-2">{point.count}</span></span>
                       </motion.div>
                     ))}
                  </div>

                  <div className="absolute top-10 left-10">
                     <h3 className="text-3xl font-medium tracking-tight">Global Migration Heatmap</h3>
                     <p className="text-[10px] uppercase tracking-widest text-meadow font-bold mt-2">Live 24h Flux: +12.4% Neural Density</p>
                  </div>
               </div>
            </motion.div>
          )}

          {/* CATEGORY: TERMINAL */}
          {activeTab === 'terminal' && (
            <motion.div 
              key="terminal"
              initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="flex-1 p-10"
            >
               <div className="glass-card h-full bg-black p-0 border border-white/10 flex flex-col overflow-hidden shadow-2xl">
                  <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-tulips/40 border border-tulips/20" />
                        <div className="w-3 h-3 rounded-full bg-daffodils/40 border border-daffodils/20" />
                        <div className="w-3 h-3 rounded-full bg-meadow/40 border border-meadow/20" />
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Foundra Engine Shell / v4.2.2</span>
                     <div className="w-10 h-1 bg-white/5 rounded-full" />
                  </div>
                  <div className="flex-1 p-8 overflow-y-auto font-mono text-xs text-meadow/60 space-y-2 custom-scrollbar">
                     {terminalLines.map((line, i) => (
                       <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i}>{line}</motion.p>
                     ))}
                     <div className="flex items-center gap-2 mt-4">
                        <span className="text-white">{'>'}</span>
                        <input 
                          autoFocus
                          className="bg-transparent border-none outline-none flex-1 text-white caret-tulips"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleCommand}
                        />
                     </div>
                  </div>
                  <div className="p-4 bg-white/[0.01] border-t border-white/10 flex justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold">
                     <span>Execute high-priority system commands</span>
                     <span className="flex gap-4">
                        <span className="text-tulips/40 cursor-pointer hover:text-tulips transition-colors" onClick={() => setInputValue('help')}>HELP</span>
                        <span className="text-tulips/40 cursor-pointer hover:text-tulips transition-colors" onClick={() => setInputValue('status')}>STATUS</span>
                        <span className="text-white/10">v4.2.2-stable</span>
                     </span>
                  </div>
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* System Toast Overlay */}
      <footer className="h-10 border-t border-white/5 bg-black px-10 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-white/20">
         <div className="flex gap-8">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-meadow" /> Mainframe Linked</span>
            <span className="flex items-center gap-2 opacity-50"><div className="w-1.5 h-1.5 rounded-full bg-white/20" /> Node Flux: Stable</span>
         </div>
         <span className="font-mono text-white/10 italic">ProcessID: {Math.random().toString(16).substring(2, 8)}</span>
      </footer>
    </div>
  );
};

export default Dashboard;
