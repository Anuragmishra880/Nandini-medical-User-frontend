import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  authLoading: true,
  error: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.authLoading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.authLoading = false
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.authLoading = false
      state.error = action.payload
      state.isAuthenticated = false
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false
    },
  },

})
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
