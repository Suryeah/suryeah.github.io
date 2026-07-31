import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PROJECTS = [
  {
    name: 'Atom M5 stack Star N/W DAQ',
    challenge: 'Build reliable high-rate vibration acquisition with wireless backhaul for field deployment.',
    architecture: 'AD7771 front-end sampled at 8 KSPS on Teensy 3.6; ESP32 handles TCP telemetry.',
    outcome: 'Stable remote streaming pipeline for embedded DAQ with low packet loss in real-world trials.',
    role: 'Firmware + telemetry stack + integration validation',
    github: 'https://github.com/Suryeah/AD7771-Teensy3.6-ESP32-.git',
    tags: ['Teensy 3.6', 'ESP32', 'TCP Socket', 'AD7771', 'DAQ', '8KSPS'],
    constraints: ['Real-time sampling', 'Wireless reliability'],
  },
  {
    name: 'ESP32 Based Remote DAQ',
    challenge: 'Acquire and stream remote analog vibration signals over unstable wireless links.',
    architecture: 'ESP32 sampling + remote transmission path tuned for periodic sensor payloads.',
    outcome: 'Practical remote DAQ node for long-duration logging use cases.',
    role: 'Firmware architecture + data transport design',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ.git',
    tags: ['ESP32', 'ADXL335', 'DAQ', 'Wireless'],
    constraints: ['Power budget', 'Field noise'],
  },
  {
    name: 'nRF24L01 Multi Slave Communication',
    challenge: 'Coordinate deterministic polling across multiple wireless nodes without collisions.',
    architecture: 'Master nRF24L01 polls four slave nodes over structured SPI-managed radio sessions.',
    outcome: 'Repeatable multi-node polling cycle with predictable update cadence.',
    role: 'Protocol design + scheduler implementation',
    github: 'https://github.com/Suryeah/nRF24L01-1-4-Polling.git',
    tags: ['nRF24L01', 'SPI', 'Polling', 'Accelerometer'],
    constraints: ['Collision avoidance', 'Latency bounds'],
  },
  {
    name: 'RF433 Multi Slave Communication',
    challenge: 'Implement low-cost one-to-many wireless control with robust slave addressing.',
    architecture: 'RF433 master-slave command flow with packet-level addressing discipline.',
    outcome: 'Working multi-slave RF control prototype for low-bandwidth remote actuation.',
    role: 'Embedded comms logic + verification',
    github: 'https://github.com/Suryeah/RF-433-Multi_Slave-.git',
    tags: ['RF433', 'Wireless', 'Multi-Slave'],
    constraints: ['Interference-prone band', 'Limited payload size'],
  },
  {
    name: 'Generating 2.4GHz Carrier Wave using nRF24L01',
    challenge: 'Produce a stable RF carrier setup for lab-side RF experiments and validation.',
    architecture: 'nRF24L01 configuration path repurposed for repeatable 2.4 GHz carrier output.',
    outcome: 'Useful RF test utility for quick bench diagnostics and verification.',
    role: 'Register-level tuning + RF testing',
    github: 'https://github.com/Suryeah/nRF24L01-Carrier-Wave-Generation.git',
    tags: ['nRF24L01', '2.4GHz', 'RF', 'Signal Gen'],
    constraints: ['RF stability', 'Bench repeatability'],
  },
  {
    name: 'Bluepill CAN N/W with TJA1050',
    challenge: 'Bring up CAN communication quickly on low-cost STM32 hardware.',
    architecture: 'STM32F103 BluePill paired with TJA1050 transceiver; Embedded C CAN framing.',
    outcome: 'Functional CAN network node ready for larger distributed embedded systems.',
    role: 'Driver-level bring-up + bus validation',
    github: 'https://github.com/Suryeah/Bluepill-CAN-N-W-TJA1050',
    tags: ['STM32F103', 'CAN Bus', 'TJA1050', 'Embedded C'],
    constraints: ['Bus timing', 'Transceiver compatibility'],
  },
  {
    name: 'ESP32 Velocity Tracker',
    challenge: 'Estimate velocity from sensor streams with consistent embedded-side timing.',
    architecture: 'ESP32 firmware integrates ADS1220 and ADXL355 acquisition + processing chain.',
    outcome: 'Velocity module prototype with repeatable measurement behavior.',
    role: 'Firmware integration + signal path implementation',
    github: 'https://github.com/Suryeah/ESP32-Velocity-Tracker',
    tags: ['ESP32', 'ADS1220', 'ADXL355', 'Velocity', 'SPI'],
    constraints: ['Sensor synchronization', 'Noise handling'],
  },
  {
    name: 'ESP32-Based ADXL335 DAQ',
    challenge: 'Create a compact node for 1 kSPS analog motion acquisition and transport.',
    architecture: 'ESP32 sampling pipeline + TCP/IP transmission for remote DAQ access.',
    outcome: 'Remote motion-data pipeline validated for distributed sensing concepts.',
    role: 'Sampling pipeline + network transfer',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ',
    tags: ['ESP32', 'ADXL335', '1kSPS', 'TCP/IP'],
    constraints: ['Sample integrity', 'Throughput consistency'],
  },
  {
    name: 'N78E003 ADC OLED',
    challenge: 'Demonstrate compact ADC-to-display firmware flow on constrained MCU resources.',
    architecture: 'N76E003 ADC data acquisition with OLED display over lightweight interface stack.',
    outcome: 'Working reference implementation for constrained microcontroller UI telemetry.',
    role: 'Firmware contribution + hardware validation',
    github: 'https://github.com/Suryeah/N78E003_ADC_OLED',
    tags: ['Nuvoton', 'N76E003', 'ADC', 'OLED', 'I2C'],
    constraints: ['Memory limits', 'Peripheral timing'],
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
