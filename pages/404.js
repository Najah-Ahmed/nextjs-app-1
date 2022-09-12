import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
export default function NotFound() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <div className={styles.flex}>
          <FaExclamationTriangle size={90} color='red' />
          <h1>404</h1>
        </div>
        <h4>Not Found page</h4>

        <Link href='/home'>Back to Homepage</Link>
      </div>
    </Layout>
  );
}
