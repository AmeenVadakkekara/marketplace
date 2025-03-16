import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Box, Button } from '@mui/material';
import { ShoppingCart, Delete, Favorite } from '@mui/icons-material';
import { toggleWishlist, addToCart } from '../store';

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.cart.wishlist);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#2D3436' }}>
        My Wishlist ({wishlistItems.length} items)
      </Typography>

      {wishlistItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Favorite sx={{ fontSize: 64, color: '#FF6B6B', mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            Your wishlist is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/"
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {wishlistItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mb: 2, mt: 'auto' }}>
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<ShoppingCart />}
                      onClick={() => {
                        dispatch(addToCart(item));
                        dispatch(toggleWishlist(item));
                      }}
                    >
                      Add to Cart
                    </Button>
                    <IconButton
                      color="error"
                      onClick={() => dispatch(toggleWishlist(item))}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Wishlist;
