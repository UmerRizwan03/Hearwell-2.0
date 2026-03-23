import type { ReactNode, CSSProperties } from 'react';

/* ─── Fixed Container ─── */
interface FixedContainerProps {
  /** Width in pixels or CSS string */
  width: number | string;
  /** Height in pixels or CSS string */
  height: number | string;
  /** Optional border-radius */
  borderRadius?: string;
  /** Additional CSS class */
  className?: string;
  children: ReactNode;
}

/**
 * Fixed-dimension wrapper for zero CLS.
 *
 * Usage:
 * ```tsx
 * <FixedContainer width={400} height={300}>
 *   <OptimizedImage src={img} alt="..." />
 * </FixedContainer>
 * ```
 */
export const FixedContainer: React.FC<FixedContainerProps> = ({
  width,
  height,
  borderRadius = '0',
  className = '',
  children,
}) => {
  const style: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius,
    overflow: 'hidden',
    position: 'relative',
  };

  return (
    <div className={`image-fixed-container ${className}`} style={style}>
      {children}
    </div>
  );
};

/* ─── Aspect Ratio Container ─── */
interface AspectContainerProps {
  /** Aspect ratio as CSS string (e.g. "16/9", "4/5", "1/1") */
  ratio: string;
  /** Max width — defaults to 100% */
  maxWidth?: string;
  /** Optional border-radius */
  borderRadius?: string;
  /** Additional CSS class */
  className?: string;
  children: ReactNode;
}

/**
 * Aspect-ratio based wrapper for responsive, zero-CLS images.
 *
 * Usage:
 * ```tsx
 * <AspectContainer ratio="16/9" borderRadius="24px">
 *   <OptimizedImage src={img} alt="..." />
 * </AspectContainer>
 * ```
 */
export const AspectContainer: React.FC<AspectContainerProps> = ({
  ratio,
  maxWidth = '100%',
  borderRadius = '0',
  className = '',
  children,
}) => {
  const style: CSSProperties = {
    aspectRatio: ratio,
    maxWidth,
    width: '100%',
    borderRadius,
    overflow: 'hidden',
    position: 'relative',
  };

  return (
    <div className={`image-aspect-container ${className}`} style={style}>
      {children}
    </div>
  );
};
