import Link from 'next/link';
import styles from '../styles/Header.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href='/'>
          <a className={styles.logo}> CleverX.dev</a>
        </Link>
      </div>
      <nav>
        <ul>
          {/* <li>
            <Link href='/home'>
              <a>Home</a>
            </Link>
          </li> */}
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href='/Add'>
              <a>Add</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
