/**
 * ─── Hearwell Image Registry ───
 *
 * Centralized image management for the entire project.
 *
 * HOW TO ADD NEW IMAGES:
 * 1. Drop your image file into the appropriate folder:
 *    - src/assets/images/hero/     → hero & banner images
 *    - src/assets/images/services/ → service-related images
 *    - src/assets/images/doctor/   → doctor portraits & credentials
 *    - src/assets/images/clinic/   → clinic interior, programs, environment
 *    - src/assets/icons/           → SVG icons only
 *
 * 2. Import it below using a Vite import:
 *    import myImage from '../assets/images/hero/my-image.png';
 *
 * 3. For automatic WebP conversion + multi-size generation, use imagetools query:
 *    import myImageSrcSet from '../assets/images/hero/my-image.png?w=600;1000;1600&format=webp&as=srcset';
 *    import myImageSmall from '../assets/images/hero/my-image.png?w=600&format=webp';
 *
 * 4. Add it to the registry below.
 *
 * 5. Use it in any page:
 *    import { images } from '../utils/images';
 *    <OptimizedImage src={images.hero.main} alt="..." />
 *
 * That's it. Vite handles optimization at build time.
 */

/* ─── Hero Images ─── */
import heroMain from '../assets/images/hero/hero.webp';

/* ─── Service Images ─── */
import hearingAid from '../assets/images/services/hearing-aid.png';

/* ─── Home Images ─── */
import testingAidTile from '../assets/images/home/hearing-testing-aids-new.png';

/* ─── Doctor Images ─── */
// When doctor.png is available, import it here:
// import doctorPortrait from '../assets/images/doctor/doctor.png';

/* ─── Clinic Images ─── */
// When clinic images are available, import them here:
// import clinicInterior from '../assets/images/clinic/clinic-interior.png';
// import childDevelopment from '../assets/images/clinic/child-development.png';

/* ─── Image Registry ─── */
export const images = {
  hero: {
    main: heroMain,
    // blogBanner: blogBanner,  ← add when available
  },
  home: {
    testingAidTile,
  },
  services: {
    hearingAid,
    // hearingTest: hearingTest,      ← add when available
    // speechTherapy: speechTherapy,  ← add when available
  },
  doctor: {
    // portrait: doctorPortrait,  ← add when available
  },
  clinic: {
    // interior: clinicInterior,          ← add when available
    // childDevelopment: childDevelopment, ← add when available
    // occupationalTherapy,               ← add when available
  },
} as const;

/**
 * Fallback image for when an image is missing or loading fails.
 * Returns a tiny 1x1 transparent GIF data URI.
 */
export const FALLBACK_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Helper: generate responsive sizes string for common layouts.
 */
export const responsiveSizes = {
  /** Full-width hero: 100vw on mobile, 50vw on desktop */
  hero: '(max-width: 768px) 100vw, 50vw',
  /** Card image: 100vw mobile, 33vw desktop */
  card: '(max-width: 768px) 100vw, 33vw',
  /** Half-width section: 100vw mobile, 50vw desktop */
  halfWidth: '(max-width: 768px) 100vw, 50vw',
  /** Full-width banner */
  fullWidth: '100vw',
} as const;
