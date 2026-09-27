import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code2 } from 'lucide-react';
import { education, coursework, technicalSkills, softSkills } from '@/data/about';
import { handleImageError } from '@/lib/utils';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '@/motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const About = () => {
  return (
    <Section id="about" className="min-h-screen py-16 sm:py-20 md:py-24">
      <Container size="wide">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} transition={revealTransition}>
          <SectionHeading className="mb-12 sm:mb-16">
            About Me
          </SectionHeading>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={revealViewport}
            transition={revealTransition}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              {/* Profile Image */}
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden mb-6 border-4 border-black dark:border-white">
                <img
                  src="/images/profile/profile.webp"
                  alt="Vince Bryant Cabunilas"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                  <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Vince Bryant Cabunilas</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">UI/UX Designer & Frontend Developer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Based in Cebu City, Philippines</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={revealViewport}
            transition={revealTransition}
            className="lg:col-span-2 space-y-12"
          >
            {/* About Me Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Greetings!</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Information Technology student with a focus on UI/UX design, frontend
                  development, and media-related work including graphic design and video editing. I have a solid
                  foundation in UI/UX and frontend development, strengthened through industry experience as a
                  student trainee at Alliance Software Inc., where I collaborated with teams to deliver quality
                  software projects.
                </p>
                <p>
                  I also bring leadership experience, having been involved in multiple student organizations focused
                  on media and creative work. I'm constantly exploring the IT and creative fields, and I'm eager to
                  learn and grow in every opportunity that comes my way.
                </p>
              </div>
            </div>

            {/* Skills Section - Moved Here */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={revealViewport}>
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={28} className="text-black dark:text-white" />
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-400">Technical Skills</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technicalSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeUp}
                        className="group bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center gap-3 hover:border-black dark:hover:border-white hover:shadow-lg transition-all"
                      >
                        <IconComponent size={22} className="flex-shrink-0 transition-colors" style={{ color: skill.color }} />
                        <span className="font-medium text-sm">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-400">Soft Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center gap-3 hover:border-black dark:hover:border-white hover:shadow-lg transition-all"
                    >
                      <skill.icon size={20} className="text-black dark:text-white flex-shrink-0" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={28} className="text-black dark:text-white" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 border-l-4 border-black dark:border-white rounded-r-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{edu.year}</p>
                  {edu.description && <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>}
                </div>
              ))}
            </div>

            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={28} className="text-black dark:text-white" />
                <h3 className="text-2xl font-bold">Relevant Coursework</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {coursework.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-center hover:border-black dark:hover:border-white hover:shadow-md transition-all"
                  >
                    <p className="font-medium text-sm">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
