import {
  Code,
  Database,
  Brain,
  Globe,
  Star,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import RevealAnimation from './RevealAnimation';



const Skills = () => {
  const [skillsRef, skillsControls] = useScrollAnimation();

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces with modern frameworks",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "TailwindCSS", level: 92, color: "from-teal-500 to-green-500" },
        { name: "HTML/CSS", level: 98, color: "from-orange-500 to-red-500" }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building robust, scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
        { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "Express.js", level: 90, color: "from-gray-600 to-gray-400" },
        { name: "RESTful APIs", level: 92, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions with cutting-edge ML technologies",
      skills: [
        { name: "TensorFlow", level: 80, color: "from-orange-500 to-red-500" },
        { name: "PyTorch", level: 75, color: "from-red-500 to-pink-500" },
        { name: "Scikit-learn", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Computer Vision", level: 78, color: "from-purple-500 to-violet-500" }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Database & DevOps",
      description: "Managing data and deploying applications with modern DevOps practices",
      skills: [
        { name: "MongoDB", level: 88, color: "from-green-600 to-green-400" },
        { name: "PostgreSQL", level: 82, color: "from-blue-600 to-blue-400" },
        { name: "Docker", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "AWS/Cloud", level: 80, color: "from-yellow-500 to-orange-500" }
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <RevealAnimation direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-dark-primary">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </RevealAnimation>

        <motion.div
          ref={skillsRef}
          animate={skillsControls}
          initial="hidden"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <RevealAnimation
                key={categoryIndex}
                direction="up"
                delay={categoryIndex * 0.2}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>

                {/* Stats */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Constantly improving</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.7 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
