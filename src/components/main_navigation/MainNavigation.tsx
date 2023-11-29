import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../../store/modal_context";
import CartModal from "../cart/CartModal";
import NavDropdownMenu from "./NavDropdownMenu";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";

const MainNavigation = () => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.active : "";
  };

  const [iconActive, setIconActive] = useState(false);

  const cartTotal = useAppSelector(state => state.cart.cartAmount);

  const displayIconHandler = () => {
    if (iconActive) {
      setIconActive(false);
    } else {
      setIconActive(true);
    }
  };

  const cartContext = useContext(ModalContext);

  const displayModalHandler = () => {
    cartContext.setCartDisplaying(true);
  };

  const hideCartModal = () => {
    cartContext.setCartDisplaying(false);
  };

  const cartModal = <CartModal hideCart={hideCartModal} />;

  const dropdownMenu = <NavDropdownMenu iconActive={iconActive} displayModal={displayIconHandler}/>;

  return (
    <div className={classes["header"]}>
      <AnimatePresence>
        {cartContext.cartDisplaying && cartModal}
      </AnimatePresence>
      <div className={classes["main-nav-container"]}>
        <h1>Fake Store</h1>
        <ul className={classes.nav}>
          <li className={classes["nav-item"]}>
            <NavLink to={"/"} className={isActive}>
              About
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to={"/products"} className={isActive}>
              Products
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to={"/contact"} className={isActive}>
              Contacts
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to={"/wishlist"} className={isActive}>
              Wishlist
            </NavLink>
          </li>
          <li className={classes["nav-item"]} onClick={displayModalHandler}>
            <motion.span>
            <motion.div key={cartTotal} animate={{ scale: [1, 1.2, 1]}} transition={{ duration: 0.3 }} className={classes.cart}>
            <FaShoppingCart/>
            {cartTotal}
            </motion.div>
            </motion.span>
          </li>
        </ul>
        <div className={classes["dropdown-nav-container"]}>
          <div className={classes.icons}>
            <span>Menu</span>
            <motion.span
              onClick={displayIconHandler}
              animate={{ rotate: iconActive ? 180 : 0 }}
              whileHover={{ cursor: "pointer" }}
              className={classes["menu-icon"]}
            >
              &#9650;
            </motion.span>
          </div>
          <AnimatePresence>
          {iconActive && dropdownMenu}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
