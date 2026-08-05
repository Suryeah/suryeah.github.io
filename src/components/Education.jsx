import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext.jsx';

const educationList = [
  {
    type: 'certification',
    school: 'Vector India Org',
    degree: 'Certification',
    field: 'Advanced Embedded Systems',
    period: '07/2019',
    location: 'Chennai, Tamil Nadu, India',
    summary: 'Completed advanced embedded systems training focused on RTOS-based development and practical firmware engineering.',
    highlights: [
      'Built stronger hands-on fluency with embedded C, RTOS concepts, and low-level debugging.',
      'Strengthened system design thinking for real-world embedded product development.',
    ],
    coursework: ['RTOS', 'Embedded C', 'Firmware Debugging'],
    logoLabel: 'VI',
  },
  {
    type: 'education',
    school: 'Coimbatore Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Mechatronics, Robotics, and Automation Engineering',
    period: '2013 - 2017',
    location: 'Coimbatore, Tamil Nadu, India',
    summary: 'Built a strong foundation in control systems, embedded design, robotics, and practical automation engineering.',
    highlights: [
      'Capstone and lab-heavy coursework centered on sensors, control loops, and automation fundamentals.',
      'Hands-on development exposure spanning electronics integration and firmware problem-solving.',
      'Built discipline in system-level thinking across mechanical, electrical, and software interfaces.',
    ],
    coursework: ['Control Systems', 'Microcontrollers', 'Industrial Automation', 'Robotics', 'Instrumentation'],
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQE1Qed7IF2Jzg/company-logo_200_200/company-logo_200_200/0/1639066812484?e=1753315200&v=beta&t=fYwbVJansjr-EQUqKuyFiysPZqI3PFiunwki6TShACQ',
    logoLabel: 'CIET',
  },
];

const EducationTimelineItem = ({ edu, isLast, theme, index }) => {
  const isCertification = edu.degree === 'Certification';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        minHeight: 100,
        marginBottom: isLast ? 0 : 0,
        opacity: 0,
        transform: 'translateY(40px)',
        animation: 'fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        animationDelay: `${index * 0.18 + 0.1}s`,
      }}
    >
      <div style={{
        width: 160,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 24,
        boxSizing: 'border-box',
        height: 78,
      }}>
        {edu.logo ? (
          <img
            src={edu.logo}
            alt={edu.school + ' Logo'}
            style={{ width: 90, height: 48, objectFit: 'contain', background: 'white', borderRadius: 0, margin: 0, padding: 0, boxShadow: '0 0 2px #ccc' }}
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
        ) : null}
        <div style={{ display: edu.logo ? 'none' : 'flex', width: 90, height: 48, alignItems: 'center', justifyContent: 'center', background: '#e3e8f0', borderRadius: 8, color: '#2d6cdf', fontWeight: 700, fontSize: 14, boxShadow: '0 0 2px #ccc' }}>
          {edu.logoLabel || edu.school.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase()}
        </div>
      </div>

      <div style={{
        width: 56,
        minWidth: 56,
        maxWidth: 56,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        minHeight: 100,
      }}>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          background: isCertification ? (theme === 'dark' ? '#8b5cf6' : '#7c3aed') : (theme === 'dark' ? '#2d6cdf' : '#174ea6'),
          opacity: 0.25,
          zIndex: 0,
          transform: 'translateX(-50%)',
          height: '100%',
        }} />
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: isCertification ? (theme === 'dark' ? '#2e2443' : '#f5efff') : (theme === 'dark' ? '#23272f' : '#fff'),
          border: `2.5px solid ${isCertification ? (theme === 'dark' ? '#a78bfa' : '#7c3aed') : (theme === 'dark' ? '#2d6cdf' : '#174ea6')}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: theme === 'dark' ? '0 0 0 2px #23272f' : '0 0 0 2px #fff',
          transition: 'background 0.3s, border 0.3s',
          position: 'relative',
          zIndex: 2,
          marginTop: 0,
          marginBottom: 0,
        }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: isCertification ? (theme === 'dark' ? '#ddd6fe' : '#6d28d9') : (theme === 'dark' ? '#cfe1ff' : '#174ea6') }}>
            {isCertification ? 'CERT' : 'EDU'}
          </span>
        </div>
        {index === 0 && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: 2,
            height: '50%',
            background: isCertification ? (theme === 'dark' ? '#8b5cf6' : '#7c3aed') : (theme === 'dark' ? '#2d6cdf' : '#174ea6'),
            opacity: 0.25,
            zIndex: 0,
            transform: 'translateX(-50%)',
          }} />
        )}
        {isLast && (
          <div style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            width: 2,
            height: '50%',
            background: isCertification ? (theme === 'dark' ? '#8b5cf6' : '#7c3aed') : (theme === 'dark' ? '#2d6cdf' : '#174ea6'),
            opacity: 0.25,
            zIndex: 0,
            transform: 'translateX(-50%)',
          }} />
        )}
      </div>

      <div style={{
        flex: 1,
        marginLeft: 8,
        padding: isCertification ? '16px 16px 18px' : '0 0 24px 0',
        alignSelf: 'flex-start',
        border: isCertification ? `1px solid ${theme === 'dark' ? 'rgba(167,139,250,0.35)' : 'rgba(124,58,237,0.18)'}` : 'none',
        borderRadius: isCertification ? 18 : 0,
        background: isCertification ? (theme === 'dark' ? 'rgba(46,36,67,0.45)' : 'linear-gradient(180deg, #fff 0%, #faf7ff 100%)') : 'transparent',
        boxShadow: isCertification ? (theme === 'dark' ? '0 10px 30px rgba(0,0,0,0.18)' : '0 10px 30px rgba(124,58,237,0.08)') : 'none',
      }}>
        {isCertification && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: 0.8, padding: '4px 10px', borderRadius: 999, background: theme === 'dark' ? '#3b275f' : '#ede9fe', color: theme === 'dark' ? '#ddd6fe' : '#6d28d9' }}>
              CERTIFICATION
            </span>
          </div>
        )}
        <div style={{ fontWeight: 700, fontSize: isCertification ? '1.2rem' : '1.1rem', color: theme === 'dark' ? '#fff' : '#174ea6' }}>
          {isCertification ? edu.field : edu.degree}
        </div>
        <div style={{ fontWeight: 500, fontSize: '1rem', margin: '2px 0 2px 0', color: theme === 'dark' ? '#b3cdf6' : '#222' }}>
          {edu.period}
        </div>
        <div style={{ fontSize: '0.97rem', color: theme === 'dark' ? '#b3cdf6' : '#555', marginBottom: 2 }}>
          {edu.school}<br />{edu.location}
        </div>
        {!isCertification && (
          <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#333', marginBottom: 0 }}>{edu.field}</div>
        )}
        {edu.summary && <div style={{ fontSize: '0.95rem', color: theme === 'dark' ? '#e0e6f1' : '#333', marginTop: 8, lineHeight: 1.55 }}>{edu.summary}</div>}
        <ul style={{ margin: '10px 0 8px 18px', padding: 0, color: theme === 'dark' ? '#dbeafe' : '#334155', fontSize: '0.9rem', lineHeight: 1.55 }}>
          {edu.highlights.map((point, i) => <li key={i} style={{ marginBottom: 3 }}>{point}</li>)}
        </ul>
        <div className="tech-tags-row" style={{ marginTop: 0 }}>
          {edu.coursework.map((c, i) => <span key={i} className="tech-tag">{c}</span>)}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();
  const certifications = educationList.filter((edu) => edu.type === 'certification');
  const academics = educationList.filter((edu) => edu.type === 'education');
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} id="education" className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.2rem 2.5rem 1.2rem' }}>
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, letterSpacing: 0.5 }}>Education</h2>
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ color: theme === 'dark' ? '#ddd6fe' : '#6d28d9', fontWeight: 800, fontSize: '1.25rem', marginBottom: 14, letterSpacing: 0.4 }}>
            Certification
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {certifications.map((edu, i, arr) => (
              <EducationTimelineItem key={edu.school + edu.period} edu={edu} isLast={i === arr.length - 1} theme={theme} index={i} total={arr.length} />
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontWeight: 800, fontSize: '1.25rem', marginBottom: 14, letterSpacing: 0.4 }}>
            Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {academics.map((edu, i, arr) => (
              <EducationTimelineItem key={edu.school + edu.period} edu={edu} isLast={i === arr.length - 1} theme={theme} index={i} total={arr.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
