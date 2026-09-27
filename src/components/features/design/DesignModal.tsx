import { useId } from 'react';
import { Modal } from '@/components/ui/Modal';
import { ImageGallery } from '@/components/ui/ImageGallery';
import { Badge } from '@/components/ui/Badge';
import { handleImageError } from '@/lib/utils';
import type { DesignWork } from '@/types/content';

interface DesignModalProps {
  design: DesignWork | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DesignModal = ({ design, isOpen, onClose }: DesignModalProps) => {
  const titleId = useId();

  if (!design) return null;

  const images = design.images && design.images.length > 0 ? design.images : [design.image];

  return (
    <Modal open={isOpen} onClose={onClose} ariaLabelledBy={titleId} closeLabel="Close design details" className="max-w-5xl rounded-lg">
      <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-auto">
        {/* Image Section */}
        <div className="lg:w-2/3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-8 relative">
          <ImageGallery
            key={design.title}
            images={images}
            getAlt={(index) => `${design.title} - Image ${index + 1}`}
            imageClassName="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            onImageError={handleImageError}
            fallback={
              <div className="w-full h-96 flex items-center justify-center" style={{ display: 'none' }}>
                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            }
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/3 p-8 space-y-6">
          <div>
            <h2 id={titleId} className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {design.title}
            </h2>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
              {design.category}
            </span>
          </div>

          {design.description && (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{design.description}</p>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {design.tools.map((tool, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
