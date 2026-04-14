import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, tag, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
    className="glass-card spotlight-card p-16 flex flex-col items-start text-left group"
  >
    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-4xl mb-12 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700">
      {icon}
    </div>
    <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-tulips mb-6">{tag}</div>
    <h3 className="text-4xl font-bold mb-8 text-white">{title}</h3>
    <p className="text-xl text-white/40 leading-relaxed font-medium">
      {description}
    </p>
  </motion.div>
);

const Features = () => {
  return (
    <section className="py-64 px-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-tulips/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-32">
           <h2 className="text-7xl md:text-9xl font-bold tracking-tight mb-12 text-gradient">
             Intelligence <br /> at speed.
           </h2>
           <p className="text-2xl text-white/40 font-medium leading-relaxed">
             We index every interaction across your digital footprint to surface the people who matter most, exactly when you need them.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard 
            tag="Connectivity"
            icon="🌐"
            title="Graph Discovery"
            description="Explore your network in 3D. Search millions of node combinations using plain English."
            delay={0.1}
          />
          <FeatureCard 
            tag="Integration"
            icon="⚡"
            title="Live Context"
            description="Native connectors for LinkedIn, Gmail, and Slack that sync in real-time with zero latency."
            delay={0.2}
          />
          <FeatureCard 
            tag="Automation"
            icon="🧠"
            title="Neural Routing"
            description="AI that understands 'warm introductions' and maps the path of least resistance to any prospect."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
