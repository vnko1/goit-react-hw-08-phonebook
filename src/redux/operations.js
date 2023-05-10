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
      if (error.response.status === 400) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkApi) => {
  try {
    const response = await axios.post('/users/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      return thunkApi.rejectWithValue('Login error');
    }
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  if (token === null) {
    return thunkApi.rejectWithValue('Unable to refresh user');
  }
  try {
    setToken(token);
    const response = await axios('/users/current');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
