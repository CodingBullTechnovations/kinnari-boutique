import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
} from '@mui/material';

const PrivacyPage: React.FC = () => {
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
        Privacy Policy
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
          Last updated: January 2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            This may include your name, email address, phone number, shipping address, and payment information.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            We may also use your information to send you promotional materials, though you can opt out at any time.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Information Sharing
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            We may share information with trusted service providers who assist us in operating our website and conducting our business.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Data Security
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Your Rights
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            To exercise these rights, please contact us at privacy@kinnariboutique.com.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Cookies
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </Typography>
        </Box>

        <Box sx={{ p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@kinnariboutique.com
            <br />
            Phone: +91 98765 43210
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPage;
