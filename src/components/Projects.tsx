import { Archive } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectDetails";

const Projects = () => {
  const featuredProjects: Project[] = [
    {
      id: "product-classification",
      title: "Product Text Classification System",
      description:
        "An intelligent system that automatically categorizes product descriptions using natural language processing and unsupervised learning techniques.",
      image:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
      tools: [
        "Python",
        "scikit-learn",
        "NLTK",
        "Word2Vec",
        "K-means",
        "Pandas",
      ],
      link: "#",
      type: "ai-ml",
      github: "https://github.com/username/product-classification",
      tags: ["AI", "Machine Learning", "NLP", "Python", "Clustering"],
    },
    {
      id: "vizml-recommendation",
      title: "VizML Recommendation System",
      description:
        "An intelligent system that automatically recommends the most effective data visualizations using machine learning.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tools: ["VizML", "Python", "TensorFlow", "D3.js", "Flask"],
      link: "#",
      type: "ai-ml",
      github: "https://github.com/username/vizml-recommendation",
      tags: ["AI", "Machine Learning", "Data Visualization", "VizML", "Python"],
    },
    {
      id: "sales-analytics",
      title: "Sales Performance Analytics",
      description:
        "Analysis of yearly sales data to identify trends and growth opportunities using Python and Pandas.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "#",
      type: "data",
      github: "https://github.com/username/sales-analytics",
      tags: ["Data Analysis", "Python", "Pandas", "Data Visualization"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-dark-primary">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              window.history.pushState({}, "", "/projects");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="group relative px-8 py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-lg overflow-hidden flex items-center gap-2 mx-auto w-fit"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2">
              View All Projects
              <Archive
                className="transform group-hover:rotate-12 transition-transform"
                size={20}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
