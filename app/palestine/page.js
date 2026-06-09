'use client';
import { useState, useEffect } from 'react';
import Palestine from '../components/Palestine';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Effects from '../components/Effects';
import ContextMenu from '../components/ContextMenu';
import { defaultConfig } from '../config/defaultConfig';

export default function PalestinePage() {
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
          personal: { ...defaultConfig.personal, ...(parsed.personal || {}) },
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
        <Palestine showAll />
      </main>
      <Footer personal={config.personal} />
    </div>
  );
}
