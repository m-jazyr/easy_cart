import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    totalCount: 0,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.addedItems.pop(action.payload);
      return state.items.filter((item, i) => i !== action.payload.index);
    },
    addQuantity: (state, action) => {
      const item = state.items[action.payload.index];
      item.count++;
    },
    removeQuantity: (state, action) => {
      const item = state.items[action.payload.index];
      item.count++;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { create } = actions;
export default reducer;
