// Image optimization utilities for Kinnari-Boutique

export const getOptimizedImageUrl = (
  baseUrl: string,
  width: number,
  height?: number,
  quality: number = 80
): string => {
  // For Unsplash images, we can add optimization parameters
  if (baseUrl.includes('unsplash.com')) {
    const url = new URL(baseUrl);
    url.searchParams.set('w', width.toString());
    if (height) {
      url.searchParams.set('h', height.toString());
    }
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('auto', 'format');
    return url.toString();
  }
  
  return baseUrl;
};

export const getResponsiveImageSizes = (baseUrl: string) => ({
  small: getOptimizedImageUrl(baseUrl, 300, 400),
  medium: getOptimizedImageUrl(baseUrl, 500, 600),
  large: getOptimizedImageUrl(baseUrl, 800, 1000),
  thumbnail: getOptimizedImageUrl(baseUrl, 150, 200),
});

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(preloadImage));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Lazy loading intersection observer
export const createImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px',
      threshold: 0.1,
    }
  );
};

// Image format detection
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

export const supportsAvif = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch {
    return false;
  }
};

// Get the best supported image format
export const getBestImageFormat = (): 'avif' | 'webp' | 'jpg' => {
  if (supportsAvif()) return 'avif';
  if (supportsWebP()) return 'webp';
  return 'jpg';
};
