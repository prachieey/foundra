import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section3D = ({ children, className }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{
        perspective: "1000px",
        rotateX,
        scale,
        opacity,
        z,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Section3D;
