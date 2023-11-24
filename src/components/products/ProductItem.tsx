import classes from "./ProductItem.module.css";
import { wishlistActions } from "../../store/wishlist_slice";
import { cartActions } from "../../store/cart_slice";
import { useAppDispatch } from "../../hooks/hooks";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { CartItem } from "../../models/CartItem";
import { WishlistItem } from "../../models/WishlistItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { motion, useAnimationControls, useAnimate } from "framer-motion";
import { addItemToCart } from "../../store/cart_actions";
import { addItemToWishlist, removeItemFromWishlist } from "../../store/wishlist_actions";
import * as React from "react";

const ProductItem: React.FC<{
  name: string;
  imageUrl: string;
  itemDescription: string;
  id: number;
}> = (props) => {

  const dispatch = useAppDispatch();

  const [scope, animate] = useAnimate();

  const quantity = React.useRef<HTMLInputElement>(null);

  const controls = useAnimationControls();

  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  const itemInWishlistIndex = wishlist.findIndex(item => item.id === props.id);
  const itemInWishlist = wishlist[itemInWishlistIndex];

  const controlsVariants = {
    buttonClicked : {
      scale: [1, 1.1, 1],
      transition: { type: "bounce", duration: 0.3 },
    },
  };

  const addToWishlistHandler = () => {
    let wishlistItem: WishlistItem = {
      name: props.name,
      id: props.id,
      price: 12,
      img: props.imageUrl,
      quantity: 0
    };
    if (itemInWishlist) {
      removeItemFromWishlist(props.id)
      dispatch(wishlistActions.removeWishlistItem(props.id))
      animate('div', {
        scale: 1
      },{
        type: 'spring',
        duration: 0.6
      })
    } else {
      addItemToWishlist(props.id, wishlistItem);
      dispatch(wishlistActions.addWishlistItem(wishlistItem));
      animate('div', {
        y: [-10, 0],
        scale: 1.2,
        opacity: [0.5, 10]
      }, {
        type: 'spring',
        duration: 0.6
      })
    }
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
    addItemToCart(cartItem, props.id)
  };

  return (
    <motion.li className={classes.shell} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ type: "bounce" }}>
      <div className={classes["icon-container"]}>
        <div className={classes['add-to-cart-container']}>
          <motion.span variants={controlsVariants} animate={controls} onClick={() => controls.start("buttonClicked")} className={classes.span}>
          <FaShoppingCart className={classes.icon} onClick={addToCartHandler}/>
          </motion.span>
          <label htmlFor="quantity">Qty</label>
          <input type="number" id="quantity" ref={quantity} defaultValue={1}/>
        </div>
        <motion.span ref={scope} className={classes.span} onClick={addToWishlistHandler}>
          <div>
            <FaHeart className={classes.icon} color={itemInWishlist ? "black" : "white"} />
          </div>
        </motion.span>
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
