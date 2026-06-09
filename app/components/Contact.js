'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.css';

const socials = [
  { name: 'Email', value: 'support@sejed.dev', href: 'mailto:support@sejed.dev', color: '#6366f1' },
  { name: 'GitHub', value: '@SEJED-DEV', href: 'https://github.com/SEJED-DEV', color: '#a855f7' },
  { name: 'Discord', value: 'sejed.dev', color: '#5865f2', copy: true },
  { name: 'WhatsApp', value: '+216 94 155 000', href: 'https://wa.me/21694155000', color: '#25d366' },
  { name: 'Instagram', value: '@http.sejed.official', href: 'https://instagram.com/http.sejed.official', color: '#e1306c' },
];

const icons = {
  Email: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  GitHub: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  Discord: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>,
  WhatsApp: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.113 1.519 5.845L.055 23.455a.5.5 0 0 0 .621.591l5.447-1.772A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.382-1.572l-.386-.231-3.233 1.052.856-3.131-.253-.403A9.935 9.935 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>,
  Instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
};

export default function Contact({ socials: customSocials }) {
  const [toast, setToast] = useState('');
  const [copied, setCopied] = useState(null);

  const items = customSocials
    ? socials.map(m => {
        const c = customSocials.find(cs => cs.name === m.name);
        return c ? { ...m, value: c.value, href: c.href || m.href } : m;
      })
    : socials;

  const handleClick = (m) => {
    if (m.copy) {
      navigator.clipboard.writeText(m.value).then(() => {
        setCopied(m.name);
        setToast('Copied to clipboard!');
        setTimeout(() => { setToast(''); setCopied(null); }, 2000);
      }).catch(() => {});
    } else if (m.href) {
      window.open(m.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <p className="section-label">{'// contact'}</p>
          <h2 className="section-title">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            Available for projects, collaborations, and conversations.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.cardGlow} />

          <div className={styles.cardTop}>
            <div className={styles.cardLine} />
            <span className={styles.cardBadge}>Open to work</span>
          </div>

          <h3 className={styles.cardHeading}>
            Say hello at{' '}
            <a href="mailto:support@sejed.dev" className={styles.cardEmail}>
              support@sejed.dev
            </a>
          </h3>

          <p className={styles.cardDesc}>
            Whether you have a project in mind, a collaboration idea, or just want to say hi — I&apos;ll get back to you fast.
          </p>

          <div className={styles.divider} />

          <div className={styles.socialRow}>
            {items.map((m) => (
              <button
                key={m.name}
                className={`${styles.socialBtn} ${copied === m.name ? styles.socialCopied : ''}`}
                style={{ '--btn-color': m.color }}
                onClick={() => handleClick(m)}
                title={m.copy ? `Copy ${m.name}` : `Open ${m.name}`}
              >
                <span className={styles.socialIcon}>
                  {icons[m.name]}
                </span>
                <span className={styles.socialName}>{m.name}</span>
                {copied === m.name && (
                  <span className={styles.socialCheck}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className={styles.toast}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
