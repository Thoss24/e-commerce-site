import CartItem from "./CartItem";
import classes from "./CartModal.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem as CartItemType } from "../../models/CartItem";
import { useAppSelector } from "../../hooks/hooks";
import Button from "../ui/Button";

const CartModal: React.FC<{ hideCart: () => void }> = (props) => {
  const cart = useAppSelector((state) => state.cart.cart);

  const cartTotal =
    cart.length >= 1 &&
    cart
      .map((item) => item.price * item.quantity)
      .reduce((acc, item) => {
        return (acc += item);
      });

  let cartTotalDisplay = (
    <p className={classes["cart-total-container"]}>
      Cart Total:
      <strong> £{cartTotal}</strong>
    </p>
  );

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
          <AnimatePresence mode="wait">
          {cart && cart.length === 0 && <motion.h2 key="fallback" initial={{ opacity: 0, y: -20}} animate={{ opacity: 1, y: 0}} exit={{ opacity: 0, y: -20}}>Cart is empty.</motion.h2>}
            {cart.length >= 1 && (
              <>
                <motion.div exit={{ y: -30, opacity: 0}} className={classes["cart-content"]}>
                  <motion.ul
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className={classes["cart-items"]}
                  >
                    {cart &&
                      cart.map(
                        (item: CartItemType) =>
                          item !== null && (
                            <CartItem
                              key={item.id}
                              name={item.name}
                              img={item.img}
                              quantity={item.quantity}
                              price={item.price}
                              id={item.id}
                            />
                          )
                      )}
                  </motion.ul>
                </motion.div>
                <motion.div exit={{ y: - 10, opacity: 0}} key="total" className={classes.close}>{cartTotalDisplay}</motion.div>
              </>
            )}
          </AnimatePresence>
          <Button name={"Close Cart"} action={props.hideCart}></Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CartModal;
