import { useState } from "react";
import ItemsList from "../ItemsList/ItemsList";

export default function Shop() {
  const [category, setCategory] = useState("electronics");

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
      <ItemsList category={category} />
    </section>
  );
}
