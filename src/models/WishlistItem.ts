export class WishlistItem {
    name: string;
    id: number;
    img: string;
    price: number;
    quantity: number

    constructor (name: string, id: number, img: string, price: number, quantity: number) {
        this.name = name;
        this.id = id;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
    }
}