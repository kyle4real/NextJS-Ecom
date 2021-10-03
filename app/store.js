import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import uiSlice from "./slices/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        product: productSlice.reducer,
    },
});

export default store;
