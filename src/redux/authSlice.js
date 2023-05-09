import { createSlice } from '@reduxjs/toolkit';
import { register } from './services';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers(build) {
    build.addCase(register.fulfilled, (state, action) => {});
  },
});
