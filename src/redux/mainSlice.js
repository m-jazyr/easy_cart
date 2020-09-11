import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: true,
    showAlert: false,
    userToken: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.userToken = action.payload;
    },
    removeToken: (state, action) => {
      state.userToken = null;
    },
  },
});

const { actions, reducer } = mainSlice;
export const { setToken, removeToken } = actions;
export default reducer;
