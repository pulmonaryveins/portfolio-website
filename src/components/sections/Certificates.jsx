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
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Professional certification demonstrating proficiency in developing and maintaining applications on AWS.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      skills: ["AWS Lambda", "DynamoDB", "S3", "CloudFormation", "API Gateway"],
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      description: "Comprehensive certification covering advanced React patterns, hooks, and modern frontend development.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      skills: ["React", "Redux", "React Hooks", "Component Design", "Testing"],
      link: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2022",
      description: "Mastery of JavaScript fundamentals, algorithms, and data structures with practical problem-solving.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      link: "https://www.freecodecamp.org/"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2022",
      description: "Complete bootcamp covering modern full-stack development from frontend to backend deployment.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
      link: "https://www.udemy.com/"
    },
    {
      title: "Google Cloud Associate",
      issuer: "Google Cloud",
      year: "2023",
      description: "Cloud engineering certification demonstrating ability to deploy and manage Google Cloud solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      skills: ["Google Cloud Platform", "Compute Engine", "Cloud Storage", "Kubernetes"],
      link: "https://cloud.google.com/certification"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2022",
      description: "Professional certification in MongoDB database design, development, and administration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      skills: ["MongoDB", "Database Design", "Aggregation", "Indexing", "Performance"],
      link: "https://university.mongodb.com/"
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
    <section id="certificates" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:border-black dark:hover:border-white transition-all group cursor-pointer"
              onClick={() => handleCertificateClick(cert)}
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <Award size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">{cert.title}</h3>
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
