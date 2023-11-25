import { createSlice } from "@reduxjs/toolkit";
import { WishlistItem } from "../models/WishlistItem";
import { PayloadAction } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

type WishListStateObj = {
    wishlist: WishlistItem[];
    wishlistTotal: number;
};

const defaultWishlistState: WishListStateObj = {
    wishlist: [],
    wishlistTotal: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: defaultWishlistState,
    reducers: {
        replaceWishlist (state, action: PayloadAction<WishlistItem[]>) {
            for (let i in action.payload) {
                if (action.payload[i] === null) {
                  continue
                } else {
                  const existingWishlistItemIndex = state.wishlist.findIndex((item) => item.id === action.payload[i].id);
                  const existingWishlistItem = state.wishlist[existingWishlistItemIndex];
                  if (existingWishlistItem) {
                    continue
                  } else {
                    state.wishlist.push(action.payload[i])
                    state.wishlistTotal += action.payload[i].quantity;
                  }
                }
                console.log(current(state))
              }
        },
        addWishlistItem (state, action: PayloadAction<WishlistItem>) {
            const existingWishlistItemIndex = state.wishlist.findIndex(item => item.id === action.payload.id);
            const existingWishlistItem = state.wishlist[existingWishlistItemIndex];

            if (existingWishlistItem) {
                alert("Item already in wishlist") // add side effect here?
                return
            } else {
                state.wishlist.push(action.payload)
            };
        },
        removeWishlistItem (state, action: PayloadAction<number>) {
            const existingWishlistItemIndex = state.wishlist.findIndex(item => item.id === action.payload);
            const existingWishlistItem = state.wishlist[existingWishlistItemIndex];

            if (existingWishlistItem) {
                state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
                console.log(current(state))
            } else {
                return
            };
        },
    }
});

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice.reducer;