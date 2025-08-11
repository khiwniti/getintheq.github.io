import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../pages/Projects';
import { ArrowLeft } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="container mx-auto px-4 py-20">Project not found</div>;
  }

  const { title, description, image, tools, link, type, tags, github } = project;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <div className="mb-8">
            <img src={image} alt={title} className="w-full rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700">{description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Details</h2>
              <ul className="list-disc list-inside">
                {type && (
                  <li>
                    <span className="font-semibold">Type:</span> {type}
                  </li>
                )}
                {tools && (
                  <li>
                    <span className="font-semibold">Tools:</span>{' '}
                    {tools.join(', ')}
                  </li>
                )}
                {link && (
                  <li>
                    <span className="font-semibold">Link:</span>{' '}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                )}
                {github && (
                  <li>
                    <span className="font-semibold">GitHub:</span>{' '}
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {github}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
