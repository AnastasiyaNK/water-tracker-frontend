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
import { userReducer } from './userSlice';
import { modalsReducer } from './modalsReduser';
import { waterReducer } from './water/waterSlice';

const persistConfig = {
  key: 'user',
  whitelist: ['token'],
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    modals: modalsReducer,
    water: waterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
