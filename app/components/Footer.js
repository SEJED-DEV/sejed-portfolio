'use client';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import Flag from './Flag';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <a href="#home" className={styles.logo}>
              <img src="/code-icon.png" alt="S" className={styles.logoImg} />
              <span className={styles.logoText}>sejed<span className={styles.logoDot}>.</span>dev</span>
            </a>
            <p className={styles.copy}>
              © {year} Sejed Trabelsi. All rights reserved. •{' '}
              <a href="https://github.com/SEJED-DEV/sejed-portfolio" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.madeWith}>
              Designed & built with
              <motion.span
                className={styles.heart}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ♥
              </motion.span>
              in Tunisia <Flag country="TN" size="sm" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
