import { openSource } from '../data/portfolioData.js';
import styles from './OpenSource.module.css';

const STATUS_LABELS = {
  submitted: 'Pull request submitted · see GitHub for current status',
  merged: 'Merged',
  closed: 'Closed',
};

const OpenSource = () => (
  <section id="open-source" className="section" aria-labelledby="open-source-title">
    <div className="section-inner">
      <p className="section-eyebrow">Community</p>
      <h2 id="open-source-title" className="section-title">Open Source Contributions</h2>
      <p className="section-lead">Contributions to projects outside my own repositories.</p>
      <ul className={styles.list}>
        {openSource.map((item) => (
          <li key={item.url} className={`${styles.card} spotlight`}>
            <p className={styles.project}>{item.project}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.status}>{STATUS_LABELS[item.status]}</p>
            <dl className={styles.steps}>
              <div>
                <dt>Problem</dt>
                <dd>{item.problem}</dd>
              </div>
              <div>
                <dt>Proposed change</dt>
                <dd>
                  <ul className={styles.bullets}>
                    {item.proposal.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </dd>
              </div>
              {item.considerations && (
                <div>
                  <dt>Review considerations</dt>
                  <dd>{item.considerations}</dd>
                </div>
              )}
            </dl>
            <ul className={styles.tags} aria-label="Technologies">
              {item.technologies.map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
            <div className={styles.links}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                View pull request<span className="sr-only"> on GitHub (opens in new tab)</span>
              </a>
              {item.relatedIssueUrl && (
                <a href={item.relatedIssueUrl} target="_blank" rel="noopener noreferrer">
                  Related issue<span className="sr-only"> on GitHub (opens in new tab)</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default OpenSource;
