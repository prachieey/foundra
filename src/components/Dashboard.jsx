import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Dashboard = ({ onBack }) => {
  const [activeNode, setActiveNode] = useState(null);
  const [terminalLines, setTerminalLines] = useState([
    "-- FOUNDRA INITIALIZATION --",
    "> AUTHENTICATING BUILDER SIGNATURE...",
    "> NODE SYNC COMPLETE."
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTerminalLines(prev => [...prev, `> ${inputValue.toUpperCase()}`]);
      
      // Simulated responses
      setTimeout(() => {
        let response = "> EXECUTING SECURE QUERY...";
        if (inputValue.toLowerCase().includes('status')) response = "> SYSTEM HEALTH: OPTIMAL. ALL 20 MODULES SYNCED.";
        if (inputValue.toLowerCase().includes('clear')) {
           setTerminalLines([]);
           setInputValue("");
           return;
        }
        setTerminalLines(prev => [...prev, response]);
      }, 500);
      
      setInputValue("");
    }
  };

  const nodes = [
    { id: 1, name: "Sigma Cluster", status: "Active", velocity: "0.8c" },
    { id: 2, name: "Delta Node", status: "Syncing", velocity: "0.4c" },
    { id: 3, name: "Alpha Core", status: "High Priority", velocity: "0.9c" },
    { id: 4, name: "Omega Edge", status: "Stable", velocity: "0.5c" },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white p-6 md:p-12 font-sans selection:bg-tulips/30">
      <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-8">
        
        {/* Dashboard Header */}
        <header className="flex justify-between items-center bg-white/[0.02] border border-white/[0.05] p-6 rounded-3xl backdrop-blur-3xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-tulips rounded-xl rotate-12 flex items-center justify-center shadow-[0_0_20px_rgba(227,112,131,0.3)]">
                <span className="text-white font-bold text-xl uppercase tracking-tighter">F</span>
            </div>
            <div>
              <h2 className="text-lg font-medium tracking-tight">Mainframe / <span className="text-white/40">Alpha-01</span></h2>
              <p className="text-[10px] text-meadow uppercase tracking-[0.2em] font-bold">Syncing with Neural Graph...</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest text-white/30 font-bold">
                <span className="text-white">Overview</span>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={() => toast("Node List Updated")}>Nodes</span>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={() => toast("Cluster Sync Initiated")}>Clusters</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terminal</span>
             </div>
             <button 
                onClick={onBack}
                className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest transition-all"
             >
               Exit Session
             </button>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          
          {/* Left Column: Stats */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="glass-card p-10 flex-1">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-tulips mb-8">Active Nodes</h3>
               <div className="space-y-8">
                  {[
                    { label: "Global Sync", value: "99.8%", color: "bg-meadow" },
                    { label: "Neural Latency", value: "12ms", color: "bg-tulips" },
                    { label: "Vetted Builders", value: "12,482", color: "bg-clear-sky" }
                  ].map((stat, i) => (
                    <div key={i} className="hover:translate-x-2 transition-transform cursor-default">
                       <div className="flex justify-between text-xs mb-3">
                          <span className="text-white/40">{stat.label}</span>
                          <span className="font-bold">{stat.value}</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 2, delay: i * 0.2 }}
                            className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                          />
                       </div>
                    </div>
                  ))}
               </div>

               {/* New Builder Rank Indicator */}
               <div className="mt-16 pt-10 border-t border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full border border-tulips/30 flex items-center justify-center text-tulips font-bold">SR</div>
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest">Builder Rank</p>
                        <p className="text-[10px] text-white/20">Elite-Level Protocol</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="glass-card p-10 bg-tulips/[0.02] border-tulips/10 group cursor-pointer overflow-hidden">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6">Security Protocol</h3>
               <div className="relative">
                  <p className="text-sm font-light text-white/60 leading-relaxed mb-6 group-hover:text-white transition-colors">"Biometric verification active. Neural footprint matched."</p>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-full h-24 bg-background border border-white/5 rounded-2xl flex items-center justify-center grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 group-hover:border-tulips/50 transition-all"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-tulips"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </motion.div>
               </div>
            </div>
          </div>

          {/* Middle Column: Neural Graph */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="glass-card p-10 flex-[2] relative overflow-hidden">
               <div className="absolute inset-0 grid-pattern opacity-10" />
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Neural Graph Visualization</h3>
               
               <div className="relative h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] border border-white/[0.03] rounded-full border-dashed" 
                  />
                  <div className="relative z-10 w-24 h-24 bg-tulips rounded-full blur-[60px] opacity-10 animate-pulse" />
                  
                  {/* Interactive Center Node */}
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute z-30 w-12 h-12 bg-white text-background rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.4)] cursor-pointer"
                    onClick={() => toast("Foundra Core Initialized")}
                  >
                    F
                  </motion.div>
                  
                  {/* Randomized Nodes */}
                  {nodes.map((node, i) => (
                    <motion.div
                      key={node.id}
                      animate={{ 
                        x: Math.sin(i * 1.5) * 180, 
                        y: Math.cos(i * 1.5) * 180,
                      }}
                      whileHover={{ scale: 2 }}
                      onClick={() => setActiveNode(node)}
                      className="absolute w-4 h-4 bg-white/20 rounded-full cursor-pointer hover:bg-tulips transition-colors border border-white/20 flex items-center justify-center group"
                    >
                        <div className="hidden group-hover:block absolute top-[-30px] whitespace-nowrap bg-background border border-white/10 px-2 py-1 rounded text-[10px] uppercase tracking-widest font-bold">
                           {node.name}
                        </div>
                    </motion.div>
                  ))}
               </div>
               
               <AnimatePresence>
                 {activeNode && (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 20 }}
                     className="absolute bottom-10 left-10 p-6 glass-card bg-background/80 border-tulips/30"
                   >
                      <h4 className="text-xl font-medium mb-1">{activeNode.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-tulips font-bold mb-4">{activeNode.status}</p>
                      <div className="flex gap-8 text-[11px] text-white/40">
                         <span>Velocity: {activeNode.velocity}</span>
                         <span onClick={() => setActiveNode(null)} className="underline cursor-pointer text-white/60">Dismiss</span>
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>

               <div className="absolute bottom-10 right-10 flex gap-4">
                  <button className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 transition-all">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </button>
                  <button onClick={() => toast("Refreshing Ecosystem Feed")} className="btn-primary py-2 px-6 text-xs uppercase tracking-widest font-bold">Scan Ecosystem</button>
               </div>
            </div>

            <div className="glass-card p-10 flex-1 group">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-meadow mb-8">Live Match Intent</h3>
               <div className="space-y-4">
                  {[
                    { text: "Architect (Rust) seeking AI Co-founder", time: "2m ago" },
                    { text: "Frontend specialist joining Stealth Robotics", time: "14m ago" },
                    { text: "Senior ML Engineer open to ZK-proof sprints", time: "1h ago" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-l border-white/5 pl-6 py-1 hover:border-tulips transition-all group/item cursor-pointer">
                       <p className="text-sm font-light text-white/60 group-hover/item:text-white transition-colors">{item.text}</p>
                       <span className="text-[9px] text-white/10 group-hover/item:text-tulips transition-colors">{item.time}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Terminal */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="glass-card flex-1 bg-black p-0 border-white/10 font-mono text-[11px] overflow-hidden flex flex-col border border-white/5 shadow-2xl">
               <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
                  <span className="text-white/40 uppercase tracking-widest font-bold">Foundra OS v4.2 Terminal</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-tulips/40 border border-tulips/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-daffodils/40 border border-daffodils/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-meadow/40 border border-meadow/20" />
                  </div>
               </div>
               <div className="p-6 h-[400px] overflow-y-auto space-y-2 text-meadow/80 custom-scrollbar">
                  {terminalLines.map((line, i) => (
                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i}>{line}</motion.p>
                  ))}
                  <div className="flex items-center gap-2 mt-4 text-white">
                     <span>{'>'}</span>
                     <input 
                       className="bg-transparent border-none outline-none flex-1 text-white caret-tulips"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       onKeyDown={handleCommand}
                       autoFocus
                     />
                  </div>
               </div>
               <div className="p-4 bg-white/[0.02] border-t border-white/5 text-[9px] text-white/20 uppercase tracking-[0.2em]">
                  Type 'status' or 'clear' to interact
               </div>
            </div>

            <div className="glass-card p-10 bg-clear-sky/[0.02] border border-white/5">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-clear-sky mb-4">Active Network Sprints</h3>
               <div className="space-y-4">
                  {["VectorDB-Optimization", "Neural-Interface-v2", "Web3 Latency Guard"].map(sprint => (
                    <div key={sprint} className="flex flex-col gap-2">
                       <div className="flex justify-between text-[10px]">
                          <span className="text-white/40">{sprint}</span>
                          <span className="text-meadow">88%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "88%" }} className="h-full bg-clear-sky" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
