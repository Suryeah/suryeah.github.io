import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Projects', to: '/projects' },
    { label: 'Education', to: '/education' },
    { label: 'Experience', to: '/experience' },
    { label: 'Catch Me', to: '/catchme' },
  ];

  return (
    <nav className="navbar" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222' }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px', // Add maxWidth to prevent overflow
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 48,
        position: 'relative',
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden', // Prevent horizontal scroll
      }}>
        <span className="logo" style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', cursor: 'pointer', flex: '0 0 auto', marginRight: isMobile ? 0 : 24, fontSize: 24, height: 48, display: 'flex', alignItems: 'center' }} onClick={() => navigate('/')}>Surya</span>
        {isMobile ? (
          <div ref={menuRef} style={{ position: 'relative', marginLeft: 'auto' }}>
            <button
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 28,
                color: theme === 'dark' ? '#b3cdf6' : '#174ea6',
                cursor: 'pointer',
                padding: 8,
                marginLeft: 8,
                zIndex: 201,
              }}
            >
              <span style={{ display: 'inline-block', width: 28, height: 28 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#b3cdf6' : '#174ea6'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
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
                    color: theme === 'dark' ? '#b3cdf6' : '#174ea6',
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
                    <li key={link.to} style={{ width: '100%' }}>
                      <span
                        style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', display: 'block', padding: '0.5rem 0' }}
                        onClick={() => { setMenuOpen(false); navigate(link.to); }}
                      >
                        {link.label}
                      </span>
                    </li>
                  ))}
                  <li style={{ width: '100%', marginTop: 8 }}>
                    <button
                      aria-label="Toggle theme"
                      onClick={toggleTheme}
                      style={{ background: 'none', border: 'none', color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontSize: 22, cursor: 'pointer', padding: 0, outline: 'none', boxShadow: 'none' }}
                    >
                      {theme === 'dark' ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3cdf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" fill="#23272f"/>
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#174ea6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                          <circle cx="12" cy="12" r="5" fill="#f6f8fa"/>
                          <g stroke="#174ea6">
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
            {/* Overlay background for menu */}
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
            {/* Slide in animation */}
            <style>{`
              @keyframes slideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
            `}</style>
          </div>
        ) : (
          <ul className="nav-links" style={{ display: 'flex', gap: '1.2rem', margin: 0, padding: 0, listStyle: 'none', alignItems: 'center', marginLeft: 'auto' }}>
            {navLinks.map((link) => (
              <li key={link.to} style={{ listStyle: 'none' }}>
                <span
                  style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
                  onClick={() => navigate(link.to)}
                >
                  {link.label}
                </span>
              </li>
            ))}
            <li style={{ listStyle: 'none', marginLeft: 8 }}>
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                style={{ background: 'none', border: 'none', color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontSize: 22, cursor: 'pointer', padding: 0, outline: 'none', boxShadow: 'none' }}
              >
                {theme === 'dark' ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3cdf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" fill="#23272f"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#174ea6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                    <circle cx="12" cy="12" r="5" fill="#f6f8fa"/>
                    <g stroke="#174ea6">
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
