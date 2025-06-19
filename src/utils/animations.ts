// Animation utilities for enhanced user experience
import { keyframes } from '@mui/material/styles';

// Keyframe animations
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const shimmer = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Animation presets for common use cases
export const animationPresets = {
  // Entrance animations
  fadeInUp: {
    animation: `${fadeInUp} 0.8s ease-out forwards`,
    opacity: 0,
  },
  fadeInLeft: {
    animation: `${fadeInLeft} 0.8s ease-out forwards`,
    opacity: 0,
  },
  fadeInRight: {
    animation: `${fadeInRight} 0.8s ease-out forwards`,
    opacity: 0,
  },
  scaleIn: {
    animation: `${scaleIn} 0.6s ease-out forwards`,
    opacity: 0,
  },
  slideInDown: {
    animation: `${slideInDown} 0.8s ease-out forwards`,
    opacity: 0,
  },
  
  // Continuous animations
  float: {
    animation: `${float} 3s ease-in-out infinite`,
  },
  pulse: {
    animation: `${pulse} 2s ease-in-out infinite`,
  },
  rotate: {
    animation: `${rotate} 20s linear infinite`,
  },
  
  // Delayed animations
  fadeInUpDelay1: {
    animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
    opacity: 0,
  },
  fadeInUpDelay2: {
    animation: `${fadeInUp} 0.8s ease-out 0.4s forwards`,
    opacity: 0,
  },
  fadeInUpDelay3: {
    animation: `${fadeInUp} 0.8s ease-out 0.6s forwards`,
    opacity: 0,
  },
};

// Hover effects
export const hoverEffects = {
  lift: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
    },
  },
  
  scale: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  
  glow: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 20px rgba(139, 69, 19, 0.3)',
    },
  },
  
  slideRight: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateX(8px)',
    },
  },
  
  rotate: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'rotate(5deg)',
    },
  },
  
  shimmer: {
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      transition: 'left 0.6s ease',
    },
    '&:hover::before': {
      left: '100%',
    },
  },
};

// Stagger animation utility
export const createStaggerAnimation = (
  baseAnimation: string,
  itemCount: number,
  delay: number = 0.1
) => {
  const animations: Record<string, any> = {};
  
  for (let i = 0; i < itemCount; i++) {
    animations[`&:nth-of-type(${i + 1})`] = {
      animation: `${baseAnimation} 0.8s ease-out ${i * delay}s forwards`,
      opacity: 0,
    };
  }
  
  return animations;
};

// Intersection Observer animation utility
export const useScrollAnimation = () => {
  const observeElement = (element: Element, animationClass: string) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    
    observer.observe(element);
    return observer;
  };
  
  return { observeElement };
};

// Loading animations
export const loadingAnimations = {
  spinner: {
    animation: `${rotate} 1s linear infinite`,
  },
  
  pulse: {
    animation: `${pulse} 1.5s ease-in-out infinite`,
  },
  
  shimmer: {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: `${shimmer} 1.5s infinite`,
  },
};

// Transition presets
export const transitions = {
  smooth: 'all 0.3s ease-in-out',
  fast: 'all 0.2s ease-in-out',
  slow: 'all 0.5s ease-in-out',
  bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export default {
  animationPresets,
  hoverEffects,
  createStaggerAnimation,
  useScrollAnimation,
  loadingAnimations,
  transitions,
};
