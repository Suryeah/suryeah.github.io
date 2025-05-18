import React, { useEffect, useRef } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return <div ref={sectionRef}><Projects /></div>;
};

export default ProjectsPage;
