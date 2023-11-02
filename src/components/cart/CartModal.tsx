import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import CartItem from "./CartItem";

const CartModal = () => {

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
                <button>Close Cart</button>
            </div>
        </div>
    )
};

export default CartModal