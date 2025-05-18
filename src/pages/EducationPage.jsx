import React, { useEffect, useRef } from 'react';
import { useTheme } from '../components/ThemeContext.jsx';

const EducationPage = () => {
  const { theme } = useTheme();
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return (
    <section ref={sectionRef} className="products-section" style={{ background: theme === 'dark' ? '#23272f' : '#fff', color: theme === 'dark' ? '#fff' : '#222', width: '100vw', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div className="container">
        <h2 style={{ color: theme === 'dark' ? '#b3cdf6' : '#174ea6' }}>Education</h2>
        <div style={{fontSize: '1.2rem', color: theme === 'dark' ? '#e0e6f1' : '#444', marginTop: '2rem', textAlign: 'center'}}>
          {/* Add your education details here */}
          <p>Bachelor of Technology in Electronics and Communication Engineering<br/>XYZ University, 2017-2021</p>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
