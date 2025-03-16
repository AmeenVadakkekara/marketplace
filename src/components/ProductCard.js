import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Rating, Button, Box, styled, Chip, IconButton } from '@mui/material';
import { ShoppingCart, LocalOffer, Whatshot, Favorite, FavoriteBorder } from '@mui/icons-material';
import { addToCart, toggleWishlist } from '../store';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
  }
}));

const StyledButton = styled(Button)(({ theme, isSpecialDeal, isFlashSale }) => ({
  background: isFlashSale 
    ? 'linear-gradient(45deg, #4ECDC4 30%, #6EE7E7 90%)'
    : isSpecialDeal 
    ? 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)'
    : 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
  transition: 'transform 0.2s ease-in-out',
  color: 'white',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 10px rgba(255, 107, 107, 0.5)',
    background: isFlashSale 
      ? 'linear-gradient(45deg, #45C1B9 30%, #62D5D5 90%)'
      : isSpecialDeal 
      ? 'linear-gradient(45deg, #FF5B5B 30%, #FF7E7E 90%)'
      : 'linear-gradient(45deg, #FF5B5B 30%, #FF7E7E 90%)',
  }
}));

const DiscountChip = styled(Chip)(({ theme, isFlashSale }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  background: isFlashSale 
    ? 'linear-gradient(45deg, #4ECDC4 30%, #6EE7E7 90%)'
    : 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
  color: 'white',
  fontWeight: 'bold',
  padding: '0 8px',
}));

const WishlistButton = styled(IconButton)(({ theme, isInWishlist }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  '& .MuiSvgIcon-root': {
    color: isInWishlist ? '#FF6B6B' : '#636E72',
  }
}));

const ProductCard = ({ product, isSpecialDeal, isFlashSale }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.cart.wishlist);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const discount = isFlashSale ? 50 : isSpecialDeal ? 30 : 0;

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      price: discount > 0 ? product.price * (1 - discount/100) : product.price
    }));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  return (
    <StyledCard>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
        {(isSpecialDeal || isFlashSale) && (
          <DiscountChip
            isFlashSale={isFlashSale}
            icon={isFlashSale ? <Whatshot /> : <LocalOffer />}
            label={`${discount}% OFF`}
          />
        )}
        <WishlistButton 
          isInWishlist={isInWishlist}
          onClick={handleToggleWishlist}
          size="small"
        >
          {isInWishlist ? <Favorite /> : <FavoriteBorder />}
        </WishlistButton>
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '3.6em',
            fontSize: '1rem',
            color: '#2D3436',
          }}
        >
          {product.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.reviews})
          </Typography>
        </Box>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
            <Typography 
              variant="h6" 
              color="primary" 
              sx={{ fontWeight: 'bold' }}
            >
              ${(discount > 0 ? product.price * (1 - discount/100) : product.price).toFixed(2)}
            </Typography>
            {(isSpecialDeal || isFlashSale) && (
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  ml: 1,
                  textDecoration: 'line-through'
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
            )}
          </Box>
          
          <StyledButton
            variant="contained"
            fullWidth
            startIcon={<ShoppingCart />}
            isSpecialDeal={isSpecialDeal}
            isFlashSale={isFlashSale}
            onClick={handleAddToCart}
          >
            Add to Cart
          </StyledButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
