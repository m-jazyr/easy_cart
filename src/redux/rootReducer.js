import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import mainReducer from './mainSlice';

export default combineReducers({
  cart: cartReducer,
  main: mainReducer,
});
