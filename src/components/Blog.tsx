
import { Construction } from 'lucide-react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 dark:text-dark-primary">Blog</h2>
        <p className="text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about software development
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <Construction className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Coming Soon
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-8">
          The blog section is currently under development. Stay tuned for interesting content!
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </div>
  )
}

export default Blog


