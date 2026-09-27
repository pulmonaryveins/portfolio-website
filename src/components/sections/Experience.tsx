import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Experience</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-xl hover:border-black dark:hover:border-white transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <Briefcase size={24} className="text-black dark:text-white flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                    <span className="text-black dark:text-white mt-1.5 font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
