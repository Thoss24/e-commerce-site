import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from './ProductPage.module.css'

const ProductPage = () => {

    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    return (
        <div className={classes.products}>
        {data ? data.map((item: ProductItemType) => (
            <ProductItem key={item.id} id={item.id}  name={item.title} imageUrl={item.image} itemDescription={item.description}/>
        )) : 'Loading...'}
        </div>
    )
};

export default ProductPage;