import Timeline from '../components/Timeline.jsx';
import styles from './ExperiencePage.module.css';
import techMahindraLogo from '../assets/tech-mahindra-logo.svg';
import senpronicsLogo from '../assets/senpronics-logo.svg';
import mistralLogo from '../assets/mistral-logo.png';
import nashLogo from '../assets/nash-logo.png';
import drdoLogo from '../assets/drdo-logo.png';

const experiences = [
  {
    company: 'Bosch Global Software Technologies',
    title: 'Senior Engineer',
    period: 'Dec 2023 - Present',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Developing Python applications and Embedded Linux software for Bosch home appliance electronics.',
    achievements: [
      'Built Python applications for Embedded Linux platforms, including DBus IPC between multiple applications.',
      'Developed battery monitoring logic for SOC and SOH estimation in appliance-class systems.',
      'Improved release confidence with structured unit testing using pytest and reproducible validation flows.',
    ],
    focus: ['Embedded Linux', 'Python', 'DBus', 'Pytest'],
    current: true,
  },
  {
    company: 'Mistral Solutions',
    title: 'Senior Software Design Engineer',
    period: 'Apr 2022 - Dec 2023',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Owned end-to-end delivery across embedded Linux and TI Sitara/Jacinto programs with device-driver and platform integration work.',
    achievements: [
      'Ported MMCSD device driver for TI AM263x in 3 months and met AM68/AM69 SDK delivery milestones.',
      'Integrated Linux test-farm workflows for Jacinto processor-based boards.',
      'Built board-specific Linux boot binaries and device-tree bring-up flows; recognized with Pride Pack award.',
    ],
    focus: ['AM263/AM68/AM69', 'Linux Drivers', 'Device Tree', 'Automation'],
  },
  {
    company: 'Nash Tech Labs',
    title: 'Embedded Software Engineer',
    period: 'Jul 2021 - Feb 2022',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Led firmware and integration for EV charging and consumer electronics, balancing speed with production-grade execution.',
    achievements: [
      'Led a team of 4+ peers for hardware-software integration and delivery of EV on-board charger solutions.',
      'Developed firmware for a 3.3kW charging station on 32-bit MCUs using IAR and STM32CubeIDE.',
      'Delivered an RTOS-based product from concept to commercialization within 4 months.',
    ],
    focus: ['EV Charging', 'STM32', 'RTOS', 'Team Leadership'],
  },
  {
    company: 'Senpronics',
    title: 'Senior Embedded Engineer',
    period: 'Aug 2019 - Jun 2021',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Delivered RTOS-based C firmware for security devices, IoT products, and LabVIEW-based Windows tooling.',
    achievements: [
      'Developed MISRA-compliant RTOS firmware for security and defense-oriented embedded systems.',
      'Optimized and profiled firmware for safety, RF, and IoT products.',
      'Built LabVIEW software for serial communication and monitoring.',
      'Contributed to Wi-Fi transmission and RF signal-generator product development.',
    ],
    focus: ['MISRA C', 'RTOS', 'LabVIEW', 'IoT Firmware'],
  },
  {
    company: 'Tech Mahindra',
    title: 'Tech Support Engineer',
    period: 'Nov 2017 - Jan 2019',
    location: 'Chennai Area, India',
    summary: 'Resolved 1600+ network issues, specializing in OSI Layer troubleshooting and rapid root cause analysis.',
    achievements: [
      'Resolved 1600+ production issues with strong SLA adherence and structured RCA.',
      'Built deep OSI-layer diagnostics habits that improved escalation quality.',
      'Developed communication discipline across support, engineering, and customer interfaces.',
    ],
    focus: ['Troubleshooting', 'RCA', 'Network Systems'],
  },
];

const internships = [
  {
    company: 'Defence Research and Development Organisation (DRDO)',
    title: 'Project Student',
    period: 'December 2016 - March 2017 (4 months)',
    location: 'Chennai, Tamil Nadu, India',
    summary: 'Designed and developed working prototype of Regenerative Braking System for Mark-4 Main Battle Tank. Reported to scientists in robotics department of CVRDE.',
    internship: true,
    achievements: [
      'Developed a working regenerative braking prototype for armored platform context.',
      'Presented findings and prototype behavior to DRDO/CVRDE scientific teams.',
    ],
    focus: ['Defense R&D', 'Prototype Engineering'],
  },
];

const showcase = [
  {
    title: 'Pride Pack - Outstanding Performance',
    detail: 'Recognized at Mistral Solutions for excellent teamwork and schedule-critical AM68/AM69 SDK release delivery.',
    kind: 'Award',
  },
  {
    title: 'Automated Security System and Method for Motor Bike Locking',
    detail: 'Patent Application: 20164103054 | Classification: G08B21/00',
    kind: 'Patent',
  },
];

const languageSkills = [
  'English (Fluent)',
  'Hindi (Fluent)',
  'Tamil (Native)',
  'Kannada (Conversational)',
  'Telugu (Conversational)',
  'German (A1)',
];

const LOGOS = {
  'Bosch Global Software Technologies': 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
  'Mistral Solutions': mistralLogo,
  'Nash Tech Labs': nashLogo,
  'Senpronics': senpronicsLogo,
  'Tech Mahindra': techMahindraLogo,
  'Defence Research and Development Organisation (DRDO)': drdoLogo,
};

const timelineItems = [...experiences, ...internships].map((exp) => ({
  key: exp.company + exp.period,
  logo: LOGOS[exp.company],
  title: exp.title,
  badge: exp.current ? 'Current' : exp.internship ? 'Internship' : null,
  badgeVariant: exp.internship ? 'muted' : undefined,
  org: exp.company,
  period: exp.period,
  location: exp.location,
  summary: exp.summary,
  bullets: exp.achievements,
  tags: exp.focus,
}));

const ExperiencePage = () => (
  <section id="experience" className="section section-alt" aria-labelledby="experience-title">
    <div className="section-inner">
      <p className="section-eyebrow">Career</p>
      <h2 id="experience-title" className="section-title">Experience</h2>
      <p className="section-lead">Embedded roles across appliance electronics, TI processor SDKs, EV charging, and defense-oriented systems.</p>
      <Timeline items={timelineItems} />
      <div className={styles.panels}>
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Awards &amp; IP</h3>
          <ul className={styles.list}>
            {showcase.map((item) => (
              <li key={item.title}>
                <p className={styles.itemTitle}>{item.title} <span className={styles.kind}>{item.kind}</span></p>
                <p className={styles.itemDetail}>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Languages</h3>
          <ul className={styles.tags}>
            {languageSkills.map((lang) => <li key={lang} className="tag">{lang}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ExperiencePage;
