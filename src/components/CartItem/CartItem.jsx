import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div key={item.id} className={styles.item}>
      <div className={styles.itemImg}>
        <img src={item.image} alt="" />
      </div>
      <div className="itemContent">
        <div className="itemTitle">{item.title}</div>
        <div className="itemPrice">Unit price: {item.price}€</div>
        <div className="itemQty">
          Quantity:
          <button onClick={() => removeFromCart(item, 1)}>-</button> {item.qty}{" "}
          <button onClick={() => addToCart(item, 1)}>+</button>
        </div>
        <div className="itemTotal">Total price: {item.qty * item.price}€</div>
        <button
          onClick={() => {
            removeFromCart(item, item.qty);
          }}
        >
          Remove from cart
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
