import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

const ParallaxSection = ({ children, offset = 50, className = "" }: ParallaxSectionProps) => {
  const { ref, y } = useParallax(offset);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
