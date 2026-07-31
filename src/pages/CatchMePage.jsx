import React, { useEffect, useRef } from 'react';
import Contact from '../components/Contact';

const CatchMePage = () => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return <div ref={sectionRef}><Contact /></div>;
};

export default CatchMePage;
