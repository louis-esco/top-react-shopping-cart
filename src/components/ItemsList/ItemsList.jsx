import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemsList.module.css";
import { useParams, useOutletContext } from "react-router-dom";
import Item from "../ShopItem/ShopItem";

export default function ItemsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const { addToCart } = useOutletContext();

  useEffect(() => {
    const fetchItems = async (category) => {
      setLoading(true);
      setItems([]);

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
      {loading && (
        <div className={styles.loaderCont}>
          <div className={styles.loader}></div>
        </div>
      )}
      {error && <div>{error}</div>}
      {items && (
        <div className={styles.itemsList}>
          {items.map((item) => (
            <Item key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      )}
    </>
  );
}

ItemsList.propTypes = {
  category: PropTypes.string,
  addToCart: PropTypes.func,
};
