import Link from 'next/link';
import styles from '../styles/Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; CleverxDev</p>
      <small>
        Design <Link href='https://cleverx.dev'>Cleverx.dev</Link>
      </small>
    </footer>
  );
}
