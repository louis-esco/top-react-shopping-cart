import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";
import icon from "../../assets/icon.svg";

export default function Navbar({ getCartLength }) {
  const cartLength = getCartLength();
  return (
    <nav className={styles.navBar}>
      <div className={styles.shopName}>
        <img src={icon} alt="shop icon" />
        <div>Louis&apos;s shop</div>
      </div>
      <div className={styles.links}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navLink}`
              : styles.navLink
          }
          to={"/"}
        >
          HOME
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navLink}`
              : styles.navLink
          }
          to={"/shop"}
        >
          SHOP
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navLink} ${styles.cart}`
              : `${styles.navLink} ${styles.cart}`
          }
          to={"/cart"}
        >
          CART
          <div className={styles.cartLength}>{cartLength}</div>
        </NavLink>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  getCartLength: PropTypes.func,
};
