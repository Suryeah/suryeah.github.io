import React, { useEffect, useRef, useState } from 'react';
import heroPhoto from '../assets/hero-photo.png';
import { useTheme } from './ThemeContext.jsx';

const TITLES = [
  'Surya Vardhan',
  'Embedded Developer',
  'Firmware Engineer',
];

const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const DELAY_AFTER_TYPE = 1000;
const DELAY_AFTER_DELETE = 400;

const STATS = [
  { end: 8, suffix: '+', label: 'Years Exp.' },
  { end: 5, suffix: '', label: 'Companies' },
  { end: 7, suffix: '+', label: 'MCU Platforms' },
  { end: 9, suffix: '+', label: 'Projects' },
];

function useCountUp(target, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.ceil(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

const StatItem = ({ stat, started }) => {
  const val = useCountUp(stat.end, 1000, started);
  const { theme } = useTheme();
  return (
    <div className="hero-stat-item" style={{
      background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
    }}>
      <div className="hero-stat-value">{val}{stat.suffix}</div>
      <div className="hero-stat-label" style={{ color: theme === 'dark' ? '#94a3b8' : '#6b7280' }}>{stat.label}</div>
    </div>
  );
};

const Hero = () => {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [statsStarted, setStatsStarted] = useState(false);
  const timeoutRef = useRef();
  const sectionRef = useRef();

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

  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll('section');
      const trigger = window.innerHeight * 0.85;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) section.classList.add('visible');
      });
    };
    window.addEventListener('scroll', revealSections);
    revealSections();
    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
    const t = setTimeout(() => setStatsStarted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero-section" style={{
      width: '100vw', minWidth: '100vw', maxWidth: '100vw',
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#ffffff',
      padding: 0, margin: 0, boxSizing: 'border-box',
      position: 'relative', overflow: 'hidden', border: 'none',
    }}>

      <div className="container" style={{
        width: '100vw', maxWidth: '1200px', margin: '0 auto', paddingLeft: '40px',
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh', boxSizing: 'border-box', gap: '3vw', flexWrap: 'nowrap',
        position: 'relative', zIndex: 1,
      }}>

        {/* Photo with glow ring */}
        <div className="hero-photo-wrapper" style={{
          flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
          minWidth: 'min(440px, 66vw)', minHeight: 'min(440px, 66vw)',
        }}>
          <img
            src={heroPhoto}
            alt="Surya Vardhan"
            style={{
              width: 'min(440px, 66vw)', height: 'min(440px, 66vw)',
              borderRadius: '20px',
              objectFit: 'cover',
              boxShadow: theme === 'dark'
                ? '0 0 0 4px rgba(124,58,237,0.35), 0 0 48px rgba(124,58,237,0.2), 0 16px 48px rgba(0,0,0,0.4)'
                : '0 0 0 4px rgba(45,108,223,0.18), 0 0 48px rgba(45,108,223,0.12), 0 16px 48px rgba(45,108,223,0.1)',
              border: 'none',
              minWidth: 'min(220px, 40vw)', minHeight: 'min(220px, 40vw)',
              maxWidth: '440px', maxHeight: '440px',
              transition: 'box-shadow 0.4s ease',
            }}
          />
        </div>

        {/* Content */}
        <div className="hero-content" style={{
          flex: '1 1 0', display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center',
          textAlign: 'left', minWidth: 0, maxWidth: '600px',
          paddingLeft: '2vw', marginLeft: '20px',
        }}>

          {/* Typewriter heading with gradient text */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            minHeight: '2.5rem', fontWeight: 800,
            letterSpacing: '-0.5px', textAlign: 'left',
            marginBottom: '1rem', lineHeight: 1.1, wordBreak: 'break-word',
            width: `calc(${maxTitleLength}ch + 1.5rem)`,
            minWidth: `calc(${maxTitleLength}ch + 1.5rem)`,
          }}>
            <span className="hero-gradient-text">{displayText}</span>
            <span style={{
              background: 'linear-gradient(135deg, #2d6cdf, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 300,
            }}>|</span>
          </h1>

          {/* Bio */}
          <p style={{
            color: theme === 'dark' ? '#cbd5e1' : '#4b5563',
            fontSize: '1rem', lineHeight: 1.75, margin: 0,
            textAlign: 'justify', maxWidth: '520px',
          }}>
            🔧 A never-stopping individual who loves bringing hardware to life with lines of code. Passionate about real-time systems, low-level debugging, and building tech that makes a difference. Whether it's writing firmware or exploring side projects in web dev, I'm always chasing the next challenge (and that perfect compile).
          </p>

          {/* Stats strip */}
          <div className="hero-stats" style={{
            borderColor: theme === 'dark' ? 'rgba(179,205,246,0.12)' : 'rgba(45,108,223,0.12)',
          }}>
            {STATS.map((s, i) => <StatItem key={i} stat={s} started={statsStarted} />)}
          </div>

          {/* CTA pill buttons */}
          <div className="hero-cta-row">
            <a href="https://www.linkedin.com/in/surya1412" target="_blank" rel="noopener noreferrer" className="hero-pill-btn primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Suryeah" target="_blank" rel="noopener noreferrer" className="hero-pill-btn secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="mailto:surya_24@live.com" className="hero-pill-btn secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
            <a href="https://orcid.org/0009-0005-2841-869X" target="_blank" rel="noopener noreferrer" className="hero-pill-btn secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">iD</text></svg>
              ORCID
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down-indicator" style={{
        position: 'absolute', left: '50%', bottom: '6vh',
        transform: 'translateX(-50%)', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none',
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke={theme === 'dark' ? '#b3cdf6' : '#2d6cdf'}
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ animation: 'bounce 1.5s infinite' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .scroll-down-indicator { opacity: 0.7; transition: opacity 0.3s; }
        @media (max-width: 900px) {
          .scroll-down-indicator { display: none !important; }
          .hero-section { background: #fff !important; padding:0!important; margin:0!important; width:100vw!important; min-width:100vw!important; max-width:100vw!important; overflow-x:hidden!important; border:none!important; }
          .hero-section .container { flex-direction:column!important; align-items:stretch!important; justify-content:flex-start!important; min-height:0!important; gap:2vw!important; width:100vw!important; min-width:100vw!important; max-width:100vw!important; box-sizing:border-box!important; padding:0!important; margin:0!important; overflow-x:hidden!important; border:none!important; }
          .hero-photo-wrapper { margin-bottom:0!important; min-width:unset!important; min-height:unset!important; display:flex!important; justify-content:center!important; width:100vw!important; max-width:100vw!important; box-sizing:border-box!important; border:none!important; }
          .hero-photo-wrapper img { width:70vw!important; height:70vw!important; min-width:180px!important; min-height:180px!important; max-width:95vw!important; max-height:95vw!important; border-radius:16px!important; border:none!important; }
          .hero-content { align-items:stretch!important; text-align:justify!important; padding-left:0!important; max-width:98vw!important; width:100vw!important; box-sizing:border-box!important; border:none!important; }
          .hero-stats { width:100%; }
          .hero-cta-row { flex-wrap: wrap; }
        }
        section { margin:0!important; padding:0!important; border:none!important; border-radius:0!important; }
        section + section { margin-top:0!important; padding-top:0!important; border:none!important; border-radius:0!important; }
        .hero-content p, .hero-content h1 { text-align:justify; }
      `}</style>
    </section>
  );
};

export default Hero;
