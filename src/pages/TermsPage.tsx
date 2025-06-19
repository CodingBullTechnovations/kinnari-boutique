import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
} from '@mui/material';

const TermsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: 'center',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Terms of Service
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
          Last updated: January 2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Acceptance of Terms
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            By accessing and using Kinnari Boutique's website and services, you accept and agree to be bound by the terms and provision of this agreement.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Products and Services
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            We strive to provide accurate descriptions and images of our products. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            All products are subject to availability. We reserve the right to discontinue any product at any time.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Pricing and Payment
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve the right to modify prices at any time.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Payment must be received in full before products are shipped. We accept various payment methods as indicated on our website.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Shipping and Delivery
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            We will make every effort to ship your order within the timeframe specified on our website. However, delivery times are estimates and not guaranteed.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Risk of loss and title for products pass to you upon delivery to the shipping carrier.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Returns and Exchanges
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            We accept returns within 30 days of delivery for unused items in original condition with tags attached.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Custom or personalized items are not eligible for return unless defective. Return shipping costs are the responsibility of the customer.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Intellectual Property
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            All content on this website, including text, graphics, logos, and images, is the property of Kinnari Boutique and is protected by copyright and other intellectual property laws.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Kinnari Boutique shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Governing Law
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </Typography>
        </Box>

        <Box sx={{ p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Contact Information
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            For questions about these Terms of Service, please contact us at:
            <br />
            Email: legal@kinnariboutique.com
            <br />
            Phone: +91 98765 43210
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPage;
