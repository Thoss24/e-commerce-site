import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import CartItem from "./CartItem";
import classes from "./CartItem.module.css";

const CartModal: React.FC<{ hideCart: () => void}> = (props) => {

    const dispatch = useAppDispatch();

    const cart = useAppSelector(state => state.cart.cart);
    
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <CartItem name={item.name} img={item.img} quantity={item.quantity} price={item.price} id={item.id}/> 
                ))}
            </ul>
            <div>
                <p><strong>Cart total</strong></p>
                <button onClick={props.hideCart}>Close Cart</button>
            </div>
        </div>
    )
};

export default CartModal