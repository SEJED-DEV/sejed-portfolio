'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Palestine.module.css';
import Flag from './Flag';

const historyCards = [
  {
    title: 'The Nakba (1948)',
    desc: 'The Nakba ("Catastrophe") represents the systemic mass expulsion and displacement of over 700,000 Palestinians from their homeland, creating a global refugee community that preserves their sacred Right of Return (UN Resolution 194) through generations.',
    emoji: '🗝️',
    color: '#ef4444', // red
  },
  {
    title: 'Sumud (Steadfastness)',
    desc: 'Sumud is the ultimate philosophy of non-violent resistance and steadfast preservation of presence. It is the persistent connection to native soil, reflecting the daily resilient survival and pride of the Palestinian people under hardship.',
    emoji: '✊',
    color: '#10b981', // green
  },
  {
    title: 'Ancient Olive Groves',
    desc: 'Olive groves represent the eternal roots of Palestine. Some olive trees are over 4,000 years old, existing long before modern borders. They stand as silent witnesses to history, symbolizing life, peace, and unbreakable land connection.',
    emoji: '🌿',
    color: '#000000', // black
  },
  {
    title: 'Tatreez Embroidery',
    desc: 'Tatreez is the ancient art of Palestinian cross-stitch embroidery. More than beautiful patterns, it is a detailed visual language where every stitch, color, and motif tells a rich story of regional origin, social history, and identity.',
    emoji: '🪡',
    color: '#ef4444', // red
  },
  {
    title: 'Voice & Digital Advocacy',
    desc: 'Using open-source software, digital platforms, developer networks, and media channels to documents realities, speak truth to power, challenge censorship, and stand unified with human rights movements worldwide.',
    emoji: '📢',
    color: '#10b981', // green
  },
  {
    title: 'Poetic Legacy & Literature',
    desc: 'Celebrated authors and poets like Mahmoud Darwish and Ghassan Kanafani have shaped the global consciousness. Literature preserves collective memory against erasure, highlighting that storytelling is a powerful form of resistance.',
    emoji: '📖',
    color: '#000000', // black
  },
];

const essays = [
  {
    id: 'olive-trees',
    title: 'The Ancient Legacy of Palestinian Olive Trees',
    short: 'Why the olive tree is more than agriculture — it is an eternal symbol of endurance and sacred connection to the land.',
    content: 'For Palestinians, the olive tree is more than an agricultural asset; it is an enduring symbol of history, survival, and deep land roots. Some olive trees inside Palestine (such as the Al-Badawi tree in Al-Walaja, Bethlehem) are verified to be between 4,000 and 5,000 years old. They existed long before modern geopolitical lines, standing as silent witnesses to thousands of years of history.\n\nCaring for olive groves is a sacred tradition passed down through generations. During the harvest, entire families gather, celebrating their persistent survival, making olive oil a cornerstone of local culture, food, and economy. Protecting these ancient groves is central to preserving Palestinian heritage against displacement.',
    tag: 'Culture & Land',
  },
  {
    id: 'nakba-keys',
    title: 'Understanding the Nakba & The Symbol of the Key',
    short: 'Exploring the history of 1948 mass displacements and why physical house keys remain a global symbol of hope.',
    content: 'The Nakba ("The Catastrophe") refers to the systemic mass displacement and expulsion of over 700,000 Palestinians from their homes, cities, and villages during the creation of Israel in 1948. Over 500 villages were completely depopulated or destroyed.\n\nFor millions of refugees worldwide, the key is the most powerful symbol of this ongoing displacement. Many families still keep the heavy iron keys to their original ancestral homes in Haifa, Jaffa, or Jerusalem, passing them down to their children. Under international law (UN General Assembly Resolution 194), Palestinians maintain a sacred, legal Right of Return to their original homes, and the key represents the unwavering promise of return.',
    tag: 'History & Rights',
  },
  {
    id: 'tatreez-language',
    title: 'Tatreez Stitching: Threading a Secret Language',
    short: 'How Palestinian women used traditional embroidery patterns to preserve messages and combat cultural erasure.',
    content: 'Tatreez is the traditional, detailed Palestinian art of cross-stitch embroidery. For centuries, Tatreez was much more than simple decorative sewing; it functioned as a sophisticated, non-verbal visual language. Every region in Palestine has its own distinct motifs, color palettes, and geometric patterns.\n\nBy reading the embroidery on a woman\'s dress, one could immediately identify her village of origin, her social status, and key events in her life. During times of conflict, women used Tatreez motifs to thread secret messages, document geographic lineages, and preserve their identity against systematic cultural erasure. Today, it remains a celebrated form of national art and resistance.',
    tag: 'National Art',
  },
  {
    id: 'keffiyeh-history',
    title: 'The Keffiyeh: A Fabric of Resistance & Identity',
    short: 'Tracing the journey of the black-and-white checkered scarf from rural origins to a global symbol of solidarity.',
    content: 'The Keffiyeh, particularly the black-and-white checkered pattern, is perhaps the most recognizable symbol of Palestinian identity worldwide. Originally worn by farmers (fellahin) to protect against the sun and dust, it became a powerful political statement during the 1936 Arab Revolt against British colonial rule.\n\nEach pattern on the Keffiyeh carries deep meaning: the fishnet pattern represents the Palestinian connection to the Mediterranean Sea, the bold lines represent trade routes through the land, and the olive leaf pattern honors the resilience of the ancient groves. Today, wearing the Keffiyeh is a global gesture of solidarity, representing the persistent struggle for freedom, justice, and the recognition of human rights.',
    tag: 'Symbolism',
  },
  {
    id: 'digital-advocacy',
    title: 'Digital Advocacy: Speaking Truth in the Algorithmic Age',
    short: 'How Palestinian youth use social media and open technology to document reality and bypass traditional media barriers.',
    content: 'In the modern era, the struggle for Palestinian rights has moved into the digital frontier. With traditional media often filtering or omitting key narratives, Palestinian youth and activists have turned to social media platforms to broadcast raw, unedited reality to the world in real-time. This "digital intifada" uses hashtags, viral videos, and citizen journalism to bypass traditional gatekeepers.\n\nHowever, this digital presence faces significant challenges, including shadow-banning, algorithmic bias, and systematic censorship. Despite these hurdles, the use of open-source tools, VPNs, and decentralized networks has allowed the Palestinian story to reach millions globally. It highlights that in the 21st century, the ability to document and share ones own story is one of the most potent forms of resistance.',
    tag: 'Modern Struggle',
  },
];

export default function Palestine() {
  const [selectedEssay, setSelectedEssay] = useState(null);

  return (
    <section id="palestine" className={`section ${styles.palestine}`}>
      <div className={`orb orb-purple ${styles.orb1}`} />
      <div className={`orb orb-cyan ${styles.orb2}`} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <p className="section-label">{'// solidarity & justice'}</p>
          <h2 className="section-title">
            Stand for <span className={styles.palText}>Palestine</span>
          </h2>
          <p className="section-subtitle">
            Honoring history, celebrating eternal cultural resilience, and advocating for human rights and absolute justice.
          </p>
          <div className={`divider ${styles.palDivider}`} />
        </motion.div>

        {/* 6 History Cards */}
        <div className={styles.grid}>
          {historyCards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.15 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardEmoji}>{card.emoji}</span>
                <span className={styles.palColorIndicator} style={{ backgroundColor: card.color }} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`glass-card ${styles.quoteCard}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className={styles.quoteIcon}>“</span>
          <p className={styles.quoteText}>
            We have on this earth what makes life worth living: the hesitation of April, the aroma of bread at dawn, a woman’s opinion of men, the writings of Aeschylus, the beginning of love, grass on a stone, mothers standing on a thread of a flute, and the invaders’ fear of memories.
          </p>
          <p className={styles.quoteAuthor}>— Mahmoud Darwish, Palestinian Poet Laureate</p>
        </motion.div>

        {/* Interactive Advocacy Articles Section */}
        <div className={styles.articlesHeader}>
          <p className={styles.articlesSub}>{'// educational resource library'}</p>
          <h3 className={styles.articlesTitle}>Advocacy & Historical truth</h3>
          <p className={styles.articlesDesc}>Explore expanding essays written to highlight and preserve profound historic realities.</p>
        </div>

        <div className={styles.essayGrid}>
          {essays.map((essay, i) => (
            <motion.div
              key={essay.id}
              className={`glass-card ${styles.essayCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className={styles.essayTag}>{essay.tag}</span>
              <h4 className={styles.essayCardTitle}>{essay.title}</h4>
              <p className={styles.essayShort}>{essay.short}</p>
              <button 
                className={`btn btn-sm ${styles.readBtn}`}
                onClick={() => setSelectedEssay(essay)}
              >
                Read Essay &rarr;
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.actionContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.actionText}>Want to support humanitarian relief and medical aid on the ground?</p>
          <div className={styles.actionButtons}>
            <a href="https://www.palestinercs.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Flag country="PS" /> Palestine Red Crescent Society (PRCS)
            </a>
            <a href="https://globalsumudflotilla.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              🌐 Global Sumud Flotilla
            </a>
          </div>
        </motion.div>
      </div>

      {/* Glassmorphic Advocacy Modal Overlay */}
      <AnimatePresence>
        {selectedEssay && (
          <div className={styles.modalOverlay} onClick={() => setSelectedEssay(null)}>
            <motion.div
              className={`glass-card ${styles.modalContent}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <button 
                className={styles.closeBtn} 
                onClick={() => setSelectedEssay(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <span className={styles.modalTag}>{selectedEssay.tag}</span>
              <h3 className={styles.modalTitle}>{selectedEssay.title}</h3>
              <div className={styles.modalDivider} />
              
              <div className={styles.modalBody}>
                {selectedEssay.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <button 
                className={`btn btn-outline ${styles.modalCloseCta}`}
                onClick={() => setSelectedEssay(null)}
              >
                Go Back
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
