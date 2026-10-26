import { skillGroups } from '../data/portfolioData.js';
import styles from './Skills.module.css';

const Skills = () => (
  <section id="skills" className="section section-tint" aria-labelledby="skills-title">
    <div className="section-inner">
      <p className="section-eyebrow">Skills matrix</p>
      <h2 id="skills-title" className="section-title">Skills</h2>
      <p className="section-lead">
        Drawn from my professional roles and public projects; see Experience and Projects for where each was used.
      </p>
      <ul className={styles.grid}>
        {skillGroups.map((group) => (
          <li key={group.label} className={`${styles.group} ${group.wide ? styles.wide : ''} spotlight`} style={{ '--accent': group.accent }}>
            <div>
              <h3 className={styles.label}>{group.label}</h3>
              <p className={styles.hint}>{group.hint}</p>
            </div>
            <ul className={styles.items}>
              {group.items.map((item) => <li key={item} className={styles.item}>{item}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;

