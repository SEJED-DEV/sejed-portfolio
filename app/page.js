'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Palestine from './components/Palestine';
import Projects from './components/Projects';
import BotSimulator from './components/BotSimulator';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Effects from './components/Effects';
import ContextMenu from './components/ContextMenu';
import ErrorBoundary from './components/ErrorBoundary';
import { defaultConfig } from './config/defaultConfig';

export default function Home() {
  const [config, setConfig] = useState(defaultConfig);

  const getFontFamily = (fontKey) => {
    if (fontKey === 'fira-code') return "'Fira Code', monospace";
    if (fontKey === 'inter') return "'Inter', sans-serif";
    return "'Outfit', sans-serif";
  };

  const themeClass = config.personal.themeColor ? `theme-${config.personal.themeColor}` : '';

  return (
    <div className={themeClass} style={{ fontFamily: getFontFamily(config.personal.themeFont) }}>
      <Effects fx={config.personal.backgroundFx} />
      <ContextMenu />
      <Navbar />
      <main>
        <ErrorBoundary>
          <Hero personal={config.personal} />
        </ErrorBoundary>
        <ErrorBoundary>
          <About personal={config.personal} timeline={config.timeline} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Stats stats={config.stats} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Skills skills={config.skills} />
        </ErrorBoundary>
        
        {config.personal.showPalestine && (
          <ErrorBoundary>
            <Palestine />
          </ErrorBoundary>
        )}
        
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
        
        {config.personal.showSimulator && (
          <ErrorBoundary>
            <BotSimulator discordBot={config.discordBot} />
          </ErrorBoundary>
        )}
        
        {config.personal.showTestimonials && (
          <ErrorBoundary>
            <Testimonials />
          </ErrorBoundary>
        )}
        
        <ErrorBoundary>
          <Faq />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact socials={config.socials} />
        </ErrorBoundary>
      </main>
      <Footer personal={config.personal} />
    </div>
  );
}
