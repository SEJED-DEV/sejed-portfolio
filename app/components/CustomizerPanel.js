'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './CustomizerPanel.module.css';

export default function CustomizerPanel({ config, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const handlePersonalChange = (key, val) => {
    onChange({
      ...config,
      personal: {
        ...config.personal,
        [key]: val,
      },
    });
  };

  const handleStatChange = (index, key, val) => {
    const updatedStats = [...config.stats];
    updatedStats[index] = {
      ...updatedStats[index],
      [key]: val,
    };
    onChange({
      ...config,
      stats: updatedStats,
    });
  };

  const handleSocialChange = (index, key, val) => {
    const updatedSocials = [...config.socials];
    updatedSocials[index] = {
      ...updatedSocials[index],
      [key]: val,
    };
    onChange({
      ...config,
      socials: updatedSocials,
    });
  };

  const handleDownloadConfig = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "portfolio-config.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <>
      {/* Floating customize trigger */}
      <button 
        className={styles.triggerBtn} 
        onClick={() => setIsOpen(true)}
        aria-label="Customize Portfolio Layout"
      >
        <span className={styles.triggerPulse} />
        <span className={styles.triggerIcon}>⚙️</span>
        <span className={styles.triggerText}>Customize Portfolio</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div 
              className={styles.backdrop}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sci-fi panel slider */}
            <motion.div 
              className={`glass-card ${styles.panel}`}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            >
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.headerInfo}>
                  <h3>🌌 Portfolio Builder</h3>
                  <p>Customize and preview your own version in real-time!</p>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
              </div>
              <div className={styles.divider} />

              {/* Navigation Tabs */}
              <div className={styles.tabNav}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'personal' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('personal')}
                >
                  👤 Bio
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'stats' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('stats')}
                >
                  📈 Stats
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'socials' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('socials')}
                >
                  🔗 Socials
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'export' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('export')}
                >
                  🚀 Export
                </button>
              </div>

              {/* Form Content */}
              <div className={styles.tabContent}>
                {activeTab === 'personal' && (
                  <div className={styles.formGroup}>
                    <div className={styles.inputField}>
                      <label>First Name</label>
                      <input 
                        type="text" 
                        value={config.personal.firstName}
                        onChange={(e) => handlePersonalChange('firstName', e.target.value)}
                      />
                    </div>
                    <div className={styles.inputField}>
                      <label>Last Name</label>
                      <input 
                        type="text" 
                        value={config.personal.lastName}
                        onChange={(e) => handlePersonalChange('lastName', e.target.value)}
                      />
                    </div>
                    <div className={styles.inputField}>
                      <label>Professional Role</label>
                      <input 
                        type="text" 
                        value={config.personal.role}
                        onChange={(e) => handlePersonalChange('role', e.target.value)}
                      />
                    </div>
                    <div className={styles.inputField}>
                      <label>Location</label>
                      <input 
                        type="text" 
                        value={config.personal.location}
                        onChange={(e) => handlePersonalChange('location', e.target.value)}
                      />
                    </div>
                    <div className={styles.inputField}>
                      <label>Hero Description</label>
                      <textarea 
                        rows={3}
                        value={config.personal.bioShort}
                        onChange={(e) => handlePersonalChange('bioShort', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className={styles.formGroup}>
                    {config.stats.map((s, idx) => (
                      <div key={idx} className={styles.statGridItem}>
                        <h4>Stat Card #{idx + 1}</h4>
                        <div className={styles.inputField}>
                          <label>Stat Metric (e.g. 2.4M+)</label>
                          <input 
                            type="text" 
                            value={s.value}
                            onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                          />
                        </div>
                        <div className={styles.inputField}>
                          <label>Stat Label</label>
                          <input 
                            type="text" 
                            value={s.label}
                            onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'socials' && (
                  <div className={styles.formGroup}>
                    {config.socials.map((social, idx) => (
                      <div key={social.name} className={styles.inputField}>
                        <label>{social.name} Username/Value</label>
                        <input 
                          type="text" 
                          value={social.value}
                          onChange={(e) => handleSocialChange(idx, 'value', e.target.value)}
                        />
                        <label className={styles.subLabel}>Link Address (href)</label>
                        <input 
                          type="text" 
                          value={social.href}
                          onChange={(e) => handleSocialChange(idx, 'href', e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'export' && (
                  <div className={styles.exportSection}>
                    <div className={styles.successBox}>
                      <span>🎉 Live Preview active!</span>
                      <p>Look behind this dashboard; all your changes are updating on the website instantly!</p>
                    </div>

                    <Link href="/customize" className={styles.studioLinkBtn}>
                      🎨 Open Full-Screen Studio Workspace
                    </Link>

                    <div className={styles.instructionCard}>
                      <h4>🛠️ How to deploy your version:</h4>
                      <ol>
                        <li>Click the download button below to get your config file.</li>
                        <li>Fork Sejed's repository: <br/><code>github.com/SEJED-DEV/sejed-portfolio</code></li>
                        <li>Replace the content of <code>app/config/defaultConfig.js</code> with your downloaded JSON structure.</li>
                        <li>Deploy to Vercel in 1 click!</li>
                      </ol>
                    </div>

                    <button className={styles.downloadBtn} onClick={handleDownloadConfig}>
                      📥 Download config.json
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
