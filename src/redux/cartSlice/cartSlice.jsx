import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        // Add product to cart
        addItem: (state, action) => {
            const item = action.payload;

            const exists = state.some(
                existingItem => existingItem.name === item.name
            );

            if (!exists) {
                state.push(item);
            }
        },

        removeItem: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
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