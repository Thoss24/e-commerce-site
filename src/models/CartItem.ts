// Cart Item type
export class CartItem {
  name: string;
  id: number;
  quantity: number;

  constructor(name: string, id: number, quantity: number) {
    this.name = name;
    this.id = id;
    this.quantity = quantity;
  }
}
