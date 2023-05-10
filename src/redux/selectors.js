export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selctUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
