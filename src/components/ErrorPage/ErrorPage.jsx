import styles from "./ErrorPage.module.css";
import error from "../../assets/error.svg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <img src={error} alt="Error icon" />
      <h2 className={styles.errorTitle}>
        Ooops this page doesn&apos;t seem to exist ..
      </h2>
      <Link to={"/"} className={styles.returnBtn}>
        Return to home page
      </Link>
    </div>
  );
}
