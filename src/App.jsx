import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Products from './components/Products';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Education from './components/Education';
import Experience from './components/Experience';
import ThemeProvider from './components/ThemeContext.jsx';

/* ── Scroll Progress Bar ── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const handle = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100 || 0);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Surya Vardhan · Embedded Developer & Firmware Engineer</div>
      <div className="site-footer-links">
        <a href="https://github.com/Suryeah" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/surya1412" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:surya_24@live.com">Email</a>
      </div>
      <div className="site-footer-note">
        Built with React · Vite · Deployed on GitHub Pages
      </div>
    </footer>
  );
}

/* ── Styled 404 ── */
function NotFound() {
  const navigate = useNavigate();
  return (
    <main id="main" className="not-found-page">
      <div className="not-found-code">404</div>
      <p className="not-found-msg">Page not found</p>
      <p className="not-found-sub">Looks like you wandered off the firmware path.</p>
      <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </main>
  );
}

function PortfolioPage() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const root = document.documentElement;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.revealed = 'true';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    root.classList.add('reveal-ready');
    document.querySelectorAll('main .section-inner').forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      const el = e.target.closest?.('.spotlight');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', handleMove, { passive: true });
    return () => document.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <main id="main" className="portfolio-page">
      <Hero />
      <Products />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') return;
    const frame = window.requestAnimationFrame(() => {
      const sectionId = location.hash.slice(1);
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <div className="app-content-wrapper">
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Navbar />
      <div className="route-fade">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/experience" element={<Navigate to="/#experience" replace />} />
          <Route path="/products" element={<Navigate to="/#products" replace />} />
          <Route path="/education" element={<Navigate to="/#education" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/catchme" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
