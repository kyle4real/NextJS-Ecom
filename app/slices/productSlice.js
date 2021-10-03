import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "ui",
    initialState: {
        products: [],
        pagination: {
            perPage: 15,
            currentPage: 1,
        },
    },
    reducers: {
        // PAGINATION
        changePerPage(state, action) {
            state.pagination.perPage = action.payload;
        },
        incrementCurrentPage(state) {
            state.pagination.currentPage = state.pagination.currentPage + 1;
        },
        decrementCurrentPage(state) {
            state.pagination.currentPage = state.pagination.currentPage - 1;
        },
        changeCurrentPage(state, action) {
            state.pagination.currentPage = action.payload;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;
