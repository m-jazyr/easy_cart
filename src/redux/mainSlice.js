import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: true,
    error: '',
    userToken: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.userToken = action.payload;
    },
    removeToken: (state, action) => {
      state.userToken = null;
    },
    showError: (state, { payload }) => {
      state.error = payload;
    },
    hideError: (state) => {
      state.error = '';
    }
  },
});

export const mainSelector = state => state.main
const { actions, reducer } = mainSlice;
export const { setToken, removeToken, showError, hideError } = actions;
export default reducer;
