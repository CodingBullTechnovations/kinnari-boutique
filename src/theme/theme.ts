import { createTheme } from '@mui/material/styles';

// Luxurious Indian Heritage color palette for affluent clientele
const colors = {
  primary: {
    main: '#722F37', // Deep Maroon - Royal Indian heritage
    light: '#F7F3F0', // Warm ivory - sophisticated background
    dark: '#4A1B1F', // Deep burgundy - royal depth
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#D4AF37', // Rich Gold - opulent elegance
    light: '#F4E9C1', // Champagne gold
    dark: '#B8941F', // Deep royal gold
    contrastText: '#2C2C2C',
  },
  accent: {
    main: '#CD7F32', // Bronze gold accent - heritage richness
    light: '#E6B87D', // Light bronze highlights
    dark: '#8B5A2B', // Deep bronze shadows
  },
  terracotta: {
    main: '#B8735A', // Rich terracotta - earthy luxury
    light: '#E6C2B0', // Light rose gold terracotta
    dark: '#8A4A37', // Deep copper terracotta
  },
  sage: {
    main: '#87A96B', // Rich sage - sophisticated green
    light: '#B5C99A', // Light sage with warmth
    dark: '#6B8754', // Deep forest sage
  },
  neutral: {
    main: '#FAF8F5', // Luxurious warm white - premium feel
    light: '#FEFDFB', // Pure silk ivory
    dark: '#F0EBE3', // Warm champagne beige
  },
  success: {
    main: '#6B8E23', // Olive green - natural
    light: '#9ACD32', // Yellow green
    dark: '#556B2F', // Dark olive
  },
  warning: {
    main: '#FF8C00', // Warm orange
    light: '#FFA500', // Bright orange
    dark: '#FF6347', // Deep orange
  },
  error: {
    main: '#CD5C5C', // Indian red - softer than crimson
    light: '#F08080', // Light coral
    dark: '#A0522D', // Saddle brown red
  },
};

// Luxurious typography with heritage-inspired fonts for affluent clientele
const typography = {
  fontFamily: [
    'Cormorant Garamond',
    'EB Garamond',
    'Georgia',
    'serif',
  ].join(','),
  h1: {
    fontFamily: [
      'Cormorant Garamond',
      'Playfair Display',
      'Georgia',
      'serif',
    ].join(','),
    fontSize: '4.5rem',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontFamily: [
      'Cormorant Garamond',
      'Playfair Display',
      'Georgia',
      'serif',
    ].join(','),
    fontSize: '3.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: [
      'Cormorant Garamond',
      'Playfair Display',
      'Georgia',
      'serif',
    ].join(','),
    fontSize: '2.75rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: [
      'Cormorant Garamond',
      'Georgia',
      'serif',
    ].join(','),
    fontSize: '2.125rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0em',
  },
  h5: {
    fontFamily: [
      'Cormorant Garamond',
      'Georgia',
      'serif',
    ].join(','),
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  h6: {
    fontFamily: [
      'Cormorant Garamond',
      'Georgia',
      'serif',
    ].join(','),
    fontSize: '1.375rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },
  body1: {
    fontFamily: [
      'Lato',
      'Inter',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontSize: '1.125rem',
    lineHeight: 1.8,
    fontWeight: 400,
    letterSpacing: '0.02em',
  },
  body2: {
    fontFamily: [
      'Lato',
      'Inter',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontSize: '1rem',
    lineHeight: 1.7,
    fontWeight: 400,
    letterSpacing: '0.02em',
  },
  button: {
    fontFamily: [
      'Lato',
      'Inter',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none' as const,
    letterSpacing: '0.08em',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: '0.02em',
  },
};

// Create the enhanced theme
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    success: colors.success,
    // Add custom colors to the palette
    accent: colors.accent,
    neutral: colors.neutral,
    terracotta: colors.terracotta,
    sage: colors.sage,
    background: {
      default: colors.neutral.main, // Warm white background
      paper: colors.neutral.light, // Pure ivory for cards
    },
    text: {
      primary: '#2C2C2C', // Rich charcoal
      secondary: '#5A5A5A', // Softer gray
    },
    divider: colors.neutral.dark, // Soft beige dividers
    grey: {
      50: colors.neutral.light,
      100: colors.neutral.main,
      200: colors.neutral.dark,
      300: '#D4C4B0',
      400: '#B8A082',
      500: '#9C7C54',
      600: '#8B7355',
      700: '#6B5B47',
      800: '#4A3F35',
      900: '#2A2520',
    },
  },
  typography,
  spacing: 8,
  shape: {
    borderRadius: 16, // More rounded for modern feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2C2C2C',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary.main,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 500,
        },
      },
    },
  },
});

// Enhanced background patterns and treatments inspired by Okhai
export const backgroundPatterns = {
  // Subtle geometric patterns
  subtle: {
    dots: `radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.05) 1px, transparent 0)`,
    grid: `linear-gradient(rgba(139, 69, 19, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 69, 19, 0.03) 1px, transparent 1px)`,
    diagonal: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 69, 19, 0.02) 10px, rgba(139, 69, 19, 0.02) 20px)`,
  },
  // Traditional Indian motifs (simplified)
  traditional: {
    paisley: `radial-gradient(ellipse at center, rgba(201, 169, 110, 0.08) 0%, transparent 50%)`,
    mandala: `conic-gradient(from 0deg, rgba(139, 69, 19, 0.05), rgba(201, 169, 110, 0.05), rgba(139, 69, 19, 0.05))`,
    lotus: `radial-gradient(circle at 50% 100%, rgba(156, 175, 136, 0.06) 0%, transparent 70%)`,
  },
  // Gradient overlays
  gradients: {
    warm: `linear-gradient(135deg, rgba(245, 230, 211, 0.8) 0%, rgba(248, 246, 240, 0.9) 100%)`,
    elegant: `linear-gradient(45deg, rgba(139, 69, 19, 0.02) 0%, rgba(201, 169, 110, 0.03) 50%, rgba(139, 69, 19, 0.02) 100%)`,
    premium: `radial-gradient(ellipse at top, rgba(201, 169, 110, 0.08) 0%, rgba(248, 246, 240, 0.95) 70%)`,
  },
  // Texture overlays
  textures: {
    fabric: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${colors.primary.main.slice(1)}' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    paper: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colors.neutral.dark.slice(1)}' fill-opacity='0.02'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
  },
};

// Background utility functions
export const createBackgroundStyle = (type: 'subtle' | 'traditional' | 'gradient' | 'texture', variant: string) => {
  const patterns = backgroundPatterns[type as keyof typeof backgroundPatterns];
  if (!patterns || !(variant in patterns)) {
    return { backgroundColor: colors.neutral.main };
  }

  const pattern = patterns[variant as keyof typeof patterns];

  if (type === 'gradient') {
    return {
      background: pattern,
    };
  } else if (type === 'texture') {
    return {
      backgroundColor: colors.neutral.main,
      backgroundImage: pattern,
      backgroundSize: type === 'texture' ? '60px 60px' : '20px 20px',
    };
  } else {
    return {
      backgroundColor: colors.neutral.main,
      backgroundImage: pattern,
      backgroundSize: '20px 20px',
    };
  }
};

// Enhanced section backgrounds for different page areas
export const sectionBackgrounds = {
  hero: {
    background: `linear-gradient(135deg, ${colors.primary.light}40, ${colors.secondary.light}30)`,
    backgroundImage: backgroundPatterns.traditional.paisley,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(circle at 20% 80%, ${colors.secondary.light}15 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, ${colors.primary.light}15 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, ${colors.secondary.main}08 0%, transparent 50%)
      `,
      zIndex: 0,
    },
  },
  featured: {
    backgroundColor: colors.neutral.main,
    backgroundImage: backgroundPatterns.subtle.dots,
    backgroundSize: '20px 20px',
  },
  premium: {
    background: backgroundPatterns.gradients.premium,
    backgroundImage: backgroundPatterns.textures.fabric,
    backgroundSize: '60px 60px',
  },
  elegant: {
    background: backgroundPatterns.gradients.elegant,
    backgroundImage: backgroundPatterns.traditional.mandala,
    backgroundSize: '100px 100px',
  },
};

// Custom theme extensions
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    neutral: Palette['primary'];
    terracotta: Palette['primary'];
    sage: Palette['primary'];
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
    terracotta?: PaletteOptions['primary'];
    sage?: PaletteOptions['primary'];
  }
}

export default theme;
