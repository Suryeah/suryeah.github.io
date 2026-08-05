import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PROJECTS = [
  {
    name: 'TI AM64x Inter-core IPC for ADC Data Transfer (R5 ↔ A53)',
    challenge: 'Move ADC data reliably between TI AM64x cores for a cross-core embedded application.',
    architecture: 'Inter-core IPC path between R5 and A53 with ADC data handoff.',
    outcome: 'Resume-listed IPC project for TI AM64x bring-up and validation.',
    role: 'IPC bring-up and validation',
    tags: ['TI AM64x', 'R5', 'A53', 'IPC', 'ADC'],
    constraints: ['Cross-core messaging', 'Data integrity'],
  },
  {
    name: 'Naive Bayes Estimator on ARM Cortex M0 (Bare-Metal C)',
    challenge: 'Implement a lightweight classifier on a constrained microcontroller.',
    architecture: 'Bare-metal C implementation tuned for ARM Cortex M0 limits.',
    outcome: 'Resume-listed embedded ML prototype suitable for low-power targets.',
    role: 'Algorithm implementation and MCU integration',
    tags: ['ARM Cortex M0', 'Bare Metal C', 'Classification'],
    constraints: ['Code size', 'Compute limits'],
  },
  {
    name: 'TCP Graph Plotter',
    challenge: 'Visualize incoming data streams over TCP in a clear plotting workflow.',
    architecture: 'TCP receiver paired with live plotting and update logic.',
    outcome: 'Resume-listed data-visualization project for real-time feedback.',
    role: 'Data streaming and visualization',
    tags: ['TCP', 'Plotting', 'Visualization'],
    constraints: ['Update latency', 'Stream handling'],
  },
  {
    name: 'Hi-Speed Data Transfer over TCP on ESP32',
    challenge: 'Push high-throughput data reliably over TCP on an ESP32 target.',
    architecture: 'ESP32 network transport tuned for fast transfer paths.',
    outcome: 'Resume-listed high-speed transfer project for embedded networking.',
    role: 'Transport optimization and validation',
    tags: ['ESP32', 'TCP', 'High Speed Transfer'],
    constraints: ['Throughput', 'Network stability'],
  },
  {
    name: 'ESP32 Based Velocity Tracker',
    challenge: 'Estimate velocity from sensor inputs with consistent embedded-side timing.',
    architecture: 'ESP32 acquisition and processing chain for motion data.',
    outcome: 'Resume-listed prototype for velocity estimation on embedded hardware.',
    role: 'Sensor integration and signal processing',
    tags: ['ESP32', 'Velocity', 'Sensors'],
    constraints: ['Timing', 'Noise handling'],
  },
  {
    name: 'RF Synthesizer',
    challenge: 'Generate configurable RF output for lab and validation use cases.',
    architecture: 'Embedded RF control path for repeatable synthesis behavior.',
    outcome: 'Resume-listed RF project for bench-side experimentation.',
    role: 'RF tuning and testing',
    tags: ['RF', 'Synthesizer', 'Validation'],
    constraints: ['Frequency stability', 'Repeatability'],
  },
  {
    name: 'HMI With STM32',
    challenge: 'Create an approachable human-machine interface on STM32 hardware.',
    architecture: 'STM32 firmware with display and user-input handling.',
    outcome: 'Resume-listed embedded UI project with MCU-based interaction.',
    role: 'UI firmware and hardware integration',
    tags: ['STM32', 'HMI', 'Embedded UI'],
    constraints: ['Display timing', 'User interaction'],
  },
  {
    name: 'CAN N/W on STM32',
    challenge: 'Bring up CAN communication on STM32 hardware.',
    architecture: 'STM32 CAN node with external transceiver support.',
    outcome: 'Resume-listed bus communication project with working validation.',
    role: 'Driver bring-up and bus validation',
    tags: ['STM32', 'CAN Bus', 'Transceiver'],
    constraints: ['Bus timing', 'Signal integrity'],
  },
  {
    name: 'Regenerative Braking System for Battle Tank using BLDC Motors',
    challenge: 'Prototype regenerative braking for a battle-tank platform using BLDC motors.',
    architecture: 'Motor-control and energy-recovery prototype for a defense R&D context.',
    outcome: 'Resume-listed DRDO project with working prototype delivery.',
    role: 'Prototype engineering and validation',
    tags: ['DRDO', 'BLDC', 'Regenerative Braking'],
    constraints: ['Prototype constraints', 'Control timing'],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} id="projects" className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container">
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6' }}>Projects</h2>
        <p style={{ color: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 15, marginTop: 6, marginBottom: 28 }}>
          Embedded case studies focused on constraints, architecture choices, and measurable outcomes.
        </p>
        <div className="products-list">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="product-card" style={{
              background: theme === 'dark' ? '#1e2330' : '#f8faff',
              borderRadius: 14,
              boxShadow: theme === 'dark' ? '0 2px 8px rgba(0,0,0,0.2)' : '0 2px 8px rgba(45,108,223,0.06)',
              padding: '1.4rem',
              color: theme === 'dark' ? '#fff' : '#222',
              borderTop: '3px solid #2d6cdf',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <h3 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', margin: 0 }}>{project.name}</h3>
              <div className="case-block">
                <span className="case-label">Challenge:</span> {project.challenge}
              </div>
              <div className="case-block">
                <span className="case-label">Architecture:</span> {project.architecture}
              </div>
              <div className="case-block">
                <span className="case-label">Outcome:</span> {project.outcome}
              </div>
              <div className="case-role-row">
                <span className="case-role-label">My Role</span>
                <span className="case-role-value">{project.role}</span>
              </div>
              <div className="tech-tags-row">
                {project.constraints.map((t, i) => <span key={i} className="case-chip">{t}</span>)}
              </div>
              <div className="tech-tags-row">
                {project.tags.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf', textDecoration: 'underline', fontWeight: 600, fontSize: '0.875rem', marginTop: 4 }}>
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
