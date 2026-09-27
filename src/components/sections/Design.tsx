import { motion } from 'framer-motion';
import { useState } from 'react';
import { DesignModal } from '@/components/features/design/DesignModal';
import { DesignCard } from '@/components/features/design/DesignCard';
import { designs } from '@/data/design';
import type { DesignWork } from '@/types/content';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '@/motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignWork | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedDesigns = showAll ? designs : designs.slice(0, 6);

  return (
    <Section id="design" className="min-h-screen py-16 sm:py-20">
      <Container size="wide">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} transition={revealTransition}>
          <SectionHeading className="mb-8 sm:mb-12">
            Design Work
          </SectionHeading>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          key={showAll ? 'all' : 'limited'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {displayedDesigns.map((design, index) => (
            <DesignCard key={index} design={design} onOpen={() => setSelectedDesign(design)} />
          ))}
        </motion.div>

        {/* Show More Button */}
        {designs.length > 6 && !showAll && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex justify-center mt-12"
          >
            <Button onClick={() => setShowAll(true)}>Show More</Button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && designs.length > 6 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center mt-12"
          >
            <Button variant="secondary" onClick={() => setShowAll(false)}>
              Show Less
            </Button>
          </motion.div>
        )}
      </Container>

      {/* Design Modal */}
      <DesignModal design={selectedDesign} isOpen={!!selectedDesign} onClose={() => setSelectedDesign(null)} />
    </Section>
  );
};
