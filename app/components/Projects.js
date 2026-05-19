'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Sejed Portfolio',
    description: 'The source code of this portfolio! A premium, cosmic dark-themed glassmorphic website built using Next.js, React, Framer Motion, and custom CSS modules. Fully open-source and customizable.',
    tags: ['Next.js', 'React', 'Framer Motion', 'Open Source'],
    color: 'purple',
    emoji: '🌌',
    category: 'web',
    github: 'https://github.com/SEJED-DEV/sejed-portfolio',
    live: 'https://sejed.dev',
  },
  {
    title: 'CortexHQ',
    description: 'The central hub and landing page for the Cortex ecosystem. A sleek, modern website showcasing all Cortex services and products.',
    tags: ['Next.js', 'Web Design', 'Vercel'],
    color: 'indigo',
    emoji: '🌐',
    category: 'web',
    github: null,
    live: 'https://cortexhq.net',
  },
  {
    title: 'Cortex',
    description: 'A feature-rich multipurpose Discord bot with deep AI integration. Handles moderation, utility, fun commands, and intelligent conversational AI across multiple servers.',
    tags: ['Node.js', 'Discord.js', 'AI Integration', 'MongoDB'],
    color: 'indigo',
    emoji: '🧠',
    category: 'bot',
    github: null,
    live: 'https://cortex.cortexhq.net',
  },
  {
    title: 'Cortex Modmail',
    description: 'A dedicated modmail system companion for Cortex. Features session persistence, automated transcripts, staff assignment, and inline attachment rendering.',
    tags: ['Node.js', 'Discord.js', 'SQLite'],
    color: 'cyan',
    emoji: '📨',
    category: 'bot',
    github: null,
    live: 'https://modmail.cortexhq.net',
  },
  {
    title: 'Cortex QuranBot',
    description: 'A beautifully designed Discord bot for Quran recitation, ayah lookup, and daily Islamic reminders. Multi-language support with elegant embed formatting.',
    tags: ['Node.js', 'Discord.js', 'REST API'],
    color: 'purple',
    emoji: '📖',
    category: 'bot',
    github: null,
    live: 'https://quran.cortexhq.net',
  },
  {
    title: 'Vortex',
    description: 'A state-of-the-art Discord bot that automates server architecture through interactive AI-driven dialogues. Built with TypeScript for type safety and reliability.',
    tags: ['TypeScript', 'Discord.js', 'AI'],
    color: 'purple',
    emoji: '🌀',
    category: 'bot',
    github: 'https://github.com/SEJED-DEV/vortex',
    live: null,
  },
  {
    title: 'Nova ERLC Manager',
    description: 'A premium Discord bot for ER:LC Private Servers with advanced session management, staff tracking, automated vote systems, and live server dashboards via PRC API.',
    tags: ['JavaScript', 'Discord.js', 'PRC API'],
    color: 'indigo',
    emoji: '🌟',
    category: 'bot',
    github: 'https://github.com/SEJED-DEV/Nova-ERLC-Manager',
    live: null,
  },
  {
    title: 'Vanguard',
    description: 'Industrial-grade moderation solution for Discord. Features custom SQLite caching layer and ensures user privacy through restricted global logging.',
    tags: ['JavaScript', 'Discord.js', 'SQLite'],
    color: 'cyan',
    emoji: '🛡️',
    category: 'bot',
    github: 'https://github.com/SEJED-DEV/Vanguard-discord-bot',
    live: null,
  },
  {
    title: 'Pickle Infra',
    description: 'The definitive Discord utility for Roblox sellers. Professional ticketing, automated entries, and secure sales tracking built for maximum reliability.',
    tags: ['JavaScript', 'Discord.js', 'Vercel'],
    color: 'purple',
    emoji: '🥒',
    category: 'bot',
    github: 'https://github.com/SEJED-DEV/pickle-infra',
    live: 'https://pickle-infra.vercel.app',
  },
  {
    title: 'ERLC Utility Bot',
    description: 'Enterprise-grade Discord utility bot for ER:LC Private Servers. Modular architecture with local SQLite persistence and advanced ERLC API V2 optimizations.',
    tags: ['JavaScript', 'Discord.js', 'SQLite', 'ERLC API'],
    color: 'indigo',
    emoji: '⚙️',
    category: 'bot',
    github: 'https://github.com/SEJED-DEV/ERLC-UTILITY-BOT',
    live: null,
  },
  {
    title: 'Discord ModMail Bot',
    description: 'Advanced Modmail infrastructure with session persistence, automated transcripts, and inline attachment rendering. Built with Python.',
    tags: ['Python', 'Discord.py', 'Async'],
    color: 'cyan',
    emoji: '📬',
    category: 'bot',
    github: 'https://github.com/SEJED-DEV/Discord-ModMail-Bot',
    live: null,
  },
  {
    title: 'OpenSyntax Academy',
    description: 'An online learning platform built with TypeScript and Next.js. Features interactive coding lessons and structured curriculum for aspiring developers.',
    tags: ['TypeScript', 'Next.js', 'Vercel'],
    color: 'purple',
    emoji: '📚',
    category: 'web',
    github: 'https://github.com/SEJED-DEV/opensyntax-academy',
    live: 'https://opensyntax-academy.vercel.app/',
  },
  {
    title: 'Red Crescent Platform',
    description: 'A private social media platform built for the IFRC and ICRC (Red Cross/Red Crescent). Secure communication and collaboration for humanitarian workers.',
    tags: ['Full Stack', 'Private', 'Humanitarian'],
    color: 'indigo',
    emoji: '🏥',
    category: 'web',
    github: null,
    live: null,
    isPrivate: true,
  },
  {
    title: 'CodeXTN',
    description: 'A platform for aspiring coders — daily challenges, coding competitions, and project building. Users compete for rankings and earn recognition.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'cyan',
    emoji: '🏆',
    category: 'web',
    github: 'https://github.com/TSSEJED/CodeXTN',
    live: null,
  },
  {
    title: 'Bots Studio',
    description: 'A web dashboard for managing and monitoring Discord bots. Built with TypeScript and deployed on Vercel for maximum performance.',
    tags: ['TypeScript', 'Next.js', 'Vercel'],
    color: 'purple',
    emoji: '🎛️',
    category: 'web',
    github: 'https://github.com/TSSEJED/bots-studio',
    live: 'https://bots-studio.vercel.app',
  },
  {
    title: 'SGL Audit Expertise',
    description: 'A private corporate website designed for SGL Audit Expertise — a Tunisian auditing and accounting firm. Clean, corporate layout with optimized security.',
    tags: ['HTML', 'CSS', 'Private'],
    color: 'indigo',
    emoji: '📊',
    category: 'web',
    github: null,
    live: null,
    isPrivate: true,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Discord Bots', value: 'bot' },
  { label: 'Web Apps', value: 'web' },
];

const tagColor = {
  indigo: 'tag',
  cyan: 'tag tag-cyan',
  purple: 'tag tag-purple',
};

export default function Projects({ projects: customProjects }) {
  const displayProjects = customProjects || projects;
  const [filter, setFilter] = useState('all');
  const [techFilter, setTechFilter] = useState(null);

  useEffect(() => {
    const handleFilterTech = (e) => {
      if (e.detail && e.detail.tech) {
        setTechFilter(e.detail.tech);
      }
    };
    window.addEventListener('filter-projects', handleFilterTech);
    return () => window.removeEventListener('filter-projects', handleFilterTech);
  }, []);

  const filtered = displayProjects.filter(p => {
    const categoryMatch = filter === 'all' || p.category === filter;
    const techMatch = !techFilter || p.tags.some(tag => {
      const t1 = tag.toLowerCase();
      const t2 = techFilter.toLowerCase();
      return t1.includes(t2) || t2.includes(t1);
    });
    return categoryMatch && techMatch;
  });

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={`orb orb-indigo ${styles.orb}`} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">// featured work</p>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my range — from bots to full-stack apps.
          </p>
          <div className={styles.openSourceBadge}>
            <strong>🤝 Open Source:</strong> All GitHub repositories linked below are fully open for contributions and PRs!
          </div>
          <div className="divider" />
        </motion.div>

        <div className={styles.filters}>
          <div className={styles.categoryFilters}>
            {filters.map(f => (
              <button
                key={f.value}
                className={`${styles.filterBtn} ${filter === f.value ? styles.filterActive : ''}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {techFilter && (
            <motion.div 
              className={styles.techBadge}
              initial={{ opacity: 0, scale: 0.9, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              <span>Showing: <strong>{techFilter}</strong></span>
              <button 
                className={styles.clearTechBtn}
                onClick={() => setTechFilter(null)}
                title="Clear filter"
              >
                ✕
              </button>
            </motion.div>
          )}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                className={`glass-card ${styles.card}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardEmoji}>{project.emoji}</div>
                  <div className={styles.cardLinks}>
                    {project.isPrivate && (
                      <span className={styles.privateBadge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        Private
                      </span>
                    )}
                    {project.github && (
                      <a href={project.github} className={styles.cardLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className={styles.cardLink} aria-label="Live demo" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.cardTags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={tagColor[project.color]}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
