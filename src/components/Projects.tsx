import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
  type: string;
  tags: string[];
  github?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and TypeScript",
      image: "/images/portfolio.png",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://example.com",
      type: "Web Development",
      tags: ["React", "TypeScript", "Frontend"],
      github: "https://github.com/yourusername/portfolio"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 dark:text-dark-primary">Project Showcase</h2>
        <p className="text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
          Explore some of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects

