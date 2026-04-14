import React from 'react';
import { motion } from 'framer-motion';

const modes = [
  {
    title: "Discovery",
    desc: "Autonomous node discovery for co-founders and early-stage partners.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    tag: "CO-FOUNDER"
  },
  {
    title: "Scaling",
    desc: "Source and verify elite engineering talent through social clusters.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    tag: "TALENT"
  },
  {
    title: "Venture",
    desc: "Map the path to capital through 1st and 2nd degree proximity.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    tag: "CAPITAL"
  },
  {
    title: "Impact",
    desc: "Discover high-stakes projects that match your architectural DNA.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    tag: "BOUNTIES"
  }
];

const BuilderModes = ({ onAction }) => {
  return (
    <section className="py-64 px-10 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <h2 className="text-7xl lg:text-9xl font-bold tracking-tight max-w-3xl text-gradient">
            Choose your <br /> <span className="opacity-10 italic">perspective.</span>
          </h2>
          <p className="text-white/40 text-2xl font-medium max-w-sm mb-6">
            Our neural mapping adapts to your specific intent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              onClick={() => onAction(mode.title)}
              className="relative spotlight-card aspect-[10/16] rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5 bg-white/[0.02]"
            >
              <img 
                src={mode.image} 
                alt={mode.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-[2s] ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-tulips mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">{mode.tag}</div>
                <h4 className="text-4xl font-bold mb-6 group-hover:text-white transition-colors duration-700 text-white/40">{mode.title}</h4>
                <div className="h-0 group-hover:h-32 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                   <p className="text-white/40 text-lg leading-relaxed font-medium">{mode.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuilderModes;
