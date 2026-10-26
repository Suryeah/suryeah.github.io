import Timeline from '../components/Timeline.jsx';
import styles from './ExperiencePage.module.css';
import techMahindraLogo from '../assets/tech-mahindra-logo.svg';
import senpronicsLogo from '../assets/senpronics-logo.svg';
import mistralLogo from '../assets/mistral-logo.png';
import nashLogo from '../assets/nash-logo.png';
import drdoLogo from '../assets/drdo-logo.png';
import { experience, recognition, languages } from '../data/portfolioData.js';

const LOGOS = {
  'Bosch Global Software Technologies': 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
  'Mistral Solutions': mistralLogo,
  'Nash Tech Labs': nashLogo,
  'Senpronics': senpronicsLogo,
  'Tech Mahindra': techMahindraLogo,
  'Defence Research and Development Organisation (DRDO)': drdoLogo,
};

const timelineItems = experience.map((exp) => ({
  key: exp.company + exp.period,
  logo: LOGOS[exp.company],
  title: exp.title,
  badge: exp.current ? 'Current' : exp.internship ? 'Internship' : null,
  badgeVariant: exp.internship ? 'muted' : undefined,
  org: exp.company,
  period: exp.period,
  location: exp.location,
  summary: exp.summary,
  bullets: exp.achievements,
  tags: exp.focus,
}));

const ExperiencePage = () => (
  <section id="experience" className="section section-alt" aria-labelledby="experience-title">
    <div className="section-inner">
      <p className="section-eyebrow">Career</p>
      <h2 id="experience-title" className="section-title">Experience</h2>
      <p className="section-lead">Embedded roles across home-appliance electronics, TI processor SDKs, EV charging, and defence and industrial systems.</p>
      <Timeline items={timelineItems} />
      <div className={styles.panels}>
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Awards &amp; IP</h3>
          <ul className={styles.list}>
            {recognition.map((item) => (
              <li key={item.title}>
                <p className={styles.itemTitle}>{item.title} <span className={styles.kind}>{item.kind}</span></p>
                <p className={styles.itemDetail}>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Languages</h3>
          <ul className={styles.tags}>
            {languages.map((lang) => <li key={lang} className="tag">{lang}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ExperiencePage;
