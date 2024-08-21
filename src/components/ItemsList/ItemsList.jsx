import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemsList.module.css";

export default function ItemsList({ category, addToCart }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async (category) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const items = await response.json();
        setItems(items);
        setError(null);
      } catch (err) {
        setError(err.message);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems(category);
  }, [category]);

  return (
    <>
      {loading && <div>Loading items...</div>}
      {error && <div>{error}</div>}
      <div className={styles.itemsList}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <div className={styles.itemImg}>
              <img src={item.image} alt="Picture of the item" />
            </div>
            <div className="itemName">{item.title}</div>
            <div className="itemPrice">{item.price}€</div>
            <button
              onClick={() => {
                addToCart(item, 1);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

ItemsList.propTypes = {
  category: PropTypes.string,
  addToCart: PropTypes.func,
};
