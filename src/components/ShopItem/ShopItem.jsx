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
      <div className="itemPrice">{item.price}€</div>
      <div className={styles.itemShop}>
        <div className="itemQty">
          <button onClick={decrement}>-</button>
          <input
            name="qty"
            className={styles.qtyInput}
            type="number"
            value={qty}
            onChange={handleChange}
          />
          <button onClick={increment}>+</button>
        </div>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
};
