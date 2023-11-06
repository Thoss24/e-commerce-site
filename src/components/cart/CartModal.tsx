import { useAppSelector } from "../../hooks/hooks";
import CartItem from "./CartItem";
import classes from "./CartModal.module.css"

const CartModal: React.FC<{ hideCart: () => void}> = (props) => {

    const cart = useAppSelector(state => state.cart.cart);
    
    return (
        <>
        <div className={classes.background}/>
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
            <h2>Shopping Cart</h2>
            <ul className={classes['cart-items']}>
                {cart.length === 0 ? <h2 className={classes.empty}>Cart Is Empty.</h2> : cart.map(item => (
                    <CartItem name={item.name} img={item.img} quantity={item.quantity} price={item.price} id={item.id}/> 
                ))}
            </ul>
            <div>
                <p><strong>Cart total</strong></p>
                <button onClick={props.hideCart}>Close Cart</button>
            </div>
            </div>
        </div>
        </>
    )
};

export default CartModal