"use client";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import userReducer from "./features/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger } from "./middleware/rtkQueryErrorLogger";

export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware, rtkQueryErrorLogger),
    devTools: process.env.NODE_ENV !== "production",
  });

setupListeners(makeStore().dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
