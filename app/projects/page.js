'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Effects from '../components/Effects';
import ContextMenu from '../components/ContextMenu';
import { defaultConfig } from '../config/defaultConfig';

export default function ProjectsPage() {
  const [config, setConfig] = useState(defaultConfig);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio-config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const merged = {
          ...defaultConfig,
          ...parsed,
          projects: defaultConfig.projects.map((dp, i) => ({
            ...(parsed.projects && parsed.projects[i] ? parsed.projects[i] : {}),
            ...dp,
          })),
          personal: { ...defaultConfig.personal, ...(parsed.personal || {}) },
          socials: parsed.socials || defaultConfig.socials,
          skills: parsed.skills || defaultConfig.skills,
          stats: parsed.stats || defaultConfig.stats,
        };
        setConfig(merged);
      } catch (e) {
        console.error("Failed to parse saved config", e);
      }
    }
  }, []);

  if (!mounted) {
    return <div style={{ opacity: 0 }} />;
  }

  const getFontFamily = (fontKey) => {
    if (fontKey === 'fira-code') return "'Fira Code', monospace";
    if (fontKey === 'inter') return "'Inter', sans-serif";
    return "'Outfit', sans-serif";
  };

  return (
    <div style={{ fontFamily: getFontFamily(config.personal.themeFont) }}>
      <Effects fx={config.personal.backgroundFx} />
      <ContextMenu />
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <Projects projects={config.projects} showSearch />
      </main>
      <Footer personal={config.personal} />
    </div>
  );
}
