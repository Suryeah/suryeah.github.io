import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    icon: '💻',
    accent: '#2d6cdf',
    level: 'Advanced',
    context: ['Low-level', 'Performance-critical'],
    description: 'Programming & scripting languages',
    items: ['C', 'Embedded C', 'C++', 'Python', 'Shell Scripting', 'Assembly'],
  },
  {
    label: 'Protocols & Interfaces',
    icon: '📡',
    accent: '#0ea5e9',
    level: 'Advanced',
    context: ['Field communication', 'Telemetry'],
    description: 'Communication & bus protocols',
    items: ['I2C', 'SPI', 'UART', 'CAN / CAN-FD', 'OCPP', 'TCP/IP', 'Wireless (Wi-Fi / BLE)'],
  },
  {
    label: 'OS & RTOS',
    icon: '🐧',
    accent: '#16a34a',
    level: 'Advanced',
    context: ['Deterministic timing', 'Kernel-level work'],
    description: 'Operating systems & real-time kernels',
    items: ['Linux', 'Embedded Linux', 'Unix', 'FreeRTOS', 'RTOS', 'TI RTOS'],
  },
  {
    label: 'Microcontrollers (MCU)',
    icon: '🎛️',
    accent: '#7c3aed',
    level: 'Expert',
    context: ['Board bring-up', 'Peripheral control'],
    description: 'Bare-metal & RTOS targets',
    items: ['STM32 (M0+, M3, M4)', 'ESP32', 'ESP8266', '8051', 'ATMega328', 'Teensy (MK64, MK66, iMXRT1062)', 'Microchip PIC', 'ARM Cortex-M'],
  },
  {
    label: 'Microprocessors (MPU)',
    icon: '⚡',
    accent: '#db2777',
    level: 'Advanced',
    context: ['Embedded Linux', 'Application SoCs'],
    description: 'Application-class SoC platforms',
    items: ['ARM Cortex-A Series', 'TI AM263', 'TI AM64', 'TI AM68', 'TI AM69'],
  },
  {
    label: 'IDEs & Build Tools',
    icon: '🛠️',
    accent: '#d97706',
    level: 'Advanced',
    context: ['Toolchain setup', 'Debug workflows'],
    description: 'Development & compilation toolchains',
    items: ['STM32CubeIDE', 'Keil µVision', 'IAR Embedded Workbench', 'Code Composer Studio', 'ESP-IDF', 'Arduino IDE', 'VS Code', 'GNU Make', 'GCC', 'GDB', 'Proteus'],
  },
  {
    label: 'Domain Expertise',
    icon: '⚙️',
    accent: '#059669',
    level: 'Expert',
    context: ['Production systems', 'Reliability engineering'],
    description: 'Core engineering specialisations',
    items: ['Firmware Development', 'Device Drivers', 'Board Support Package (BSP)', 'Board Bring-up', 'Embedded Software', 'Low-Level Design', 'Motor Control', 'Digital Signal Processing', 'Product Development', '3D Printing (Autodesk Fusion 360)'],
  },
  {
    label: 'AI / ML & Edge Intelligence',
    icon: '🤖',
    accent: '#9333ea',
    level: 'Advanced',
    context: ['On-device inference', 'Signal analytics'],
    description: 'On-device inference & edge AI',
    items: ['TensorFlow Lite (TFLite)', 'TinyML', 'Edge AI', 'ONNX Runtime', 'OpenCV', 'Signal Classification', 'Anomaly Detection', 'NumPy / SciPy', 'Jupyter Notebooks', 'Model Quantization & Pruning'],
  },
  {
    label: 'Hardware & Debug Tools',
    icon: '🔬',
    accent: '#0891b2',
    level: 'Advanced',
    context: ['Lab validation', 'Fault isolation'],
    description: 'Lab instruments & debug probes',
    items: ['Oscilloscope', 'Logic Analyzer', 'JTAG / SWD Debugger', 'J-Link / ST-Link', 'Multimeter', 'Signal Generator', 'Power Analyzer', 'CAN Analyzer', 'Saleae Logic', 'Function Generator'],
  },
  {
    label: 'Version Control & Collaboration',
    icon: '🌿',
    accent: '#4f46e5',
    level: 'Advanced',
    context: ['Team delivery', 'Traceability'],
    description: 'Source control & project tracking',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'JIRA', 'Confluence', 'Code Review', 'CI/CD Pipelines'],
  },
  {
    label: 'Soft Skills',
    icon: '🤝',
    accent: '#ea580c',
    level: 'Advanced',
    context: ['Cross-functional leadership', 'Mentorship'],
    description: 'Leadership & collaboration',
    items: ['Leadership', 'Problem Solving', 'Teamwork', 'Public Speaking', 'Agile / Scrum', 'Technical Recruitment', 'Project Management'],
  },
];

const SkillTag = ({ label, accent, theme }) => (
  <span style={{
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
    background: theme === 'dark' ? `${accent}22` : `${accent}18`,
    color: theme === 'dark' ? '#e2e8f0' : accent,
    border: `1px solid ${accent}44`,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
  }}>
    {label}
  </span>
);

const SkillCard = ({ category, theme }) => (
  <div style={{
    background: theme === 'dark' ? '#1e2330' : '#f8faff',
    border: `1.5px solid ${category.accent}33`,
    borderRadius: 16,
    padding: '1.4rem 1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    boxShadow: theme === 'dark'
      ? `0 2px 16px rgba(0,0,0,0.3), inset 0 1px 0 ${category.accent}22`
      : `0 2px 16px rgba(45,108,223,0.07), inset 0 1px 0 ${category.accent}22`,
    transition: 'transform 0.18s, box-shadow 0.18s',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = theme === 'dark' ? `0 8px 28px rgba(0,0,0,0.4), inset 0 1px 0 ${category.accent}33` : `0 8px 28px ${category.accent}28, inset 0 1px 0 ${category.accent}33`; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = theme === 'dark' ? `0 2px 16px rgba(0,0,0,0.3), inset 0 1px 0 ${category.accent}22` : `0 2px 16px rgba(45,108,223,0.07), inset 0 1px 0 ${category.accent}22`; }}
  >
    {/* Card header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: `${category.accent}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, flexShrink: 0,
      }}>
        {category.icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, color: category.accent, lineHeight: 1.2 }}>{category.label}</div>
        <div style={{ fontSize: 12, color: theme === 'dark' ? '#94a3b8' : '#6b7280', marginTop: 1 }}>{category.description}</div>
      </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
      <span style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.4px',
        textTransform: 'uppercase',
        color: theme === 'dark' ? '#e2e8f0' : '#0f172a',
        background: theme === 'dark' ? 'rgba(148,163,184,0.2)' : 'rgba(148,163,184,0.18)',
        border: '1px solid rgba(148,163,184,0.35)',
        borderRadius: 999,
        padding: '2px 8px',
      }}>
        {category.level}
      </span>
      {category.context.map((item, idx) => (
        <span key={idx} style={{
          fontSize: 11,
          fontWeight: 600,
          color: theme === 'dark' ? '#cbd5e1' : '#334155',
          background: theme === 'dark' ? `${category.accent}20` : `${category.accent}14`,
          border: `1px solid ${category.accent}3a`,
          borderRadius: 999,
          padding: '2px 8px',
        }}>
          {item}
        </span>
      ))}
    </div>
    {/* Divider */}
    <div style={{ height: 1, background: `${category.accent}22` }} />
    {/* Tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
      {category.items.map((item, idx) => (
        <SkillTag key={idx} label={item} accent={category.accent} theme={theme} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();

  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="products-section"
      style={{
        background: theme === 'dark' ? '#23272f' : '#fff',
        color: theme === 'dark' ? '#fff' : '#222',
        width: '100vw',
        minHeight: '100vh',
        padding: 0,
        margin: 0,
      }}
    >
      <div className="container">
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', marginBottom: 6 }}>Skills</h2>
        <p style={{ color: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 15, marginBottom: 36, marginTop: 0 }}>
          Engineering capability matrix focused on real-time firmware, embedded platforms, and edge intelligence.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <SkillCard key={idx} category={cat} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
