import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Person, ShoppingBag, Favorite, Settings, LocalShipping, Payment, Security } from '@mui/icons-material';

const Profile = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto 16px',
                bgcolor: '#FF6B6B',
              }}
            >
              <Person sx={{ fontSize: 64 }} />
            </Avatar>
            <Typography variant="h5" sx={{ mb: 1 }}>John Doe</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              john.doe@example.com
            </Typography>
            <Button variant="outlined" color="primary">
              Edit Profile
            </Button>
          </Paper>

          <Paper sx={{ mt: 3, overflow: 'hidden' }}>
            <List>
              <ListItem button selected>
                <ListItemIcon>
                  <Person color="primary" />
                </ListItemIcon>
                <ListItemText primary="Profile Overview" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <ShoppingBag />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <LocalShipping />
                </ListItemIcon>
                <ListItemText primary="Shipping Addresses" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Payment />
                </ListItemIcon>
                <ListItemText primary="Payment Methods" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Security />
                </ListItemIcon>
                <ListItemText primary="Security" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Profile Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">Full Name</Typography>
                <Typography variant="body1">John Doe</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">Email</Typography>
                <Typography variant="body1">john.doe@example.com</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">Phone</Typography>
                <Typography variant="body1">+1 (555) 123-4567</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">Location</Typography>
                <Typography variant="body1">San Francisco, CA</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Recent Orders</Typography>
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <ShoppingBag sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
              <Typography>No recent orders</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Account Statistics</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8f9fa' }}>
                  <ShoppingBag sx={{ color: '#FF6B6B', fontSize: 32, mb: 1 }} />
                  <Typography variant="h4" sx={{ mb: 1 }}>0</Typography>
                  <Typography color="text.secondary">Total Orders</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8f9fa' }}>
                  <Favorite sx={{ color: '#FF6B6B', fontSize: 32, mb: 1 }} />
                  <Typography variant="h4" sx={{ mb: 1 }}>0</Typography>
                  <Typography color="text.secondary">Wishlist Items</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8f9fa' }}>
                  <LocalShipping sx={{ color: '#FF6B6B', fontSize: 32, mb: 1 }} />
                  <Typography variant="h4" sx={{ mb: 1 }}>0</Typography>
                  <Typography color="text.secondary">Pending Deliveries</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
