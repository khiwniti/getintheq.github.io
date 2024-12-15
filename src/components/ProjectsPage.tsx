import { Github, Linkedin, LineChart } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { Project } from './ProjectDetails'

const Hero = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <LineChart className="w-8 h-8 text-blue-600" />
          <h2 className="text-xl font-semibold text-blue-600">Data Analysis Portfolio</h2>
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Turning Data into
          <span className="text-blue-600"> Actionable Insights</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Showcasing data analysis projects that demonstrate expertise in statistical analysis,
          data visualization, and deriving meaningful insights from complex datasets.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

const projects: Project[] = [
  {
    id: 'product-classification',
    title: 'Product Text Classification System',
    description:
      'An intelligent system that automatically categorizes product descriptions using natural language processing and unsupervised learning techniques. The system processes freeform text data from CSV files, applies text clustering algorithms, and automatically labels product groups based on semantic similarity.',
    image:
      'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800',
    tools: ['Python', 'scikit-learn', 'NLTK', 'Word2Vec', 'K-means', 'Pandas'],
    link: '#',
    type: 'ai-ml',
    github: 'https://github.com/username/product-classification',
    tags: ['AI', 'Machine Learning', 'NLP', 'Python', 'Clustering'],
  },
  {
    id: 'vizml-recommendation',
    title: 'VizML Recommendation System',
    description:
      'An intelligent system that automatically recommends the most effective data visualizations using machine learning. Built with VizML principles to analyze data characteristics and suggest optimal visualization types.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tools: ['VizML', 'Python', 'TensorFlow', 'D3.js', 'Flask'],
    link: '#',
    type: 'ai-ml',
    github: 'https://github.com/username/vizml-recommendation',
    tags: ['AI', 'Machine Learning', 'Data Visualization', 'VizML', 'Python'],
  },
  {
    id: 'sales-analytics',
    title: 'Sales Performance Analytics',
    description:
      'Analysis of yearly sales data to identify trends and growth opportunities using Python and Pandas.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    link: '#',
    type: 'data',
    github: 'https://github.com/username/sales-analytics',
    tags: ['Data Analysis', 'Python', 'Pandas', 'Data Visualization'],
  },
]

const ProjectsPage = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
