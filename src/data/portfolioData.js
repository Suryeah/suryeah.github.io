// Single source of truth for portfolio content. See ./README.md before editing.

export const profile = {
  name: 'Surya Vardhan',
  email: 'surya_24@live.com',
  phone: '+918870858022',
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Surya_Vardhan_Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/surya1412',
    github: 'https://github.com/Suryeah',
    orcid: 'https://orcid.org/0009-0005-2841-869X',
  },
};

export const hero = {
  status: 'Currently at Bosch Global Software Technologies',
  headline: 'Senior Embedded Firmware Engineer',
  focus: 'Embedded Linux · SoC Drivers · IPC · Hardware/Software Integration',
  summary:
    'Developing reliable embedded software across MCU and SoC platforms, from board bring-up and device-driver integration to inter-core communication, automated testing, and product release.',
  coreStack: ['Embedded C', 'Embedded Linux', 'FreeRTOS / Micrium', 'STM32', 'TI AM263x · AM68 · AM69', 'CAN · SPI · I2C · UART'],
  stats: [
    { value: '7+', label: 'Years in embedded engineering' },
    { value: '1', label: 'Patent application' },
  ],
  availability: 'Open to relocation · Willing to work globally',
};

// Products and solutions I contributed to. Do not add a release status unless it can be evidenced.
export const products = [
  {
    name: 'Real-Time Acceleration Plotter',
    model: 'RTAP-335',
    description: 'Real-time acceleration acquisition and plotting for motion-data visualisation.',
    role: 'Product firmware and validation support',
    technologies: ['Embedded Firmware', 'Data Acquisition', 'Test Instrumentation'],
  },
  {
    name: 'Earthquake Detector',
    model: 'EMD-1202',
    description: 'Embedded earthquake detection product.',
    role: 'Firmware development and productisation support',
    technologies: ['Embedded Firmware', 'Seismic Sensing'],
  },
  {
    name: 'Portable Seismic DAQ',
    model: 'PS-DAQ',
    description: 'Portable seismic data acquisition with embedded sampling, logging, and data transfer.',
    role: 'Acquisition firmware and systems integration',
    technologies: ['Seismic', 'DAQ', 'Signal Processing'],
  },
  {
    name: 'SHM Solutions',
    description: 'Sensing, telemetry, and firmware for structural health monitoring.',
    role: 'Embedded solution engineering',
    technologies: ['Structural Health Monitoring', 'IoT Sensing'],
  },
  {
    name: 'Remote Tree Climber',
    description: 'RF433 remote-control prototype with embedded motor actuation.',
    role: 'Control logic and integration testing',
    technologies: ['RF433', 'Control Systems', 'Embedded C'],
  },
  {
    name: 'Devantech ETH008-B Driver',
    description: 'Driver integration for the Ethernet-controlled ETH008-B relay module.',
    role: 'Driver integration',
    technologies: ['Ethernet', 'Relay Control'],
  },
];

// Featured case studies. Every field except name/problem/contribution/technologies is optional.
export const featuredProjects = [
  {
    name: 'TI AM64x Inter-core IPC for ADC Data',
    problem: 'Move ADC data captured on the real-time R5 core to the A53 application core of a TI AM64x processor.',
    contribution: 'IPC bring-up and validation',
    implementation: 'Inter-processor communication path from the R5 core to the A53 core carrying ADC data.',
    technologies: ['TI AM64x', 'Cortex-R5', 'Cortex-A53', 'IPC', 'ADC'],
    outcome: 'Working R5-to-A53 transfer path for ADC data.',
    sourceNote: 'Source code is not publicly available.',
  },
  {
    name: 'AD7771 Wireless DAQ',
    problem: 'Acquire multi-channel ADC data at a fixed rate and deliver it to a remote host without a wired link.',
    contribution: 'Acquisition and wireless transmission firmware',
    implementation: 'A Teensy 3.6 samples the AD7771 ADC; an ESP32 transmits the data wirelessly to a TCP socket.',
    technologies: ['AD7771', 'Teensy 3.6', 'ESP32', 'TCP socket'],
    outcome: 'Documented acquisition rate of 8 kSPS with wireless delivery to a TCP socket.',
    githubUrl: 'https://github.com/Suryeah/AD7771-Teensy3.6-ESP32-',
  },
  {
    name: 'BluePill CAN Network with TJA1050',
    problem: 'Establish CAN communication between low-cost STM32 nodes.',
    contribution: 'Transmit/receive firmware, schematic, and bus verification',
    implementation: 'STM32F103C8T6 (BluePill) nodes with TJA1050 CAN transceivers; separate transmit and receive firmware projects and a published schematic.',
    technologies: ['STM32F103', 'CAN', 'TJA1050', 'Embedded C'],
    outcome: 'Communication tested at different operating voltage levels without errors and verified on an oscilloscope.',
    githubUrl: 'https://github.com/Suryeah/Bluepill-CAN-N-W-TJA1050',
  },
  {
    name: 'HMI-Controlled MAX2871 RF Synthesizer',
    problem: 'Let an operator control RF synthesizer output from a panel HMI.',
    contribution: 'HMI link and synthesizer driver integration',
    implementation: 'The HMI talks to an STM32F103 (BluePill) over UART/RS-232; the MCU configures the MAX2871 over SPI.',
    technologies: ['STM32F103', 'MAX2871', 'UART', 'RS-232', 'SPI'],
    outcome: 'End-to-end control path from HMI command to RF synthesizer configuration.',
    githubUrl: 'https://github.com/Suryeah/HMI-with-Bluepill-for-MAX2871',
  },
  {
    name: 'EV Battery SoC Widget (CarStatsWidget)',
    problem: 'Read an electric vehicle’s high-voltage battery state of charge and show it on a phone widget.',
    contribution: 'iOS app, BLE OBD-II adapter link, and UDS decoding',
    implementation:
      'CoreBluetooth connects to an ELM327-style BLE OBD-II adapter, sends a UDS ReadDataByIdentifier request (DID 0x3421), reassembles chunked notifications until the ELM327 prompt, and decodes the SoC. Includes periodic polling, automatic reconnection, widget, and Apple Watch targets.',
    technologies: ['Swift', 'CoreBluetooth', 'UDS', 'ELM327 / OBD-II', 'WidgetKit', 'watchOS'],
    outcome: 'SoC decoding is implemented for the Tata Nexon EV data identifier.',
    githubUrl: 'https://github.com/Suryeah/CarStatsWidget',
  },
  {
    name: 'ESP32 Velocity Tracker',
    problem: 'Detect vibration events from acceleration data and report their frequency content remotely.',
    contribution: 'Acquisition, signal-processing, and reporting firmware',
    implementation:
      'An ADS1220 acquires ADXL355 acceleration data; the ESP32 filters and integrates it to velocity and compares it with a user-defined threshold. On a crossing, it runs an FFT over one second before and after the event.',
    technologies: ['ESP32', 'ADS1220', 'ADXL355', 'FFT', 'TCP socket'],
    outcome: 'Event frequency and magnitude are sent to a remote device over a TCP socket.',
    githubUrl: 'https://github.com/Suryeah/ESP32-Velocity-Tracker',
  },
];

// Compact list. Descriptions are taken from each repository's own description.
export const moreProjects = [
  { name: 'ESP32 ADXL335 DAQ', description: 'ADXL335 sampled at 1 kSPS with simultaneous TCP socket transmission.', githubUrl: 'https://github.com/Suryeah/ESP32-Based-ADXL335-DAQ' },
  { name: 'High-Speed Data Transfer over TCP on ESP32' },
  { name: 'ESP32 Earthquake Detector', description: 'ESP32-based earthquake detector.', githubUrl: 'https://github.com/Suryeah/Earthquake_Detector' },
  { name: 'RF Synthesizer (AD9951)', description: '1–500 MHz RF synthesizer using an AD9951 and STM32F103.', githubUrl: 'https://github.com/Suryeah/RF-synthesizer' },
  { name: 'Stand-alone RF Synthesizer', description: 'AD9951 controlled by an STM32F103 with a 128×64 OLED and 4×4 keypad.', githubUrl: 'https://github.com/Suryeah/Stand-Alone_RF_Synthesizer_With_OLED_and_Keypad' },
  { name: 'HMI with STM32F103', description: 'Asynchronous serial link between a Pro-face 4100 HMI and an STM32F103 over RJ45.', githubUrl: 'https://github.com/Suryeah/HMI-with-STM32F103' },
  { name: 'Naive Bayes Estimator on Cortex-M0+', description: 'Naive Bayes estimator on an STM32L053R8 fed new values every 10 ms via HAL_RNG.', githubUrl: 'https://github.com/Suryeah/Arm-Cortex-M0-with-Naive-Bayes-' },
  { name: 'nRF24L01 1-to-4 Polling', description: 'nRF24L01 work with and without a power amplifier.', githubUrl: 'https://github.com/Suryeah/nRF24L01-1-4-Polling' },
  { name: 'nRF24L01 Carrier Wave Generation', description: 'Carrier-wave generation with the nRF24L01.', githubUrl: 'https://github.com/Suryeah/nRF24L01-Carrier-Wave-Generation' },
  { name: 'nRF24L01 Array Transmission', description: 'Array data transmission between a server and a client.', githubUrl: 'https://github.com/Suryeah/nRF24L01_Array-tansmission-' },
  { name: 'RF433 Multi-Slave Communication', description: 'Multi-slave communication over RF433.', githubUrl: 'https://github.com/Suryeah/RF-433-Multi_Slave-' },
  { name: 'RF433 Remote Control', description: 'Remote control of five relays and a servo, used to control a single-stroke petrol engine.', githubUrl: 'https://github.com/Suryeah/RF433-Remote-Control-' },
  { name: 'M5Stack Atom Wi-Fi Network', description: 'One Atom module collects data from four Atom slave modules over Wi-Fi.', githubUrl: 'https://github.com/Suryeah/M5-Stack-Atom-Wi-Fi-Comunication-' },
  { name: 'Nuvoton N76E003 ADC / OLED', description: 'Firmware for the Nuvoton N76E003 microcontroller.', githubUrl: 'https://github.com/Suryeah/N78E003_ADC_OLED' },
  { name: '32-bit Data over USART (Arduino → STM32)', description: 'Sends 32-bit register values from an Arduino to an STM32 over USART.', githubUrl: 'https://github.com/Suryeah/32Bit-Data-Transmission-Btwn-Arduino---STM32' },
  { name: 'Python TCP Graph Plotter', description: 'Receives data over a TCP socket and plots it.', githubUrl: 'https://github.com/Suryeah/Python-based-TCP-graph-Plotter-' },
];

// status: 'submitted' | 'merged' | 'closed'. Only use 'merged' after confirming on GitHub.
export const openSource = [
  {
    project: 'Home Assistant frontend',
    title: 'Address / place search for the location selector',
    status: 'submitted',
    url: 'https://github.com/home-assistant/frontend/pull/54351',
    relatedIssueUrl: 'https://github.com/home-assistant/frontend/issues/15699',
    problem:
      'In the Zone Editor, a zone could only be positioned by dragging the map or typing latitude and longitude.',
    proposal: [
      'Adds an address/place search field above the existing map, reusing the frontend’s existing OpenStreetMap search.',
      'Selecting a result updates the coordinates and moves the marker on the map.',
      'Existing map editing and radius configuration are unchanged; no Zone data-model or backend changes.',
    ],
    considerations:
      'The change applies to the shared location selector, so review is weighing OpenStreetMap Nominatim usage limits alongside keyboard-accessibility feedback.',
    technologies: ['TypeScript', 'Lit', 'Home Assistant', 'OpenStreetMap'],
  },
];

export const skillGroups = [
  {
    label: 'CPU Architectures',
    hint: 'Cores I have developed for',
    accent: 'var(--brand)',
    wide: true,
    items: [
      'Arm Cortex-M0+ (STM32G0B1, STM32L053)',
      'Arm Cortex-M3 (STM32F103)',
      'Arm Cortex-M4',
      'Arm Cortex-M7',
      'Arm Cortex-R5F (AM263x)',
      'Arm Cortex-R5 + A53 (AM64x)',
      'Xtensa (ESP32)',
      '8051 (N76E003)',
    ],
  },
  {
    label: 'MCUs / SoCs',
    hint: 'Platforms from professional and project work',
    accent: 'var(--skill-platforms)',
    items: ['STM32 (G0, F1, L0 families)', 'ESP32 / ESP8266', 'TI AM263x', 'TI AM68 / AM69', 'TI AM64x', 'Teensy 3.6', 'Nuvoton N76E003'],
  },
  {
    label: 'RTOS / OS',
    hint: 'Kernels, drivers, and platform bring-up',
    accent: 'var(--skill-os)',
    items: ['FreeRTOS', 'Micrium RTOS', 'TI-RTOS', 'Embedded Linux', 'Device Drivers', 'Board Bring-up', 'BSP', 'Device Tree (basic)', 'DMA & Interrupts', 'Multithreading', 'IPC (DBus)'],
  },
  {
    label: 'Languages',
    hint: 'Day-to-day implementation',
    accent: 'var(--skill-firmware)',
    items: ['Embedded C (advanced)', 'MISRA C', 'C++ (basic)', 'Python', 'Shell Scripting'],
  },
  {
    label: 'Protocols',
    hint: 'Wired buses and wireless links',
    accent: 'var(--skill-protocols)',
    items: ['SPI', 'I2C', 'UART / USART', 'CAN', 'RS-232', 'TCP/IP (basic)', 'UDS', 'BLE', 'RF433', 'nRF24L01'],
  },
  {
    label: 'Debug & Tools',
    hint: 'Toolchains and lab instruments',
    accent: 'var(--skill-validation)',
    items: ['JTAG / SWD', 'GDB', 'TRACE32 (basic)', 'Oscilloscope', 'Logic Analyzer', 'CANoe / CANalyzer', 'STM32CubeIDE', 'IAR', 'Keil', 'Code Composer Studio', 'ESP-IDF', 'LabVIEW', 'Git', 'Jira'],
  },
  {
    label: 'Test / Validation',
    hint: 'How I prove it works',
    accent: 'var(--skill-domains)',
    items: ['pytest', 'Unit Testing', 'Static Analysis', 'Linux Test Farm', 'HW/SW Integration Testing', 'Root Cause Analysis'],
  },
];

// `logo` is a key into the logo map in ExperiencePage.jsx.
export const experience = [
  {
    company: 'Bosch Global Software Technologies',
    title: 'Senior Engineer',
    period: 'Dec 2023 – Present',
    location: 'Bengaluru, Karnataka, India',
    current: true,
    summary: 'Embedded software for Bosch home-appliance electronics, from MCU firmware on Micrium RTOS to DBus-based communication between system components.',
    achievements: [
      'Built STM32G0B1 (Arm Cortex-M0+) firmware on Micrium RTOS, including real-time state-machine control and hardware-variant handling; owned module-level delivery through design reviews, debugging, and release readiness.',
      'Developed a DBus-based communication layer for request/response messaging and asynchronous notifications across 10+ system components.',
      'Fixed 25+ shared-variable concurrency issues found in a volatile audit, resolving release-build failures and enabling optimised armclang (-Os) builds.',
      'Designed overcurrent protection with interrupt-driven fault detection and emergency-shutdown callbacks.',
      'Integrated low-level drivers for ADC current sensing, PWM motor control, SPI, DMA, GPIO, and WS2812 LEDs, including calibration and error handling.',
      'Developed battery SoC/SoH monitoring logic with pytest unit tests, and Python applications for Embedded Linux platforms.',
    ],
    focus: ['STM32G0B1', 'Micrium RTOS', 'DBus', 'Embedded Linux', 'Python', 'pytest'],
  },
  {
    company: 'Mistral Solutions',
    title: 'Senior Software Design Engineer',
    period: 'Apr 2022 – Dec 2023',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Device-driver, Linux bring-up, and test-automation work on TI Sitara and Jacinto processors.',
    achievements: [
      'Ported the MMCSD device driver to TI Sitara AM263x using Code Composer Studio, delivered within 3 months.',
      'Contributed to AM68/AM69 SDK release delivery, recognised with a Pride Pack (Outstanding Performance) award.',
      'Improved Jacinto (AM68/AM69) Linux test-farm integration for automated testing on development boards.',
      'Created board-specific boot binaries and supported Linux bring-up through Device Tree integration.',
      'Worked across the SDLC (requirements, design, unit testing, static analysis, debugging, and releases) in an Agile/Scrum team.',
    ],
    focus: ['TI AM263x', 'AM68 / AM69', 'Linux Drivers', 'Device Tree', 'Test Automation'],
  },
  {
    company: 'Nash Tech Labs',
    title: 'Embedded Software Engineer',
    period: 'Jul 2021 – Feb 2022',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Firmware and hardware/software integration for EV charging.',
    achievements: [
      'Led a team of 4+ engineers on hardware/software integration for EV on-board charger development.',
      'Developed 32-bit MCU firmware for a 3.3 kW EV charging station using IAR and STM32CubeIDE.',
      'Took an RTOS-based product from concept to delivery within 4 months.',
      'Performed circuit tracing, requirements analysis, and log-based firmware debugging; authored SRS, design descriptions, verification reports, and PCB verification documents.',
    ],
    focus: ['EV Charging', 'STM32', 'RTOS', 'Team Leadership'],
  },
  {
    company: 'Senpronics',
    title: 'Senior Embedded Engineer',
    period: 'Aug 2019 – Jun 2021',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Firmware for security, defence, industrial, and IoT products, plus PC-side tooling.',
    achievements: [
      'Developed MISRA-C-compliant bare-metal firmware for security and industrial products.',
      'Delivered defence products on FreeRTOS using IPC and multithreading.',
      'Wrote low-level MCU peripheral drivers (SPI, I2C, UART, GPIO) and integrated them with FreeRTOS application layers.',
      'Built LabVIEW-based Windows tooling for MCU communication over a serial protocol.',
      'Worked on high-bandwidth Wi-Fi data transmission for DAQ systems and on RF signal-generator firmware.',
    ],
    focus: ['MISRA C', 'FreeRTOS', 'LabVIEW', 'IoT Firmware'],
  },
  {
    company: 'Tech Mahindra',
    title: 'Tech Support Engineer',
    period: 'Nov 2017 – Jan 2019',
    location: 'Chennai Area, India',
    summary: 'Network technical support with OSI-layer troubleshooting.',
    achievements: [
      'Resolved 1600+ network support issues using structured root-cause analysis.',
      'Worked across support, engineering, and customer teams on escalations.',
    ],
    focus: ['Network Troubleshooting', 'Root Cause Analysis'],
  },
  {
    company: 'Defence Research and Development Organisation (DRDO)',
    title: 'Project Student',
    period: 'Dec 2016 – Mar 2017',
    location: 'Chennai, Tamil Nadu, India',
    internship: true,
    summary: 'Designed and developed a working prototype of a regenerative braking system for the Mark-4 Main Battle Tank, reporting to scientists in the robotics department of CVRDE.',
    achievements: [],
    focus: ['Defence R&D', 'Prototype Engineering'],
  },
];

export const recognition = [
  {
    kind: 'Award',
    title: 'Pride Pack (Outstanding Performance)',
    detail: 'Mistral Solutions, for AM68/AM69 SK SDK release delivery.',
  },
  {
    kind: 'Patent application',
    title: 'Automated Security System and Method for Motor Bike Locking',
    detail: 'Patent application, 2016.',
  },
];

export const languages = [
  'English (Fluent)',
  'Hindi (Fluent)',
  'Tamil (Native)',
  'Kannada (Conversational)',
  'Telugu (Conversational)',
  'German (A1)',
];

export const education = [
  {
    school: 'Coimbatore Institute of Engineering and Technology',
    affiliation: 'Affiliated to Anna University',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Mechatronics',
    period: '2013 – 2017',
    location: 'Coimbatore, Tamil Nadu, India',
    logoLabel: 'CIET',
  },
  {
    school: 'Vector India',
    degree: 'Certification',
    field: 'Advanced Embedded Systems',
    period: 'Jul 2019',
    location: 'Chennai, Tamil Nadu, India',
    logoLabel: 'VI',
  },
];
