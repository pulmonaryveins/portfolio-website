import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { surfaceClassName } from '@/components/ui/Surface';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/motion';
import type { Project } from '@/types/content';

export interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

/**
 * Project-specific card presentation, extracted from Projects.tsx (Task 06).
 * The whole card performs exactly one action (open the project's details)
 * and contains no nested interactive controls — the GitHub/Live Demo row is
 * plain status text, not links (the real links live in ProjectModal) — so
 * per Task 06 §9 this is a real `<button>`, not a `motion.div` with a click
 * handler bolted on.
 *
 * Uses Surface's token classes directly rather than the `Surface` component
 * itself, since Surface renders a <div> and this needs to be a <button>;
 * `surfaceClassName` keeps the two in sync without duplicating the literal
 * string (see Surface.tsx).
 */
export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <motion.button
      type="button"
      variants={fadeUp}
      layout
      onClick={onOpen}
      className={cn(
        surfaceClassName,
        'w-full text-left overflow-hidden hover:shadow-xl transition-all group cursor-pointer',
        'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white'
      )}
    >
      <div className="relative overflow-hidden aspect-[3/2] bg-gray-100 dark:bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="px-3 py-1 text-xs font-semibold bg-black/80 dark:bg-white/80 text-white dark:text-black rounded-full backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <Badge
              key={techIndex}
              className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge className="px-3 py-1 text-sm text-gray-500 dark:text-gray-500">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-3 text-sm">
          {project.github && (
            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Github size={16} />
              GitHub
            </span>
          )}
          {project.demo && (
            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <ExternalLink size={16} />
              Live Demo
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
};
