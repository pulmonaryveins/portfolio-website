import { motion } from 'framer-motion';
import { useState } from 'react';
import { CertificateModal } from '@/components/features/certificates/CertificateModal';
import { CertificateCard } from '@/components/features/certificates/CertificateCard';
import { certificates } from '@/data/certificates';
import type { Certificate } from '@/types/content';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '@/motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 200);
  };

  return (
    <Section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container size="standard">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} transition={revealTransition}>
          <SectionHeading className="mb-12">
            Certificates
          </SectionHeading>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} onOpen={() => handleCertificateClick(cert)} />
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <CertificateModal certificate={selectedCertificate} isOpen={isModalOpen} onClose={closeModal} />
      </Container>
    </Section>
  );
};
