import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import cartIcon from "../../assets/cart.svg";

export default function Cart() {
  const { getCart, getCartLength, getCartPrice, addToCart, removeFromCart } =
    useOutletContext();
  const cart = getCart();
  const cartPrice = getCartPrice().toFixed(2);

  if (getCartLength() === 0) {
    return (
      <div className={styles.emptyCart}>
        <img src={cartIcon} alt="Cart Icon" />
        <div className={styles.emptyCartMsg1}>
          You cart is empty (for now !)
        </div>
        <div className={styles.emptyCartMsg2}>
          Go to the shop to add your first items to your cart !
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.cartList}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className={styles.cartTotal}>
          <div className={styles.totalPrice}>
            Cart total price:{" "}
            <span className={styles.priceValue}>{cartPrice}€</span>
          </div>
          <button className={styles.payBtn}>Checkout & pay</button>
        </div>
      </>
    );
  }
}
