import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import HeroSection from './components/HeroSection';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import { products } from './data/products';
import store from './store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
      light: '#FF8E8E',
      dark: '#FF4848',
    },
    secondary: {
      main: '#4ECDC4',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

const HomePage = () => (
  <>
    <HeroSection />
    <ProductGrid products={products} />
  </>
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
