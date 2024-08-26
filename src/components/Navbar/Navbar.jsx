import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";

export default function Navbar({ getCartLength }) {
  const cartLength = getCartLength();
  return (
    <nav className={styles.navBar}>
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
            ? `${styles.active} ${styles.navLink}`
            : styles.navLink
        }
        to={"/cart"}
      >
        CART ({cartLength})
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {
  getCartLength: PropTypes.func,
};
