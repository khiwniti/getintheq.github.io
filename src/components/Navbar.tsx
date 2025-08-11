import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, BrainCircuit, Cpu, Lightbulb, BookOpen, Sparkles } from 'lucide-react'
import { Link as ScrollLinkComponent } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBlogDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const blogCategories = [
    {
      name: 'Generative AI',
      icon: <BrainCircuit size={18} />,
      description: 'Exploring the latest in AI, machine learning, and neural networks',
    },
    {
      name: 'Engineering Simulation',
      icon: <Cpu size={18} />,
      description: 'Advanced simulation techniques and computational methods',
    },
    {
      name: 'Tips and Tricks',
      icon: <Lightbulb size={18} />,
      description: 'Helpful insights and practical solutions for developers',
    }
  ]

  const navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'services', label: 'Services' },
    { path: 'projects', label: 'Projects' },
    { path: 'skills', label: 'Skills' },
    { path: 'experience', label: 'Experience' }
  ]

  const renderLink = (link: { path: string, label: string }, isMobile = false) => {
    const baseClasses = "relative py-2 px-3 rounded-lg transition-all duration-300 group"
    const activeClasses = "text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20"
    const inactiveClasses = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"

    const linkContent = (
      <>
        {link.label}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </>
    );

    if (isHome && link.path !== 'home') {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isMobile ? "w-full" : ""}
        >
          {(ScrollLinkComponent as any)({
            to: link.path,
            spy: true,
            smooth: true,
            offset: -64,
            duration: 500,
            className: `${baseClasses} cursor-pointer ${inactiveClasses} ${isMobile ? 'block w-full' : ''}`,
            activeClass: activeClasses,
            onClick: () => setIsOpen(false),
            children: linkContent
          })}
        </motion.div>
      )
    } else if (isHome && link.path === 'home') {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isMobile ? "w-full" : ""}
        >
          {(ScrollLinkComponent as any)({
            to: link.path,
            spy: true,
            smooth: true,
            offset: -64,
            duration: 500,
            className: `${baseClasses} cursor-pointer ${inactiveClasses} ${isMobile ? 'block w-full' : ''}`,
            activeClass: activeClasses,
            onClick: () => setIsOpen(false),
            children: linkContent
          })}
        </motion.div>
      )
    } else {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isMobile ? "w-full" : ""}
        >
          <RouterLink
            to={`/${link.path}`}
            className={`${baseClasses} ${inactiveClasses} ${isMobile ? 'block w-full' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {linkContent}
          </RouterLink>
        </motion.div>
      )
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RouterLink to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white group">
              <motion.div
                className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Ikkyu
              </span>
            </RouterLink>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Desktop Navigation */}
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {renderLink(link)}
              </motion.div>
            ))}

            {/* Blog Dropdown */}
            <div ref={dropdownRef} className="relative">
              <motion.button
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen size={20} />
                Blog
                <motion.div
                  animate={{ rotate: blogDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {blogDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-72 bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {blogCategories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <RouterLink
                          to="/blog"
                          className="flex items-start gap-3 p-4 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                          onClick={() => setBlogDropdownOpen(false)}
                        >
                          <motion.div
                            className="flex-shrink-0 mt-1 p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {category.icon}
                          </motion.div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-dark-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {category.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-dark-secondary">
                              {category.description}
                            </div>
                          </div>
                        </RouterLink>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-gray-600 dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-gray-600 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-6">
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {renderLink(link, true)}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <RouterLink
                    to="/blog"
                    className="block w-full px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </RouterLink>
                </motion.div>

                <motion.div
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                >
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

    export default Navbar
