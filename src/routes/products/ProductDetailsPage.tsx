import classes from "./ProductDetailsPage.module.css";
import { fetchProduct, fetchProducts } from "../../utility/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from "../../store/cart_slice";
import { wishlistActions } from "../../store/wishlist_slice";
import { CartItem } from "../../models/CartItem";
import { WishlistItem } from "../../models/WishlistItem";
import ProductItem from "../../components/products/ProductItem";
import { FetchedProductItem } from "../../models/FetchedProductItem";
import * as React from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

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
  };

  const addToWishlistHandler = () => {
    const wishlistItem: WishlistItem = {
      name: data.name,
      id: data.id,
      price: data.price,
      quantity: Number(productItemQuantityRef.current?.value),
      img: data.image,
    };
    dispatch(wishlistActions.addWishlistItem(wishlistItem));
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
      <div className={classes["product-details-container"]}>
        <h1>{data.title}</h1>
        <img
          src={data.image}
          alt={data.title}
          className={classes["product-image"]}
        />
        <h2>{data.description}</h2>
        <div className={classes["checkout-container"]}>
          <div>
            <label htmlFor="quantity">Qty: </label>
            <input
              type="number"
              id="quantity"
              defaultValue={1}
              ref={productItemQuantityRef}
            />
          </div>
          <p>
            <strong>£ {data.price}</strong>
          </p>
          <button onClick={addToCartHandler}>Add to cart</button>
          <div onClick={addToWishlistHandler}>
            <FaHeart />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {productDetails}
      <div className={classes['products-by-category']}>
      <h3>Browse similar products</h3>
      <div className={classes['products-container']}>
        {products.map((item: FetchedProductItem) =>
          item.category === data?.category && item.id !== data?.id ? (
            <ProductItem
              name={item.title}
              imageUrl={item.image}
              itemDescription={item.description}
              id={item.id}
            />
          ) : null
        )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
