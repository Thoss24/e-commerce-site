import classes from './ProductItem.module.css';

const ProductItem: React.FC<{name: string, imageUrl: string, itemDescription: string, id: number, showItem: () => void}> = (props) => {

    return (
        <div className={classes.shell} onClick={props.showItem}>
            <img src={props.imageUrl} alt={props.imageUrl}></img>
            <h2>{props.name}</h2>
        </div>
    )
};

export default ProductItem