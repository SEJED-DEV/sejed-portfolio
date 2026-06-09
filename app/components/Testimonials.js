'use client';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Lucas K.',
    role: 'ER:LC Server Director',
    quote: 'Sejed is a genius! He built a custom Nova ERLC Manager integration connecting our Discord guild to our private ER:LC server via the PRC API in under 48 hours. The session logger is incredibly fast and secure.',
    stars: 5,
    accent: 'var(--accent-indigo)',
  },
  {
    name: 'Ahmed R.',
    role: 'Discord Server Administrator',
    quote: 'SGL Audit completely changed how we moderate. The anti-raid detection catches coordinated attacks within seconds, and the detailed audit logs give us the evidence we never had before. Worth every penny.',
    stars: 4,
    accent: '#10b981',
  },
  {
    name: 'Maya P.',
    role: 'Islamic Community Lead',
    quote: 'Digital Akhi Bot was a blessing for our growing server. Sejed understood exactly what we needed — prayer timings with automatic DST adjustments, reliable Quran streaming, and a built-in tasbih counter our members use daily.',
    stars: 5,
    accent: '#f59e0b',
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
              style={{ '--accent': t.accent }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className={styles.mark}>&ldquo;</span>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`${styles.star} ${idx < t.stars ? styles.starFilled : styles.starEmpty}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
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
