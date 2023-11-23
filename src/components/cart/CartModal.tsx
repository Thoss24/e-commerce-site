import CartItem from "./CartItem";
import classes from "./CartModal.module.css";
import { motion } from "framer-motion";
import { CartItem as CartItemType } from "../../models/CartItem";
import { useAppSelector } from "../../hooks/hooks";

const CartModal: React.FC<{ hideCart: () => void }> = (props) => {

  const cart = useAppSelector(state => state.cart.cart);

  return (
    <div className={classes.modal}>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={classes.background}
      />
      <div className={classes["cart-container"]}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={classes.cart}
        >
          <h2>Shopping Cart</h2>
          <div className={classes["cart-content"]}>
            <motion.ul variants={{ visible: { transition: { staggerChildren: 0.1}} }} className={classes["cart-items"]}>
              {cart && cart.length === 0 ? (
                <h2 className={classes.empty}>Cart Is Empty.</h2>
              ) : (
              cart && cart.map((item: CartItemType) =>
                item !== null &&
                  <CartItem
                    name={item.name}
                    img={item.img}
                    quantity={item.quantity}
                    price={item.price}
                    id={item.id}
                  />
                )
              )}
            </motion.ul>
          </div>
          <div className={classes.close}>
            <p>
              <strong>Cart total</strong>
            </p>
            <button onClick={props.hideCart}>Close Cart</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartModal;
