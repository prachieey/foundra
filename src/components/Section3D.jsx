import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Section3D = ({ children, className }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Use springs to smooth out calculations and reduce jitter/lag
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const rawRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const rawZ = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, -50]);

  const rotateX = useSpring(rawRotateX, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const z = useSpring(rawZ, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{
        perspective: "1200px",
        rotateX,
        scale,
        opacity,
        z,
        willChange: "transform, opacity",
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Section3D;
