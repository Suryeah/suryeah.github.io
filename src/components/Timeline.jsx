import styles from './Timeline.module.css';

const Timeline = ({ items }) => (
  <ol className={styles.timeline}>
    {items.map((item, i) => (
      <li key={item.key} className={styles.entry} style={{ '--i': i }}>
        <div className={styles.logo} aria-hidden="true">
          {item.logo ? <img src={item.logo} alt="" loading="lazy" /> : <span>{item.logoLabel}</span>}
        </div>
        <div className={styles.rail} aria-hidden="true">
          <span className={styles.dot} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>
            {item.title}
            {item.badge && <span className={styles.badge} data-variant={item.badgeVariant}>{item.badge}</span>}
          </h3>
          <p className={styles.org}>{item.org}</p>
          <p className={styles.meta}>{item.period} · {item.location}</p>
          {item.summary && <p className={styles.summary}>{item.summary}</p>}
          {item.bullets?.length > 0 && (
            <ul className={styles.bullets}>
              {item.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
          {item.tags?.length > 0 && (
            <ul className={styles.tags} aria-label="Focus areas">
              {item.tags.map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;
