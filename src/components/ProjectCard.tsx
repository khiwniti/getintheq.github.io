import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

const ProjectCard: React.FC<Project> = ({
  id,
  title,
  description,
  image,
  tags,
}) => {
  return (
    <Link to={`/projects/${id}`}>
      <motion.div
        className='cursor-pointer group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className='aspect-video overflow-hidden bg-gray-100'>
          <motion.img
            src={image}
            alt={title}
            className='w-full h-full object-cover'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors'>
            {title}
          </h3>
          <p className='text-gray-600 mb-4'>{description}</p>
          <div className='flex flex-wrap gap-2'>
            {Array.isArray(tags) && tags.length > 0 && tags.map((tag) => (
              <motion.span
                key={tag}
                className='px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tags.indexOf(tag) * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
