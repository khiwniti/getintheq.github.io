import { LineChart, Github, Linkedin } from 'lucide-react'

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

export default Hero
