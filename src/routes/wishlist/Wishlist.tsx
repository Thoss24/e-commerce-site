import classes from './Wishlist.module.css';
import { useAppSelector } from '../../hooks/hooks';
import WishlistItem from './WishlistItem';

const Wishlist = () => {

    const wishlist = useAppSelector(state => state.wishlist.wishlist);

    return (
        <div className={classes.wishlist}>
            <div className={classes['wishlist-content-area']}>
            <h1>Wishlist</h1>
            <ul className={classes['wishlist-items']}>
                {wishlist.map(item => (
                    <WishlistItem key={item.id} name={item.name} id={item.id} price={item.price} img={item.img} quantity={item.quantity}/>
                ))}
            </ul>
            </div>
        </div>
    )
};

export default Wishlist;