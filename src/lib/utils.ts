import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SyntheticEvent } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shared <img onError> fallback: hides the broken image and reveals the
 * placeholder markup right after it (an element sibling, not just any node —
 * `nextElementSibling` skips whitespace text nodes that break `nextSibling`).
 */
export function handleImageError(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  img.style.display = 'none';
  const fallback = img.nextElementSibling;
  if (fallback instanceof HTMLElement) {
    fallback.style.display = 'flex';
  }
}
