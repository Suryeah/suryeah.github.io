import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../components/ThemeContext.jsx';
import techMahindraLogo from '../assets/tech-mahindra-logo.svg';
import senpronicsLogo from '../assets/senpronics-logo.svg';

const experiences = [
  {
    company: 'Robert Bosch',
    title: 'Senior Software Engineer',
    period: 'Dec 2023 - Present',
    location: 'Bangalore Urban, Karnataka, India',
    summary: 'Developing software for home appliances as part of a global team.',
    achievements: [
      'Delivered firmware features for global appliance platforms with cross-team coordination.',
      'Strengthened quality through reproducible debugging and structured release validation.',
      'Contributed to reusable software blocks that improved maintainability across variants.',
    ],
    focus: ['Embedded C', 'System Integration', 'Release Reliability'],
    current: true,
    dotColor: '#ef4444',
  },
  {
    company: 'Mistral Solutions Pvt. Ltd',
    title: 'Senior Software Developer',
    period: 'Apr 2022 - Dec 2023',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Led SDLC for embedded Linux projects, device driver development, automation test farm integration, and technical recruitment. Improved release efficiency and code reusability.',
    achievements: [
      'Led end-to-end SDLC for embedded Linux programs from bring-up to release.',
      'Integrated automation test farm workflows that reduced repetitive manual verification.',
      'Improved code reuse across projects by promoting modular driver and middleware patterns.',
    ],
    focus: ['Embedded Linux', 'Device Drivers', 'Automation'],
    dotColor: '#f97316',
  },
  {
    company: 'NASH Industries (I) Pvt. Ltd.',
    title: 'Embedded Engineer',
    period: 'Jul 2021 - Feb 2022',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Led a team for EV charger firmware, managed consumer electronics projects, and authored technical documentation. Recognized for rapid project delivery.',
    achievements: [
      'Owned EV charger firmware stream and coordinated delivery with hardware and system teams.',
      'Balanced rapid delivery with product stability through disciplined review and testing loops.',
      'Authored technical documentation used for smoother handover and support continuity.',
    ],
    focus: ['EV Charging', 'Firmware Delivery', 'Technical Documentation'],
    dotColor: '#eab308',
  },
  {
    company: 'Senpronics',
    title: 'Embedded Engineer',
    period: 'Oct 2019 - Jul 2021',
    location: 'Bengaluru, Karnataka, India',
    summary: 'Developed RTOS-based safety and IoT products, improved performance and reliability, and contributed to mission-critical defense projects.',
    achievements: [
      'Built RTOS-based firmware for safety and IoT products under strict reliability constraints.',
      'Improved runtime behavior through targeted performance profiling and optimization.',
      'Contributed to mission-critical defense-oriented embedded deliverables.',
    ],
    focus: ['RTOS', 'Safety Systems', 'IoT Firmware'],
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
  {
    company: 'Robert Bosch',
    title: 'Embedded Intern',
    period: 'May 2017 - Jul 2017',
    location: 'Bangalore Urban, Karnataka, India',
    summary: 'Worked on embedded C projects and automation scripts for test benches.',
    achievements: [
      'Contributed to embedded C modules and test bench automation support scripts.',
      'Built early exposure to industrial firmware quality expectations.',
    ],
    focus: ['Embedded C', 'Test Automation'],
    dotColor: '#ef4444',
  },
];

const companyIcons = {
  'Robert Bosch': (
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" alt="Robert Bosch Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Mistral Solutions Pvt. Ltd': (
    <img src="https://upload.wikimedia.org/wikipedia/en/6/64/Mistral_new_logo_post_merger_with_AXISCADES.png" alt="Mistral Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'NASH Industries (I) Pvt. Ltd.': (
    <img src="https://www.nashindia.com/images/logo.png" alt="NASH Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Senpronics': (
    <img src={senpronicsLogo} alt="Senpronics Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Tech Mahindra Pvt. Ltd.': (
    <img src={techMahindraLogo} alt="Tech Mahindra Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
  'Defence Research and Development Organisation (DRDO)': (
    <img src="https://nijuktikhabar.in/wp-content/uploads/2020/04/drdo-cvrde-logo-320x300.png" alt="DRDO Logo" style={{ width: 28, height: 28, objectFit: 'contain', background: 'white', borderRadius: '50%' }} />
  ),
};

const TimelineItem = ({ exp, isLast, theme, index, total }) => (
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
      </div>
    </section>
  );
};

export default ExperiencePage;
