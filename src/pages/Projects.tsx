import { ArrowLeft, Construction } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Projects = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-gradient-start dark:to-dark-gradient-end">
			<div className="container mx-auto px-4 py-8">
				<Link
					to="/"
					className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
				>
					<ArrowLeft size={20} />
					Back to Home
				</Link>
				
				<h1 className="text-4xl font-bold text-gray-900 dark:text-dark-primary mb-8">Projects</h1>
				
				<div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
					<Construction className="w-16 h-16 text-gray-400 mb-4" />
					<h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
						Coming Soon
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-8">
						Our project showcase is under construction. Check back soon to see our latest work!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Projects