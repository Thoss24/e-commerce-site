import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/CartItemClass";

type CartStateObj = {
  cart: CartItem[];
  cartAmount: number;
};

const defaultCartState: CartStateObj = {
  cart: [],
  cartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addItem(state, action: PayloadAction<{ name: string; amount: number }>) {
      console.log(action.payload);
    },
    removeItem(
      state,
      action: PayloadAction<{ name: string; amount: number }>
    ) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
