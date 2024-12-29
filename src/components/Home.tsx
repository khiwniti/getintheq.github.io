import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { projects } from '../pages/Projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Project } from '../types/Project';

const Home = () => {
  const [servicesRef, servicesControls] = useScrollAnimation();
  const [projectsRef, projectsControls] = useScrollAnimation();
  const [skillsRef, skillsControls] = useScrollAnimation();
  const [experienceRef, experienceControls] = useScrollAnimation();
  const [blogRef, blogControls] = useScrollAnimation();

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
  };

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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-gradient-start dark:to-dark-gradient-end pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-dark-primary">
                Discover My <span className="text-blue-600 dark:text-blue-400">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-dark-secondary mt-2">
                Explore a collection of innovative solutions and creative works.
              </p>
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="max-w-3xl mx-auto">
                {/* Featured Project */}
                {projects.length > 0 && (
                  <Link to={`/projects/${projects[0].id}`}>
                    <motion.div
                      className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={projects[0].image} alt={projects[0].title} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-primary">{projects[0].title}</h2>
                        <p className="text-gray-600 dark:text-dark-secondary mt-2 line-clamp-3">{projects[0].description}</p>
                      </div>
                    </motion.div>
                  </Link>
                )}
              </div>
            </div>

            <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/projects"
                className="px-8 py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-lg font-medium text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Explore All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 scroll-mt-16 bg-gray-50 dark:bg-dark-bg">
        <motion.div
          ref={projectsRef}
          animate={projectsControls}
          initial="hidden"
          variants={fadeUpVariants}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-dark-primary">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(0, 3).map((project: Project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden cursor-pointer"
                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-primary mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-dark-secondary line-clamp-4">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
