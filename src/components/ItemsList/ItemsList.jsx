import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemsList.module.css";
import { useParams, useOutletContext, Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";

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

        const itemsData = await response.json();
        if (itemsData.length > 0) setItems(itemsData);
        else setItems(null);
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
            <ShopItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      )}
      {!items && (
        <div className={styles.itemsListError}>
          <h2>Oops nothing here</h2>
          <Link className={styles.errorBtn} to={"/shop"}>
            Back to shop
          </Link>
        </div>
      )}
    </>
  );
}

ItemsList.propTypes = {
  category: PropTypes.string,
  addToCart: PropTypes.func,
};
