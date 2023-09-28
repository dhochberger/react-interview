import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import filtersReducer from "./filtersRedux";
import moviesReducer from "./moviesRedux";

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = configureStore({
  reducer: combineReducers({ movies: moviesReducer, filters: filtersReducer }),
  middleware: [logger],
  enhancers: [composedEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
