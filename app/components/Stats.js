'use client';
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const stats = [
  {
    value: '2.4M+',
    label: 'Total Bot Users Served',
    desc: 'Powering automated support and moderation channels globally.',
    emoji: '👥',
    color: '#6366f1', // Indigo
  },
  {
    value: '1.8K+',
    label: 'Discord Servers Managed',
    desc: 'Trusted by premium guilds, Roblox games, and online ecosystems.',
    emoji: '🌐',
    color: '#06b6d4', // Cyan
  },
  {
    value: '120K+',
    label: 'Lines of Code Compiled',
    desc: 'Structured, highly-modular Node.js, Next.js, and Lua codebases.',
    emoji: '💻',
    color: '#8b5cf6', // Purple
  },
  {
    value: '99.99%',
    label: 'Uptime Reliability',
    desc: 'Dockerized microservice hosting with real-time health-checks.',
    emoji: '⚡',
    color: '#10b981', // Green
  },
];

export default function Stats({ stats: customStats }) {
  const displayStats = customStats && customStats.length === 4 ? customStats.map((cs, idx) => ({
    ...stats[idx],
    value: cs.value,
    label: cs.label,
  })) : stats;

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {displayStats.map((item, i) => (
            <motion.div
              key={item.label}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ '--stats-color': item.color }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.emoji}>{item.emoji}</span>
                <span className={styles.badge} style={{ backgroundColor: `${item.color}15`, color: item.color }}>Active Uptime</span>
              </div>
              <h3 className={styles.value} style={{ color: item.color }}>{item.value}</h3>
              <h4 className={styles.label}>{item.label}</h4>
              <p className={styles.desc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
