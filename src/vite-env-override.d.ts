/**
 * TypeScript declarations for vite-imagetools import queries.
 *
 * These allow you to import images with optimization parameters:
 *   import img from './photo.png?w=600&format=webp';
 *   import srcSet from './photo.png?w=600;1000;1600&format=webp&as=srcset';
 *
 * Vite + imagetools will process these at build time.
 */

// Single optimized image import (e.g. ?w=600&format=webp)
declare module '*&format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp' {
  const src: string;
  export default src;
}

// srcSet import (e.g. ?w=600;1000;1600&format=webp&as=srcset)
declare module '*&as=srcset' {
  const srcSet: string;
  export default srcSet;
}

// Generic image imports (already declared by Vite, but explicit for clarity)
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.avif' {
  const src: string;
  export default src;
}
