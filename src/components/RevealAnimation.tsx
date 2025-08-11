import { motion } from 'framer-motion';
import { useRevealAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const RevealAnimation = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1,
  className = ""
}: RevealAnimationProps) => {
  const [ref, controls] = useRevealAnimation(threshold, delay);

  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === 'up' && { y: 50 }),
      ...(direction === 'down' && { y: -50 }),
      ...(direction === 'left' && { x: 50 }),
      ...(direction === 'right' && { x: -50 }),
      ...(direction === 'scale' && { scale: 0.8 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
