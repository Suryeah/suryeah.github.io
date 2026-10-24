import React, { useEffect, useRef } from 'react';
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
  },
  {
    company: 'Mistral Solutions Pvt. Ltd',
    title: 'Senior Software Developer',
    period: 'Apr 2022 - Dec 2023',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Owned end-to-end SDLC delivery across embedded Linux and TI Sitara/Jacinto programs with device-driver and platform integration work.',
    achievements: [
      'Ported MMCSD device driver for TI AM263x in 3 months and met AM68/AM69 SDK delivery milestones.',
      'Integrated Linux test-farm workflows for Jacinto processor-based boards.',
      'Built board-specific Linux boot binaries and device-tree bring-up flows; recognized with Pride Pack award.',
    ],
    focus: ['AM263/AM68/AM69', 'Linux Drivers', 'Device Tree', 'Automation'],
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
  },
  {
    company: 'Senpronics',
    title: 'Embedded Engineer',
    period: 'Oct 2019 - Jul 2021',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Delivered RTOS-based firmware for mission-critical safety, RF, and IoT products with strong field reliability outcomes.',
    achievements: [
      'Developed MISRA-compliant RTOS firmware for security and defense-oriented embedded systems.',
      'Optimized and profiled firmware for safety, RF, and IoT products.',
    ],
    focus: ['MISRA C', 'FreeRTOS', 'IoT Firmware', 'Defense Systems'],
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

const TimelineItem = ({ exp, isLast, index }) => (
  <div
    className="experience-entry"
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
        React.cloneElement(companyIcons[exp.company], { style: { width: 90, height: 48, objectFit: 'contain', background: 'var(--surface)', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'var(--shadow-sm)' } }) :
        <div style={{ width: 90, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', borderRadius: 8, color: 'var(--brand)', fontWeight: 700, fontSize: 18, boxShadow: 'var(--shadow-sm)' }}>{exp.company.split(' ')[0]}</div>
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
        background: 'var(--brand)',
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
        background: 'var(--brand)',
        border: '2.5px solid var(--brand)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 0 3px color-mix(in srgb, var(--brand) 20%, transparent)',
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
          background: 'var(--brand)',
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
          background: 'var(--brand)',
          opacity: 0.25,
          zIndex: 0,
          transform: 'translateX(-50%)',
        }} />
      )}
    </div>
    {/* Details on the right */}
    <div style={{ flex: 1, marginLeft: 8, paddingBottom: isLast ? 0 : 24, alignSelf: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{exp.title}</span>
        {exp.current && <span className="badge-current">● Current</span>}
        {exp.internship && <span className="badge-internship">Internship</span>}
      </div>
      <div style={{ fontWeight: 500, fontSize: '1rem', margin: '2px 0 2px 0', color: 'var(--text-secondary)' }}>{exp.period}</div>
      <div style={{ fontSize: '0.97rem', color: 'var(--text-muted)', marginBottom: 2 }}>{exp.location}</div>
      <div style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: 0 }}>{exp.summary}</div>
      <ul style={{ margin: '10px 0 8px 18px', padding: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
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
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="products-section" style={{ background: 'var(--surface)', color: 'var(--text)', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.2rem 2.5rem 1.2rem' }}>
        <h2 style={{ color: 'var(--text)', fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, letterSpacing: 0.5 }}>Experience</h2>
        <div className="experience-timeline" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[...experiences, ...internships].map((exp, i, entries) => (
            <TimelineItem key={exp.company + exp.period} exp={exp} isLast={i === entries.length - 1} index={i} />
          ))}
        </div>

        <div className="experience-awards" style={{
          marginTop: 26,
          padding: '1rem',
          borderRadius: 14,
          border: '1px solid var(--border)',
          background: 'var(--bg-secondary)',
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 10, color: 'var(--text)' }}>Awards & IP</h3>
          {showcase.map((item, idx) => (
            <div key={idx} style={{ marginBottom: idx === showcase.length - 1 ? 0 : 10 }}>
              <div style={{ fontWeight: 700, color: 'var(--text)' }}>
                {item.title} <span style={{ fontWeight: 600, color: 'var(--brand)' }}>({item.kind})</span>
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="experience-languages" style={{
          marginTop: 16,
          padding: '1rem',
          borderRadius: 14,
          border: '1px solid var(--border)',
          background: 'var(--bg-secondary)',
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 10, color: 'var(--text)' }}>Languages</h3>
          <div className="tech-tags-row" style={{ marginTop: 0 }}>
            {languageSkills.map((lang, idx) => <span key={idx} className="tech-tag">{lang}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
