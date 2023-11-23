import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/CartItem";
import { WishlistItem } from "../models/WishlistItem";

type CartStateObj = {
  cart: (CartItem|WishlistItem)[];
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
    replaceCart(state, action: PayloadAction<CartItem[]>) {
      for (let i in action.payload) {
        if (action.payload[i] === null) {
          continue
        } else {
          const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload[i].id);
          const existingCartItem = state.cart[existingCartItemIndex];
          if (existingCartItem) {
            continue
          } else {
            state.cart.push(action.payload[i])
          }
        }
        console.log(current(state))
      }
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem) {
        state.cartAmount ++
      } else {
        state.cartAmount += action.payload.quantity
      }

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.cart.push(action.payload)
      }
      console.log(current(state.cart))
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      state.cartAmount --
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem.quantity === 0) {
        return
      }

      if (existingCartItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
      } else {
        existingCartItem.quantity--
      }
    },
    addWishlistItemToCart (state, action: PayloadAction<WishlistItem>) {
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      const existingCartItem = state.cart[existingCartItemIndex]; 

      if (existingCartItem) {
        alert("Item already in cart") // add side effect here?
      } else {
        state.cart.push(action.payload)
      }
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
