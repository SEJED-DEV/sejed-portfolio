'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

function AnimatedNumber({ value, duration = 1500 }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startFrom = display;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(startFrom + (value - startFrom) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value]);

  return <>{display}</>;
}

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

function extractRepo(githubUrl) {
  if (!githubUrl) return null;
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+?)(?:\/|$)/);
  return match ? match[1] : null;
}

export default function Projects({ projects: customProjects, featured, showSearch }) {
  const allProjects = customProjects || [];
  const displayProjects = useMemo(
    () => (featured ? allProjects.filter(p => p.featured) : allProjects),
    [allProjects, featured]
  );
  const [filter, setFilter] = useState('all');
  const [techFilter, setTechFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [githubStats, setGithubStats] = useState({});
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const handleFilterTech = (e) => {
      if (e.detail && e.detail.tech) {
        setTechFilter(e.detail.tech);
      }
    };
    window.addEventListener('filter-projects', handleFilterTech);
    return () => window.removeEventListener('filter-projects', handleFilterTech);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoadingStats(true);
      const repos = displayProjects
        .map(p => extractRepo(p.github))
        .filter(Boolean);

      const uniqueRepos = [...new Set(repos)];
      const results = {};

      await Promise.allSettled(
        uniqueRepos.map(async (repo) => {
          try {
            const res = await fetch(`/api/github?repo=${encodeURIComponent(repo)}`);
            if (res.ok) {
              results[repo] = await res.json();
            }
          } catch {}
        })
      );

      if (!cancelled) {
        setGithubStats(results);
        setLoadingStats(false);
      }
    })();
    return () => { cancelled = true; };
  }, [displayProjects]);

  const query = searchQuery.toLowerCase().trim();
  const filtered = displayProjects.filter(p => {
    const categoryMatch = filter === 'all' || p.category === filter;
    const techMatch = !techFilter || p.tags.some(tag => {
      const t1 = tag.toLowerCase();
      const t2 = techFilter.toLowerCase();
      return t1.includes(t2) || t2.includes(t1);
    });
    const searchMatch = !query ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query));
    return categoryMatch && techMatch && searchMatch;
  });

  const totalStars = Object.values(githubStats).reduce((sum, s) => sum + (s.stars || 0), 0);
  const totalForks = Object.values(githubStats).reduce((sum, s) => sum + (s.forks || 0), 0);
  const trackedCount = Object.keys(githubStats).length;

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">{'// featured work'}</p>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my range — from bots to full-stack apps.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>
                {loadingStats ? '...' : <AnimatedNumber value={totalStars} />}
              </span>
              <span className={styles.statLabel}>GitHub Stars</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>
                {loadingStats ? '...' : <AnimatedNumber value={totalForks} />}
              </span>
              <span className={styles.statLabel}>Forks</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}><AnimatedNumber value={allProjects.length} /></span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}><AnimatedNumber value={trackedCount} /></span>
              <span className={styles.statLabel}>Open Source</span>
            </div>
          </div>

          <div className={styles.openSourceBadge}>
            <strong>🤝 Open Source:</strong> All GitHub repositories linked below are fully open for contributions and PRs!
          </div>
          <div className="divider" />
          {featured && (
            <div style={{ marginBottom: '32px' }}>
              <a href="/projects" className="btn btn-outline">
                View All Projects →
              </a>
            </div>
          )}
        </motion.div>

        <div className={styles.filters}>
          <div className={styles.filterLeft}>
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
          {showSearch && (
            <div className={styles.searchWrap}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search projects..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className={styles.searchClear} onClick={() => setSearchQuery('')}>
                  ✕
                </button>
              )}
            </div>
          )}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const repo = extractRepo(project.github);
              const stats = repo ? githubStats[repo] : null;

              return (
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

                  {stats && (
                    <div className={styles.githubMeta}>
                      <span className={styles.metaItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        {stats.stars}
                      </span>
                      <span className={styles.metaItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
                        {stats.forks}
                      </span>
                      {stats.language && (
                        <span className={styles.metaLang}>
                          {stats.language}
                        </span>
                      )}
                    </div>
                  )}

                  <div className={styles.cardTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={tagColor[project.color]}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
