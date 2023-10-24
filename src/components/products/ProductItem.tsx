import classes from './ProductItem.module.css';
import ProductDetailModal from './ProductDetailModal';
import { useState } from 'react';

const ProductItem: React.FC<{name: string, imageUrl: string, itemDescription: string, id: number}> = (props) => {

    const [modalDisplaying, setModalDisplaying] = useState(false)

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
        <div className={modalDisplaying ? classes['product-item-container'] : ''}>
        {modalDisplaying && modal}
        <div className={classes.shell} onClick={showModal}>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <img src={props.imageUrl} alt={props.imageUrl}></img>
            <p>{props.name}</p>
        </div>
        </div>
    )
};

export default ProductItem