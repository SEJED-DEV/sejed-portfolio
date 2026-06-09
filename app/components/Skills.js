'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { defaultConfig } from '@/app/config/defaultConfig';

const skillData = defaultConfig.skills;

export default function Skills({ skills: customSkills }) {
  const displaySkills = customSkills || skillData;

  const handleSkillClick = (skill) => {
    window.dispatchEvent(new CustomEvent('filter-projects', { detail: { tech: skill } }));
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={styles.header}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.cardSkills}>
                {cat.items.map((skill, si) => (
                  <button
                    key={skill}
                    className={styles.skillChip}
                    onClick={() => handleSkillClick(skill)}
                    title={`Filter projects using ${skill}`}
                  >
                    {skill}
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
