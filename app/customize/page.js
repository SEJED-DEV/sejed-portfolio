'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './customize.module.css';
import { defaultConfig } from '../config/defaultConfig';

export default function CustomizeStudio() {
  const [config, setConfig] = useState(defaultConfig);
  const [activeCategory, setActiveCategory] = useState('theme');

  // Input Handlers
  const updatePersonal = (key, val) => {
    setConfig(prev => ({
      ...prev,
      personal: { ...prev.personal, [key]: val }
    }));
  };

  const updateDiscordBot = (key, val) => {
    setConfig(prev => ({
      ...prev,
      discordBot: { ...prev.discordBot, [key]: val }
    }));
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

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all custom fields to Sejed's default config?")) {
      setConfig(defaultConfig);
    }
  };

  // Timeline handlers
  const updateTimelineItem = (idx, key, val) => {
    const updated = [...config.timeline];
    updated[idx] = { ...updated[idx], [key]: val };
    setConfig(prev => ({ ...prev, timeline: updated }));
  };

  const addTimelineItem = () => {
    setConfig(prev => ({
      ...prev,
      timeline: [
        ...prev.timeline,
        { year: '2026', label: 'New Milestone', emoji: '🌟', desc: 'Describe your achievement here.' }
      ]
    }));
  };

  const removeTimelineItem = (idx) => {
    const updated = config.timeline.filter((_, i) => i !== idx);
    setConfig(prev => ({ ...prev, timeline: updated }));
  };

  // Projects handlers
  const updateProjectItem = (idx, key, val) => {
    const updated = [...config.projects];
    updated[idx] = { ...updated[idx], [key]: val };
    setConfig(prev => ({ ...prev, projects: updated }));
  };

  const addProjectItem = () => {
    setConfig(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        { title: 'New Build', description: 'Brief description.', tags: ['React'], color: 'indigo', emoji: '🚀', category: 'web', github: '', live: '' }
      ]
    }));
  };

  const removeProjectItem = (idx) => {
    const updated = config.projects.filter((_, i) => i !== idx);
    setConfig(prev => ({ ...prev, projects: updated }));
  };

  // Font selections mapping helper
  const getFontFamily = (fontKey) => {
    if (fontKey === 'fira-code') return "'Fira Code', monospace";
    if (fontKey === 'inter') return "'Inter', sans-serif";
    return "'Outfit', sans-serif";
  };

  return (
    <div className={`${styles.studioContainer} theme-${config.personal.themeColor}`} style={{ fontFamily: getFontFamily(config.personal.themeFont) }}>
      {/* Studio Header Panel */}
      <header className={styles.studioHeader}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.backBtn}>
            ← Exit Studio
          </Link>
          <div className={styles.titleWrapper}>
            <h2>🌌 Cosmic Portfolio <span className="gradient-text">Studio</span> <span className={styles.betaBadge}>BETA</span></h2>
            <p>Advanced real-time split-screen builder ecosystem for developers</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.resetBtn} onClick={handleReset}>
            🔄 Reset Defaults
          </button>
          <button className={styles.exportBtn} onClick={handleDownloadConfig}>
            📥 Download config.json
          </button>
        </div>
      </header>

      {/* Main Studio Body (Split Screen) */}
      <div className={styles.studioBody}>
        {/* Left Side: Customization Sidebar Controls */}
        <div className={styles.controlSidebar}>
          {/* Section Navigation Categories */}
          <nav className={styles.sideNav}>
            <button 
              className={`${styles.navBtn} ${activeCategory === 'theme' ? styles.navActive : ''}`}
              onClick={() => setActiveCategory('theme')}
            >
              🎨 Theme & Typography
            </button>
            <button 
              className={`${styles.navBtn} ${activeCategory === 'personal' ? styles.navActive : ''}`}
              onClick={() => setActiveCategory('personal')}
            >
              👤 Bio & Story
            </button>
            <button 
              className={`${styles.navBtn} ${activeCategory === 'stats' ? styles.navActive : ''}`}
              onClick={() => setActiveCategory('stats')}
            >
              📈 Metrics Stats
            </button>
            <button 
              className={`${styles.navBtn} ${activeCategory === 'discord' ? styles.navActive : ''}`}
              onClick={() => setActiveCategory('discord')}
            >
              🤖 Discord Console Builder
            </button>
            <button 
              className={`${styles.navBtn} ${activeCategory === 'timeline' ? styles.navActive : ''}`}
              onClick={() => setActiveCategory('timeline')}
            >
              🏫 Journey Timeline
            </button>
            <button 
              className={`${styles.navBtn} ${activeCategory === 'projects' ? styles.navActive : ''}`}
              onClick={() => setActiveCategory('projects')}
            >
              🚀 Featured Projects
            </button>
          </nav>

          {/* Form Content panel */}
          <div className={styles.formContainer}>
            {activeCategory === 'theme' && (
              <div className={styles.formGroup}>
                <h3>🎨 Accent Color Schemes</h3>
                <p className={styles.helpText}>Select a vibrant theme color to repaint the entire cosmic gradient theme instantly:</p>
                <div className={styles.colorSelector}>
                  {['indigo', 'purple', 'cyan', 'green', 'red'].map(color => (
                    <button
                      key={color}
                      className={`${styles.colorBadge} ${styles[color]} ${config.personal.themeColor === color ? styles.colorActive : ''}`}
                      onClick={() => updatePersonal('themeColor', color)}
                      title={`Select ${color} theme`}
                    >
                      {config.personal.themeColor === color && '✓'}
                    </button>
                  ))}
                </div>

                <div className={styles.divider} />

                <h3>🔤 Advanced Typography Selectors</h3>
                <p className={styles.helpText}>Adjust the typography family system for your portfolio dynamically:</p>
                <div className={styles.toggleField}>
                  <label className={styles.inputLabel}>Choose Font Family</label>
                  <select 
                    value={config.personal.themeFont} 
                    onChange={(e) => updatePersonal('themeFont', e.target.value)}
                    className={styles.studioSelect}
                  >
                    <option value="outfit">Outfit (Geometric default)</option>
                    <option value="fira-code">Fira Code (Developer monospaced)</option>
                    <option value="inter">Inter (Clean modern sans-serif)</option>
                  </select>
                </div>

                <div className={styles.divider} />

                <h3>🌌 Cosmic Background Effects Selection</h3>
                <p className={styles.helpText}>Select the dynamic canvas engine operating in the background layer:</p>
                <div className={styles.toggleField}>
                  <label className={styles.inputLabel}>Background FX Mode</label>
                  <select 
                    value={config.personal.backgroundFx} 
                    onChange={(e) => updatePersonal('backgroundFx', e.target.value)}
                    className={styles.studioSelect}
                  >
                    <option value="particles">Starfield Gravity Particles (High UX interactive)</option>
                    <option value="nebulas">Floating Nebulas & Orbs (Vibrant colors, zero CPU load)</option>
                    <option value="static">Deep Space gradient (Static backdrop, maximum speed)</option>
                  </select>
                </div>

                <div className={styles.divider} />

                <h3>🖥️ Performance & Sections Visibility</h3>
                <p className={styles.helpText}>Toggle heavier sections off if you want to optimize for maximum performance and zero-lag rendering:</p>
                
                <div className={styles.toggleField}>
                  <div className={styles.toggleText}>
                    <strong>Palestine Solidarity Section</strong>
                    <span>Dedicated history essays library overlay modals</span>
                  </div>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={config.personal.showPalestine}
                      onChange={(e) => updatePersonal('showPalestine', e.target.checked)}
                    />
                    <span className={styles.slider} />
                  </label>
                </div>

                <div className={styles.toggleField}>
                  <div className={styles.toggleText}>
                    <strong>Discord Bot Simulator Console</strong>
                    <span>Fully interactive simulated chat workspace with commands</span>
                  </div>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={config.personal.showSimulator}
                      onChange={(e) => updatePersonal('showSimulator', e.target.checked)}
                    />
                    <span className={styles.slider} />
                  </label>
                </div>

                <div className={styles.toggleField}>
                  <div className={styles.toggleText}>
                    <strong>Testimonials Reviews</strong>
                    <span>Client feedback carousel review slides</span>
                  </div>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={config.personal.showTestimonials}
                      onChange={(e) => updatePersonal('showTestimonials', e.target.checked)}
                    />
                    <span className={styles.slider} />
                  </label>
                </div>
              </div>
            )}

            {activeCategory === 'personal' && (
              <div className={styles.formGroup}>
                <h3>👤 Personal Biography Details</h3>
                <div className={styles.inputField}>
                  <label>First Name</label>
                  <input 
                    type="text" 
                    value={config.personal.firstName}
                    onChange={(e) => updatePersonal('firstName', e.target.value)}
                  />
                </div>
                <div className={styles.inputField}>
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    value={config.personal.lastName}
                    onChange={(e) => updatePersonal('lastName', e.target.value)}
                  />
                </div>
                <div className={styles.inputField}>
                  <label>Professional Sub-headline Role</label>
                  <input 
                    type="text" 
                    value={config.personal.role}
                    onChange={(e) => updatePersonal('role', e.target.value)}
                  />
                </div>
                <div className={styles.inputField}>
                  <label>Primary Location (e.g. City, Country)</label>
                  <input 
                    type="text" 
                    value={config.personal.location}
                    onChange={(e) => updatePersonal('location', e.target.value)}
                  />
                </div>
                <div className={styles.inputField}>
                  <label>Brief Headline Intro (Hero Section)</label>
                  <textarea 
                    rows={3}
                    value={config.personal.bioShort}
                    onChange={(e) => updatePersonal('bioShort', e.target.value)}
                  />
                </div>
              </div>
            )}

            {activeCategory === 'stats' && (
              <div className={styles.formGroup}>
                <h3>📈 Metrics Stats Grid</h3>
                <p className={styles.helpText}>Edit the 4 glowing highlighted metrics shown under the About section:</p>
                {config.stats.map((s, idx) => (
                  <div key={idx} className={styles.arrayItemCard}>
                    <div className={styles.inputField}>
                      <label>Stat Metric #{idx + 1} (e.g. 2.4M+)</label>
                      <input 
                        type="text" 
                        value={s.value}
                        onChange={(e) => {
                          const updated = [...config.stats];
                          updated[idx].value = e.target.value;
                          setConfig(prev => ({ ...prev, stats: updated }));
                        }}
                      />
                    </div>
                    <div className={styles.inputField}>
                      <label>Stat Label Description</label>
                      <input 
                        type="text" 
                        value={s.label}
                        onChange={(e) => {
                          const updated = [...config.stats];
                          updated[idx].label = e.target.value;
                          setConfig(prev => ({ ...prev, stats: updated }));
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'discord' && (
              <div className={styles.formGroup}>
                <h3>🤖 Interactive Discord Simulator Embed Constructor</h3>
                <p className={styles.helpText}>Customize the exact identity, avatars, and greetings of the simulated Discord bot console:</p>
                
                <div className={styles.inputField}>
                  <label>Bot Custom Display Name</label>
                  <input 
                    type="text" 
                    value={config.discordBot.botName}
                    onChange={(e) => updateDiscordBot('botName', e.target.value)}
                  />
                </div>
                <div className={styles.inputField}>
                  <label>Bot Custom Profile Avatar (Emoji)</label>
                  <input 
                    type="text" 
                    value={config.discordBot.botAvatar}
                    onChange={(e) => updateDiscordBot('botAvatar', e.target.value)}
                  />
                </div>
                <div className={styles.inputField}>
                  <label>Bot Simulated Welcome Description (Markdown bold support)</label>
                  <textarea 
                    rows={4} 
                    value={config.discordBot.welcomeMessage}
                    onChange={(e) => updateDiscordBot('welcomeMessage', e.target.value)}
                  />
                </div>
              </div>
            )}

            {activeCategory === 'timeline' && (
              <div className={styles.formGroup}>
                <div className={styles.groupHeader}>
                  <h3>🏫 Journey Timeline Milestones</h3>
                  <button className={styles.addItemBtn} onClick={addTimelineItem}>+ Add Node</button>
                </div>
                <p className={styles.helpText}>Construct your professional educational milestones:</p>
                {config.timeline.map((t, idx) => (
                  <div key={idx} className={styles.arrayItemCard}>
                    <div className={styles.cardHeaderRow}>
                      <h4>Milestone #{idx + 1}</h4>
                      <button className={styles.deleteBtn} onClick={() => removeTimelineItem(idx)}>Delete</button>
                    </div>
                    <div className={styles.grid2}>
                      <div className={styles.inputField}>
                        <label>Year Range</label>
                        <input type="text" value={t.year} onChange={(e) => updateTimelineItem(idx, 'year', e.target.value)} />
                      </div>
                      <div className={styles.inputField}>
                        <label>Emoji Icon</label>
                        <input type="text" value={t.emoji} onChange={(e) => updateTimelineItem(idx, 'emoji', e.target.value)} />
                      </div>
                    </div>
                    <div className={styles.inputField}>
                      <label>Headline Label</label>
                      <input type="text" value={t.label} onChange={(e) => updateTimelineItem(idx, 'label', e.target.value)} />
                    </div>
                    <div className={styles.inputField}>
                      <label>Detailed Description Paragraph</label>
                      <textarea rows={3} value={t.desc} onChange={(e) => updateTimelineItem(idx, 'desc', e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'projects' && (
              <div className={styles.formGroup}>
                <div className={styles.groupHeader}>
                  <h3>🚀 Featured Projects Catalog</h3>
                  <button className={styles.addItemBtn} onClick={addProjectItem}>+ Add Project</button>
                </div>
                <p className={styles.helpText}>Add, modify, or reorganize projects dynamically in the filterable grid:</p>
                {config.projects.map((p, idx) => (
                  <div key={idx} className={styles.arrayItemCard}>
                    <div className={styles.cardHeaderRow}>
                      <h4>Project #{idx + 1}: {p.title || 'Untitled'}</h4>
                      <button className={styles.deleteBtn} onClick={() => removeProjectItem(idx)}>Delete</button>
                    </div>
                    <div className={styles.inputField}>
                      <label>Project Title</label>
                      <input type="text" value={p.title} onChange={(e) => updateProjectItem(idx, 'title', e.target.value)} />
                    </div>
                    <div className={styles.grid2}>
                      <div className={styles.inputField}>
                        <label>Display Emoji</label>
                        <input type="text" value={p.emoji} onChange={(e) => updateProjectItem(idx, 'emoji', e.target.value)} />
                      </div>
                      <div className={styles.inputField}>
                        <label>Category (web / bot)</label>
                        <input type="text" value={p.category} onChange={(e) => updateProjectItem(idx, 'category', e.target.value)} />
                      </div>
                    </div>
                    <div className={styles.inputField}>
                      <label>Detailed Description</label>
                      <textarea rows={3} value={p.description} onChange={(e) => updateProjectItem(idx, 'description', e.target.value)} />
                    </div>
                    <div className={styles.inputField}>
                      <label>Repository (GitHub Link)</label>
                      <input type="text" value={p.github || ''} onChange={(e) => updateProjectItem(idx, 'github', e.target.value)} />
                    </div>
                    <div className={styles.inputField}>
                      <label>Live URL Preview Link</label>
                      <input type="text" value={p.live || ''} onChange={(e) => updateProjectItem(idx, 'live', e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Virtual Browser Mock Preview Frame */}
        <div className={styles.previewArea}>
          <div className={styles.previewChrome}>
            <div className={styles.chromeDots}>
              <span className={styles.cDotRed} />
              <span className={styles.cDotYellow} />
              <span className={styles.cDotGreen} />
            </div>
            <div className={styles.chromeAddressBar}>
              <span>https://{config.personal.domain || 'localhost:3000'}/</span>
            </div>
            <div className={styles.chromeRefresher}>🔄</div>
          </div>

          <div className={styles.browserFrameBody}>
            {/* Visual Portfolio Mock Mockup */}
            <div className={styles.mockHero}>
              <div className={styles.mockBadge}>Available for custom builds</div>
              <h1>Hi, I'm <span className="gradient-text">{config.personal.firstName || 'Developer'}</span></h1>
              <p className={styles.mockBioShort}>{config.personal.bioShort}</p>
              
              <div className={styles.mockStatsGrid}>
                {config.stats.map((s, idx) => (
                  <div key={idx} className={styles.mockStatCard}>
                    <span className={styles.mValue}>{s.value}</span>
                    <span className={styles.mLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Discord bot preview frame inside right preview! */}
            {config.personal.showSimulator && (
              <div className={styles.mockSectionCard}>
                <h3>🤖 Live Discord Bot Simulator Console Preview</h3>
                <div className={styles.mockDiscordConsole}>
                  <div className={styles.mDiscordHeader}>
                    <span className={styles.mDiscordHashtag}>#</span>
                    <span>🤖-cortex-commands</span>
                  </div>
                  <div className={styles.mDiscordMessage}>
                    <span className={styles.mDiscordAvatar}>{config.discordBot.botAvatar}</span>
                    <div className={styles.mDiscordMsgContent}>
                      <div className={styles.mDiscordMeta}>
                        <strong>{config.discordBot.botName}</strong>
                        <span className={styles.mDiscordBadge}>BOT</span>
                        <span className={styles.mDiscordTime}>Today at 12:00 PM</span>
                      </div>
                      <p className={styles.mDiscordText}>{config.discordBot.welcomeMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* About Card Preview */}
            <div className={styles.mockSectionCard}>
              <h3>👤 Academic Journey History</h3>
              <div className={styles.mockTimelineFlex}>
                {config.timeline.map((t, idx) => (
                  <div key={idx} className={styles.mockTimelineItem}>
                    <span className={styles.mTYear}>{t.year}</span>
                    <strong className={styles.mTLabel}>{t.emoji} {t.label}</strong>
                    <p className={styles.mTDesc}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects list preview */}
            <div className={styles.mockSectionCard}>
              <h3>🚀 Projects Catalog</h3>
              <div className={styles.mockProjectsGrid}>
                {config.projects.map((p, idx) => (
                  <div key={idx} className={styles.mockProjectCard}>
                    <strong>{p.emoji} {p.title || 'Untitled'}</strong>
                    <p>{p.description}</p>
                    <div className={styles.mockTagsRow}>
                      {p.tags?.map((t, tid) => (
                        <span key={tid} className={styles.mockTag}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active sections checklist */}
            <div className={styles.mockActiveFooter}>
              <span>✨ Active Sections: </span>
              <span>{config.personal.showPalestine ? '🇵🇸 Palestine (ON)' : 'Palestine (OFF)'}</span> •{' '}
              <span>{config.personal.showSimulator ? '🤖 Discord Chat Console (ON)' : 'Discord Chat (OFF)'}</span> •{' '}
              <span>{config.personal.showTestimonials ? '💬 Testimonials Reviews (ON)' : 'Reviews (OFF)'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
