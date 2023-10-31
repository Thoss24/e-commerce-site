import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/CartItem";

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
    addItem(state, action: PayloadAction<{ name: string; price: number, id: number, quantity: number }>) {
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity
      } else {
        state.cart.push(action.payload)
      }
      console.log(current(state.cart))
    },
    removeItem(state, action: PayloadAction<{ name: string; price: number, id: number, quantity: number }>) {
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        state.cart.filter((item) => item.id !== action.payload.id)
      } else {
        existingCartItem.quantity--
      }
      console.log(current(state.cart))
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
