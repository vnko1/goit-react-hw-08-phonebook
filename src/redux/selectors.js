import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(
      contact =>
        contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
