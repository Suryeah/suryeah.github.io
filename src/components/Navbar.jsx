import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeContext.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    }
    if (menuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Products', id: 'products' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Build Real Stuff', id: 'contact' },
  ];

  const navBg = scrolled
    ? theme === 'dark' ? 'rgba(35,39,47,0.85)' : 'rgba(255,255,255,0.85)'
    : theme === 'dark' ? '#23272f' : '#fff';
  const navText = theme === 'dark' ? '#e2e8f0' : '#1f2937';
  const navAccent = theme === 'dark' ? '#93c5fd' : '#174ea6';

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`} style={{ display: 'flex', flexDirection: 'column', background: navBg, color: theme === 'dark' ? '#fff' : '#222', position: 'sticky', top: 0, zIndex: 100, transition: 'background 0.3s' }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'space-between' : 'center',
        minHeight: isMobile ? 56 : 48,
        position: 'relative',
        padding: isMobile ? '0 12px' : 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}>
        {isMobile ? (
          <>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: navAccent }}>SV</span>
            <div ref={menuRef} style={{ position: 'relative', marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <button
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 28,
                color: navAccent,
                cursor: 'pointer',
                padding: 8,
                marginLeft: 8,
                zIndex: 201,
              }}
            >
              <span style={{ display: 'inline-block', width: 28, height: 28 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={navAccent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </span>
            </button>
            {menuOpen && (
              <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '80vw',
                maxWidth: 320,
                height: '100vh',
                background: theme === 'dark' ? '#23272f' : '#fff',
                boxShadow: '-4px 0 24px rgba(0,0,0,0.13)',
                zIndex: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '2.5rem 1.5rem 1.5rem 2rem',
                animation: 'slideInRight 0.3s cubic-bezier(.4,0,.2,1)',
              }}>
                <button
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: navAccent,
                    fontSize: 32,
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    cursor: 'pointer',
                    zIndex: 301,
                  }}
                >
                  &times;
                </button>
                <ul className="nav-links mobile-menu" style={{
                  margin: '2.5rem 0 0 0',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  width: '100%',
                  alignItems: 'flex-start',
                  listStyle: 'none',
                }}>
                  {navLinks.map((link) => (
                    <li key={link.id} style={{ width: '100%' }}>
                      <span
                        style={{ color: navText, fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', display: 'block', padding: '0.5rem 0' }}
                        onClick={() => scrollToSection(link.id)}
                      >
                        {link.label}
                      </span>
                    </li>
                  ))}
                  <li style={{ width: '100%' }}>
                    <a
                      href="https://suryeah.github.io/datasheet/Surya.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      style={{ color: navAccent, fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', display: 'block', padding: '0.5rem 0', textDecoration: 'none' }}
                    >
                      Download Resume
                    </a>
                  </li>
                  <li style={{ width: '100%', marginTop: 8 }}>
                    <button
                      aria-label="Toggle theme"
                      onClick={toggleTheme}
                      style={{ background: 'none', border: 'none', color: navAccent, fontSize: 22, cursor: 'pointer', padding: 0, outline: 'none', boxShadow: 'none' }}
                    >
                      {theme === 'dark' ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={navAccent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" fill="#23272f"/>
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={navAccent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                          <circle cx="12" cy="12" r="5" fill="#f6f8fa"/>
                          <g stroke={navAccent}>
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                          </g>
                        </svg>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {menuOpen && (
              <div
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.18)',
                  zIndex: 200,
                }}
              />
            )}
            <style>{`
              @keyframes slideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
            `}</style>
            </div>
          </>
        ) : (
          <ul className="nav-links" style={{ display: 'flex', gap: '0.9rem', margin: 0, padding: '0 10px', listStyle: 'none', alignItems: 'center', width: '100%', justifyContent: 'space-evenly' }}>
            {navLinks.map((link) => (
              <li key={link.id} style={{ listStyle: 'none' }}>
                <span
                  style={{ color: navText, fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </span>
              </li>
            ))}
            <li style={{ listStyle: 'none' }}>
              <a
                href="https://suryeah.github.io/datasheet/Surya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: navAccent, fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}
              >
                Download Resume
              </a>
            </li>
            <li style={{ listStyle: 'none', marginLeft: 8 }}>
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                style={{ background: 'none', border: 'none', color: navAccent, fontSize: 22, cursor: 'pointer', padding: 0, outline: 'none', boxShadow: 'none' }}
              >
                {theme === 'dark' ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={navAccent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" fill="#23272f"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={navAccent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                    <circle cx="12" cy="12" r="5" fill="#f6f8fa"/>
                    <g stroke={navAccent}>
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
