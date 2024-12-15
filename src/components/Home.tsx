import { Github, Linkedin, Mail, Download, BookOpen, Archive } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Services from './Services'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Blog from './Blog'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  const [servicesRef, servicesControls] = useScrollAnimation()
  const [projectsRef, projectsControls] = useScrollAnimation()
  const [skillsRef, skillsControls] = useScrollAnimation()
  const [experienceRef, experienceControls] = useScrollAnimation()
  const [blogRef, blogControls] = useScrollAnimation()

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/mock-cv.pdf'
    link.download = 'https://drive.google.com/uc?export=download&id=1ZNWz14HTc3Xwe09n7-WQV3ghYaJKCzeA'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-gradient-start dark:to-dark-gradient-end pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-dark-primary">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ikkyu</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-dark-secondary mt-2">Khiw Nitithadachot</p>
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg md:text-xl text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
                A Generative AI Developer and Low-Code Developer passionate about creating innovative solutions with AI and automation.
              </p>
            </div>

            <div className="flex justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://github.com/khiwniti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-card rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={24} className="dark:text-dark-primary" />
              </a>
              <a
                href="https://linkedin.com/in/getintheq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-card rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} className="dark:text-dark-primary" />
              </a>
              <a
                href="mailto:khiwn@getintheq.io"
                className="p-3 bg-white dark:bg-dark-card rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all"
                aria-label="Email Contact"
              >
                <Mail size={24} className="dark:text-dark-primary" />
              </a>
            </div>
            <div className="flex justify-center gap-4 pt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
              <Link
              to="/blog"
              className="group relative px-8 py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-lg overflow-hidden flex items-center gap-2"
              >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                View Blog
                <BookOpen className="transform group-hover:rotate-12 transition-transform" size={20} />
              </span>
              </Link>
              <Link
              to="/projects"
              className="group relative px-8 py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-lg overflow-hidden flex items-center gap-2"
              >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                View Projects
                <Archive className="transform group-hover:rotate-12 transition-transform" size={20} />
              </span>
              </Link>
              <button
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-white dark:bg-dark-card text-blue-600 dark:text-blue-400 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors flex items-center gap-2"
              >
              <Download size={20} />
              CV
              </button>
            </div>
            </div>
          </div>
      </section>

              {/* Services Section */}
              <section id="services" className="scroll-mt-16">
              <motion.div
                ref={servicesRef}
                animate={servicesControls}
                initial="hidden"
                variants={fadeUpVariants}
              >
                <Services />
              </motion.div>
              </section>

              {/* Projects Section */}
              <motion.div
              ref={projectsRef}
              animate={projectsControls}
              initial="hidden"
              variants={fadeUpVariants}
              id="projects"
              className="scroll-mt-16"
              >
              <Projects />
              </motion.div>

              {/* Skills Section */}
              <motion.div 
              ref={skillsRef} 
              animate={skillsControls} 
              initial="hidden" 
              variants={fadeUpVariants} 
              id="skills" 
              className="scroll-mt-16"
              >
              <Skills />
              </motion.div>

                {/* Experience Section */}
                <motion.section
                ref={experienceRef}
                animate={experienceControls}
                initial="hidden"
                variants={fadeUpVariants}
                id="experience"
                className="scroll-mt-16 bg-gray-50 dark:bg-dark-bg"
                >
                <Experience />
                </motion.section>

                {/* Blog Section */}
                <motion.div 
                ref={blogRef} 
                animate={blogControls} 
                initial="hidden" 
                variants={fadeUpVariants} 
                id="blog" 
                className="scroll-mt-16"
                >
                <Blog />
                </motion.div>

                {/* Footer */}
                <Footer />
                </div>
              )

}

export default Home
