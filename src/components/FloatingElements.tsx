import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe, Cpu, Database } from 'lucide-react';

const FloatingElements = () => {
  const icons = [
    { Icon: Code, delay: 0 },
    { Icon: Palette, delay: 0.5 },
    { Icon: Zap, delay: 1 },
    { Icon: Globe, delay: 1.5 },
    { Icon: Cpu, delay: 2 },
    { Icon: Database, delay: 2.5 },
  ];

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index % 2) * 40}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0.3, 0.6],
            scale: [0, 1.2, 0.8, 1],
            ...floatingVariants.animate
          }}
          transition={{
            delay: delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
      ))}

      {/* Geometric shapes */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            right: `${5 + (index * 12)}%`,
            top: `${15 + (index % 3) * 25}%`,
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.4, 0.1, 0.4],
            rotate: [0, 180, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            delay: index * 0.3,
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className={`w-4 h-4 ${
              index % 3 === 0 
                ? 'bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full' 
                : index % 3 === 1 
                ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 rotate-45' 
                : 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-sm'
            } backdrop-blur-sm border border-white/10`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
