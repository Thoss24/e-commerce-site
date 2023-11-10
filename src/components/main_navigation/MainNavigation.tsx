import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { ModalContext } from "../../store/modal_context";
import CartModal from "../cart/CartModal";
import { useState } from "react";

const MainNavigation = () => {

  const [dropdownDisplaying, setDropdownDisplaying] = useState(false);

  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.active : "";
  };

  const cartContext = useContext(ModalContext);

  const displayModalHandler = () => {
    cartContext.setCartDisplaying(true)
  };

  const hideCartModal = () => {
    cartContext.setCartDisplaying(false)
  };

  const displayDropdownHandler = () => {
    if (dropdownDisplaying) {
      setDropdownDisplaying(false)
    } else {
      setDropdownDisplaying(true)
    }
  };

  const cartModal = (
    <CartModal hideCart={hideCartModal}/>
  );

  return (
    <div className={classes['header']}>
    {cartContext.cartDisplaying && cartModal}
    <div className={classes['main-nav-container']}>
      <h1>Fake Store</h1>
    <ul className={classes.nav}>
      <li className={classes['nav-item']}>
        <NavLink to={"/"} className={isActive}>
          About
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to={"/products"} className={isActive}>
          Products
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to={"/contact"} className={isActive}>
          Contacts
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to={"/wishlist"} className={isActive}>
          Wishlist
        </NavLink>
      </li>
      <li className={classes['nav-item']} onClick={displayModalHandler}>
        <FaShoppingCart />
      </li>
    </ul>
    <div className={classes['dropdown-nav-container']}>
      <h3 onClick={displayDropdownHandler}>Menu</h3>
      <ul className={!dropdownDisplaying ? classes['nav-dropdown'] : classes['nav-dropdown active']}>
      <li className={classes['nav-item']}>
        <NavLink to={"/"} className={isActive}>
          About
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to={"/products"} className={isActive}>
          Products
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to={"/contact"} className={isActive}>
          Contacts
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to={"/wishlist"} className={isActive}>
          Wishlist
        </NavLink>
      </li>
      <li className={classes['nav-item']} onClick={displayModalHandler}>
        <FaShoppingCart />
      </li>
      </ul>
    </div>
    </div>
    </div>
  );
};

export default MainNavigation;
