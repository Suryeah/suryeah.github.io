import { products } from '../data/portfolioData.js';
import styles from './Products.module.css';

const Products = () => (
  <section id="products" className="section" aria-labelledby="products-title">
    <div className="section-inner">
      <p className="section-eyebrow">Product work</p>
      <h2 id="products-title" className="section-title">Products &amp; Solutions</h2>
      <p className="section-lead">
        Products, solutions, and prototypes I contributed firmware and integration work to.
      </p>
      <ul className={styles.grid}>
        {products.map((product) => (
          <li key={product.name} className={`${styles.card} spotlight`}>
            {product.model && <span className={styles.code}>{product.model}</span>}
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.summary}>{product.description}</p>
            <dl className={styles.facts}>
              <dt>Role</dt>
              <dd>{product.role}</dd>
              {product.platform && (
                <>
                  <dt>Platform</dt>
                  <dd>{product.platform}</dd>
                </>
              )}
              {product.status && (
                <>
                  <dt>Status</dt>
                  <dd>{product.status}</dd>
                </>
              )}
              {product.outcome && (
                <>
                  <dt>Outcome</dt>
                  <dd>{product.outcome}</dd>
                </>
              )}
            </dl>
            {product.technologies?.length > 0 && (
              <ul className={styles.tags} aria-label="Technologies">
                {product.technologies.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            )}
            {product.evidenceUrl && (
              <a href={product.evidenceUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View details<span className="sr-only"> about {product.name} (opens in new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Products;
