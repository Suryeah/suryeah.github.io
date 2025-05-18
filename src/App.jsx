import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import CatchMePage from './pages/CatchMePage';
import './App.css';
import { ThemeProvider } from './components/ThemeContext.jsx';

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    document.body.classList.add('scroll-lock');
    document.getElementById('root').classList.add('scroll-lock');
    const timer = setTimeout(() => {
      document.body.classList.remove('scroll-lock');
      document.getElementById('root').classList.remove('scroll-lock');
    }, 1300);

    // Always scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app-content-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
          </>
        } />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/catchme" element={<CatchMePage />} />
        <Route path="*" element={<div style={{padding:'2rem',textAlign:'center'}}>404 - Page Not Found</div>} />
      </Routes>
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
