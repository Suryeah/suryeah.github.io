import { featuredProjects, moreProjects } from '../data/portfolioData.js';
import styles from './Projects.module.css';

const ExternalLink = ({ href, children, className, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}<span className="sr-only"> {label} (opens in new tab)</span>
  </a>
);

const Projects = () => (
  <section id="projects" className="section section-alt" aria-labelledby="projects-title">
    <div className="section-inner">
      <p className="section-eyebrow">Case studies</p>
      <h2 id="projects-title" className="section-title">Projects</h2>
      <p className="section-lead">
        Embedded systems I built or contributed to: the problem, what I did, how it works, and the result.
      </p>
      <ul className={styles.grid}>
        {featuredProjects.map((project) => (
          <li key={project.name} className={`${styles.card} spotlight`}>
            <h3 className={styles.name}>{project.name}</h3>
            <dl className={styles.steps}>
              <div>
                <dt>Problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>
                  <span className={styles.role}>{project.contribution}</span>
                  {project.implementation}
                </dd>
              </div>
              <div>
                <dt>Technologies</dt>
                <dd>
                  <ul className={styles.tags}>
                    {project.technologies.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                </dd>
              </div>
              {project.outcome && (
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              )}
            </dl>
            {project.githubUrl ? (
              <ExternalLink href={project.githubUrl} className={styles.link} label={`for ${project.name}`}>
                View source on GitHub
              </ExternalLink>
            ) : project.sourceNote && (
              <p className={styles.note}>{project.sourceNote}</p>
            )}
          </li>
        ))}
      </ul>
      <h3 className={styles.moreTitle}>More projects</h3>
      <ul className={styles.moreList}>
        {moreProjects.map((project) => {
          const body = (
            <>
              <span className={styles.moreText}>
                <span className={styles.moreName}>{project.name}</span>
                {project.description && <span className={styles.moreDesc}>{project.description}</span>}
              </span>
              {project.githubUrl && <span aria-hidden="true">↗</span>}
            </>
          );
          return (
            <li key={project.name}>
              {project.githubUrl ? (
                <ExternalLink href={project.githubUrl} className={styles.moreItem} label="">
                  {body}
                </ExternalLink>
              ) : (
                <span className={styles.moreItem}>{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Projects;
