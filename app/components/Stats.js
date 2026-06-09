'use client';
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const stats = [
  {
    value: '2.4M+',
    label: 'Total Bot Users Served',
    desc: 'Powering automated support and moderation channels globally.',
    emoji: '👥',
    color: '#6366f1',
  },
  {
    value: '1.8K+',
    label: 'Discord Servers Managed',
    desc: 'Trusted by premium guilds, Roblox games, and online ecosystems.',
    emoji: '🌐',
    color: '#06b6d4',
  },
  {
    value: '120K+',
    label: 'Lines of Code Compiled',
    desc: 'Structured, highly-modular Node.js, Next.js, and Lua codebases.',
    emoji: '💻',
    color: '#a855f7',
  },
  {
    value: '99.99%',
    label: 'Uptime Reliability',
    desc: 'Dockerized microservice hosting with real-time health-checks.',
    emoji: '⚡',
    color: '#10b981',
  },
];

export default function Stats({ stats: customStats }) {
  const displayStats = customStats && customStats.length === 4
    ? customStats.map((cs, idx) => ({ ...stats[idx], value: cs.value, label: cs.label }))
    : stats;

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {displayStats.map((item, i) => (
            <motion.div
              key={item.label}
              className={styles.card}
              style={{ '--c': item.color }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.cardAccent} style={{ background: item.color }} />
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{item.emoji}</span>
              </div>
              <span className={styles.value} style={{ color: item.color }}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.desc}>{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
