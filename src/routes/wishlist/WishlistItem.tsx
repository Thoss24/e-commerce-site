import { wishlistActions } from '../../store/wishlist_slice';
import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from '../../store/cart_slice';
import { WishlistItem as WishlistItemType } from '../../models/WishlistItem';

const WishlistItem: React.FC<WishlistItemType> = (props) => {

    const dispatch = useAppDispatch();

    const addWishlistItemToCartHandler = () => {
        const wishlistItem: WishlistItemType = {
            name: props.name,
            id: props.id,
            price: props.price,
            img: props.img,
            quantity: 0
        }
        dispatch(cartActions.addWishlistItemToCart(wishlistItem))
    };

    const removeWishlistItemHandler = () => {
        dispatch(wishlistActions.removeWishlistItem(props.id))
    };

    return (
        <li>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name}/>
            <p><strong>{props.price}</strong></p>
            <button onClick={removeWishlistItemHandler}>Remove</button>
            <button onClick={addWishlistItemToCartHandler}>Add to cart</button>
        </li>
    )
};

export default WishlistItem