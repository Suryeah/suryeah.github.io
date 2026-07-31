import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import CatchMePage from './pages/CatchMePage';
import './App.css';
import { ThemeProvider, useTheme } from './components/ThemeContext.jsx';

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

/* ── Cursor Glow ── */
function CursorGlow() {
  const { theme } = useTheme();
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);
  return (
    <div className="cursor-glow" style={{
      left: pos.x,
      top: pos.y,
      background: theme === 'dark'
        ? 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)'
        : 'radial-gradient(circle, rgba(45,108,223,0.07) 0%, transparent 70%)',
    }} />
  );
}

/* ── Footer ── */
function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="site-footer" style={{
      background: theme === 'dark' ? '#1a1e27' : '#f6f8fa',
      color: theme === 'dark' ? '#94a3b8' : '#6b7280',
    }}>
      <div>© 2026 Surya Vardhan · Embedded Developer & Firmware Engineer</div>
      <div className="site-footer-links">
        <a href="https://github.com/Suryeah" target="_blank" rel="noopener noreferrer"
          style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/surya1412" target="_blank" rel="noopener noreferrer"
          style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf' }}>LinkedIn</a>
        <a href="mailto:surya_24@live.com"
          style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf' }}>Email</a>
      </div>
      <div style={{ marginTop: '0.4rem', fontSize: '0.75rem', opacity: 0.6 }}>
        Built with React · Vite · Deployed on GitHub Pages
      </div>
    </footer>
  );
}

/* ── Styled 404 ── */
function NotFound() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="not-found-page" style={{
      background: theme === 'dark' ? '#23272f' : '#fff',
      color: theme === 'dark' ? '#f6f8fa' : '#1a202c',
    }}>
      <div className="not-found-code">404</div>
      <p className="not-found-msg">Page not found</p>
      <p className="not-found-sub">Looks like you wandered off the firmware path.</p>
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '1rem',
          padding: '0.7rem 2rem',
          borderRadius: 30,
          background: 'linear-gradient(135deg, #2d6cdf, #7c3aed)',
          color: '#fff',
          border: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: 'pointer',
          fontFamily: "'Inter', system-ui",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    document.body.classList.add('scroll-lock');
    document.getElementById('root').classList.add('scroll-lock');
    const timer = setTimeout(() => {
      document.body.classList.remove('scroll-lock');
      document.getElementById('root').classList.remove('scroll-lock');
    }, 1300);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app-content-wrapper">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <div key={location.pathname} className="route-fade">
        <Routes>
          <Route path="/" element={<><Hero /><Skills /></>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/catchme" element={<CatchMePage />} />
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
