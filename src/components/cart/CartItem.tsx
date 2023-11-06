import { CartItem as CartItemType } from "../../models/CartItem";
import classes from "./CartItem.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from "../../store/cart_slice";

const CartItem: React.FC<CartItemType> = (props) => {

    const itemTotal = props.price * props.quantity;

    const dispatch = useAppDispatch();

    const cartItem: CartItemType = {
      name: props.name,
      id: props.id,
      quantity: props.quantity,
      price: props.price,
      img: props.img
    };

    const increaseItemQuantityHandler = () => {
      dispatch(cartActions.addItem(cartItem))
    };

    const decreaseItemQuantityHandler = () => {
      dispatch(cartActions.removeItem(cartItem))
    };

  return (
    <li className={classes['cart-item']}>
      <div className={classes['image-container']}>
        <img src={props.img} alt={`Image id ${props.id}`} />
      </div>
      <div className={classes['qty-price-container']}>
      <h2>{props.name}</h2>
      <div className={classes['qty-container']}>
        <p>Qty: <strong>{props.quantity}</strong></p>
        <div className={classes['buttons-container']}>
          <button onClick={decreaseItemQuantityHandler}>-</button>
          <button onClick={increaseItemQuantityHandler}>+</button>
        </div>
      </div>
        <p>Item Total: 
          <strong> £{itemTotal}</strong>
        </p>
      </div>
    </li>
  );
};

export default CartItem;
