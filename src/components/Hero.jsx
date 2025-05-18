import React, { useEffect, useRef, useState } from 'react';
import heroPhoto from '../assets/hero-photo.png';
import { useTheme } from './ThemeContext.jsx';

const TITLES = [
  'Surya Vardhan',
  'Embedded Developer',
  'Firmware Engineeer',
];

const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const DELAY_AFTER_TYPE = 1000;
const DELAY_AFTER_DELETE = 400;

const Hero = () => {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef();
  const sectionRef = useRef();

  // Calculate the max title length for fixed width
  const maxTitleLength = Math.max(...TITLES.map(t => t.length));

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    if (!isDeleting && charIndex < currentTitle.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, TYPING_SPEED);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPE);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, DELETING_SPEED);
    } else if (isDeleting && charIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % TITLES.length);
      }, DELAY_AFTER_DELETE);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, titleIndex]);

  // Fade-in effect for all sections
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll('section');
      const trigger = window.innerHeight * 0.85;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealSections);
    revealSections();
    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  // Set .visible class on the root section when Hero is mounted
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero-section" style={{
      width: '100vw',
      minWidth: '100vw',
      maxWidth: '100vw',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme === 'dark' ? '#23272f' : '#fff',
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      border: 'none',
    }}>
      <div className="container" style={{
        width: '100vw',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        boxSizing: 'border-box',
        gap: '3vw',
        flexWrap: 'nowrap',
      }}>
        <div className="hero-photo-wrapper" style={{
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 'min(440px, 66vw)',
          minHeight: 'min(440px, 66vw)',
        }}>
          <img
            src={heroPhoto}
            alt="Surya Vardhan"
            style={{
              width: 'min(440px, 66vw)',
              height: 'min(440px, 66vw)',
              borderRadius: '0', // Remove curved edges
              objectFit: 'cover',
              boxShadow: 'none',
              border: 'none',
              background: 'none',
              transition: 'transform 0.5s',
              willChange: 'transform',
              marginRight: '0',
              marginBottom: '0',
              filter: 'none',
              minWidth: 'min(220px, 40vw)', // Prevents shrinking on mobile
              minHeight: 'min(220px, 40vw)',
              maxWidth: '440px',
              maxHeight: '440px',
            }}
          />
        </div>
        <div className="hero-content" style={{
          flex: '1 1 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          textAlign: 'left',
          minWidth: 0,
          maxWidth: '600px',
          paddingLeft: '2vw',
          marginLeft: '20px',
        }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              minHeight: '2.5rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textAlign: 'left',
              marginBottom: '1.2rem',
              lineHeight: 1.1,
              wordBreak: 'break-word',
              width: `calc(${maxTitleLength}ch + 1.5rem)`, // Fixed width for animation
              minWidth: `calc(${maxTitleLength}ch + 1.5rem)`
            }}
          >
            <span>{displayText}</span>
            <span className="typing-cursor" style={{ color: '#2d6cdf', fontWeight: 400 }}>|</span>
          </h1>
          <p style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
            🔧 A never-stopping individual who loves bringing hardware to life with lines of code. Passionate about real-time systems, low-level debugging, and building tech that makes a difference. Whether it’s writing firmware or exploring side projects in web dev, I’m always chasing the next challenge (and that perfect compile).
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.2rem', justifyContent: 'flex-start', marginTop: '1.2rem', flexWrap: 'nowrap', flexShrink: 0 }}>
            <a href="tel:+918870858022" className="cta-btn" style={{ borderRadius: '50%', width: '2.7rem', height: '2.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', padding: 0, background: 'none', boxShadow: 'none' }} title="Phone">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:surya_24@live.com" className="cta-btn" style={{ borderRadius: '50%', width: '2.7rem', height: '2.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', padding: 0, background: 'none', boxShadow: 'none' }} title="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://orcid.org/0009-0005-2841-869X" className="cta-btn" style={{ borderRadius: '50%', width: '2.7rem', height: '2.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', padding: 0, background: 'none', boxShadow: 'none' }} title="ORCID">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#2d6cdf">iD</text></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="scroll-down-indicator" style={{
        position: 'absolute',
        left: '50%',
        bottom: '6vh', // Move up for better visibility
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2d6cdf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{
          animation: 'bounce 1.5s infinite',
        }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .scroll-down-indicator {
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        @media (max-width: 900px) {
          .scroll-down-indicator {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .hero-section {
            background: ${theme === 'dark' ? '#23272f' : '#fff'} !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
            border: none !important;
          }
          .hero-section .container {
            flex-direction: column !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            min-height: 0 !important;
            gap: 2vw !important;
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow-x: hidden !important;
            border: none !important;
          }
          .hero-photo-wrapper {
            margin-bottom: 0 !important;
            min-width: unset !important;
            min-height: unset !important;
            display: flex !important;
            justify-content: center !important;
            width: 100vw !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
            border: none !important;
          }
          .hero-photo-wrapper img {
            width: 70vw !important;
            height: 70vw !important;
            min-width: 180px !important;
            min-height: 180px !important;
            max-width: 95vw !important;
            max-height: 95vw !important;
            border-radius: 0 !important;
            border: none !important;
          }
          .hero-content {
            align-items: stretch !important;
            text-align: justify !important;
            padding-left: 0 !important;
            max-width: 98vw !important;
            width: 100vw !important;
            box-sizing: border-box !important;
            border: none !important;
          }
          .contact-form {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.1rem !important;
            width: 100vw !important;
            max-width: 98vw !important;
            margin: 0 auto !important;
            box-sizing: border-box !important;
          }
          .contact-form input,
          .contact-form textarea {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            margin: 0 !important;
            box-sizing: border-box !important;
            display: block !important;
          }
        }
        .hero-section, .hero-section .container, .hero-photo-wrapper, .hero-content, .hero-photo-wrapper img {
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .hero-content p, .hero-content h1 {
          text-align: justify;
        }
        /* Remove section gaps globally */
        section {
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          border-radius: 0 !important;
        }
        section + section {
          margin-top: 0 !important;
          padding-top: 0 !important;
          border: none !important;
          border-radius: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
