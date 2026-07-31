import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PROJECTS = [
  {
    name: 'Atom M5 stack Star N/W DAQ',
    description: 'AD7771 data sampled at 8KSPS using Teensy 3.6 and transmitting wirelessly with ESP32 through TCP Socket',
    github: 'https://github.com/Suryeah/AD7771-Teensy3.6-ESP32-.git',
    tags: ['Teensy 3.6', 'ESP32', 'TCP Socket', 'AD7771', 'DAQ', '8KSPS'],
  },
  {
    name: 'ESP32 Based Remote DAQ',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ.git',
    tags: ['ESP32', 'ADXL335', 'DAQ', 'Wireless'],
  },
  {
    name: 'nRF24L01 Multi Slave Communication',
    description: 'Master nRF to poll 4 slave nRF devices for transmitting sampled accelerometer value.',
    github: 'https://github.com/Suryeah/nRF24L01-1-4-Polling.git',
    tags: ['nRF24L01', 'SPI', 'Polling', 'Accelerometer'],
  },
  {
    name: 'RF433 Multi Slave Communication',
    github: 'https://github.com/Suryeah/RF-433-Multi_Slave-.git',
    tags: ['RF433', 'Wireless', 'Multi-Slave'],
  },
  {
    name: 'Generating 2.4GHz Carrier Wave using nRF24L01',
    github: 'https://github.com/Suryeah/nRF24L01-Carrier-Wave-Generation.git',
    tags: ['nRF24L01', '2.4GHz', 'RF', 'Signal Gen'],
  },
  {
    name: 'Bluepill CAN N/W with TJA1050',
    description: 'Controller: STM32F103C8T6 - BluePill',
    github: 'https://github.com/Suryeah/Bluepill-CAN-N-W-TJA1050',
    tags: ['STM32F103', 'CAN Bus', 'TJA1050', 'Embedded C'],
  },
  {
    name: 'ESP32 Velocity Tracker',
    description: 'ESP32 based velocity measurement module using ADS1220 and ADXL355.',
    github: 'https://github.com/Suryeah/ESP32-Velocity-Tracker',
    tags: ['ESP32', 'ADS1220', 'ADXL355', 'Velocity', 'SPI'],
  },
  {
    name: 'ESP32-Based ADXL335 DAQ',
    description: 'ESP32 based ADXL335 data sampling at 1kSPS with remote TCP Socket transmission.',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ',
    tags: ['ESP32', 'ADXL335', '1kSPS', 'TCP/IP'],
  },
  {
    name: 'N78E003 ADC OLED',
    description: 'Code contributions for Nuvoton N76E003 Microcontroller.',
    github: 'https://github.com/Suryeah/N78E003_ADC_OLED',
    tags: ['Nuvoton', 'N76E003', 'ADC', 'OLED', 'I2C'],
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
          Open-source embedded systems projects — all on GitHub.
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
              {project.description && (
                <div style={{ fontSize: '0.9rem', color: theme === 'dark' ? '#94a3b8' : '#6b7280', lineHeight: 1.5 }}>{project.description}</div>
              )}
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
