'use client';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import Flag from './Flag';

export default function Footer({ personal = {} }) {
  const year = new Date().getFullYear();

  const firstName = personal.firstName || "Sejed";
  const lastName = personal.lastName || "Trabelsi";
  const fullName = `${firstName} ${lastName}`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={styles.footer}>
      <hr />
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoText}>
                sejed<span className={styles.logoDot}>.</span>dev
              </span>
            </a>
            <p className={styles.tagline}>
              Building high-performance automation engines, scalable Discord ecosystems, and interactive web experiences.
            </p>
          </div>
          <div className={styles.links}>
            <span className={styles.linksLabel}>Navigate</span>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
            ))}
          </div>
          <div className={styles.links}>
            <span className={styles.linksLabel}>Connect</span>
            <a href="mailto:support@sejed.dev" className={styles.link}>Email</a>
            <a href="https://github.com/SEJED-DEV" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
            <a href="https://wa.me/21694155000" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} {fullName}. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Designed &amp; built with
            <motion.span
              className={styles.heart}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ♥
            </motion.span>
            in Tunisia <Flag country="TN" size="sm" />
          </p>
          <a
            href="https://github.com/SEJED-DEV/sejed-portfolio"
            className={styles.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}
