import { createSlice } from "@reduxjs/toolkit";
import { WishlistItem } from "../models/WishlistItem";
import { PayloadAction } from "@reduxjs/toolkit";

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
                state.wishlist.filter(item => item.id !== action.payload)
            } else {
                return
            };
        },
    }
});

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice.reducer;