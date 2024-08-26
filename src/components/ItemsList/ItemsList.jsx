import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemsList.module.css";
import { useParams } from "react-router-dom";
import Item from "../ShopItem/ShopItem";

export default function ItemsList({ addToCart }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category = "electronics" } = useParams();

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
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

ItemsList.propTypes = {
  category: PropTypes.string,
  addToCart: PropTypes.func,
};
