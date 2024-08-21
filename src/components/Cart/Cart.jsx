import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Cart() {
  const { getCart, getCartPrice, removeFromCart } = useOutletContext();
  const cart = getCart();
  const cartPrice = getCartPrice().toFixed(2);
  return (
    <>
      <div className="cartList">
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemImg}>
              <img src={item.image} alt="" />
            </div>
            <div className="itemContent">
              <div className="itemTitle">{item.title}</div>
              <div className="itemPrice">Unit price: {item.price}€</div>
              <div className="itemQty">Quantity: {item.qty}</div>
              <div className="itemTotal">
                Total price: {item.qty * item.price}€
              </div>
              <button
                onClick={() => {
                  removeFromCart(item, 1);
                }}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cartTotal">Cart total price: {cartPrice}€</div>
    </>
  );
}
