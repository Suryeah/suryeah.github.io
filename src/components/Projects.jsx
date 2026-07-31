import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const PROJECTS = [
  {
    name: 'Atom M5 stack Star N/W DAQ',
    description: 'AD7771 data sampled at 8KSPS using Teensy 3.6 and transmitting wirelessly with ESP32 through TCP Socket',
    github: 'https://github.com/Suryeah/AD7771-Teensy3.6-ESP32-.git',
  },
  {
    name: 'ESP32 Based Remote DAQ',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ.git',
  },
  {
    name: 'nRF24L01 Multi Slave Communication',
    description: 'Master nRF to poll 4 slave nRF devices for transmitting sampled accelerometer value.',
    github: 'https://github.com/Suryeah/nRF24L01-1-4-Polling.git',
  },
  {
    name: 'RF433 Multi Slave communication',
    github: 'https://github.com/Suryeah/RF-433-Multi_Slave-.git',
  },
  {
    name: 'Generating 2.4GHz Carrier wave using nRF24L01',
    github: 'https://github.com/Suryeah/nRF24L01-Carrier-Wave-Generation.git',
  },
  {
    name: 'Bluepill CAN N/W with TJA1050',
    description: 'Controller: STM32F103C8T6 - BluePill',
    github: 'https://github.com/Suryeah/Bluepill-CAN-N-W-TJA1050',
  },
  {
    name: 'ESP32 Velocity Tracker',
    description: 'ESP32 based velocity measurement module using ADS1220 and ADXL355.',
    github: 'https://github.com/Suryeah/ESP32-Velocity-Tracker',
  },
  {
    name: 'ESP32-Based ADXL335 DAQ',
    description: 'ESP32 based ADXL335 data sampling at 1kSPS with remote TCP Socket transmission.',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ',
  },
  {
    name: 'N78E003 ADC OLED',
    description: 'Code contributions for Nuvoton N76E003 Microcontroller.',
    github: 'https://github.com/Suryeah/N78E003_ADC_OLED',
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
        <div className="products-list">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="product-card" style={{ background: theme === 'dark' ? '#23272f' : '#f1f5fd', borderRadius: 14, boxShadow: '0 2px 8px rgba(45,108,223,0.06)', padding: '1.5rem', color: theme === 'dark' ? '#fff' : '#222' }}>
              <h3 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6' }}>{project.name}</h3>
              {project.description && <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#444', marginBottom: 8 }}>{project.description}</div>}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: theme === 'dark' ? '#b3cdf6' : '#2d6cdf', textDecoration: 'underline', fontWeight: 500 }}>View on GitHub</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
