'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './changelog.module.css';

const changes = [
  {
    version: 'v2.1.0',
    date: 'June 2026',
    title: 'Architect Update',
    items: [
      'Redesigned Studio UI with a persistent sidebar and grouped controls.',
      'Implemented local storage persistence — changes now stick!',
      'Added mobile access restriction to protect the architectural workspace.',
      'Enhanced project data synchronization with GitHub repositories.',
      'Refined social links logic for better icon and color consistency.',
      'Expanded Palestine solidarity section with new educational essays.'
    ],
    status: 'latest'
  },
  {
    version: 'v2.0.0',
    date: 'May 2026',
    title: 'Initial Studio Launch',
    items: [
      'First public release of the Portfolio Studio (BETA).',
      'Real-time split-screen preview engine.',
      'Configurable theme colors, fonts, and background effects.',
      'Interactive command console playground.',
      'Dynamic project and timeline builders.'
    ],
    status: 'stable'
  }
];

export default function Changelog() {
  return (
    <div className={styles.changelogContainer}>
      <header className={styles.header}>
        <div className="container">
          <Link href="/customize" className={styles.backBtn}>
            ← Back to Studio
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-text"
          >
            Studio Changelog
          </motion.h1>
          <p>Documenting the evolution of the Portfolio Studio ecosystem.</p>
        </div>
      </header>

      <main className="container">
        <div className={styles.timeline}>
          {changes.map((change, idx) => (
            <motion.div
              key={change.version}
              className={styles.changeCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.versionBadge}>
                <span className={styles.vNum}>{change.version}</span>
                <span className={styles.vDate}>{change.date}</span>
                {change.status === 'latest' && <span className={styles.latestTag}>LATEST</span>}
              </div>
              <div className={`glass-card ${styles.cardContent}`}>
                <h3>{change.title}</h3>
                <ul className={styles.itemList}>
                  {change.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Sejed Portfolio Studio • Built for Creators</p>
      </footer>
    </div>
  );
}
