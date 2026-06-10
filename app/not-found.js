import Link from 'next/link';
import ContextMenu from './components/ContextMenu';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <ContextMenu />
      <div className={styles.wrapper}>
      <div className={styles.orb} />

      <h1 className={styles.code}>404</h1>

      <p className={styles.label}>
        <span className={styles.labelLine} />
        Page Not Found
      </p>

      <p className={styles.description}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className={styles.homeBtn}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Back to Home
      </Link>
    </div>
    </>
  );
}
