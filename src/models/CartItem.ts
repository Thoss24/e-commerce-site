// Cart Item type
export class CartItem {
  name: string;
  id: number;
  quantity: number;
  price: number;
  img: string;

  constructor(name: string, id: number, quantity: number, price: number, img: string) {
    this.name = name;
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.img = img;
  }
}
