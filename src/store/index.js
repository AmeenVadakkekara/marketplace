import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    wishlist: [],
    searchQuery: '',
    activeCategory: 'all',
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleWishlist: (state, action) => {
      const index = state.wishlist.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.wishlist.push(action.payload);
      } else {
        state.wishlist.splice(index, 1);
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, toggleWishlist, setSearchQuery, setActiveCategory } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
