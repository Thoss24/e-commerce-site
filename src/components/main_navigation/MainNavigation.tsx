import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.active : "";
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
    </ul>
    </div>
  );
};

export default MainNavigation;
