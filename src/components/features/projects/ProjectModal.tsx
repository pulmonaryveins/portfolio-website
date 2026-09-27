import { Github, ExternalLink } from 'lucide-react';
import { useId } from 'react';
import { Modal } from '@/components/ui/Modal';
import { ImageGallery } from '@/components/ui/ImageGallery';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/types/content';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const titleId = useId();

  if (!project) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      ariaLabelledBy={titleId}
      closeLabel="Close project details"
      className="max-w-4xl rounded-2xl border-2 border-gray-200 dark:border-gray-800"
    >
      {/* Image Gallery */}
      <div className="relative w-full aspect-[3/2] bg-gray-100 dark:bg-gray-900">
        {project.images && project.images.length > 0 ? (
          <ImageGallery
            key={project.title}
            images={project.images}
            getAlt={(index) => `${project.title} - Image ${index + 1}`}
            imageClassName="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No images available</div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
        {/* Category Badge */}
        {project.category && (
          <div className="mb-4">
            <Badge className="inline-block px-3 py-1 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full">
              {project.category}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h2 id={titleId} className="text-3xl sm:text-4xl font-bold mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {project.fullDescription || project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <Badge
                key={index}
                className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-black dark:text-white mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity font-medium"
            >
              <Github size={18} />
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-medium"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};
