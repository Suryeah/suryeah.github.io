import React, { useEffect, useRef } from 'react';

const PRODUCTS = [
  {
    name: 'Real-Time Acceleration Plotter',
    icon: '📡',
    description: 'RTAP-335®',
    summary: 'Real-time acceleration acquisition and plotting for motion-data visualization.',
    role: 'Product firmware + validation support',
    tags: ['RF', 'Embedded Firmware', 'Test Instrumentation'],
  },
  {
    name: 'Remote Tree Climber',
    github: 'https://github.com/Suryeah/RF433-Remote-Control-.git',
    icon: '🌳',
    description: 'Remote Tree Climber',
    summary: 'RF433 remote-control prototype with embedded motor actuation.',
    role: 'Control logic + integration testing',
    tags: ['RF433', 'Control Systems', 'Embedded C'],
  },
  {
    name: 'Earthquake Detector',
    github: 'https://github.com/Suryeah/Earthquake_Detector',
    icon: '⚡',
    description: 'EMD-1202®',
    summary: 'Embedded earthquake detection product designed for dependable field operation.',
    role: 'Firmware development + productization support',
    tags: ['Product Engineering', 'Firmware', 'Field Reliability'],
  },
  {
    name: 'Portable Seismic DAQ',
    icon: '🌐',
    description: 'PS-DAQ®',
    summary: 'Portable seismic data acquisition product with embedded sampling, logging, and data transfer.',
    role: 'Acquisition firmware + systems integration',
    tags: ['Seismic', 'DAQ', 'Signal Processing'],
  },
  {
    name: 'SHM Solutions',
    icon: '🏗️',
    description: 'SHM Solutions',
    summary: 'Sensing, telemetry, and firmware for long-term structural monitoring.',
    role: 'Embedded solution engineering',
    tags: ['SHM', 'IoT Sensing', 'Edge Monitoring'],
  },
  {
    name: 'Devantech ETH008-B Driver',
    icon: '🔌',
    description: 'Ethernet relay driver',
    summary: 'Embedded driver integration for Ethernet-controlled relay I/O.',
    role: 'Driver integration',
    tags: ['Ethernet', 'Relay Control', 'Embedded Driver'],
  },
];

const Products = () => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} id="products" className="products-section" style={{ background: 'var(--bg-secondary)', color: 'var(--text)', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container">
        <h2 style={{ color: 'var(--text)' }}>Products &amp; Solutions</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, marginTop: 6, marginBottom: 28 }}>
          Selected products and solutions across embedded firmware, RF, data acquisition, and sensing.
        </p>
        <div className="products-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {PRODUCTS.map((product, idx) => (
            <div key={idx} className="product-card" style={{ background: 'var(--surface)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', padding: '1.2rem', minWidth: 220, textAlign: 'left', color: 'var(--text)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{product.icon}</div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: 6 }}>{product.name}</h3>
              {product.description !== product.name && (
                <div style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: 8 }}>{product.description}</div>
              )}
              <p style={{ fontSize: '0.92rem', lineHeight: 1.55, margin: '0 0 0.5rem', color: 'var(--text-secondary)' }}>{product.summary}</p>
              <div className="case-role-row" style={{ marginBottom: 8 }}>
                <span className="case-role-label">My Role</span>
                <span className="case-role-value">{product.role}</span>
              </div>
              <div className="tech-tags-row" style={{ marginTop: 0, marginBottom: 8 }}>
                {product.tags.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
              </div>
              {product.pdf && (
                <a href={product.pdf} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>View Datasheet (PDF)</a>
              )}
              {product.github && (
                <a href={product.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>View on GitHub</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
