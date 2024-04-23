import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice.js";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});