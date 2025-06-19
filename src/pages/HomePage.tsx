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
      {/* Enhanced Hero Section with Okhai-inspired backgrounds */}
      <Box
        sx={{
          ...sectionBackgrounds.hero,
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          overflow: 'hidden',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundSize: '100px 100px, cover',
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
                color: theme.palette.accent.main,
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                mb: 2,
              }}
            >
              Authentic Indian Fashion
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              letterSpacing: '-0.02em',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 0.6s forwards',
              textShadow: '0 4px 20px rgba(139, 69, 19, 0.1)',
            }}
          >
            Kinnari Boutique
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: 'text.primary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.5,
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 0.9s forwards',
            }}
          >
            Where timeless elegance meets contemporary style
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 400,
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 1.2s forwards',
            }}
          >
            Discover handcrafted pieces that celebrate India's rich heritage while embracing modern sensibilities.
            Each creation tells a story of artistry, tradition, and timeless beauty.
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
                px: 8,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 50,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                boxShadow: `0 12px 40px ${theme.palette.primary.main}25`,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: `0 20px 60px ${theme.palette.primary.main}35`,
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
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'transform 0.6s ease',
                },
                transition: 'all 0.4s ease-in-out',
              }}
            >
              Explore Collection
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/about"
              sx={{
                px: 8,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: theme.palette.accent.main,
                color: theme.palette.accent.main,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: theme.palette.accent.main,
                  backgroundColor: theme.palette.accent.main,
                  color: 'white',
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: `0 16px 48px ${theme.palette.accent.main}25`,
                },
                transition: 'all 0.4s ease-in-out',
              }}
            >
              Our Heritage
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Collections Slider - Full Width */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Featured Collections
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.5,
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Discover our handpicked collections showcasing traditional Indian craftsmanship
            </Typography>
          </Box>
        </Container>

        {/* Full Width Slider */}
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <ImageSlider
            slides={featuredProductSlides}
            height={480}
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            showArrows={true}
            showPlayPause={false}
            borderRadius={0}
          />
        </Box>
      </Box>

      {/* Enhanced Featured Categories */}
      <Box
        sx={{
          ...sectionBackgrounds.elegant,
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            Explore Our Collections
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '500px',
              mx: 'auto',
              lineHeight: 1.5,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Each collection represents a unique tradition of Indian craftsmanship
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 40px ${theme.palette.primary.main}20`,
                    '& .category-overlay': {
                      opacity: 1,
                    },
                    '& .category-image': {
                      transform: 'scale(1.03)',
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
                    height="320"
                    image={category.image}
                    alt={category.name}
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
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
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: theme.palette.primary.main,
                      fontSize: '1.2rem',
                    }}
                  >
                    {category.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                      fontSize: '0.9rem',
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

      {/* Enhanced Featured Products Section */}
      <Box
        sx={{
          ...sectionBackgrounds.featured,
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Featured Creations
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.5,
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Handpicked pieces showcasing the finest artistry and craftsmanship
            </Typography>
          </Box>
          <Grid container spacing={4}>
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
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/products"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 20px ${theme.palette.primary.main}20`,
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Discover All Creations
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Enhanced Features Section */}
      <Box
        sx={{
          ...sectionBackgrounds.premium,
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
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            The Kinnari Promise
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Our commitment to excellence goes beyond fashion – we're preserving heritage,
            empowering artisans, and creating a sustainable future for Indian craftsmanship.
          </Typography>
        </Box>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 16px 48px ${theme.palette.primary.main}15`,
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2rem',
                }}
              >
                🎨
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Authentic Craftsmanship
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Each piece is handcrafted by skilled artisans, preserving traditional techniques
                passed down through generations, ensuring every creation is unique and meaningful.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 16px 48px ${theme.palette.secondary.main}15`,
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2rem',
                }}
              >
                ✨
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Premium Quality
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                We source only the finest fabrics and materials, ensuring every piece offers
                exceptional comfort, durability, and timeless appeal that lasts for generations.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 16px 48px ${theme.palette.success.main}15`,
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2rem',
                }}
              >
                🌱
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Sustainable Heritage
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Supporting local artisan communities and promoting eco-friendly practices,
                we're building a sustainable future while preserving India's rich cultural heritage.
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
