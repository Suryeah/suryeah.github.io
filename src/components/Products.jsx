import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PRODUCTS = [
  {
    name: 'Radio Frequency Signal Generator',
    pdf: 'https://suryeah.github.io/datasheet/RTAP-335%C2%AE.pdf',
    icon: '📡',
    description: 'RTAP-335®'
  },
  {
    name: 'Remote Tree Climber',
    github: 'https://github.com/Suryeah/RF433-Remote-Control-.git',
    icon: '🌳',
    description: 'Remote Tree Climber'
  },
  {
    name: 'EMD-1202®',
    pdf: 'https://suryeah.github.io/datasheet/EMD-1202%C2%AE.pdf',
    icon: '⚡',
    description: 'EMD-1202®'
  },
  {
    name: 'Portable Seismic DAQ',
    pdf: 'https://suryeah.github.io/datasheet/Portable%20Seismic%20%20DAQ%C2%AE.pdf',
    icon: '🌐',
    description: 'Portable Seismic DAQ'
  },
  {
    name: 'SHM Solutions',
    pdf: 'https://suryeah.github.io/datasheet/Senpronics%20SHM%20Solutions.pdf',
    icon: '🏗️',
    description: 'SHM Solutions'
  },
];

const Products = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} id="products" className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container">
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6' }}>Products</h2>
        <div className="products-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {PRODUCTS.map((product, idx) => (
            <div key={idx} className="product-card" style={{ background: theme === 'dark' ? '#23272f' : '#f1f5fd', borderRadius: 14, boxShadow: '0 2px 8px rgba(45,108,223,0.06)', padding: '1.2rem', minWidth: 220, textAlign: 'center', color: theme === 'dark' ? '#fff' : '#222' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{product.icon}</div>
              <h3 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontSize: '1.1rem', marginBottom: 6 }}>{product.name}</h3>
              <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#444', marginBottom: 8 }}>{product.description}</div>
              {product.pdf && (
                <a href={product.pdf} target="_blank" rel="noopener noreferrer" style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf', textDecoration: 'underline', fontWeight: 500 }}>View Datasheet (PDF)</a>
              )}
              {product.github && (
                <a href={product.github} target="_blank" rel="noopener noreferrer" style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf', textDecoration: 'underline', fontWeight: 500 }}>View on GitHub</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
