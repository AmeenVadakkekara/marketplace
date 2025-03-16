import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, styled } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#636E72',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#FF6B6B',
    transform: 'translateY(-3px)',
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f8f9fa',
        color: '#2D3436',
        py: 6,
        borderTop: '1px solid #e9ecef',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              MarketPlace
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your one-stop destination for all your shopping needs. Quality products, great prices, and excellent service.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <SocialButton>
                <Facebook />
              </SocialButton>
              <SocialButton>
                <Twitter />
              </SocialButton>
              <SocialButton>
                <Instagram />
              </SocialButton>
              <SocialButton>
                <LinkedIn />
              </SocialButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              Contact Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              FAQs
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              Privacy Policy
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Categories
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              Electronics
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              Fashion
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              Home & Kitchen
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: '#FF6B6B' } }}>
              Books
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              1234 Market Street
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              San Francisco, CA 94103
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Email: support@marketplace.com
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #e9ecef', pt: 4, mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} MarketPlace. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
