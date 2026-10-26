import { Link } from 'react-router-dom';
import { hero, profile } from '../data/portfolioData.js';
import styles from './Hero.module.css';

const TRACES = [
  'M118 160 H70 V90 H30', 'M118 190 H40', 'M118 220 H80 V300 H30', 'M118 250 H95 V340',
  'M282 160 H330 V70', 'M282 190 H370', 'M282 220 H320 V280 H370', 'M282 250 H300 V350',
  'M160 118 V60 H100', 'M190 118 V30', 'M220 118 V70 H270 V40', 'M250 118 V95 H300 V30',
  'M160 282 V330 H120 V370', 'M190 282 V360', 'M220 282 V320 H260 V370', 'M250 282 V305 H280 V380',
];

const PADS = [
  [30, 90], [40, 190], [30, 300], [95, 340], [330, 70], [370, 190], [370, 280], [300, 350],
  [100, 60], [190, 30], [270, 40], [300, 30], [120, 370], [190, 360], [260, 370], [280, 380],
];

const PIN_OFFSETS = [160, 190, 220, 250];

const CircuitVisual = () => (
  <div className={styles.visual}>
    <svg viewBox="0 0 400 400" role="img" aria-label="Microcontroller with signal traces running to SPI, I2C, CAN and UART pads">
      {TRACES.map((d) => <path key={d} d={d} className={styles.trace} />)}
      {TRACES.map((d, i) => (
        <path key={`p-${d}`} d={d} pathLength="100" className={styles.pulse} style={{ animationDelay: `${(i % 8) * 0.4}s` }} />
      ))}
      {PADS.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" className={styles.pad} />)}
      {PIN_OFFSETS.map((o) => (
        <g key={o}>
          <rect x="118" y={o - 3} width="12" height="6" className={styles.pin} />
          <rect x="270" y={o - 3} width="12" height="6" className={styles.pin} />
          <rect x={o - 3} y="118" width="6" height="12" className={styles.pin} />
          <rect x={o - 3} y="270" width="6" height="12" className={styles.pin} />
        </g>
      ))}
      <rect x="130" y="130" width="140" height="140" rx="8" className={styles.chip} />
      <text x="200" y="190" textAnchor="middle" className={styles.chipLabel}>MCU</text>
      <text x="200" y="207" textAnchor="middle" className={styles.chipSub}>FIRMWARE · RTOS</text>
      <path d="M150 248 h15 v-15 h15 v15 h15 v-15 h15 v15 h15 v-15 h15 v15 h15" pathLength="100" className={styles.wave} />
      <text x="30" y="78" textAnchor="middle" className={styles.busLabel}>SPI</text>
      <text x="204" y="34" className={styles.busLabel}>I2C</text>
      <text x="370" y="178" textAnchor="middle" className={styles.busLabel}>CAN</text>
      <text x="120" y="393" textAnchor="middle" className={styles.busLabel}>UART</text>
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            {hero.status}
          </p>
          <h1 id="hero-name" className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{hero.headline}</p>
          <p className={styles.focus}>{hero.focus}</p>
          <p className={styles.value}>{hero.summary}</p>
          <ul className={styles.stack} aria-label="Core stack">
            {hero.coreStack.map((item) => <li key={item} className="tag">{item}</li>)}
          </ul>
          <ul className={styles.stats} aria-label="Career highlights">
            {hero.stats.map((s) => (
              <li key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-primary">Download Resume</a>
            <Link to="/#projects" className="btn btn-secondary">View Projects</Link>
            <Link to="/#contact" className="btn btn-secondary">Contact Me</Link>
          </div>
          {hero.availability && <p className={styles.note}>{hero.availability}</p>}
        </div>
        <CircuitVisual />
      </div>
    </section>
  );
};

export default Hero;
