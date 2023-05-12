import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authentification',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
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
      query: user => {
        return { url: '/users/signup', method: 'POST', body: user };
      },
    }),

    signIn: build.mutation({
      query: user => {
        return { url: '/users/login', method: 'POST', body: user };
      },
    }),

    logOut: build.mutation({
      query: () => {
        return { url: '/users/logout', method: 'POST' };
      },
    }),
    current: build.query({
      query: () => '/users/current',
    }),
  }),
});
export const {
  useSignUpMutation,
  useSignInMutation,
  useLogOutMutation,
  useCurrentQuery,
} = authApi;
