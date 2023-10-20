import { createSlice } from "@reduxjs/toolkit";

type CartStateObj = {
    cart: object[];
    cartAmount: number;
};

const defaultCartState: CartStateObj = {
    cart: [],
    cartAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultCartState,
    reducers: {
        addItem(state) {

        },
        removeItem(state) {

        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;