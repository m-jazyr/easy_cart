import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../apis/fetchData';
import { API_BASE } from '../config/constants';


// export const getOtp = createAsyncThunk(
//   'getOtp',
//   async (phone, thunkAPI) => {
//     const bodyObj = {
//       phone_no: phone,
//     };
//     const options = {
//       baseUrl: API_BASE + 'register/',
//       method: 'POST',
//       bodyObj: bodyObj,
//     };
//     const response = await makeRequest(options);
//     return response.data
//   }
// )

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    hasErrors: false,
    user: {},
  },
  reducers: {
    setUserNumber: (state, { payload }) => {
      state.user = {
        phone: payload
      }
      state.loading = false
      state.hasErrors = false
    },
    showLoader: (state) => {
      state.loading = true
    },
    hideLoader: (state) => {
      state.loading = false
    },
    getUserSuccess: (state, { payload }) => {
      state.user = payload
      state.loading = false
      state.hasErrors = false
    },
    callAPISuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload
    },
    callAPIFailed: (state) => {
      state.loading = false
      state.hasErrors = true
    },

  },
  // extraReducers: {
  //   [getOtp.fulfilled]: (state, { meta }) => {
  //     state.loading = false,
  //       state.navigate = true,
  //       state.user = meta.arg
  //   },
  //   [getOtp.pending]: (state) => {
  //     state.loading = true
  //   },
  //   [getOtp.rejected]: (state) => {
  //     state.loading = true,
  //       state.hasErrors = true
  //   }
  // }
});

export const authSelector = state => state.auth
const { actions, reducer } = authSlice;
export const { showLoader, hideLoader, getUserSuccess, callAPISuccess, callAPIFailed, setUserNumber } = actions;
export default reducer;
