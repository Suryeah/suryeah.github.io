import React, { useEffect, useRef, useState } from 'react';
import heroPhoto from '../assets/hero-photo.png';
import { Link } from 'react-router-dom';

const STATS = [
  { end: 7, suffix: '+', label: 'Years Embedded' },
  { end: 4, suffix: '', label: 'Products Shipped' },
  { end: 1, suffix: '', label: 'Patent Application' },
  { end: 1600, suffix: '+', label: 'Issues Resolved' },
];

const HIGHLIGHTS = [
  'Ported the MMCSD device driver for TI AM263x and met AM68/AM69 SDK delivery milestones.',
  'Built Python applications and DBus IPC for Embedded Linux appliance platforms.',
  'Developed firmware for a 3.3 kW EV charger and delivered an RTOS product from concept to commercialization in four months.',
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
  return (
    <div className="hero-stat-item" style={{
      background: 'var(--surface)',
    }}>
      <div className="hero-stat-value">{val}{stat.suffix}</div>
      <div className="hero-stat-label" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
    </div>
  );
};

const Hero = () => {
  const [statsStarted, setStatsStarted] = useState(false);
  const sectionRef = useRef();

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
      background: 'var(--bg-secondary)',
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
              boxShadow: 'none',
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

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: '0.8rem',
            padding: '0.35rem 0.8rem',
            borderRadius: 999,
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: 'var(--status-text)',
            background: 'var(--status-surface)',
            border: '1px solid var(--status-border)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal)', boxShadow: '0 0 0 4px var(--signal-soft)' }} />
            Currently at Bosch Global Software Technologies
          </div>

          <h1 style={{
            fontFamily: "'Sora', 'Inter', system-ui",
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            minHeight: '2.5rem', fontWeight: 800,
            letterSpacing: '-0.7px', textAlign: 'left',
            marginBottom: '0.35rem', lineHeight: 1.08, wordBreak: 'break-word',
          }}>
            <span className="hero-gradient-text">Surya Vardhan</span>
          </h1>

          <div style={{
            fontSize: 'clamp(1.05rem, 2.1vw, 1.28rem)',
            minHeight: '1.6rem',
            fontWeight: 700,
            color: 'var(--brand)',
            letterSpacing: '0.2px',
            marginTop: 0,
            marginBottom: '1rem',
            lineHeight: 1.25,
            textAlign: 'left',
          }}>
            Embedded Firmware Engineer
          </div>

          <p style={{
            margin: 0,
            marginBottom: '0.85rem',
            color: 'var(--text)',
            fontWeight: 600,
            fontSize: '1.05rem',
          }}>
            Building embedded firmware and Linux systems from board bring-up through field deployment.
          </p>

          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: '0.9rem',
          }}>
            <span className="case-chip">Open to relocation</span>
            <span className="case-chip">Willing to work globally</span>
            <span className="case-chip">Immediate technical discussions</span>
          </div>

          {/* Bio */}
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.98rem', lineHeight: 1.72, margin: 0,
            textAlign: 'justify', maxWidth: '520px',
          }}>
            I design embedded software for automotive, industrial, and sensing systems. My work focuses on low-level firmware, Embedded Linux, board bring-up, and communication stacks where reliability, timing, and hardware constraints matter.
          </p>

          <ul style={{
            margin: '0.8rem 0 0.4rem 1rem',
            padding: 0,
            color: 'var(--text-secondary)',
            fontSize: '0.92rem',
            lineHeight: 1.55,
            maxWidth: '560px',
          }}>
            {HIGHLIGHTS.map((item, idx) => <li key={idx} style={{ marginBottom: 4 }}>{item}</li>)}
          </ul>

          {/* Stats strip */}
          <div className="hero-stats" style={{
            borderColor: 'var(--border)',
          }}>
            {STATS.map((s, i) => <StatItem key={i} stat={s} started={statsStarted} />)}
          </div>

          {/* CTA pill buttons */}
          <div className="hero-cta-row">
            <Link to="/#projects" className="hero-pill-btn primary" aria-label="View projects">
              View Projects
            </Link>
            <Link to="/#contact" className="hero-pill-btn secondary" aria-label="Go to contact section">
              Get in Touch
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-pill-btn primary">
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down-indicator" style={{
        position: 'absolute', left: '50%', bottom: '2.5vh',
        transform: 'translateX(-50%)', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none',
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="var(--brand)"
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
        .hero-section .container h1::after,
        .hero-section .container h2::after {
          display: none !important;
          content: none !important;
        }
        @media (max-width: 900px) {
          .scroll-down-indicator { display: none !important; }
          .hero-section { background: var(--bg-secondary) !important; padding:0!important; margin:0!important; width:100vw!important; min-width:100vw!important; max-width:100vw!important; overflow-x:hidden!important; border:none!important; }
          .hero-section .container { flex-direction:column!important; align-items:stretch!important; justify-content:flex-start!important; min-height:0!important; gap:2vw!important; width:100vw!important; min-width:100vw!important; max-width:100vw!important; box-sizing:border-box!important; padding:0!important; margin:0!important; overflow-x:hidden!important; border:none!important; }
          .hero-photo-wrapper { margin-bottom:0!important; min-width:unset!important; min-height:unset!important; display:flex!important; justify-content:center!important; width:100vw!important; max-width:100vw!important; box-sizing:border-box!important; border:none!important; }
          .hero-photo-wrapper img { width:70vw!important; height:70vw!important; min-width:180px!important; min-height:180px!important; max-width:95vw!important; max-height:95vw!important; border-radius:16px!important; border:none!important; }
          .hero-content { align-items:stretch!important; text-align:justify!important; padding-left:0!important; max-width:98vw!important; width:100vw!important; box-sizing:border-box!important; border:none!important; }
          .hero-stats { width:100%; }
          .hero-cta-row { flex-wrap: wrap; }
        }
        section { margin:0!important; padding:0!important; border:none!important; border-radius:0!important; }
        section + section { margin-top:0!important; padding-top:0!important; border:none!important; border-radius:0!important; }
        .hero-content p { text-align:justify; }
        .hero-content h1, .hero-content h2 { text-align:left; }
      `}</style>
    </section>
  );
};

export default Hero;
