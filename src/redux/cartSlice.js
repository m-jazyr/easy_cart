import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    totalCount: 0,
    items: [],
    loading: false,
    hasErrors: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      index !== -1
        ? state.items[index].count++
        : state.items.push({ ...action.payload, count: 1 });
      state.totalCount++;
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.items[index].count === 1
        ? state.items.splice(index, 1)
        : state.items[index].count--;
      state.totalCount--;
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    resetCart: (state, action) => {
      state.totalPrice = 0;
      state.totalCount = 0;
      state.items = [];
    },
    getCart: (state) => {
      state.loading = true
    },
    getCartSuccess: (state, { payload }) => {
      state.recipes = payload
      state.loading = false
      state.hasErrors = false
    },
    getCartFailed: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, resetCart, getCart, getCartSuccess, getCartFailed } = actions;
export default reducer;


