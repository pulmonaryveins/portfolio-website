import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, type ReactNode, type SyntheticEvent } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { cn } from '@/lib/utils';

export interface ImageGalleryProps {
  images: string[];
  /** Alt text for a given image index — callers know the item's title, this doesn't. */
  getAlt: (index: number) => string;
  /** Classes for the <img> itself — ProjectModal and DesignModal use
   *  different image treatments (object-contain w-full h-full vs
   *  w-full h-auto max-h-[70vh] rounded-lg), which is real, not drift. */
  imageClassName?: string;
  onImageError?: (event: SyntheticEvent<HTMLImageElement>) => void;
  /** Rendered as the image's next sibling (e.g. a broken-image SVG toggled
   *  by `onImageError`/`handleImageError`) — kept inside the gallery so it
   *  stays DOM-adjacent to the <img> regardless of whether nav controls
   *  render alongside it. */
  fallback?: ReactNode;
}

/**
 * Carousel behavior extracted from ProjectModal and DesignModal (Task 01
 * audit: essentially duplicated). Renders only the <img>, nav
 * arrows/indicators, and fallback — no wrapping box, no aspect ratio, no
 * padding. The caller's own `relative`-positioned container supplies that
 * (the nav controls are `absolute` against it), since that box's shape
 * differs by real usage.
 *
 * State reset: this component does NOT reset its own index when `images`
 * changes — the caller is expected to pass a `key` (e.g. the project's
 * title/id) so a different item remounts the gallery at index 0, the
 * simplest reliable option per Task 05 §14 (matches what ProjectModal/
 * DesignModal did themselves before this extraction).
 *
 * Task 10: nav-button borders/hover now read from the `border`/`muted`
 * tokens (exact match for the literal grays they replaced); the
 * `hover:scale-100`/`active:scale-100` overrides these buttons carried
 * since Task 05 are gone since `IconButton`'s own default no longer scales
 * on hover, making them redundant rather than a cancellation.
 */
export const ImageGallery = ({ images, getAlt, imageClassName, onImageError, fallback }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    if (hasMultipleImages) setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (hasMultipleImages) setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <>
      <img src={images[currentIndex]} alt={getAlt(currentIndex)} className={imageClassName} onError={onImageError} />
      {fallback}

      {hasMultipleImages && (
        <>
          <IconButton
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-border hover:bg-muted"
          >
            <ChevronLeft size={20} />
          </IconButton>
          <IconButton
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-border hover:bg-muted"
          >
            <ChevronRight size={20} />
          </IconButton>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <IconButton
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  index === currentIndex ? 'bg-gray-900 dark:bg-white w-6' : 'bg-gray-400 dark:bg-gray-600'
                )}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
