import React, { useEffect, useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    label: 'Firmware & Languages',
    icon: '💻',
    accent: 'var(--skill-firmware)',
    description: 'Embedded application development',
    items: ['C', 'Embedded C', 'C++', 'Python', 'Shell Scripting'],
  },
  {
    label: 'Embedded OS & Runtime',
    icon: '🐧',
    accent: 'var(--skill-os)',
    description: 'Operating systems and IPC',
    items: ['Embedded Linux', 'Linux', 'FreeRTOS', 'TI-RTOS', 'RTOS', 'DBus'],
  },
  {
    label: 'Platforms & Low-Level Integration',
    icon: '🎛️',
    accent: 'var(--skill-platforms)',
    description: 'MCUs, SoCs, drivers, and board bring-up',
    items: ['TI AM263x', 'TI AM68 / AM69', 'STM32', 'ESP32', 'Teensy 3.6', 'Device Drivers', 'Device Tree', 'BSP', 'Board Bring-up'],
  },
  {
    label: 'Interfaces & Protocols',
    icon: '📡',
    accent: 'var(--skill-protocols)',
    description: 'Wired buses and wireless links',
    items: ['I2C', 'SPI', 'UART', 'CAN', 'TCP/IP', 'RF433', 'nRF24L01'],
  },
  {
    label: 'Validation & Debugging',
    icon: '🔬',
    accent: 'var(--skill-validation)',
    description: 'Test workflows, toolchains, and lab debug',
    items: ['pytest', 'Linux Test Farm', 'GDB', 'JTAG / SWD', 'Oscilloscope', 'Logic Analyzer', 'IAR', 'STM32CubeIDE', 'Code Composer Studio'],
  },
  {
    label: 'Application Areas',
    icon: '⚙️',
    accent: 'var(--skill-domains)',
    description: 'Industries and systems represented in my work',
    items: ['EV Charging', 'Battery Monitoring', 'Data Acquisition', 'Vibration Sensing', 'RF Systems', 'Structural Health Monitoring'],
  },
];

const SkillTag = ({ label, accent }) => (
  <span style={{
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
    background: `color-mix(in srgb, ${accent} 12%, transparent)`,
    color: accent,
    border: `1px solid color-mix(in srgb, ${accent} 28%, transparent)`,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
  }}>
    {label}
  </span>
);

const SkillCard = ({ category }) => {
  const accent = category.accent;
  return (
  <div className="skill-card" style={{
    '--skill-accent': accent,
    background: 'var(--surface)',
    border: `1px solid color-mix(in srgb, ${accent} 24%, var(--border))`,
    borderRadius: 16,
    padding: '1.4rem 1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    boxShadow: 'var(--shadow-sm)',
  }}
  >
    {/* Card header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: `color-mix(in srgb, ${accent} 10%, transparent)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, flexShrink: 0,
      }}>
        {category.icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, color: accent, lineHeight: 1.2 }}>{category.label}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{category.description}</div>
      </div>
    </div>
    {/* Divider */}
    <div style={{ height: 1, background: `${category.accent}22` }} />
    {/* Tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
      {category.items.map((item, idx) => (
        <SkillTag key={idx} label={item} accent={accent} />
      ))}
    </div>
  </div>
  );
};

const Skills = () => {
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
        background: 'var(--surface)',
        color: 'var(--text)',
        width: '100vw',
        minHeight: '100vh',
        padding: 0,
        margin: 0,
      }}
    >
      <div className="container">
        <h2 style={{ color: 'var(--text)', marginBottom: 6 }}>Skills</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 36, marginTop: 0 }}>
          Core technologies and application areas reflected in my embedded engineering work.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <SkillCard key={idx} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
