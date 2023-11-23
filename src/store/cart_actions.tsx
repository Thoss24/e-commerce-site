import { CartItem } from "../models/CartItem";

export const fetchCartItems = async () => {

    const response = await fetch('https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

    if (!response.ok) {
        throw Error("Could not load cart items!")
    }

    const cart = await response.json();
    
    return cart
 
};

export const addItemToCart = async (item: CartItem, id: number) => {

    const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`, {
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

export const removeItemFromCart = async (item: CartItem, config: {id: number, method: string}) => {
    const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart/${config.id}.json`, {
        method: config.method,
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw Error("Could not add item to cart!")
    };
};