import thunkMiddleware from "redux-thunk";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "./moviesRedux";

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = configureStore({
  reducer: moviesReducer,
  middleware: [logger],
  enhancers: [composedEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
