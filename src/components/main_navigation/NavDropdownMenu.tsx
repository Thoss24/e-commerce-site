import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import classes from "./NavDropdownMenu.module.css";

const NavDropdownMenu: React.FC<{ iconActive: boolean, displayModal: () => void}> = (props) => {
    return (
        <motion.ul
        initial={{ opacity: 0, y: 0 }}
        animate={{ y: props.iconActive ? 2 : 0, opacity: 1 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3, bounce: 0, type: "spring", ease: "linear" }}
        className={
          props.iconActive ? classes["nav-dropdown active"] : classes["nav-dropdown"]
        }
      >
        <li className={classes["nav-item-active"]}>
          <NavLink to={"/"} >
            About
          </NavLink>
        </li>
        <li className={classes["nav-item-active"]}>
          <NavLink to={"/products"}>
            Products
          </NavLink>
        </li>
        <li className={classes["nav-item-active"]}>
          <NavLink to={"/contact"}>
            Contacts
          </NavLink>
        </li>
        <li className={classes["nav-item-active"]}>
          <NavLink to={"/wishlist"}>
            Wishlist
          </NavLink>
        </li>
        <li className={classes["nav-item-active"]} onClick={props.displayModal}>
          <FaShoppingCart />
        </li>
      </motion.ul>
    )
};

export default NavDropdownMenu;