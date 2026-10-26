import styles from './Skills.module.css';

const SKILL_GROUPS = [
  {
    label: 'MCUs / SoCs',
    hint: 'Silicon I have brought up and shipped on',
    accent: 'var(--skill-platforms)',
    items: ['TI AM263x', 'TI AM68 / AM69', 'TI AM64x (R5 + A53)', 'STM32', 'ESP32', 'Teensy 3.6', 'Nuvoton N76E003', 'ARM Cortex-M0'],
  },
  {
    label: 'RTOS / OS',
    hint: 'Kernels, drivers, and platform bring-up',
    accent: 'var(--skill-os)',
    items: ['Embedded Linux', 'FreeRTOS', 'TI-RTOS', 'Device Drivers', 'Device Tree', 'BSP', 'Board Bring-up', 'DBus IPC'],
  },
  {
    label: 'Languages',
    hint: 'Day-to-day implementation',
    accent: 'var(--skill-firmware)',
    items: ['C', 'Embedded C', 'MISRA C', 'C++', 'Python', 'Shell Scripting'],
  },
  {
    label: 'Protocols',
    hint: 'Wired buses and wireless links',
    accent: 'var(--skill-protocols)',
    items: ['CAN', 'SPI', 'I2C', 'UART', 'RS-232', 'UDS', 'TCP/IP', 'BLE', 'RF433', 'nRF24L01 (2.4 GHz)'],
  },
  {
    label: 'Debug & Tools',
    hint: 'Toolchains and lab instruments',
    accent: 'var(--skill-validation)',
    items: ['GDB', 'JTAG / SWD', 'Oscilloscope', 'Logic Analyzer', 'IAR', 'STM32CubeIDE', 'Code Composer Studio', 'LabVIEW'],
  },
  {
    label: 'Test / Validation',
    hint: 'How I prove it works',
    accent: 'var(--skill-domains)',
    items: ['pytest', 'Unit Testing', 'Linux Test Farm', 'HW/SW Integration Testing', 'Root Cause Analysis'],
  },
];

const Skills = () => (
  <section id="skills" className="section section-tint" aria-labelledby="skills-title">
    <div className="section-inner">
      <p className="section-eyebrow">Skills matrix</p>
      <h2 id="skills-title" className="section-title">Skills</h2>
      <p className="section-lead">
        The silicon, software, and tooling behind the products and projects above.
      </p>
      <ul className={styles.grid}>
        {SKILL_GROUPS.map((group) => (
          <li key={group.label} className={`${styles.group} spotlight`} style={{ '--accent': group.accent }}>
            <div>
              <h3 className={styles.label}>{group.label}</h3>
              <p className={styles.hint}>{group.hint}</p>
            </div>
            <ul className={styles.items}>
              {group.items.map((item) => <li key={item} className={styles.item}>{item}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;

