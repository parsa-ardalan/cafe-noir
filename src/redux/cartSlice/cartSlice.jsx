import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        // Add product to cart
        addItem: (state, action) => {

        },

        removeItem: (state, action) => {

        },

        // Increase quantity
        increaseQuantity: (state, action) => {

        },

        // Decrease quantity
        decreaseQuantity: (state, action) => {

        },

        // Clear entire cart
        clearCart: (state) => {

        },
    },
});

export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;