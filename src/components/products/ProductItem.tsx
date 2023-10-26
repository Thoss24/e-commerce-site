import classes from './ProductItem.module.css';
import { wishlistActions } from '../../store/wishlist_slice';
import { cartActions } from '../../store/cart_slice';
import { useAppDispatch } from '../../hooks/hooks';
import { FaHeart } from 'react-icons/fa';

const ProductItem: React.FC<{name: string, imageUrl: string, itemDescription: string, id: number, showItem: () => void}> = (props) => {

    const dispatch = useAppDispatch();

    const addToWishlistHandler = () => {
        dispatch(wishlistActions.addWishlistItem("test"))
    };

    const addToCartHandler = () => {

    };

    return (
        <div className={classes.shell} onClick={props.showItem}>
            <div className={classes['heart-icon-container']}>
                <FaHeart className={classes['heart-icon']} />
            </div>
            <img src={props.imageUrl} alt={props.imageUrl}></img>
            <h2>{props.name}</h2>
        </div>
    )
};

export default ProductItem