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

import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "./modalsReduser";
import { waterReducer } from "./water/waterSlice";

export const store = configureStore({
  reducer: { modals: modalsReducer, water: waterReducer },
});
