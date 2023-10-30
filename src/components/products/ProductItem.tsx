import classes from './ProductItem.module.css';
import { wishlistActions } from '../../store/wishlist_slice';
import { cartActions } from '../../store/cart_slice';
import { useAppDispatch } from '../../hooks/hooks';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { CartItem } from '../../models/CartItem';

const ProductItem: React.FC<{name: string, imageUrl: string, itemDescription: string, id: number, showItem: () => void}> = (props) => {

    const dispatch = useAppDispatch();

    const addToWishlistHandler = () => {
        dispatch(wishlistActions.addWishlistItem("test"))
    };

    const addToCartHandler = () => {
        let cartItem: CartItem = {
            name: props.name,
            id: props.id,
            quantity: 1,
            price: 12
        };
        dispatch(cartActions.addItem(cartItem))
    };

    return (
        <div className={classes.shell}>
            <div className={classes['icon-container']}>
                <FaShoppingCart className={classes.icon} onClick={addToCartHandler}/>
                <FaHeart className={classes.icon} onClick={addToWishlistHandler}/>
            </div>
            <div className={classes.content} onClick={props.showItem}>
            <img src={props.imageUrl} alt={props.imageUrl}></img>
            <h2>{props.name}</h2>
            </div>
        </div>
    )
};

export default ProductItem