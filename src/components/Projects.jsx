import MaybePlaceholder from './MaybePlaceholder.jsx';
import styles from './Projects.module.css';

const FEATURED = [
  'TI AM64x Inter-core IPC for ADC Data Transfer',
  'AD7771 Wireless DAQ',
  'Bluepill CAN N/W with TJA1050',
  'STM32 HMI-Controlled MAX2871 Synthesizer',
  'EV Battery SoC Companion',
  'ESP32 Velocity Tracker',
];

const METRIC_PLACEHOLDER = '[METRIC: quantify the result, e.g. throughput, latency, error rate]';

const PROJECTS = [
  {
    name: 'TI AM64x Inter-core IPC for ADC Data Transfer',
    challenge: 'Move ADC data reliably between R5 and A53 cores on a TI AM64x platform.',
    architecture: 'Inter-core IPC path connecting R5 and A53 with an ADC data handoff.',
    outcome: 'Built an inter-core communication path for ADC data transfer.',
    role: 'IPC bring-up and validation',
    tags: ['TI AM64x', 'R5', 'A53', 'IPC', 'ADC'],
    constraints: ['Cross-core messaging', 'Data integrity'],
  },
  {
    name: 'AD7771 Wireless DAQ',
    challenge: 'Build reliable high-rate vibration acquisition with wireless backhaul for field deployment.',
    architecture: 'AD7771 front-end sampled at 8 KSPS on Teensy 3.6; ESP32 handles TCP telemetry.',
    outcome: 'Validated the acquisition-to-TCP streaming path in real-world trials.',
    role: 'Firmware + telemetry stack + integration validation',
    github: 'https://github.com/Suryeah/AD7771-Teensy3.6-ESP32-.git',
    tags: ['Teensy 3.6', 'ESP32', 'TCP Socket', 'AD7771', 'DAQ', '8KSPS'],
    constraints: ['Real-time sampling', 'Wireless reliability'],
  },
  {
    name: 'EV Battery SoC Companion',
    challenge: 'Make a vehicle battery state-of-charge reading easy to check from a mobile app and widgets.',
    architecture: 'SwiftUI app uses CoreBluetooth to query Tata Nexon EV SoC over UDS, persists the latest reading, and provides WidgetKit and watchOS targets.',
    outcome: 'Implements BLE scanning, reconnect handling, and periodic SoC polling.',
    role: 'iOS app and BLE/UDS integration',
    github: 'https://github.com/Suryeah/CarStatsWidget',
    tags: ['SwiftUI', 'CoreBluetooth', 'UDS', 'WidgetKit', 'watchOS'],
    constraints: ['BLE connectivity', 'Background refresh'],
  },
  {
    name: 'ESP32 Remote Vibration DAQ',
    challenge: 'Acquire and stream remote analog vibration signals over unstable wireless links.',
    architecture: 'ESP32 sampling + remote transmission path tuned for periodic sensor payloads.',
    outcome: 'Built an ESP32 vibration node for long-duration remote acquisition and logging.',
    role: 'Firmware architecture + data transport design',
    github: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ.git',
    tags: ['ESP32', 'ADXL335', 'DAQ', 'Wireless'],
    constraints: ['Power budget', 'Field noise'],
  },
  {
    name: 'nRF24L01 Four-Node Polling Network',
    challenge: 'Coordinate deterministic polling across multiple wireless nodes without collisions.',
    architecture: 'Master nRF24L01 polls four slave nodes over structured SPI-managed radio sessions.',
    outcome: 'Implemented a repeatable polling cycle across four slave nodes.',
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
    name: 'Nuvoton ADC/OLED Firmware',
    challenge: 'Demonstrate compact ADC-to-display firmware flow on constrained MCU resources.',
    architecture: 'N76E003 ADC data acquisition with OLED display over lightweight interface stack.',
    outcome: 'Working reference implementation for constrained microcontroller UI telemetry.',
    role: 'Firmware contribution + hardware validation',
    github: 'https://github.com/Suryeah/N78E003_ADC_OLED',
    tags: ['Nuvoton', 'N76E003', 'ADC', 'OLED', 'I2C'],
    constraints: ['Memory limits', 'Peripheral timing'],
  },
  {
    name: 'Naive Bayes Estimator on ARM Cortex-M0',
    challenge: 'Implement a compact classifier on a resource-constrained microcontroller.',
    architecture: 'Bare-metal C implementation targeting an ARM Cortex-M0.',
    outcome: 'Built a lightweight classifier prototype for a constrained MCU.',
    role: 'Classifier implementation and MCU integration',
    tags: ['ARM Cortex-M0', 'Bare-Metal C', 'Naive Bayes'],
    constraints: ['Code size', 'Compute limits'],
  },
  {
    name: 'TCP Graph Plotter',
    challenge: 'Visualize incoming sensor data over a TCP stream.',
    architecture: 'TCP data receiver paired with a live plotting workflow.',
    outcome: 'Built a plotting tool for streamed measurement data.',
    role: 'Data streaming and visualization',
    tags: ['TCP', 'Data Visualization', 'Plotting'],
    constraints: ['Update latency', 'Stream handling'],
  },
  {
    name: 'High-Speed Data Transfer over TCP on ESP32',
    challenge: 'Transfer high-rate data reliably over TCP on an ESP32.',
    architecture: 'ESP32 network transport tuned for high-throughput data transfer.',
    outcome: 'Built and validated a high-speed embedded TCP transfer path.',
    role: 'Transport optimization and validation',
    tags: ['ESP32', 'TCP', 'Data Transfer'],
    constraints: ['Throughput', 'Network stability'],
  },
  {
    name: 'STM32 Human-Machine Interface',
    challenge: 'Create an embedded user interface on STM32 hardware.',
    architecture: 'STM32 firmware handling display output and user input.',
    outcome: 'Built an MCU-based human-machine interface.',
    role: 'UI firmware and hardware integration',
    tags: ['STM32', 'HMI', 'Embedded UI'],
    constraints: ['Display timing', 'User interaction'],
  },
  {
    name: 'STM32 HMI-Controlled MAX2871 Synthesizer',
    challenge: 'Provide operator control of an RF synthesizer through a panel HMI.',
    architecture: 'STM32F103 communicates with a Pro-face HMI over UART/RS-232 and configures the MAX2871 over SPI.',
    outcome: 'Integrated HMI command framing, MCU control, and RF synthesizer configuration.',
    role: 'HMI protocol and embedded driver integration',
    github: 'https://github.com/Suryeah/HMI-with-Bluepill-for-MAX2871',
    tags: ['STM32F103', 'MAX2871', 'UART', 'RS-232', 'SPI'],
    constraints: ['Serial protocol', 'RF configuration'],
  },
  {
    name: 'Standalone RF Synthesizer',
    github: 'https://github.com/Suryeah/Stand-Alone_RF_Synthesizer_With_OLED_and_Keypad',
    tags: ['RF Synthesis', 'STM32', 'OLED', 'Keypad'],
  },
];

const featured = FEATURED.map((name) => PROJECTS.find((p) => p.name === name));
const more = PROJECTS.filter((p) => !FEATURED.includes(p.name));

const Projects = () => (
  <section id="projects" className="section section-alt" aria-labelledby="projects-title">
    <div className="section-inner">
      <p className="section-eyebrow">Case studies</p>
      <h2 id="projects-title" className="section-title">Projects</h2>
      <p className="section-lead">
        Embedded systems I built or contributed to, from the problem through the measurable result.
      </p>
      <ul className={styles.grid}>
        {featured.map((project) => (
          <li key={project.name} className={`${styles.card} spotlight`}>
            <h3 className={styles.name}>{project.name}</h3>
            <dl className={styles.steps}>
              <div>
                <dt>Problem</dt>
                <dd>{project.challenge}</dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>
                  <span className={styles.role}>{project.role}</span>
                  {project.architecture}
                </dd>
              </div>
              <div>
                <dt>Tech stack</dt>
                <dd>
                  <ul className={styles.tags}>
                    {project.tags.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                </dd>
              </div>
              <div>
                <dt>Measurable result</dt>
                <dd>
                  {project.outcome}{' '}
                  <MaybePlaceholder>{project.metric ?? METRIC_PLACEHOLDER}</MaybePlaceholder>
                </dd>
              </div>
            </dl>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View on GitHub<span className="sr-only"> (opens in new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <h3 className={styles.moreTitle}>More projects</h3>
      <ul className={styles.moreList}>
        {more.map((project) => (
          <li key={project.name}>
            {project.github ? (
              <a className={styles.moreItem} href={project.github} target="_blank" rel="noopener noreferrer">
                <span>{project.name}</span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <span className={styles.moreItem}>{project.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
