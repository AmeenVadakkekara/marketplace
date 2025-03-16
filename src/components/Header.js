import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, InputBase, Badge, IconButton, styled, Box, Container, Tabs, Tab } from '@mui/material';
import { Search as SearchIcon, ShoppingCart, Person, LocalOffer, Whatshot, Favorite, Category } from '@mui/icons-material';
import { setSearchQuery, setActiveCategory } from '../store';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.cart.wishlist);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const categories = ['all', 'deals', 'flash', 'electronics', 'fashion', 'home', 'books'];
    dispatch(setActiveCategory(categories[newValue]));
  };

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            onClick={() => navigate('/')}
            sx={{
              background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mr: 4,
              cursor: 'pointer'
            }}
          >
            MarketPlace
          </Typography>

          <Search sx={{ flexGrow: 1, maxWidth: 600, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'text.secondary' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
              sx={{ color: 'text.primary' }}
            />
          </Search>

          <Box sx={{ ml: 2 }}>
            <IconButton 
              color="inherit"
              onClick={() => navigate('/profile')}
              sx={{ 
                bgcolor: location.pathname === '/profile' ? 'rgba(255,107,107,0.1)' : 'transparent'
              }}
            >
              <Person />
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => navigate('/wishlist')}
              sx={{ 
                bgcolor: location.pathname === '/wishlist' ? 'rgba(255,107,107,0.1)' : 'transparent'
              }}
            >
              <Badge badgeContent={wishlistItems.length} color="primary">
                <Favorite />
              </Badge>
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => navigate('/cart')}
              sx={{ 
                bgcolor: location.pathname === '/cart' ? 'rgba(255,107,107,0.1)' : 'transparent'
              }}
            >
              <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>

        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              minWidth: 'auto',
              px: 3,
            },
          }}
        >
          <Tab icon={<Category sx={{ mr: 1 }} />} label="All Categories" />
          <Tab icon={<LocalOffer sx={{ mr: 1 }} />} label="Today's Deals" />
          <Tab icon={<Whatshot sx={{ mr: 1 }} />} label="Flash Sales" />
          <Tab label="Electronics" />
          <Tab label="Fashion" />
          <Tab label="Home & Kitchen" />
          <Tab label="Books" />
        </Tabs>
      </Container>
    </AppBar>
  );
};

export default Header;
