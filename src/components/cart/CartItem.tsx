import { CartItem as CartItemType } from "../../models/CartItem";

const CartItem: React.FC<CartItemType> = (props) => {

    const itemTotal = props.price * props.quantity;

  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <img src={props.img} alt={`Image id ${props.id}`} />
      </div>
      <div>
        <div>
          <label htmlFor="quantity">Qty</label>
          <input type="number" id="quantity" defaultValue={props.quantity}/>
        </div>
        <p>
          <strong>{itemTotal}</strong>
        </p>
      </div>
    </li>
  );
};

export default CartItem;
