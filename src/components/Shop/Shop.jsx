import { useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [category, setCategory] = useState("electronics");
  const { addToCart } = useOutletContext();

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <section className="shop">
      <div className="categories">
        <button
          onClick={() => {
            handleClick("electronics");
          }}
        >
          Electronics
        </button>
        <button
          onClick={() => {
            handleClick("jewelery");
          }}
        >
          Jewelry
        </button>
        <button
          onClick={() => {
            handleClick("men's%20clothing");
          }}
        >
          Men&apos;s clothing
        </button>
        <button
          onClick={() => {
            handleClick("women's%20clothing");
          }}
        >
          Women&apos;s clothing
        </button>
      </div>
      <ItemsList addToCart={addToCart} category={category} />
    </section>
  );
}
