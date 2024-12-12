import { Cog, Code, Cpu, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
  const [ref, controls] = useScrollAnimation(0.1)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  }

  const services = [
    {
      icon: <Cog size={40} />,
      title: "CFD/FEA Specialist",
      description: "Expert in computational fluid dynamics and finite element analysis.",
      details: [
        "Proficient in COMSOL and ANSYS software",
        "Project consultant specializing in fluid flow or structural simulation",
        "Skilled in error resolution and troubleshooting",
        "Experience with API integration"
      ]
    },
    {
      icon: <Code size={40} />,
      title: "Software Developer/Low-Code Development",
      description: "Full-stack development with expertise in automation and AI integration.",
      details: [
        "Connect chatbots with messaging platforms using Node.js or Python",
        "Participate in both front-end and back-end development tasks",
        "Perform data analysis with Python",
        "Create AI agents designed for specific functions"
      ]
    },
    {
      icon: <Cpu size={40} />,
      title: "IOT/Smart Device",
      description: "Comprehensive IoT solutions from concept to implementation.",
      details: [
        "Create and develop innovative IIoT solutions from scratch",
        "Set up automation systems with necessary hardware components",
        "Utilize 3D CAD and 2D drafting for development"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized expertise in simulation, development, and IoT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2 text-gray-700">
                    <Info size={16} className="flex-shrink-0 mt-1 text-blue-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
