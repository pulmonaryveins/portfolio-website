import { ExternalLink, Award, Calendar } from 'lucide-react';
import { useId } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import type { Certificate } from '@/types/content';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal = ({ certificate, isOpen, onClose }: CertificateModalProps) => {
  const titleId = useId();

  if (!certificate) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      ariaLabelledBy={titleId}
      closeLabel="Close certificate details"
      className="max-w-4xl rounded-2xl border-2 border-gray-200 dark:border-gray-800"
    >
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
            <h2 id={titleId} className="text-2xl sm:text-3xl font-bold mb-2">
              {certificate.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">{certificate.issuer}</p>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
              <Calendar size={16} />
              <span>{certificate.year}</span>
            </div>
          </div>
        </div>

        {certificate.description && (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{certificate.description}</p>
        )}

        {certificate.skills && certificate.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Skills Acquired</h3>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg font-medium"
                >
                  {skill}
                </Badge>
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
    </Modal>
  );
};
