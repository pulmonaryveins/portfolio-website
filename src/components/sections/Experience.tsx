import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '@/motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Experience = () => {
  return (
    <Section id="experience" className="min-h-screen py-20">
      <Container size="content">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} transition={revealTransition}>
          <SectionHeading className="mb-12">
            Experience
          </SectionHeading>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
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
      </Container>
    </Section>
  );
};
