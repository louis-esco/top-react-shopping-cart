import { useOutletContext, NavLink, Outlet } from "react-router-dom";
import styles from "./Shop.module.css";

export default function Shop() {
  const { addToCart } = useOutletContext();

  return (
    <section className="shop">
      <div className={styles.categories}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.catLink}`
              : styles.catLink
          }
          to={"electronics"}
        >
          ELECTRONICS
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.catLink}`
              : styles.catLink
          }
          to={"jewelery"}
        >
          JEWELRY
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.catLink}`
              : styles.catLink
          }
          to={"men's%20clothing"}
        >
          MEN&apos;S CLOTHING
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.catLink}`
              : styles.catLink
          }
          to={"women's%20clothing"}
        >
          WOMEN&apos;S CLOTHING
        </NavLink>
      </div>
      <Outlet context={{ addToCart }} />
    </section>
  );
}
