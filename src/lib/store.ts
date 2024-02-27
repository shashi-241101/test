import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import loaderReducer from "./features/loaderSlice";
import chartSlice from "./features/chartSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkModeReducer,
    loader: loaderReducer,
    setData: chartSlice,
    resetData: chartSlice,
  },
});
