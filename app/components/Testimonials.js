'use client';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Lucas K.',
    role: 'Roblox ER:LC Server Director',
    quote: 'Sejed is a genius! He created a custom bot integration connecting our Discord guild directly to our private ER:LC server via the PRC API in under 48 hours. The session logger is incredibly fast and secure.',
    stars: 5,
    avatar: '🕹️',
  },
  {
    name: 'David M.',
    role: 'Cortex Community Director',
    quote: 'The Cortex QuranBot is an absolute masterpiece of Node.js engineering. It is incredibly reliable, scales effortlessly across hundreds of servers, and responds instantly to massive request rates.',
    stars: 5,
    avatar: '🤖',
  },
  {
    name: 'Sarah T.',
    role: 'FinTech Startup Co-Founder',
    quote: 'We commissioned Sejed to build our company Next.js client interface with custom visual particle systems. The clean CSS layout, high-performance ref animations, and attention to detail are elite.',
    stars: 5,
    avatar: '⚡',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className={`orb orb-purple ${styles.orb1}`} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <p className="section-label">// client recommendations</p>
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What server owners, startup co-founders, and community leaders say about working with me.
          </p>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <span key={idx} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
