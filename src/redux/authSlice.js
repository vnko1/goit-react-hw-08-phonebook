import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refresh } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    signIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { name: null, email: null, password: null };
    },
    refresh(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
export const { signUp, signIn, logOut, refresh } = authSlice.actions;
export const authReducer = authSlice.reducer;
