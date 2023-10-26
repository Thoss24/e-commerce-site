import { createSlice } from "@reduxjs/toolkit";
import { WishlistItem } from "../models/WishlistItem";

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
        addWishlistItem (state, action: Payload) {

        },
        removeWishlistItem () {

        },
    }
});

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice.reducer;