import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactsApi } from './contactsApi';
import { authReducer } from './authSlice';
import { themeReducer } from './themeSlice';

const authPersistConfig = {
  key: 'token',
  version: 1,
  whitelist: ['token'],
  storage,
};

const themePersistConfig = {
  key: 'theme',
  version: 1,
  whitelist: ['theme'],
  storage,
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const themePersistReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    theme: themePersistReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistStor = persistStore(store);
