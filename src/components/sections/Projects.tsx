import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectModal } from '@/components/features/projects/ProjectModal';
import { ProjectCard } from '@/components/features/projects/ProjectCard';
import { projects } from '@/data/projects';
import type { Project } from '@/types/content';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '@/motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <Section id="projects" className="min-h-screen py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <Container size="standard">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} transition={revealTransition}>
          <SectionHeading className="mb-8 sm:mb-12">
            Development Projects
          </SectionHeading>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onOpen={() => handleProjectClick(project)} />
          ))}
        </motion.div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      </Container>
    </Section>
  );
};
