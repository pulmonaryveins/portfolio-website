import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { surfaceClassName } from '@/components/ui/Surface';
import { cn } from '@/lib/utils';
import { scaleIn } from '@/motion';
import type { Certificate } from '@/types/content';

export interface CertificateCardProps {
  certificate: Certificate;
  onOpen: () => void;
}

/**
 * Certificate card presentation, extracted from Certificates.tsx (Task 06).
 * Same single-action, no-nested-controls shape, so a real `<button>`.
 *
 * Uses `surfaceClassName` (Task 04's Surface tokens) as a base — the
 * original's `bg-white dark:bg-gray-950` / `border-gray-200 dark:border-
 * gray-800` match those tokens exactly — with `border-2` added after it to
 * override Surface's default 1px border width (tailwind-merge resolves
 * that conflict correctly), since this card genuinely uses a thicker
 * border than Surface's default.
 */
export const CertificateCard = ({ certificate, onOpen }: CertificateCardProps) => {
  return (
    <motion.button
      type="button"
      variants={scaleIn}
      onClick={onOpen}
      className={cn(
        surfaceClassName,
        'w-full text-left border-2 overflow-hidden hover:shadow-xl hover:border-black dark:hover:border-white transition-all group cursor-pointer',
        'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white'
      )}
    >
      <div className="relative overflow-hidden aspect-[16/9] bg-gray-100 dark:bg-gray-900">
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <Award size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
          {certificate.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 font-medium">{certificate.issuer}</p>
        <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">{certificate.year}</p>
      </div>
    </motion.button>
  );
};
