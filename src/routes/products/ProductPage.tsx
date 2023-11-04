import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from './ProductPage.module.css'
import ProductDetailModal from "../../components/products/ProductDetailModal";
import { useContext } from 'react';
import { ModalContext } from "../../store/modal_context";
import CartModal from "../../components/cart/CartModal";

const ProductPage = () => {

    const productItemCtx = useContext(ModalContext);

    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const hideProductModal = () => {
        productItemCtx.setProductItemDisplaying(false)
    };

    const showProductModal = () => {
        productItemCtx.setProductItemDisplaying(true)
    };

    const hideCartModal = () => {
        productItemCtx.setCartDisplaying(false)
    };

    const modal = (
        <ProductDetailModal hide={hideProductModal}/>
    );

    const cartModal = (
        <CartModal hideCart={hideCartModal}/>
    );

    return (
        <>
        {productItemCtx.cartDisplaying && cartModal}
        {productItemCtx.productItemDisplaying && modal}
        <div className={classes.products}>
        {data ? data.map((item: ProductItemType) => (
            <ProductItem key={item.id} id={item.id} name={item.title} imageUrl={item.image} itemDescription={item.description} showItem={showProductModal}/>
        )) : 'Loading...'}
        </div>
        </>
    )
};

export default ProductPage;