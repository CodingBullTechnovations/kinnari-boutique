import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';

const AboutPage: React.FC = () => {
  const theme = useTheme();

  const values = [
    {
      title: 'Authentic Craftsmanship',
      description: 'We work directly with skilled artisans who have mastered traditional techniques passed down through generations.',
    },
    {
      title: 'Sustainable Fashion',
      description: 'Our commitment to eco-friendly practices and supporting local communities drives everything we do.',
    },
    {
      title: 'Cultural Heritage',
      description: 'Each piece tells a story of India\'s rich cultural heritage and artistic traditions.',
    },
    {
      title: 'Quality Excellence',
      description: 'We use only the finest materials and maintain the highest standards of quality in every product.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Kinnari Boutique
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Celebrating the timeless beauty of Indian craftsmanship through contemporary fashion
        </Typography>
      </Box>

      {/* Story Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: theme.palette.primary.main,
            textAlign: 'center',
          }}
        >
          Our Story
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: 'text.secondary',
            maxWidth: '900px',
            mx: 'auto',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Founded with a passion for preserving India's rich textile heritage, Kinnari Boutique bridges the gap between traditional craftsmanship and contemporary fashion. Our journey began with a simple belief: that every piece of clothing should tell a story, carry the soul of its maker, and celebrate the artistry that has been perfected over centuries.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: 'text.secondary',
            maxWidth: '900px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          We work directly with artisan communities across India, ensuring fair wages and sustainable practices while bringing you authentic, handcrafted pieces that embody the essence of Indian culture and craftsmanship.
        </Typography>
      </Box>

      {/* Values Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 6,
            color: theme.palette.primary.main,
            textAlign: 'center',
          }}
        >
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission Section */}
      <Box sx={{ textAlign: 'center', py: 6, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: theme.palette.primary.main,
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          "To preserve and promote India's rich textile heritage while empowering artisan communities and providing our customers with authentic, sustainable, and beautifully crafted fashion that celebrates cultural diversity and artistic excellence."
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
