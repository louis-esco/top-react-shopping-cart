import styles from "./ShopItem.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Item({ item, addToCart }) {
  const [qty, setQty] = useState(0);

  const decrement = () => {
    if (qty > 0) setQty(Number(qty) - 1);
  };

  const increment = () => {
    setQty(Number(qty) + 1);
  };

  const handleChange = (e) => {
    setQty(Number(e.target.value));
  };

  const handleClick = () => {
    if (qty > 0) addToCart(item, qty);
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemImg}>
        <img src={item.image} alt="Picture of the item" />
      </div>
      <div className={styles.itemName}>{item.title}</div>
      <div className={styles.shopItem}>
        <div className="itemPrice">{item.price}€</div>

        <div className={styles.itemAction}>
          <div className={styles.itemQty}>
            <button
              onClick={decrement}
              className={`${styles.qtyBtn} ${styles.leftBtn}`}
            >
              -
            </button>
            <input
              name="qty"
              className={styles.qtyInput}
              type="number"
              value={qty}
              onChange={handleChange}
            />
            <button
              onClick={increment}
              className={`${styles.qtyBtn} ${styles.rightBtn}`}
            >
              +
            </button>
          </div>
          <button className={styles.buyBtn} onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
};
