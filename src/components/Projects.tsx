import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/1',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/2',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/3',
    },
    {
      title: 'Project 4',
      description: 'Description of project 4.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/4',
    },
    {
      title: 'Project 5',
      description: 'Description of project 5.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/5',
    },
    {
      title: 'Project 6',
      description: 'Description of project 6.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/6',
    },
    {
      title: 'Project 7',
      description: 'Description of project 7.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/7',
    },
    {
      title: 'Project 8',
      description: 'Description of project 8.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/8',
    },
    {
      title: 'Project 9',
      description: 'Description of project 9.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/9',
    },
    {
      title: 'Project 10',
      description: 'Description of project 10.',
      image: 'https://via.placeholder.com/300',
      link: '/project-details/10',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <a href={project.link} className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-600">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
