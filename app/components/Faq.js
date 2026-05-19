'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Faq.module.css';

const faqs = [
  {
    question: 'How can I invite Cortex, Cortex Modmail, or Cortex QuranBot to my Discord server?',
    answer: 'You can easily access and invite all Cortex ecosystem applications directly via our main platform hub at CortexHQ (cortexhq.net) or through their dedicated portals at cortex.cortexhq.net, modmail.cortexhq.net, and quran.cortexhq.net.',
  },
  {
    question: 'What types of custom Discord bot solutions do you build?',
    answer: 'I design and architect highly scalable, robust Discord integrations including advanced session management tools for private game servers (utilizing the ER:LC / PRC API), automated ticketing workflows, moderation suites, SQLite/MongoDB database systems, and state-of-the-art AI-driven companions.',
  },
  {
    question: 'Are you available for freelance collaborations and full-stack Next.js web applications?',
    answer: 'Yes! I am actively available for custom freelance work. I specialize in designing and shipping performant Next.js 15+ full-stack web systems, responsive corporate landing pages, secure API backends, and modular analytics dashboards.',
  },
  {
    question: 'Can I reuse or customize the source code of this portfolio website?',
    answer: 'Absolutely! This portfolio website is fully open-source and licensed under the MIT License. You are welcome to view, star, and fork the repository directly on GitHub at SEJED-DEV/sejed-portfolio.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className={`orb orb-cyan ${styles.orb1}`} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <p className="section-label">// client guide & faqs</p>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Quick answers about my custom bot services, web development solutions, and the Cortex ecosystem.
          </p>
          <div className="divider" />
        </motion.div>

        <div className={styles.accordion}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`glass-card ${styles.item} ${isOpen ? styles.activeItem : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <button
                  className={styles.trigger}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.answerWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={styles.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
