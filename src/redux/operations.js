import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const response = await axios.post('/users/signup', user);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('aith/logIn', async (user, thunkApi) => {
  try {
    console.log(user);
    const response = await axios.post('/users/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});
