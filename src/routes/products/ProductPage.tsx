import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from './ProductPage.module.css'
import ProductDetailModal from "../../components/products/ProductDetailModal";
import { useState } from 'react';

const ProductPage = () => {
    
    const [modalDisplaying, setModalDisplaying] = useState(false)

    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const hideModal = () => {
        setModalDisplaying(false)
    };

    const showModal = () => {
        setModalDisplaying(true)
    };

    const modal = (
        <ProductDetailModal hide={hideModal}/>
    );

    return (
        <>
        {modalDisplaying && modal}
        <div className={classes.products}>
        {data ? data.map((item: ProductItemType) => (
            <ProductItem key={item.id} id={item.id}  name={item.title} imageUrl={item.image} itemDescription={item.description} showItem={showModal}/>
        )) : 'Loading...'}
        </div>
        </>
    )
};

export default ProductPage;