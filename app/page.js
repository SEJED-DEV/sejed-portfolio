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

export default function Home() {
  return (
    <>
      <Effects />
      <ContextMenu />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Palestine />
        <Projects />
        <BotSimulator />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
