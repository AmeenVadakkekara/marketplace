import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Container, Typography, Box, Tabs, Tab, Paper } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const [value, setValue] = React.useState(0);
  const searchQuery = useSelector(state => state.cart.searchQuery);
  const activeCategory = useSelector(state => state.cart.activeCategory);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'deals' && product.id <= 8) ||
      (activeCategory === 'flash' && product.id > 8 && product.id <= 16) ||
      product.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  // Filter products for different sections
  const dealsProducts = products.slice(0, 8);
  const flashSaleProducts = products.slice(8, 16);
  const regularProducts = products.slice(16);

  // Only show sections if we're not filtering
  const showAllSections = searchQuery === '' && activeCategory === 'all';

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
      {showAllSections ? (
        <>
          {/* Deals Section */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: '#FF6B6B',
              }}
            >
              Today's Special Deals
            </Typography>
            <Grid container spacing={3}>
              {dealsProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={3}>
                  <ProductCard product={{...product}} isSpecialDeal />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Flash Sale Section */}
          <Paper sx={{ mb: 6, p: 4, background: 'linear-gradient(45deg, #4ECDC4 30%, #6EE7E7 90%)', borderRadius: 4 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Flash Sales - Limited Time!
            </Typography>
            <Grid container spacing={3}>
              {flashSaleProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={3}>
                  <ProductCard product={{...product}} isFlashSale />
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Regular Products Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: '#2D3436',
              }}
            >
              Explore More Products
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                mb: 3,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  minWidth: 'auto',
                  px: 3,
                },
              }}
            >
              <Tab label="All Products" />
              <Tab label="Best Sellers" />
              <Tab label="New Arrivals" />
              <Tab label="Top Rated" />
            </Tabs>
            <Grid container spacing={3}>
              {regularProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={3}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        // Search/Filter Results Section
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: '#2D3436',
            }}
          >
            {searchQuery ? `Search Results for "${searchQuery}"` : 
             activeCategory !== 'all' ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Products` :
             'All Products'}
            <Typography variant="subtitle1" color="text.secondary">
              {filteredProducts.length} items found
            </Typography>
          </Typography>
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <ProductCard 
                  product={product}
                  isSpecialDeal={product.id <= 8}
                  isFlashSale={product.id > 8 && product.id <= 16}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ProductGrid;
