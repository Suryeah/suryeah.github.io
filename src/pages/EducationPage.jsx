import React, { useEffect, useRef } from 'react';

const educationList = [
  {
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
  },
];

const EducationTimelineItem = ({ edu, isLast, index }) => (
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
      <div role="img" aria-label="Coimbatore Institute of Engineering and Technology" style={{ display: 'flex', width: 90, height: 48, alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', borderRadius: 8, color: 'var(--brand)', fontWeight: 700, fontSize: 14, boxShadow: 'var(--shadow-sm)' }}>CIET</div>
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
        background: 'var(--brand)',
        opacity: 0.25,
        zIndex: 0,
        transform: 'translateX(-50%)',
        height: '100%',
      }} />
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--surface)',
        border: '2.5px solid var(--brand)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 0 2px var(--surface)',
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
          background: 'var(--brand)',
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
          background: 'var(--brand)',
          opacity: 0.25,
          zIndex: 0,
          transform: 'translateX(-50%)',
        }} />
      )}
    </div>
    {/* Details on the right */}
    <div style={{ flex: 1, marginLeft: 8, paddingBottom: isLast ? 0 : 24, alignSelf: 'flex-start' }}>
      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{edu.degree}</div>
      <div style={{ fontWeight: 500, fontSize: '1rem', margin: '2px 0 2px 0', color: 'var(--text-secondary)' }}>{edu.period}</div>
      <div style={{ fontSize: '0.97rem', color: 'var(--text-muted)', marginBottom: 2 }}>
        {edu.school}<br/>{edu.location}
      </div>
      <div style={{ fontSize: '0.98rem', color: 'var(--text)', marginBottom: 0 }}>{edu.field}</div>
      {edu.summary && <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.55 }}>{edu.summary}</div>}
      <ul style={{ margin: '10px 0 8px 18px', padding: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
        {edu.highlights.map((point, i) => <li key={i} style={{ marginBottom: 3 }}>{point}</li>)}
      </ul>
      <div className="tech-tags-row" style={{ marginTop: 0 }}>
        {edu.coursework.map((c, i) => <span key={i} className="tech-tag">{c}</span>)}
      </div>
    </div>
  </div>
);

const EducationPage = () => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section id="education" ref={sectionRef} className="products-section" style={{ background: 'var(--bg-secondary)', color: 'var(--text)', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.2rem 2.5rem 1.2rem' }}>
        <h2 style={{ color: 'var(--text)', fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, letterSpacing: 0.5 }}>Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {educationList.map((edu, i, arr) => (
            <EducationTimelineItem key={edu.school + edu.period} edu={edu} isLast={i === arr.length - 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
