import { CartItem } from "../models/CartItem";

export const addItemToCart = async (item: CartItem, id: number) => {

    let response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw Error("Could not add item to cart!")
    };
};

export const IncreaseCartItemAmount = async (item: CartItem, id: number) => {
    const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw Error("Could not add item to cart!")
    };
}

export const removeItemFromCart = async (item: CartItem) => {
    const response = await fetch('https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'DELETE',
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw Error("Could not add item to cart!")
    };
};