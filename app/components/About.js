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
    year: '2024 - Present', 
    label: 'Lycée Pilote (Pioneer School)',
    emoji: '🏆',
    desc: 'Admitted to the highly competitive and prestigious Lycée Pilote (Pioneer School), reserved for the country\'s top academic minds. Continuing to balance elite academics while leading core development at Cortex.'
  },
];

export default function About({ personal = {}, timeline: customTimeline }) {
  const displayTimeline = customTimeline || timeline;
  const [activeIndex, setActiveIndex] = useState(0); // Default to first timeline milestone

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
      <div className={`orb orb-purple ${styles.orb}`} />
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

        <div className={styles.grid}>
          <motion.div
            className={styles.story}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {storyParagraphs.map((para, pidx) => (
              <p key={pidx}>{renderParagraph(para)}</p>
            ))}

            <div className={styles.highlights}>
              <div className={`glass-card ${styles.highlightCard}`}>
                <div className={styles.highlightIcon}>
                  <Flag country="TN" size="lg" />
                </div>
                <div>
                  <strong>Based in {locationStr.split(',')[1]?.trim() || "Tunisia"}</strong>
                  <span>{locationStr.split(',')[0]?.trim() || "Mannouba"}</span>
                </div>
              </div>
              <div className={`glass-card ${styles.highlightCard}`}>
                <div className={styles.highlightIcon}>🎓</div>
                <div>
                  <strong>Pioneer School</strong>
                  <span>Current student</span>
                </div>
              </div>
              <div className={`glass-card ${styles.highlightCard}`}>
                <div className={styles.highlightIcon}>⚡</div>
                <div>
                  <strong>6+ Years</strong>
                  <span>Coding experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.timelineContainer}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className={styles.timelineTitle}>My Journey <span className={styles.timelineHint}>(Click nodes to explore)</span></h3>
            
            <div className={styles.timelineTrack}>
              {displayTimeline.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={item.year}
                    className={`${styles.timelineItem} ${isActive ? styles.timelineActive : ''}`}
                    onClick={() => setActiveIndex(i)}
                    title={`View details for ${item.year}`}
                  >
                    <div className={styles.timelineLine} />
                    <div className={styles.timelineDot}>
                      <span className={styles.dotInside} />
                    </div>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineYear}>{item.year}</span>
                      <span className={styles.timelineLabel}>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Timeline Detail Viewer */}
            <div className={styles.detailContainer}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className={`glass-card ${styles.detailCard}`}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className={styles.detailHeader}>
                    <span className={styles.detailEmoji}>{displayTimeline[activeIndex]?.emoji || '📍'}</span>
                    <h4 className={styles.detailTitle}>{displayTimeline[activeIndex]?.label || 'Milestone Details'}</h4>
                  </div>
                  <p className={styles.detailDesc}>{displayTimeline[activeIndex]?.desc || 'Select a milestone to view detailed story information.'}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
