import { wishlistActions } from '../../store/wishlist_slice';
import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from '../../store/cart_slice';
import { WishlistItem as WishlistItemType } from '../../models/WishlistItem';
import classes from './WishlistItem.module.css';
import Button from '../../components/ui/Button';

const WishlistItem: React.FC<WishlistItemType> = (props) => {

    const dispatch = useAppDispatch();

    const addWishlistItemToCartHandler = () => {
        const wishlistItem: WishlistItemType = {
            name: props.name,
            id: props.id,
            price: props.price,
            img: props.img,
            quantity: 1
        }
        dispatch(cartActions.addWishlistItemToCart(wishlistItem))
    };

    const removeWishlistItemHandler = () => {
        dispatch(wishlistActions.removeWishlistItem(props.id))
    };

    return (
        <li className={classes['wishlist-item']}>
            <img src={props.img} alt={props.name}/>
            <h4>{props.name}</h4>
            <p><strong>£ {props.price}</strong></p>
            <div className={classes['buttons-container']}>
            <Button name={'Remove'} action={removeWishlistItemHandler}/>
            <Button name={'Add to cart'} action={addWishlistItemToCartHandler}/>
            </div>
        </li>
    )
};

export default WishlistItem