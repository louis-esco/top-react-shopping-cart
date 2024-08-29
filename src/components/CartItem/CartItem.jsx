import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div key={item.id} className={styles.item}>
      <div className={styles.itemImg}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.itemTitle}>{item.title}</div>
        <div className="itemPrice">Unit price: {item.price}€</div>
        <div className={styles.itemQty}>
          Quantity:{" "}
          <button
            onClick={() => removeFromCart(item, 1)}
            className={styles.qtyBtn}
          >
            -
          </button>{" "}
          <div>{item.qty}</div>{" "}
          <button className={styles.qtyBtn} onClick={() => addToCart(item, 1)}>
            +
          </button>
        </div>
        <div className="itemTotal">Total price: {item.qty * item.price}€</div>
        <button
          className={styles.removeBtn}
          onClick={() => {
            removeFromCart(item, item.qty);
          }}
        >
          &#10005; Remove from cart
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};
