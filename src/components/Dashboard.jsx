import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const PeopleResults = [
  { name: "Sarah Chen", role: "AI Infrastructure @ Anthropic", bio: "Former colleague at Stripe. Expert in distributed systems.", affinity: 92, icon: "S" },
  { name: "Alex Rivers", role: "Product Designer @ Linear", bio: "1st degree via LinkedIn. Shared interest in system craft.", affinity: 88, icon: "A" },
  { name: "Jordan Smith", role: "Rust Developer", bio: "Connected via shared Slack community (Warp).", affinity: 75, icon: "J" },
  { name: "Elena Volkov", role: "Founder @ Stealth", bio: "2nd degree via Sarah Chen. Working on node infrastructure.", affinity: 65, icon: "E" }
];

const Dashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('discovery');
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setResults([]);
    setTimeout(() => {
      setIsSearching(false);
      setResults(PeopleResults);
      toast.success("Network Scan Complete", { description: "12 nodes mapped to your current query." });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden">
      {/* Cinematic Header */}
      <header className="h-24 px-12 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex items-center justify-between relative z-50">
        <div className="flex items-center gap-10">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-12 cursor-pointer" onClick={onBack}>
              <span className="text-black font-black text-lg italic">H</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <nav className="flex gap-4">
            {['discovery', 'clusters', 'system'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all ${activeTab === tab ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-tulips animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Secure Session</span>
           </div>
           <button onClick={onBack} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white">Exit</button>
        </div>
      </header>

      {/* OS Interface Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Background Nebula */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-tulips/5 blur-[250px] rounded-full opacity-30" />
           <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-clear-sky/5 blur-[200px] rounded-full opacity-30" />
           <div className="grid-pattern absolute inset-0 opacity-10" />
        </div>

        <div className="relative z-10 h-full p-12 flex flex-col items-center">
           <AnimatePresence mode="wait">
             {activeTab === 'discovery' && (
               <motion.div 
                 key="discovery"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="w-full max-w-6xl flex flex-col items-center"
               >
                  <div className="w-full bg-white/[0.02] border border-white/5 p-6 rounded-[3rem] flex items-center shadow-2xl focus-within:border-white/20 transition-all mb-20 backdrop-blur-2xl">
                     <div className="text-white/20 ml-6 mr-6">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                     </div>
                     <input 
                       className="bg-transparent border-none outline-none flex-1 text-2xl font-medium text-white placeholder:text-white/10"
                       placeholder="I'm looking for a Series B founder in NYC who knows David..."
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                     />
                     <button 
                       onClick={handleSearch}
                       className="btn-primary px-10 py-4"
                     >
                       Scan Network
                     </button>
                  </div>

                  {isSearching && (
                    <div className="flex flex-col items-center gap-8 py-20">
                       <div className="w-24 h-24 relative">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-t-4 border-tulips rounded-full"
                          />
                          <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border-b-4 border-clear-sky rounded-full opacity-50"
                          />
                       </div>
                       <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/20 animate-pulse">Mapping social proximity clusters...</p>
                    </div>
                  )}

                  <div className="w-full grid md:grid-cols-2 gap-8 pb-32">
                     {results.map((person, i) => (
                       <motion.div 
                         key={i}
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: i * 0.1 }}
                         className="glass-card p-10 group cursor-pointer"
                       >
                          <div className="flex justify-between items-start mb-8">
                             <div className="flex gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl font-bold border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">{person.icon}</div>
                                <div>
                                   <h4 className="text-xl font-bold mb-1">{person.name}</h4>
                                   <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{person.role}</p>
                                </div>
                             </div>
                             <div className="px-4 py-1.5 bg-tulips/10 text-tulips text-[10px] font-bold rounded-full uppercase tracking-widest border border-tulips/20">
                                {person.affinity}% Probability
                             </div>
                          </div>
                          <p className="text-white/40 text-lg font-medium leading-relaxed mb-10">{person.bio}</p>
                          <div className="flex items-center justify-between border-t border-white/5 pt-8">
                             <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">💼</div>
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">🐦</div>
                             </div>
                             <button className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-tulips transition-all group-hover:tracking-[0.6em]">Request Bridge</button>
                          </div>
                       </motion.div>
                     ))}
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </main>

      <footer className="h-12 border-t border-white/5 bg-black px-12 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
         <div className="flex gap-10">
            <span className="flex items-center gap-2 text-tulips animate-pulse">Node Sync Active</span>
            <span className="opacity-50">Local Latency: 4ms</span>
         </div>
         <div className="font-mono opacity-50">STABLE-4.2.2</div>
      </footer>
    </div>
  );
};

export default Dashboard;
