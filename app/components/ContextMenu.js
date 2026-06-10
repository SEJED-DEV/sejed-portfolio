'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContextMenu.module.css';
import Flag from './Flag';

export default function ContextMenu() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pathname, setPathname] = useState('');
  const menuRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      // Disable on mobile/touch screen devices for standard touch experience
      if (window.matchMedia('(max-width: 768px)').matches) return;
      
      e.preventDefault();
      setVisible(true);

      // Adjust position so it doesn't overflow screen boundaries
      let clickX = e.clientX;
      let clickY = e.clientY;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const menuW = 200; // estimated width
      const menuH = 260; // estimated height

      if (clickX + menuW > screenW) clickX = screenW - menuW - 10;
      if (clickY + menuH > screenH) clickY = screenH - menuH - 10;

      setPosition({ x: clickX, y: clickY });
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setVisible(false);
      } else {
        // Any click inside the menu item also closes it
        setVisible(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setVisible(false);

      if (visible && e.key === 'Tab') {
        const focusableElements = menuRef.current.querySelectorAll('button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible]);

  useEffect(() => {
    if (visible && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [visible]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname !== '/') {
      window.location.href = '/#' + id;
    }
  };

  const handleNavigate = (path) => {
    if (pathname !== path) {
      window.location.href = path;
    }
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('sejed.dev');
    // Dispatch event to show copy toast from Contact component
    window.dispatchEvent(new CustomEvent('show-discord-toast'));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={menuRef}
          className={`glass-card ${styles.menu}`}
          style={{ top: position.y, left: position.x }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.header}>
            <span>⚡ sejed.dev menu</span>
          </div>
          <div className={styles.divider} />
          
          <button
            ref={firstItemRef}
            className={styles.item}
            onClick={() => handleScrollTo('home')}
          >
            <span>🏠</span> Scroll to Top
          </button>
          <button className={styles.item} onClick={() => handleScrollTo('about')}>
            <span>👤</span> About Sejed
          </button>
          <button className={styles.item} onClick={() => handleNavigate('/palestine')}>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}><Flag country="PS" size="sm" /></span> Palestine Solidarity
          </button>
          <button className={styles.item} onClick={handleCopyDiscord}>
            <span>📋</span> Copy Discord ID
          </button>
          
          <div className={styles.divider} />
          <button className={`${styles.item} ${styles.closeItem}`} onClick={() => setVisible(false)}>
            <span>✖</span> Close Menu
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
