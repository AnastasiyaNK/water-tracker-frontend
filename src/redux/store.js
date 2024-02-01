// import {
//   persistStore,
//   //   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { waterportionsReducer } from './waterportions/sliсe';
// import { authReducer } from './auth/slice';
// import { filterReducer } from './contacts/filterSlice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     waterportions: waterportionsReducer,
//     // auth: persistReducer(authPersistConfig, authReducer),
//     // filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { modalsReducer } from "./modalsReduser";

// export const store = configureStore({ reducer: { modals: modalsReducer } });

import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userSlice";
import { modalsReducer } from "./modalsReduser";
import { waterReducer } from "./water/waterSlice";


const persistConfig = {
  key: "user",
  whitelist: ["token"],

  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    modals: modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

