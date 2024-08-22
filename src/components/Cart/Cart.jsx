import { useOutletContext } from "react-router-dom";
// import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { getCart, getCartPrice, addToCart, removeFromCart } =
    useOutletContext();
  const cart = getCart();
  const cartPrice = getCartPrice().toFixed(2);
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
