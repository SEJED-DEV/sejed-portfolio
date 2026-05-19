'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const categories = [
  {
    title: 'Languages',
    icon: '{ }',
    items: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / SCSS', level: 90 },
      { name: 'Lua', level: 65 },
    ],
  },
  {
    title: 'Frontend',
    icon: '◆',
    items: [
      { name: 'Next.js', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Framer Motion', level: 78 },
      { name: 'CSS Modules', level: 85 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Vercel', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙',
    items: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 88 },
      { name: 'Discord.js', level: 95 },
      { name: 'REST APIs', level: 90 },
      { name: 'WebSockets', level: 78 },
      { name: 'Nix', level: 60 },
    ],
  },
  {
    title: 'Database',
    icon: '◉',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQLite', level: 88 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Mongoose', level: 85 },
      { name: 'JSON Storage', level: 95 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '▲',
    items: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 65 },
      { name: 'Linux / VPS', level: 72 },
      { name: 'CI/CD', level: 68 },
      { name: 'Cloudflare', level: 75 },
    ],
  },
  {
    title: 'AI & APIs',
    icon: '✦',
    items: [
      { name: 'Gemini API', level: 85 },
      { name: 'OpenAI / GPT', level: 80 },
      { name: 'Groq (Llama)', level: 72 },
      { name: 'PRC / ERLC API', level: 90 },
      { name: 'Webhook Integrations', level: 88 },
    ],
  },
];

export default function Skills({ skills: customSkills }) {
  const displaySkills = customSkills || categories;

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={`orb orb-cyan ${styles.orb}`} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">// skills & tools</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use daily to bring ideas to life.
          </p>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {displaySkills.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>

              <div className={styles.items}>
                {cat.items.map((item) => (
                  <button 
                    key={item.name} 
                    className={styles.skillItem}
                    onClick={() => {
                      // Dispatch custom event to highlight or filter projects
                      window.dispatchEvent(new CustomEvent('filter-projects', { 
                        detail: { tech: item.name } 
                      }));
                      // Smooth scroll to projects
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    title={`Click to view projects using ${item.name}`}
                  >
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{item.name}</span>
                      <span className={styles.skillPercent}>{item.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <motion.div
                        className={styles.barFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
