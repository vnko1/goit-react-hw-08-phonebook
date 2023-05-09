import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers(build) {
    build
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOut.fulfilled, state => {
        state.error = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null, password: null };
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
