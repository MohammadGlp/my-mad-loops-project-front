import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./../Core/services/api/apiSlice";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
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
import cartReducer from "./cart/cartSlice";
import bookMarkReducer from "./bookmark/bookmarkSlice";
import authReducer from "./auth/authSlice";
import authSessionReducer from "./auth/authSessionSlice";

const persistConfig = {
  key: "root",
  storage,
};

const authSessionConfig = {
  key: "auth",
  storage: storageSession,
};

const authSessionPersist = persistReducer(
  authSessionConfig,
  authSessionReducer
);
const authPersist = persistReducer(persistConfig, authReducer);
const cartPersist = persistReducer(persistConfig, cartReducer);
const bookMarkPersist = persistReducer(persistConfig, bookMarkReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authPersist,
    authSession: authSessionPersist,
    cart: cartPersist,
    bookMark: bookMarkPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
