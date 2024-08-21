import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";

export default function Navbar({ getCartLength }) {
  const cartLength = getCartLength();
  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.navLink} to={"/"}>
        HOME
      </NavLink>
      <NavLink className={styles.navLink} to={"/shop"}>
        SHOP
      </NavLink>
      <NavLink className={styles.navLink} to={"/cart"}>
        CART ({cartLength})
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {
  getCartLength: PropTypes.func,
};
