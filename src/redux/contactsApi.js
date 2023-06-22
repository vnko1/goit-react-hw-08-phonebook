import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
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
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => '/contacts',
      providesTags: result => {
        return result.contacts
          ? [
              ...result.contacts.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }];
      },
    }),
    addContact: build.mutation({
      query: contact => {
        return { url: '/contacts', method: 'POST', body: contact };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    editContact: build.mutation({
      query: ({ id, name, phone, email }) => {
        return {
          url: `/contacts/${id}`,
          method: 'PUT',
          body: { name, phone, email },
        };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => {
        console.log(id);
        return [{ type: 'Contacts', id }];
      },
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} = contactsApi;
