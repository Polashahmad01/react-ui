const NODE_ENV = import.meta.env.VITE_NODE_ENV;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: NODE_ENV !== "production",
});

export default store;
