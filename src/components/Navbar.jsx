import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext.js';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', to: '/#hero' },
  { label: 'Products', to: '/#products' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Open Source', to: '/#open-source' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Education', to: '/#education' },
  { label: 'Contact', to: '/#contact' },
];

const ThemeIcon = ({ theme }) => (
  theme === 'dark' ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const { pathname } = useLocation();

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.to.split('#')[1]))
      .filter(Boolean);
    if (!sections.length) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Primary">
        <Link to="/#hero" className={styles.brand} onClick={close}>
          <span className={styles.mark} aria-hidden="true">SV</span>
          <span className={styles.brandCopy}>
            <strong>Surya Vardhan</strong>
            <small>Embedded Systems</small>
          </span>
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {menuOpen
              ? <path d="M6 6l12 12M18 6L6 18" />
              : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
        <div id="primary-menu" className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => {
              const id = link.to.split('#')[1];
              const isActive = active === id;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href="/resume.pdf" download="Surya_Vardhan_Resume.pdf" className={`btn btn-primary ${styles.resume}`} onClick={close}>
            Download Resume
          </a>
          <button
            type="button"
            className={styles.theme}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </nav>
      {menuOpen && <div className={styles.backdrop} onClick={close} aria-hidden="true" />}
    </header>
  );
};

export default Navbar;

