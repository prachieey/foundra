import React from 'react';
import { motion } from 'framer-motion';

const modes = [
  {
    title: "Find Co-Founder",
    desc: "Partner with visionaries who share your obsession and intent.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hire Talent",
    desc: "Source elite developers and creators based on technical proof.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Join Startup",
    desc: "Discover early-stage teams building the next frontier.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Freelance",
    desc: "Apply your elite skills to high-impact, short-term sprints.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
  }
];

const BuilderModes = ({ onAction }) => {
  return (
    <section id="ecosystem" className="section-gap px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-5xl lg:text-7xl font-medium tracking-[-0.04em] max-w-2xl">
            Choose your <span className="text-white/20 italic">perspective.</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-sm mb-4">
            Foundra adapts its neural graph to your specific collaboration objective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => onAction(mode.title)}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 active:scale-105 transition-transform duration-300"
            >
              <img 
                src={mode.image} 
                alt={mode.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <h4 className="text-2xl font-medium mb-4 group-hover:text-tulips transition-colors duration-500">{mode.title}</h4>
                <div className="h-0 group-hover:h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700">
                   <p className="text-white/40 text-sm leading-relaxed font-light">{mode.desc}</p>
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
