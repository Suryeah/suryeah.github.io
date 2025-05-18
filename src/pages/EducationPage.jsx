import React, { useEffect, useRef } from 'react';
import { useTheme } from '../components/ThemeContext.jsx';

const educationList = [
  {
    school: 'Coimbatore Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Mechatronics, Robotics, and Automation Engineering',
    period: '2013 - 2017',
    location: 'Coimbatore, Tamil Nadu, India',
    summary: '',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQE1Qed7IF2Jzg/company-logo_200_200/company-logo_200_200/0/1639066812484?e=1753315200&v=beta&t=fYwbVJansjr-EQUqKuyFiysPZqI3PFiunwki6TShACQ',
  },
];

const EducationTimelineItem = ({ edu, isLast, theme, index, total }) => (
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
    {/* School logo on the left */}
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
      <img src={edu.logo} alt={edu.school + ' Logo'} style={{ width: 90, height: 48, objectFit: 'contain', background: 'white', borderRadius: 0, margin: 0, padding: 0, boxShadow: '0 0 2px #ccc' }} />
    </div>
    {/* Timeline vertical line and dot */}
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
        background: theme === 'dark' ? '#2d6cdf' : '#174ea6',
        opacity: 0.25,
        zIndex: 0,
        transform: 'translateX(-50%)',
        height: '100%',
      }} />
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: theme === 'dark' ? '#23272f' : '#fff',
        border: `2.5px solid ${theme === 'dark' ? '#2d6cdf' : '#174ea6'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme === 'dark' ? '0 0 0 2px #23272f' : '0 0 0 2px #fff',
        transition: 'background 0.3s, border 0.3s',
        position: 'relative',
        zIndex: 2,
        marginTop: 0,
        marginBottom: 0,
      }} />
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
      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: theme === 'dark' ? '#fff' : '#174ea6' }}>{edu.degree}</div>
      <div style={{ fontWeight: 500, fontSize: '1rem', margin: '2px 0 2px 0', color: theme === 'dark' ? '#b3cdf6' : '#222' }}>{edu.period}</div>
      <div style={{ fontSize: '0.97rem', color: theme === 'dark' ? '#b3cdf6' : '#555', marginBottom: 2 }}>
        {edu.school}<br/>{edu.location}
      </div>
      <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#333', marginBottom: 0 }}>{edu.field}</div>
      {edu.summary && <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#e0e6f1' : '#333', marginTop: 4 }}>{edu.summary}</div>}
    </div>
  </div>
);

const EducationPage = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.2rem 2.5rem 1.2rem' }}>
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6', fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, letterSpacing: 0.5 }}>Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {educationList.map((edu, i, arr) => (
            <EducationTimelineItem key={edu.school + edu.period} edu={edu} isLast={i === arr.length - 1} theme={theme} index={i} total={arr.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
