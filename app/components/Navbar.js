'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import Flag from './Flag';

const essentialLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Palestine', href: '#palestine', flag: 'PS' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const allLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Palestine', href: '#palestine' },
  { label: 'Projects', href: '#projects' },
  { label: 'Playground', href: '#simulator' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    if (saved === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  useEffect(() => {
    const sections = [];
    allLinks.forEach(l => {
      try {
        const el = document.querySelector(l.href);
        if (el) sections.push(el);
      } catch (err) {
        console.error("Selector error: ", err);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            <img src="/code-icon.png" alt="S" className={styles.logoImg} />
            <span className={styles.logoText}>sejed<span className={styles.logoDot}>.</span>dev</span>
          </a>

          <div className={styles.links}>
            {essentialLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active === link.href ? styles.activeLink : ''}`}
              >
                {link.flag && <Flag country={link.flag} size="sm" />}
                {link.label}
                {active === link.href && (
                  <motion.div className={styles.activeDot} layoutId="navDot" />
                )}
              </a>
            ))}
            <a 
              href="/customize" 
              className={`${styles.link} ${active === '/customize' ? styles.activeLink : ''}`}
              style={{ marginLeft: '12px', color: '#8b5cf6' }}
            >
              ✨ Customize Portfolio [BETA]
            </a>
          </div>

          <div className={styles.navRight}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="18.36" x2="5.64" y2="19.78"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>

            <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
              Let&apos;s Talk
            </a>
          </div>

          <button
            className={styles.burger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.burgerLine} ${mobileOpen ? styles.open1 : ''}`} />
            <span className={`${styles.burgerLine} ${mobileOpen ? styles.open2 : ''}`} />
            <span className={`${styles.burgerLine} ${mobileOpen ? styles.open3 : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {allLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div style={{ height: '1px', background: 'var(--border)', margin: '8px 0' }} />
            <a
              href="/customize"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              style={{ color: '#8b5cf6', fontWeight: 600 }}
            >
              ✨ Customize Portfolio
              <span style={{
                background: 'rgba(139,92,246,0.15)',
                border: '1px solid rgba(139,92,246,0.3)',
                color: '#8b5cf6',
                fontSize: '0.55rem',
                fontWeight: 800,
                padding: '1px 5px',
                borderRadius: '4px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>BETA</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
