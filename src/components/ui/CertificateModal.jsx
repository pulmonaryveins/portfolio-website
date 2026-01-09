import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar } from 'lucide-react';
import { useEffect } from 'react';

export const CertificateModal = ({ certificate, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] overflow-y-auto">
            <div className="min-h-screen px-4 py-8 sm:py-16 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Certificate Image */}
                <div className="relative bg-gray-100 dark:bg-gray-900 p-8">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg"
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-white dark:text-black" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{certificate.title}</h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">{certificate.issuer}</p>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                        <Calendar size={16} />
                        <span>{certificate.year}</span>
                      </div>
                    </div>
                  </div>

                  {certificate.description && (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {certificate.description}
                    </p>
                  )}

                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Skills Acquired</h3>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity font-medium"
                    >
                      <ExternalLink size={18} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
