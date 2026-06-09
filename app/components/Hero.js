'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const roles = [
  'Full Stack Developer',
  'Node.js Expert',
  'Next.js Builder',
  'Bot Architect',
  'Problem Solver',
];

const codeLines = [
  { text: 'const developer = {', delay: 400 },
  { text: '  name: "Sejed",', delay: 200 },
  { text: '  age: 17,', delay: 150 },
  { text: '  location: "Tunisia",', delay: 200 },
  { text: '  stack: ["JS", "TS", "Python"],', delay: 250 },
  { text: '  status: "building",', delay: 200 },
  { text: '};', delay: 100 },
];

export default function Hero({ personal = {} }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [codeDone, setCodeDone] = useState(false);

  const firstName = personal.firstName || "Sejed";
  const bioShort = personal.bioShort || "Building high-performance automation engines, scalable Discord ecosystems, and interactive web experiences.";

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 70);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    if (codeDone) return;
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), codeLines[visibleLines].delay);
      return () => clearTimeout(t);
    } else {
      setCodeDone(true);
    }
  }, [visibleLines, codeDone]);

  const displayText = roles[roleIndex].slice(0, charIndex);

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.layout}>
          {/* Left: Main greeting */}
          <div className={styles.left}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                <span className={styles.badgePulse} />
                Available for Freelance
              </div>
            </motion.div>

            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              <span className={styles.greeting}>Hi, I&apos;m</span>
              <span className={`gradient-text ${styles.name}`}>{firstName}</span>
            </motion.h1>

            <motion.div
              className={styles.typewriter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <span className={styles.typeArrow}>&gt;</span>
              <span className={styles.typeText}>{displayText}</span>
              <span className={styles.cursor}>|</span>
            </motion.div>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
            >
              {bioShort}
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48 }}
            >
              <a href="#projects" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Years Exp.</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>30+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>2.4M+</span>
                <span className={styles.statLabel}>Users</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Code block */}
          <motion.div
            className={styles.codeBlock}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span className={styles.codeDot} style={{ background: '#ef4444' }} />
                <span className={styles.codeDot} style={{ background: '#eab308' }} />
                <span className={styles.codeDot} style={{ background: '#22c55e' }} />
              </div>
              <span className={styles.codeFile}>me.json</span>
            </div>
            <div className={styles.codeBody}>
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <motion.span
                  key={i}
                  className={styles.codeLine}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className={styles.codeNum}>{String(i + 1).padStart(2, ' ')}</span>
                  <span className={styles.codeContent}>{line.text}</span>
                </motion.span>
              ))}
              {visibleLines >= codeLines.length && (
                <motion.span
                  className={styles.codeCursor}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <span className={styles.codeNum}>&nbsp;</span>
                  <span className={styles.codeContent}>_</span>
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
