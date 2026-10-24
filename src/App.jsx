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
import './App.css';
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
      <div style={{ marginTop: '0.4rem', fontSize: '0.75rem', opacity: 0.6 }}>
        Built with React · Vite · Deployed on GitHub Pages
      </div>
    </footer>
  );
}

/* ── Styled 404 ── */
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-page" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
      <div className="not-found-code">404</div>
      <p className="not-found-msg">Page not found</p>
      <p className="not-found-sub">Looks like you wandered off the firmware path.</p>
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '1rem',
          padding: '0.7rem 2rem',
          borderRadius: 30,
          background: 'var(--gradient-brand)',
          color: 'var(--text-on-brand)',
          border: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Products />
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
