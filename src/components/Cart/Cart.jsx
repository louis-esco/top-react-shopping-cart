import { useOutletContext } from "react-router-dom";
// import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { getCart, getCartLength, getCartPrice, addToCart, removeFromCart } =
    useOutletContext();
  const cart = getCart();
  const cartPrice = getCartPrice().toFixed(2);

  if (getCartLength() === 0) {
    return (
      <div>
        <div>You cart is empty (for now !)</div>
        <div>Go to the shop to add your first items to your cart !</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="cartList">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="cartTotal">Cart total price: {cartPrice}€</div>
      </>
    );
  }
}
