import { profile } from '../data/portfolioData.js';
import styles from './Contact.module.css';

const CONTACT_LINKS = [
  {
    href: `mailto:${profile.email}`,
    title: 'Email',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
  {
    href: `tel:${profile.phone}`,
    title: 'Phone',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
    ),
  },
  {
    href: profile.links.linkedin,
    title: 'LinkedIn',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><circle cx="12" cy="7" r="1"/></svg>
    ),
  },
  {
    href: profile.links.github,
    title: 'GitHub',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
    ),
  },
  {
    href: profile.links.orcid,
    title: 'ORCID',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">iD</text></svg>
    ),
  },
];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className={`section-inner ${styles.inner}`}>
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 id="contact-title" className="section-title">Let&apos;s talk firmware</h2>
          <p className={styles.lead}>
            Open to embedded firmware and Embedded Linux roles, with a focus on real-time systems and board bring-up.
          </p>
          <ul className={styles.chips}>
            <li className="tag">Open to relocation</li>
            <li className="tag">Willing to work globally</li>
            <li className="tag">Available for interviews</li>
          </ul>
          <div className={styles.actions}>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-primary">Download Resume</a>
            <a href={`mailto:${profile.email}?subject=Hiring%20Discussion`} className="btn btn-secondary">Email me</a>
          </div>
          <ul className={styles.socials}>
            {CONTACT_LINKS.map((link) => {
              const external = link.href.startsWith('http');
              return (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className={styles.social}
                    aria-label={external ? `${link.title} (opens in new tab)` : link.title}
                    title={link.title}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" autoComplete="email" required />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required />
          </div>
          <p className={styles.hint}>Opens your email client. Typical response time: within 24-48 hours.</p>
          <button type="submit" className={`btn btn-primary ${styles.submit}`}>Open Email to Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
