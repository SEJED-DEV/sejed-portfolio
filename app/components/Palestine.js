'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Palestine.module.css';
import Flag from './Flag';

const historyCards = [
  {
    title: 'The Nakba (1948)',
    desc: 'The Nakba ("Catastrophe") represents the systemic mass expulsion and displacement of over 700,000 Palestinians from their homeland, creating a global refugee community that preserves their sacred Right of Return (UN Resolution 194) through generations.',
    emoji: '🗝️',
    color: '#ef4444',
  },
  {
    title: 'Sumud (Steadfastness)',
    desc: 'Sumud is the ultimate philosophy of non-violent resistance and steadfast preservation of presence. It is the persistent connection to native soil, reflecting the daily resilient survival and pride of the Palestinian people under hardship.',
    emoji: '✊',
    color: '#10b981',
  },
  {
    title: 'Ancient Olive Groves',
    desc: 'Olive groves represent the eternal roots of Palestine. Some olive trees are over 4,000 years old, existing long before modern borders. They stand as silent witnesses to history, symbolizing life, peace, and unbreakable land connection.',
    emoji: '🌿',
    color: '#000000',
  },
  {
    title: 'Tatreez Embroidery',
    desc: 'Tatreez is the ancient art of Palestinian cross-stitch embroidery. More than beautiful patterns, it is a detailed visual language where every stitch, color, and motif tells a rich story of regional origin, social history, and identity.',
    emoji: '🪡',
    color: '#ef4444',
  },
  {
    title: 'Voice & Digital Advocacy',
    desc: 'Using open-source software, digital platforms, developer networks, and media channels to document realities, speak truth to power, challenge censorship, and stand unified with human rights movements worldwide.',
    emoji: '📢',
    color: '#10b981',
  },
  {
    title: 'Poetic Legacy & Literature',
    desc: 'Celebrated authors and poets like Mahmoud Darwish and Ghassan Kanafani have shaped the global consciousness. Literature preserves collective memory against erasure, highlighting that storytelling is a powerful form of resistance.',
    emoji: '📖',
    color: '#000000',
  },
];

const allEssays = [
  {
    id: 'olive-trees',
    title: 'The Ancient Legacy of Palestinian Olive Trees',
    short: 'Why the olive tree is more than agriculture — it is an eternal symbol of endurance and sacred connection to the land.',
    content: 'For Palestinians, the olive tree is more than an agricultural asset; it is an enduring symbol of history, survival, and deep land roots. Some olive trees inside Palestine (such as the Al-Badawi tree in Al-Walaja, Bethlehem) are verified to be between 4,000 and 5,000 years old. They existed long before modern geopolitical lines, standing as silent witnesses to thousands of years of history.\n\nCaring for olive groves is a sacred tradition passed down through generations. During the harvest, entire families gather, celebrating their persistent survival, making olive oil a cornerstone of local culture, food, and economy. Protecting these ancient groves is central to preserving Palestinian heritage against displacement.',
    tag: 'Culture & Land',
    featured: true,
  },
  {
    id: 'nakba-keys',
    title: 'Understanding the Nakba & The Symbol of the Key',
    short: 'Exploring the history of 1948 mass displacements and why physical house keys remain a global symbol of hope.',
    content: 'The Nakba ("The Catastrophe") refers to the systemic mass displacement and expulsion of over 700,000 Palestinians from their homes, cities, and villages during the creation of Israel in 1948. Over 500 villages were completely depopulated or destroyed.\n\nFor millions of refugees worldwide, the key is the most powerful symbol of this ongoing displacement. Many families still keep the heavy iron keys to their original ancestral homes in Haifa, Jaffa, or Jerusalem, passing them down to their children. Under international law (UN General Assembly Resolution 194), Palestinians maintain a sacred, legal Right of Return to their original homes, and the key represents the unwavering promise of return.',
    tag: 'History & Rights',
    featured: true,
  },
  {
    id: 'tatreez-language',
    title: 'Tatreez Stitching: Threading a Secret Language',
    short: 'How Palestinian women used traditional embroidery patterns to preserve messages and combat cultural erasure.',
    content: 'Tatreez is the traditional, detailed Palestinian art of cross-stitch embroidery. For centuries, Tatreez was much more than simple decorative sewing; it functioned as a sophisticated, non-verbal visual language. Every region in Palestine has its own distinct motifs, color palettes, and geometric patterns.\n\nBy reading the embroidery on a woman\'s dress, one could immediately identify her village of origin, her social status, and key events in her life. During times of conflict, women used Tatreez motifs to thread secret messages, document geographic lineages, and preserve their identity against systematic cultural erasure. Today, it remains a celebrated form of national art and resistance.',
    tag: 'Culture & Land',
    featured: true,
  },
  {
    id: 'keffiyeh-history',
    title: 'The Keffiyeh: A Fabric of Resistance & Identity',
    short: 'Tracing the journey of the black-and-white checkered scarf from rural origins to a global symbol of solidarity.',
    content: 'The Keffiyeh, particularly the black-and-white checkered pattern, is perhaps the most recognizable symbol of Palestinian identity worldwide. Originally worn by farmers (fellahin) to protect against the sun and dust, it became a powerful political statement during the 1936 Arab Revolt against British colonial rule.\n\nEach pattern on the Keffiyeh carries deep meaning: the fishnet pattern represents the Palestinian connection to the Mediterranean Sea, the bold lines represent trade routes through the land, and the olive leaf pattern honors the resilience of the ancient groves. Today, wearing the Keffiyeh is a global gesture of solidarity, representing the persistent struggle for freedom, justice, and the recognition of human rights.',
    tag: 'Symbolism',
    featured: true,
  },
  {
    id: 'digital-advocacy',
    title: 'Digital Advocacy: Speaking Truth in the Algorithmic Age',
    short: 'How Palestinian youth use social media and open technology to document reality and bypass traditional media barriers.',
    content: 'In the modern era, the struggle for Palestinian rights has moved into the digital frontier. With traditional media often filtering or omitting key narratives, Palestinian youth and activists have turned to social media platforms to broadcast raw, unedited reality to the world in real-time. This "digital intifada" uses hashtags, viral videos, and citizen journalism to bypass traditional gatekeepers.\n\nHowever, this digital presence faces significant challenges, including shadow-banning, algorithmic bias, and systematic censorship. Despite these hurdles, the use of open-source tools, VPNs, and decentralized networks has allowed the Palestinian story to reach millions globally. It highlights that in the 21st century, the ability to document and share ones own story is one of the most potent forms of resistance.',
    tag: 'Modern Struggle',
    featured: true,
  },
  {
    id: 'al-aqsa',
    title: 'Al-Aqsa Mosque: The Heart of Muslim Jerusalem',
    short: 'Exploring the profound significance of Islam\'s third holiest site at the center of Palestinian identity.',
    content: 'Al-Aqsa Mosque, located in the Old City of Jerusalem, is the third holiest site in Islam and stands as a powerful symbol of Palestinian faith, identity, and sovereignty. The sprawling 144-dunam compound includes the iconic Dome of the Rock, multiple prayer halls, and centuries of Islamic architecture.\n\nFor Palestinians, Al-Aqsa is not merely a religious site — it represents the core of their national and cultural identity. Centuries of Islamic governance, scholarship, and art have been centered around this sacred space. The compound has been a unifying symbol for Muslims worldwide, and its protection remains a central issue in the Palestinian struggle. Despite restrictions on access and periodic closures, worshippers continue to fill its courtyards daily, affirming their unwavering connection to Jerusalem.',
    tag: 'History & Rights',
    featured: true,
  },
  {
    id: 'gaza-history',
    title: 'Gaza: 5,000 Years of Civilization & Resilience',
    short: 'The deep history of the Gaza Strip — from Canaanite trade hub to modern symbol of endurance.',
    content: 'The Gaza Strip has been continuously inhabited for over 5,000 years, making it one of the oldest continuously occupied regions on Earth. Known in antiquity as a major Canaanite trade center connecting Egypt and the Levant, Gaza has been shaped by Philistines, Romans, Byzantines, Mamluks, and Ottomans.\n\nIts strategic coastal location made it a prized possession for empires throughout history. The Great Omari Mosque, built on the ruins of a Byzantine church, reflects this layered history. In modern times, Gaza has been under a crippling blockade since 2007, turning what was once a thriving coastal corridor into what the UN calls an "open-air prison." Despite this, Gaza\'s people continue to demonstrate extraordinary resilience — its universities, hospitals, and cultural institutions persist against all odds, embodying the indomitable spirit of Palestinian survival.',
    tag: 'History & Rights',
    featured: true,
  },
  {
    id: 'palestinian-cuisine',
    title: 'Palestinian Cuisine: A Taste of Resistance',
    short: 'How traditional Palestinian dishes like musakhan and maqluba preserve identity and tell stories of the land.',
    content: 'Palestinian cuisine is a vibrant, centuries-old culinary tradition that tells the story of the land through its flavors. Dishes like musakhan (sumac-spiced chicken on taboon bread), maqluba (an upside-down rice and vegetable dish), and knafeh (sweet cheese pastry) are not just meals — they are acts of cultural preservation.\n\nEach dish reflects the agricultural bounty of Palestine: olive oil from ancient groves, za\'atar harvested from the hills, and fresh produce from family farms. Cooking and sharing these traditional meals has become a form of resistance against cultural erasure. Community kitchens, food festivals, and social media cooking tutorials help preserve recipes passed down through generations. In refugee camps and diaspora communities worldwide, the aromas of Palestinian cooking keep the memory of home alive, reinforcing that culture cannot be displaced.',
    tag: 'Culture & Land',
    featured: true,
  },
  {
    id: 'apartheid-wall',
    title: 'The Annexation Wall: Illegal Under International Law',
    short: 'How the 700+ km wall fragments Palestinian communities and violates fundamental human rights.',
    content: 'In 2002, Israel began constructing a massive separation barrier winding through the occupied West Bank, extending approximately 700+ kilometers. The International Court of Justice (ICJ) issued a landmark advisory opinion in 2004 declaring the wall illegal under international law, calling for its dismantlement and reparations for damages caused.\n\nThe wall does not follow the 1949 Green Line (the internationally recognized border). Instead, it snakes deep into the West Bank, annexing approximately 85% of the separation zone and swallowing large swaths of Palestinian farmland, water wells, and communities. It has fragmented villages, separated farmers from their fields, and cut off access to schools, hospitals, and holy sites. The wall represents a physical manifestation of the systematic fragmentation of Palestinian land and life.',
    tag: 'Modern Struggle',
    featured: true,
  },
  {
    id: 'child-detention',
    title: 'Children in Military Detention: A Crisis of Conscience',
    short: 'Examining the systematic detention and mistreatment of Palestinian children in military custody.',
    content: 'Since 1967, an estimated 500,000 to 800,000 Palestinian children have been detained, interrogated, and prosecuted in Israeli military courts. UNICEF has documented systematic mistreatment including night raids, shackling, sleep deprivation, solitary confinement, and coerced confessions in a language many children do not speak.\n\nInternational law, including the Fourth Geneva Convention and the UN Convention on the Rights of the Child, explicitly prohibits the military detention of children. Yet Palestinian minors — some as young as 12 — continue to face prosecution in military courts that lack basic due process protections. Human rights organizations consistently report that these practices cause lasting psychological trauma and violate the fundamental rights of childhood. The international community has repeatedly called for an immediate end to this practice.',
    tag: 'Human Rights',
    featured: true,
  },
  {
    id: 'bethlehem',
    title: 'Bethlehem: Where Faith Meets Resilience',
    short: 'The biblical birthplace of Jesus stands today as a living testament to Palestinian Christian heritage and endurance.',
    content: 'Bethlehem, revered worldwide as the birthplace of Jesus Christ, is home to the Church of the Nativity — one of the oldest continuously operating churches in the world. This UNESCO World Heritage site draws pilgrims from every continent, yet the city itself faces unique challenges under occupation.\n\nSurrounded by the separation wall and settlement expansion, Bethlehem\'s economy — heavily reliant on tourism and pilgrimage — has been severely impacted. Despite these obstacles, Bethlehem\'s Christian and Muslim communities maintain a spirit of resilience and coexistence. The city remains a powerful symbol of faith, history, and the enduring hope for peace in the land where it all began.',
    tag: 'History & Rights',
  },
  {
    id: 'palestinian-christians',
    title: 'Palestinian Christians: Guardians of an Ancient Legacy',
    short: 'One of the oldest Christian communities in the world continues to preserve its faith and heritage in the Holy Land.',
    content: 'Palestinian Christians are among the oldest Christian communities in the world, with a presence in the Holy Land dating back to the first century AD. Communities in Jerusalem, Bethlehem, Ramallah, and Nazareth maintain ancient traditions, speaking a dialect of Aramaic — the language spoken by Jesus Christ himself.\n\nDespite facing emigration pressures due to economic hardship and political instability, Palestinian Christians remain deeply committed to their ancestral homeland. They are active in every sector of Palestinian society — as educators, doctors, artists, and political leaders. The Church of the Holy Sepulchre in Jerusalem, shared among several Christian denominations, stands as a testament to this unbroken heritage. The preservation of this community is essential to maintaining the diverse, multi-religious fabric of historic Palestine.',
    tag: 'Culture & Land',
  },
  {
    id: 'water-apartheid',
    title: 'Water Apartheid: Controlling the Jordan Valley',
    short: 'How unequal water distribution in the occupied territories amounts to a systematic human rights violation.',
    content: 'The Jordan Valley, the agricultural heartland of the occupied West Bank, presents one of the starkest examples of systematic inequality in water access. Palestinian farmers in the valley are routinely allocated a fraction of the water that Israeli settlers receive from the shared Mountain Aquifer — sometimes as little as one-tenth per capita.\n\nInternational humanitarian law prohibits an occupying power from exploiting the natural resources of occupied territory for its own benefit, yet the disparity continues to grow. Palestinian wells are restricted in depth and output, while settler agriculture thrives with abundant water for irrigation and intensive farming. This "water apartheid" has devastating consequences: crop failure, economic hardship, and forced displacement from ancestral farmland. Human rights organizations and the UN have repeatedly documented this systematic discrimination.',
    tag: 'Human Rights',
  },
  {
    id: 'great-march',
    title: 'The Great March of Return: A Peaceful Protest',
    short: 'The weekly demonstrations at the Gaza border that demanded the right of return and an end to the blockade.',
    content: 'Beginning on March 30, 2018, Palestinians in Gaza launched the Great March of Return — a series of weekly, largely peaceful demonstrations along the Gaza-Israel border. The protests demanded the implementation of the internationally recognized right of return for Palestinian refugees and an end to the 17-year blockade that has devastated Gaza\'s economy and infrastructure.\n\nDespite the organizers\' commitment to non-violent civil disobedience — including flying kites, burning tires to obscure sniper lines, and marching unarmed — the protests were met with overwhelming military force. Over the course of the demonstrations, hundreds of protesters were killed and tens of thousands injured, including medics, journalists, and children. UN investigations documented excessive use of force, and international human rights organizations condemned the killings as potential war crimes. The Great March of Return remains a powerful symbol of Palestinian determination for freedom.',
    tag: 'Modern Struggle',
  },
  {
    id: 'jerusalem',
    title: 'Jerusalem: The Eternal Capital of Palestine',
    short: 'Exploring the profound significance of Jerusalem — a city sacred to billions and central to Palestinian national identity.',
    content: 'Jerusalem stands as one of the most contested cities in human history, yet for Palestinians, its significance is clear: it is the eternal capital of their homeland and the heart of their national identity. The eastern part of the city, including the Old City with its holy sites, has been under Israeli occupation since 1967 and was illegally annexed in 1980 — a move not recognized by any United Nations member state.\n\nThe city is home to the Haram al-Sharif (the Noble Sanctuary) housing Al-Aqsa Mosque and the Dome of the Rock, the third holiest site in Islam. It also holds profound significance for Christians as the site of the Church of the Holy Sepulchre. For centuries, Jerusalem was a thriving center of Palestinian cultural, economic, and religious life. Today, the city faces systematic efforts to change its demographic character through settlement expansion, home demolitions, and residency revocation. Yet its Palestinian soul remains unbroken, with families tracing their presence in the city back for millennia.',
    tag: 'History & Rights',
  },
  {
    id: 'dabke',
    title: 'Dabke: The Dance of Palestinian Unity',
    short: 'How the traditional line dance connects generations and communities, preserving folklore across borders.',
    content: 'Dabke is a traditional Levantine folk dance that holds a special place in Palestinian cultural identity. Performed at weddings, festivals, and national celebrations, Dabke features dancers linking arms in a line, stomping in synchronized rhythm to the beat of the mijwiz and tablah. The word "dabke" itself means "stomping of the feet" — a reference to its energetic, earthy movements.\n\nMore than entertainment, Dabke is a powerful expression of communal unity and connection to the land. Each region of Palestine has its own distinct steps and variations — from the coastal Dabke of Jaffa to the mountain Dabke of the West Bank hills. In refugee camps and diaspora communities, teaching Dabke to younger generations preserves folklore and strengthens identity. Dance troupes around the world perform Palestinian Dabke, transforming a traditional folk art into a vibrant global statement of cultural pride.',
    tag: 'Culture & Land',
  },
  {
    id: 'unrwa',
    title: 'UNRWA: Lifeline for Palestinian Refugees',
    short: 'The critical role of the UN agency providing education, healthcare, and aid to millions of Palestinian refugees.',
    content: 'The United Nations Relief and Works Agency for Palestine Refugees (UNRWA) was established by the UN General Assembly in 1949 to provide direct relief and essential services to Palestinian refugees displaced by the Nakba. Today, UNRWA serves over 5.9 million registered refugees across its five fields of operation: Jordan, Lebanon, Syria, the West Bank, and Gaza.\n\nThe agency runs one of the largest school systems in the Middle East, educating over 500,000 children annually. It provides primary healthcare through 143 clinics, social services to the most vulnerable, and microfinance programs supporting economic self-reliance. UNRWA has been repeatedly threatened with defunding, which would have catastrophic humanitarian consequences. For millions of Palestinian refugees, UNRWA is not just an agency — it is a lifeline representing the international community\'s ongoing responsibility until a just political solution is achieved.',
    tag: 'Human Rights',
  },
];

const tagFilters = [
  'All',
  'History & Rights',
  'Culture & Land',
  'Symbolism',
  'Modern Struggle',
  'Human Rights',
];

export default function Palestine({ showAll }) {
  const displayEssays = showAll
    ? allEssays
    : allEssays.filter(e => e.featured);
  const [selectedEssay, setSelectedEssay] = useState(null);
  const [tagFilter, setTagFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchQuery.toLowerCase().trim();
  const filtered = displayEssays.filter(e => {
    const tagMatch = tagFilter === 'All' || e.tag === tagFilter;
    const searchMatch = !query ||
      e.title.toLowerCase().includes(query) ||
      e.short.toLowerCase().includes(query) ||
      e.tag.toLowerCase().includes(query);
    return tagMatch && searchMatch;
  });

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

        {/* Stats Row */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.statCard}>
            <span className={styles.statValue}>{allEssays.length}</span>
            <span className={styles.statLabel}>Articles</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>6</span>
            <span className={styles.statLabel}>Cultural Topics</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>5,000+</span>
            <span className={styles.statLabel}>Years of History</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>17</span>
            <span className={styles.statLabel}>Essays Published</span>
          </div>
        </motion.div>

        {/* History Cards */}
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

        {/* Quote */}
        <motion.div
          className={`glass-card ${styles.quoteCard}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className={styles.quoteIcon}>{"\u201C"}</span>
          <p className={styles.quoteText}>
            We have on this earth what makes life worth living: the hesitation of April, the aroma of bread at dawn, a woman{"\u2019"}s opinion of men, the writings of Aeschylus, the beginning of love, grass on a stone, mothers standing on a thread of a flute, and the invaders{"\u2019"} fear of memories.
          </p>
          <p className={styles.quoteAuthor}>{"\u2014"} Mahmoud Darwish, Palestinian Poet Laureate</p>
        </motion.div>

        {/* Essays Section */}
        <div className={styles.essaysSection}>
          <div className={styles.essaysHeader}>
            <p className={styles.essaysSub}>{'// educational resource library'}</p>
            <h3 className={styles.essaysTitle}>Advocacy & Historical Truth</h3>
            <p className={styles.essaysDesc}>
              {showAll
                ? 'Comprehensive essays documenting Palestinian history, culture, and contemporary realities.'
                : 'Featured essays documenting Palestinian history, culture, and contemporary realities.'}
            </p>
          </div>

          {/* Filters + Search */}
          <div className={styles.filtersRow}>
            <div className={styles.tagFilters}>
              {tagFilters.map(t => (
                <button
                  key={t}
                  className={`${styles.tagBtn} ${tagFilter === t ? styles.tagActive : ''}`}
                  onClick={() => setTagFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            {showAll && (
              <div className={styles.searchWrap}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className={styles.essayGrid}>
            <AnimatePresence mode="popLayout">
              {filtered.map((essay, i) => (
                <motion.div
                  key={essay.id}
                  className={`glass-card ${styles.essayCard}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
            </AnimatePresence>
          </div>

          {!showAll && (
            <div style={{ textAlign: 'center', marginTop: '-40px', marginBottom: '48px' }}>
              <a href="/palestine" className="btn btn-outline">
                View All Articles &rarr;
              </a>
            </div>
          )}
        </div>

        {/* Action Buttons */}
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
              Global Sumud Flotilla
            </a>
          </div>
        </motion.div>
      </div>

      {/* Essay Modal */}
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
                {'✕'}
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
