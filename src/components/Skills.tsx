import { 
  Code, 
  Database, 
  Brain, 
  Globe, 
  Cpu, 
  GitBranch 
} from 'lucide-react';



const Skills = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, TailwindCSS, HTML/CSS, and modern frontend frameworks with a focus on responsive design."
    },
    {
      icon: <Database className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: "Backend Development",
      description: "Node.js, Python, Express.js, RESTful APIs, creating scalable server-side solutions."
    },
    {
      icon: <Brain className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: "AI & Machine Learning",
      description: "TensorFlow, PyTorch, Scikit-learn, Computer Vision, implementing machine learning solutions."
    },
    {
      icon: <Globe className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: "Database & DevOps",
      description: "MongoDB, PostgreSQL, Git, Docker, managing and deploying scalable applications."
    },
    {
      icon: <Cpu className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: "Tools & Methodologies",
      description: "Agile Development, CI/CD, Test-Driven Development, System Design, ensuring quality and efficiency."
    },
    {
      icon: <GitBranch className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: "Version Control & Deployment",
      description: "Git, Docker, CI/CD pipelines, and cloud platforms, streamlining development workflows."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 dark:text-dark-primary">Technical Skills</h2>
        <p className="text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
