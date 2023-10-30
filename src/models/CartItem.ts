// Cart Item type
export class CartItem {
  name: string;
  id: number;
  quantity: number;
  price: number;

  constructor(name: string, id: number, quantity: number, price: number) {
    this.name = name;
    this.id = id;
    this.quantity = quantity;
    this.price = price;
  }
}
