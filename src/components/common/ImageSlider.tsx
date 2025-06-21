import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Button,
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos,
  PlayArrow,
  Pause,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

interface SlideItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  href?: string;
  buttonText?: string;
  overlay?: boolean;
}

interface ImageSliderProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  showPlayPause?: boolean;
  height?: number | string;
  borderRadius?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  showPlayPause = true,
  height = 400,
  borderRadius = 16,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 150);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 150);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, togglePlayPause]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: height === '100%' ? '100%' : height,
        minHeight: height === '100%' ? '70vh' : 'auto',
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
        '&:hover .slider-controls': {
          opacity: 1,
        },
      }}
    >
      {/* Main Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Fade in={!isTransitioning} timeout={300}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <LazyImage
              src={currentSlide.image}
              alt={currentSlide.title}
              width={800}
              height={typeof height === 'number' ? height : 400}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Fade>

        {/* Overlay */}
        {currentSlide.overlay !== false && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}40, transparent 60%)`,
              zIndex: 1,
            }}
          />
        )}

        {/* Content Overlay */}
        <Card
          sx={{
            position: 'absolute',
            bottom: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
            right: { xs: 16, md: 'auto' },
            maxWidth: { xs: 'auto', md: 400 },
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            zIndex: 2,
            transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
            opacity: isTransitioning ? 0 : 1,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            {currentSlide.subtitle && (
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1,
                  display: 'block',
                  fontFamily: "'Lora', serif",
                }}
              >
                {currentSlide.subtitle}
              </Typography>
            )}
            
            <Typography
              variant={isMobile ? 'h6' : 'h4'}
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                mb: currentSlide.description ? 2 : 3,
                color: theme.palette.primary.main,
                lineHeight: 1.3,
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                letterSpacing: '0.02em',
              }}
            >
              {currentSlide.title}
            </Typography>

            {currentSlide.description && (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: "'Lora', serif",
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {currentSlide.description}
              </Typography>
            )}

            {currentSlide.href && currentSlide.buttonText && (
              <Button
                component={Link}
                to={currentSlide.href}
                variant="contained"
                sx={{
                  borderRadius: 50,
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontFamily: "'Lora', serif",
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 6px 20px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.05)',
                    boxShadow: `0 12px 40px ${theme.palette.primary.main}50`,
                  },
                  transition: 'all 0.4s ease-in-out',
                }}
              >
                {currentSlide.buttonText}
              </Button>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <IconButton
            className="slider-controls"
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: theme.palette.primary.main,
              opacity: isMobile ? 1 : 0,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              zIndex: 3,
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            className="slider-controls"
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: theme.palette.primary.main,
              opacity: isMobile ? 1 : 0,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              zIndex: 3,
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </>
      )}

      {/* Play/Pause Button */}
      {showPlayPause && slides.length > 1 && (
        <IconButton
          className="slider-controls"
          onClick={togglePlayPause}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: theme.palette.primary.main,
            opacity: isMobile ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              transform: 'scale(1.1)',
            },
            zIndex: 3,
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      )}

      {/* Dots Indicator */}
      {showDots && slides.length > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 24,
            display: 'flex',
            gap: 1,
            zIndex: 3,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentIndex
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
export type { SlideItem, ImageSliderProps };
