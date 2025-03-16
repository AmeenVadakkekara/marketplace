import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Box, Button } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { removeFromCart } from '../store';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#2D3436' }}>
        Shopping Cart ({cartItems.length} items)
      </Typography>

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ mb: 2, display: 'flex', position: 'relative' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 140, objectFit: 'cover' }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      ${item.price.toFixed(2)} × {item.quantity}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small">
                        <Remove />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton size="small">
                        <Add />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <IconButton
                      color="error"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ position: 'sticky', top: 24 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Order Summary
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Subtotal:</Typography>
                  <Typography>${totalAmount.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Shipping:</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, pt: 2, borderTop: '1px solid #e9ecef' }}>
                  <Typography variant="h6">Total:</Typography>
                  <Typography variant="h6" color="primary">${totalAmount.toFixed(2)}</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
