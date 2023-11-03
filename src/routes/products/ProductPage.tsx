import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from './ProductPage.module.css'
import ProductDetailModal from "../../components/products/ProductDetailModal";
import { useState, useContext } from 'react';
import { ModalContext } from "../../store/modal_context";

const ProductPage = () => {
    
    const [modalDisplaying, setModalDisplaying] = useState(false);

    const productItemCtx = useContext(ModalContext);

    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const hideModal = () => {
        setModalDisplaying(false)
    };

    const showModal = () => {
        productItemCtx.setProductItemDisplaying(true)
    };

    const modal = (
        <ProductDetailModal hide={hideModal}/>
    );

    return (
        <>
        {productItemCtx.productItemDisplaying && modal}
        <div className={classes.products}>
        {data ? data.map((item: ProductItemType) => (
            <ProductItem key={item.id} id={item.id} name={item.title} imageUrl={item.image} itemDescription={item.description} showItem={showModal}/>
        )) : 'Loading...'}
        </div>
        </>
    )
};

export default ProductPage;