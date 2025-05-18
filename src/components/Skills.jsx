import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeContext.jsx';

const SKILLS = [
  // Languages
  { name: 'C', icon: '💻', category: 'Language' },
  { name: 'C++', icon: '💻', category: 'Language' },
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'Shell Scripting', icon: '💻', category: 'Language' },
  // OS/Environment
  { name: 'Linux', icon: '🐧', category: 'Environment/OS' },
  { name: 'Unix', icon: '🐧', category: 'Environment/OS' },
  { name: 'Embedded Linux', icon: '🐧', category: 'Environment/OS' },
  { name: 'FreeRTOS', icon: '🕒', category: 'Environment/OS' },
  { name: 'RTOS', icon: '🕒', category: 'Environment/OS' },
  // MCU/MPU
  { name: 'Microcontrollers', icon: '🔌', category: 'MCU/MPU' },
  { name: '8051 Microcontroller', icon: '🔌', category: 'MCU/MPU' },
  { name: 'ARM Cortex-M', icon: '🔌', category: 'MCU/MPU' },
  { name: 'STM32', icon: '🔌', category: 'MCU/MPU' },
  { name: 'ESP32', icon: '🔌', category: 'MCU/MPU' },
  { name: 'ESP8266', icon: '🔌', category: 'MCU/MPU' },
  { name: 'Microchip PIC', icon: '🔌', category: 'MCU/MPU' },
  // Protocols & Interfaces
  { name: 'I2C', icon: '🔗', category: 'Protocol' },
  { name: 'SPI', icon: '🔗', category: 'Protocol' },
  { name: 'UART', icon: '🔗', category: 'Protocol' },
  { name: 'CAN', icon: '🔗', category: 'Protocol' },
  // Tools
  { name: 'GNU Make', icon: '🛠️', category: 'Tool' },
  { name: 'GNU Debugger', icon: '🛠️', category: 'Tool' },
  { name: 'GNU Compiler Collection (GCC)', icon: '🛠️', category: 'Tool' },
  { name: 'Code Composer Studio', icon: '🛠️', category: 'Tool' },
  { name: 'LabVIEW', icon: '🛠️', category: 'Tool' },
  { name: 'Autodesk Fusion 360', icon: '🖥️', category: 'Tool' },
  // Engineering/Domain
  { name: 'Embedded Systems', icon: '🛠️', category: 'Domain' },
  { name: 'Embedded Software', icon: '🛠️', category: 'Domain' },
  { name: 'Firmware', icon: '🛠️', category: 'Domain' },
  { name: 'Board Support Package (BSP)', icon: '🛠️', category: 'Domain' },
  { name: 'Device Drivers', icon: '🛠️', category: 'Domain' },
  { name: 'Board Bring-up', icon: '🛠️', category: 'Domain' },
  { name: 'Product Development', icon: '🛠️', category: 'Domain' },
  { name: 'Low-Level Design', icon: '🛠️', category: 'Domain' },
  { name: 'Motor Control', icon: '⚡', category: 'Domain' },
  { name: 'Digital Signal Processing', icon: '🎵', category: 'Domain' },
  { name: '3D Printing', icon: '🖨️', category: 'Domain' },
  // Soft Skills
  { name: 'Problem Solving', icon: '🧠', category: 'Soft Skill' },
  { name: 'Teamwork', icon: '🤝', category: 'Soft Skill' },
  { name: 'Leadership', icon: '🧑‍💼', category: 'Soft Skill' },
  { name: 'Public Speaking', icon: '🗣️', category: 'Soft Skill' },
  { name: 'Agile Project Management', icon: '📈', category: 'Soft Skill' },
  { name: 'Scrum', icon: '📈', category: 'Soft Skill' },
  { name: 'Agile Methodologies', icon: '📈', category: 'Soft Skill' },
  // Other
  { name: 'English', icon: '🇬🇧', category: 'Other' },
];

const CODING_LANGUAGES = [
  'C', 'C++', 'Python', 'Shell Scripting', 'Embedded C', 'Assembly', 'Programming', 'LabVIEW', 'Software Design', 'Low-Level Design', 'Firmware', 'Embedded Software', 'Device Drivers', 'Board Support Package (BSP)', 'Board Bring-up', 'GNU Make', 'GNU Debugger', 'GNU Compiler Collection (GCC)'
];
const PROTOCOLS = [
  'I2C', 'SPI', 'UART', 'CAN', 'OCPP', 'Wireless Communications', 'Controller Area Network (CAN)', 'Service Provider Interface (SPI)', 'Universal Asynchronous Receiver/Transmitter (UART)'
];
const ENVIRONMENTS = [
  'Linux', 'RTOS', 'FreeRTOS', 'TI RTOS'
];
const IDES = [
  'VS Code', 'Arduino IDE', 'Keil', 'Proteus', 'STM32CubeIDE', 'Code Composer Studio', 'IAR IDE', 'ESP-IDF'
];
const MCUS = [
  'STM32 (M0+, M3, M4)', 'ESP32', 'ESP8266', '8051', 'ATMega328', 'Teensy (MK64, MK66, iMXRT1062)', 'Microchip PIC'
];
const MPUS = [
  'ARM Cortex-A Series', 'AM263', 'AM68', 'AM69'
];

const SkillCircle = ({ label, items, icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="skill-circle"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 140,
        height: 140,
        borderRadius: '50%',
        background: '#e0e7ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(45,108,223,0.08)',
        margin: 16,
        position: 'relative',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 18, color: '#174ea6' }}>{label}</div>
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            color: '#174ea6',
            borderRadius: 12,
            boxShadow: '0 2px 12px rgba(45,108,223,0.13)',
            padding: '1rem 1.5rem',
            marginTop: 12,
            zIndex: 10,
            minWidth: 180,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 500,
            animation: 'fadeInUp 0.3s',
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} style={{ margin: '0.2rem 0' }}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} id="skills" className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container">
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
          <SkillCircle label="Coding" items={CODING_LANGUAGES} icon="💻" />
          <SkillCircle label="Protocol" items={PROTOCOLS} icon="🔗" />
          <SkillCircle label="Environment" items={ENVIRONMENTS} icon="🌐" />
          <SkillCircle label="IDE" items={IDES} icon="🖥️" />
          <SkillCircle label="MCU" items={MCUS} icon="🔌" />
          <SkillCircle label="MPU" items={MPUS} icon="🧠" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
