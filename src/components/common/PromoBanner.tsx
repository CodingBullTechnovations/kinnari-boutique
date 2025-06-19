import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Slide,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import {
  Close,
  LocalOffer,
  LocalShipping,
  Verified,
  Star,
  CardGiftcard,
  TrendingUp
} from '@mui/icons-material';

interface PromoMessage {
  id: string;
  message: string;
  code?: string;
  icon: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  action?: string;
}

interface PromoBannerProps {
  autoRotate?: boolean;
  rotationInterval?: number;
  customMessages?: PromoMessage[];
}

const defaultMessages: PromoMessage[] = [
  {
    id: 'welcome',
    message: 'Get 10% off on your first purchase',
    code: 'WELCOME10',
    icon: <LocalOffer />,
    backgroundColor: '#8B4513', // Saddle brown from theme
    action: 'Shop Now'
  },
  {
    id: 'shipping',
    message: 'Free shipping on orders above ₹999',
    icon: <LocalShipping />,
    backgroundColor: '#C9A96E', // Muted gold from theme
    textColor: '#2C2C2C',
    action: 'Explore'
  },
  {
    id: 'quality',
    message: 'Handcrafted with love • Premium Quality Guaranteed',
    icon: <Verified />,
    backgroundColor: '#CD853F', // Terracotta from theme
    action: 'Discover'
  },
  {
    id: 'trending',
    message: 'New Arrivals • Trending Traditional Wear',
    icon: <TrendingUp />,
    backgroundColor: '#9CAF88', // Sage green from theme
    textColor: '#2C2C2C',
    action: 'View Collection'
  },
  {
    id: 'gift',
    message: 'Perfect Gifts • Curated Collections Available',
    icon: <CardGiftcard />,
    backgroundColor: '#D2B48C', // Accent color from theme
    textColor: '#2C2C2C',
    action: 'Gift Now'
  },
  {
    id: 'premium',
    message: 'Premium Fabrics • Authentic Indian Craftsmanship',
    icon: <Star />,
    backgroundColor: '#8B4513', // Primary color from theme
    action: 'Learn More'
  }
];

const PromoBanner: React.FC<PromoBannerProps> = ({
  autoRotate = true,
  rotationInterval = 4000,
  customMessages = defaultMessages,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextMessage = useCallback(() => {
    if (customMessages.length <= 1) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % customMessages.length);
      setIsTransitioning(false);
    }, 200);
  }, [customMessages.length]);

  useEffect(() => {
    if (!autoRotate || customMessages.length <= 1) return;

    const interval = setInterval(nextMessage, rotationInterval);
    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, nextMessage, customMessages.length]);

  if (!isVisible || customMessages.length === 0) return null;

  const currentMessage = customMessages[currentIndex];

  return (
    <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          backgroundColor: currentMessage.backgroundColor || theme.palette.secondary.main,
          color: currentMessage.textColor || theme.palette.secondary.contrastText,
          py: { xs: 0.8, md: 1 },
          px: 2,
          position: 'relative',
          textAlign: 'center',
          zIndex: 1200,
          overflow: 'hidden',
          background: currentMessage.backgroundColor
            ? `linear-gradient(135deg, ${currentMessage.backgroundColor}, ${currentMessage.backgroundColor}dd)`
            : `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: 'shimmer 3s infinite',
          },
          '@keyframes shimmer': {
            '0%': { left: '-100%' },
            '100%': { left: '100%' },
          },
        }}
      >
        <Fade in={!isTransitioning} timeout={300}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, md: 1.5 },
              maxWidth: 'lg',
              mx: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: 16, md: 18 },
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.1)' },
                },
              }}
            >
              {currentMessage.icon}
            </Box>

            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                textAlign: 'center',
                letterSpacing: '0.5px',
              }}
            >
              {currentMessage.message}
              {currentMessage.code && (
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    px: 1.5,
                    py: 0.3,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 1,
                    fontSize: '0.8em',
                    fontWeight: 700,
                    letterSpacing: '1px',
                  }}
                >
                  {currentMessage.code}
                </Box>
              )}
            </Typography>

            {currentMessage.action && !isMobile && (
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  opacity: 0.9,
                  '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {currentMessage.action}
              </Typography>
            )}
          </Box>
        </Fade>

        {/* Progress Indicators */}
        {customMessages.length > 1 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 4,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 0.5,
              zIndex: 2,
            }}
          >
            {customMessages.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Box>
        )}

        <IconButton
          onClick={() => setIsVisible(false)}
          size="small"
          sx={{
            position: 'absolute',
            right: { xs: 4, md: 8 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'inherit',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>
    </Slide>
  );
};

export default PromoBanner;
export type { PromoMessage, PromoBannerProps };
