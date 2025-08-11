import React from 'react';
import { Calendar, Star, Rocket, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  name: string;
  description: string;
  outcome: string;
}

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  contractType: string;
  location: string;
  description: string;
  responsibilities: string[];
  relevantProjects: Project[];
  skills: string[];
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

const TimelineItem = ({
  date,
  title,
  company,
  description,
  responsibilities,
  relevantProjects,
  skills,
  location,
  contractType
}: TimelineItem) => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="flex mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      {/* Left Side - Date & Title */}
      <div className="relative z-10 sm:ps-0 sm:pb-24 sm:w-1/3 sm:text-end">
        <motion.div
          className="sm:sticky sm:top-12 sm:end-0"
          variants={itemVariants}
        >
          <div className="sm:pe-[1.6125rem] ps-7">
            <motion.h3
              className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                {contractType}
              </span>
            </div>
          </div>

          <motion.div
            className="flex items-center gap-x-3 py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl mt-2 -ms-7 sm:ms-0 sm:-me-7 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grow order-2 sm:order-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{date}</span>
              </div>
            </div>
            <motion.div
              className="shrink-0 order-1 sm:order-2 w-8 h-8 flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Calendar className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Content */}
      <div className="relative sm:w-2/3 pb-16 sm:pb-28 ps-8 md:ps-12">
        <div className="absolute -top-20 sm:top-0 bottom-0 start-0 sm:end-0 w-px -me-px sm:me-0 sm:-ms-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 relative"
          variants={staggerContainer}
          whileHover={{ y: -5, boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl -z-10" />

          <motion.div variants={itemVariants}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <motion.h2
                  className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {company}
                </motion.h2>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              </div>
              <motion.div
                className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Active
              </motion.div>
            </div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Skills Section */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Responsibilities Section */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-500" />
              Key Responsibilities
            </h4>
            <div className="space-y-3">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Relevant Projects Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-500" />
              Key Projects
            </h4>
            <div className="grid gap-4">
              {relevantProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg">
                    {project.name}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-4 h-4" />
                    {project.outcome}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalTimeline;
