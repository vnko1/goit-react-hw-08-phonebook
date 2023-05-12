import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
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
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: contact => ({ url: '/contacts', method: 'POST', body: contact }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    editContact: build.mutation({
      query: ({ id, name, number }) => {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: { name, number },
        };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} = contactsApi;
