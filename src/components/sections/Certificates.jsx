import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useState } from 'react';
import { CertificateModal } from '../ui/CertificateModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      title: "Certificate of Merit",
      issuer: "Alliance Software Inc.",
      year: "2025",
      description: "",
      image: "/images/certificates/2.png",
      
    },

    {
      title: "Certificate of Completion",
      issuer: "Alliance Software Inc.",
      year: "2025",
      description: "",
      image: "/images/certificates/3.png",
      
    },

    {
      title: "Certificate of Completion",
      issuer: "Cisco",
      year: "2024",
      description: "",
      image: "/images/certificates/1.png",
      
    }
  ];

  const handleCertificateClick = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 200);
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Certificates</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:border-black dark:hover:border-white transition-all group cursor-pointer"
              onClick={() => handleCertificateClick(cert)}
            >
              <div className="relative overflow-hidden aspect-[16/9] bg-gray-100 dark:bg-gray-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <Award size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 font-medium">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <CertificateModal 
          certificate={selectedCertificate}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};
