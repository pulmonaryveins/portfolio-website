import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { handleImageError } from '@/lib/utils';
import { scaleIn } from '@/motion';
import type { DesignWork } from '@/types/content';

export interface DesignCardProps {
  design: DesignWork;
  onOpen: () => void;
}

/**
 * Design-work card presentation, extracted from Design.tsx (Task 06). Same
 * single-action, no-nested-controls shape as ProjectCard, so it's a real
 * `<button>` too. No `Surface` here — the original card has no border or
 * fill at all (the image fills the whole tile), so adopting Surface would
 * add visual chrome that doesn't currently exist (Task 06 §16).
 */
export const DesignCard = ({ design, onOpen }: DesignCardProps) => {
  return (
    <motion.button
      type="button"
      variants={scaleIn}
      onClick={onOpen}
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer text-left w-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
    >
      {/* Image */}
      <div className="w-full h-full bg-gray-200 dark:bg-gray-800">
        <img
          src={design.image}
          alt={design.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
        />
        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800" style={{ display: 'none' }}>
          <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
      </div>

      {/* Overlay with content on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {design.title}
        </h3>
        <p className="text-gray-200 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {design.description}
        </p>
        <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {design.tools.map((tool, toolIndex) => (
            <Badge
              key={toolIndex}
              className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-md border border-white/30"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </motion.button>
  );
};
