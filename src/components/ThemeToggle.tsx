import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  const toggleVariants = {
    light: {
      backgroundColor: '#FEF3C7', // yellow-100
      borderColor: '#F59E0B', // yellow-500
    },
    dark: {
      backgroundColor: '#1E293B', // slate-800
      borderColor: '#475569', // slate-600
    }
  }

  const iconVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  const backgroundVariants = {
    light: {
      background: "linear-gradient(45deg, #FEF3C7, #FDE68A)",
    },
    dark: {
      background: "linear-gradient(45deg, #1E293B, #334155)",
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
      variants={toggleVariants}
      animate={isDark ? 'dark' : 'light'}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        variants={backgroundVariants}
        animate={isDark ? 'dark' : 'light'}
      />

      {/* Floating particles for dark mode */}
      {isDark && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      {/* Icon container */}
      <div className="relative z-10 w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Sun className="w-6 h-6 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Moon className="w-6 h-6 text-slate-700" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(71, 85, 105, 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  )
}

export default ThemeToggle
