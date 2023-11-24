import { WishlistItem } from "../models/WishlistItem";

export const addItemToWishlist = async (id: number, item: WishlistItem) => {
    const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/wishlist/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw Error("Could not add item to wishlist!")
    };

    console.log(response)
};

export const removeItemFromWishlist = async (id: number) => {
    const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/wishlist/${id}.json`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw Error("Could not remove item from wishlist!")
    }
};