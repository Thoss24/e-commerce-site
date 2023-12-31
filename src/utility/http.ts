import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "Could not load products"}), {
            status: 500
        })
    };

    const data = await response.json()

    return data
};

export const fetchProduct = async (id: ( string | undefined )) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "Could not load product"}), {
            status: 500
        })
    };

    const data = await response.json()

    return data
};

export const fetchImages = async () => {
    const response = await fetch("https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/images.json")

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "Could not load images"}), {
            status: 500
        })
    }

    const data = await response.json()

    return data
};

export const fetchGalleryImages = async () => {
    const response = await fetch("https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/gallery_images.json")

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "Could not load images"}), {
            status: 500
        })
    }

    const data = await response.json()

    return data
};

