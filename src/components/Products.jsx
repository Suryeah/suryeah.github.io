import MaybePlaceholder from './MaybePlaceholder.jsx';
import styles from './Products.module.css';

const PRODUCTS = [
  {
    name: 'Real-Time Acceleration Plotter',
    code: 'RTAP-335®',
    summary: 'Real-time acceleration acquisition and plotting for motion-data visualization.',
    role: 'Product firmware + validation support',
    platform: '[PLATFORM: MCU / board]',
    outcome: '[METRIC: e.g. units deployed, sample rate achieved]',
    tags: ['RF', 'Embedded Firmware', 'Test Instrumentation'],
  },
  {
    name: 'Remote Tree Climber',
    code: 'RTC',
    github: 'https://github.com/Suryeah/RF433-Remote-Control-.git',
    summary: 'RF433 remote-control prototype with embedded motor actuation.',
    role: 'Control logic + integration testing',
    platform: '[PLATFORM: MCU / board]',
    outcome: '[METRIC: e.g. control range, climb speed]',
    tags: ['RF433', 'Control Systems', 'Embedded C'],
  },
  {
    name: 'Earthquake Detector',
    code: 'EMD-1202®',
    github: 'https://github.com/Suryeah/Earthquake_Detector',
    summary: 'Embedded earthquake detection product designed for dependable field operation.',
    role: 'Firmware development + productization support',
    platform: '[PLATFORM: MCU / board]',
    outcome: '[METRIC: e.g. detection latency, field uptime]',
    tags: ['Product Engineering', 'Firmware', 'Field Reliability'],
  },
  {
    name: 'Portable Seismic DAQ',
    code: 'PS-DAQ®',
    summary: 'Portable seismic data acquisition product with embedded sampling, logging, and data transfer.',
    role: 'Acquisition firmware + systems integration',
    platform: '[PLATFORM: MCU / board]',
    outcome: '[METRIC: e.g. channels, sample rate, battery life]',
    tags: ['Seismic', 'DAQ', 'Signal Processing'],
  },
  {
    name: 'SHM Solutions',
    code: 'SHM',
    summary: 'Sensing, telemetry, and firmware for long-term structural monitoring.',
    role: 'Embedded solution engineering',
    platform: '[PLATFORM: MCU / board]',
    outcome: '[METRIC: e.g. structures monitored, deployment duration]',
    tags: ['SHM', 'IoT Sensing', 'Edge Monitoring'],
  },
  {
    name: 'Devantech ETH008-B Driver',
    code: 'ETH008-B',
    summary: 'Embedded driver integration for Ethernet-controlled relay I/O.',
    role: 'Driver integration',
    platform: '[PLATFORM: host / MCU]',
    outcome: '[METRIC: e.g. relay channels controlled, integration time]',
    tags: ['Ethernet', 'Relay Control', 'Embedded Driver'],
  },
];

const Products = () => (
  <section id="products" className="section" aria-labelledby="products-title">
    <div className="section-inner">
      <p className="section-eyebrow">Shipped to market</p>
      <h2 id="products-title" className="section-title">Products</h2>
      <p className="section-lead">
        Six products and solutions across embedded firmware, RF, data acquisition, and sensing.
      </p>
      <ul className={styles.grid}>
        {PRODUCTS.map((product) => (
          <li key={product.name} className={`${styles.card} spotlight`}>
            <span className={styles.code}>{product.code}</span>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.summary}>{product.summary}</p>
            <dl className={styles.facts}>
              <dt>Role</dt>
              <dd>{product.role}</dd>
              <dt>Platform</dt>
              <dd><MaybePlaceholder>{product.platform}</MaybePlaceholder></dd>
              <dt>Outcome</dt>
              <dd><MaybePlaceholder>{product.outcome}</MaybePlaceholder></dd>
            </dl>
            <ul className={styles.tags} aria-label="Technologies">
              {product.tags.map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
            {product.github && (
              <a href={product.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View on GitHub<span className="sr-only"> (opens in new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Products;
