import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PRODUCTS = [
  {
    name: 'Real Time Acceleration Plotter [RTAP-335®]',
    pdf: 'https://suryeah.github.io/datasheet/RTAP-335%C2%AE.pdf',
    icon: '📡',
    description: 'Real-time acceleration plotting product from the resume.',
    challenge: 'Provide a reliable way to capture and visualize acceleration data in real time.',
    architecture: 'Embedded acquisition pipeline paired with live plotting/monitoring software.',
    outcome: 'Resume-listed product used for motion-data visibility and validation.',
    role: 'Firmware and data-visualization support',
    tags: ['Acceleration', 'Real Time Plotting', 'Embedded Software'],
  },
  {
    name: 'Remote Tree Climber',
    github: 'https://github.com/Suryeah/RF433-Remote-Control-.git',
    icon: '🌳',
    description: 'Remote Tree Climber',
    challenge: 'Build a remotely operated climbing mechanism with dependable control.',
    architecture: 'Wireless control path with embedded motor-control firmware.',
    outcome: 'Working remote actuator prototype listed in the resume products section.',
    role: 'Control logic and integration testing',
    tags: ['Remote Control', 'Embedded C', 'Actuation'],
  },
  {
    name: 'Earthquake Detector [EMD-1202®]',
    pdf: 'https://suryeah.github.io/datasheet/EMD-1202%C2%AE.pdf',
    icon: '⚡',
    description: 'Earthquake detector platform from the resume.',
    challenge: 'Detect and report seismic activity with dependable embedded sensing.',
    architecture: 'Sensor acquisition plus embedded processing and reporting flow.',
    outcome: 'Resume-listed field product with datasheet support.',
    role: 'Firmware development and productization support',
    tags: ['Seismic', 'Detection', 'Embedded Firmware'],
  },
  {
    name: 'Portable Seismic DAQ [PS-DAQ®]',
    pdf: 'https://suryeah.github.io/datasheet/Portable%20Seismic%20%20DAQ%C2%AE.pdf',
    icon: '🌐',
    description: 'Portable seismic data acquisition product from the resume.',
    challenge: 'Capture seismic and vibration data in a portable, field-friendly form factor.',
    architecture: 'Portable DAQ stack with embedded sampling, logging, and transfer support.',
    outcome: 'Field-deployable DAQ product backed by datasheet documentation.',
    role: 'Acquisition firmware and systems integration',
    tags: ['Seismic', 'DAQ', 'Data Acquisition'],
  },
  {
    name: 'Devantech ETH008-B Driver',
    icon: '🏗️',
    description: 'Ethernet relay driver referenced in the resume.',
    challenge: 'Integrate the Devantech ETH008-B module into an embedded control flow.',
    architecture: 'Driver-level interface to Ethernet-controlled relay I/O.',
    outcome: 'Working driver layer aligned with the resume product list.',
    role: 'Embedded driver integration',
    tags: ['Ethernet', 'Relay Control', 'Driver'],
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
