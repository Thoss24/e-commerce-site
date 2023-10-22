import classes from './ProductItem.module.css';
import { useState } from 'react';

const ProductItem: React.FC<{name: string, imageUrl: string, itemDescription: string, id: number}> = (props) => {

    const [isDisplaying, setIsDisplaying] = useState(false);

    return (
        <div className={classes.shell}>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <img src={props.imageUrl} alt={props.imageUrl}></img>
            <p>{props.name}</p>
        </div>
    )
};

export default ProductItem