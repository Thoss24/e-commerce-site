import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart_slice';
import wishlistReducer from './wishlist_slice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store