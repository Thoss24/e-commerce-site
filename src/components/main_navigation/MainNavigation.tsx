import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { ModalContext } from "../../store/modal_context";

const MainNavigation = () => {

  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.active : "";
  };

  const cartContext = useContext(ModalContext);

  const displayModalHandler = () => {
    cartContext.setCartDisplaying(true)
  };

  return (
    <div className={classes['main-nav-container']}>
      <h1>Placeholder</h1>
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
    </div>
  );
};

export default MainNavigation;
