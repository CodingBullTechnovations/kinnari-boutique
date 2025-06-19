import React, { useState, useRef, useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { getOptimizedImageUrl, createImageObserver } from '../../utils/imageUtils';
import { BrokenImage } from '@mui/icons-material';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  showFallbackIcon?: boolean;
}

// Default fallback images for different categories
const DEFAULT_FALLBACKS = {
  women: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&auto=format',
  men: 'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e6e2?w=600&h=800&fit=crop&auto=format',
  home: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop&auto=format',
  default: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop&auto=format'
};

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  onLoad,
  onError,
  fallbackSrc,
  showFallbackIcon = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    const observer = createImageObserver((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer?.unobserve(entry.target);
      }
    });

    if (observer && currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (observer && currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${currentSrc}`);
    setIsLoaded(true);
    setHasError(false);
    setRetryCount(0); // Reset retry count on successful load
    onLoad?.();
  };

  const handleError = () => {
    console.warn(`Image failed to load: ${currentSrc}, retry count: ${retryCount}`);

    if (retryCount === 0 && fallbackSrc && fallbackSrc !== currentSrc) {
      // Try fallback image first
      console.log(`Trying fallback image: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setRetryCount(1);
      setHasError(false); // Reset error state for retry
    } else if (retryCount <= 1) {
      // Try default fallback based on alt text
      const category = alt.toLowerCase().includes('women') ? 'women' :
                      alt.toLowerCase().includes('men') ? 'men' :
                      alt.toLowerCase().includes('home') ? 'home' : 'default';
      const defaultFallback = DEFAULT_FALLBACKS[category];

      if (defaultFallback !== currentSrc) {
        console.log(`Trying default fallback: ${defaultFallback}`);
        setCurrentSrc(defaultFallback);
        setRetryCount(2);
        setHasError(false); // Reset error state for retry
      } else {
        // Final fallback - show error state
        console.error(`All fallbacks failed for image: ${src}`);
        setHasError(true);
        onError?.();
      }
    } else {
      // Final fallback - show error state
      console.error(`All fallbacks failed for image: ${src}`);
      setHasError(true);
      onError?.();
    }
  };



  const optimizedSrc = width && height
    ? getOptimizedImageUrl(currentSrc, width, height)
    : currentSrc;

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        overflow: 'hidden',
        ...style,
      }}
      className={className}
    >
      {!isLoaded && !hasError && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height || 200}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}

      {/* Error Fallback */}
      {hasError && showFallbackIcon && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'grey.100',
            color: 'grey.500',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <BrokenImage sx={{ fontSize: 48, mb: 1 }} />
          <Typography variant="caption" align="center">
            Image not available
          </Typography>
        </Box>
      )}
      
      {hasError && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: height || 200,
            backgroundColor: 'grey.200',
            color: 'text.secondary',
          }}
        >
          Image not available
        </Box>
      )}
    </Box>
  );
};

export default LazyImage;
