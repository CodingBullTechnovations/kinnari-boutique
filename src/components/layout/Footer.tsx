import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  useTheme,
  Paper,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  ArrowForward,
  Verified,
  LocalShipping,
  Security,
  Support,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { label: 'About us', href: '/about' },
        { label: 'Partner onboarding', href: '/partner-onboarding' },
        { label: 'News and events', href: '/news' },
        { label: 'Work with us', href: '/careers' },
        { label: 'Bulk Order', href: '/bulk-order' },
        { label: 'Return Order', href: '/returns' },
        { label: 'Blogs', href: '/blogs' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Privacy and terms of use', href: '/privacy' },
        { label: 'Shipping and cancellation', href: '/shipping' },
        { label: "FAQ's", href: '/faq' },
      ],
    },
    {
      title: 'Connect with us',
      links: [
        { label: 'Contact us', href: '/contact' },
        { label: '079-66131721', href: 'tel:079-66131721' },
        { label: '+91 6359 021 222', href: 'tel:+916359021222' },
        { label: 'info@kinnariboutique.com', href: 'mailto:info@kinnariboutique.com' },
        { label: 'Store locator', href: '/store-locator' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'Apparel', href: '/products/women' },
        { label: 'Home decor', href: '/products/home' },
        { label: 'Accessories', href: '/products/accessories' },
        { label: 'Gift and toys', href: '/products/gifts' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com/kinnariboutique', label: 'Facebook' },
    { icon: <Instagram />, href: 'https://instagram.com/kinnariboutique', label: 'Instagram' },
    { icon: <Twitter />, href: 'https://twitter.com/kinnariboutique', label: 'Twitter' },
    { icon: <YouTube />, href: 'https://youtube.com/kinnariboutique', label: 'YouTube' },
  ];

  const trustIndicators = [
    { icon: <Verified />, text: 'Authentic Handcrafted Products' },
    { icon: <LocalShipping />, text: 'Free Shipping Above ₹999' },
    { icon: <Security />, text: 'Secure Payment Gateway' },
    { icon: <Support />, text: '24/7 Customer Support' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      {/* Newsletter Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, ${theme.palette.grey[50]} 100%)`,
          py: 6,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.slice(1)}' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Stay in touch with us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Subscribe to our newsletter for exclusive offers, new arrivals, and updates on traditional Indian craftsmanship
            </Typography>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
              maxWidth: 500,
              mx: 'auto',
              background: 'white',
            }}
          >
            <Box
              component="form"
              onSubmit={handleNewsletterSubmit}
              sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
            >
              <TextField
                fullWidth
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size="medium"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  minWidth: 120,
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Main Footer */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[900],
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Footer Links */}
            {footerSections.map((section) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={section.title}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: theme.palette.secondary.main,
                    fontSize: '1.1rem',
                  }}
                >
                  {section.title}
                </Typography>
                <Box>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        display: 'block',
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        mb: 1.5,
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: theme.palette.secondary.main,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Trust Indicators */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Grid container spacing={3}>
              {trustIndicators.map((indicator, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: 24,
                      }}
                    >
                      {indicator.icon}
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
                      {indicator.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Social Links */}
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 3, color: theme.palette.secondary.main }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    width: 48,
                    height: 48,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.main,
                      color: 'black',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Bottom Bar */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: 'white',
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                2025 Kinnari Boutique | Celebrating Indian Heritage Through Fashion
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                Handcrafted with love • Authentic • Sustainable • Empowering Artisans
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                href="/privacy"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                Sitemap
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
