import styles from "./Home.module.css";
import hand from "../../assets/hand.svg";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src={hand} alt="Hand waving" />
      <h2 className={styles.welcomeMsg}>Welcome to Louis&apos;s shop ! </h2>
      <div>
        We sell all sorts of stuff, hopefully you&apos; find what you need here
        !
      </div>
    </div>
  );
}
