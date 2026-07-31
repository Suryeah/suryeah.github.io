import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PRODUCTS = [
  {
    name: 'Radio Frequency Signal Generator',
    pdf: 'https://suryeah.github.io/datasheet/RTAP-335%C2%AE.pdf',
    icon: '📡',
    description: 'RTAP-335®',
    challenge: 'Need a compact configurable RF generation platform for test and validation workflows.',
    architecture: 'Embedded signal generation chain with controlled output behavior for field and bench use.',
    outcome: 'Deliverable product-grade unit suitable for repeatable RF test scenarios.',
    role: 'Product firmware + validation support',
    tags: ['RF', 'Embedded Firmware', 'Test Instrumentation'],
  },
  {
    name: 'Remote Tree Climber',
    github: 'https://github.com/Suryeah/RF433-Remote-Control-.git',
    icon: '🌳',
    description: 'Remote Tree Climber',
    challenge: 'Build safe remote actuation over low-cost wireless control links.',
    architecture: 'RF433 command channel with embedded motor/control firmware path.',
    outcome: 'Functional remote mechanism prototype validated for practical operation.',
    role: 'Control logic + integration testing',
    tags: ['RF433', 'Control Systems', 'Embedded C'],
  },
  {
    name: 'EMD-1202®',
    pdf: 'https://suryeah.github.io/datasheet/EMD-1202%C2%AE.pdf',
    icon: '⚡',
    description: 'EMD-1202®',
    challenge: 'Create a robust embedded product with dependable behavior under field constraints.',
    architecture: 'Embedded hardware-software stack with reliability-oriented firmware structure.',
    outcome: 'Commercially presentable deliverable with complete datasheet support.',
    role: 'Firmware development + productization support',
    tags: ['Product Engineering', 'Firmware', 'Field Reliability'],
  },
  {
    name: 'Portable Seismic DAQ',
    pdf: 'https://suryeah.github.io/datasheet/Portable%20Seismic%20%20DAQ%C2%AE.pdf',
    icon: '🌐',
    description: 'Portable Seismic DAQ',
    challenge: 'Acquire seismic/vibration data portably while preserving signal integrity in deployment.',
    architecture: 'Portable DAQ stack with embedded sampling, logging, and transfer readiness.',
    outcome: 'Field-deployable DAQ concept backed by formal datasheet documentation.',
    role: 'Acquisition firmware + systems integration',
    tags: ['Seismic', 'DAQ', 'Signal Processing'],
  },
  {
    name: 'SHM Solutions',
    pdf: 'https://suryeah.github.io/datasheet/Senpronics%20SHM%20Solutions.pdf',
    icon: '🏗️',
    description: 'SHM Solutions',
    challenge: 'Support structural health monitoring with reliable embedded sensing pipelines.',
    architecture: 'Sensor + telemetry + firmware stack designed for long-term monitoring deployments.',
    outcome: 'Solution package aligning sensing, embedded intelligence, and maintainable field operation.',
    role: 'Embedded solution engineering',
    tags: ['SHM', 'IoT Sensing', 'Edge Monitoring'],
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
        <p style={{ color: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 15, marginTop: 6, marginBottom: 28 }}>
          Product case studies showing design intent, system architecture, and delivery outcomes.
        </p>
        <div className="products-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {PRODUCTS.map((product, idx) => (
            <div key={idx} className="product-card" style={{ background: theme === 'dark' ? '#23272f' : '#f1f5fd', borderRadius: 14, boxShadow: '0 2px 8px rgba(45,108,223,0.06)', padding: '1.2rem', minWidth: 220, textAlign: 'left', color: theme === 'dark' ? '#fff' : '#222' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{product.icon}</div>
              <h3 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontSize: '1.1rem', marginBottom: 6 }}>{product.name}</h3>
              <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#444', marginBottom: 8 }}>{product.description}</div>
              <div className="case-block">
                <span className="case-label">Challenge:</span> {product.challenge}
              </div>
              <div className="case-block">
                <span className="case-label">Architecture:</span> {product.architecture}
              </div>
              <div className="case-block">
                <span className="case-label">Outcome:</span> {product.outcome}
              </div>
              <div className="case-role-row" style={{ marginBottom: 8 }}>
                <span className="case-role-label">My Role</span>
                <span className="case-role-value">{product.role}</span>
              </div>
              <div className="tech-tags-row" style={{ marginTop: 0, marginBottom: 8 }}>
                {product.tags.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
              </div>
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
