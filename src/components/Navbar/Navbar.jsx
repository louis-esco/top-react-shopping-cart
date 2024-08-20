import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.navLink} to={"/"}>
        HOME
      </NavLink>
      <NavLink className={styles.navLink} to={"/shop"}>
        SHOP
      </NavLink>
      <NavLink className={styles.navLink} to={"/cart"}>
        CART
      </NavLink>
    </nav>
  );
}
