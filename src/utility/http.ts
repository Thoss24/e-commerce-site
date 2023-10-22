import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
        throw Error('Could not load products')
    };

    const data = await response.json()

    return data
};

export const fetchProduct = async (id: number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
        throw Error('Could not load products')
    };

    const data = await response.json()

    return data
}