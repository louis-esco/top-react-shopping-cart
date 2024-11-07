import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    return cart;
  };

  const getCartLength = () => {
    return cart.reduce((acc, curr) => acc + curr.qty, 0);
  };

  const getCartPrice = () => {
    return cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  };

  const addToCart = (item, qty) => {
    const newCart = [...cart];
    const index = newCart.findIndex((el) => el.id === item.id);
    if (index === -1) newCart.push({ ...item, qty: qty });
    else newCart[index].qty += qty;
    setCart(newCart);
  };

  const removeFromCart = (item, qty) => {
    const newCart = [...cart];
    const index = newCart.findIndex((el) => el.id === item.id);
    if (newCart[index].qty - qty < 1) newCart.splice(index, 1);
    else newCart[index].qty -= qty;
    setCart(newCart);
  };

  return (
    <>
      <Navbar getCartLength={getCartLength} />
      <Outlet
        context={{
          getCart,
          getCartLength,
          getCartPrice,
          addToCart,
          removeFromCart,
        }}
      />
    </>
  );
}

export default App;
