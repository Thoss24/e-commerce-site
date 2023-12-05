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
import { useDetectScroll } from "../../hooks/detect_scroll";

const MainNavigation = () => {
  const { scrollDirection } = useDetectScroll();

  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.active : "";
  };

  const [iconActive, setIconActive] = useState(false);

  const cartTotal = useAppSelector((state) => state.cart.cartAmount);

  const displayIconHandler = () => {
    setIconActive(!iconActive);
  };

  const cartContext = useContext(ModalContext);

  const displayModalHandler = () => {
    cartContext.setCartDisplaying(true);
  };

  const CartDisplayModal = () => {
    cartContext.setCartDisplaying(!cartContext.cartDisplaying);
  };

  const cartModal = <CartModal hideCart={CartDisplayModal} />;

  const dropdownMenu = (
    <NavDropdownMenu
      iconActive={iconActive}
      displayModal={displayIconHandler}
      cartDisplay={CartDisplayModal}
    />
  );

  return (
    <motion.div
      animate={{
        opacity: scrollDirection === "up" ? 1 : 0,
        y: scrollDirection === "up" ? 0 : -30,
      }}
      transition={{ duration: 0.6, type: "spring" }}
      className={classes["header"]}
    >
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
              <motion.div
                key={cartTotal}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                className={classes.cart}
              >
                <FaShoppingCart />
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
          <AnimatePresence>{iconActive && dropdownMenu}</AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default MainNavigation;
