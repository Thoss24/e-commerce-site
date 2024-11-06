import classes from "./ProductDetailsPage.module.css";
import { fetchProduct, fetchProducts } from "../../utility/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { cartActions } from "../../store/cart_slice";
import { wishlistActions } from "../../store/wishlist_slice";
import { CartItem } from "../../models/CartItem";
import { WishlistItem } from "../../models/WishlistItem";
import { motion, useAnimate } from "framer-motion";
import Button from "../../components/ui/Button";
import ProductItem from "../../components/products/ProductItem";
import { FetchedProductItem } from "../../models/FetchedProductItem";
import { addItemToWishlist, removeItemFromWishlist } from "../../store/wishlist_actions";
import { addItemToCart } from "../../store/cart_actions";
import * as React from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [scope, animate] = useAnimate();

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const wishlist = useAppSelector(state => state.wishlist.wishlist);
  const itemInWishlist = wishlist.findIndex(item => item.id === Number(id));

  const dispatch = useAppDispatch();

  const productItemQuantityRef = React.useRef<HTMLInputElement>(null);

  const addToCartHandler = () => {
    const cartItem: CartItem = {
      name: data.name,
      id: data.id,
      price: data.price,
      quantity: Number(productItemQuantityRef.current?.value),
      img: data.image,
    };
    dispatch(cartActions.addItem(cartItem));
    addItemToCart(cartItem, Number(id));
  };

  const addToWishlistHandler = () => {
    const wishlistItem: WishlistItem = {
      name: data.name,
      id: data.id,
      price: data.price,
      quantity: Number(productItemQuantityRef.current?.value),
      img: data.image,
    };
    if (itemInWishlist >= 0) {
      removeItemFromWishlist(Number(id))
      dispatch(wishlistActions.removeWishlistItem(Number(id)))
      animate('.checkout-items-positioning-wishlist', {
        scale: 1
      },{
        type: 'spring',
        duration: 0.6
      })
    } else {
      addItemToWishlist(Number(id), wishlistItem);
      dispatch(wishlistActions.addWishlistItem(wishlistItem));
      animate('.checkout-items-positioning-wishlist', {
        y: [-10, 0],
        scale: 1.2,
        opacity: [0.5, 10]
      }, {
        type: 'spring',
        duration: 0.6
      })
    }
  };

  let productDetails;

  if (isLoading) {
    productDetails = (
      <p>
        <strong>Loading...</strong>
      </p>
    );
  }

  if (data) {
    productDetails = (
      <div ref={scope} className={classes["product-details-container"]}>
        <h1>{data.title}</h1>
        <img
          src={data.image}
          alt={data.title}
          className={classes["product-image"]}
        />
        <div className={classes["product-description-section"]}>
          <h2>Product Information</h2>
          <p>{data.description}</p>
        </div>
        <div className={classes["checkout-container"]}>
          <div className={classes["checkout-items-positioning"]}>
            <label htmlFor="quantity">Qty: </label>
            <input
              type="number"
              id="quantity"
              defaultValue={1}
              ref={productItemQuantityRef}
            />
          </div>
          <div className={classes["checkout-items-positioning"]}>
            <p>
              <strong>£ {data.price}</strong>
            </p>
          </div>

          <div className={classes["checkout-items-positioning"]}>
            <Button action={addToCartHandler} name={"Add to cart"} />
          </div>
          <motion.div
            className="checkout-items-positioning-wishlist"
            onClick={addToWishlistHandler}
          >
            <FaHeart color={itemInWishlist >= 0 ? "black" : "lightgrey"}/>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
<div className={classes["product-details-page-container"]}>
  {productDetails}
  
  <div className={classes["products-by-category"]}>
    <h2>Browse Similar Products</h2>
    <div className={classes["products-container"]}>
      {products &&
        products.map((item: FetchedProductItem) =>
          item.category === data?.category && item.id !== data?.id ? (
            <ProductItem
              key={item.id} // Add a key for each mapped item
              name={item.title}
              imageUrl={item.image}
              itemDescription={item.description}
              id={item.id}
            />
          ) : null
        )}
    </div>
  </div>
</div>
  );
};

export default ProductDetailsPage;
