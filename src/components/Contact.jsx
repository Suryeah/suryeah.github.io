import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';
import { Link, useLocation } from 'react-router-dom';

function useIsSmallScreen(breakpoint = 900) {
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false);
  useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth <= breakpoint);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isSmall;
}

const CONTACT_LINKS = [
  {
    href: 'mailto:surya_24@live.com',
    title: 'Email',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
  {
    href: 'tel:+918870858022',
    title: 'Phone',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/surya1412',
    title: 'LinkedIn',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><circle cx="12" cy="7" r="1"/></svg>
    ),
  },
  {
    href: 'https://github.com/Suryeah',
    title: 'GitHub',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
    ),
  },
  {
    href: 'https://orcid.org/0009-0005-2841-869X',
    title: 'ORCID',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#2d6cdf">iD</text></svg>
    ),
  },
];

const Contact = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const isSmallScreen = useIsSmallScreen(900); // Show breadcrumbs if screen <= 900px
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Catch Me', to: '/catch-me' },
  ];
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="products-section"
      style={{
        background: theme === 'dark' ? '#23272f' : '#fff',
        color: theme === 'dark' ? '#fff' : '#222',
        width: '100vw',
        minHeight: '100vh',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '0 1rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: 500,
            margin: '0 auto',
            width: '100%',
            background: 'none',
            boxSizing: 'border-box',
            padding: '2rem 1rem',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Breadcrumbs for small screens */}
          {isSmallScreen && (
            <nav aria-label="breadcrumb" className="breadcrumbs-nav" style={{ width: '100%', marginBottom: '1.2rem' }}>
              <ol style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem', color: theme === 'dark' ? '#b3cdf6' : '#174ea6' }}>
                {breadcrumbs.map((crumb, idx) => (
                  <li key={crumb.to} style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to={crumb.to} style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', textDecoration: 'none', fontWeight: 600 }}>{crumb.label}</Link>
                    {idx < breadcrumbs.length - 1 && <span style={{ margin: '0 0.5rem' }}>/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h2
            style={{
              color: theme === 'dark' ? '#b3cdf6' : '#174ea6',
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: '1.5rem',
            }}
          >
            Get in Touch
          </h2>
          <form
            className="contact-form"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '1.2rem',
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                style={{ flex: 1, minWidth: 0 }}
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                style={{ flex: 1, minWidth: 0 }}
              />
            </div>
            <textarea
              placeholder="Your Message"
              name="message"
              required
              style={{ width: '100%', minHeight: 120, resize: 'vertical' }}
            ></textarea>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.8rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                background: theme === 'dark' ? '#2d6cdf' : '#174ea6',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                marginTop: 8,
                transition: 'background 0.2s',
              }}
            >
              Send Message
            </button>
          </form>
          <div
            style={{
              marginTop: '1.5rem',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {CONTACT_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ fontSize: '1.7rem', display: 'flex', alignItems: 'center' }}
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Responsive styles for mobile */}
      <style>{`
        @media (max-width: 900px) {
          .breadcrumbs-nav {
            display: block !important;
          }
          nav[role="navigation"], .main-navbar, .navbar, .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .breadcrumbs-nav {
            display: none !important;
          }
        }
        @media (max-width: 700px) {
          .container {
            padding: 0 !important;
          }
          .contact-form > div {
            flex-direction: column !important;
            gap: 0.7rem !important;
          }
          .contact-form input {
            width: 100% !important;
          }
          .contact-form button {
            font-size: 1rem !important;
            padding: 0.7rem !important;
          }
        }
        @media (max-width: 400px) {
          h2 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
