import { useAppSelector } from "../../hooks/hooks";
import CartItem from "./CartItem";
import classes from "./CartModal.module.css"

const CartModal: React.FC<{ hideCart: () => void}> = (props) => {

    const cart = useAppSelector(state => state.cart.cart);
    
    return (
        <div className={classes.modal}>
        <div className={classes.background}/>
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
            <h2>Shopping Cart</h2>
            <div className={classes['cart-content']}>
            <ul className={classes['cart-items']}>
                {cart.length === 0 ? <h2 className={classes.empty}>Cart Is Empty.</h2> : cart.map(item => (
                    <CartItem name={item.name} img={item.img} quantity={item.quantity} price={item.price} id={item.id}/> 
                ))}
            </ul>
            </div>
            <div className={classes.close}>
                <p><strong>Cart total</strong></p>
                <button onClick={props.hideCart}>Close Cart</button>
            </div>
            </div>
        </div>
        </div>
    )
};

export default CartModal