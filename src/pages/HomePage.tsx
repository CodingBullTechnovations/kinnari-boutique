import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { featuredProducts, categories } from '../data/products';
import { sectionBackgrounds } from '../theme/theme';
import ImageSlider from '../components/common/ImageSlider';
import { featuredProductSlides } from '../data/sliderData';

const HomePage: React.FC = () => {
  const theme = useTheme();

  const handleAddToCart = (product: any) => {
    console.log('Add to cart:', product);
    // TODO: Implement cart functionality
  };

  const handleToggleFavorite = (product: any) => {
    console.log('Toggle favorite:', product);
    // TODO: Implement favorites functionality
  };

  return (
    <Box>
      {/* Luxurious Heritage Hero Section */}
      <Box
        sx={{
          ...sectionBackgrounds.hero,
          py: { xs: 12, md: 20 },
          textAlign: 'center',
          overflow: 'hidden',
          minHeight: { xs: '85vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundSize: '120px 120px, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 15% 85%, ${theme.palette.terracotta.light}12 0%, transparent 60%),
              radial-gradient(circle at 85% 15%, ${theme.palette.sage.light}10 0%, transparent 60%),
              linear-gradient(45deg, transparent 30%, ${theme.palette.accent.main}05 50%, transparent 70%)
            `,
            zIndex: 1,
            animation: 'float 6s ease-in-out infinite',
          },
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              mb: 3,
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 0.3s forwards',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontSize: { xs: '0.9rem', md: '1rem' },
                mb: 3,
              }}
            >
              Luxury Indian Heritage
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            className="calligraphic-title"
            sx={{
              fontFamily: "'Dancing Script', 'Great Vibes', cursive",
              fontWeight: 700,
              mb: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.accent.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '4rem', md: '6rem', lg: '7.5rem' },
              lineHeight: { xs: 1.1, md: 1 },
              letterSpacing: '0.02em',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 0.6s forwards',
              textShadow: '0 8px 40px rgba(114, 47, 55, 0.2)',
              transform: 'rotate(-2deg)',
            }}
          >
            Kinnari Boutique
          </Typography>

          <Typography
            variant="h3"
            className="heritage-text"
            sx={{
              mb: 5,
              color: 'text.primary',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.5,
              fontSize: { xs: '1.7rem', md: '2.5rem' },
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Libre Baskerville', serif",
              fontStyle: 'italic',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 0.9s forwards',
            }}
          >
            "Where Royal Elegance Meets Timeless Artistry"
          </Typography>

          <Typography
            variant="h6"
            className="heritage-text"
            sx={{
              mb: 8,
              color: 'text.secondary',
              maxWidth: '750px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              fontWeight: 400,
              fontFamily: "'Crimson Text', 'Libre Baskerville', serif",
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 1.2s forwards',
            }}
          >
            Discover exquisite handcrafted couture celebrating India's magnificent heritage. 
            Each masterpiece embodies centuries of artistic tradition, thoughtfully curated for the most discerning connoisseurs.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              justifyContent: 'center',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 1.5s forwards',
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/products"
              sx={{
                px: 10,
                py: 3.5,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                fontWeight: 600,
                borderRadius: 50,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                boxShadow: `0 16px 50px ${theme.palette.primary.main}30`,
                position: 'relative',
                overflow: 'hidden',
                letterSpacing: '0.1em',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: `0 25px 70px ${theme.palette.primary.main}40`,
                  '&::before': {
                    transform: 'translateX(100%)',
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                  transition: 'transform 0.6s ease',
                },
                transition: 'all 0.4s ease-in-out',
              }}
            >
              Explore Couture Collection
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/about"
              sx={{
                px: 10,
                py: 3.5,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                fontWeight: 600,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(15px)',
                letterSpacing: '0.1em',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: theme.palette.secondary.main,
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: `0 20px 60px ${theme.palette.secondary.main}30`,
                },
                transition: 'all 0.4s ease-in-out',
              }}
            >
              Discover Our Legacy
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Full-Screen Signature Collections - Irresistible for Indian Ladies */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.background.default,
          background: `linear-gradient(135deg, ${theme.palette.neutral.main}95, ${theme.palette.neutral.light}98)`,
        }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 }, mb: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h2"
              className="calligraphic-title"
              sx={{
                fontFamily: "'Dancing Script', 'Playfair Display', serif",
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 3,
                fontSize: { xs: '3rem', md: '4.5rem' },
                letterSpacing: '0.02em',
                transform: 'rotate(-1deg)',
              }}
            >
              Signature Collections
            </Typography>
            <Typography
              variant="h6"
              className="heritage-text"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
                fontWeight: 400,
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                fontFamily: "'Crimson Text', 'Libre Baskerville', serif",
                fontStyle: 'italic',
              }}
            >
              "Curated masterpieces showcasing the pinnacle of traditional Indian artistry and contemporary luxury"
            </Typography>
          </Box>
        </Container>

        {/* Full-Screen Slider that takes remaining space */}
        <Box sx={{ flexGrow: 1, width: '100%', overflow: 'hidden', minHeight: '70vh' }}>
          <ImageSlider
            slides={featuredProductSlides}
            height="100%"
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            showPlayPause={false}
            borderRadius={0}
          />
        </Box>
      </Box>

      {/* Heritage Collections - Complete New Section */}
      <Box
        sx={{
          ...sectionBackgrounds.elegant,
          py: { xs: 12, md: 16 },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h2"
            component="h2"
            className="calligraphic-title"
            sx={{
              fontFamily: "'Great Vibes', 'Dancing Script', cursive",
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 4,
              fontSize: { xs: '3.5rem', md: '5rem' },
              letterSpacing: '0.03em',
              transform: 'rotate(-0.5deg)',
              textShadow: `0 4px 20px ${theme.palette.primary.main}20`,
            }}
          >
            Heritage Collections
          </Typography>
          <Typography
            variant="h5"
            className="heritage-text"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              fontFamily: "'Playfair Display', 'Libre Baskerville', serif",
              fontStyle: 'italic',
            }}
          >
            "Each collection embodies centuries of refined artisanal traditions, 
            meticulously preserved for the most discerning connoisseurs of Indian heritage"
          </Typography>
        </Box>
        <Grid container spacing={6}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease-in-out',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  background: theme.palette.neutral.light,
                  boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: `0 20px 60px ${theme.palette.primary.main}25`,
                    '& .category-overlay': {
                      opacity: 1,
                    },
                    '& .category-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
                component={Link}
                to={`/products/${category.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    className="category-image"
                    component="img"
                    height="400"
                    image={category.image}
                    alt={category.name}
                    sx={{
                      transition: 'transform 0.4s ease-in-out',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="category-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}25, ${theme.palette.secondary.main}15)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease-in-out',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.primary.main,
                      fontSize: '1.4rem',
                      fontFamily: 'Cormorant Garamond, serif',
                    }}
                  >
                    {category.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                      fontFamily: 'Lato, sans-serif',
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </Box>

      {/* Exclusive Featured Masterpieces */}
      <Box
        sx={{
          ...sectionBackgrounds.featured,
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 3,
                fontSize: { xs: '2.25rem', md: '3rem' },
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              Exclusive Masterpieces
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '650px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontFamily: 'Lato, sans-serif',
              }}
            >
              Meticulously handpicked couture pieces representing the epitome of luxury and artistic excellence
            </Typography>
          </Box>
          <Grid container spacing={6}>
            {featuredProducts.slice(0, 3).map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/products"
              sx={{
                px: 8,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                letterSpacing: '0.08em',
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 40px ${theme.palette.primary.main}25`,
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                },
                transition: 'all 0.4s ease-in-out',
              }}
            >
              View Complete Collection
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Luxurious Heritage Promise Section */}
      <Box
        sx={{
          ...sectionBackgrounds.premium,
          py: { xs: 12, md: 16 },
        }}
      >
        <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            The Kinnari Legacy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.7,
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontFamily: 'Lato, sans-serif',
            }}
          >
            Our unwavering commitment transcends mere fashion – we are custodians of India's cultural heritage,
            empowering master artisans, and creating an enduring legacy of sustainable luxury craftsmanship.
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                p: 6,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${theme.palette.neutral.light}90, ${theme.palette.neutral.main}95)`,
                transition: 'all 0.4s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: `0 20px 60px ${theme.palette.primary.main}20`,
                },
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  fontSize: '2.5rem',
                  boxShadow: `0 8px 32px ${theme.palette.primary.main}25`,
                }}
              >
                🎨
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.8rem',
                }}
              >
                Master Craftsmanship
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  fontFamily: 'Lato, sans-serif',
                }}
              >
                Each masterpiece is meticulously handcrafted by renowned artisans, preserving ancient techniques
                refined over millennia, ensuring every creation embodies unparalleled artistry and cultural significance.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                p: 6,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${theme.palette.neutral.light}90, ${theme.palette.neutral.main}95)`,
                transition: 'all 0.4s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: `0 20px 60px ${theme.palette.secondary.main}20`,
                },
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.accent.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  fontSize: '2.5rem',
                  boxShadow: `0 8px 32px ${theme.palette.secondary.main}25`,
                }}
              >
                ✨
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.8rem',
                }}
              >
                Opulent Materials
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  fontFamily: 'Lato, sans-serif',
                }}
              >
                We procure only the most exquisite fabrics and precious materials from across the subcontinent,
                ensuring each piece embodies exceptional luxury, comfort, and timeless elegance spanning generations.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                p: 6,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${theme.palette.neutral.light}90, ${theme.palette.neutral.main}95)`,
                transition: 'all 0.4s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: `0 20px 60px ${theme.palette.sage.main}20`,
                },
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.sage.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  fontSize: '2.5rem',
                  boxShadow: `0 8px 32px ${theme.palette.sage.main}25`,
                }}
              >
                🌱
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.8rem',
                }}
              >
                Cultural Stewardship
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  fontFamily: 'Lato, sans-serif',
                }}
              >
                Championing artisan communities through sustainable practices and ethical sourcing,
                we are dedicated custodians preserving India's magnificent cultural heritage for future generations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
