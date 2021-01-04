import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import mainReducer from './mainSlice';
import authReducer from './authSlice';

export default combineReducers({
  cart: cartReducer,
  main: mainReducer,
  auth: authReducer,
});
