import Link from 'next/link';
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href='/home-page'>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </Link>
    </div>
  );
};

export default Header;
