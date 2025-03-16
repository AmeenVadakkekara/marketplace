import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { LocalOffer, Whatshot, Star } from '@mui/icons-material';

const HeroSection = () => {
  return (
    <Box sx={{ width: '100%', mb: 6 }}>
      {/* Main Hero Banner */}
      <Paper
        sx={{
          background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
          color: 'white',
          py: 8,
          mb: 4,
          borderRadius: 0,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Spring Sale is Live!
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Up to 70% off on selected items. Limited time offer.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#FF6B6B',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://picsum.photos/id/1/600/400"
                alt="Hero Banner"
                sx={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Featured Sections */}
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, #4ECDC4 30%, #6EE7E7 90%)',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <LocalOffer sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Today's Deals
              </Typography>
              <Typography>
                Get amazing discounts on top brands. New deals every day!
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Whatshot sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Flash Sales
              </Typography>
              <Typography>
                Limited-time offers with massive discounts. Don't miss out!
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, #FFD93D 30%, #FFE869 90%)',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Star sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Premium Offers
              </Typography>
              <Typography>
                Exclusive deals for premium members. Join now!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
