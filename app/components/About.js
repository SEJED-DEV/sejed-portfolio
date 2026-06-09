'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './About.module.css';
import Flag from './Flag';

const timeline = [
  { 
    year: '2015 - 2021', 
    label: 'Primary School at Hannibal',
    emoji: '🎒',
    desc: 'Completed my primary education (1ère to 6ème) at Hannibal. This is where my love for math, structural logic, and problem-solving was originally sparked.'
  },
  { 
    year: '2020', 
    label: 'First Line of Code (Age 11)',
    emoji: '💻',
    desc: 'Wrote my very first scripting code in Lua! Discovered how powerful code is to create and automate experiences, which led me down the rabbit hole of computer science.'
  },
  { 
    year: '2021 - 2024', 
    label: 'Prep School / Collège',
    emoji: '🧪',
    desc: 'Expanded into Python, Javascript, and Node.js backend architecture. Built my first Discord community management bots and started studying advanced networking concepts.'
  },
  { 
    year: '2024 - 2026', 
    label: 'Lycée Pilote (Pioneer School)',
    emoji: '🏆',
    desc: 'Admitted to the highly competitive and prestigious Lycée Pilote (Pioneer School), reserved for the country\'s top academic minds. Continuing to balance elite academics while leading core development at Cortex.'
  },
];

export default function About({ personal = {}, timeline: customTimeline }) {
  const displayTimeline = customTimeline || timeline;
  const [activeIndex, setActiveIndex] = useState(0);

  const firstName = personal.firstName || "Sejed";
  const lastName = personal.lastName || "Trabelsi";
  const fullName = `${firstName} ${lastName}`;
  const locationStr = personal.location || "Mannouba, Tunisia";
  
  const storyParagraphs = personal.story || [
    `I'm **${fullName}** — a full-stack developer from Tunisia who started coding at 11. What began as curiosity quickly turned into an obsession with building things that matter.`,
    `Over the past 6+ years, I've gone deep into **Node.js** and **Next.js**, building everything from high-performance Discord bots serving thousands of users to full-stack web applications with complex backends.`,
    `I believe in clean architecture, scalable systems, and shipping fast. Currently studying while continuing to push the boundaries of what I can build.`
  ];

  const renderParagraph = (text) => {
    const boldParts = text.split(/(\*\*.*?\*\*)/g);
    return boldParts.map((bp, bidx) => {
      if (bp.startsWith('**') && bp.endsWith('**')) {
        return <strong key={bidx}>{bp.slice(2, -2)}</strong>;
      }
      return bp;
    });
  };

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">// about me</p>
          <h2 className="section-title">
            Not your average <span className="gradient-text">17-year-old</span>
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className={`glass-card ${styles.profile}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.profileGrid}>
            <div className={styles.profileItem}>
              <span className={styles.profileLabel}>Name</span>
              <span className={styles.profileValue}>{fullName}</span>
            </div>
            <div className={styles.profileItem}>
              <span className={styles.profileLabel}>From</span>
              <span className={styles.profileValue}>
                <Flag country="TN" size="sm" />
                {locationStr}
              </span>
            </div>
            <div className={styles.profileItem}>
              <span className={styles.profileLabel}>Role</span>
              <span className={styles.profileValue}>
                <span className={styles.roleDot} />
                Full Stack Developer
              </span>
            </div>
            <div className={styles.profileItem}>
              <span className={styles.profileLabel}>School</span>
              <span className={styles.profileValue}>Lycée Pilote</span>
            </div>
            <div className={styles.profileItem}>
              <span className={styles.profileLabel}>Experience</span>
              <span className={`gradient-text ${styles.profileValue}`}>6+ Years</span>
            </div>
            <div className={styles.profileItem}>
              <span className={styles.profileLabel}>Projects</span>
              <span className={`gradient-text ${styles.profileValue}`}>30+ Shipped</span>
            </div>
          </div>
        </motion.div>

        {/* Story + Timeline row */}
        <div className={styles.contentGrid}>
          {/* Story */}
          <motion.div
            className={`glass-card ${styles.storyCard}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.storyHeader}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span className={styles.storyHeaderLabel}>STORY</span>
            </div>
            <div className={styles.storyBody}>
              {storyParagraphs.map((para, pidx) => (
                <p key={pidx}>{renderParagraph(para)}</p>
              ))}
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            className={`glass-card ${styles.journeyPanel}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.journeyHeader}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className={styles.journeyLabel}>JOURNEY</span>
              <span className={styles.journeyHint}>Click a card</span>
            </div>

            <div className={styles.journeyBody}>
              <div className={styles.journeyTrack}>
                {displayTimeline.map((item, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={item.year}
                      className={`${styles.journeyCard} ${isActive ? styles.journeyCardActive : ''}`}
                      onClick={() => setActiveIndex(i)}
                    >
                      <span className={styles.journeyEmoji}>{item.emoji}</span>
                      <div className={styles.journeyMeta}>
                        <span className={styles.journeyYear}>{item.year}</span>
                        <span className={styles.journeyLabel}>{item.label}</span>
                      </div>
                      <svg className={styles.journeyArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className={styles.journeyDetail}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className={styles.journeyDetailIcon}>{displayTimeline[activeIndex]?.emoji || '📍'}</div>
                  <div className={styles.journeyDetailBody}>
                    <h4 className={styles.journeyDetailTitle}>{displayTimeline[activeIndex]?.label || ''}</h4>
                    <p className={styles.journeyDetailDesc}>{displayTimeline[activeIndex]?.desc || ''}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
