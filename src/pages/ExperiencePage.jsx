import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../components/ThemeContext.jsx';
import techMahindraLogo from '../assets/tech-mahindra-logo.svg';
import senpronicsLogo from '../assets/senpronics-logo.svg';
import mistralLogo from '../assets/mistral-logo.png';
import nashLogo from '../assets/nash-logo.png';
import drdoLogo from '../assets/drdo-logo.png';

const experiences = [
  {
    company: 'Robert Bosch',
    title: 'Senior Software Engineer',
    period: 'Dec 2023 - Present',
    location: 'Bangalore Urban, Karnataka, India',
    summary: 'Developing next-gen Bosch home appliance electronics with Embedded Linux and Python application stacks.',
    achievements: [
      'Built Python applications for Embedded Linux platforms, including DBus IPC between multiple applications.',
      'Developed battery monitoring logic for SOC and SOH estimation in appliance-class systems.',
      'Improved release confidence with structured unit testing using pytest and reproducible validation flows.',
    ],
    focus: ['Embedded Linux', 'Python', 'DBus', 'Pytest'],
    current: true,
    dotColor: '#ef4444',
  },
  {
    company: 'Mistral Solutions Pvt. Ltd',
    title: 'Senior Software Developer',
    period: 'Apr 2022 - Dec 2023',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Owned end-to-end SDLC delivery across embedded Linux and TI Sitara/Jacinto programs with device-driver and platform integration work.',
    achievements: [
      'Ported MMCSD device driver for TI AM263x in 3 months and met AM68/AM69 SDK delivery milestones.',
      'Accelerated Linux test farm integration by 25% for Jacinto processor-based boards.',
      'Built board-specific Linux boot binaries and device-tree bring-up flows; recognized with Pride Pack award.',
    ],
    focus: ['AM263/AM68/AM69', 'Linux Drivers', 'Device Tree', 'Automation'],
    dotColor: '#f97316',
  },
  {
    company: 'NASH Industries (I) Pvt. Ltd.',
    title: 'Embedded Engineer',
    period: 'Jul 2021 - Feb 2022',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Led firmware and integration for EV charging and consumer electronics, balancing speed with production-grade execution.',
    achievements: [
      'Led a team of 4+ peers for hardware-software integration and delivery of EV on-board charger solutions.',
      'Developed firmware for a 3.3kW charging station on 32-bit MCUs using IAR and STM32CubeIDE.',
      'Delivered an RTOS-based product from concept to commercialization within 4 months.',
    ],
    focus: ['EV Charging', 'STM32', 'RTOS', 'Team Leadership'],
    dotColor: '#eab308',
  },
  {
    company: 'Senpronics',
    title: 'Embedded Engineer',
    period: 'Oct 2019 - Jul 2021',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Delivered RTOS-based firmware for mission-critical safety, RF, and IoT products with strong field reliability outcomes.',
    achievements: [
      'Developed MISRA-compliant RTOS firmware for security and defense-oriented embedded systems.',
      'Improved product performance by 10% and firmware response by 20% through optimization and profiling.',
      'Contributed to mission-critical defense products and helped drive a 30% increase in revenue/orders.',
    ],
    focus: ['MISRA C', 'FreeRTOS', 'IoT Firmware', 'Defense Systems'],
    dotColor: '#22c55e',
  },
  {
    company: 'Tech Mahindra Pvt. Ltd.',
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
    dotColor: '#6366f1',
  },
];

const internships = [
  {
    company: 'Defence Research and Development Organisation (DRDO)',
    title: 'Project Student',
    period: 'December 2016 - March 2017 (4 months)',
    location: 'Chennai, Tamil Nadu, India',
    summary: 'Designed and developed working prototype of Regenerative Braking System for Mark-4 Main Battle Tank. Reported to scientists in robotics department of CVRDE.',
    achievements: [
      'Developed a working regenerative braking prototype for armored platform context.',
      'Presented findings and prototype behavior to DRDO/CVRDE scientific teams.',
    ],
    focus: ['Defense R&D', 'Prototype Engineering'],
    dotColor: '#0ea5e9',
  },
];

const showcase = [
  {
    title: 'Pride Pack - Outstanding Performance',
    detail: 'Recognized at Mistral Solutions for excellent teamwork and schedule-critical AM68/AM69 SK SDK release delivery.',
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

const companyIcons = {
  'Robert Bosch': (
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" alt="Robert Bosch Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Mistral Solutions Pvt. Ltd': (
    <img src={mistralLogo} alt="Mistral Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'NASH Industries (I) Pvt. Ltd.': (
    <img src={nashLogo} alt="NASH Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Senpronics': (
    <img src={senpronicsLogo} alt="Senpronics Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Tech Mahindra Pvt. Ltd.': (
    <img src={techMahindraLogo} alt="Tech Mahindra Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Defence Research and Development Organisation (DRDO)': (
    <img src={drdoLogo} alt="DRDO Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
};

const TimelineItem = ({ exp, isLast, theme, index }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
      minHeight: 100,
      marginBottom: isLast ? 0 : 0,
      opacity: 0,
      transform: 'translateY(40px)',
      animation: `fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
      animationDelay: `${index * 0.18 + 0.1}s`,
    }}
  >
    {/* Company logo on the far left (rectangle, not circle) */}
    <div style={{
      width: 160, // fixed width for name/logo column
      textAlign: 'right',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 24,
      boxSizing: 'border-box',
      height: 78, // match timeline dot height
    }}>
      {(companyIcons[exp.company]) ?
        React.cloneElement(companyIcons[exp.company], { style: { width: 90, height: 48, objectFit: 'contain', background: 'white', borderRadius: 0, margin: 0, padding: 0, boxShadow: '0 0 2px #ccc' } }) :
        <div style={{ width: 90, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e3e8f0', borderRadius: 8, color: '#2d6cdf', fontWeight: 700, fontSize: 18, boxShadow: '0 0 2px #ccc' }}>{exp.company.split(' ')[0]}</div>
      }
    </div>
    {/* Timeline vertical line and logo - perfectly centered in a fixed column */}
    <div style={{
      width: 56, // fixed width for logo column
      minWidth: 56,
      maxWidth: 56,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      minHeight: 100,
    }}>
      {/* Timeline vertical line (behind the dot) */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: 2,
        background: theme === 'dark' ? '#2d6cdf' : '#174ea6',
        opacity: 0.25,
        zIndex: 0,
        transform: 'translateX(-50%)',
        height: '100%',
      }} />
      {/* Timeline dot - blue circle only, no logo inside */}
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: exp.dotColor || (theme === 'dark' ? '#2d6cdf' : '#174ea6'),
        border: `2.5px solid ${exp.dotColor || (theme === 'dark' ? '#2d6cdf' : '#174ea6')}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: exp.dotColor ? `0 0 0 3px ${exp.dotColor}33` : (theme === 'dark' ? '0 0 0 2px #23272f' : '0 0 0 2px #fff'),
        transition: 'background 0.3s, border 0.3s',
        position: 'relative',
        zIndex: 2,
        marginTop: 0,
        marginBottom: 0,
      }} />
      {/* Top cap for first item */}
      {index === 0 && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: 2,
          height: '50%',
          background: theme === 'dark' ? '#2d6cdf' : '#174ea6',
          opacity: 0.25,
          zIndex: 0,
          transform: 'translateX(-50%)',
        }} />
      )}
      {/* Bottom cap for last item */}
      {isLast && (
        <div style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          width: 2,
          height: '50%',
          background: theme === 'dark' ? '#2d6cdf' : '#174ea6',
          opacity: 0.25,
          zIndex: 0,
          transform: 'translateX(-50%)',
        }} />
      )}
    </div>
    {/* Details on the right */}
    <div style={{ flex: 1, marginLeft: 8, paddingBottom: isLast ? 0 : 24, alignSelf: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: theme === 'dark' ? '#fff' : '#174ea6' }}>{exp.title}</span>
        {exp.current && <span className="badge-current">● Current</span>}
      </div>
      <div style={{ fontWeight: 500, fontSize: '1rem', margin: '2px 0 2px 0', color: theme === 'dark' ? '#b3cdf6' : '#222' }}>{exp.period}</div>
      <div style={{ fontSize: '0.97rem', color: theme === 'dark' ? '#b3cdf6' : '#555', marginBottom: 2 }}>{exp.location}</div>
      <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#333', marginBottom: 0 }}>{exp.summary}</div>
      <ul style={{ margin: '10px 0 8px 18px', padding: 0, color: theme === 'dark' ? '#dbeafe' : '#334155', fontSize: '0.9rem', lineHeight: 1.55 }}>
        {exp.achievements.map((point, i) => <li key={i} style={{ marginBottom: 3 }}>{point}</li>)}
      </ul>
      <div className="tech-tags-row" style={{ marginTop: 0 }}>
        {exp.focus.map((f, i) => <span key={i} className="case-chip">{f}</span>)}
      </div>
    </div>
  </div>
);

// Animation keyframes for fadeInUp
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`;
if (!document.head.querySelector('#timeline-fadeinup')) {
  style.id = 'timeline-fadeinup';
  document.head.appendChild(style);
}

const ExperiencePage = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('job');
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);

  const tabStyle = (tab) => ({
    background: activeTab === tab ? (theme === 'dark' ? '#2d6cdf' : '#174ea6') : 'transparent',
    color: activeTab === tab ? '#fff' : (theme === 'dark' ? '#b3cdf6' : '#174ea6'),
    border: 'none',
    borderRadius: 8,
    padding: '0.5rem 1.5rem',
    fontWeight: 600,
    fontSize: '1rem',
    marginRight: 12,
    marginBottom: 24,
    cursor: 'pointer',
    boxShadow: activeTab === tab ? '0 2px 8px rgba(45,108,223,0.13)' : 'none',
    transition: 'background 0.2s, color 0.2s',
  });

  return (
    <section ref={sectionRef} className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.2rem 2.5rem 1.2rem' }}>
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, letterSpacing: 0.5 }}>Experience</h2>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, justifyContent: 'center', width: '100%' }}>
          <button style={tabStyle('job')} onClick={() => setActiveTab('job')}>Job</button>
          <button style={tabStyle('internship')} onClick={() => setActiveTab('internship')}>Internship</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {(activeTab === 'job' ? experiences : internships).map((exp, i, arr) => (
            <TimelineItem key={exp.company + exp.period} exp={exp} isLast={i === arr.length - 1} theme={theme} index={i} total={arr.length} />
          ))}
        </div>

        <div style={{
          marginTop: 26,
          padding: '1rem',
          borderRadius: 14,
          border: theme === 'dark' ? '1px solid rgba(147,197,253,0.22)' : '1px solid rgba(23,78,166,0.18)',
          background: theme === 'dark' ? 'rgba(30,41,59,0.45)' : 'rgba(248,250,255,0.8)',
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 10, color: theme === 'dark' ? '#bfdbfe' : '#1d4ed8' }}>Awards & IP</h3>
          {showcase.map((item, idx) => (
            <div key={idx} style={{ marginBottom: idx === showcase.length - 1 ? 0 : 10 }}>
              <div style={{ fontWeight: 700, color: theme === 'dark' ? '#e2e8f0' : '#0f172a' }}>
                {item.title} <span style={{ fontWeight: 600, color: theme === 'dark' ? '#93c5fd' : '#2563eb' }}>({item.kind})</span>
              </div>
              <div style={{ fontSize: '0.92rem', color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 16,
          padding: '1rem',
          borderRadius: 14,
          border: theme === 'dark' ? '1px solid rgba(148,163,184,0.25)' : '1px solid rgba(148,163,184,0.28)',
          background: theme === 'dark' ? 'rgba(15,23,42,0.42)' : 'rgba(241,245,249,0.72)',
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 10, color: theme === 'dark' ? '#bfdbfe' : '#1d4ed8' }}>Languages</h3>
          <div className="tech-tags-row" style={{ marginTop: 0 }}>
            {languageSkills.map((lang, idx) => <span key={idx} className="tech-tag">{lang}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
