import classes from './ProductItem.module.css';
import { useState } from 'react';
import ProductDetailModal from './ProductDetailModal';

const ProductItem: React.FC<{name: string, imageUrl: string, itemDescription: string, id: number}> = (props) => {

    const [isDisplaying, setIsDisplaying] = useState(false);

    const modal = (
        <ProductDetailModal />
    );

    const inspectItemHandler = () => {
        setIsDisplaying(true)
    };

    return (
        <div className={isDisplaying ? classes['product-item-container'] : ''}>
        {isDisplaying && modal}
        <div className={classes.shell} onClick={inspectItemHandler}>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <img src={props.imageUrl} alt={props.imageUrl}></img>
            <p>{props.name}</p>
        </div>
        </div>
    )
};

export default ProductItem