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
        addWishlistItem (state, action: PayloadAction<string>) {
            console.log(action.payload)
        },
        removeWishlistItem () {

        },
    }
});

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice.reducer;