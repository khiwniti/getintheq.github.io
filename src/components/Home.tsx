import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';
import TypingAnimation from './TypingAnimation';
import FloatingElements from './FloatingElements';
import ScrollIndicator from './ScrollIndicator';
import Skills from './Skills';
import Experience from './Experience';
import { projects } from '../pages/Projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Project } from '../types/Project';
import { Github, ExternalLink, Download } from 'lucide-react';

const Home = () => {
  const [projectsRef, projectsControls] = useScrollAnimation();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const typingTexts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker"
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/mock-cv.pdf';
    link.download = 'https://drive.google.com/uc?export=download&id=1ZNWz14HTc3Xwe09n7-WQV3ghYaJKCzeA';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-dark-gradient-start dark:via-gray-900 dark:to-dark-gradient-end pt-16">
        {/* Background Effects */}
        <ParticleBackground />
        <FloatingElements />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-gray-900/20 pointer-events-none" />

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div variants={heroTextVariants}>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-dark-primary leading-tight"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Your Name
                </motion.span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-dark-secondary mt-4"
                variants={heroTextVariants}
              >
                <TypingAnimation
                  texts={typingTexts}
                  className="text-blue-600 dark:text-blue-400"
                />
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-dark-secondary mt-6 max-w-2xl mx-auto leading-relaxed"
                variants={heroTextVariants}
              >
                Crafting digital experiences with passion, precision, and a touch of magic.
                Let's build something extraordinary together.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={heroTextVariants}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.div className="flex gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>

                <Link to="/projects">
                  <motion.div
                    className="p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 scroll-mt-16 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-gray-900">
        <motion.div
          ref={projectsRef}
          animate={projectsControls}
          initial="hidden"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.div variants={heroTextVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-primary mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
              Discover my latest work and creative solutions that push the boundaries of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project: Project) => (
              <motion.div
                key={project.id}
                variants={heroTextVariants}
                className="group relative bg-white dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-primary mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-secondary line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={heroTextVariants}
            className="text-center mt-16"
          >
            <Link to="/projects">
              <motion.button
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />
    </div>
  );
}

export default Home;
