import { combineSlices, configureStore } from "@reduxjs/toolkit";
// import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { loginSlice } from "./features/login/loginSlice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(loginSlice);

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) => {
    //   //   return getDefaultMiddleware().concat(quotesApiSlice.middleware);
    //   return;
    // },
  });
};
