import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authentification',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontend-contacts-server.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: build => ({
    signUp: build.mutation({
      query: user => ({ url: '/users/register', method: 'POST', body: user }),
    }),

    signIn: build.mutation({
      query: user => ({ url: '/users/login', method: 'POST', body: user }),
    }),

    logOut: build.mutation({
      query: () => ({ url: '/users/logout', method: 'POST' }),
    }),
    current: build.mutation({
      query: () => ({ url: '/users/current', method: 'POST' }),
    }),
  }),
});
export const {
  useSignUpMutation,
  useSignInMutation,
  useLogOutMutation,
  useCurrentMutation,
} = authApi;
