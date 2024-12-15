import { Construction, Archive } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-dark-primary">
          Featured Projects
        </h2>
        
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <Construction className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Coming Soon
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-8">
            Our project showcase is under construction. Check back soon to see our latest work!
          </p>
          <Link
            to="/projects"
            className="group relative px-8 py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-lg overflow-hidden flex items-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2">
              View All Projects
              <Archive className="transform group-hover:rotate-12 transition-transform" size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects



