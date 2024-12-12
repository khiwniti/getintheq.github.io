import Blog from './Blog'

const BlogPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-gradient-start dark:to-dark-gradient-end py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-primary mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
            Insights and thoughts on AI, development, and technology
          </p>
        </div>
      </div>
      <Blog />
    </div>
  )
}

export default BlogPage
