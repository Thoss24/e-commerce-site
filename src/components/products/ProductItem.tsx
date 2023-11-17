import classes from "./ProductItem.module.css";
import { wishlistActions } from "../../store/wishlist_slice";
import { cartActions } from "../../store/cart_slice";
import { useAppDispatch } from "../../hooks/hooks";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { CartItem } from "../../models/CartItem";
import { WishlistItem } from "../../models/WishlistItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import * as React from "react";

const ProductItem: React.FC<{
  name: string;
  imageUrl: string;
  itemDescription: string;
  id: number;
}> = (props) => {
  const dispatch = useAppDispatch();

  const quantity = React.useRef<HTMLInputElement>(null);

  const controls = useAnimationControls();

  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  const itemInWishlistIndex = wishlist.findIndex(item => item.id === props.id);
  const itemInWishlist = wishlist[itemInWishlistIndex];

  const controlsVariants = {
    buttonClicked : {
      scale: 1.2,
      transition: { ease: "linear", duration: 2 }
    },
    initialState : {
      scale: 1,
    }
  };

  const addToWishlistHandler = () => {
    let wishlistItem: WishlistItem = {
      name: props.name,
      id: props.id,
      price: 12,
      img: props.imageUrl,
      quantity: 0
    };
    dispatch(wishlistActions.addWishlistItem(wishlistItem));
  };

  const addToCartHandler = () => {
    let cartItem: CartItem = {
      name: props.name,
      id: props.id,
      quantity: Number(quantity.current?.value),
      price: 12,
      img: props.imageUrl,
    };
    dispatch(cartActions.addItem(cartItem));
  };

  return (
    <motion.li className={classes.shell} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ type: "bounce" }}>
      <div className={classes["icon-container"]}>
        <div className={classes['add-to-cart-container']}>
          <FaShoppingCart className={classes.icon} onClick={addToCartHandler} />
          <label htmlFor="quantity">Qty</label>
          <input type="number" id="quantity" ref={quantity} defaultValue={1}/>
        </div>
        <AnimatePresence>
        <motion.span variants={controlsVariants} initial="initialState" animate={controls} onClick={() => !itemInWishlist && controls.start("buttonClicked")} className={classes.span}>
        <FaHeart className={classes.icon} onClick={addToWishlistHandler} color={itemInWishlist ? "black" : "white"} />
        </motion.span>
        </AnimatePresence>
      </div>
      <Link to={`/products/${props.id}`}>
      <div className={classes.content}>
        <img src={props.imageUrl} alt={props.imageUrl}></img>
        <h4>{props.name}</h4>
      </div>
      </Link>
    </motion.li>
  );
};

export default ProductItem;
