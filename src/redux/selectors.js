export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selctUser = state => state.auth.user;
export const selectToken = state => state.auth.token;

// export const selectContacts = state => state.contacts.items;

// export const selectError = state => state.contacts.error;

// export const selectFiltredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) =>
//     contacts.filter(
//       contact =>
//         contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//     )
// );
