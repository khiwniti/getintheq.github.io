import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, ImageOff } from 'lucide-react'
import { useState } from 'react'

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
  type: string;
  github?: string;
  tags: string[];
}



const ProjectDetails = () => {
  const { id } = useParams()
  const [error, setError] = useState(false)
  
  const projects: Project[] = [
    {
        id: "product-classification",
        title: "Product Text Classification System", 
        description: "An intelligent system that automatically categorizes product descriptions using natural language processing and unsupervised learning techniques. The system processes freeform text data from CSV files, applies text clustering algorithms, and automatically labels product groups based on semantic similarity.",
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
        tools: ["Python", "scikit-learn", "NLTK", "Word2Vec", "K-means", "Pandas"],
        link: "#",
        type: "ai-ml",
        github: "https://github.com/username/product-classification",
        tags: ['AI', 'Machine Learning', 'NLP', 'Python', 'Clustering']

      },
    {
        id: "vizml-recommendation",
        title: "VizML Recommendation System",
        description: "An intelligent system that automatically recommends the most effective data visualizations using machine learning. Built with VizML principles to analyze data characteristics and suggest optimal visualization types.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tools: ["VizML", "Python", "TensorFlow", "D3.js", "Flask"],
        link: "#",
        type: "ai-ml",
        github: "https://github.com/username/vizml-recommendation",
        tags: ['AI', 'Machine Learning', 'Data Visualization', 'VizML', 'Python']

      },
    {
        id: "sales-analytics",
        title: "Sales Performance Analytics",
        description: "Analysis of yearly sales data to identify trends and growth opportunities using Python and Pandas.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        link: "#",
        type: "data",
        github: "https://github.com/username/sales-analytics",
        tags: ['Data Analysis', 'Python', 'Pandas', 'Data Visualization']

      }
  ]

  // Find the project based on the ID
  const project: Project | undefined = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <Link 
            to="/projects" 
            className="text-blue-600 hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to projects
          </Link>
        </div>
      </div>
    )
  }

  const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
    if (error) {
      return (
        <div className="w-full h-[400px] bg-gray-100 dark:bg-dark-hover flex items-center justify-center">
          <div className="text-center">
            <ImageOff size={48} className="mx-auto mb-2 text-gray-400" />
            <span className="text-sm text-gray-500">Image not available</span>
          </div>
        </div>
      )
    }

    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-[400px] object-cover"
        onError={() => setError(true)}
      />
    )
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Projects
      </Link>

      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden">
        <ImageWithFallback src={project.image} alt={project.title} />
        
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-dark-primary">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-600 dark:text-dark-secondary mb-8 whitespace-pre-line">
            {project.description}
          </p>

          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Live Demo
              <ExternalLink size={20} className="ml-2" />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                GitHub
                <Github size={20} className="ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
