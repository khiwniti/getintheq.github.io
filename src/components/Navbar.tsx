import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, BrainCircuit, Cpu, Lightbulb, BookOpen } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
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
    { path: 'projects', label: 'Projects' },
    { path: 'services', label: 'Services' },
    { path: 'skills', label: 'Skills' },
    { path: 'experience', label: 'Experience' },
    { path: 'notebook', label: 'Notebook' },
  ]

  const renderLink = (link: { path: string, label: string }) => {
    const linkPath = link.path === 'home' ? '' : link.path
    const isActive = location.pathname === `/${linkPath}`
    const baseClasses = "transition-colors relative py-2"
    const activeClasses = "text-blue-600 dark:text-blue-400 font-medium"
    const inactiveClasses = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"

    if (isHome && ['services', 'skills', 'experience'].includes(link.path)) {
      return (
        <ScrollLink
          to={link.path}
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className={`${baseClasses} cursor-pointer ${inactiveClasses}`}
          activeClass={activeClasses}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </ScrollLink>
      )
    }
    return (
      <RouterLink
        to={`/${linkPath}`}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        onClick={() => setIsOpen(false)}
      >
        {link.label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
        )}
      </RouterLink>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <RouterLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Ikkyu
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path}>
                {renderLink(link)}
              </div>
            ))}

            {/* Blog Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <BookOpen size={20} />
                Blog
                <ChevronDown size={16} className={`transform transition-transform ${
                  blogDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {blogDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-card rounded-xl shadow-lg border border-gray-100 dark:border-dark-border overflow-hidden">
                  {blogCategories.map((category) => (
                    <RouterLink
                      key={category.name}
                      to="/blog"
                      className="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors"
                      onClick={() => setBlogDropdownOpen(false)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {category.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-dark-primary">
                          {category.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-dark-secondary">
                          {category.description}
                        </div>
                      </div>
                    </RouterLink>
                  ))}
                </div>
              )}
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu size={24} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card border-t dark:border-dark-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {renderLink(link)}
                </div>
              ))}
              <RouterLink
                to="/blog"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </RouterLink>
              <div className="pt-4 border-t dark:border-dark-border">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
